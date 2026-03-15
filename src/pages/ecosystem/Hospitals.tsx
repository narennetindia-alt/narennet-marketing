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
  Smartphone,
  Stethoscope,
  Calendar,
  FileText,
  Home
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
            <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-[16/9] overflow-hidden shadow-2xl glass p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none" />
              
              {/* Mock Dashboard UI */}
              <div className="h-full flex flex-col gap-4">
                {/* Header */}
                <div className="h-12 border-b border-white/5 flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="h-6 w-32 rounded bg-white/5" />
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 px-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-center px-4">
                      <div className="h-3 w-12 rounded bg-white/10 mb-2" />
                      <div className="h-5 w-20 rounded bg-white/20" />
                    </div>
                  ))}
                </div>
                
                {/* Main Content */}
                <div className="flex-1 flex gap-4 px-4 pb-4">
                  <div className="flex-[2] rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
                    <svg className="absolute bottom-0 w-full h-1/2 opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="#F27D26" />
                    </svg>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-1 rounded-xl bg-white/5 border border-white/5" />
                    <div className="flex-1 rounded-xl bg-white/5 border border-white/5" />
                  </div>
                </div>
              </div>
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
                className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-square overflow-hidden shadow-2xl glass p-8"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent" />
                 <div className="h-full border border-white/5 rounded-xl bg-white/5 flex flex-col p-6 overflow-hidden">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-4 w-32 rounded bg-white/20" />
                      <div className="h-8 w-8 rounded-full bg-brand-accent/20 border border-brand-accent/40" />
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-12 w-full rounded-lg bg-white/5 border border-white/5 flex items-center px-4">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-4" />
                          <div className="h-2 w-24 rounded bg-white/10" />
                        </div>
                      ))}
                    </div>
                 </div>
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
                className="order-2 lg:order-1 relative rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-video overflow-hidden shadow-2xl glass p-8"
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-xl border border-white/5 bg-brand-accent/5 p-4 flex flex-col justify-between">
                    <Pill className="w-8 h-8 text-brand-accent" />
                    <div className="space-y-2">
                       <div className="h-2 w-full rounded bg-brand-accent/20" />
                       <div className="h-2 w-2/3 rounded bg-brand-accent/20" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-4 flex flex-col justify-between">
                    <Activity className="w-8 h-8 text-brand-secondary" />
                    <div className="space-y-2">
                       <div className="h-2 w-full rounded bg-white/10" />
                       <div className="h-2 w-2/3 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
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
                 <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] aspect-video overflow-hidden shadow-2xl glass p-4 flex items-center justify-center">
                    <div className="w-full max-w-sm space-y-4">
                       <div className="h-4 w-3/4 rounded bg-white/20" />
                       <div className="h-4 w-1/2 rounded bg-white/10" />
                       <div className="grid grid-cols-3 gap-2">
                          <div className="h-20 rounded-lg bg-white/5 border border-white/5" />
                          <div className="h-20 rounded-lg bg-white/5 border border-white/5" />
                          <div className="h-20 rounded-lg bg-white/5 border border-white/5" />
                       </div>
                    </div>
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
                 {/* Doctor App Mockup */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="p-4 sm:p-8 rounded-3xl bg-white/5 border border-white/10 glass card-glow relative"
                 >
                   <div className="aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#0B0F19] mb-8 overflow-hidden relative shadow-2xl flex flex-col mx-auto max-w-[280px]">
                      <div className="px-5 pt-12 pb-4 flex justify-between items-center">
                         <div className="text-left">
                            <div className="text-gray-400 text-[10px] uppercase">Good Morning,</div>
                            <div className="text-white font-bold text-sm">Dr. Jenkins</div>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/10 overflow-hidden">
                            <img src="/ceo-naren.jpeg" alt="Doctor" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                         </div>
                      </div>
                      
                      <div className="mx-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-left relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                         <div className="text-white/80 text-[10px] font-medium mb-1 relative z-10">Next Appointment</div>
                         <div className="text-white font-bold text-2xl mb-2 relative z-10">10:30 AM</div>
                         <div className="text-white/90 text-xs mb-4 relative z-10">Bob Johnson • Checkup</div>
                         <div className="flex gap-2 relative z-10">
                            <button className="flex-1 py-1.5 rounded-lg bg-white/20 text-white text-[10px] font-bold">View History</button>
                            <button className="flex-1 py-1.5 rounded-lg bg-white text-blue-600 text-[10px] font-bold shadow-md">Start Consult</button>
                         </div>
                      </div>

                      <div className="px-4 mt-6 text-left flex-1">
                         <div className="text-white font-bold text-xs mb-3">Today's Queue</div>
                         <div className="space-y-2">
                            {[
                              { name: 'Patient 1', time: '11:15 AM' },
                              { name: 'Patient 2', time: '11:45 AM' }
                            ].map((pt, i) => (
                              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/50">PT</div>
                                    <div>
                                       <div className="text-white text-xs font-semibold">{pt.name}</div>
                                       <div className="text-gray-400 text-[9px]">{pt.time}</div>
                                    </div>
                                 </div>
                                 <div className="w-2 h-2 rounded-full bg-orange-500" />
                              </div>
                            ))}
                         </div>
                      </div>

                      <div className="mt-auto h-16 border-t border-white/10 bg-[#0B0F19]/90 backdrop-blur-md flex items-center justify-around px-2">
                         <div className="flex flex-col items-center gap-1 opacity-100">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="text-[8px] text-blue-400 font-bold">Schedule</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Patients</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <FileText className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Records</span>
                         </div>
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 uppercase">Doctor App</h3>
                   <p className="text-brand-secondary text-sm">Review vitals and approve reports on the go.</p>
                 </motion.div>

                 {/* Patient App Mockup */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="p-4 sm:p-8 rounded-3xl bg-white/5 border border-white/10 glass card-glow relative"
                 >
                   <div className="aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#0B0F19] mb-8 overflow-hidden relative shadow-2xl flex flex-col mx-auto max-w-[280px]">
                      <div className="px-5 pt-12 pb-4 flex justify-between items-center">
                         <div className="text-left">
                            <div className="text-gray-400 text-[10px] uppercase">Welcome back,</div>
                            <div className="text-white font-bold text-sm">Bob Johnson</div>
                         </div>
                         <Bell className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
                         <div className="p-3 rounded-xl bg-[#0B251C] border border-green-500/30 flex flex-col items-center justify-center gap-2">
                            <Calendar className="w-5 h-5 text-green-500" />
                            <span className="text-green-500 text-[10px] font-bold">Book Appt</span>
                         </div>
                         <div className="p-3 rounded-xl bg-blue-900/20 border border-blue-500/30 flex flex-col items-center justify-center gap-2">
                            <FileText className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 text-[10px] font-bold">My Reports</span>
                         </div>
                      </div>

                      <div className="px-4 text-left mb-6">
                         <div className="text-white font-bold text-[11px] mb-2">Upcoming Visit</div>
                         <div className="p-3 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                            <div className="flex justify-between items-start mb-3">
                               <div>
                                  <div className="text-white text-xs font-bold">Cardiology Checkup</div>
                                  <div className="text-gray-400 text-[10px]">Dr. Sarah Jenkins</div>
                               </div>
                               <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                  <Stethoscope className="w-3 h-3 text-blue-400" />
                               </div>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-green-400 bg-green-500/10 w-fit px-2 py-1 rounded">
                               <Calendar className="w-3 h-3" />
                               Today, 10:30 AM
                            </div>
                         </div>
                      </div>

                      <div className="px-4 text-left flex-1">
                         <div className="text-white font-bold text-[11px] mb-2">Recent Prescriptions</div>
                         <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                               <FileText className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                               <div className="text-white text-xs font-bold">Amoxicillin 500mg</div>
                               <div className="text-gray-400 text-[9px]">Issued: Sep 05, 2025</div>
                            </div>
                         </div>
                      </div>

                      <div className="mt-auto h-16 border-t border-white/10 bg-[#0B0F19]/90 backdrop-blur-md flex items-center justify-around px-2">
                         <div className="flex flex-col items-center gap-1 opacity-100">
                            <Home className="w-4 h-4 text-green-400" />
                            <span className="text-[8px] text-green-400 font-bold">Home</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Visits</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <FileText className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Records</span>
                         </div>
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 uppercase">Patient App</h3>
                   <p className="text-brand-secondary text-sm">Book appointments and access health records.</p>
                 </motion.div>

                 {/* Admin App Mockup */}
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="p-4 sm:p-8 rounded-3xl bg-white/5 border border-white/10 glass card-glow relative"
                 >
                   <div className="aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#0B0F19] mb-8 overflow-hidden relative shadow-2xl flex flex-col mx-auto max-w-[280px]">
                      <div className="px-5 pt-12 pb-4 flex justify-between items-center">
                         <div className="text-left">
                            <div className="text-gray-400 text-[10px] uppercase">Hospital Overview</div>
                            <div className="text-white font-bold text-sm">Central Hospital</div>
                         </div>
                         <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center">
                            <Activity className="w-4 h-4 text-orange-400" />
                         </div>
                      </div>
                      
                      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
                         <div className="p-3 rounded-xl bg-white/5 border border-orange-500/30 flex flex-col justify-center text-left">
                            <div className="text-gray-400 text-[9px] font-bold uppercase mb-1">Revenue Today</div>
                            <div className="text-orange-400 font-bold text-lg">$45.2k</div>
                         </div>
                         <div className="p-3 rounded-xl bg-white/5 border border-blue-500/30 flex flex-col justify-center text-left">
                            <div className="text-gray-400 text-[9px] font-bold uppercase mb-1">Patients Today</div>
                            <div className="text-blue-400 font-bold text-lg">342</div>
                         </div>
                      </div>

                      <div className="px-4 text-left mb-6">
                         <div className="text-white font-bold text-[11px] mb-2">Live Activity</div>
                         <div className="space-y-2">
                            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                               <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                                     <Users className="w-3 h-3 text-green-400" />
                                  </div>
                                  <div>
                                     <div className="text-white text-xs font-bold">ER Capacity</div>
                                     <div className="text-gray-400 text-[9px]">85% Full</div>
                                  </div>
                               </div>
                               <span className="text-[9px] text-green-400 font-bold">Stable</span>
                            </div>
                            <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                               <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center">
                                     <Activity className="w-3 h-3 text-red-400" />
                                  </div>
                                  <div>
                                     <div className="text-white text-xs font-bold">ICU Capacity</div>
                                     <div className="text-gray-400 text-[9px]">95% Full</div>
                                  </div>
                               </div>
                               <span className="text-[9px] text-red-500 font-bold">Critical</span>
                            </div>
                         </div>
                      </div>

                      <div className="px-4 text-left flex-1">
                         <div className="p-3 rounded-xl bg-purple-900/20 border border-purple-500/40 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 blur-xl pointer-events-none" />
                            <div className="text-purple-400 text-[10px] font-bold uppercase mb-1 drop-shadow">AI Insight</div>
                            <div className="text-purple-200/90 text-[10px] leading-relaxed">
                               Increase ER staffing tomorrow due to predicted high patient load.
                            </div>
                         </div>
                      </div>

                      <div className="mt-auto h-16 border-t border-white/10 bg-[#0B0F19]/90 backdrop-blur-md flex items-center justify-around px-2">
                         <div className="flex flex-col items-center gap-1 opacity-100">
                            <Activity className="w-4 h-4 text-orange-400" />
                            <span className="text-[8px] text-orange-400 font-bold">Overview</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <DollarSign className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Finance</span>
                         </div>
                         <div className="flex flex-col items-center gap-1 opacity-50">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-[8px] text-white">Staff</span>
                         </div>
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 uppercase">Admin App</h3>
                   <p className="text-brand-secondary text-sm">Monitor revenue and bed occupancy anytime.</p>
                 </motion.div>
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
