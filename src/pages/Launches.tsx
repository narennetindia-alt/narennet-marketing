import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Rocket, Zap, Code, Box, Store, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const launches = [
  {
    id: 'career-growth-ai',
    title: 'CareerGrowth AI',
    description: 'An intelligent career companion that analyzes your skills, maps out personalized growth trajectories, and connects you with high-impact opportunities using predictive AI.',
    status: 'Beta Testing',
    date: 'March 24, 2026',
    icon: <Sparkles className="text-brand-accent" size={32} />,
    category: 'AI / Productivity',
    color: 'from-orange-500/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding Tool',
    description: 'Transform your creative intent into functional code. A revolutionary interface that understands "vibe" and context, allowing developers to build complex systems through high-level conceptual interaction.',
    status: 'In Development',
    date: 'March 24, 2026',
    icon: <Code className="text-brand-accent" size={32} />,
    category: 'Developer Tools',
    color: 'from-blue-500/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3d-animation',
    title: '3D Animation Studio',
    description: 'A browser-based, AI-accelerated 3D animation suite. Create professional-grade character animations and cinematic sequences with zero technical overhead and real-time rendering.',
    status: 'Early Access',
    date: 'April 01, 2026',
    icon: <Box className="text-brand-accent" size={32} />,
    category: 'Creative Suite',
    color: 'from-purple-500/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'store-manager',
    title: 'NarenStore Manager',
    description: 'The ultimate retail operating system. From inventory automation to multi-channel sales synchronization, manage your entire retail empire from a single, intelligent dashboard.',
    status: 'Live',
    date: 'Launched',
    icon: <Store className="text-brand-accent" size={32} />,
    category: 'Enterprise SaaS',
    color: 'from-emerald-500/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  }
];

const roadmapSteps = [
  {
    quarter: 'Q2 2024',
    title: 'NarenStore Launch',
    description: 'Official release of our flagship retail operating system.',
    status: 'Completed'
  },
  {
    quarter: 'Q1 2026',
    title: 'CareerGrowth Beta',
    description: 'Early access for selected enterprise partners.',
    status: 'On Track'
  },
  {
    quarter: 'Q1 2026',
    title: 'Vibe Coding Preview',
    description: 'Developer preview of our revolutionary coding interface.',
    status: 'In Progress'
  },
  {
    quarter: 'Q2 2026',
    title: '3D Studio Release',
    description: 'Full public launch of the AI-accelerated 3D suite.',
    status: 'Planned'
  }
];

export default function Launches() {
  const [joinedLaunches, setJoinedLaunches] = useState<string[]>([]);
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white min-h-[70vh] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[130px] -z-10 opacity-30" />

        <div className="container-wide px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-black uppercase tracking-widest mb-10 shadow-lg shadow-brand-accent/10"
            >
              <Rocket size={16} /> The Future of NarenNet
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase text-white"
            >
              Upcoming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Launches</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/50 max-w-2xl leading-tight font-light"
            >
              We are building the next generation of intelligent tools. Witness the evolution of business and creativity.
            </motion.p>
          </div>
        </div>

        {/* Vertical Rail */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-24 border-r border-white/5 hidden md:flex items-center justify-center">
          <div className="writing-mode-vertical text-[10px] font-black uppercase tracking-[0.5em] text-white/10 select-none">
            ROADMAP 2024 — 2026
          </div>
        </div>
      </section>

      {/* 2. ROADMAP TIMELINE — WHITE BG */}
      <section className="py-32 bg-brand-bg border-b border-brand-border overflow-hidden">
        <div className="container-wide px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-24">
            <div className="max-w-xl">
              <span className="text-brand-accent font-black text-sm uppercase tracking-[0.3em] block mb-4">Strategic Vision</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-brand-primary leading-none">Launch <br /> Timeline</h2>
            </div>
            <p className="text-xl text-brand-secondary font-light max-w-md leading-relaxed">
              Our development cycle is optimized for rapid innovation and rock-solid stability for our global enterprise partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-border hidden lg:block -translate-y-1/2 opacity-50" />

            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.quarter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-white p-10 rounded-[32px] border border-brand-border shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  <span className="text-xs font-black">{i + 1}</span>
                </div>
                <div className="text-brand-accent font-black text-[10px] uppercase tracking-widest mb-3">{step.quarter}</div>
                <h3 className="text-2xl font-black mb-4 text-brand-primary tracking-tight">{step.title}</h3>
                <p className="text-brand-secondary font-light leading-relaxed mb-6 text-base">{step.description}</p>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${step.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-accent/5 text-brand-accent'}`}>
                  {step.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LAUNCH GRID — LIGHT GRAY BG */}
      <section className="bg-brand-card/30 py-48">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 gap-40">
            {launches.map((launch, i) => (
              <motion.div
                key={launch.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center"
              >
                <div className={`relative rounded-[48px] md:rounded-[64px] overflow-hidden aspect-[4/3] lg:aspect-square bg-white shadow-2xl border-4 border-white ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={launch.image}
                    alt={launch.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${launch.color} mix-blend-multiply opacity-60`} />

                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-2xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">{launch.status}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <button
                        onClick={() => !joinedLaunches.includes(launch.id) && setJoinedLaunches([...joinedLaunches, launch.id])}
                        className={`${joinedLaunches.includes(launch.id) ? 'bg-emerald-600' : 'bg-brand-deep'} text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-brand-deep/20`}
                      >
                        {joinedLaunches.includes(launch.id) ? (
                          <>Joined Successfully <CheckCircle2 size={16} /></>
                        ) : (
                          <>Join Waitlist <ArrowRight size={16} /></>
                        )}
                      </button>
                      <span className="text-brand-secondary text-[10px] font-black uppercase tracking-widest bg-white/60 px-4 py-1.5 rounded-full border border-brand-border">
                        {launch.date}
                      </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase text-brand-primary">{launch.title}</h2>
                  </div>

                  <p className="text-2xl md:text-3xl text-brand-secondary font-light leading-snug max-w-xl tracking-tight">
                    {launch.description}
                  </p>

                  <div className="flex items-center gap-10 pt-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-brand-secondary/40 uppercase tracking-widest leading-none">Target Launch</p>
                      <p className="text-3xl font-black tracking-tighter text-brand-primary">{launch.date.split(',')[0]}</p>
                    </div>
                    <div className="w-px h-16 bg-brand-border" />
                    <button className="flex items-center gap-4 group/btn">
                      <span className="text-sm font-black uppercase tracking-widest text-brand-secondary group-hover:text-brand-accent transition-colors">Notify Me</span>
                      <div className="w-14 h-14 rounded-full border-2 border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
                        <ArrowRight className="text-brand-primary group-hover:text-white transition-colors" size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CALL TO ACTION — DARK CARD */}
          <div className="mt-60">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto p-12 md:p-32 rounded-[60px] md:rounded-[80px] bg-brand-deep text-white relative overflow-hidden group shadow-2xl text-center border border-white/5"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full -z-10 group-hover:bg-brand-accent/15 transition-colors duration-700" />
              
              <div className="max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.9] md:leading-[0.85] text-white">Want Early <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Access?</span></h2>
                <p className="text-white/50 text-xl md:text-2xl mb-16 font-light leading-relaxed">
                    Join our exclusive waitlist to be among the first to experience these revolutionary tools as they go live.
                </p>
                <form className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:flex-grow px-8 py-6 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-accent transition-colors text-lg text-white font-medium placeholder:text-white/20"
                    />
                    <button className="w-full md:w-auto px-12 py-6 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/30 whitespace-nowrap">
                    Join Waitlist
                    </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
