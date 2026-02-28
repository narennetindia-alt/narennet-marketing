import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, TrendingUp, Briefcase } from 'lucide-react';
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
  return <Icon size={24} className="text-brand-accent" />;
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
        // Fallback or general FAQs
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
    <div className="pt-40 pb-24">
      <div className="container-wide px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-8 text-gradient leading-tight"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-secondary leading-relaxed"
          >
            Choose the plan that fits your business stage. No hidden fees, just pure growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {isLoading ? (
            [1, 2, 3].map(i => <div key={i} className="h-96 rounded-[40px] bg-brand-card border border-brand-border animate-pulse" />)
          ) : plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative p-8 md:p-12 rounded-[40px] border flex flex-col card-glow ${plan.popular ? 'bg-brand-card border-brand-accent shadow-2xl shadow-brand-accent/10' : 'bg-brand-card border-brand-border'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8">
                  {getIcon(plan.icon)}
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">{plan.name}</h3>
                <p className="text-brand-secondary text-base font-light">{plan.description}</p>
              </div>

              <div className="mb-12">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tighter text-white">{plan.price}</span>
                  <span className="text-brand-secondary font-light">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-5 mb-14 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-sm font-light">
                    <Check size={20} className="text-brand-accent shrink-0" />
                    <span className="text-brand-primary text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-5 rounded-full font-bold text-center transition-all flex items-center justify-center gap-3 text-lg ${plan.popular ? 'bg-brand-accent text-white hover:bg-opacity-90 shadow-xl shadow-brand-accent/20' : 'bg-white/10 text-white border border-white/10 hover:bg-brand-accent hover:border-brand-accent shadow-xl'}`}
              >
                Choose Plan <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-40 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-white uppercase tracking-tighter">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xl font-bold text-white">{faq.question}</h4>
                <p className="text-brand-secondary leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
