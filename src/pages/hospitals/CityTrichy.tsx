import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CityTrichy() {
  return (
    <>
      <Helmet>
        <title>Hospital Management Software Trichy | Best HMS Trichy | NarenNet</title>
        <meta name="description" content="NarenNet is Trichy's leading hospital software provider. Robust ERP solutions for clinics and multi-specialty hospitals in Central Tamil Nadu." />
        <meta name="keywords" content="hospital software Trichy, HMS Trichy, medical software Trichy, hospital ERP Trichy" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Central TN's Reliable Tech Partner"
          title="Operational Excellence for Trichy's Healthcare"
          subtitle="Hospital Software Trichy"
          description="Trichy is a critical node in the state's healthcare network. NarenNet provides the high-availability infrastructure required to serve patients from across Central Tamil Nadu."
          primaryCta="Experience Trichy Demo"
          primaryCtaLink="/contact"
          secondaryCta="Regional Overview"
          secondaryCtaLink="/hospital-management-software-tamil-nadu"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-wrap justify-center gap-12">
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Central</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Healthcare Anchor</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Robust</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Financial Auditing</div>
             </div>
          </div>
        </HeroSection>

        {/* Content */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Stability for Trichy Hospitals.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed font-medium">
                    Whether you are a solo clinic or a growing corporate hospital in Trichy, NarenNet's modular ERP scales with you, ensuring your data is always secure and your billing is always perfect.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { t: 'Automated Patient Records', d: 'Fast, secure access to patient history for accurate clinical decisions.' },
                   { t: 'Multi-Department Sync', d: 'Unified data flow between labs, pharmacies, and the main billing counter.' },
                   { t: 'Local TN Compliance', d: 'Built with Tamil Nadu specific tax and insurance rules pre-integrated.' },
                   { t: 'Instant Invoicing', d: 'Reduce discharge times by 70% with automated billing and TPA checks.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="text-brand-accent" size={24} />
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
          title="Modernize Your Institution in Trichy"
          subtitle="Speak with our local Trichy specialists to see how NarenNet can transform your hospital."
          buttonText="Contact Trichy Hub"
        />

        <Footer />
      </div>
    </>
  );
}
