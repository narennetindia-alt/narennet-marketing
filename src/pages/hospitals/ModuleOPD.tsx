import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Users, 
  Clock, 
  Stethoscope, 
  Calendar, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleOPD() {
  const features = [
    { title: 'Smart Token System', desc: 'Automated queue management that reduces patient anxiety and chaos.' },
    { title: 'Instant Registration', desc: 'Scan IDs or use phone numbers to pull up patient records in <3 seconds.' },
    { title: 'Digital Prescription', desc: 'Doctor-friendly interface for e-prescribing and diagnostic ordering.' },
    { title: 'Home Queue Tracking', desc: 'Allow patients to monitor their place in the queue from their mobile phones.' }
  ];

  const benefits = [
    { title: '50% Faster Flow', desc: 'Seamless movement from registration to consultation to pharmacy.' },
    { title: 'Clear Revenue Tracking', desc: 'Track consultation fees and outstanding payments in real-time.' },
    { title: 'Patient Loyalty', desc: 'A frictionless experience that keeps patients coming back to your clinic.' }
  ];

  return (
    <>
      <Helmet>
        <title>OPD Management Software | Patient Queue System | NarenNet</title>
        <meta name="description" content="NarenNet's OPD software optimizes patient flow, token management, and digital prescriptions. The best solution for high-volume clinics and hospitals." />
        <meta name="keywords" content="OPD management software, patient queue system, hospital token system, digital prescription software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Clinical Workflow Optimization"
          title="Frictionless Patient Flow for Your OPD"
          subtitle="OPD Management Software"
          description="Transform your outpatient department from a chaotic waiting room into a precision-engineered clinical experience. NarenNet automates everything from token generation to e-prescribing."
          primaryCta="Get Demo & Pricing"
          primaryCtaLink="/contact"
          secondaryCta="How it Works"
          secondaryCtaLink="#how-it-works"
        >
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
             {[
               { l: 'Token System', i: Smartphone },
               { l: 'Instant Registration', i: Users },
               { l: 'E-Prescription', i: Stethoscope },
               { l: 'Live Analytics', i: TrendingUp }
             ].map((f, i) => (
               <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center gap-3">
                  <f.i className="text-brand-accent" size={24} />
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest">{f.l}</div>
               </div>
             ))}
          </div>
        </HeroSection>

        {/* Problem/Solution Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Chaos is Optional. Efficiency is Autonomous.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Most outpatient clinics suffer from "The Waiting Room Bottleneck". NarenNet eliminates this by syncing the front desk, the doctor's chamber, and the pharmacy into a single, live data stream.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 {features.map((f, i) => (
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {benefits.map((b, i) => (
                   <div key={i} className="bg-brand-deep rounded-3xl p-8 text-white">
                      <Zap className="text-brand-accent mb-6" size={32} />
                      <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                      <p className="text-white/40 text-sm font-medium leading-relaxed">{b.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* How It Works Step-by-Step */}
        <section id="how-it-works" className="py-24 bg-gray-50 border-y border-gray-200">
           <div className="container-wide px-6">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The NarenNet OPD Journey</h2>
                 <p className="text-gray-500 font-medium">From entry to exit, technology handles the heavy lifting.</p>
              </div>

              <div className="space-y-4">
                 {[
                   { step: '01', title: 'Self-Service / Desk Entry', desc: 'Patients register via QR or front-desk and get a digital token.' },
                   { step: '02', title: 'Smart Queue Assignment', desc: 'System automatically balances loads across available doctors.' },
                   { step: '03', title: 'Rapid Consultation', desc: 'Doctors view full history and prescribe in seconds using AI-templates.' },
                   { step: '04', title: 'Instant Fulfillment', desc: 'Pharmacy and Lab receive orders the moment the doctor clicks "Save".' }
                 ].map((s, i) => (
                   <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-6 md:items-center">
                      <div className="text-4xl font-black text-brand-accent/20 italic">{s.step}</div>
                      <div className="flex-1">
                         <h4 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h4>
                         <p className="text-gray-500 text-sm font-medium">{s.desc}</p>
                      </div>
                      <ArrowRight className="text-brand-accent hidden md:block" size={24} />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Supercharge Your Clinic's Footfall"
          subtitle="Don't let manual registrations slow you down. Upgrade to NarenNet's autonomous OPD today."
          buttonText="Start Free OPD Audit"
        />

        <Footer />
      </div>
    </>
  );
}
