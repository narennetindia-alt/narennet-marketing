import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import HospitalEcosystemDiagram from '../../components/ecosystem/HospitalEcosystemDiagram';
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
  DollarSign,
  Smartphone
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
        <title>AI Hospital ERP Software | NarenNet Hospital Cloud</title>
        <meta name="description" content="NarenNet Hospital Cloud is an AI-powered hospital ERP platform with patient management, pharmacy automation, digital medical records, and healthcare analytics." />
        <meta name="keywords" content="hospital management software, hospital ERP software, AI healthcare platform, hospital SaaS system, digital hospital software, hospital automation system" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg pt-20">
        <HeroSection 
          title="NarenNet Hospital Cloud"
          subtitle="AI-powered hospital ERP and healthcare management platform."
          description="A complete SaaS ecosystem for hospitals including patient management, pharmacy automation, AI insights, and secure digital medical records."
          primaryCta="Request Demo"
          secondaryCta="See Demo"
          secondaryCtaLink="https://hospitaldemo-narennet.netlify.app"
          badge="AI Healthcare SaaS"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-[16/9] overflow-hidden shadow-2xl glass group">
               <iframe 
                 src="https://hospitaldemo-narennet.netlify.app" 
                 title="Hospital Demo Dashboard"
                 className="absolute top-0 left-0 w-[125%] h-[125%] border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ transform: 'scale(0.8)', transformOrigin: 'top left', pointerEvents: 'none' }} 
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-brand-accent/20 rounded-2xl pointer-events-none" />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
          </div>
        </HeroSection>

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
              
              <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-[4/3] overflow-hidden shadow-2xl group">
                 <iframe 
                   src="https://hospitaldemo-narennet.netlify.app" 
                   title="Hospital Real-time Dashboard Demo"
                   loading="lazy"
                   className="absolute top-0 left-0 w-[150%] h-[150%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ transform: 'scale(0.666)', transformOrigin: 'top left', pointerEvents: 'none' }} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/80 via-transparent to-brand-accent/10 pointer-events-none" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <HospitalEcosystemDiagram />

        {/* Hospital ERP Section */}
        <section className="py-24 border-y border-white/5 bg-brand-bg relative overflow-hidden">
          <div className="container-wide px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Hospital ERP</h2>
                  <p className="text-xl text-brand-secondary mb-8 leading-relaxed">
                    Complete hospital management suite designed for modern healthcare facilities. Automate workflows from front-desk to discharge.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: 'Patient registration', desc: 'Secure digital intake' },
                      { title: 'Doctor scheduling', desc: 'Smart roster management' },
                      { title: 'Appointment automation', desc: 'Reduce no-shows' },
                      { title: 'Billing & Insurance', desc: 'Seamless claims processing' },
                      { title: 'Staff Management', desc: 'HR & Payroll integrated' }
                    ].map((feature, i) => (
                      <div key={i} className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 glass card-glow">
                        <span className="text-brand-accent font-bold mb-1">{feature.title}</span>
                        <span className="text-brand-secondary text-sm">{feature.desc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-square lg:aspect-[4/3] overflow-hidden shadow-2xl glass group"
              >
                 <iframe 
                   src="https://hospitaldemo-narennet.netlify.app" 
                   title="Hospital ERP Demo"
                   loading="lazy"
                   className="absolute top-0 left-0 w-[150%] h-[150%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ transform: 'scale(0.666)', transformOrigin: 'top left', pointerEvents: 'none' }} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-bl from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Smart Pharmacy Section */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="container-wide px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-video overflow-hidden shadow-2xl glass group"
              >
                 <iframe 
                   src="https://hospitaldemo-narennet.netlify.app" 
                   title="Smart Pharmacy Demo"
                   loading="lazy"
                   className="absolute top-0 left-0 w-[150%] h-[150%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ transform: 'scale(0.666)', transformOrigin: 'top left', pointerEvents: 'none' }} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </motion.div>
              <div className="order-1 lg:order-2">
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Smart Pharmacy</h2>
                  <p className="text-xl text-brand-secondary mb-8 leading-relaxed">
                    Intelligent inventory and prescription management. Full integration with hospital EMR for error-free dispensing.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Medicine inventory tracking',
                      'Expiry alerts & automation',
                      'Prescription-billing linking',
                      'Supplier & stock management',
                      'Pharmacy billing system'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-medium">
                        <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                          <Zap className="w-3 h-3" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Healthcare Intelligence Section */}
        <section className="py-24 border-y border-white/5 bg-brand-bg relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,125,38,0.1)_0%,transparent_70%)] pointer-events-none" />
           <div className="container-wide px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">AI Healthcare Intelligence</h2>
                 <p className="text-xl text-brand-secondary">Leveraging predictive analytics to optimize hospital performance and patient outcomes.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { title: 'Predict Patient Load', desc: 'Smart staffing based on predicted arrivals.', icon: Users },
                   { title: 'Hospital Analytics', desc: 'Real-time performance dashboards.', icon: LineChart },
                   { title: 'Treatment Analysis', desc: 'Analyze outcome patterns for excellence.', icon: Activity },
                   { title: 'Resource Opt.', desc: 'Optimize OR and bed utilization.', icon: TrendingUp }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-2xl bg-white/20 border border-white/10 glass card-glow group">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-all duration-300">
                         <item.icon className="w-6 h-6 text-brand-accent group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase">{item.title}</h3>
                      <p className="text-brand-secondary text-sm">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Digital Medical Records Section */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="container-wide px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Digital Medical Records</h2>
                  <p className="text-xl text-brand-secondary mb-8 leading-relaxed">
                    Secure, cloud-based patient data management. Accessible, standardized, and interoperable medical history at your fingertips.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { title: 'Cloud Patient Files', icon: HardDrive },
                      { title: 'Secure Encrypted Storage', icon: ShieldCheck },
                      { title: 'Instant Report Sharing', icon: LinkIcon },
                      { title: 'Granular Access Control', icon: ShieldCheck }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-white">
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-brand-accent" />
                        </div>
                        <span className="font-bold uppercase tracking-wider text-sm">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative"
              >
                 <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-[4/3] lg:aspect-[16/9] overflow-hidden shadow-2xl glass group relative">
                    <iframe 
                      src="https://hospitaldemo-narennet.netlify.app" 
                      title="Digital Medical Records Demo"
                      loading="lazy"
                      className="absolute top-0 left-0 w-[150%] h-[150%] border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                      style={{ transform: 'scale(0.666)', transformOrigin: 'top left', pointerEvents: 'none' }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 blur-[60px] rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Ecosystem Section */}
        <section className="py-24 bg-brand-bg relative overflow-hidden">
           <div className="container-wide px-6 text-center">
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase"
              >
                 Mobile Ecosystem
              </motion.h2>
              <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="text-xl text-brand-secondary mb-16 max-w-2xl mx-auto"
              >
                 Empowering every stakeholder with dedicated mobile experiences.
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-12">
                 {[
                   { title: 'Doctor App', desc: 'Review vitals and approve reports on the go.' },
                   { title: 'Patient App', desc: 'Book appointments and access health records.' },
                   { title: 'Hospital Admin App', desc: 'Monitor revenue and bed occupancy anytime.' }
                 ].map((app, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 rounded-3xl bg-white/5 border border-white/10 glass card-glow relative"
                   >
                     <div className="aspect-[9/16] rounded-2xl border border-white/10 bg-[#0A0A0A] mb-8 overflow-hidden relative group">
                        <iframe 
                           src="https://hospitaldemo-narennet.netlify.app" 
                           title={app.title}
                           loading="lazy"
                           className="absolute top-0 left-0 w-[150%] h-[150%] border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                           style={{ transform: 'scale(0.666)', transformOrigin: 'top left', pointerEvents: 'none' }} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 uppercase">{app.title}</h3>
                     <p className="text-brand-secondary text-sm">{app.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Build the Future of Healthcare with NarenNet"
          subtitle="Transform your facility into an AI-powered smart hospital today."
          buttonText="Start Demo"
        />
      </div>
    </>
  );
}
