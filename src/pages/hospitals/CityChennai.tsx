import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Building, 
  Users, 
  MapPin, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CityChennai() {
  const highlights = [
    { title: 'Chennai-Scale Performance', desc: 'Engineered for 5,000+ daily OPD tokens without a second of lag.' },
    { title: 'Medical Hub Connectivity', desc: 'Secure data sharing across multi-branch hospital networks in the city.' },
    { title: 'Local Implementation', desc: 'Expert team on the ground in Chennai for same-day training and setup.' },
    { title: 'TPA & Govt Compliance', desc: 'Pre-configured for TN Govt Insurance and all major urban TPAs.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital Management Software Chennai | Top HMS Provider Chennai | NarenNet</title>
        <meta name="description" content="NarenNet provides the most reliable hospital software in Chennai. Optimized for high-volume multispecialty hospitals, clinics, and surgical centers." />
        <meta name="keywords" content="hospital software Chennai, HMS Chennai, medical software Chennai, hospital ERP Chennai" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Chennai's Healthcare Technology Partner"
          title="Scale Your Chennai Hospital with Digital Excellence"
          subtitle="Hospital Software Chennai"
          description="In India's medical capital, efficiency isn't optional—it's the core of your service. NarenNet delivers a high-performance clinical ecosystem built for Chennai's busiest medical institutions."
          primaryCta="Book a Demo in Chennai"
          primaryCtaLink="/contact"
          secondaryCta="Explore Features"
          secondaryCtaLink="#features"
        >
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1 tracking-tighter uppercase">High Volume</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Optimized for Chennai OPDs</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1 tracking-tighter uppercase">Local Support</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">On-site in 2 Hours</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1 tracking-tighter uppercase">Seamless Sync</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Cloud + Offline Mastery</div>
             </div>
          </div>
        </HeroSection>

        {/* Main Content Info */}
        <section id="features" className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Managing Chennai's Healthcare Pulse.</h2>
                 <p className="text-lg text-gray-500 font-medium font-medium leading-relaxed">
                    Chennai hospitals handle some of the highest patient volumes in the world. NarenNet's architecture is specifically designed to manage this throughput without compromising on clinical accuracy or financial integrity.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 {highlights.map((h, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="text-brand-accent" size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">{h.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed font-semibold">{h.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="bg-brand-deep rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
                 <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                 <div className="max-w-2xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Chennai Clinicians Switch to NarenNet</h2>
                    <div className="space-y-6">
                       {[
                         { t: '5-Minute Implementation', d: 'Get your OPD running on our cloud in minutes, not months.' },
                         { t: 'Doctor-First EMR', d: `Built with input from Chennai's top specialists for zero-fatigue charting.` },
                         { t: 'Intelligent Billing', d: 'Automated GST and TPA audits specific to urban healthcare regulations.' }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4">
                            <Zap className="text-brand-accent shrink-0 mt-1" size={20} />
                            <div>
                               <h4 className="font-bold text-white">{item.t}</h4>
                               <p className="text-white/60 text-sm font-medium">{item.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="absolute bottom-0 right-0 hidden lg:block opacity-10">
                    <Building size={400} strokeWidth={1} />
                 </div>
              </div>
           </div>
        </section>

        {/* Local Testimonial / Trust */}
        <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
           <div className="max-w-4xl mx-auto text-center">
              <MapPin className="text-brand-accent mx-auto mb-8" size={48} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight italic">
                "NarenNet is the only HMS that could handle our Chennai peak volumes. The local support team is exceptional."
              </h2>
              <div className="font-bold text-gray-900 text-lg uppercase tracking-widest tracking-[0.2em] mb-1">Dr. S. Karthik</div>
              <div className="text-gray-400 font-bold text-xs uppercase tracking-widest tracking-tighter">Medical Director, Chennai Urban Care</div>
           </div>
        </section>

        <CTASection 
          title="Empower Your Chennai Hospital with NarenNet"
          subtitle="Join the digital revolution in Chennai's medical hubs. Local experts are ready to assist with your migration."
          buttonText="Schedule Chennai Audit"
        />

        <Footer />
      </div>
    </>
  );
}
