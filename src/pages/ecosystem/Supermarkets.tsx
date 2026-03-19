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
import TrustBadges from '../../components/TrustBadges';
import LeadCaptureModal from '../../components/LeadCaptureModal';
import MobileAppMockup from '../../components/mockups/MobileAppMockup';
import SupermarketDashboardMockup from '../../components/mockups/SupermarketDashboardMockup';

export default function Supermarkets() {
  const [activeTab, setActiveTab] = useState('billing');
  const [isOnline, setIsOnline] = useState(true);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hasShownModal) return;
    const timer = setTimeout(() => {
      setIsLeadModalOpen(true);
      setHasShownModal(true);
    }, 15000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight > documentHeight / 2) {
        setIsLeadModalOpen(true);
        setHasShownModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShownModal]);

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
    billing: ["2-second fast POS checkout", "Offline bill generation & queuing", "Multi-counter synchronization", "Built-in barcode generation & scanning"],
    inventory: ["Real-time live stock tracking", "Predictive low-stock automated alerts", "Expiry date management & warnings", "Supplier purchase order automation"],
    crm: ["Point-based dynamic loyalty programs", "Automated WhatsApp promotion blasts", "Customer purchasing habits analytics", "Tiered membership & tiered pricing levels"],
    analytics: ["Real-time gross margin & revenue tracking", "Store peak hours and foot-traffic analysis", "Individual cashier performance metrics", "Automated daily, weekly, & monthly email reports"],
    admin: ["Multi-branch and multi-store centralization", "Role-based granular staff access control", "Real-time dynamic remote pricing updates", "Secure tamper-proof audit logs for operations"],
    erp: ["Automated Tally and Zoho accounting synchronization", "REST JSON API for legacy system hooks", "Third-party delivery app integrations (Zomato/Swiggy)", "Unified global financial dashboard"]
  };

  return (
    <>
      <Helmet>
        <title>Offline-First Retail POS & AI Supermarket Software | NarenNet SmartOS</title>
        <meta name="description" content="NarenNet Retail POS: offline-first billing, auto-sync, AI theft detection, and GST compliance for Indian supermarkets. 10,000+ bills/day. Zero downtime. Deploy in 72 hours." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg selection:bg-brand-accent/30 selection:text-brand-accent text-brand-primary font-sans overflow-x-hidden">
        
        {/* Floating WhatsApp CTA */}
        <a 
          href="https://wa.me/918438966728" 
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

        {/* Hero Section — DARK */}
        <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-brand-deep">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="container-wide px-6 relative z-10 text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-500 text-sm font-bold tracking-wide uppercase">Works Even Without Internet</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
            >
              Smart Supermarket Billing Software <br className="hidden md:block" />
              <span className="text-brand-accent">That Never Stops</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
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
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-brand-primary transition-all shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/40"
              >
                <PlayCircle size={22} className="group-hover:scale-110 transition-transform" />
                View Live Demo
              </a>
              <Link 
                to="/contact" 
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Book Free Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Urgency + Proof numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <p className="text-sm font-bold px-5 py-2.5 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.25)' }}
              >
                ⚡ Most POS systems stop when internet fails. Ours doesn't.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-400" /> 10,000+ bills processed without interruption</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-400" /> Zero downtime billing</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-400" /> 72-hour deployment</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="relative z-[30]">
           <TrustBadges />
        </div>

        {/* Demo Dashboard Mockup Section — LIGHT */}
        <section className="py-32 relative z-20 px-6">
          <div className="container-wide max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative p-2 md:p-4"
            >
              <div className="aspect-[4/3] md:aspect-[16/7]">
                <SupermarketDashboardMockup />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Offline Billing System — WHITE SECTION */}
        <section className="py-24 bg-white border-y border-brand-border relative overflow-hidden">
          <div className="container-wide px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-primary leading-tight">
                  <span className="text-brand-accent">Unstoppable</span> Offline Billing
                </h2>
                <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
                  Internet down? Don't sweat it. Our local-first architecture ensures your checkout counters never freeze. Bills are saved locally and automatically synced exactly when your connection returns.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    { t: 'Zero Data Loss', d: 'Every transaction is securely stored locally.' },
                    { t: 'Instant Auto-Sync', d: 'Sync queue pushes data seamlessly upon reconnection.' },
                    { t: 'Works Offline', d: 'Continue billing, searching products, and printing receipts.' }
                  ].map(f => (
                    <div key={f.t} className="flex items-start gap-4">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-brand-primary text-lg">{f.t}</h4>
                        <p className="text-brand-secondary text-sm">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-brand-accent/5 blur-[100px] rounded-full" />
                <div className="relative bg-brand-card border border-brand-border rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
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
                    <div className={`p-6 rounded-2xl bg-brand-deep border transition-colors duration-500 flex flex-col items-center gap-3 z-10 ${isOnline ? 'border-green-500/30' : 'border-brand-accent/50'}`}>
                      <ScanBarcode size={40} className="text-white" />
                      <span className="text-xs font-bold text-white/70">Local POS</span>
                    </div>
                    <div className="flex-1 h-1 bg-brand-primary/5 relative overflow-hidden rounded-full">
                       {isOnline && (
                         <motion.div
                           initial={{ x: '-100%' }} animate={{ x: '100%' }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                           className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent"
                         />
                       )}
                    </div>
                    <div className="p-6 rounded-2xl bg-brand-deep border border-white/10 flex flex-col items-center gap-3 z-10">
                      <Database size={40} className="text-brand-accent" />
                      <span className="text-xs font-bold text-white/70">Cloud DB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Solution → Proof — BRAND DEEP */}
        <section className="py-20 bg-white border-b border-brand-border">
          <div className="container-wide max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-brand-accent)' }}>Why SmartOS Wins</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">The Problem Most POS Systems Ignore</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              {/* Problems */}
              {[
                { color: '#EF4444', label: 'Problem', title: 'Billing stops during internet failure', desc: 'Standard cloud POS systems freeze when connectivity drops — costing you customers, queues, and sales.' },
                { color: '#EF4444', label: 'Problem', title: 'Inventory mismatch kills margins', desc: 'Manual stock tracking leads to overselling ghost inventory and running out of fast-moving SKUs at peak hours.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-7 rounded-2xl bg-red-50 border border-red-100">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center" style={{ background: '#EF444420', color: '#EF4444' }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#EF4444' }}>{item.label}</p>
                    <h4 className="font-bold text-brand-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              {/* Solutions */}
              {[
                { title: 'Offline-first POS — bills keep running', desc: 'Our local-first architecture stores transactions on-device. When internet returns, everything auto-syncs. Zero data loss, zero queue freeze.' },
                { title: 'AI Auto-sync inventory system', desc: 'SmartOS predicts stockouts 7 days ahead and triggers autonomous reorders. Avg. 34% stockout reduction in 60 days of deployment.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-7 rounded-2xl bg-green-50 border border-green-100">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-green-100 text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-green-600">Solution</p>
                    <h4 className="font-bold text-brand-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Proof Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-[24px] bg-brand-deep">
              {[
                { value: '10K+', label: 'Bills / Day Processed' },
                { value: '99.7%', label: 'Uptime SLA' },
                { value: '74%', label: 'Void Rate Reduction' },
                { value: '72 hrs', label: 'Avg Deploy Time' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid — LIGHT GRAY BG */}
        <section className="py-32 bg-brand-card">
          <div className="container-wide max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Everything You Need to Scale</h2>
              <p className="text-brand-secondary text-lg max-w-2xl mx-auto">From single stores to national chains, our comprehensive modules handle every aspect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-brand-border p-8 rounded-[24px] hover:shadow-xl transition-all group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <feature.icon size={28} className="text-brand-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
                  <p className="text-brand-secondary leading-relaxed text-sm font-medium">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mobile Apps Mockups — DARK DEEP */}
        <section className="py-24 px-6 relative overflow-hidden bg-brand-deep">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="container-wide max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Mobile Apps</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Dedicated iOS and Android apps for managers and branded apps for your customers.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
              {[
                { p: "owner", t: "bg-blue-600", n: "Store Manager", sn: "Live Dashboard" },
                { p: "customer", t: "bg-brand-accent", n: "Shopping App", sn: "Customer App" }
              ].map((m, i) => (
                <motion.div 
                  key={m.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="relative w-[300px] h-[600px]">
                     <MobileAppMockup persona={m.p as any} theme={m.t} appName={m.n} />
                  </div>
                   <div className="mt-8 text-center text-white">
                     <h4 className="font-bold text-lg text-brand-accent">{m.sn}</h4>
                     <p className="text-white/40 text-sm">Native iOS & Android</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Architecture Tabs — WHITE */}
        <section className="py-24 bg-white border-y border-brand-border">
          <div className="container-wide max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Module Architecture</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl font-bold text-left transition-all ${
                      activeTab === tab.id 
                        ? 'bg-brand-accent text-white shadow-lg' 
                        : 'bg-brand-card text-brand-secondary hover:bg-brand-primary/5 hover:text-brand-primary border border-brand-border'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="w-full md:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-brand-card border border-brand-border p-8 md:p-12 rounded-[32px] min-h-[400px] flex flex-col justify-center shadow-xl relative overflow-hidden"
                  >
                    {tabs.filter(t => t.id === activeTab).map(tab => (
                      <div key={tab.id}>
                        <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 border border-brand-accent/20">
                           <tab.icon size={32} className="text-brand-accent" />
                        </div>
                        <h3 className="text-3xl font-bold text-brand-primary mb-4">{tab.label}</h3>
                        <p className="text-brand-secondary text-lg leading-relaxed mb-8 font-medium">
                           {tab.id === 'billing' && "Accelerate checkout lanes with keyboard shortcuts, barcode scanner integrations, and a clean interface."}
                           {tab.id === 'inventory' && "Track thousands of SKUs in real-time. Predict thresholds and eliminate overstocking."}
                           {tab.id === 'crm' && "Capture customer numbers to build loyalty. Send automated WhatsApp campaigns."}
                           {tab.id === 'analytics' && "Visualize your store's health. Identify slow items and monitor cashier performance."}
                           {tab.id === 'admin' && "Run your empire from your phone. Tweak pricing across all branches simultaneously."}
                           {tab.id === 'erp' && "Seamlessly sync data with Tally, Zoho Books, or custom legacy systems."}
                        </p>
                        <ul className="grid grid-cols-1 gap-4">
                          {tabFeatures[tab.id].map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <CheckCircle2 size={18} className="text-brand-accent shrink-0" />
                              <span className="text-brand-primary font-bold text-sm">{feat}</span>
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

        {/* CTA — WHITE SECTION */}
        <section className="py-32 px-6 relative overflow-hidden bg-white">
          <div className="container-wide max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-8">Stop Losing Revenue to Internet Downtime</h2>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto mb-5 font-medium">
              Join top retailers across Tamil Nadu & Karnataka who switched to NarenNet. Setup in 72 hours — no IT team needed.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-12">vs. SAP (12-month deploy) • vs. Zoho (no offline mode) • vs. Excel (no AI)</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact"
                className="group flex flex-col items-center justify-center gap-2 bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
              >
                <div className="flex items-center gap-2">Request Trial Setup <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></div>
                <span className="text-xs font-semibold text-white/70 uppercase">No card required</span>
              </Link>
              <a 
                href="https://wa.me/918438966728" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-brand-card border border-brand-border text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-primary/5 transition-colors"
              >
                <MessageCircle size={22} className="text-green-500" /> WhatsApp Sales
              </a>
            </div>
          </div>
        </section>
      </div>

      <LeadCaptureModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        type="supermarket"
      />
    </>
  );
}
