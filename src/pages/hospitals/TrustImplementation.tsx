import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Smartphone,
  Globe,
  TrendingUp,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function TrustImplementation() {
  return (
    <>
      <Helmet>
        <title>Hospital Software Implementation | Local 24/7 Support | NarenNet</title>
        <meta name="description" content="Switch to NarenNet in 7 days or less. Discover our foolproof implementation process and local TN support network." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Migration Excellence"
          title="7-Day Migration: From Legacy Chaos to Digital Clarity"
          subtitle="Implementation & Support"
          description="Switching hospital software doesn't have to be a nightmare. Our expert implementation teams handle everything—from data migration to staff training—in record time."
          primaryCta="View Migration Roadmap"
          primaryCtaLink="/contact"
          secondaryCta="Explore Modules"
          secondaryCtaLink="/hospital-management-software"
        />

        {/* Timeline Content */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Foolproof implementation. Zero Downtime.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    Most hospital software projects fail during implementation. NarenNet succeed because we follow a battle-tested protocol that prioritizes clinical stability and staff confidence.
                 </p>
              </div>

              <div className="space-y-4">
                 {[
                   { step: 'Day 1-2', title: 'Data Audit & Cleansing', desc: 'Securely extract and clean your data from legacy systems.' },
                   { step: 'Day 3-4', title: 'Department Configuration', desc: 'Tailor workflows for your specific OPD, IPD, and Lab needs.' },
                   { step: 'Day 5-6', title: 'Hands-on Staff Training', desc: 'On-site training for doctors, nurses, and administrative staff.' },
                   { step: 'Day 07', title: 'Autonomous Go-Live', desc: 'Seamless switch over with our expert team standing by your side.' }
                 ].map((s, i) => (
                   <div key={i} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 md:items-center group hover:bg-white hover:shadow-xl transition-all">
                      <div className="text-2xl font-black text-brand-accent italic uppercase tracking-wider md:w-32">{s.step}</div>
                      <div className="flex-1">
                         <h4 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h4>
                         <p className="text-gray-500 font-medium">{s.desc}</p>
                      </div>
                      <Clock className="text-brand-accent/20 group-hover:text-brand-accent transition-colors" size={32} />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Schedule Your Digital Transformation"
          subtitle="Our region-specific implementation teams are ready to assist. Let's make the switch together."
          buttonText="Request Implementation Audit"
        />

        <Footer />
      </div>
    </>
  );
}
