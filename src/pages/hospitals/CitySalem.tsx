import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CitySalem() {
  return (
    <>
      <Helmet>
        <title>Hospital Management Software Salem | Best HMS Salem | NarenNet</title>
        <meta name="description" content="Digitize your Salem hospital with NarenNet's advanced HMS. Trusted by surgical centers and multispecialty clinics in Salem for robust ERP solutions." />
        <meta name="keywords" content="hospital software Salem, HMS Salem, medical software Salem, hospital ERP Salem" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Salem's Healthcare Digital Partner"
          title="Authority and Efficiency for Salem Institutions"
          subtitle="Hospital Software Salem"
          description="Salem is a rapidly growing healthcare hub. NarenNet provides the scalable, secure, and smart infrastructure needed to manage modern medical operations in the city."
          primaryCta="Schedule Salem Demo"
          primaryCtaLink="/contact"
          secondaryCta="View TN Network"
          secondaryCtaLink="/hospital-management-software-tamil-nadu"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
             <div className="text-xl font-bold text-white mb-2">Powering Salem's Surgical Centers</div>
             <p className="text-white/40 text-sm font-medium">Specialized workflows for high-precision patient care and billing.</p>
          </div>
        </HeroSection>

        {/* Content Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Scale with Confidence in Salem.</h2>
                 <p className="text-lg text-gray-500 font-medium font-medium leading-relaxed">
                    As Salem's healthcare sector formalizes, NarenNet provides the enterprise-grade tools formerly reserved for metro giant—now optimized for your local clinic or hospital.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { t: 'Seamless Financial Audits', d: 'Automated revenue cycle management to ensure zero leakage in your Salem operations.' },
                   { t: 'Doctor-Centric EMR', d: 'Tailored templates for surgeons and specialists frequenting Salem hubs.' },
                   { t: 'Local Deployment Team', d: 'Rapid on-site setup and staff training specifically for Salem district institutions.' },
                   { t: 'Continuous Availability', d: 'Offline-ready technology ensures your hospital never stops, regardless of connectivity.' }
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 group hover:bg-white hover:shadow-xl transition-all">
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
          title="Ready to Upgrade Your Salem Hospital?"
          subtitle="Join the digital healthcare wave in Salem. Our experts are ready for a local consultation."
          buttonText="Contact Salem Hub"
        />

        <Footer />
      </div>
    </>
  );
}
