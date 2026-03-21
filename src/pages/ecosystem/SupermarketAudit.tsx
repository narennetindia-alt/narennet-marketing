import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Zap, 
  Ghost, 
  Search, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3,
  Smartphone,
  PlayCircle
} from 'lucide-react';
import MobileAppMockup from '../../components/mockups/MobileAppMockup';
import LeadCaptureModal from '../../components/LeadCaptureModal';
import { useState } from 'react';

// NOTE: Since I am an AI, I am assuming the relative path to LeadCaptureModal. 
// Let's verify it first if possible, but based on Supermarkets.tsx it's in '../../components/LeadCaptureModal'

export default function SupermarketAudit() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary font-sans overflow-x-hidden">
      <Helmet>
        <title>Free 14-Day Supermarket Profit Leak Audit | NarenNet AI</title>
        <meta name="description" content="Stop losing 3% of your sales to hidden profit leaks. Get a free 14-day AI-powered store health audit with a ₹5,000 risk-reversal guarantee." />
      </Helmet>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/918438966728?text=Hi%20NarenNet!%20I%20want%20to%20claim%20my%20Free%2014-Day%20Store%20Health%20Audit." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={28} />
      </a>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-brand-deep text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container-wide relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 mb-8 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                </span>
                <span className="text-brand-accent text-sm font-bold tracking-wide uppercase text-[10px] md:text-sm">Operational Intelligence Now Live</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8">
                Stop Losing 3% of Every Sale to Hidden <span className="text-brand-accent">"Profit Leaks"</span> You Can't See.
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed max-w-xl">
                NarenNet's AI-Powered Operational Intelligence monitors your store 24/7, detecting shrinkage and stockouts before they hit your bottom line.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsLeadModalOpen(true)}
                  className="group flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-primary transition-all shadow-xl shadow-brand-accent/20"
                >
                  Start Free 14-Day Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="https://wa.me/918438966728" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <MessageCircle size={20} className="text-[#25D366]" /> Chat with an Expert
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full" />
              <div className="relative">
                <MobileAppMockup persona="owner" theme="bg-brand-deep" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="container-wide max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-brand-primary">
              For most supermarket owners, it’s not a business—it’s a <span className="text-red-600 italic underline decoration-wavy">survival game</span>.
            </h2>
            
            <div className="space-y-8 text-left">
              <p className="text-xl md:text-2xl text-brand-secondary leading-relaxed">
                You work 14 hours a day for a tiny <strong className="text-brand-primary">2–3% margin</strong>. But while you're busy at the counter, your profit is leaking through the back door, the aisles, and the checkout lanes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-red-600 font-bold mb-2">Shrinkage is killing you.</p>
                  <p className="text-sm text-brand-secondary">1% loss here, 2% there. It looks small until it’s the difference between profit and closure.</p>
                </div>
                <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-red-600 font-bold mb-2">Staff can't see everything.</p>
                  <p className="text-sm text-brand-secondary">Humans miss things. AI doesn't. Our system spots what cameras and supervisors fail to catch.</p>
                </div>
                <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
                  <p className="text-red-600 font-bold mb-2">Stockouts are invisible.</p>
                  <p className="text-sm text-brand-secondary">If it's not on the shelf, you didn't just lose a sale; you lost a customer for life.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-black text-brand-primary uppercase tracking-tight">
                  YOU ARE LOSING MONEY RIGHT NOW. <br />
                  <span className="text-red-600">Every minute you wait is another leaked rupee.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE 3 PROFIT LEAKS */}
      <section className="py-24 bg-brand-card px-6">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leak 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] border border-brand-border shadow-sm flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8">
                <Ghost className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ghost Stockout</h3>
              <p className="text-brand-secondary mb-6 leading-relaxed">
                Your system says it's in stock, but the shelf is empty. Customers walk out without buying, and you never know why sales are dipping.
              </p>
              <div className="mt-auto p-4 rounded-xl bg-brand-deep/5 border border-brand-deep/10 italic text-sm mb-6">
                "12 customers look for premium Ghee; find empty shelf; you lose ₹8,400 in 2 hours."
              </div>
              <p className="text-red-500 font-bold text-sm">It's like having a hole in your pocket while you're trying to fill it.</p>
            </motion.div>

            {/* Leak 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] border border-brand-border shadow-sm flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-8">
                <Search className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Shrinkage Blindspot</h3>
              <p className="text-brand-secondary mb-6 leading-relaxed">
                Internal pilferage and shoplifting often go unnoticed until the monthly audit—when it's too late to take action.
              </p>
              <div className="mt-auto p-4 rounded-xl bg-brand-deep/5 border border-brand-deep/10 italic text-sm mb-6">
                "2% monthly shrinkage on a ₹50 Lakh turnover is a ₹1 Lakh direct loss every month."
              </div>
              <p className="text-red-500 font-bold text-sm">The money you worked for is literally walking out of your store.</p>
            </motion.div>

            {/* Leak 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] border border-brand-border shadow-sm flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-8">
                <Clock className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Checkout Bottleneck</h3>
              <p className="text-brand-secondary mb-6 leading-relaxed">
                Slow billing at peak hours causes queue abandonment. Customers see long lines, dump their baskets, and leave.
              </p>
              <div className="mt-auto p-4 rounded-xl bg-brand-deep/5 border border-brand-deep/10 italic text-sm mb-6">
                "5 high-value baskets abandoned daily due to delays = ₹1.5 Lakhs lost revenue per month."
              </div>
              <p className="text-red-500 font-bold text-sm">You lost the customer at the very last step.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-32 bg-brand-deep text-white px-6">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-brand-accent/30 blur-[120px]" />
              <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-md">
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-8">Transformation</h4>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0">
                      <span className="text-red-500 font-bold">×</span>
                    </div>
                    <div>
                      <p className="text-white/40 font-bold mb-1">Before NarenNet</p>
                      <p className="text-lg">Guessing why margins are low, waiting for monthly audits, and reactive fire-fighting.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center shrink-0 font-bold text-green-500">
                      ✓
                    </div>
                    <div>
                      <p className="text-brand-accent font-bold mb-1">After NarenNet</p>
                      <p className="text-lg">Real-time leak alerts on your phone, daily health checks, and proactive profit protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The <span className="text-brand-accent">Operational Brain</span> for Your Supermarket</h2>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                NarenNet isn't just a POS system; it's a mobile diagnostic layer that sits on top of your existing operations. We act as your digital supervisor that never sleeps.
              </p>
              <div className="space-y-4">
                {[
                  "Built for the chaos of Indian retail",
                  "Trusted by 50+ stores for margin protection",
                  "Zero hardware change required",
                  "Instant deployment in under 72 hours"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-accent" size={20} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (3 STEPS) */}
      <section className="py-24 bg-white px-6">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary">How to Start Winning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { s: 1, t: "Setup", d: "Connect NarenNet to your existing system in under 72 hours. No IT team needed.", i: Zap },
              { s: 2, t: "Monitor", d: "Our AI starts scanning transactions and stock movements 24/7.", i: Smartphone },
              { s: 3, t: "Insights", d: "Get instant leak alerts on your phone and fix them before the day ends.", i: BarChart3 }
            ].map(step => (
              <div key={step.s} className="relative text-center">
                <div className="w-20 h-20 rounded-3xl bg-brand-card border border-brand-border flex items-center justify-center mx-auto mb-6">
                  <step.i className="text-brand-accent" size={32} />
                </div>
                <div className="absolute top-0 right-1/2 translate-x-12 bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.s}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.t}</h4>
                <p className="text-brand-secondary">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFER SECTION (CRITICAL) */}
      <section className="py-24 bg-brand-accent/5 border-y border-brand-accent/20 px-6">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] border-2 border-brand-accent p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
             {/* Risk Reversal Badge */}
             <div className="absolute top-10 -right-12 rotate-45 bg-red-600 text-white py-2 px-16 font-bold text-sm shadow-lg">
                NEW OFFER
             </div>

             <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-6">The 14-Day Store Health Audit</h2>
             <p className="text-2xl text-brand-accent font-bold mb-12">100% Free • No Commitment</p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                {[
                  "Full scan of top 500 SKUs",
                  "Shrinkage Leakage Report",
                  "Checkout efficiency audit",
                  "AI Stockout predictions",
                  "Margin analysis dashboard",
                  "72-hour setup guarantee"
                ].map(benefit => (
                  <div key={benefit} className="flex items-center gap-3 bg-brand-card p-4 rounded-xl border border-brand-border">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-bold text-sm">{benefit}</span>
                  </div>
                ))}
             </div>

             <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-12">
                <h4 className="text-red-600 font-black text-xl mb-4">THE ₹5,000 GUARANTEE</h4>
                <p className="text-red-900 leading-relaxed font-medium">
                  If our audit doesn’t find at least ONE operational bottleneck or profit leak in 14 days, <strong>we will pay you ₹5,000</strong> for wasting your time. We are that confident.
                </p>
             </div>

             <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="group w-full sm:w-auto inline-flex flex-col items-center gap-2 bg-brand-accent text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl shadow-brand-accent/40"
             >
                <div className="flex items-center gap-3">GET MY FREE AUDIT NOW <ArrowRight size={28} /></div>
                <span className="text-xs font-bold text-white/70 uppercase">No credit card required • Join 50+ Stores</span>
             </button>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-10 rounded-[32px] bg-brand-card border border-brand-border italic text-lg leading-relaxed relative">
              <span className="absolute top-6 left-6 text-brand-accent text-6xl opacity-20">"</span>
              <p className="relative z-10 mb-8">
                "I thought my 2.5% margin was 'normal'. NarenNet showed me I was losing 1.2% just in stockouts. We fixed it in a week. Best decision for my chain."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-deep flex items-center justify-center text-white font-bold">RK</div>
                <div>
                  <p className="font-bold text-brand-primary">Rajesh K.</p>
                  <p className="text-sm text-brand-secondary">Owner, 3 Sparrows Retail</p>
                </div>
              </div>
            </div>
            <div className="p-10 rounded-[32px] bg-brand-card border border-brand-border italic text-lg leading-relaxed relative">
              <span className="absolute top-6 left-6 text-brand-accent text-6xl opacity-20">"</span>
              <p className="relative z-10 mb-8">
                "The mobile alerts are addictive. I can see my store's health while sitting at home. The ₹5,000 guarantee made it a no-brainer to try."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold">AS</div>
                <div>
                  <p className="font-bold text-brand-primary">Ananya S.</p>
                  <p className="text-sm text-brand-secondary">Store Manager</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-brand-primary mb-2">50+</p>
              <p className="text-sm font-bold text-brand-secondary uppercase tracking-widest">Stores Protected</p>
            </div>
            <div>
              <p className="text-4xl font-black text-brand-primary mb-2">₹2.5Cr+</p>
              <p className="text-sm font-bold text-brand-secondary uppercase tracking-widest">Leaks Detected</p>
            </div>
            <div>
              <p className="text-4xl font-black text-brand-primary mb-2">72hrs</p>
              <p className="text-sm font-bold text-brand-secondary uppercase tracking-widest">Deploy Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-32 bg-brand-deep text-white relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-brand-accent/10 pointer-events-none" />
        <div className="container-wide text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8">Your Profits are Leaking <span className="text-brand-accent">Right Now.</span></h2>
          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto">
            Don't wait for your monthly audit to see the damage. Stop the bleeding today with real-time operational intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="group bg-brand-accent text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-accent/40 flex items-center justify-center gap-3"
            >
              FIND MY PROFIT LEAKS <ArrowRight />
            </button>
            <a 
              href="https://wa.me/918438966728" 
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 border border-white/20 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3"
            >
              WHATSAPP EXPERT <MessageCircle className="text-green-400" />
            </a>
          </div>
          <p className="mt-8 text-red-400 font-bold animate-pulse">Only 5 slots available for free audits this week.</p>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-20 bg-white border-t border-brand-border px-6">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="text-center md:text-left">
               <h3 className="text-2xl font-black mb-4">NarenNet</h3>
               <p className="text-brand-secondary text-sm max-w-sm">AI-Powered Operational Intelligence for the Modern Retailer. Protecting margins across South India.</p>
             </div>
             <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
               <div>
                  <p className="font-bold text-xs uppercase tracking-widest mb-4">Contact</p>
                  <p className="text-sm text-brand-secondary mb-2">hello@narennet.cloud</p>
                  <p className="text-sm text-brand-secondary">+91 84389 66728</p>
               </div>
               <div>
                  <p className="font-bold text-xs uppercase tracking-widest mb-4">Links</p>
                  <div className="flex flex-col gap-2 text-sm text-brand-accent font-bold">
                    <Link to="/ecosystem/supermarkets">Main Product</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Book Demo</Link>
                  </div>
               </div>
             </div>
          </div>
          <div className="mt-20 pt-8 border-t border-brand-border text-center text-xs text-brand-secondary font-medium">
            © 2026 NarenNet. All rights reserved. Built for retailers who demand visibility.
          </div>
        </div>
      </footer>

      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        type="supermarket"
      />
    </div>
  );
}
