import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Clipboard,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleInsurance() {
  return (
    <>
      <Helmet>
        <title>Hospital Insurance & TPA Management | NarenNet</title>
        <meta name="description" content="Streamline TPA approvals and insurance settlements with NarenNet. Automated documentation and tracking to reduce claim rejection rates." />
        <meta name="keywords" content="hospital insurance software, TPA management system, medical claim processing, hospital settlement ERP" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Seamless Claim Processing"
          title="Master the Complexity of TPA Settlements"
          subtitle="Insurance & TPA Management"
          description="Reduce claim rejections and speed up settlements. NarenNet's insurance module automates the entire documentation and approval workflow for private and government-backed TPAs."
          primaryCta="See Insurance Workflow"
          primaryCtaLink="/contact"
          secondaryCta="Explore Billing"
          secondaryCtaLink="/hospital-billing-software"
        />

        {/* Content Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Zero-Friction Settlements.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Insurance shouldn't be a bottleneck at discharge. NarenNet ensures that TPA data is captured accurately from day one, making the final settlement a matter of a few clicks.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { t: 'Pre-Auth Automation', d: 'Track and manage TPA pre-authorizations with automated reminders and document checklists.' },
                   { t: 'Multi-Payer Support', d: 'Handle Private Insurance, CGHS, and diverse State Govt. schemes from a single interface.' },
                   { t: 'Denial Management', d: 'Analyze rejection patterns and fix documentation gaps before they hit your cash flow.' },
                   { t: 'Settlement Reconciliation', d: 'Live tracking of outstanding dues from various TPAs and automated follow-up logs.' }
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <ShieldCheck className="text-brand-accent" size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">{item.t}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed font-semibold">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Optimize Your Hospital's Cash Flow"
          subtitle="Don't let manual insurance processing slow down your growth. Switch to NarenNet today."
          buttonText="Request Insurance Demo"
        />

        <Footer />
      </div>
    </>
  );
}
