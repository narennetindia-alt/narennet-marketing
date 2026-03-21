import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CityMadurai() {
  return (
    <>
      <Helmet>
        <title>Hospital Management Software Madurai | Best HMS Madurai | NarenNet</title>
        <meta name="description" content="NarenNet is the preferred hospital management system in Madurai. Powering the southern healthcare anchor with robust, scalable ERP solutions." />
        <meta name="keywords" content="hospital software Madurai, HMS Madurai, medical software Madurai, hospital ERP Madurai" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Southern Tamil Nadu's Healthcare Anchor"
          title="Digital Sovereignty for Madurai's Institutions"
          subtitle="Hospital Software Madurai"
          description="From major surgical centers to high-volume outpatient clinics, NarenNet provides the operational stability Madurai's medical professionals depend on."
          primaryCta="Consult in Madurai"
          primaryCtaLink="/contact"
          secondaryCta="Explore Local Solutions"
          secondaryCtaLink="/hospital-management-software-tamil-nadu"
        >
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center shrink-0">
                   <TrendingUp className="text-brand-accent" size={24} />
                </div>
                <div>
                   <div className="text-white font-bold text-xl tracking-tight">Rapid Growth</div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Built for Madurai's Scale</div>
                </div>
             </div>
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center shrink-0">
                   <Zap className="text-brand-accent" size={24} />
                </div>
                <div>
                   <div className="text-white font-bold text-xl tracking-tight">Zero Downtime</div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Offline-First Stability</div>
                </div>
             </div>
          </div>
        </HeroSection>

        {/* Main Content Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">The Anchor of Southern Healthcare.</h2>
                 <p className="text-lg text-gray-500 font-medium font-medium leading-relaxed">
                    Madurai serves as the healthcare destination for over 10 surrounding districts. NarenNet's architecture handles the heavy-duty patient data and billing complexities unique to such an anchor city.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 {[
                   { t: 'Multi-Specialty Coordination', d: 'Tightly integrated departments for seamless patient transfer and clinical handovers.' },
                   { t: 'Local Madurai Implementation', d: 'On-site presence in Madurai for hand-holding during the digital transition.' },
                   { t: 'Financial Security', d: 'Autonomous audit trails and revenue cycle management to prevent leakages.' },
                   { t: 'High Patient Throughput', d: 'Patient queue systems designed for the massive footfalls of Temple City clinics.' }
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all flex gap-6">
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
          title="Empower Your Madurai Hospital with NarenNet"
          subtitle="Join the leading institutions in the Temple City that have already upgraded."
          buttonText="Contact Madurai Hub"
        />

        <Footer />
      </div>
    </>
  );
}
