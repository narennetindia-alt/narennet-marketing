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
    <div className="flex flex-col bg-brand-bg text-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[70vh] flex items-center border-b border-brand-border">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 z-0" />

        <div className="container-wide px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-10"
            >
              <Rocket size={16} /> The Future of NarenNet
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-9xl font-bold mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase text-white"
            >
              Upcoming <br />
              <span className="text-brand-accent">Launches</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-brand-secondary max-w-2xl leading-tight font-light"
            >
              We are building the next generation of intelligent tools. Witness the evolution of business and creativity.
            </motion.p>
          </div>
        </div>

        {/* Vertical Rail */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-24 border-r border-brand-border hidden md:flex items-center justify-center">
          <div className="writing-mode-vertical text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
            ROADMAP 2024 — 2026
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-32 bg-brand-bg border-b border-brand-border overflow-hidden">
        <div className="container-wide px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-24">
            <div className="max-w-xl">
              <span className="text-brand-accent font-mono text-sm font-bold uppercase tracking-widest block mb-4">Strategic Vision</span>
              <h2 className="text-5xl font-bold tracking-tighter uppercase text-white">Launch <br /> Timeline</h2>
            </div>
            <p className="text-xl text-brand-secondary font-light max-w-md leading-relaxed">
              Our development cycle is optimized for rapid innovation and rock-solid stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-border hidden lg:block -translate-y-1/2 opacity-30" />

            {roadmapSteps.map((step, i) => (
              <motion.div
                key={step.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-brand-card p-10 rounded-[32px] border border-brand-border shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <div className="text-brand-accent font-mono text-xs font-bold uppercase tracking-widest mb-2">{step.quarter}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-brand-secondary font-light leading-relaxed mb-6">{step.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                  {step.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Grid */}
      <section className="bg-brand-bg py-32">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 gap-24">
            {launches.map((launch, i) => (
              <motion.div
                key={launch.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={`relative rounded-[48px] overflow-hidden aspect-[4/3] lg:aspect-square bg-gray-100 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={launch.image}
                    alt={launch.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${launch.color} mix-blend-multiply opacity-60`} />

                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black">{launch.status}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                      <button
                        onClick={() => !joinedLaunches.includes(launch.id) && setJoinedLaunches([...joinedLaunches, launch.id])}
                        className={`${joinedLaunches.includes(launch.id) ? 'bg-emerald-600' : 'bg-brand-accent'} text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all flex items-center gap-3 shadow-xl`}
                      >
                        {joinedLaunches.includes(launch.id) ? (
                          <>Joined Successfully <CheckCircle2 size={14} /></>
                        ) : (
                          <>Join Waitlist <ArrowRight size={14} /></>
                        )}
                      </button>
                      <span className="text-brand-secondary text-[10px] font-mono uppercase tracking-widest">
                        {launch.date}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] uppercase">{launch.title}</h2>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                    {launch.description}
                  </p>

                  <div className="flex items-center gap-8 pt-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Target Launch</p>
                      <p className="text-2xl font-bold tracking-tight">{launch.date}</p>
                    </div>
                    <div className="w-px h-12 bg-brand-border" />
                    <button className="flex items-center gap-4 group/btn">
                      <span className="text-sm font-bold uppercase tracking-widest group-hover/btn:text-brand-accent transition-colors text-brand-secondary">Notify Me</span>
                      <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center group-hover/btn:bg-brand-accent group-hover/btn:border-brand-accent transition-all">
                        <ArrowRight className="text-white group-hover/btn:text-white transition-colors" size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-48 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter uppercase text-white">Want Early <br /> <span className="text-brand-accent">Access?</span></h2>
              <p className="text-xl text-brand-secondary font-light mb-12">
                Join our exclusive waitlist to be among the first to experience these revolutionary tools as they go live.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 px-8 py-5 rounded-full bg-white/5 border border-brand-border focus:outline-none focus:border-brand-accent transition-colors text-lg text-white"
                />
                <button className="w-full sm:w-auto px-12 py-5 bg-brand-accent text-white rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl shadow-brand-accent/20">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
