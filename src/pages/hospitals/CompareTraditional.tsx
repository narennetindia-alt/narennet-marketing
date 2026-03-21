import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Smartphone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CompareTraditional() {
  return (
    <>
      <Helmet>
        <title>NarenNet vs Traditional Billing Software | Best Hospital Billing | NarenNet</title>
        <meta name="description" content="Is your traditional billing software leaking revenue? See why NarenNet's autonomous clinical billing outperforms offline legacy systems." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="System Upgrade Guide"
          title="The High Cost of Traditional Billing Software"
          subtitle="Legacy vs. NarenNet Autonomous ERP"
          description="Generic billing software often results in manual errors and revenue leakage. NarenNet's clinical-first billing ensures 100% accurate capture of every service rendered."
          primaryCta="Calculate Revenue Leakage"
          primaryCtaLink="/contact"
          secondaryCta="View Billing Features"
          secondaryCtaLink="/hospital-billing-software"
        />

        {/* Main Comparison Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Stop Scaling with Yesterday's Tech.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Traditional software was built for static data entry. NarenNet is built for dynamic clinical workflows. We bridge the gap between doctor orders and final invoices automatically.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-10 rounded-[40px] bg-red-50/30 border border-red-100 italic">
                    <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                       <XCircle className="text-red-500" /> Traditional Software
                    </h3>
                    <ul className="space-y-4 text-red-700 font-medium">
                       <li>• Manual entry of lab and pharmacy charges.</li>
                       <li>• No sync between doctor orders and billing counter.</li>
                       <li>• Vulnerable to local data loss and crashes.</li>
                       <li>• Limited or no TPA/Insurance automation.</li>
                       <li>• High risk of internal fraud and bill tampering.</li>
                    </ul>
                 </div>
                 <div className="p-10 rounded-[40px] bg-brand-accent/5 border border-brand-accent/10">
                    <h3 className="text-2xl font-bold text-brand-deep mb-6 flex items-center gap-3 italic">
                       <CheckCircle2 className="text-brand-accent" /> NarenNet Autonomous ERP
                    </h3>
                    <ul className="space-y-4 text-brand-bg font-bold opacity-80 decoration-brand-accent/30 tracking-tight">
                       <li>• Automated clinical charge capture from orders.</li>
                       <li>• Real-time sync across all hospital departments.</li>
                       <li>• Secure cloud backup with offline-first stability.</li>
                       <li>• Advanced TPA lifecycle and claim management.</li>
                       <li>• Immutable audit trails and financial security.</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        <CTASection 
          title="Upgrade to Financial Integrity"
          subtitle="Don't lose any more revenue to manual errors. Professionalize your billing today."
          buttonText="Schedule Migration Consultation"
        />

        <Footer />
      </div>
    </>
  );
}
