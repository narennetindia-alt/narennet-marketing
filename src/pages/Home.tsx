import { motion } from 'motion/react';
import {
  ArrowRight,
  CreditCard,
  LayoutDashboard,
  BarChart3,
  Zap,
  ShieldCheck,
  Trophy,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  Plus,
  Minus,
  ChevronDown,
  Binary,
  Store,
  Utensils,
  Globe,
  Cpu,
  Code2,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const partners = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Stripe', 'Spotify'
];

const features = [
  {
    title: 'SmartOS Suite',
    description: 'AI-powered ERP, CRM, and HR system for enterprise-grade management.',
    icon: <Binary className="text-brand-accent" />,
    size: 'col-span-1 md:col-span-2 row-span-1',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Retail POS',
    description: 'Smart billing, barcode, and theft detection for modern stores.',
    icon: <Store className="text-brand-accent" />,
    size: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'AI eCommerce',
    description: 'Instant AI store builder with automated SEO and marketing.',
    icon: <Globe className="text-brand-accent" />,
    size: 'col-span-1 row-span-1',
    image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Security & Cloud',
    description: 'Enterprise-grade protection, firewall hardening, and server deployment.',
    icon: <ShieldCheck className="text-brand-accent" />,
    size: 'col-span-1 md:col-span-2 row-span-1',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your current business operations and identify pain points.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our team designs a custom software ecosystem tailored to your needs.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We deploy the systems and provide comprehensive training for your staff.'
  },
  {
    number: '04',
    title: 'Growth',
    description: 'Continuous optimization and AI-driven insights to scale your business.'
  }
];

interface FAQ {
  question: string;
  answer: string;
}

interface AccordionProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-accent transition-colors text-white"
      >
        <span className="text-xl font-bold">{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-brand-secondary leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data } = await supabase
        .from('faqs')
        .select('question, answer')
        .order('display_order', { ascending: true });
      if (data) setFaqs(data);
    };
    fetchFaqs();
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg text-white">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            SOFTWARE
          </div>
        </div>

        <div className="container-wide px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-16 top-4 text-brand-accent/60 font-mono text-lg hidden xl:block"
            >
              01.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[14vw] md:text-[12vw] lg:text-[7vw] font-bold leading-[0.8] md:leading-[0.85] tracking-tighter uppercase mb-12 text-white"
            >
              Testing <br />
              The <br />
              Software <br />
              For Your <br />
              <span className="text-brand-accent">Business</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <span className="text-brand-secondary text-lg font-medium group-hover:text-brand-accent transition-colors">Services</span>
                <div className="w-5 h-5 rounded-full border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                  <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform" />
                </div>
              </div>

              <Link
                to="/contact"
                className="group relative flex items-center bg-brand-accent text-white pl-8 pr-2 py-2 rounded-2xl overflow-hidden hover:pr-4 transition-all duration-300 shadow-xl shadow-brand-accent/20"
              >
                <span className="font-bold uppercase tracking-widest text-sm mr-6">Get in touch</span>
                <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center">
            {/* 3D Sphere Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[450px] aspect-square rounded-full bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-border flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-brand-border animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-brand-border animate-spin-slow" />

              {/* Maze Pattern Simulation */}
              <div className="w-3/4 h-3/4 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-full" />

              {/* Floating Bubbles */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-md border border-brand-border shadow-sm"
              />
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-12 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-brand-border shadow-sm"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-brand-border shadow-sm"
              />
            </motion.div>

            {/* Widgets */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-10 right-0 w-48 p-4 bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-brand-secondary font-bold">Analysis...</span>
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              </div>
              <div className="h-12 flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), repeat: Infinity, repeatType: 'reverse' }}
                    className="flex-1 bg-brand-accent/20 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 right-4 w-64 p-6 bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-brand-secondary font-bold">Testing...</span>
                <span className="text-[10px] text-brand-accent font-mono">v2.4.0</span>
              </div>
              <div className="space-y-2 font-mono text-[10px] text-brand-secondary">
                <p className="text-brand-accent">// Initialize starting index</p>
                <p>end = block_size - 1</p>
                <p className="text-brand-accent">// Initialize ending index</p>
                <p>start = 0</p>
                <p>---</p>
                <p>Function sort(length(array)) //</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 border-y border-brand-border overflow-hidden">
        <div className="mask-fade">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {[...partners, ...partners].map((partner, idx) => (
              <span key={idx} className="text-4xl font-display font-bold text-brand-secondary/30 hover:text-brand-accent transition-colors cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">What we do</h2>
              <p className="text-brand-secondary text-lg md:text-xl font-light leading-relaxed">
                We provide a comprehensive suite of tools designed to automate your business and drive growth.
              </p>
            </div>
            <Link to="/solutions" className="text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
              View all solutions <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${feature.size} p-10 rounded-[40px] bg-brand-card border border-brand-border card-glow group relative overflow-hidden flex flex-col justify-end min-h-[300px]`}
              >
                <img
                  src={(feature as any).image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/80 to-transparent" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-brand-secondary text-lg leading-relaxed font-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-card/30 border-y border-brand-border">
        <div className="container-wide">
          <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center text-white">Our process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-8xl font-display font-bold text-brand-accent/5 absolute -top-10 -left-4">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-white">{step.title}</h3>
                  <p className="text-brand-secondary leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-white">FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="p-10 md:p-20 rounded-[40px] md:rounded-[60px] bg-gradient-to-br from-brand-accent to-blue-700 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-10 text-white">Ready to start?</h2>
              <p className="text-white/80 text-xl max-w-2xl mx-auto mb-14 font-light">
                Join the smart ecosystem and transform your business operations today.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20">
                Get in touch <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

