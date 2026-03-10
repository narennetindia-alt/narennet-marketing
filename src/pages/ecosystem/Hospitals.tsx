import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import EcosystemDiagram from '../../components/ecosystem/EcosystemDiagram';
import CTASection from '../../components/ecosystem/CTASection';
import { 
  Building2, 
  Users, 
  CalendarCheck, 
  CreditCard,
  Pill,
  Bell,
  Link as LinkIcon,
  Truck,
  TrendingUp,
  LineChart,
  Activity,
  HardDrive,
  ShieldCheck,
  Zap,
  LayoutDashboard,
  BedDouble,
  DollarSign
} from 'lucide-react';

export default function Hospitals() {
  const hospitalFeatures = [
    {
      title: 'Hospital ERP',
      description: 'Complete management suite for modern healthcare facilities.',
      icon: Building2,
      features: ['Patient registration', 'Doctor scheduling', 'Appointment automation', 'Billing and insurance']
    },
    {
      title: 'Smart Pharmacy',
      description: 'Intelligent inventory and prescription management.',
      icon: Pill,
      features: ['Medicine inventory tracking', 'Expiry alerts', 'Prescription linking', 'Supplier management'],
      delay: 0.2
    },
    {
      title: 'AI Insights',
      description: 'Predictive analytics for better healthcare outcomes.',
      icon: TrendingUp,
      features: ['Predict patient load', 'Hospital analytics', 'Treatment performance', 'Resource optimization'],
      delay: 0.3
    },
    {
      title: 'Digital Records',
      description: 'Secure, cloud-based patient data management.',
      icon: HardDrive,
      features: ['Cloud patient files', 'Secure data storage', 'Instant report sharing', 'Access control'],
      delay: 0.4
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Hospital Ecosystem | NarenNet</title>
        <meta name="description" content="A complete digital infrastructure that powers modern hospitals with automation, AI insights, and patient-centered technology." />
        <meta name="keywords" content="hospital management software, hospital ERP system, AI healthcare software, digital hospital platform" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg pt-20">
        <HeroSection 
          title="Smart Hospital Ecosystem"
          subtitle="A complete digital infrastructure that powers modern hospitals with automation, AI insights, and patient-centered technology."
          primaryCta="Request Demo"
          secondaryCta="Explore Platform"
          badge="Healthcare IT"
        />

        <FeatureCards 
          title="Comprehensive Hospital Management"
          subtitle="Everything you need to run a modern, efficient healthcare facility."
          features={hospitalFeatures}
        />

        {/* Dashboard Preview Section */}
        <section className="py-24 bg-brand-bg relative">
          <div className="container-wide px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Real-time Hospital Dashboard</h2>
                <p className="text-lg text-brand-secondary mb-8">
                  Get instant visibility into every aspect of your hospital operations. Monitor patient flow, bed availability, and revenue in real-time.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Real-time statistics', icon: Activity },
                    { title: 'Bed management alerts', icon: BedDouble },
                    { title: 'Revenue analytics', icon: DollarSign }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-brand-accent" />
                      </div>
                      <span className="font-bold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-[4/3] overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent" />
                 {/* Mock UI elements for the dashboard */}
                 <div className="absolute inset-4 rounded-xl border border-white/5 bg-white/5 p-6 flex flex-col gap-4">
                    <div className="flex gap-4 mb-4">
                      <div className="h-24 flex-1 rounded-lg bg-green-500/20 border border-green-500/30 flex px-4 items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"/>
                        <span className="text-green-500 font-bold">12 Active ICUs</span>
                      </div>
                      <div className="h-24 flex-1 rounded-lg bg-brand-accent/20 border border-brand-accent/30 flex px-4 items-center">
                        <div className="h-2 w-2 rounded-full bg-brand-accent mr-2"/>
                         <span className="text-brand-accent font-bold">45 Bed Available</span>
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg border border-white/5 bg-white/5 relative overflow-hidden">
                       <svg className="absolute bottom-0 w-full h-1/2 opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="#38BDF8" />
                       </svg>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <EcosystemDiagram />

        <CTASection 
          title="Transform Your Healthcare Facility"
          subtitle="Join dozens of hospitals already using NarenNet to modernize their operations and improve patient care."
          buttonText="Schedule a Consultation"
        />
      </div>
    </>
  );
}
