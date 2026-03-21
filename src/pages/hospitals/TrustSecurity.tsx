import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Activity,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function TrustSecurity() {
  return (
    <>
      <Helmet>
        <title>Hospital Data Security & Privacy | HIPAA Ready HMS | NarenNet</title>
        <meta name="description" content="Your patient data is a sacred trust. NarenNet provides bank-grade security, HIPAA-aligned encryption, and localized data sovereignty for hospitals." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Enterprise Grade Trust"
          title="Uncompromising Security for Patient Data"
          subtitle="Security & Data Privacy"
          description="In the era of digital healthcare, security isn't a feature—it's the foundation of your hospital's reputation. NarenNet employs the industry's most rigorous data protection protocols."
          primaryCta="Download Security Whitepaper"
          primaryCtaLink="/contact"
          secondaryCta="Our Privacy Policy"
          secondaryCtaLink="/about"
        >
           <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
              {[
                { l: 'HIPAA Ready', i: ShieldCheck },
                { l: 'AES-256 Encryption', i: Lock },
                { l: 'Live Auditing', i: Activity }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center gap-3">
                   <item.i className="text-brand-accent" size={24} />
                   <div className="text-white font-bold text-[10px] uppercase tracking-widest">{item.l}</div>
                </div>
              ))}
           </div>
        </HeroSection>

        {/* Main Trust Content */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Data Sovereignty First.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    We believe you should have total control over your hospital's data. NarenNet's infrastructure is built to exceed Indian healthcare IT standards while aligning with global best practices like GDPR and HIPAA.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {[
                   { t: 'Multi-Layer Encryption', d: 'All data is encrypted in transit and at rest using military-grade security protocols.' },
                   { t: 'Role-Based Access Control', d: 'Granular permissions ensure that only authorized personnel can view sensitive clinical records.' },
                   { t: 'Immutable Audit Trails', d: 'Every single system action is logged, preventing internal tampering or data leakage.' },
                   { t: 'Localized Data Hosting', d: 'High-speed local servers ensure low latency and compliance with state-level data laws.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-brand-deep flex items-center justify-center shrink-0">
                         <Lock className="text-brand-accent" size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3">{item.t}</h3>
                         <p className="text-gray-500 font-medium leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Secure Your Hospital's Digital Future"
          subtitle="Don't compromise on patient privacy. Partner with the security leaders in hospital ERP."
          buttonText="Book Security Consultation"
        />

        <Footer />
      </div>
    </>
  );
}
