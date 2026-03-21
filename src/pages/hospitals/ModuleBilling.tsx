import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  PieChart,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleBilling() {
  const features = [
    { title: 'Unified Billing Interface', desc: 'Consolidate OPD, IPD, Pharmacy, and Lab charges into a single, clean invoice.' },
    { title: 'TPA & Insurance Mastery', desc: 'Seamlessly manage complex TPAs, approvals, and multi-tier settlements.' },
    { title: 'GST Ready & Compliant', desc: 'Automated tax calculations, HSN mapping, and audit-ready financial records.' },
    { title: 'Smart Advance Tracking', desc: 'Monitor patient advances and automate alerts for low balances.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital Billing Software | Hospital ERP Financials | NarenNet</title>
        <meta name="description" content="Capture every rupee with NarenNet's hospital billing software. Unified invoicing for OPD, IPD, Pharmacy, and LIS with 100% revenue integrity." />
        <meta name="keywords" content="hospital billing software, TPA management software, medical invoicing, healthcare revenue cycle" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Revenue Cycle Management"
          title="Stop Revenue Leakage. Start Hospital Growth."
          subtitle="Hospital Billing Software"
          description="NarenNet's billing engine acts as your silent financial auditor, ensuring that every suture, every test, and every consultation is captured and billed accurately."
          primaryCta="See Billing in Action"
          primaryCtaLink="/contact"
          secondaryCta="Pricing Details"
          secondaryCtaLink="/hospital-management-software-pricing"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-[32px] p-8 border border-white/10 flex flex-wrap justify-center gap-8 md:gap-16">
             <div className="text-center">
                <div className="text-3xl font-bold text-brand-accent mb-1 italic">₹0</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Revenue Leakage</div>
             </div>
             <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">GST Compliant</div>
             </div>
             <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">TPA Integrations</div>
             </div>
          </div>
        </HeroSection>

        {/* The Billing Difference Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                 <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Financial Precision at Scale.</h2>
                    <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">
                       Manual billing leads to human error and missed charges. NarenNet's automated billing triggers ensure that clinical actions (like ordering a lab test) are instantly reflected in the patient's pro-forma bill.
                    </p>
                    <div className="space-y-8">
                       {[
                         { t: 'Multi-Rate Lists', d: 'Manage different price lists for Cash, CGHS, and diverse Insurance providers.' },
                         { t: 'Final Bill Validation', d: 'Automated checklist to ensure no discharge takes place with pending dues.' },
                         { t: 'Revenue Analytics', d: 'Live dashboards showing collections, outstanding, and write-offs.' }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4">
                            <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                            <div>
                               <h4 className="text-xl font-bold text-gray-900 mb-1">{item.t}</h4>
                               <p className="text-gray-500 font-medium">{item.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {features.map((f, i) => (
                         <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <BarChart3 className="text-brand-accent mb-4" size={28} />
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                            <p className="text-gray-500 text-xs font-semibold leading-relaxed">{f.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Audit & Security Section */}
        <section className="py-24 bg-brand-deep text-white overflow-hidden relative">
           <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
           <div className="container-wide px-6 relative z-10 text-center max-w-4xl mx-auto">
              <ShieldCheck className="text-brand-accent mx-auto mb-8 animate-pulse" size={64} />
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Tamper-Proof Financial Integrity.</h2>
              <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">
                 Every billing action—from discounts to bill cancellations—is logged with immutable audit trails. Prevent internal leakage and ensure complete financial transparency for hospital management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-xs uppercase tracking-widest">Discount Approval System</div>
                 <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-xs uppercase tracking-widest">Cancelled Bill Logs</div>
                 <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-bold text-xs uppercase tracking-widest">Daily Collection Reconciliation</div>
              </div>
           </div>
        </section>

        <CTASection 
          title="Master Your Hospital's Financials Today"
          subtitle="Don't leave your revenue to chance. Implement the billing system that pays for itself."
          buttonText="Request Financial Demo"
        />

        <Footer />
      </div>
    </>
  );
}
