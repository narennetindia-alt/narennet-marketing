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
  BarChart3,
  MousePointer2,
  Lock
} from 'lucide-react';
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

  const solutions = [
    {
      title: 'Conversion-Focused Redesign',
      description: 'We optimize every pixel for sales, from product pages to checkout.',
      icon: MousePointer2,
      features: ['Landing Page Optimization', 'Mobile-First Design', 'A/B Tested Layouts']
    },
    {
      title: 'Payment Gateway Setup',
      description: 'Expert integration of Razorpay, Stripe, and COD to minimize drops.',
      icon: Lock,
      features: ['Razorpay/Stripe Setup', 'WhatsApp COD Verification', 'Abandoned Cart Recovery']
    },
    {
      title: 'Performance SEO',
      description: 'Rank for high-intent keywords and get free traffic that actually converts.',
      icon: TrendingUp,
      features: ['Technical SEO Audit', 'Keyword Strategy', 'Product Page SEO']
    },
    {
      title: 'Speed & Optimization',
      description: 'Lightning-fast load times for better ranking and user experience.',
      icon: Zap,
      features: ['Image Optimization', 'App Bloat Removal', 'Lazy Loading Config']
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
      name: 'Starter',
      price: '₹5,000',
      description: 'Perfect for new stores looking to fix basics.',
      features: ['Store Audit', 'Trust Badge Setup', 'Speed Optimization Basics', 'WhatsApp Button Setup']
    },
    {
      name: 'Growth',
      price: '₹10,000 - ₹15,000',
      description: 'Comprehensive optimization for scaling stores.',
      features: ['Conversion Redesign', 'Technical SEO Setup', 'Payment Gateway Fixes', 'Abandoned Cart Strategy', '24/7 Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shopify Store Optimization & SEO Services | Increase Sales in 30 Days</title>
        <meta name="description" content="Fix your Shopify store design, payment issues, and SEO. Increase traffic, conversions, and revenue. Get a free Shopify audit today." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Shopify Growth System",
              "provider": {
                "@type": "Organization",
                "name": "NarenNet"
              },
              "description": "Comprehensive Shopify store optimization including SEO, CRO, and payment gateway setup.",
              "areaServed": "India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Shopify Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify SEO"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify CRO"
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
          badge="Guaranteed Results in 30 Days"
          title="Fix Your Shopify Store & Start Getting Sales"
          subtitle="Stop Losing Customers to Poor Design and Payment Issues"
          description="We specialize in fixing the common roadblocks that kill Shopify sales. From payment gateway errors to poor SEO, we optimize everything to help you scale profitably."
          primaryCta="Get Free Store Audit"
          primaryCtaLink="#audit"
          secondaryCta="Chat on WhatsApp"
          secondaryCtaLink="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20get%20a%20free%20audit%20for%20my%20Shopify%20store."
        >
          <div className="max-w-6xl mx-auto mt-12 px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Avg. Revenue Boost', value: '45%', icon: TrendingUp },
                  { label: 'Checkout Speed', value: '-2.5s', icon: Zap },
                  { label: 'Trust Factor', value: '10x', icon: ShieldCheck }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center"
                  >
                     <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                     <div className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>
        </HeroSection>

        {/* PROBLEM SECTION */}
        <section className="py-24 bg-white border-b border-brand-border">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Why Your Shopify Store Is Not Making Sales</h2>
              <p className="text-lg text-brand-secondary">Most Shopify owners struggle with these 5 critical issues. Are you one of them?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {problems.map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-brand-card border border-brand-border hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <problem.icon size={24} className="text-brand-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{problem.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">{problem.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <FeatureCards 
          title="We Fix What’s Actually Stopping Your Sales"
          subtitle="Our data-driven approach focuses on conversion and long-term organic growth."
          features={solutions}
        />

        {/* RESULTS SECTION */}
        <section className="py-24 bg-brand-deep text-white">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What You’ll Get in 30 Days</h2>
              <p className="text-brand-secondary">We don't just build stores; we build revenue machines.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                    <p className="text-brand-secondary text-sm">{result.desc}</p>
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
        <section className="py-24 bg-brand-card">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Simple Growth Plans</h2>
              <p className="text-brand-secondary">Transparent pricing designed to pay for itself in sales boost.</p>
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
          title="Ready to Scale Your Shopify Store?"
          subtitle="Stop guessing and start growing. Our team handles the entire technical setup so you can focus on your brand."
          buttonText="Claim Your Free Audit Now"
        />

        {/* STICKY WHATSAPP CTA FOR MOBILE */}
        <div className="lg:hidden fixed bottom-24 left-6 right-6 z-[60]">
           <a 
            href="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20fix%20my%20Shopify%20store." 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-green-500 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-green-500/40"
           >
             <MessageCircle size={20} /> Chat with Shopify Expert
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
