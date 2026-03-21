import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Activity, 
  Bed, 
  Users, 
  Clipboard, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleIPD() {
  const features = [
    { title: 'Interactive Bed Matrix', desc: 'Real-time visual map of all wards, private rooms, and ICUs. Track occupancy at a glance.' },
    { title: 'Seamless Admission Workflow', desc: 'Convert OPD patients to IPD in one click. Automated consent forms and initial assessment.' },
    { title: 'Clinical Note Management', desc: 'Structured progress notes, intake/output charts, and multi-specialty reviews.' },
    { title: 'Automated Discharge', desc: 'Pre-discharge checklists and instant clearance sync with Billing and Pharmacy.' }
  ];

  return (
    <>
      <Helmet>
        <title>IPD & Bed Management Software | Hospital Ward ERP | NarenNet</title>
        <meta name="description" content="NarenNet's IPD software streamlines inpatient care. Manage beds, admissions, clinical notes, and discharges with India's most advanced hospital ward system." />
        <meta name="keywords" content="IPD management software, hospital bed management, inpatient management system, ward management software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Inpatient Care Excellence"
          title="Total Visibility Over Your Inpatient Wards"
          subtitle="IPD & Bed Management Software"
          description="NarenNet's IPD module provides a real-time command center for your hospital wards. Optimize bed turnover, enhance clinical oversight, and ensure a seamless patient journey from admission to discharge."
          primaryCta="Schedule IPD Demo"
          primaryCtaLink="/contact"
          secondaryCta="Explore Bed Matrix"
          secondaryCtaLink="#matrix"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-[32px] p-8 border border-white/10 flex flex-wrap justify-center gap-12">
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Live</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Bed Tracking</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1-Click</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Admission Flow</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Zero</div>
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Discharge Delay</div>
             </div>
          </div>
        </HeroSection>

        {/* Core Capabilities */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Managing the Clinical Pulse.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    IPD is the most complex part of any hospital. We've simplified it into a series of intuitive, automated steps that reduce nursing fatigue and clinical errors.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 {features.map((f, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <Bed className="text-brand-accent" size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed font-semibold">{f.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Nursing & Clinical Efficiency */}
        <section className="py-24 bg-brand-deep text-white overflow-hidden">
           <div className="container-wide px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="bg-white/5 p-12 rounded-[50px] border border-white/10">
                       <h3 className="text-2xl font-bold mb-8 italic">Better Nursing Care</h3>
                       <div className="space-y-6">
                          {[
                            'Real-time vitals monitoring sync.',
                            'Automated medication administration alerts.',
                            'Shift handover reports in one click.',
                            'Direct communication with LIS and Pharmacy.'
                          ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center">
                               <CheckCircle2 className="text-brand-accent" size={20} />
                               <span className="text-white/80 font-medium">{item}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                    <h2 className="text-4xl font-bold mb-6">Designed for 24/7 Clinical Integrity.</h2>
                    <p className="text-white/60 text-lg font-medium leading-relaxed">
                       Our IPD system never sleeps. From monitoring critical ward alerts to automating the discharge clearance process, NarenNet ensures your hospital stays ahead of patient needs.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        <CTASection 
          title="Optimize Your Inpatient Operations Today"
          subtitle="Join the hospitals that have reduced discharge times by 40% with NarenNet's IPD system."
          buttonText="Request IPD Demo"
        />

        <Footer />
      </div>
    </>
  );
}
