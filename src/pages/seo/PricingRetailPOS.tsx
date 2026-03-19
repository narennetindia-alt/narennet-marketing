import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Store, 
  Zap, 
  ShieldCheck, 
  BarChart3,
  ChevronRight,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PricingRetailPOS() {
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Retail POS Pricing India (2026) | Offline POS Software Price</title>
        <meta name="description" content="Discover competitive Retail POS pricing in India. Offline-first billing, GST compliance, and AI inventory for supermarkets. Starts at ₹999/month. Deploy in 72 hours." />
      </Helmet>

      <section className="container-wide px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Store size={14} /> Retail Tech Price Guide
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Retail POS Pricing in India (2026) — <span className="text-brand-accent">Offline-First</span>
          </h1>
          
          {/* Answer-First Section */}
          <div className="p-8 rounded-3xl bg-brand-card border border-brand-border text-left mb-12 shadow-sm">
            <p className="text-lg md:text-xl text-brand-secondary leading-relaxed font-medium">
              <span className="text-brand-primary font-bold">The direct answer:</span> Retail POS software pricing in India typically ranges from <span className="text-brand-accent font-bold">₹999 to ₹4,999 per month</span> for SaaS models, or ₹25,000 to ₹1.5L for one-time licenses. NarenNet offers an offline-first Retail POS starting at ₹999/month, specifically designed for Indian supermarkets facing connectivity issues.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                plan: "Starter", 
                price: "₹999", 
                usp: "Core Billing", 
                features: ["Offline mode", "GST Invoicing", "Inventory", "WhatsApp Receipts"] 
              },
              { 
                plan: "Growth", 
                price: "₹2,499", 
                usp: "AI Powered", 
                features: ["Advanced Reports", "AI Sales Insights", "Loyalty Engine", "Multi-user"] 
              },
              { 
                plan: "Pro", 
                price: "Custom", 
                usp: "Enterprise", 
                features: ["Multi-branch Sync", "SmartOS Suite", "Cloud Admin", "24/7 Support"] 
              }
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[40px] border-2 flex flex-col ${i === 1 ? 'border-brand-accent bg-brand-deep text-white shadow-xl shadow-brand-accent/20' : 'bg-white border-brand-border'}`}>
                <h3 className="text-xl font-bold mb-2">{item.plan}</h3>
                <div className="text-4xl font-black mb-4">{item.price}<span className="text-xs opacity-50 font-bold ml-1">{item.price !== 'Custom' ? '/mo' : ''}</span></div>
                <p className={`text-sm font-bold mb-8 ${i === 1 ? 'text-brand-accent' : 'text-brand-secondary'}`}>{item.usp}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {item.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold">
                      <Check size={14} className="text-brand-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 group ${i === 1 ? 'bg-brand-accent text-white' : 'bg-brand-primary text-white'}`}>
                  Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Factors Influencing Retail POS Price in India</h2>
              <p className="text-lg text-brand-secondary leading-relaxed">
                When evaluating price, don't just look at the monthly tablet. Consider the hidden costs of internet downtime. A "cheap" cloud POS that stops during an outage can cost you thousands in lost sales per hour.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Zap />, title: "Offline Resilience", desc: "Local-first processing ensures zero downtime." },
                  { icon: <ShieldCheck />, title: "GST Compliance", desc: "Native GSTR-1 & e-Invoice generation." },
                  { icon: <BarChart3 />, title: "AI Inventory", desc: "Avoid stockouts with ML forecasting." },
                  { icon: <Package />, title: "72hr Deployment", desc: "Go live fast with local training." },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-card border border-brand-border">
                    <div className="text-brand-accent mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-brand-secondary font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[40px] bg-brand-primary text-white text-center">
              <h3 className="text-3xl font-bold mb-6">Need a detailed comparison?</h3>
              <p className="text-white/60 mb-10 font-medium">Explore our full multi-industry pricing ecosystem to see how we compare to SAP and Zoho.</p>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg hover:underline group">
                Back to Main Pricing Page <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
