import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  WifiOff,
  RefreshCw,
  Database,
  ScanBarcode,
  Package,
  Users,
  LineChart,
  Settings,
  FileText,
  Zap,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  MessageCircle,
  Monitor
} from 'lucide-react';

export default function Supermarkets() {
  const [activeTab, setActiveTab] = useState('billing');
  const [isOnline, setIsOnline] = useState(true);

  // Future logic note:
  // Offline system using:
  // - IndexedDB / LocalStorage for local data
  // - Sync queue (when online) to push transactions to Supabase/Backend
  useEffect(() => {
    // Simulate online/offline toggling for the demo animation
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trackDemoClick = () => {
    // Future: Demo tracking (who clicks demo)
    console.log("Demo clicked. Tracking event...");
  };

  const tabs = [
    { id: 'billing', label: 'Billing POS', icon: ScanBarcode },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'crm', label: 'Smart CRM', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: LineChart },
    { id: 'admin', label: 'Admin Panel', icon: Settings },
    { id: 'erp', label: 'ERP Connect', icon: Database },
  ];

  const features = [
    { title: 'Lightning Billing', desc: 'Scan, bill, and print in under 2 seconds. Multi-counter ready.', icon: Zap },
    { title: 'Smart Inventory', desc: 'Auto-tracking, low-stock alerts, and predictive restocking.', icon: Package },
    { title: 'Customer CRM', desc: 'Loyalty points, purchase history, and targeted WhatsApp offers.', icon: Users },
    { title: 'Deep Analytics', desc: 'Real-time sales tracking, profit margins, and peak hour insights.', icon: LineChart },
    { title: 'Central Admin', desc: 'Manage pricing, staff roles, and multiple branches from anywhere.', icon: Settings },
    { title: 'GST Ready', desc: 'Automated tax calculations, easy e-filing reports, and compliance.', icon: FileText },
    { title: 'Barcode Generation', desc: 'Create and print custom barcodes for loose items or local products.', icon: ScanBarcode },
  ];

  const tabFeatures: Record<string, string[]> = {
    billing: [
      "2-second fast POS checkout",
      "Offline bill generation & queuing",
      "Multi-counter synchronization",
      "Built-in barcode generation & scanning"
    ],
    inventory: [
      "Real-time live stock tracking",
      "Predictive low-stock automated alerts",
      "Expiry date management & warnings",
      "Supplier purchase order automation"
    ],
    crm: [
      "Point-based dynamic loyalty programs",
      "Automated WhatsApp promotion blasts",
      "Customer purchasing habits analytics",
      "Tiered membership & tiered pricing levels"
    ],
    analytics: [
      "Real-time gross margin & revenue tracking",
      "Store peak hours and foot-traffic analysis",
      "Individual cashier performance metrics",
      "Automated daily, weekly, & monthly email reports"
    ],
    admin: [
      "Multi-branch and multi-store centralization",
      "Role-based granular staff access control",
      "Real-time dynamic remote pricing updates",
      "Secure tamper-proof audit logs for operations"
    ],
    erp: [
      "Automated Tally and Zoho accounting synchronization",
      "REST JSON API for legacy system hooks",
      "Third-party delivery app integrations (Zomato/Swiggy)",
      "Unified global financial dashboard"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Smart Supermarket Software | NarenNet</title>
        <meta name="description" content="Premium supermarket billing software that never stops. Offline-first, auto-sync, and high-speed POS." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg selection:bg-brand-accent/30 selection:text-brand-accent text-white font-sans overflow-x-hidden pt-20">
        
        {/* Floating WhatsApp CTA */}
        <a 
          href="https://wa.me/919025556209" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center group"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 bg-white text-black text-sm font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
            Chat with Sales
          </span>
        </a>

        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
          {/* Background Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container-wide px-6 relative z-10 text-center max-w-5xl mx-auto">
            {/* High Impact Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
              </span>
              <span className="text-[#25D366] text-sm font-bold tracking-wide uppercase">Works Even Without Internet</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
            >
              Smart Supermarket Billing Software <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
                That Never Stops
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-brand-secondary font-light max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Experience seamless offline billing with auto-sync capability. No internet? No problem. Keep your queues moving without losing a single transaction.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="https://narennetstoredemo.netlify.app/" 
                target="_blank"
                rel="noreferrer"
                onClick={trackDemoClick}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-all shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/40"
              >
                <PlayCircle size={22} className="group-hover:scale-110 transition-transform" />
                View Live Demo
              </a>
              <Link 
                to="/contact" 
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-brand-border text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Demo Dashboard Mockup Section */}
        <section className="pb-32 relative z-20 px-6 mt-[-60px]">
          <div className="container-wide max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl md:rounded-[40px] border border-brand-border bg-brand-card shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10 opacity-60" />
              
              {/* Mockup Top Bar */}
              <div className="bg-brand-card border-b border-brand-border p-4 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-2 bg-black/20 rounded-md px-4 py-1 text-xs text-white/50 font-mono">
                    <Monitor size={12} /> pos.narennet.cloud
                  </div>
                </div>
              </div>

              {/* Mockup Dashboard Content */}
              <div className="p-4 md:p-8 aspect-[4/3] md:aspect-[21/9] bg-[#0A101D] relative flex overflow-hidden">
                {/* Sidebar Mockup */}
                <div className="hidden md:flex flex-col w-48 border-r border-brand-border h-full gap-4 pr-4">
                  <div className="h-8 bg-brand-card rounded-lg mb-2 flex items-center px-3">
                    <div className="h-3 w-20 bg-white/10 rounded"></div>
                  </div>
                  <div className="h-10 bg-brand-accent/20 rounded-lg border border-brand-accent/30 flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-brand-accent rounded"></div>
                    <div className="h-2 w-16 bg-brand-accent rounded"></div>
                  </div>
                  <div className="h-10 bg-brand-card hover:bg-white/5 rounded-lg flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-white/20 rounded"></div>
                    <div className="h-2 w-20 bg-white/20 rounded"></div>
                  </div>
                  <div className="h-10 bg-brand-card hover:bg-white/5 rounded-lg flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-white/20 rounded"></div>
                    <div className="h-2 w-14 bg-white/20 rounded"></div>
                  </div>
                  <div className="mt-auto h-10 bg-brand-card rounded-lg flex items-center px-3 gap-2">
                    <div className="h-4 w-4 bg-white/20 rounded"></div>
                    <div className="h-2 w-16 bg-white/20 rounded"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 md:pl-6 flex flex-col gap-4">
                  {/* Top Header/Search */}
                  <div className="flex gap-4">
                    <div className="flex-1 h-12 bg-brand-card border border-brand-border rounded-xl flex items-center px-4">
                      <div className="w-5 h-5 rounded-full bg-brand-secondary/30"></div>
                      <div className="w-32 h-2 ml-3 bg-brand-secondary/20 rounded"></div>
                    </div>
                    <div className="w-12 h-12 bg-brand-card border border-brand-border rounded-xl flex items-center justify-center">
                       <div className="w-5 h-5 bg-brand-accent/50 rounded-full"></div>
                    </div>
                  </div>

                  {/* Products Grid & Cart */}
                  <div className="flex-1 flex gap-4 overflow-hidden">
                    {/* Products Grid */}
                    <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-max overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-brand-card border border-brand-border rounded-xl p-3 flex flex-col gap-3 h-[140px] shadow-sm">
                           <div className="flex-1 bg-white/5 rounded-lg w-full"></div>
                           <div className="h-2 w-2/3 bg-brand-secondary/40 rounded"></div>
                           <div className="h-2 w-1/3 bg-brand-accent rounded"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Cart / Checkout Pane */}
                    <div className="hidden md:flex flex-1 bg-brand-card border border-brand-border rounded-xl flex-col p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[40px] -z-10" />
                      
                      <div className="flex justify-between items-center mb-5 border-b border-brand-border pb-3">
                         <div className="h-3 w-20 bg-white/40 rounded"></div>
                         <div className="h-3 w-10 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-4">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-white/5 rounded-md"></div>
                            <div className="flex-1 flex flex-col gap-2">
                              <div className="h-2 w-3/4 bg-brand-secondary/50 rounded"></div>
                              <div className="h-2 w-1/3 bg-brand-secondary/30 rounded"></div>
                            </div>
                            <div className="h-2 w-8 bg-brand-secondary/50 rounded"></div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-brand-border flex flex-col gap-3">
                         <div className="flex justify-between">
                           <div className="h-2 w-12 bg-white/20 rounded"></div>
                           <div className="h-2 w-10 bg-white/20 rounded"></div>
                         </div>
                         <div className="flex justify-between items-center mt-1">
                           <div className="h-4 w-16 bg-white rounded"></div>
                           <div className="h-4 w-16 bg-brand-accent rounded"></div>
                         </div>
                         <div className="h-12 w-full bg-brand-accent rounded-xl mt-3 flex items-center justify-center">
                           <div className="h-3 w-20 bg-white/80 rounded"></div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* Foreground CTA Overlay */}
                 <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[3px] flex items-center justify-center z-20">
                    <a 
                      href="https://narennetstoredemo.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-brand-card/90 hover:bg-brand-card border border-brand-accent/20 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_40px_rgba(var(--brand-accent-rgb),0.3)]"
                    >
                      <PlayCircle size={24} className="text-brand-accent" />
                      Open Full Interactive Demo
                    </a>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Offline Billing System */}
        <section className="py-24 bg-brand-bg/90 border-y border-brand-border relative overflow-hidden">
          <div className="container-wide px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  <span className="text-brand-accent">Unstoppable</span> Offline Billing
                </h2>
                <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
                  Internet down? Don't sweat it. Our local-first architecture ensures your checkout counters never freeze. Bills are saved locally using IndexedDB technology and automatically synced via a secure queue exactly when your connection returns.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-white text-lg">Zero Data Loss</h4>
                      <p className="text-brand-secondary text-sm">Every transaction is securely encrypted and stored locally.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-white text-lg">Instant Auto-Sync</h4>
                      <p className="text-brand-secondary text-sm">Background sync queue pushes data seamlessly upon reconnection.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-white text-lg">Independent Working</h4>
                      <p className="text-brand-secondary text-sm">Continue generating bills, searching products, and printing receipts.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Visual Illustration */}
              <div className="relative">
                <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full" />
                <div className="relative bg-brand-card border border-brand-border rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
                  
                  {/* Status indicator */}
                  <motion.div 
                    layout
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border mb-12 transition-colors duration-500 ${isOnline ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}
                  >
                    {isOnline ? (
                      <><RefreshCw className="text-green-500 animate-spin-slow" size={20} /> <span className="text-green-500 font-bold uppercase tracking-wider text-sm">Online (Syncing)</span></>
                    ) : (
                      <><WifiOff className="text-red-500" size={20} /> <span className="text-red-500 font-bold uppercase tracking-wider text-sm">Offline Mode</span></>
                    )}
                  </motion.div>

                  <div className="flex items-center justify-center w-full max-w-md gap-6 md:gap-12 relative">
                    {/* PC */}
                    <div className={`p-6 rounded-2xl bg-black/40 border transition-colors duration-500 flex flex-col items-center gap-3 z-10 ${isOnline ? 'border-green-500/30' : 'border-brand-accent/50'}`}>
                      <ScanBarcode size={40} className="text-white" />
                      <span className="text-xs font-bold text-white/70">Local POS</span>
                      {!isOnline && (
                        <span className="absolute -top-3 -right-3 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg border border-white/20">
                          +5 Pending
                        </span>
                      )}
                    </div>

                    {/* Arrow/Line */}
                    <div className="flex-1 h-1 bg-white/5 relative overflow-hidden rounded-full">
                       <AnimatePresence>
                         {isOnline && (
                           <motion.div
                             initial={{ x: '-100%' }}
                             animate={{ x: '100%' }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                             className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent"
                           />
                         )}
                       </AnimatePresence>
                    </div>

                    {/* Cloud Server */}
                    <div className="p-6 rounded-2xl bg-black/40 border border-brand-border flex flex-col items-center gap-3 z-10">
                      <Database size={40} className="text-blue-400" />
                      <span className="text-xs font-bold text-white/70">Cloud DB</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 px-6">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need to Scale</h2>
              <p className="text-brand-secondary text-lg max-w-2xl mx-auto">From single stores to national chains, our comprehensive module suite handles every aspect of retail operations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-card/30 border border-brand-border p-8 rounded-[24px] hover:bg-brand-card/60 transition-colors group cursor-default shadow-sm hover:shadow-lg hover:border-brand-accent/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <feature.icon size={28} className="text-brand-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-brand-secondary leading-relaxed text-sm font-light">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Interactive Tabs */}
        
        {/* Mobile Apps Mockups */}
        <section className="py-24 px-6 relative overflow-hidden bg-brand-card/20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="container-wide max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Mobile Apps</h2>
              <p className="text-brand-secondary text-lg max-w-2xl mx-auto">Native iOS and Android apps for your store managers to track inventory, and a branded app for your customers.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
              
              {/* Store Manager App Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors" />
                <div className="relative w-[280px] h-[580px] bg-brand-bg border-[6px] border-[#2A2A2A] rounded-[40px] shadow-2xl flex flex-col overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                    <div className="w-32 h-6 bg-[#2A2A2A] rounded-b-xl"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 bg-brand-bg pt-10 px-4 pb-6 flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                       <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                           <Settings size={16} className="text-brand-accent" />
                         </div>
                         <div className="text-white font-bold text-sm">Owner Admin</div>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-brand-card border border-brand-border flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                       </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div className="bg-brand-card border border-brand-border rounded-xl p-3">
                         <div className="h-2 w-12 bg-brand-secondary/50 rounded mb-2"></div>
                         <div className="text-xl font-bold text-white mt-1">₹48.2K</div>
                         <div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">+12% today</div>
                      </div>
                      <div className="bg-brand-card border border-brand-border rounded-xl p-3">
                         <div className="h-2 w-16 bg-brand-secondary/50 rounded mb-2"></div>
                         <div className="text-xl font-bold text-white mt-1">452</div>
                         <div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">+5% today</div>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="h-32 bg-brand-card border border-brand-border rounded-xl p-3 flex flex-col justify-end gap-1">
                      <div className="text-xs font-bold text-white/50 mb-2">Weekly Revenue</div>
                      <div className="flex items-end justify-between h-20 gap-2">
                        {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
                           <div key={i} className="w-full bg-brand-accent/60 rounded-t-sm hover:bg-brand-accent transition-colors" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Orders List */}
                    <div className="flex-1 flex flex-col gap-3 mt-2">
                      <div className="text-sm font-bold text-white">Recent Transactions</div>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center">
                             <ScanBarcode size={16} className="text-brand-secondary" />
                          </div>
                          <div className="flex-1">
                           <div className="text-xs font-bold text-white mb-1">Invoice #{1042 + i}</div>
                            <div className="h-2 w-16 bg-brand-secondary/40 rounded"></div>
                          </div>
                          <div className="text-xs font-bold text-green-400">+₹{(Math.random() * 500 + 100).toFixed(0)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Nav */}
                  <div className="h-16 bg-brand-card border-t border-brand-border px-6 flex justify-between items-center z-10 pb-2">
                    <div className="w-6 h-6 flex justify-center"><LineChart size={20} className="text-brand-accent" /></div>
                    <div className="w-6 h-6 flex justify-center"><Package size={20} className="text-brand-secondary/50" /></div>
                    <div className="w-6 h-6 flex justify-center"><Users size={20} className="text-brand-secondary/50" /></div>
                    <div className="w-6 h-6 flex justify-center"><Settings size={20} className="text-brand-secondary/50" /></div>
                  </div>
                </div>
                
                {/* Decoration text */}
                 <div className="mt-8 text-center text-white">
                   <h4 className="font-bold text-lg">Admin App</h4>
                   <p className="text-brand-secondary text-sm">Real-time store metrics</p>
                 </div>
              </motion.div>

              {/* Customer App Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-orange-500/20 transition-colors" />
                <div className="relative w-[280px] h-[580px] bg-brand-bg border-[6px] border-[#2A2A2A] rounded-[40px] shadow-2xl flex flex-col overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                    <div className="w-32 h-6 bg-[#2A2A2A] rounded-b-xl"></div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 bg-brand-bg pt-10 px-4 pb-0 flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                       <div className="text-white font-bold text-sm">My Supermarket</div>
                       <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-brand-card border border-brand-border flex items-center justify-center">
                            <div className="w-3 h-3 bg-brand-secondary/50 rounded-full"></div>
                         </div>
                       </div>
                    </div>

                    {/* Banner */}
                    <div className="h-32 bg-gradient-to-br from-brand-accent to-orange-500 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mt-10 -mr-10 blur-xl"></div>
                       <div className="text-white font-bold text-lg shadow-lg relative z-10">50% OFF</div>
                       <div className="text-white/90 text-xs shadow-lg relative z-10">On everyday essentials</div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-3 overflow-x-hidden pt-2 pb-1 scrollbar-hide">
                      {['Veg', 'Fruits', 'Dairy', 'Snacks'].map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                          <div className="w-14 h-14 rounded-full bg-brand-card border border-brand-border flex items-center justify-center hover:border-brand-accent transition-colors">
                            <Package className="w-6 h-6 text-brand-secondary/60" />
                          </div>
                          <div className="text-[10px] text-white/70 font-medium">{cat}</div>
                        </div>
                      ))}
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 mt-2 pb-20">
                      <div className="text-sm font-bold text-white mb-3">Popular Items</div>
                      <div className="grid grid-cols-2 gap-3 pb-6">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-brand-card border border-brand-border rounded-xl p-2 flex flex-col gap-2">
                             <div className="h-20 bg-white/5 rounded-lg w-full flex flex-col"></div>
                             <div className="text-xs font-bold text-white mt-1">Fresh Item {i+1}</div>
                             <div className="text-[10px] text-brand-secondary">₹{(Math.random() * 50 + 20).toFixed(0)} / kg</div>
                             <div className="h-6 w-full bg-brand-accent/20 rounded text-brand-accent flex items-center justify-center text-[10px] font-bold mt-auto cursor-pointer hover:bg-brand-accent/30">+ Add</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Customer Bottom Nav */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-brand-card/90 backdrop-blur-md border-t border-brand-border px-6 flex justify-between items-center z-10 pb-2">
                    <div className="w-6 h-6 flex justify-center"><div className="w-4 h-4 bg-brand-accent rounded"></div></div>
                    <div className="w-6 h-6 flex justify-center"><div className="w-4 h-4 bg-brand-secondary/50 rounded"></div></div>
                    <div className="w-6 h-6 flex justify-center relative">
                      <div className="w-4 h-4 bg-brand-secondary/50 rounded"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                 {/* Decoration text */}
                 <div className="mt-8 text-center text-white">
                   <h4 className="font-bold text-lg">Customer App</h4>
                   <p className="text-brand-secondary text-sm">Loyalty & Ordering</p>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>
        
        <section className="py-24 bg-brand-bg/90 border-y border-brand-border">
          <div className="container-wide max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Explore the Architecture</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10">
              {/* Tab List */}
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl font-bold text-left transition-all ${
                      activeTab === tab.id 
                        ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                        : 'bg-brand-card text-brand-secondary hover:bg-white/10 hover:text-white border border-brand-border'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="w-full md:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-card border border-brand-border p-8 md:p-12 rounded-[32px] min-h-[400px] flex flex-col justify-center shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
                    
                    {tabs.filter(t => t.id === activeTab).map(tab => (
                      <div key={tab.id} className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                           <tab.icon size={32} className="text-brand-accent" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{tab.label} Module</h3>
                        <p className="text-brand-secondary text-lg leading-relaxed mb-8">
                           {tab.id === 'billing' && "Accelerate checkout lanes with keyboard shortcuts, barcode scanner integrations, and a clean, clutter-free POS interface designed for high-stress environments."}
                           {tab.id === 'inventory' && "Track thousands of SKUs in real-time. Automatically generate purchase orders when stock levels hit predictive thresholds, and completely eliminate overstocking."}
                           {tab.id === 'crm' && "Capture customer phone numbers seamlessly at checkout to allocate loyalty points. Send automated WhatsApp campaigns for birthdays, festivals, and targeted discounts."}
                           {tab.id === 'analytics' && "Visualize your store's health at a glance. Identify slow-moving items, track highest revenue hours, and monitor cashier performance with beautiful, intuitive dashboards."}
                           {tab.id === 'admin' && "Run your empire from your phone. Tweak pricing schemas, update product catalogs across all branches simultaneously, and manage employee access levels securely."}
                           {tab.id === 'erp' && "Seamlessly sink data with popular accounting software like Tally, Zoho Books, or custom legacy systems via our flexible REST APIs."}
                        </p>
                        
                        <ul className="grid grid-cols-1 gap-4">
                          {tabFeatures[tab.id].map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                              <span className="text-white font-medium text-sm">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Call to Action */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-accent/5 pointer-events-none" />
          <div className="container-wide max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready for Premium Performance?</h2>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto mb-14">
              Join top retailers upgrading to NarenNet's lightning-fast, highly scalable, offline-first ecosystem. Setup takes less than 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact"
                className="group flex flex-col items-center justify-center gap-2 bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(var(--brand-accent-rgb),0.3)]"
              >
                <div className="flex items-center gap-2">Request Trial Setup <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></div>
                <span className="text-xs font-medium text-white/70">No credit card required</span>
              </Link>
              <a 
                href="https://wa.me/919025556209" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/5 border border-brand-border text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={22} className="text-[#25D366]" /> Talk to an Expert
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
