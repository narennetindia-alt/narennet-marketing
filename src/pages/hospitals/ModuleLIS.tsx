import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Clipboard, 
  Activity, 
  FlaskConical, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleLIS() {
  const labFeatures = [
    { title: 'Barcode Automation', desc: 'Secure sample tracking from collection to report generation. Zero manual errors.' },
    { title: 'Machine Interfacing', desc: 'Directly sync data from your medical equipment into the patient record.' },
    { title: 'Instant Mobile Reports', desc: 'Automatically send PDFs or WhatsApp alerts to patients once reports are validated.' },
    { title: 'Critical Alert System', desc: 'Immediate notification to clinicians for panic values or urgent diagnostic findings.' }
  ];

  return (
    <>
      <Helmet>
        <title>LIS Integration | Laboratory Management Software | NarenNet</title>
        <meta name="description" content="Automate your hospital lab with NarenNet's LIS. Seamless machine interfacing, barcode tracking, and instant diagnostic reporting." />
        <meta name="keywords" content="LIS software, laboratory information system, hospital lab automation, medical lab software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Diagnostic Automation"
          title="Precision Laboratory Management"
          subtitle="LIS Integration"
          description="Eliminate manual data entry and report errors. NarenNet's LIS module bridges the gap between your laboratory equipment and clinical decision-making."
          primaryCta="Schedule LIS Demo"
          primaryCtaLink="/contact"
          secondaryCta="Explore Features"
          secondaryCtaLink="#features"
        >
          <div className="max-w-2xl mx-auto mt-12 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex justify-center items-center gap-12 font-bold text-white tracking-widest uppercase text-[10px]">
             <div className="flex items-center gap-3">
                <FlaskConical className="text-brand-accent" size={20} />
                <span>Machine Sync</span>
             </div>
             <div className="w-px h-6 bg-white/10" />
             <div className="flex items-center gap-3">
                <Smartphone className="text-brand-accent" size={20} />
                <span>Auto Notifications</span>
             </div>
          </div>
        </HeroSection>

        {/* Main Content */}
        <section id="features" className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Diagnostics at the Speed of Light.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Your lab is the engine of clinical accuracy. NarenNet ensures that engine runs perfectly with automated workflows that eliminate bottlenecks and human error.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {labFeatures.map((f, i) => (
                   <div key={i} className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 flex gap-6 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                         <CheckCircle2 className="text-brand-accent" size={24} />
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

        <CTASection 
          title="Master Your Diagnostics Today"
          subtitle="Reduce turnaround times and increase accuracy with NarenNet's LIS."
          buttonText="Request LIS Audit"
        />

        <Footer />
      </div>
    </>
  );
}
