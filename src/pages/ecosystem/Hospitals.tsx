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
  Home,
  Search,
  Filter,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronRight,
  BarChart3,
  PieChart
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
            <div className="rounded-2xl border-[6px] border-[#1a1a1a] bg-[#0B0F15] aspect-[16/9] overflow-hidden shadow-2xl flex flex-col mx-auto w-full relative z-10">
              {/* Browser/Window Header */}
              <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="h-4 w-64 bg-white/5 rounded text-[9px] text-gray-500 flex items-center justify-center font-mono tracking-wider">
                     narennet.cloud/hospital-erp
                  </div>
                </div>
              </div>
              
              {/* SaaS App Layout */}
              <div className="flex flex-1 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none z-0" />
                 
                 {/* Sidebar */}
                 <div className="w-48 xl:w-56 border-r border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md flex flex-col py-4 px-3 z-10 hidden md:flex">
                    <div className="flex items-center gap-2 px-2 mb-8">
                       <Building2 className="w-6 h-6 text-brand-accent" />
                       <span className="text-white font-bold tracking-wide">NarenNet ERP</span>
                    </div>
                    <div className="space-y-1">
                       <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent cursor-pointer">
                          <LayoutDashboard className="w-4 h-4" />
                          <span className="text-sm font-medium">Dashboard</span>
                       </div>
                       {[
                         { icon: Users, label: 'Patient Directory' },
                         { icon: Calendar, label: 'Appointments' },
                         { icon: HardDrive, label: 'Medical Records' },
                         { icon: Pill, label: 'Pharmacy' },
                         { icon: DollarSign, label: 'Billing & Finance' },
                         { icon: BarChart3, label: 'Analytics' },
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                             <item.icon className="w-4 h-4" />
                             <span className="text-sm font-medium">{item.label}</span>
                          </div>
                       ))}
                    </div>
                    <div className="mt-auto px-3 py-3 rounded-xl bg-gradient-to-br from-brand-accent/20 to-purple-500/20 border border-white/10 flex flex-col gap-2 relative overflow-hidden group">
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                       <Zap className="w-5 h-5 text-yellow-400 drop-shadow mb-1 relative z-10" />
                       <div className="text-white text-xs font-bold relative z-10">AI Copilot Active</div>
                       <div className="text-brand-secondary text-[10px] relative z-10">Analyzing 1,240 records</div>
                    </div>
                 </div>

                 {/* Main Content Area */}
                 <div className="flex-1 flex flex-col z-10 bg-[#0B0F15]/90 overflow-hidden">
                    {/* Topbar */}
                    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/5 backdrop-blur-md">
                       <div className="text-white font-bold text-sm lg:text-base">Good Morning, Admin</div>
                       <div className="flex items-center gap-4">
                          <div className="relative">
                             <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                             <input type="text" placeholder="Search patients, doctors..." className="bg-black/50 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-xs text-white outline-none focus:border-brand-accent/50 w-64 hidden xl:block" />
                          </div>
                          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center relative bg-black/50 cursor-pointer hover:bg-white/10">
                             <Bell className="w-4 h-4 text-gray-300" />
                             <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-red-500" />
                          </div>
                          <div className="flex items-center gap-2 cursor-pointer">
                             <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-accent/30">
                                <img src="/ceo-naren.jpeg" alt="Profile" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Dashboard Widgets */}
                    <div className="p-4 lg:p-6 flex-1 flex flex-col gap-4 lg:gap-6 overflow-hidden relative">
                       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
                          {[
                            { title: 'Total Patients', value: '2,845', change: '+12%', up: true, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                            { title: 'Appointments', value: '184', change: '+5%', up: true, icon: Calendar, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                            { title: 'ER Capacity', value: '82%', change: '-3%', up: false, icon: Activity, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                            { title: 'Revenue (MTD)', value: '$452K', change: '+18%', up: true, icon: DollarSign, color: 'text-green-400', bg: 'bg-green-500/10' },
                          ].map((stat, i) => (
                             <div key={i} className="bg-[#12161f] border border-white/5 rounded-xl p-3 lg:p-4 flex flex-col gap-2 lg:gap-3 shadow-lg hover:border-white/10 transition-colors">
                                <div className="flex justify-between items-start">
                                   <div className={`p-1.5 lg:p-2 rounded-lg ${stat.bg}`}>
                                      <stat.icon className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${stat.color}`} />
                                   </div>
                                   <span className={`text-[9px] lg:text-[10px] font-bold px-1.5 py-0.5 rounded ${stat.up ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                                      {stat.change}
                                   </span>
                                </div>
                                <div>
                                   <div className="text-xl lg:text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                                   <div className="text-[10px] lg:text-xs text-gray-400">{stat.title}</div>
                                </div>
                             </div>
                          ))}
                       </div>

                       <div className="flex gap-4 flex-1 overflow-hidden min-h-[150px]">
                          <div className="flex-[2] bg-[#12161f] border border-white/5 rounded-xl p-4 flex flex-col relative shadow-lg overflow-hidden group">
                             <div className="flex justify-between items-center mb-4 relative z-10 w-full">
                                <div className="text-white text-xs lg:text-sm font-bold">Hospital Admission Trend</div>
                                <select className="bg-black/50 border border-white/10 rounded-md text-[10px] lg:text-xs text-brand-secondary outline-none px-2 py-1">
                                   <option>This Week</option>
                                </select>
                             </div>
                             <div className="flex-1 relative w-full h-full mt-2">
                               <svg className="absolute inset-x-0 bottom-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700" preserveAspectRatio="none" viewBox="0 0 100 100">
                                 <path d="M0,100 L0,70 Q10,60 20,80 T40,40 T60,60 T80,30 L100,50 L100,100 Z" fill="url(#hero-gradient)" />
                                 <path d="M0,70 Q10,60 20,80 T40,40 T60,60 T80,30 L100,50" fill="none" stroke="#38BDF8" strokeWidth="2" className="drop-shadow-[0_4px_12px_rgba(56,189,248,0.8)]" />
                                 <defs>
                                    <linearGradient id="hero-gradient" x1="0" y1="0" x2="0" y2="1">
                                       <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                                       <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                                    </linearGradient>
                                 </defs>
                               </svg>
                               {/* Grid lines */}
                               <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                  <div className="w-full h-px bg-white/20" />
                                  <div className="w-full h-px bg-white/20" />
                                  <div className="w-full h-px bg-white/20" />
                                  <div className="w-full h-px bg-white/20" />
                                  <div className="w-full h-px bg-white/20" />
                               </div>
                             </div>
                          </div>
                          
                          <div className="flex-1 bg-[#12161f] border border-white/5 rounded-xl p-4 flex flex-col relative shadow-lg hidden md:flex">
                             <div className="text-white text-xs lg:text-sm font-bold mb-4">Department Load</div>
                             <div className="flex-1 flex flex-col justify-center gap-3 lg:gap-4">
                                {[
                                  { dept: 'Cardiology', load: 85, color: 'bg-red-500' },
                                  { dept: 'Neurology', load: 60, color: 'bg-purple-500' },
                                  { dept: 'Orthopedics', load: 45, color: 'bg-blue-500' },
                                  { dept: 'Pediatrics', load: 30, color: 'bg-green-500' }
                                ].map((item, i) => (
                                   <div key={i}>
                                      <div className="flex justify-between text-[9px] lg:text-[10px] text-gray-400 mb-1">
                                         <span>{item.dept}</span>
                                         <span>{item.load}%</span>
                                      </div>
                                      <div className="h-1.5 lg:h-2 w-full bg-black/50 rounded-full overflow-hidden">
                                         <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.load}%` }} />
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
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
              
              <div className="relative rounded-2xl border border-white/10 bg-[#0B0F19] aspect-[4/3] lg:aspect-video overflow-hidden shadow-2xl flex flex-col">
                 {/* Navbar */}
                 <div className="h-12 border-b border-white/10 bg-white/5 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                       <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-3">
                       <Search className="w-4 h-4 text-gray-400" />
                       <Bell className="w-4 h-4 text-gray-400" />
                       <div className="w-6 h-6 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center overflow-hidden">
                          <img src="/ceo-naren.jpeg" alt="Admin" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                       </div>
                    </div>
                 </div>
                 {/* Main Content */}
                 <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-white/10 bg-white/5 flex flex-col items-center py-4 space-y-6">
                       <LayoutDashboard className="w-5 h-5 text-brand-accent drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                       <Users className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                       <BedDouble className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                       <DollarSign className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                       <Activity className="w-5 h-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                    </div>
                    {/* Dashboard Content */}
                    <div className="flex-1 p-4 lg:p-6 flex flex-col gap-4 overflow-hidden bg-gradient-to-br from-[#0B0F19] to-black">
                       <div className="flex justify-between items-end mb-2">
                          <div>
                             <div className="text-white font-bold text-lg">Hospital Overview</div>
                             <div className="text-gray-400 text-xs">Live metrics across all departments</div>
                          </div>
                          <div className="text-[10px] lg:text-xs text-white/50 flex items-center gap-1"><Clock className="w-3 h-3"/> Last updated: Just now</div>
                       </div>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                          {[
                            { label: 'Active ICUs', val: '24', icon: Activity, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/20' },
                            { label: 'Beds Available', val: '142', icon: BedDouble, color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/20' },
                            { label: 'Total Revenue', val: '$84.5k', icon: DollarSign, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/20' }
                          ].map((stat, i) => (
                             <div key={i} className={`p-4 rounded-xl border ${stat.border} bg-white/5 flex flex-col gap-2 relative overflow-hidden group hover:bg-white/10 transition-colors cursor-default`}>
                                <div className="flex justify-between items-start relative z-10">
                                   <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.bg}`}>
                                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                   </div>
                                   <ArrowUpRight className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="relative z-10 mt-1">
                                   <div className="text-2xl font-bold text-white">{stat.val}</div>
                                   <div className="text-[10px] text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                             </div>
                          ))}
                       </div>

                       <div className="flex gap-4 mt-2 flex-1 min-h-0">
                          <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col relative overflow-hidden hidden sm:flex">
                             <div className="text-white text-xs font-bold mb-4 relative z-10">Patient Outcome Trend</div>
                             <svg className="absolute bottom-0 w-full h-[70%] opacity-40 left-0 hover:opacity-100 transition-opacity duration-500" preserveAspectRatio="none" viewBox="0 0 100 100">
                               <path d="M0,100 L0,60 Q20,30 40,70 T80,40 L100,50 L100,100 Z" fill="url(#gradient-blue)" />
                               <path d="M0,60 Q20,30 40,70 T80,40 L100,50" fill="none" stroke="#38BDF8" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                               <defs>
                                  <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
                                     <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                                  </linearGradient>
                               </defs>
                             </svg>
                          </div>
                       </div>
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
                className="relative rounded-2xl border border-white/10 bg-[#0B0F15] aspect-square lg:aspect-[4/3] overflow-hidden shadow-2xl p-6 flex flex-col"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none" />
                 
                 <div className="flex justify-between items-center mb-6 relative z-10 w-full">
                    <div className="text-white font-bold text-lg">Patient Directory</div>
                    <div className="flex gap-2 text-xs">
                       <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors">
                          <Filter className="w-3 h-3" /> Filter
                       </button>
                       <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand-accent hover:opacity-90 text-white font-medium shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
                          <Users className="w-3 h-3" /> Add Patient
                       </button>
                    </div>
                 </div>

                 <div className="flex-1 rounded-xl border border-white/10 bg-[#12161f] overflow-hidden flex flex-col relative z-10 shadow-inner">
                    <div className="grid grid-cols-4 gap-4 p-3 border-b border-white/10 bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-wider backdrop-blur-md">
                       <div className="col-span-2">Patient Details</div>
                       <div>Status</div>
                       <div>Last Visit</div>
                    </div>
                    <div className="flex flex-col flex-1 p-2 gap-1 overflow-hidden">
                       {[
                         { name: 'Sarah Connor', id: 'PT-84920', status: 'Admitted', statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30', visit: 'Today, 08:30 AM', icon: 'SC', avatarGradient: 'from-orange-500 to-red-500' },
                         { name: 'John Smith', id: 'PT-84921', status: 'Discharged', statusColor: 'bg-green-500/20 text-green-400 border-green-500/30', visit: 'Oct 12, 2025', icon: 'JS', avatarGradient: 'from-blue-500 to-indigo-500' },
                         { name: 'Emily Chen', id: 'PT-84922', status: 'Pending Triage', statusColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30', visit: 'Waiting (12m)', icon: 'EC', avatarGradient: 'from-purple-500 to-pink-500' },
                         { name: 'Michael Bay', id: 'PT-84923', status: 'Admitted', statusColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30', visit: 'Oct 11, 2025', icon: 'MB', avatarGradient: 'from-green-500 to-emerald-500' }
                       ].map((pt, i) => (
                          <div key={i} className="grid grid-cols-4 gap-4 items-center p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer group">
                             <div className="col-span-2 flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${pt.avatarGradient} flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-transparent group-hover:ring-white/20 transition-all`}>
                                   {pt.icon}
                                </div>
                                <div>
                                   <div className="text-white text-xs font-bold group-hover:text-brand-accent transition-colors">{pt.name}</div>
                                   <div className="text-gray-500 text-[10px]">{pt.id}</div>
                                </div>
                             </div>
                             <div>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded flex items-center w-fit border ${pt.statusColor}`}>
                                   {pt.status === 'Discharged' && <CheckCircle2 className="w-2.5 h-2.5 mr-1" />}
                                   {pt.status}
                                </span>
                             </div>
                             <div className="text-gray-400 flex items-center gap-1.5 text-[10px] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                                {pt.visit}
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0 text-brand-secondary" />
                             </div>
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
                className="order-2 lg:order-1 relative rounded-2xl border border-white/10 bg-[#0B0F15] aspect-square lg:aspect-[4/3] overflow-hidden shadow-2xl p-6 flex flex-col"
              >
                 <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
                 
                 <div className="flex justify-between items-center mb-6 relative z-10 w-full">
                    <div className="text-white font-bold text-lg">Inventory Alerts</div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                       <Pill className="w-4 h-4 text-brand-accent" />
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
                    <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 flex flex-col hover:bg-red-500/20 transition-colors cursor-default relative overflow-hidden group">
                       <div className="absolute right-0 top-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity"><AlertTriangle className="w-12 h-12 text-red-500"/></div>
                       <div className="flex items-center gap-2 text-red-400 mb-2 text-xs font-bold uppercase tracking-wider relative z-10">
                          <AlertTriangle className="w-3 h-3" /> Low Stock
                       </div>
                       <div className="text-2xl font-bold text-white relative z-10">12 <span className="text-sm font-normal text-gray-400 lowercase">items</span></div>
                    </div>
                    <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/10 flex flex-col hover:bg-orange-500/20 transition-colors cursor-default relative overflow-hidden group">
                       <div className="absolute right-0 top-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity"><Clock className="w-12 h-12 text-orange-500"/></div>
                       <div className="flex items-center gap-2 text-orange-400 mb-2 text-xs font-bold uppercase tracking-wider relative z-10">
                          <Clock className="w-3 h-3" /> Expiring Soon
                       </div>
                       <div className="text-2xl font-bold text-white relative z-10">5 <span className="text-sm font-normal text-gray-400 lowercase">batches</span></div>
                    </div>
                 </div>

                 <div className="flex-1 rounded-xl border border-white/10 bg-[#12161f] p-4 flex flex-col gap-3 overflow-hidden relative z-10 hover:border-white/20 transition-colors">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Critical Restock Needs</div>
                    {[
                      { drug: 'Paracetamol 500mg IV', stock: '12 units', min: '50 units', status: 'Critical', color: 'bg-red-500', w: '15%' },
                      { drug: 'Amoxicillin Base', stock: '45 units', min: '100 units', status: 'Ordering', color: 'bg-orange-500', w: '40%' },
                      { drug: 'Propofol 1% 20ml', stock: '8 units', min: '30 units', status: 'Critical', color: 'bg-red-500', w: '10%' }
                    ].map((item, i) => (
                       <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/5 flex flex-col gap-2 hover:bg-white/10 transition-colors group">
                          <div className="flex justify-between items-start">
                             <div className="text-white text-xs font-bold tracking-wide">{item.drug}</div>
                             <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded text-white ${item.color} shadow-sm opacity-90 group-hover:opacity-100`}>{item.status}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[10px]">
                             <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                                <div className={`h-full ${item.color}`} style={{ width: item.w }} />
                             </div>
                             <span className="text-gray-400 font-medium tracking-tight whitespace-nowrap">{item.stock} / {item.min}</span>
                          </div>
                       </div>
                    ))}
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
                 className="relative rounded-2xl border border-white/10 bg-[#0B0F15] aspect-square lg:aspect-[4/3] overflow-hidden shadow-2xl p-6 flex flex-col"
              >
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-accent/10 to-transparent pointer-events-none" />
                 
                 <div className="flex gap-4 items-center pb-4 border-b border-white/10 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-brand-accent/50 p-0.5 relative group cursor-pointer">
                       <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white text-lg font-bold shadow-inner relative z-10">AJ</div>
                    </div>
                    <div>
                       <div className="text-white font-bold text-lg flex items-center">
                          Alex Johnson 
                          <span className="text-[9px] bg-green-500/20 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-full ml-2 uppercase tracking-wider font-bold">Verified</span>
                       </div>
                       <div className="text-gray-400 text-[11px] mt-1 break-words">DOB: 12-May-1985 • Blood: O+ • Allergy: Penicillin</div>
                    </div>
                 </div>

                 <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 relative z-10 pl-2">Medical History Timeline</div>
                 
                 <div className="flex-1 flex flex-col gap-0 relative z-10 ml-3">
                    <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
                    {[
                      { date: 'Oct 15, 2025', title: 'MRI Scan Output', desc: 'Brain MRI Results attached. Needs review.', icon: HardDrive, report: true, color: 'text-blue-400', ring: 'ring-blue-500/40' },
                      { date: 'Sep 22, 2025', title: 'General Checkup', desc: 'Vitals normal. BP 120/80. Cleared for activity.', icon: Stethoscope, color: 'text-green-400', ring: 'ring-green-500/40' },
                      { date: 'Jul 04, 2025', title: 'ER Admission', desc: 'Minor fracture left wrist. Splint applied.', icon: ShieldCheck, color: 'text-brand-accent', ring: 'ring-brand-accent/40' }
                    ].map((hist, i) => (
                       <div key={i} className="flex gap-4 relative pb-5 group">
                          <div className={`w-6 h-6 rounded-full bg-[#0B0F15] border-2 border-white/10 flex items-center justify-center z-10 mt-0.5 relative group-hover:ring-4 ${hist.ring} transition-all`}>
                             <hist.icon className={`w-3 h-3 ${hist.color}`} />
                          </div>
                          <div className="flex-1 p-3 border border-white/5 bg-white/5 bg-gradient-to-b from-white/5 to-transparent rounded-xl hover:border-white/20 transition-colors shadow-sm cursor-default">
                             <div className="flex justify-between items-start mb-1">
                                <div className="text-white text-xs font-bold group-hover:text-white transition-colors tracking-wide">{hist.title}</div>
                                <div className="text-gray-500 text-[9px] font-medium">{hist.date}</div>
                             </div>
                             <div className="text-gray-400 text-[10px] leading-relaxed">{hist.desc}</div>
                             {hist.report && (
                                <div className="mt-2.5 flex items-center gap-2 p-1.5 rounded-md bg-white/5 border border-white/10 w-fit hover:bg-white/10 hover:border-white/20 cursor-pointer shadow-sm transition-all group/btn">
                                   <FileText className="w-3 h-3 text-red-400 group-hover/btn:text-red-300 transition-colors" />
                                   <span className="text-[10px] text-gray-300 group-hover/btn:text-white font-medium transition-colors">mri_result_2025.pdf</span>
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 blur-[60px] rounded-full pointer-events-none" />
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
