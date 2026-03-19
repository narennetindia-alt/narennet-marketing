import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { 
  Check, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Briefcase, 
  HelpCircle, 
  Store, 
  Stethoscope, 
  ShieldCheck, 
  RefreshCw, 
  Users, 
  Clock,
  ChevronRight,
  Shield,
  HeadphonesIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface FAQ {
  question: string;
  answer: string;
}

type Industry = 'retail' | 'hospital' | 'business';

const pricingData = {
  retail: {
    title: 'Supermarkets',
    subtitle: 'Retail POS + SmartOS',
    description: 'Perfect for supermarkets, pharmacies, and department stores.',
    urgency: '⚡ Billing never stops even without internet',
    seoLink: { text: 'See Retail POS pricing India', href: '/pricing-retail-pos-india' },
    ctaLink: '/ecosystem/supermarkets',
    plans: [
      {
        name: 'Starter',
        price: '₹999',
        period: '/store/mo',
        description: 'Core billing for single store',
        features: ['Offline POS billing', 'Inventory Tracking', 'GST Invoicing', 'Daily Reports', 'WhatsApp Receipts'],
        popular: false
      },
      {
        name: 'Growth',
        price: '₹2,499',
        period: '/store/mo',
        description: 'AI-powered single store',
        features: ['Everything in Starter', 'AI Sales Insights', 'Customer Loyalty Engine', 'Advanced Inventory', 'Multi-user Access'],
        popular: true
      },
      {
        name: 'Pro',
        price: 'Custom',
        period: '',
        description: 'Multi-branch enterprise',
        features: ['Everything in Growth', 'SmartOS Full Suite', 'Multi-branch Sync', 'Cloud Admin Panel', 'Priority 24/7 Support'],
        popular: false
      }
    ]
  },
  hospital: {
    title: 'Hospitals',
    subtitle: 'Hospital Management SaaS',
    description: 'Cloud-native ecosystem for clinics and multispecialty hospitals.',
    urgency: '🏥 Manage complete hospital operations in one system',
    seoLink: { text: 'Hospital software pricing', href: '/hospital-management-software-pricing' },
    ctaLink: '/ecosystem/hospitals',
    plans: [
      {
        name: 'Basic',
        price: '₹4,999',
        period: '/mo',
        description: 'OPD & Patient Management',
        features: ['Patient Registration', 'Appointment System', 'Pharmacy Billing', 'Basic EMR', 'Staff Scheduling'],
        popular: false
      },
      {
        name: 'Advanced',
        price: '₹9,999',
        period: '/mo',
        description: 'Full Clinical Workflow',
        features: ['Everything in Basic', 'IPD Management', 'Lab Integration', 'Advanced Reports', 'Inventory Tracking'],
        popular: true
      },
      {
        name: 'Pro',
        price: 'Custom',
        period: '',
        description: 'Large Scale Ecosystem',
        features: ['Everything in Advanced', 'AI Diagnostic Insights', 'Full Hospital Ecosystem', 'Analytics Dashboard', 'API Access'],
        popular: false
      }
    ]
  },
  business: {
    title: 'Business Ecosystem',
    subtitle: 'ERP / CRM / HR Suite',
    description: 'Unified OS for manufacturing and service-based enterprises.',
    urgency: '🏢 Run your entire business from one platform',
    seoLink: { text: 'ERP pricing India', href: '/erp-software-pricing-india' },
    ctaLink: '/business-ecosystem',
    plans: [
      {
        name: 'Starter',
        price: '₹2,999',
        period: '/mo',
        description: 'Task & CRM for small teams',
        features: ['CRM Management', 'Task Tracking', 'Basic Leads Info', 'Employee Directory', 'Mobile App Access'],
        popular: false
      },
      {
        name: 'Growth',
        price: '₹5,999',
        period: '/mo',
        description: 'HR & Finance workflow',
        features: ['Everything in Starter', 'HR Management', 'Finance/Payroll', 'Advanced CRM', 'Custom Reports'],
        popular: true
      },
      {
        name: 'Pro',
        price: 'Custom',
        period: '',
        description: 'Full Autonomous ERP',
        features: ['Everything in Growth', 'Full AI ERP system', 'SmartOS Admin Panel', 'Supply Chain AI', 'System Customization'],
        popular: false
      }
    ]
  }
};

export default function Pricing() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>('retail');
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data } = await supabase
        .from('faqs')
        .select('question, answer')
        .eq('category', 'Pricing')
        .order('display_order', { ascending: true });

      if (data && data.length > 0) {
        setFaqs(data);
      } else {
        // Fallback pricing-specific FAQs for SEO
        setFaqs([
          {
            question: "Do you provide custom ERP solutions?",
            answer: "Yes, NarenNet specializes in building bespoke ERP systems tailored to specific business workflows that standard templates cannot handle."
          },
          {
            question: "Will you train our staff?",
            answer: "Absolutely. Every deployment includes 72 hours of hands-on staff training and a dedicated onboarding manager."
          },
          {
            question: "Does your POS work without internet?",
            answer: "Yes. Our Retail POS is offline-first. Billing continues locally and syncs to the cloud automatically once internet returns."
          },
          {
            question: "Can hospitals customize features?",
            answer: "Yes, our hospital ecosystem is modular. You can start with OPD and add IPD or Lab modules as your facility grows."
          },
          {
             question: "Is this suitable for growing companies?",
             answer: "SmartOS is designed to scale from single-outlet retail to multi-branch enterprises without changing your core software."
          }
        ]);
      }
    };
    fetchFaqs();
  }, []);

  const currentData = pricingData[activeIndustry];

  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen font-sans selection:bg-brand-accent/30 selection:text-brand-accent">
      <Helmet>
        <title>Pricing Plans for Retail, Hospital & ERP | NarenNet Technologies</title>
        <meta name="description" content="Explore flexible pricing for NarenNet SmartOS, Retail POS, and Hospital Management. Offline-first, AI-powered, and GST compliant software solutions for India." />
      </Helmet>

      {/* 1. HERO SECTION — PREMIUM DARK */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-brand-deep text-white text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 blur-[130px] rounded-full -z-10 opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="container-wide px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-brand-accent font-bold text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <TrendingUp size={14} />
            Built for Scalability
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tighter text-white"
          >
            Flexible Pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-indigo-400 to-white">Multi-Industry</span> Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12"
          >
            Choose your industry or get a fully customized AI-powered system built for your business.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="group w-full sm:w-auto bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all text-lg shadow-2xl shadow-brand-accent/30 flex items-center justify-center gap-3"
            >
              Get Custom Plan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://narennetstoredemo.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="group w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all text-lg flex items-center justify-center gap-3"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY SELECTOR TABS — STICKY */}
      <section className="sticky top-20 z-[50] bg-white/80 backdrop-blur-xl border-b border-brand-border py-4">
        <div className="container-wide px-6">
          <div className="flex items-center justify-center overflow-x-auto gap-2 md:gap-4 no-scrollbar">
            {(Object.keys(pricingData) as Industry[]).map((id) => (
              <button
                key={id}
                onClick={() => setActiveIndustry(id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all whitespace-nowrap shadow-sm border ${
                  activeIndustry === id 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
                  : 'bg-white text-brand-secondary border-brand-border hover:border-brand-accent/50'
                }`}
              >
                {id === 'retail' && <Store size={18} />}
                {id === 'hospital' && <Stethoscope size={18} />}
                {id === 'business' && <Briefcase size={18} />}
                {pricingData[id].title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING GRID SECTION */}
      <section className="py-24 bg-brand-card/20">
        <div className="container-wide px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4 tracking-tight">{currentData.title} Plans</h2>
            <p className="text-lg text-brand-secondary max-w-2xl mx-auto font-medium mb-6">{currentData.description}</p>
            <div className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold bg-red-50 text-red-600 border border-red-100 mb-8">
              {currentData.urgency}
            </div>
            <div className="block">
              <Link to={currentData.seoLink.href} className="text-brand-accent font-bold hover:underline flex items-center justify-center gap-1.5 group">
                {currentData.seoLink.text} <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {currentData.plans.map((plan, idx) => (
                <motion.div
                  key={`${activeIndustry}-${plan.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`group relative p-10 md:p-14 rounded-[48px] border-2 flex flex-col transition-all duration-300 ${
                    plan.popular 
                    ? 'bg-brand-deep text-white border-brand-accent scale-105 z-10 shadow-2xl shadow-brand-accent/20' 
                    : 'bg-white border-brand-border text-brand-primary hover:border-brand-accent/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-brand-accent/30">
                      Recommended
                    </div>
                  )}

                  <div className="mb-10 text-center">
                    <h3 className={`text-2xl font-bold mb-4 tracking-tight ${plan.popular ? 'text-white' : 'text-brand-primary'}`}>{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-bold tracking-tighter ${plan.popular ? 'text-white' : 'text-brand-primary'}`}>{plan.price}</span>
                      <span className={`text-sm font-bold ${plan.popular ? 'text-white/40' : 'text-brand-secondary'}`}>{plan.period}</span>
                    </div>
                    <p className={`mt-4 text-sm font-medium ${plan.popular ? 'text-white/60' : 'text-brand-secondary'}`}>{plan.description}</p>
                  </div>

                  <ul className="space-y-5 mb-12 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-sm font-bold">
                        <div className={`mt-0.5 rounded-full p-1.5 ${plan.popular ? 'bg-brand-accent/20' : 'bg-brand-accent/10'}`}>
                          <Check size={12} className="text-brand-accent" strokeWidth={4} />
                        </div>
                        <span className={plan.popular ? 'text-white/90' : 'text-brand-secondary'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === 'Pro' ? '/contact' : currentData.ctaLink}
                    className={`w-full py-5 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-3 text-base shadow-xl ${
                      plan.popular 
                      ? 'bg-brand-accent text-white hover:brightness-110 shadow-brand-accent/30' 
                      : 'bg-brand-primary text-white hover:bg-brand-deep'
                    }`}
                  >
                    {plan.name === 'Pro' ? 'Get Custom Quote' : (activeIndustry === 'retail' ? 'View Retail Demo' : (activeIndustry === 'hospital' ? 'View Hospital Demo' : 'View Business Demo'))} <ArrowRight size={18} />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM SOLUTION BLOCK — CORE DIFFERENTIATOR */}
      <section className="py-32 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        <div className="container-wide px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-6 block">Specialized Software Delivery</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tighter">Built Around Your Business — <span className="text-brand-accent">Not Templates</span></h2>
              <p className="text-xl text-white/70 mb-10 font-medium leading-relaxed">
                We don’t sell generic software boxes. We build industrial-grade AI systems that solve real, messy business problems. 
              </p>
              <div className="space-y-6 mb-12">
                {[
                  'Deep business operation analysis',
                  'Identification of core bottleneck problems',
                  'Customized SmartOS intelligence layer',
                  '72-hour on-site staff training',
                  'Continuous 24/7 technical support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xs">{i+1}</div>
                    <span className="text-lg font-bold text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-2xl font-black italic mb-12 text-blue-300">"We don’t sell software. We build systems that solve real business problems."</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/30 text-center">Talk to Expert</Link>
                <Link to="/contact" className="border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center">Get Custom Solution</Link>
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: <Users size={24} />, title: 'Staff Training', desc: 'Included with every plan' },
                    { icon: <Zap size={24} />, title: '72hr Setup', desc: 'Zero downtime deployment' },
                    { icon: <Shield size={24} />, title: 'Offline-First', desc: '99.7% operational uptime' },
                    { icon: <HeadphonesIcon size={24} />, title: 'Dedicated Help', desc: '24/7 Priority support' },
                  ].map((badge, k) => (
                    <div key={k} className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/40 transition-colors">
                      <div className="text-brand-accent mb-4">{badge.icon}</div>
                      <h4 className="font-bold text-white mb-2">{badge.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-bold">{badge.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST SIGNALS SECTION */}
      <section className="py-24 bg-brand-card">
        <div className="container-wide px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="text-brand-accent" />, title: 'Expert Training', text: 'On-site staff guidance' },
              { icon: <Clock className="text-brand-accent" />, title: 'Swift Onboarding', text: 'Ready in 72 hours' },
              { icon: <ShieldCheck className="text-brand-accent" />, title: 'Enterprise Security', text: 'Data sovereignty first' },
              { icon: <RefreshCw className="text-brand-accent" />, title: 'Auto Sync', text: 'Offline-first reliability' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-brand-border hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6">{item.icon}</div>
                <h4 className="font-bold text-brand-primary mb-2">{item.title}</h4>
                <p className="text-sm text-brand-secondary font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION — SEO BOOST */}
      <section className="py-32 bg-white">
        <div className="container-wide px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-4 block">Pricing Knowledge</span>
              <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tighter">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-12">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="group pb-12 border-b border-brand-border last:border-0"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center shrink-0 mt-1">
                       <HelpCircle className="text-brand-accent" size={20} />
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-brand-primary leading-tight tracking-tight">{faq.question}</h4>
                      <p className="text-brand-secondary text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL SEO INTERNAL LINKS FOOTER LIGHT */}
      <section className="py-12 bg-brand-card/50 border-t border-brand-border">
        <div className="container-wide px-6 text-center">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
               <Link to="/pricing-retail-pos-india" className="text-gray-500 hover:text-brand-accent text-xs font-bold uppercase tracking-widest">Retail POS Pricing India</Link>
               <Link to="/hospital-management-software-pricing" className="text-gray-500 hover:text-brand-accent text-xs font-bold uppercase tracking-widest">Hospital Software Pricing</Link>
               <Link to="/erp-software-pricing-india" className="text-gray-500 hover:text-brand-accent text-xs font-bold uppercase tracking-widest">ERP Pricing India</Link>
            </div>
        </div>
      </section>
    </div>
  );
}
