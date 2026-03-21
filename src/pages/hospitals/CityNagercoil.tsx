import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CityNagercoil() {
  return (
    <>
      <Helmet>
        <title>Hospital Management Software Nagercoil | Best HMS Nagercoil | NarenNet</title>
        <meta name="description" content="Empower your Nagercoil hospital with NarenNet's HMS. Reliable, scalable, and secure ERP for medical centers in Kanyakumari district." />
        <meta name="keywords" content="hospital software Nagercoil, HMS Nagercoil, medical software Kanyakumari, hospital ERP Nagercoil" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Kanyakumari District's Digital Choice"
          title="Modern Healthcare Tech for the South of India"
          subtitle="Hospital Software Nagercoil"
          description="NarenNet provides the resilient infrastructure Nagercoil's institution need to deliver world-class care at the southern tip of the state."
          primaryCta="Schedule Nagercoil Demo"
          primaryCtaLink="/contact"
          secondaryCta="View Regional Hub"
          secondaryCtaLink="/hospital-management-software-tamil-nadu"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
             <div className="text-xl font-bold text-white mb-2 italic">Southern Excellence. Digital Autonomy.</div>
             <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Serving Nagercoil & Surroundings</p>
          </div>
        </HeroSection>

        {/* Content Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Precision Care in Nagercoil.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    We understand the localized needs of Kanyakumari's healthcare sector—from managing referral networks to ensuring patient data sovereignty and financial integrity.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { t: 'End-to-End Hospital ERP', d: 'Manage every asset, every employee, and every patient from one secure cloud.' },
                   { t: 'Localized Billing & GST', d: 'Automated tax compliance built specifically for Indian medical institutions.' },
                   { t: 'Secure Clinical Flow', d: 'Patient records protected with bank-grade encryption and 100% uptime.' },
                   { t: 'Regional Support Hub', d: 'Fast, on-site assistance for Nagercoil institutions during implementation.' }
                 ].map((item, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
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
          title="Digitize Your Hospital in Nagercoil"
          subtitle="Speak with our specialists today and lead the future of healthcare in Kanyakumari."
          buttonText="Contact Nagercoil Hub"
        />

        <Footer />
      </div>
    </>
  );
}
