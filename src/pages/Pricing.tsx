import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, TrendingUp, Briefcase, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: string;
  features: string[];
  popular: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.Briefcase;
  return <Icon size={28} className="text-brand-accent" />;
};

export default function Pricing() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: plansData } = await supabase
        .from('services')
        .select('*')
        .eq('type', 'plan')
        .eq('active', true)
        .order('price', { ascending: true });

      const { data: faqsData } = await supabase
        .from('faqs')
        .select('question, answer')
        .eq('category', 'Pricing')
        .order('display_order', { ascending: true });

      if (plansData) {
        setPlans(plansData.map((p: any) => ({
          id: p.id,
          name: p.title,
          description: p.description,
          price: p.price,
          period: p.price.toLowerCase().includes('custom') ? '' : '/month',
          icon: p.icon,
          features: p.features || [],
          popular: p.title.toLowerCase().includes('growth')
        })));
      }

      if (faqsData && faqsData.length > 0) {
        setFaqs(faqsData);
      } else {
        const { data: generalFaqs } = await supabase
          .from('faqs')
          .select('question, answer')
          .limit(4);
        if (generalFaqs) setFaqs(generalFaqs);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 blur-[130px] rounded-full -z-10 opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="container-wide px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-mono text-xs uppercase tracking-widest mb-8"
          >
            <Zap size={14} className="fill-brand-accent" />
            Flexible Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-white"
          >
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Pricing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            Choose the plan that fits your business stage. From startups to enterprises, we scale with you.
          </motion.p>
        </div>
      </section>

      {/* 2. PRICING GRID — LIGHT */}
      <section className="py-24 bg-brand-bg">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {isLoading ? (
              [1, 2, 3].map(i => <div key={i} className="h-[600px] rounded-[48px] bg-brand-card border border-brand-border animate-pulse" />)
            ) : plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative p-10 md:p-14 rounded-[48px] border flex flex-col transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'bg-brand-deep text-white border-brand-accent border-2 scale-105 z-10 shadow-xl shadow-brand-accent/10' : 'bg-white border-brand-border text-brand-primary'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-brand-accent/30">
                    Most Popular
                  </div>
                )}

                <div className="mb-12">
                  <div className={`w-18 h-18 rounded-3xl flex items-center justify-center mb-10 ${plan.popular ? 'bg-brand-accent/20 border border-brand-accent/40' : 'bg-brand-accent/10 border border-brand-accent/20'}`}>
                    {getIcon(plan.icon)}
                  </div>
                  <h3 className={`text-3xl font-black mb-4 tracking-tight ${plan.popular ? 'text-white' : 'text-brand-primary'}`}>{plan.name}</h3>
                  <p className={`text-lg font-light leading-relaxed ${plan.popular ? 'text-white/60' : 'text-brand-secondary'}`}>{plan.description}</p>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-6xl font-black tracking-tighter ${plan.popular ? 'text-white' : 'text-brand-primary'}`}>{plan.price}</span>
                    <span className={`font-medium ${plan.popular ? 'text-white/40' : 'text-brand-secondary'}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-6 mb-16 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-sm font-semibold">
                      <div className={`mt-0.5 rounded-full p-1 ${plan.popular ? 'bg-brand-accent/20' : 'bg-brand-accent/10'}`}>
                        <Check size={14} className="text-brand-accent" strokeWidth={4} />
                      </div>
                      <span className={plan.popular ? 'text-white/80' : 'text-brand-secondary'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-6 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 text-lg shadow-xl ${plan.popular ? 'bg-brand-accent text-white hover:brightness-110 shadow-brand-accent/30' : 'bg-brand-primary text-white hover:bg-brand-deep'}`}
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION — LIGHT GRAY */}
      <section className="py-32 bg-brand-card/30 border-t border-brand-border">
        <div className="container-wide px-6">
          <div className="text-center mb-24">
            <span className="text-brand-accent font-mono text-sm uppercase tracking-widest font-bold mb-4 block">Information</span>
            <h2 className="text-5xl md:text-6xl font-black text-brand-primary tracking-tighter">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-4 group"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="text-brand-accent shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-brand-primary leading-tight tracking-tight">{faq.question}</h4>
                    <p className="text-brand-secondary text-lg leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FINAL PRICING CTA */}
          <div className="mt-40 text-center">
            <div className="max-w-3xl mx-auto p-12 rounded-[40px] bg-brand-deep text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />
               <h3 className="text-3xl font-black mb-6 relative z-10">Need a custom enterprise solution?</h3>
               <p className="text-white/60 text-lg mb-10 font-light relative z-10">We build bespoke software ecosystems for large scale organizations with complex requirements.</p>
               <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-brand-accent text-white px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all text-lg shadow-xl shadow-brand-accent/20"
               >
                 Contact Enterprise Team <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
