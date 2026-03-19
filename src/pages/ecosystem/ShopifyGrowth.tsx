import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  AlertCircle,
  Layout,
  Search,
  CreditCard,
  Gauge,
  Database,
  Activity,
  BarChart3,
  MousePointer2,
  Lock
} from 'lucide-react';
import EcosystemLegacyMockup from '../../components/mockups/EcosystemLegacyMockup';
import DashboardMockup from '../../components/mockups/DashboardMockup';
import RetailSyncMockup from '../../components/mockups/RetailSyncMockup';
import PharmaEcosystemMockup from '../../components/mockups/PharmaEcosystemMockup';
import BrandGrowthMockup from '../../components/mockups/BrandGrowthMockup';
import MobileEcosystemMockup from '../../components/mockups/MobileEcosystemMockup';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import CTASection from '../../components/ecosystem/CTASection';
import LeadCaptureModal from '../../components/LeadCaptureModal';

export default function ShopifyGrowth() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const problems = [
    { title: 'Poor UI/UX', desc: 'Cluttered layouts and confusing navigation that drive customers away.', icon: Layout },
    { title: 'Payment Failures', desc: 'High drop-off rates due to gateway issues and lack of local payment options.', icon: CreditCard },
    { title: 'No Trust Signals', desc: 'Missing trust badges and social proof that make buyers hesitate.', icon: ShieldCheck },
    { title: 'No SEO Traffic', desc: 'Hidden from search results, forcing you to rely solely on expensive ads.', icon: Search },
    { title: 'Slow Speed', desc: 'Every second of delay costs you sales. Most Shopify themes are heavy.', icon: Gauge }
  ];

  const ecosystemFeatures = [
    {
      title: 'Conversion-Focused Storefront',
      description: 'We build high-performance Shopify stores optimized for maximum sales and premium customer experience.',
      icon: MousePointer2,
      features: ['Landing Page Optimization', 'Mobile-First Design', 'A/B Tested Layouts']
    },
    {
      title: 'Custom Admin & ERP',
      description: 'Take full control with an eCommerce admin panel software that manages inventory, orders, and staff across branches.',
      icon: Database,
      features: ['Inventory Synchronization', 'Branch Management', 'Retail ERP Integration']
    },
    {
      title: 'Business Automation',
      description: 'Automate your retail operations, from WhatsApp order verification to automated abandoned cart recovery.',
      icon: Zap,
      features: ['WhatsApp Automation', 'Automated Logistics', 'Retail Workflow Logic']
    },
    {
      title: 'Performance SEO & Scale',
      description: 'Rank for high-intent keywords to get free traffic that converts into long-term loyal customers.',
      icon: TrendingUp,
      features: ['Technical SEO Audit', 'Keyword Strategy', 'Product Page SEO']
    }
  ];

  const results = [
    { title: 'Better Conversions', desc: 'Watch your conversion rate climb as we fix the friction points.' },
    { title: 'More SEO Traffic', desc: 'Stop relying on ads and start getting organic buyers.' },
    { title: 'Smooth Checkout', desc: 'Fewer abandoned carts with a streamlined payment flow.' },
    { title: 'Increased Trust', desc: 'Build local authority with trust badges and verified reviews.' }
  ];

  const pricing = [
    {
      name: 'Optimized Store',
      price: '₹7,500',
      description: 'Perfect for established stores needing a conversion and SEO overhaul.',
      features: ['Store Audit & Fixes', 'Precision SEO Setup', 'Speed Optimization', 'WhatsApp Growth Audit']
    },
    {
      name: 'Ecosystem Build',
      price: '₹15,000 - ₹25,000',
      description: 'The complete system: Store + Custom Admin + Automation for scaling brands.',
      features: ['Conversion Redesign', 'Custom Admin Panel', 'Retail ERP Integration', 'WhatsApp Automation', '24/7 Priority Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom eCommerce Development & Shopify Ecosystem Builder | NarenNet</title>
        <meta name="description" content="Scale your retail brand with a complete eCommerce ecosystem. We build custom online stores, admin panel software, and scalable eCommerce platforms with business automation." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "eCommerce Ecosystem & Shopify Growth",
              "provider": {
                "@type": "Organization",
                "name": "NarenNet"
              },
              "description": "Comprehensive eCommerce ecosystem development including custom admin panels, Shopify optimization, and business automation.",
              "areaServed": "Global",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "eCommerce Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Development & SEO"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom eCommerce Admin Panels"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Automation for Retail"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-brand-bg text-brand-primary selection:bg-brand-accent/30 selection:text-brand-accent pb-20">
        <Navbar />

        {/* HERO SECTION */}
        <HeroSection
          badge="Upgrade to a Scalable eCommerce Ecosystem"
          title="Beyond Shopify: Building High-Performance Retail Engines"
          subtitle="Stop Managing Just a Store. Start Running Your Business with Automation."
          description="We specialize in custom eCommerce development and business automation. From high-converting Shopify stores to scalable eCommerce platforms with custom admin panels, we build the system that fuels your growth."
          primaryCta="Build Your Ecosystem"
          primaryCtaLink="#audit"
          secondaryCta="Watch Demo"
          secondaryCtaLink="#action"
        >
          <div className="max-w-7xl mx-auto mt-16 px-6">
             <div className="relative rounded-[40px] overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(14,165,233,0.15)] bg-slate-950 aspect-[16/8] lg:aspect-[21/9] group">
                <EcosystemLegacyMockup />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                
                {/* Overlaid Floaties for Context */}
                <div className="absolute bottom-8 left-8 flex gap-4">
                   {[
                     { label: 'Revenue Growth', value: '+45%', color: 'text-emerald-400' },
                     { label: 'Efficiency', value: '+70%', color: 'text-brand-accent' }
                   ].map((s, i) => (
                      <div key={i} className="px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                         <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{s.label}</div>
                         <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </HeroSection>

        {/* SOLUTION SECTION */}
        <FeatureCards 
          title="Everything You Need to Scale"
          subtitle="Our data-driven ecosystem approach focuses on conversion, automation, and long-term organic growth."
          features={ecosystemFeatures}
        />

        {/* OUR SYSTEM IN ACTION SECTION */}
        <section id="action" className="py-24 bg-brand-deep text-white overflow-hidden">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight">Our System in <span className="text-brand-accent">Action</span></h2>
              <p className="text-lg text-slate-300">Experience the power of a fully integrated eCommerce ecosystem designed for retail leaders.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Admin Panel Software',
                  desc: 'Complete control over inventory, orders, and staff performance with real-time data sync.',
                  component: <DashboardMockup />,
                  badge: 'Backend Control'
                },
                {
                  title: 'High-Converting Store',
                  desc: 'Mobile-first storefronts designed to maximize LTV and minimize acquisition costs.',
                  component: <MobileEcosystemMockup />,
                  badge: 'Frontend Excellence'
                },
                {
                  title: 'Growth Analytics',
                  desc: 'Deep insights into revenue attribution, customer behavior, and retail profitability.',
                  component: <EcosystemLegacyMockup />,
                  badge: 'Intelligence'
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden group hover:border-brand-accent/50 transition-all flex flex-col h-full"
                >
                  <div className="p-10 pb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <div className="mt-auto aspect-[4/3] relative bg-brand-bg/5 backdrop-blur-md border-t border-white/10 overflow-hidden transform group-hover:scale-[1.05] transition-transform duration-700">
                     {item.component}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-24 bg-brand-bg">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6 italic tracking-tighter">Legacy <span className="text-brand-accent">vs.</span> Ecosystem</h2>
              <p className="text-lg text-brand-secondary font-medium">Why settle for a store when you can have a business engine?</p>
            </div>
            
            <div className="max-w-5xl mx-auto bg-white border border-brand-border rounded-[48px] overflow-hidden shadow-[0_32px_80px_rgba(11,31,58,0.08)]">
               <div className="grid grid-cols-3 bg-brand-deep text-white p-10 font-black uppercase tracking-[0.2em] text-[10px]">
                  <div>System Architecture</div>
                  <div className="text-center opacity-40">Traditional Setup</div>
                  <div className="text-center text-brand-accent">NarenNet Ecosystem</div>
               </div>
               <div className="divide-y divide-brand-border">
                  {[
                    { f: 'Customization', s: 'Limited to Theme', e: 'Unlimited / Logic-First' },
                    { f: 'Business Automation', s: 'Manual Apps', e: 'Deep Native Workflows' },
                    { f: 'Scalability', s: 'Performance Bottlenecks', e: 'Distributed Architecture' },
                    { f: 'Multi-Branch Sync', s: 'External Tools', e: 'Unified ERP Logic' },
                    { f: 'Customer LTV', s: 'Disconnected Data', e: 'Data-Driven Retention' }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 p-10 items-center hover:bg-brand-card transition-all group">
                       <div className="font-black text-brand-primary text-sm uppercase tracking-wider">{row.f}</div>
                       <div className="text-center text-brand-secondary text-sm font-medium">{row.s}</div>
                       <div className="text-center font-bold text-brand-accent flex items-center justify-center gap-3">
                          <CheckCircle2 size={18} className="drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]" /> {row.e}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* USE CASE SECTION */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-card skew-x-[-12deg] translate-x-1/2 -z-1" />
          
          <div className="container-wide px-6 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-24">
                <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-4 block">Vertical Excellence</span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-6 tracking-tighter italic">World-Class <span className="text-brand-accent italic font-black">Solutions</span></h2>
                <p className="text-lg text-brand-secondary font-bold">Precision-engineered ecosystems for industries that demand the absolute best.</p>
             </div>

             <div className="space-y-40">
                {[
                  {
                    title: 'Supermarkets & Hyperlocals',
                    problem: 'Disconnected POS and online inventory leading to overselling and operational chaos.',
                    solution: 'Real-time bidirectional inventory sync between physical storefronts and the Shopify ecosystem.',
                    result: '99.9% Stock Accuracy',
                    mockup: <RetailSyncMockup />,
                    reversed: false
                  },
                  {
                    title: 'Hospitals & Pharmacy Chains',
                    problem: 'Fragmented patient data and manual prescription verification leading to delays.',
                    solution: 'HIPAA-aligned D2C ecosystem with automated AI-driven prescription verification logic.',
                    result: '70% Ops Efficiency',
                    mockup: <PharmaEcosystemMockup />,
                    reversed: true
                  },
                  {
                    title: 'Premium Retail Brands',
                    problem: 'Exploding CAC and declining customer LTV in a generic storefront environment.',
                    solution: 'High-LTV growth engine with personalized loyalty micro-services and logic-first checkout.',
                    result: '1.5x AOV Growth',
                    mockup: <BrandGrowthMockup />,
                    reversed: false
                  }
                ].map((useCase, i) => (
                  <div key={i} className={`flex flex-col ${useCase.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                    <div className="flex-1 space-y-10">
                       <h3 className="text-3xl md:text-5xl font-black text-brand-primary leading-tight tracking-tighter">{useCase.title}</h3>
                       <div className="space-y-8">
                          <div className="relative pl-8 border-l-2 border-rose-200">
                             <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <AlertCircle size={14} /> Critical Problem
                             </h4>
                             <p className="text-brand-primary font-bold text-lg leading-relaxed">{useCase.problem}</p>
                          </div>
                          <div className="relative pl-8 border-l-2 border-emerald-200">
                             <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <CheckCircle2 size={14} /> Ecosystem Solution
                             </h4>
                             <p className="text-brand-primary font-bold text-lg leading-relaxed">{useCase.solution}</p>
                          </div>
                          <div className="pt-6 flex items-baseline gap-4 group">
                             <div className="text-5xl font-black text-brand-accent group-hover:scale-110 transition-transform">{useCase.result.split(' ')[0]}</div>
                             <div className="text-xs font-black text-brand-secondary uppercase tracking-[0.2em]">{useCase.result.split(' ').slice(1).join(' ')}</div>
                          </div>
                       </div>
                    </div>
                    <div className="flex-1 w-full aspect-video bg-slate-950 rounded-[48px] border border-brand-border/20 shadow-[0_50px_100px_rgba(11,31,58,0.15)] overflow-hidden relative group">
                        <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        {useCase.mockup}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 bg-brand-card border-y border-brand-border">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4 block">The Workflow</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-6">Execution & <span className="text-brand-accent">Precision</span></h2>
              <p className="text-lg text-brand-secondary font-medium">A structured, data-backed process ensuring excellence at every milestone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: '01', title: 'Consultation', desc: 'Deep dive into your retail goals and ecosystem audit.' },
                { step: '02', title: 'Architecture', desc: 'Designing your store, admin, and automation logic.' },
                { step: '03', title: 'Development', desc: 'Building your high-performance ecosystem on Shopify/Custom.' },
                { step: '04', title: 'Deployment', desc: 'Rigorous testing followed by a seamless go-live transition.' }
              ].map((item, i) => (
                <div key={i} className="relative group">
                   <div className="text-7xl font-black text-brand-accent/5 absolute -top-8 -left-4 group-hover:text-brand-accent/10 transition-colors pointer-events-none">{item.step}</div>
                   <div className="relative pt-4">
                      <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                      <p className="text-brand-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section className="py-24 bg-brand-deep text-white border-b border-white/5">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What You’ll Get in 30 Days</h2>
              <p className="text-slate-300 text-lg">We don't just build stores; we build revenue machines.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-colors">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{result.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{result.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE AUDIT SECTION (LEAD MAGNET) */}
        <section id="audit" className="py-24 bg-white">
          <div className="container-wide px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 leading-tight">
                  Get a Free <br />
                  <span className="text-brand-accent">Shopify Store Audit</span>
                </h2>
                <div className="space-y-6 mb-12">
                   {[
                     { t: 'What’s wrong', d: 'Identify technical errors and UI bottlenecks.' },
                     { t: 'Why sales are low', d: 'Analyzing user behavior and friction points.' },
                     { t: 'What to fix', d: 'Actionable steps to increase your conversion rate.' }
                   ].map(f => (
                     <div key={f.t} className="flex gap-4">
                        <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
                        <div>
                           <h4 className="font-bold text-brand-primary">{f.t}</h4>
                           <p className="text-brand-secondary text-sm">{f.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="p-8 bg-brand-card rounded-[32px] border border-brand-border">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary">Limited Availability</h4>
                      <p className="text-sm text-brand-secondary font-medium">We only take 5 stores per week to ensure quality.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full" />
                {!isSuccess ? (
                  <form onSubmit={handleAuditSubmit} className="relative bg-white border border-brand-border p-10 rounded-[40px] shadow-2xl space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">Name</label>
                        <input required type="text" placeholder="Your Name" className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-4 text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-accent/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">Store URL</label>
                        <input required type="url" placeholder="https://yourstore.myshopify.com" className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-4 text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-accent/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">Phone / Email</label>
                        <input required type="text" placeholder="Contact Details" className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-4 text-brand-primary placeholder:text-brand-secondary/40 focus:outline-none focus:border-brand-accent/50 transition-colors" />
                      </div>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-brand-accent text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-brand-accent/20"
                    >
                      {isSubmitting ? 'Analyzing...' : <>Request Free Audit <ArrowRight size={20} /></>}
                    </button>
                    <p className="text-center text-[10px] text-brand-secondary font-bold uppercase tracking-widest">No Commitment Required</p>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative bg-white border border-brand-border p-16 rounded-[40px] shadow-2xl text-center"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-primary mb-4">Waitlist Reserved!</h3>
                    <p className="text-brand-secondary mb-8">Our Shopify expert will reach out to you within 24 hours to begin your manual audit.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-brand-accent font-bold hover:underline">Send another request</button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-24 bg-brand-bg border-b border-brand-border">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-4 block">Pricing</span>
              <h2 className="text-3xl md:text-6xl font-black text-brand-primary mb-6 italic tracking-tighter">Strategic <span className="text-brand-accent">Investment</span></h2>
              <p className="text-lg text-brand-secondary font-medium">Transparent pricing designed to pay for itself through automated growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricing.map((plan, i) => (
                <div key={i} className="bg-white border border-brand-border p-10 rounded-[32px] hover:shadow-2xl transition-all h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-brand-accent mb-6">{plan.price}</div>
                  <p className="text-brand-secondary text-sm mb-8 leading-relaxed font-medium">{plan.description}</p>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map(f => (
                      <li key={f} className="flex gap-3 text-sm font-bold text-brand-primary/70">
                        <CheckCircle2 className="text-brand-accent shrink-0" size={18} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full bg-black text-white py-4 rounded-xl font-bold text-center hover:bg-brand-accent transition-colors">Choose {plan.name}</Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
               <p className="text-brand-secondary font-bold text-sm italic">Need something more custom? <Link to="/contact" className="text-brand-accent underline">Let's talk</Link></p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <CTASection 
          title="Stop Building Stores. Start Building a Legacy."
          subtitle="Ready to scale your retail engine? Our team handles the entire technical ecosystem so you can focus on your brand."
          buttonText="Build Your Ecosystem Now"
        />

        {/* STICKY WHATSAPP CTA FOR MOBILE */}
        <div className="lg:hidden fixed bottom-24 left-6 right-6 z-[60]">
           <a 
            href="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20scale%20my%20eCommerce%20business." 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-green-500 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-green-500/40"
           >
             <MessageCircle size={20} /> Professional Consultation
           </a>
        </div>
      </div>

      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        type="generic"
      />
    </>
  );
}
