import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  FileText, 
  Activity, 
  Search, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Clipboard,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleEMR() {
  const capabilities = [
    { title: 'Global Patient ID', desc: 'Unique identification across multi-branch hospitals for a 360-degree patient view.' },
    { title: 'Doctor-First Charting', desc: 'Specialty-specific templates (Pediatric, Cardio, Ortho) designed for speed.' },
    { title: 'Lab & Image Integration', desc: 'Direct access to diagnostic reports and medical imaging within the clinical view.' },
    { title: 'AI-Powered Documentation', desc: 'Voice-to-text and smart auto-suggest for medicines and diagnosis codes.' }
  ];

  return (
    <>
      <Helmet>
        <title>Electronic Medical Records (EMR) Software | Clinical ERP | NarenNet</title>
        <meta name="description" content="NarenNet's EMR software provides a secure, clinician-focused playground for medical records. HIPAA-aligned, paperless, and optimized for clinical speed." />
        <meta name="keywords" content="EMR software India, electronic medical records system, clinical documentation software, digital health records" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Clinical Data Sovereignty"
          title="Secure, Intelligent Clinical Documentation"
          subtitle="Electronic Medical Records (EMR)"
          description="Empower your clinicians with an EMR that feels native to their workflow. NarenNet's EMR module replaces messy paperwork with a high-performance clinical playground."
          primaryCta="See EMR in Action"
          primaryCtaLink="/contact"
          secondaryCta="Explore Templates"
          secondaryCtaLink="#templates"
        >
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
             {[
               { l: 'Paperless', i: FileText },
               { l: 'Secure', i: ShieldCheck },
               { l: 'Fast', i: Zap },
               { l: 'History', i: History }
             ].map((f, i) => (
               <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center gap-3">
                  <f.i className="text-brand-accent" size={24} />
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest">{f.l}</div>
               </div>
             ))}
          </div>
        </HeroSection>

        {/* Clinical Efficiency Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Data That Saves Lives.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    A clinical record is more than just data—it's a story of care. NarenNet ensures that every chapter of that story is instantly searchable, secure, and legible.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {capabilities.map((c, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="text-brand-accent" size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed font-semibold">{c.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Security / HIPAA section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
           <div className="container-wide px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Immutable Integrity.</h2>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
                       Your clinical data is protected by the same encryption standards used by global financial institutions. With role-based access control and detailed audit logs, you maintain total control over patient privacy.
                    </p>
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="text-brand-accent" />
                       <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">HIPAA & Digital Health Standards Compliant</span>
                    </div>
                 </div>
                 <div className="flex-1 bg-brand-deep p-12 rounded-[50px] text-white">
                    <h4 className="text-xl font-bold mb-6">EMR Highlights</h4>
                    <ul className="space-y-4">
                       {['One-click prescription generation.', 'Automated ICD-10 coding support.', 'Instant drug-to-drug interaction alerts.', 'Patient self-service portal sync.'].map((item, i) => (
                         <li key={i} className="flex gap-4 items-center">
                            <Zap className="text-brand-accent" size={16} />
                            <span className="text-white/60 font-medium">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        <CTASection 
          title="Build a Paperless Hospital Today"
          subtitle="Switch to the clinical management system that doctors actually love using."
          buttonText="Request EMR Demo"
        />

        <Footer />
      </div>
    </>
  );
}
