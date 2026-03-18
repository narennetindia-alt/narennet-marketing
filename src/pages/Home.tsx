import { motion } from 'motion/react';
import {
  ArrowRight,
  CreditCard,
  Package,
  Users,
  BarChart3,
  Settings,
  WifiOff,
  RefreshCw,
  Store,
  Stethoscope,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  DatabaseZap,
  MessageCircle,
  Star,
  ChevronRight,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─────────────────────────── DATA ───────────────────────────

const stats = [
  { value: '50+', label: 'Businesses' },
  { value: '99.9%', label: 'Uptime' },
  { value: '3–5 days', label: 'Setup Time' },
];

const clients = [
  'FreshMart', 'City Hospital', 'BrightMinds School', 'QuickStore',
  'MedCare Clinic', 'PeakRetail', 'EduHub', 'MegaGrocer',
  'FreshMart', 'City Hospital', 'BrightMinds School', 'QuickStore',
  'MedCare Clinic', 'PeakRetail', 'EduHub', 'MegaGrocer',
];

const painPoints = [
  {
    icon: <AlertTriangle size={28} className="text-red-400" />,
    title: 'Manual Billing Errors',
    description: 'Hand-written bills and manual entries cause costly mistakes and delays.',
  },
  {
    icon: <Clock size={28} className="text-yellow-400" />,
    title: 'Slow Checkout',
    description: 'Long queues and slow billing frustrate customers and hurt revenue.',
  },
  {
    icon: <Package size={28} className="text-blue-400" />,
    title: 'Inventory Confusion',
    description: 'Overstocking and stockouts happen when inventory tracking is manual.',
  },
  {
    icon: <WifiOff size={28} className="text-purple-400" />,
    title: 'Internet Dependency',
    description: 'Your entire business halts when the connection drops — not anymore.',
  },
];

const features = [
  {
    icon: <CreditCard size={24} className="text-brand-accent" />,
    title: 'Billing System',
    description: 'Fast, accurate billing with GST, receipts, and thermal print support.',
  },
  {
    icon: <Package size={24} className="text-brand-accent" />,
    title: 'Inventory Management',
    description: 'Real-time stock tracking, low-stock alerts, and barcode scanning.',
  },
  {
    icon: <Users size={24} className="text-brand-accent" />,
    title: 'CRM',
    description: 'Manage customer profiles, purchase history, and loyalty programs.',
  },
  {
    icon: <BarChart3 size={24} className="text-brand-accent" />,
    title: 'Analytics Dashboard',
    description: 'Visual sales reports, top products, and daily revenue summaries.',
  },
  {
    icon: <Settings size={24} className="text-brand-accent" />,
    title: 'Admin Control Panel',
    description: 'Multi-branch management, staff access control, and system settings.',
  },
];

const demos = [
  {
    icon: <Store size={32} className="text-brand-accent" />,
    industry: 'Supermarket ERP',
    description: 'Complete billing, stock, and loyalty management for supermarkets and retail stores.',
    link: '/ecosystem/supermarkets',
    gradient: 'from-orange-500/10 to-transparent',
  },
  {
    icon: <Stethoscope size={32} className="text-brand-accent" />,
    industry: 'Hospital Management',
    description: 'OPD, pharmacy, lab, and patient records management for clinics and hospitals.',
    link: '/ecosystem/hospitals',
    gradient: 'from-blue-500/10 to-transparent',
  },
  {
    icon: <GraduationCap size={32} className="text-brand-accent" />,
    industry: 'School ERP',
    description: 'Student admissions, fee management, attendance, and academic reports.',
    link: '/contact',
    gradient: 'from-violet-500/10 to-transparent',
  },
];

const steps = [
  {
    number: '01',
    title: 'Book a Free Demo',
    description: 'See the system live with your industry use case in under 30 minutes.',
    icon: <MessageCircle size={20} className="text-brand-accent" />,
  },
  {
    number: '02',
    title: 'Customize for Your Business',
    description: 'Our team configures billing, inventory, and modules to match your exact needs.',
    icon: <Settings size={20} className="text-brand-accent" />,
  },
  {
    number: '03',
    title: 'Go Live in 3–5 Days',
    description: 'We install, train your staff, and ensure a smooth, confident launch.',
    icon: <Zap size={20} className="text-brand-accent" />,
  },
];

const testimonials = [
  {
    name: 'Ravi Kumar',
    business: 'FreshMart Supermarket, Dharmapuri',
    result: 'Our billing time dropped by 70% and stock errors are almost zero now.',
    rating: 5,
  },
  {
    name: 'Dr. Priya Shankar',
    business: 'MedCare Clinic, Salem',
    result: 'Managing patient records, OPD queues, and pharmacy has never been this seamless.',
    rating: 5,
  },
  {
    name: 'Anand Raj',
    business: 'BrightMinds School, Krishnagiri',
    result: 'Fee collection, attendance, and reports are all in one place. Parents love the app.',
    rating: 5,
  },
];

// ─────────────────────────── COMPONENTS ───────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">
      <span className="w-4 h-px bg-brand-accent" />
      {children}
    </span>
  );
}

// ─────────────────────────── PAGE ───────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-brand-bg">
        {/* Background grid glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Copy */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              >
                <WifiOff size={12} />
                Offline Mode + Auto Sync
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 normal-case"
              >
                All-in-One ERP & CRM for{' '}
                <span className="text-brand-accent">Growing Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-brand-secondary text-lg leading-relaxed max-w-xl mb-10"
              >
                Manage billing, inventory, customers, and analytics in one powerful
                system — <strong className="text-white">even works without internet.</strong>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:scale-[1.02]"
                >
                  View Live Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20learn%20more%20about%20your%20ERP%20system."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 bg-brand-card hover:bg-white/5 border border-brand-border hover:border-green-500/40 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.524 5.837L.057 23.743a.5.5 0 0 0 .6.6l5.906-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.098-1.4l-.363-.216-3.754.932.948-3.753-.234-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Trust micro-stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex items-center gap-6 mt-10 pt-10 border-t border-brand-border"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-brand-secondary uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main dashboard card */}
              <div className="relative bg-brand-card border border-brand-border rounded-3xl p-6 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] text-brand-secondary uppercase tracking-widest">Sales Dashboard</p>
                    <p className="text-white font-bold text-lg">Today's Overview</p>
                  </div>
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-bold">Offline Ready</span>
                  </div>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue', val: '₹48,230', up: true },
                    { label: 'Orders', val: '142', up: true },
                    { label: 'Stock Items', val: '1,847', up: false },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-brand-bg rounded-2xl p-4 border border-brand-border">
                      <p className="text-[9px] text-brand-secondary uppercase tracking-widest mb-1">{kpi.label}</p>
                      <p className="text-white font-bold text-lg">{kpi.val}</p>
                      <p className={`text-[9px] font-bold mt-1 ${kpi.up ? 'text-green-400' : 'text-brand-secondary'}`}>
                        {kpi.up ? '↑ +12.4%' : '→ Stable'}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="mb-6">
                  <p className="text-[9px] text-brand-secondary uppercase tracking-widest mb-3">Weekly Revenue</p>
                  <div className="h-16 flex items-end gap-1.5">
                    {[55, 72, 48, 88, 65, 92, 76].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                        className={`flex-1 rounded-t-md ${i === 5 ? 'bg-brand-accent' : 'bg-brand-accent/25'}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className="flex-1 text-center text-[8px] text-brand-secondary">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Recent transactions */}
                <div>
                  <p className="text-[9px] text-brand-secondary uppercase tracking-widest mb-3">Recent Transactions</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Invoice #4821', amount: '₹1,240', time: '2 min ago', status: 'Paid' },
                      { name: 'Invoice #4820', amount: '₹3,890', time: '18 min ago', status: 'Paid' },
                      { name: 'Invoice #4819', amount: '₹640', time: '1 hr ago', status: 'Pending' },
                    ].map((tx) => (
                      <div key={tx.name} className="flex items-center justify-between p-3 rounded-xl bg-brand-bg border border-brand-border">
                        <div>
                          <p className="text-white text-[11px] font-bold">{tx.name}</p>
                          <p className="text-brand-secondary text-[9px]">{tx.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-[11px] font-bold">{tx.amount}</p>
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${tx.status === 'Paid' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating sync badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 bg-brand-card border border-green-500/30 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
              >
                <RefreshCw size={14} className="text-green-400 animate-spin" style={{ animationDuration: '2s' }} />
                <span className="text-green-400 text-xs font-bold">Auto-syncing…</span>
              </motion.div>

              {/* Floating offline badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-brand-card border border-brand-border rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl"
              >
                <ShieldCheck size={14} className="text-brand-accent" />
                <span className="text-white text-xs font-bold">Works Offline</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. TRUST SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-brand-border bg-brand-card/30">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-brand-secondary text-xs uppercase tracking-[0.3em] mb-10 font-bold"
          >
            Trusted by growing businesses across India
          </motion.p>
          {/* Marquee */}
          <div className="relative overflow-hidden mask-fade">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
              {clients.map((c, i) => (
                <span key={i} className="text-brand-secondary/60 text-sm font-bold uppercase tracking-widest shrink-0">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. PROBLEM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white leading-tight normal-case mb-4">
              Running your business shouldn't{' '}
              <span className="text-brand-accent">be this hard</span>
            </h2>
            <p className="text-brand-secondary text-lg">
              Most businesses are stuck with outdated tools, manual processes, and no real-time visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((pt, idx) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {pt.icon}
                </div>
                <h3 className="text-white font-bold text-base normal-case mb-2">{pt.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{pt.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. SOLUTION / FEATURES
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-card/20 border-y border-brand-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white leading-tight normal-case mb-4">
                Everything you need in{' '}
                <span className="text-brand-accent">one system</span>
              </h2>
              <p className="text-brand-secondary text-lg leading-relaxed mb-8">
                NarenNet gives you a complete business operating system — billing, inventory, CRM,
                analytics, and admin — all communicating in real time, all within one platform.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                Get a personalized demo <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {features.map((f, idx) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm normal-case mb-0.5">{f.title}</h3>
                    <p className="text-brand-secondary text-sm leading-relaxed">{f.description}</p>
                  </div>
                  <ChevronRight size={14} className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors ml-auto shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. USP — OFFLINE MODE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-accent/8 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[32px] border border-brand-accent/20 bg-gradient-to-br from-brand-accent/5 via-brand-card to-brand-card p-10 md:p-16 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 mb-8 mx-auto"
              >
                <WifiOff size={36} className="text-brand-accent" />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl border border-brand-accent/40"
                />
              </motion.div>

              <SectionLabel>Unique Advantage</SectionLabel>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-tight normal-case mb-4"
              >
                Works even{' '}
                <span className="text-brand-accent">without internet</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-secondary text-xl leading-relaxed max-w-xl mx-auto mb-12"
              >
                Continue billing, managing stock, and serving customers even when the internet is
                down. Once reconnected, everything{' '}
                <strong className="text-white">automatically syncs</strong> to the cloud.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-green-400" />
                  </div>
                  <span className="text-white font-medium">Full offline billing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <RefreshCw size={18} className="text-green-400" />
                  </div>
                  <span className="text-white font-medium">Auto-sync on reconnect</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <DatabaseZap size={18} className="text-green-400" />
                  </div>
                  <span className="text-white font-medium">Zero data loss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. DEMO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-card/20 border-y border-brand-border">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionLabel>Live Demos</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white leading-tight normal-case mb-4">
              See it in action
            </h2>
            <p className="text-brand-secondary text-lg max-w-xl mx-auto">
              Explore industry-specific demos crafted for your exact business type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demos.map((demo, idx) => (
              <motion.div
                key={demo.industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${demo.gradient} bg-brand-card border border-brand-border hover:border-brand-accent/40 transition-all flex flex-col`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {demo.icon}
                </div>
                <h3 className="text-white font-bold text-xl normal-case mb-3">{demo.industry}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed flex-grow mb-8">
                  {demo.description}
                </p>
                <Link
                  to={demo.link}
                  className="self-start flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-brand-accent/90 hover:gap-3 transition-all"
                >
                  View Demo <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide">
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white leading-tight normal-case mb-4">
              Up and running in{' '}
              <span className="text-brand-accent">3 simple steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-gradient-to-r from-brand-accent/30 via-brand-accent/60 to-brand-accent/30" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="relative inline-flex w-20 h-20 items-center justify-center rounded-full bg-brand-card border-2 border-brand-accent/30 mb-6 mx-auto">
                  <span className="text-brand-accent font-mono font-bold text-xl">{step.number}</span>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brand-card border border-brand-border flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg normal-case mb-3">{step.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-card/20 border-y border-brand-border">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white leading-tight normal-case mb-4">
              Businesses love NarenNet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-brand-card border border-brand-border flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-white leading-relaxed text-base flex-grow">
                  "{t.result}"
                </p>
                <div className="pt-4 border-t border-brand-border">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-brand-secondary text-xs mt-1">{t.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-brand-accent via-orange-600 to-orange-700 p-12 md:p-20 text-center"
          >
            {/* Subtle texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

            <div className="relative z-10">
              <h2 className="text-[clamp(1.8rem,5vw,4rem)] font-bold text-white leading-tight normal-case mb-4">
                Start managing your business smarter today
              </h2>
              <p className="text-white/80 text-xl max-w-xl mx-auto mb-10">
                Join 50+ businesses that already trust NarenNet to power their daily operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 bg-white text-brand-accent px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-white/90 hover:scale-[1.02] transition-all shadow-xl"
                >
                  Get Free Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20book%20a%20free%20demo."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.524 5.837L.057 23.743a.5.5 0 0 0 .6.6l5.906-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.098-1.4l-.363-.216-3.754.932.948-3.753-.234-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Talk on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
