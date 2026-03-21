import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building2, 
  Stethoscope, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Award,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CityCoimbatore() {
  return (
    <>
      <Helmet>
        <title>Hospital Management Software Coimbatore | Best HMS Coimbatore | NarenNet</title>
        <meta name="description" content="NarenNet delivers high-performance hospital management software for Coimbatore's multi-specialty hubs. Local implementation and training available." />
        <meta name="keywords" content="hospital software Coimbatore, HMS Coimbatore, medical software Coimbatore, hospital ERP Coimbatore" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Coimbatore's Medical Excellence"
          title="Empowering the Healthcare Hub of the Kongu Region"
          subtitle="Hospital Software Coimbatore"
          description="Coimbatore is synonymous with healthcare precision. NarenNet provides the specialized, high-authority HMS required by the city's leading multi-specialty medical institutions."
          primaryCta="Experience Coimbatore Demo"
          primaryCtaLink="/contact"
          secondaryCta="View Regional Solutions"
          secondaryCtaLink="/hospital-management-software-tamil-nadu"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-8 justify-center items-center">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                   <Award className="text-brand-accent" size={24} />
                </div>
                <div>
                   <div className="text-white font-bold">Multi-Specialty Ready</div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Designed for Kongu Region Professionals</div>
                </div>
             </div>
             <div className="hidden md:block w-px h-10 bg-white/10" />
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                   <Zap className="text-brand-accent" size={24} />
                </div>
                <div>
                   <div className="text-white font-bold">Fast Adoption</div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Go Live in 7 Days or Less</div>
                </div>
             </div>
          </div>
        </HeroSection>

        {/* City Focus Content */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Precision for the Manchester of South India.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed font-medium">
                    Coimbatore hospitals are known for their operational excellence and medical tourism standards. NarenNet's clinical workflows are built to match these expectations with zero-lag performance and deep clinical insights.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {[
                   { t: 'Specialized Clinical Templates', d: 'Custom EMR layouts for Cardiology, Orthopaedics, and more, tailored for Coimbatore specialists.' },
                   { t: 'Local Implementation Center', d: 'Our Coimbatore-based support engineers ensure 100% staff training and smooth transition.' },
                   { t: 'Multi-Branch Management', d: 'Easily manage multiple clinics or hospital labs across Avinashi Road and beyond from a single view.' },
                   { t: 'Enterprise Security', d: 'Bank-grade protection for your hospital financials and patient records.' }
                 ].map((item, i) => (
                   <div key={i} className="group p-8 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                         <TrendingUp className="text-brand-accent" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.t}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Lead the Future of Healthcare in Coimbatore"
          subtitle="Join the city's most advanced medical institutions in digitizing their clinical workflows."
          buttonText="Contact Coimbatore Hub"
        />

        <Footer />
      </div>
    </>
  );
}
