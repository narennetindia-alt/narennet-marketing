import { motion } from 'motion/react';
import { 
  Check, 
  ArrowRight, 
  Stethoscope, 
  ShieldCheck, 
  Activity,
  ChevronRight,
  Database,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PricingHospital() {
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Hospital Management Software Pricing India (2026) | Clinic ERP Price</title>
        <meta name="description" content="Compare Hospital Management System (HMS) pricing in India. Integrated OPD, IPD, Billing, and Pharmacy software for multispecialty hospitals. Modular plans available." />
      </Helmet>

      <section className="container-wide px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Stethoscope size={14} /> Healthcare Tech Pricing
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Hospital Management Software <span className="text-brand-accent">Pricing India</span> (2026)
          </h1>
          
          {/* Answer-First Section */}
          <div className="p-8 rounded-3xl bg-brand-card border border-brand-border text-left mb-12 shadow-sm">
            <p className="text-lg md:text-xl text-brand-secondary leading-relaxed font-medium">
              <span className="text-brand-primary font-bold">The direct answer:</span> Hospital management system (HMS) pricing in India for 2026 typically costs between <span className="text-brand-accent font-bold">₹4,999 to ₹15,000 per month</span> for SaaS clinic management, while full multispecialty ERPs range from ₹5L to ₹50L+ for on-premise setups. NarenNet provides a modular cloud HMS starting at ₹4,999/month.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                plan: "Basic", 
                price: "₹4,999", 
                usp: "OPD Focused", 
                features: ["Patient Reg", "Appointments", "Pharmacy Billing", "Basic EMR"] 
              },
              { 
                plan: "Advanced", 
                price: "₹9,999", 
                usp: "Full Clinical", 
                features: ["IPD Management", "Lab Integration", "Advanced Reports", "Inventory"] 
              },
              { 
                plan: "Pro", 
                price: "Custom", 
                usp: "Enterprise", 
                features: ["Full Ecosystem", "AI Insights", "Analytics Dashboard", "API Access"] 
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
              <h2 className="text-3xl font-bold tracking-tight">Maximizing Clinical Efficiency vs. Cost</h2>
              <p className="text-lg text-brand-secondary leading-relaxed">
                Hospital administrators often choose software based on initial price, but lose more to inefficient workflows. NarenNet’s modular pricing allows you to only pay for what you use — adding Lab or Pharmacy modules only when you need them.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Activity />, title: "Seamless Workflow", desc: "Integrated OPD-to-IPD patient flow." },
                  { icon: <Database />, title: "Modular HMS", desc: "Add Labs, Pharmacy, or HR modules on demand." },
                  { icon: <Users />, title: "Staff Sync", desc: "Unified scheduling and payroll for doctors/nurses." },
                  { icon: <ShieldCheck />, title: "Secure & Compliant", desc: "Built with DPDPA 2023 data data sovereignty." },
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
              <h3 className="text-3xl font-bold mb-6">Looking for a custom HMS plan?</h3>
              <p className="text-white/60 mb-10 font-medium">Visit our main pricing page for a comprehensive industry-wide plan breakdown.</p>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-accent font-bold text-lg hover:underline group">
                View Full Pricing Options <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
