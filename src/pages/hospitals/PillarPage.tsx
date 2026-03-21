import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Users, 
  Stethoscope, 
  Clipboard,
  Search,
  Cloud,
  Lock,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';
import HospitalDashboardMockup from '../../components/mockups/HospitalDashboardMockup';

export default function PillarPage() {
  const modules = [
    { name: 'OPD Management', link: '/opd-management-software', icon: Users },
    { name: 'IPD & Bed Mgmt', link: '/ipd-management-software', icon: Activity },
    { name: 'Electronic Medical Records', link: '/emr-software', icon: Stethoscope },
    { name: 'LIS Integration', link: '/lis-integration', icon: Clipboard },
    { name: 'Pharmacy Mgmt', link: '/pharmacy-management-software', icon: ShieldCheck },
    { name: 'Hospital Billing', link: '/hospital-billing-software', icon: BarChart3 }
  ];

  const outcomes = [
    { title: '40% Reduction in Patient Wait Time', desc: 'Optimized OPD queues and automated token systems.' },
    { title: 'Zero Revenue Leakage', desc: 'Every clinical service is captured and billed automatically.' },
    { title: 'Paperless Clinical Workflow', desc: 'Secure EMR with smart templates for every specialty.' },
    { title: '100% Data Security', desc: 'HIPAA-aligned encryption and localized data sovereignty.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital Management Software | Healthcare ERP India | NarenNet</title>
        <meta name="description" content="Award-winning hospital management software (HMS) for Indian healthcare. Automate OPD, IPD, Billing, EMR, and LIS with NarenNet's autonomous AI ERP." />
        <meta name="keywords" content="hospital management system, HMS software India, healthcare ERP, clinical management software, medical billing software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Enterprise Grade Hospital ERP"
          title="Digital Autonomy for Modern Healthcare"
          subtitle="Hospital Management Software"
          description="Transform your hospital with India's most advanced autonomous ERP. From high-volume OPDs to complex multi-specialty IPDs, NarenNet provides the clinical intelligence and operational stability you need to grow."
          primaryCta="Schedule a Demo"
          primaryCtaLink="/contact"
          secondaryCta="Explore Modules"
          secondaryCtaLink="#modules"
        >
          <div className="max-w-6xl mx-auto mt-12">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-brand-deep shadow-2xl p-4 md:p-12">
               <HospitalDashboardMockup />
            </div>
          </div>
        </HeroSection>

        {/* Big Outcomes Section */}
        <section className="py-24 bg-white">
          <div className="container-wide px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 underline-offset-8">
                Maximum Impact. Minimal Friction.
              </h2>
              <p className="text-lg text-gray-500 font-medium">
                NarenNet isn't just software; it's a paradigm shift in how hospitals operate in the 21st century.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {outcomes.map((outcome, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{outcome.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module Grid Section */}
        <section id="modules" className="py-24 bg-brand-deep relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="container-wide px-6 relative z-10">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Unified Modules</h2>
              <p className="text-white/60 text-lg max-w-2xl font-medium">
                Every department, tightly integrated into a single clinical ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((m, i) => (
                <Link 
                  key={i} 
                  to={m.link}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <m.icon className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{m.name}</h3>
                  <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest mt-auto group-hover:gap-4 transition-all">
                    Explore Module <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Workflow Proof Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container-wide px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <div className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                    Clinical Workflow
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                    Beyond <span className="text-brand-accent">Data Entry.</span> <br />
                    Complete Control.
                  </h2>
                  <div className="space-y-8">
                     {[
                       { t: 'Smart Order Entry', d: 'Doctors can prescribe labs and medicines in seconds with voice and text AI.' },
                       { t: 'Instant Notification Support', d: 'Automated alerts for critical lab values and drug-to-drug interactions.' },
                       { t: 'Revenue Cycle Mastery', d: 'Real-time financial audits to ensure your hospital stays profitable.' }
                     ].map((f, i) => (
                       <div key={i} className="flex gap-4 group">
                          <div className="w-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors" />
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">{f.t}</h4>
                            <p className="text-gray-500 font-medium">{f.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <div className="bg-gray-100 rounded-[50px] aspect-square flex items-center justify-center p-12">
                     <div className="text-center">
                        <Activity className="text-brand-accent mx-auto mb-6 animate-pulse" size={64} />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tighter uppercase tracking-[0.2em]">Automated Integrity</h3>
                        <p className="text-gray-400 font-medium max-w-xs mx-auto">
                          Our system monitors over 200 operational health signals every second.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Global Security Grid */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
           <div className="container-wide px-6">
             <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                   <h2 className="text-3xl font-bold mb-6">Security & Sovereignty</h2>
                   <p className="text-gray-500 font-medium text-lg leading-relaxed">
                     Patient data is a sacred trust. Our security stack out-performs hospital requirements, providing peace of mind to administrators and patients alike.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6 flex-1">
                   {[
                     { l: 'HIPAA Ready', i: ShieldCheck },
                     { l: 'ISO Certified', i: Lock },
                     { l: 'Cloud Native', i: Cloud },
                     { l: 'Live 24/7 Monitoring', i: Search }
                   ].map((item, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-all">
                        <item.i className="text-brand-accent" size={28} />
                        <span className="font-bold text-gray-900 text-sm whitespace-nowrap">{item.l}</span>
                     </div>
                   ))}
                </div>
             </div>
           </div>
        </section>

        <CTASection 
          title="Ready to Lead the Digital Health Revolution?"
          subtitle="Join the 50+ medical institutions that have already upgraded to NarenNet's autonomous ERP system."
          buttonText="Schedule a Consultation"
        />

        <Footer />
      </div>
    </>
  );
}
