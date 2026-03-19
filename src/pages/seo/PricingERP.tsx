import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  TrendingUp,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PricingERP() {
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen pt-32 pb-20">
      <Helmet>
        <title>ERP Software Pricing India (2026) | AI ERP Price List</title>
        <meta name="description" content="Compare AI-powered ERP software pricing in India. Custom ERP solutions for manufacturing and service MSMEs. Pricing for SmartOS, CRM, and HR systems." />
      </Helmet>

      <section className="container-wide px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Briefcase size={14} /> Enterprise Tech Pricing
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            ERP Software <span className="text-brand-accent">Pricing India</span> (2026)
          </h1>
          
          {/* Answer-First Section */}
          <div className="p-8 rounded-3xl bg-brand-card border border-brand-border text-left mb-12 shadow-sm">
            <p className="text-lg md:text-xl text-brand-secondary leading-relaxed font-medium">
              <span className="text-brand-primary font-bold">The direct answer:</span> Cloud ERP software pricing in India for 2026 starts from <span className="text-brand-accent font-bold">₹2,999 per month</span> for small teams, with full enterprise AI ERP systems ranging from <span className="text-brand-accent font-bold">₹25,000 to ₹1 Lakh per month</span>. NarenNet SmartOS offers a scalable autonomous ERP starting at ₹2,999/month.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                plan: "Starter", 
                price: "₹2,999", 
                usp: "CRM & Tasks", 
                features: ["CRM Management", "Task Tracking", "Employee Info", "Mobile Access"] 
              },
              { 
                plan: "Growth", 
                price: "₹5,999", 
                usp: "Unified Flow", 
                features: ["HR Management", "Finance/Payroll", "Advanced CRM", "Reports"] 
              },
              { 
                plan: "Pro", 
                price: "Custom", 
                usp: "AI Autonomous", 
                features: ["Full AI ERP", "Admin Panel", "Supply Chain AI", "Custom System"] 
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
              <h2 className="text-3xl font-bold tracking-tight">Beyond Licensing: Value-Based ERP Pricing</h2>
              <p className="text-lg text-brand-secondary leading-relaxed">
                Most ERP vendors in India charge hidden consulting fees. NarenNet SmartOS pricing is transparent — we build the system and train your team for one predictable cost, focusing on long-term operational ROI.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Zap />, title: "Autonomous Actions", desc: "System takes decisions, not just records data." },
                  { icon: <TrendingUp />, title: "Zero Migration Fee", desc: "No charges for Tally or Excel data migration." },
                  { icon: <ShieldCheck />, title: "99.7% Reliability", desc: "Cloud-native with offline-first failover." },
                  { icon: <Settings />, title: "Bespoke Customization", desc: "We build features unique to your business." },
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
              <h3 className="text-3xl font-bold mb-6">Compare all our industry plans</h3>
              <p className="text-white/60 mb-10 font-medium">Visit our main multi-industry pricing catalog for retail and healthcare options.</p>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg hover:underline group">
                Go to Pricing Hub <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
