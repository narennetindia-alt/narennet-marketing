import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ShoppingBag, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Activity,
  Package
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModulePharmacy() {
  return (
    <>
      <Helmet>
        <title>Pharmacy Management Software | Hospital Inventory ERP | NarenNet</title>
        <meta name="description" content="NarenNet's pharmacy software automates inventory, sales, and clinical prescription sync. Ensure 100% expiry control and zero revenue leakage." />
        <meta name="keywords" content="pharmacy management software, hospital pharmacy system, drug inventory software, medical retail software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Inventory Integrity"
          title="Frictionless Pharmacy Operations"
          subtitle="Pharmacy Management Software"
          description="From managing multi-location inventories to syncing with doctor prescriptions in real-time, NarenNet's pharmacy module ensures clinical safety and financial precision."
          primaryCta="See Pharmacy Demo"
          primaryCtaLink="/contact"
          secondaryCta="Explore ERP Pricing"
          secondaryCtaLink="/erp-software-pricing-india"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-wrap justify-center gap-16 font-bold text-white tracking-widest uppercase text-[10px]">
             <div className="flex items-center gap-3">
                <Package className="text-brand-accent" size={20} />
                <span>Stock Automation</span>
             </div>
             <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-accent" size={20} />
                <span>Expiry Control</span>
             </div>
          </div>
        </HeroSection>

        {/* Feature Grid */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6 text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Inventory that Manages Itself.</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed">
                 NarenNet's pharmacy engine monitors stock levels, tracks batches, and alerts you to upcoming expiries automatically. Spend less time on math and more time on patient care.
              </p>
           </div>

           <div className="container-wide px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
              {[
                { t: 'Live Prescription Sync', d: 'The moment a doctor prescribes, the pharmacy receives the order for fulfillment.' },
                { t: 'Batch-Wise Tracking', d: 'Granular control over stock batches, ensuring FIFO/FEFO compliance.' },
                { t: 'Audit-Ready Records', d: 'Every sale and purchase is logged with 100% transparency for financial audits.' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                   <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-6">
                      <Zap className="text-brand-accent" size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-4">{item.t}</h3>
                   <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>

        <CTASection 
          title="Take Control of Your Hospital Pharmacy"
          subtitle="Stop expiry losses and revenue leakage today with NarenNet."
          buttonText="Request Pharmacy Consultation"
        />

        <Footer />
      </div>
    </>
  );
}
