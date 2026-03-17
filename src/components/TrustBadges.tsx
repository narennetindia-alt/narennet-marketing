import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  "Enterprise Healthcare Client",
  "UK-Based Hospital Group",
  "Leading Healthcare Network",
  "European Private Care",
  "Global Medical Network",
];

const caseStudies: Record<string, { industry: string; problem: string; solution: string; results: string[]; testimonial: string; }> = {
  "Enterprise Healthcare Client": {
    industry: "Healthcare",
    problem: "Managing multiple hospital operations manually",
    solution: "Implemented ERP + CRM system with automation",
    results: [
      "35% efficiency boost",
      "Centralized data system",
      "Reduced manual errors"
    ],
    testimonial: "NarenNet transformed our operations seamlessly."
  },
  "UK-Based Hospital Group": {
    industry: "Healthcare",
    problem: "Inefficient patient and workflow tracking",
    solution: "Custom CRM with automation tools",
    results: [
      "40% less manual work",
      "Faster response time",
      "Better data tracking"
    ],
    testimonial: "Highly reliable and scalable solution."
  },
  "Leading Healthcare Network": {
    industry: "Healthcare",
    problem: "Fragmented communication across departments",
    solution: "Unified communication and ERP platform",
    results: [
      "50% faster communication",
      "Eliminated data silos",
      "Streamlined workflows"
    ],
    testimonial: "A game-changer for our hospital network."
  },
  "European Private Care": {
    industry: "Healthcare",
    problem: "Outdated billing and patient management",
    solution: "Modern billing API and Patient App",
    results: [
      "99% billing accuracy",
      "Improved patient experience",
      "Automated invoicing"
    ],
    testimonial: "The modern upgrade our facilities needed."
  },
  "Global Medical Network": {
    industry: "Healthcare",
    problem: "Difficulty in managing large-scale inventory",
    solution: "AI-driven inventory & supply chain management",
    results: [
      "30% cost reduction",
      "Predictive restocking",
      "Zero stockouts"
    ],
    testimonial: "Incredible AI capabilities for supply chain."
  }
};

const metrics = [
  { value: 50, suffix: '+', label: 'Clients' },
  { value: 10, suffix: '+', label: 'Industries' },
  { value: 95, suffix: '%', label: 'Satisfaction' }
];

// Simple Counter component for subtle count-up effect
function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function TrustBadges() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCompany(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-y border-brand-border">
      {/* Background gradients/blur shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container-wide relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Trusted by Leading Organizations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-secondary font-light"
          >
            Powering businesses across healthcare, enterprise, and AI-driven solutions
          </motion.p>
        </div>

        {/* Logo Strip Section */}
        <div className="mb-16">
          <div className="mask-fade relative group flex overflow-hidden">
            {/* The infinite marquee container */}
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 md:gap-8 items-center py-6 w-max">
              {[...companies, ...companies, ...companies, ...companies].map((company, idx) => (
                <div 
                  key={idx} 
                  className="relative group/badge cursor-pointer"
                  onClick={() => setSelectedCompany(company)}
                >
                  <div className="px-8 py-5 md:px-10 md:py-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 md:group-hover/badge:scale-105 group-hover/badge:border-white/20 group-hover/badge:bg-white/10 group-hover/badge:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <span className="text-lg md:text-xl font-display font-medium text-brand-secondary group-hover/badge:text-white transition-colors">
                      {company}
                    </span>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/badge:opacity-100 transition-all duration-300 pointer-events-none scale-95 group-hover/badge:scale-100 z-10">
                    <div className="bg-brand-card/90 backdrop-blur-md border border-brand-border px-4 py-2 rounded-lg text-xs md:text-sm text-brand-secondary whitespace-nowrap shadow-xl">
                      CRM & ERP Solutions Delivered
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Extra Line below badges */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-24"
        >
          <p className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide text-white bg-brand-accent/20 px-8 py-4 rounded-full border border-brand-accent/30 shadow-[0_0_20px_rgba(var(--brand-accent-rgb),0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
            Helping organizations scale with AI-powered systems
          </p>
        </motion.div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto px-6">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center justify-center p-8 md:p-10 rounded-[32px] bg-brand-card/40 border border-brand-border backdrop-blur-sm relative overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter flex items-center">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm md:text-base tracking-[0.2em] uppercase text-brand-secondary/80 font-bold">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCompany && caseStudies[selectedCompany] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCompany(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-card border border-brand-border rounded-[32px] shadow-2xl hide-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCompany(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-brand-secondary hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8 pr-12 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">
                    Case Study
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedCompany}</h3>
                  <p className="text-brand-secondary text-lg">{caseStudies[selectedCompany].industry}</p>
                </div>

                {/* Content grid */}
                <div className="space-y-8">
                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-brand-secondary leading-relaxed">
                        {caseStudies[selectedCompany].problem}
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
                      <h4 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-3">Our Solution</h4>
                      <p className="text-white leading-relaxed">
                        {caseStudies[selectedCompany].solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 text-center md:text-left">Key Results</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {caseStudies[selectedCompany].results.map((result, idx) => (
                        <li key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                          <CheckCircle2 className="text-brand-accent shrink-0" size={28} />
                          <span className="text-white font-medium text-sm md:text-base leading-snug">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 text-center mt-8">
                    <p className="text-xl md:text-2xl font-light text-white italic relative z-10">
                      "{caseStudies[selectedCompany].testimonial}"
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
                    <button 
                      className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-medium transition-colors w-full sm:w-auto"
                      onClick={() => {
                        // In a real app, this would open a video modal or redirect
                        alert("Play Video Preview");
                      }}
                    >
                      <PlayCircle size={20} className="text-brand-accent group-hover:scale-110 transition-transform" />
                      Watch Implementation Preview
                    </button>
                    
                    <Link
                      to="/contact"
                      onClick={() => setSelectedCompany(null)}
                      className="group flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors shadow-lg shadow-brand-accent/20 w-full sm:w-auto"
                    >
                      Get Similar Solution <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
