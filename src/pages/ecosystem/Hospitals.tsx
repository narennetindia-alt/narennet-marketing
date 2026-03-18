import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  PlusCircle, 
  Users, 
  Calendar, 
  Activity, 
  Clipboard, 
  Stethoscope, 
  Pill,
  Microscope,
  CreditCard,
  ShieldCheck,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MessageCircle,
  Clock,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import HospitalEcosystemDiagram from '../../components/ecosystem/HospitalEcosystemDiagram';
import CTASection from '../../components/ecosystem/CTASection';
import LeadCaptureModal from '../../components/LeadCaptureModal';
import { useState, useEffect } from 'react';

export default function Hospitals() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownModal) {
        setIsLeadModalOpen(true);
        setHasShownModal(true);
      }
    }, 20000);
    return () => clearTimeout(timer);
  }, [hasShownModal]);

  const mainFeatures = [
    {
      title: 'Smart OPD Management',
      description: 'Streamline patient registration, queue management, and digital prescriptions.',
      icon: Stethoscope,
      features: ['Automated Token System', 'Digital Prescriptions', 'Patient History Access']
    },
    {
      title: 'Laboratory Information',
      description: 'Fully integrated LIS with automated machine interfacing and barcode tracking.',
      icon: Microscope,
      features: ['Machine Interfacing', 'Auto-SMS Reports', 'QC Management']
    },
    {
      title: 'Pharmacy & Inventory',
      description: 'Complete drug lifecycle management with expiry alerts and batch tracking.',
      icon: Pill,
      features: ['Expiry Notifications', 'Low Stock Alerts', 'Sales Analytics']
    },
    {
      title: 'IPD & Billing',
      description: 'Manage ward allocations, daily progress notes, and complex TPA billing.',
      icon: CreditCard,
      features: ['Ward Management', 'TPA Integration', 'Advance Tracking']
    }
  ];

  const highlights = [
    { title: '99.9% Uptime', icon: Zap, desc: 'Enterprise-grade cloud infrastructure with multi-region redundancy.' },
    { title: 'NABH Ready', icon: ShieldCheck, desc: 'Built-in compliance modules specifically for NABH & ISO standards.' },
    { title: 'Global Access', icon: Globe, desc: 'Manage your entire healthcare network from a single dashboard.' },
    { title: '24/7 Support', icon: CheckCircle2, desc: 'Dedicated implementation team and round-the-clock technical support.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital Management Ecosystem | NarenNet Cloud</title>
        <meta name="description" content="Next-generation cloud-based hospital management system for clinics and multispecialty hospitals." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg text-brand-primary selection:bg-brand-accent/30 selection:text-brand-accent">
        <Navbar />

        {/* Hero Section — DARK */}
        <HeroSection
          badge="Now Powering 50+ Hospitals"
          title="The Future of Digital Healthcare"
          subtitle="Hospital Management Reimagined"
          description="A complete clinical and operational ecosystem designed for modern medical institutions. Scale your healthcare services with AI-driven insights and zero-downtime infrastructure."
          primaryCta="Experience the Demo"
          secondaryCta="Download Brochure"
        >
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden border border-brand-accent/20 bg-brand-deep shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-brand-deep to-brand-primary p-4 md:p-8 flex items-center justify-center">
                 <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-brand-accent/10 border border-brand-accent/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                       <PlayCircle size={48} className="text-brand-accent" />
                    </div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm">Watch Platform Tour</span>
                 </div>
              </div>
            </div>
          </div>
        </HeroSection>

        {/* Stats Section — LIGHT */}
        <section className="py-20 border-b border-brand-border bg-white">
          <div className="container-wide px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Patient Encounters', value: '2M+', icon: Users },
                { label: 'Active Doctors', value: '1,500+', icon: Stethoscope },
                { label: 'Tests Conducted', value: '500K+', icon: Microscope },
                { label: 'Bills Processed', value: '₹10Cr+', icon: CreditCard }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                   <stat.icon size={24} className="text-brand-accent mb-4" />
                   <div className="text-3xl md:text-5xl font-bold text-brand-primary mb-2">{stat.value}</div>
                   <div className="text-brand-secondary text-sm font-semibold uppercase tracking-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Modules Section — LIGHT */}
        <FeatureCards 
          title="Clinical Excellence Modules"
          subtitle="Precision-engineered features for every department in your hospital."
          features={mainFeatures}
        />

        {/* Ecosystem High-Tech Diagram — DARK */}
        <HospitalEcosystemDiagram />

        {/* Key Benefits — LIGHT */}
        <section className="py-24 bg-white border-y border-brand-border">
          <div className="container-wide px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-brand-card border border-brand-border hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section — LIGHT GRAY */}
        <section className="py-24 bg-brand-card overflow-hidden">
           <div className="container-wide px-6 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 mb-8">
                 <Heart className="text-brand-accent" fill="currentColor" size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-8 italic">
                "NarenNet has completely digitized our operations. The offline capability is a lifesaver in areas with spotty internet."
              </h2>
              <div className="flex items-center justify-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-border" />
                 <div className="text-left">
                    <div className="font-bold text-brand-primary underline decoration-brand-accent decoration-2 underline-offset-4">Dr. Rajesh Kumar</div>
                    <div className="text-xs text-brand-secondary font-bold uppercase tracking-wider">Chief Medical Officer, City Care Hospital</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Demo Experience — LIGHT */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                       Experience the <br />
                       <span className="text-brand-accent">Live Dashboard</span>
                    </h2>
                    <p className="text-lg text-brand-secondary mb-10 leading-relaxed font-medium">
                       Don't take our word for it. Explore the actual platform doctors and administrators use every single day. Full clinical workflow available for preview.
                    </p>
                    <div className="space-y-6 mb-12">
                       {[
                         { t: 'Live OPD Dashboard', d: 'Real-time patient wait times and appointment statuses.' },
                         { t: 'Interactive EHR', d: 'Experience the fastest charting interface in the industry.' },
                         { t: 'Admin Insights', d: 'Visual financial and operational KPIs in one view.' }
                       ].map(f => (
                         <div key={f.t} className="flex gap-4">
                            <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={20} />
                            <div>
                               <h4 className="font-bold text-brand-primary">{f.t}</h4>
                               <p className="text-brand-secondary text-sm">{f.d}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                    >
                      Book a Personalized Demo <ArrowRight size={20} />
                    </Link>
                 </div>
                 <div className="relative group">
                    <div className="absolute inset-0 bg-brand-accent/10 blur-[100px] rounded-full group-hover:bg-brand-accent/20 transition-colors" />
                    <div className="relative rounded-3xl border border-brand-border bg-brand-card overflow-hidden shadow-2xl p-2">
                       <div className="bg-white rounded-[22px] overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                          <img 
                            src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop" 
                            alt="Hospital Dashboard"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-brand-deep/60 backdrop-blur-[2px]" />
                          <div className="relative z-10 text-center text-white p-8">
                             <Clock className="w-12 h-12 text-brand-accent mx-auto mb-6" />
                             <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest text-brand-accent">Live Link Coming Soon</h3>
                             <p className="text-white/60 text-sm max-w-xs mx-auto">We are currently updating our public demo instance with the latest clinical features.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Section — DARK */}
        <CTASection 
          title="Ready to Transform Your Hospital?"
          subtitle="Join the digital revolution in healthcare. Our team will handle the entire migration, training, and setup for your institution."
          buttonText="Get a Custom Quote"
        />

        <Footer />
      </div>

      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
    </>
  );
}
