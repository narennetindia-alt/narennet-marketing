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

// ─────────────────────────── DATA ────────────────────────────────────────────

const stats = [
  { value: '50+', label: 'Businesses Served' },
  { value: '99.7%', label: 'Uptime SLA' },
  { value: '72 hrs', label: 'Deploy Time' },
  { value: '10K+', label: 'Bills / Day' },
];

const clients = [
  'FreshMart', 'City Hospital', 'BrightMinds School', 'QuickStore',
  'MedCare Clinic', 'PeakRetail', 'EduHub', 'MegaGrocer',
  'FreshMart', 'City Hospital', 'BrightMinds School', 'QuickStore',
  'MedCare Clinic', 'PeakRetail', 'EduHub', 'MegaGrocer',
];

const painPoints = [
  {
    icon: <AlertTriangle size={26} />,
    iconColor: '#EF4444',
    title: 'Manual Billing Errors',
    description: 'Hand-written bills and manual entries cause costly mistakes and delays.',
  },
  {
    icon: <Clock size={26} />,
    iconColor: '#F59E0B',
    title: 'Slow Checkout',
    description: 'Long queues and slow billing frustrate customers and hurt revenue.',
  },
  {
    icon: <Package size={26} />,
    iconColor: 'var(--color-brand-accent)',
    title: 'Inventory Confusion',
    description: 'Overstocking and stockouts happen when inventory tracking is manual.',
  },
  {
    icon: <WifiOff size={26} />,
    iconColor: '#8B5CF6',
    title: 'Internet Dependency',
    description: 'Your entire business halts when the connection drops — not anymore.',
  },
];

const features = [
  {
    icon: <CreditCard size={22} />,
    title: 'Billing System',
    description: 'Fast, accurate billing with GST, receipts, and thermal print support.',
  },
  {
    icon: <Package size={22} />,
    title: 'Inventory Management',
    description: 'Real-time stock tracking, low-stock alerts, and barcode scanning.',
  },
  {
    icon: <Users size={22} />,
    title: 'CRM',
    description: 'Manage customer profiles, purchase history, and loyalty programs.',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Analytics Dashboard',
    description: 'Visual sales reports, top products, and daily revenue summaries.',
  },
  {
    icon: <Settings size={22} />,
    title: 'Admin Control Panel',
    description: 'Multi-branch management, staff access control, and system settings.',
  },
];

const demos = [
  {
    icon: <Store size={30} />,
    industry: 'Supermarket ERP',
    description: 'Complete billing, stock, and loyalty management for supermarkets and retail stores.',
    link: '/ecosystem/supermarkets',
  },
  {
    icon: <Stethoscope size={30} />,
    industry: 'Hospital Management',
    description: 'OPD, pharmacy, lab, and patient records management for clinics and hospitals.',
    link: '/ecosystem/hospitals',
  },
  {
    icon: <GraduationCap size={30} />,
    industry: 'School ERP',
    description: 'Student admissions, fee management, attendance, and academic reports.',
    link: '/contact',
  },
];

const steps = [
  {
    number: '01',
    title: 'Book a Free Demo',
    description: 'See the system live with your industry use case in under 30 minutes.',
    icon: <MessageCircle size={18} />,
  },
  {
    number: '02',
    title: 'Customize for Your Business',
    description: 'Our team configures billing, inventory, and modules to match your exact needs.',
    icon: <Settings size={18} />,
  },
  {
    number: '03',
    title: 'Go Live in 3–5 Days',
    description: 'We install, train your staff, and ensure a smooth, confident launch.',
    icon: <Zap size={18} />,
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

// ─────────────────────────── SHARED COMPONENTS ───────────────────────────────

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] mb-4"
      style={{ color: dark ? 'rgba(255,255,255,0.6)' : 'var(--color-brand-accent)' }}
    >
      <span className="w-4 h-px" style={{ backgroundColor: dark ? 'rgba(255,255,255,0.4)' : 'var(--color-brand-accent)' }} />
      {children}
    </span>
  );
}

const waLink = 'https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20learn%20more%20about%20your%20ERP%20system.';
const waDemoLink = 'https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20book%20a%20free%20demo.';

const WhatsAppIcon = ({ cls = 'w-4 h-4' }: { cls?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.524 5.837L.057 23.743a.5.5 0 0 0 .6.6l5.906-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.098-1.4l-.363-.216-3.754.932.948-3.753-.234-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

// ─────────────────────────── PAGE ────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-brand-bg">

      {/* 1. HERO — DARK */}
      <section
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--color-brand-deep) 0%, #0F2D52 60%, #0D2340 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-brand-accent)18 0%, transparent 70%)' }} />

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ borderColor: 'rgba(14,165,233, 0.4)', color: 'var(--color-brand-accent)', background: 'rgba(14,165,233, 0.12)' }}
              >
                <WifiOff size={12} />
                India's #1 Autonomous AI ERP — Offline-First
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 normal-case"
              >
                Autonomous AI ERP That Runs Your Retail Business —{' '}
                <span className="text-brand-accent">Even Without Internet</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed max-w-xl mb-4 text-white/70"
              >
                SmartOS + Offline-first Retail POS built for Indian supermarkets & MSMEs.{' '}
                <strong className="text-white font-semibold">Deploy in 72 hours. No IT team needed.</strong>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-sm font-semibold mb-10 px-4 py-2 rounded-xl inline-block"
                style={{ background: 'rgba(239,68,68,0.12)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.25)' }}
              >
                ⚡ Most POS systems stop when internet fails. Ours doesn't.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white transition-all hover:scale-[1.02] bg-brand-accent shadow-[0_8px_32px_rgba(14,165,233,0.4)] hover:bg-white hover:text-brand-primary hover:shadow-none"
                >
                  Book Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/ecosystem/supermarkets"
                  className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white transition-all border border-white/20 bg-white/5 hover:bg-white/10"
                >
                  <WhatsAppIcon cls="w-4 h-4 text-brand-accent" />
                  View Live Demo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-8 mt-12 pt-10 border-t border-white/10"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-0.5 text-white/50">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div
                className="relative rounded-3xl p-6 shadow-2xl bg-white/5 border border-white/10 backdrop-blur-3xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1 text-white/40">Sales Dashboard</p>
                    <p className="text-white font-bold text-lg">Today's Overview</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[#4ade80] text-xs font-bold">Offline Ready</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue', val: '₹48,230', up: true },
                    { label: 'Orders', val: '142', up: true },
                    { label: 'Stock Items', val: '1,847', up: false },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                      <p className="text-[9px] uppercase tracking-widest mb-1 text-white/40">{kpi.label}</p>
                      <p className="text-white font-bold text-lg">{kpi.val}</p>
                      <p className="text-[9px] font-bold mt-1" style={{ color: kpi.up ? '#4ade80' : 'rgba(255,255,255,0.35)' }}>
                        {kpi.up ? '↑ +12.4%' : '→ Stable'}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-[9px] uppercase tracking-widest mb-3 text-white/40">Weekly Revenue</p>
                  <div className="h-16 flex items-end gap-1.5">
                    {[55, 72, 48, 88, 65, 92, 76].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                        className="flex-1 rounded-t-md"
                        style={{ background: i === 5 ? 'var(--color-brand-accent)' : 'rgba(14,165,233, 0.35)' }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { name: 'Invoice #4821', amount: '₹1,240', time: '2 min ago', paid: true },
                    { name: 'Invoice #4820', amount: '₹3,890', time: '18 min ago', paid: true },
                    { name: 'Invoice #4819', amount: '₹640', time: '1 hr ago', paid: false },
                  ].map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <div>
                        <p className="text-white text-[11px] font-bold">{tx.name}</p>
                        <p className="text-[9px] text-white/40">{tx.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-[11px] font-bold">{tx.amount}</p>
                        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={tx.paid ? { background: 'rgba(74,222,128,0.12)', color: '#4ade80' } : { background: 'rgba(251,191,36,0.12)', color: '#fbbf24' }}>
                          {tx.paid ? 'Paid' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 px-4 py-3 flex items-center gap-2 rounded-2xl shadow-xl bg-brand-deep/95 border border-green-500/30"
              >
                <RefreshCw size={14} className="text-green-400 animate-spin" style={{ animationDuration: '2s' }} />
                <span className="text-green-400 text-xs font-bold">Auto-syncing…</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-6 px-4 py-3 flex items-center gap-2 rounded-2xl shadow-xl bg-brand-deep/95 border border-white/10"
              >
                <ShieldCheck size={14} className="text-brand-accent" />
                <span className="text-white text-xs font-bold">Works Offline</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR — WHITE */}
      <section className="py-14 bg-white border-b border-brand-border">
        <div className="container-wide">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-8 text-brand-secondary"
          >
            Trusted by growing businesses across India
          </motion.p>
          <div className="relative overflow-hidden mask-fade">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
              {clients.map((c, i) => (
                <span key={i} className="text-sm font-bold uppercase tracking-widest shrink-0 text-brand-primary/30">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-12 mt-12 pt-12 border-t border-brand-border">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-1 text-brand-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM — LIGHT GRAY */}
      <section className="py-24 px-6 md:py-32 md:px-12 lg:px-24 bg-brand-card">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight normal-case mb-4 text-brand-primary">
              Running your business shouldn't{' '}
              <span className="text-brand-accent">be this hard</span>
            </h2>
            <p className="text-lg text-brand-secondary">
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
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-7 rounded-2xl bg-white border border-brand-border transition-all hover:shadow-lg hover:border-brand-accent/30"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${pt.iconColor}14`, color: pt.iconColor }}>
                  {pt.icon}
                </div>
                <h3 className="font-bold text-base normal-case mb-2 text-brand-primary">{pt.title}</h3>
                <p className="text-sm leading-relaxed text-brand-secondary">{pt.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION — WHITE */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight normal-case mb-4 text-brand-primary">
                Everything you need in{' '}
                <span className="text-brand-accent">one system</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-brand-secondary">
                NarenNet gives you a complete business operating system — billing, inventory, CRM,
                analytics, and admin — all communicating in real time, all within one platform.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-brand-accent hover:gap-4 transition-all"
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
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-brand-border transition-all hover:shadow-md hover:border-brand-accent/20"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all bg-brand-accent/10 text-brand-accent">
                    {f.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-sm normal-case mb-1 text-brand-primary">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-secondary">{f.description}</p>
                  </div>
                  <ChevronRight size={14} className="mt-1 shrink-0 text-brand-border group-hover:translate-x-1 transition-transform group-hover:text-brand-accent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. USP — DARK */}
      <section
        className="py-24 px-6 md:py-32 md:px-12 lg:px-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--color-brand-deep) 0%, #0F2D52 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-brand-accent)15 0%, transparent 70%)' }} />

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-[40px] p-10 md:p-16 text-center bg-white/5 border border-white/10 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto bg-brand-accent/20 border border-brand-accent/40"
              >
                <WifiOff size={36} className="text-brand-accent" />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl border border-brand-accent/60"
                />
              </motion.div>

              <SectionLabel dark>Unique Advantage</SectionLabel>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white leading-tight normal-case mb-6"
              >
                Works even{' '}
                <span className="text-brand-accent">without internet</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl leading-relaxed max-w-xl mx-auto mb-12 text-white/60"
              >
                Continue billing, managing stock, and serving customers even when the internet is
                down. Once reconnected, everything{' '}
                <strong className="text-white font-semibold">automatically syncs</strong> to the cloud.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {[
                  { icon: <CheckCircle2 size={18} />, label: 'Full offline billing' },
                  { icon: <RefreshCw size={18} />, label: 'Auto-sync on reconnect' },
                  { icon: <DatabaseZap size={18} />, label: 'Zero data loss' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 text-green-400 border border-green-500/20">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5b. SMARTOS INTELLIGENCE — DARK */}
      <section
        className="py-24 px-6 md:py-32 md:px-12 lg:px-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #071525 0%, #0a1f38 60%, #071525 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-brand-accent)12 0%, transparent 70%)' }} />

        <div className="container-wide relative z-10">
          <div className="text-center mb-4">
            <SectionLabel dark>SmartOS Intelligence</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold text-white leading-tight normal-case text-center mb-4"
          >
            ERP Dashboards Don't Make Decisions —{' '}
            <span className="text-brand-accent">SmartOS Does</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-white/50 text-base mb-3 max-w-xl mx-auto"
          >
            Built in Chennai. Running in 14+ stores across Tamil Nadu & Karnataka.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-sm font-bold uppercase tracking-widest mb-16"
            style={{ color: 'var(--color-brand-accent)' }}
          >
            vs. SAP (12-month deploy, ₹30L+) • vs. Zoho (no autonomous actions)
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                icon: <BarChart3 size={28} />,
                title: 'AI Predicts Demand',
                description: 'SmartOS analyzes 18 months of POS data to forecast stockouts 7 days before they happen — with 87% accuracy on 30-day horizons.',
              },
              {
                step: '02',
                icon: <RefreshCw size={28} />,
                title: 'AI Automates Workflows',
                description: 'Autonomous reorder engine triggers purchase orders without manual approval. Avg stores see 34% stockout reduction in 60 days.',
              },
              {
                step: '03',
                icon: <ShieldCheck size={28} />,
                title: 'AI Protects Revenue',
                description: 'Real-time shrinkage detection flags discount abuse, void anomalies, and post-close adjustments. Avg 74% reduction in void transaction rates.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative p-8 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-accent/30 hover:bg-white/8 transition-all group"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-5" style={{ color: 'var(--color-brand-accent)' }}>{item.step}</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-brand-accent bg-brand-accent/10 border border-brand-accent/20 group-hover:bg-brand-accent group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg normal-case mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-14"
          >
            <Link
              to="/ecosystem/supermarkets"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white bg-brand-accent shadow-[0_8px_32px_rgba(14,165,233,0.35)] hover:scale-[1.03] transition-all"
            >
              See SmartOS in Action <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. DEMO — LIGHT CARD */}
      <section className="section-padding bg-brand-bg">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionLabel>Live Demos</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight normal-case mb-4 text-brand-primary">
              See it in action
            </h2>
            <p className="text-lg max-w-xl mx-auto text-brand-secondary">
              Explore industry-specific demos crafted for your exact business type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, idx) => (
              <motion.div
                key={demo.industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col p-8 rounded-[32px] bg-brand-card border border-brand-border transition-all hover:shadow-xl hover:bg-white hover:border-brand-accent/30"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all bg-brand-accent/10 text-brand-accent">
                  {demo.icon}
                </div>
                <h3 className="font-bold text-xl normal-case mb-3 text-brand-primary">{demo.industry}</h3>
                <p className="text-sm leading-relaxed flex-grow mb-8 text-brand-secondary">
                  {demo.description}
                </p>
                <Link
                  to={demo.link}
                  className="self-start flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all hover:gap-4 bg-brand-accent shadow-lg shadow-brand-accent/20"
                >
                  View Demo <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS — WHITE */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight normal-case mb-4 text-brand-primary">
              Up and running in{' '}
              <span className="text-brand-accent">3 simple steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[calc(33.33%+1rem)] right-[calc(33.33%+1rem)] h-px bg-brand-accent/30" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative text-center"
              >
                <div className="relative inline-flex w-20 h-20 items-center justify-center rounded-3xl mb-8 mx-auto bg-brand-card border-2 border-brand-accent/30">
                  <span className="font-mono font-bold text-2xl text-brand-accent">{step.number}</span>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-white border border-brand-border text-brand-accent shadow-sm">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl normal-case mb-4 text-brand-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed max-w-xs mx-auto text-brand-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS — LIGHT GRAY */}
      <section className="section-padding bg-brand-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight normal-case mb-4 text-brand-primary">
              Businesses love NarenNet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col gap-6 p-8 rounded-[32px] bg-white border border-brand-border hover:shadow-xl transition-all"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="leading-relaxed text-lg flex-grow italic text-brand-primary">
                  "{t.result}"
                </p>
                <div className="pt-6 border-t border-brand-border">
                  <p className="font-bold text-sm text-brand-primary">{t.name}</p>
                  <p className="text-xs mt-1 text-brand-secondary uppercase tracking-widest">{t.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5 FEATURED GUIDE */}
      <section className="py-20 bg-white border-t border-brand-border">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto rounded-[32px] p-8 md:p-12 bg-brand-card border border-brand-accent/20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" 
                alt="Offline POS Software India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <SectionLabel>Featured Guide</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 normal-case">
                Is Your POS Ready for India's Internet Outages?
              </h3>
              <p className="text-brand-secondary mb-6 text-base leading-relaxed">
                Discover why <strong>offline-first architecture</strong> is no longer optional for Indian retail. 
                Learn how to prevent revenue loss during peak hours with our 2026 guide.
              </p>
              <Link
                to="/blog/offline-pos-software-india"
                className="inline-flex items-center gap-2 font-bold text-brand-accent hover:gap-4 transition-all"
              >
                Read the Guide <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA — DARK */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[48px] overflow-hidden p-12 md:p-24 text-center bg-brand-deep text-white shadow-2xl"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{ background: 'radial-gradient(ellipse at 30% 50%, #0EA5E9 0%, transparent 60%)' }} />

            <div className="relative z-10">
              <h2 className="text-[clamp(1.8rem,5vw,3.8rem)] font-bold text-white leading-tight normal-case mb-6">
                Start managing your business smarter today
              </h2>
              <p className="text-xl max-w-xl mx-auto mb-12 text-white/60">
                Join 50+ businesses that already trust NarenNet to power their daily operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white transition-all hover:scale-[1.05] bg-brand-accent shadow-[0_8px_24px_rgba(14,165,233,0.4)]"
                >
                  Get Free Demo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={waDemoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-wider text-white transition-all border border-white/20 bg-white/5 hover:bg-white/10"
                >
                  <WhatsAppIcon cls="w-4 h-4 text-green-400" />
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
