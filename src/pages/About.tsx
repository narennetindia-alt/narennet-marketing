import { motion } from 'motion/react';
import {
  History,
  Target,
  Eye,
  Linkedin,
  Twitter,
  Quote,
  CheckCircle2
} from 'lucide-react';

const values = [
  { title: 'Simplicity', description: 'We believe complex problems deserve simple, elegant solutions.' },
  { title: 'Innovation', description: 'We are constantly pushing the boundaries of what AI can do for business.' },
  { title: 'Reliability', description: 'Our systems are built to be the backbone of your business, 24/7.' },
  { title: 'Growth', description: 'Your success is our success. We grow only when you do.' },
];

export default function About() {
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white min-h-[70vh] flex items-center">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-white/10 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            ABOUT US
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[130px] -z-10 opacity-30" />

        <div className="container-wide px-6 relative z-10">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-16 top-4 text-brand-accent/60 font-mono text-lg hidden xl:block"
            >
              03.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-white"
            >
              The Story <br />
              Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">NarenNet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light"
            >
              We are on a mission to simplify business technology and empower enterprises with intelligent, automated software ecosystems.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-brand-bg pt-32 pb-24">
        <div className="container-wide px-6">
          {/* 2. OUR STORY — LIGHT */}
          <section className="mb-48 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-accent/10 blur-[100px] rounded-full opacity-50" />
              <div className="relative rounded-[60px] p-2 border border-brand-border overflow-hidden aspect-square bg-white shadow-2xl">
                <img
                  src="/genesis.png"
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-[58px] grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-3 text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-bold mb-8">
                <History size={20} /> Our Genesis
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight text-brand-primary tracking-tighter">Born to simplify business technology</h2>
              <div className="space-y-8 text-brand-secondary text-xl leading-relaxed font-light">
                <p>
                  NarenNet was founded with a clear vision: to eliminate the fragmentation that plagues modern business operations. Most companies struggle with a patchwork of disconnected tools that don't talk to each other.
                </p>
                <p>
                  We built NarenNet to be the single source of truth—one unified platform instead of fragmented tools. Our ecosystem brings together POS, ERP, CRM, and AI automation into a seamless experience.
                </p>
              </div>
            </div>
          </section>

          {/* 3. MISSION & VISION — CARDS */}
          <section className="mb-48 grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[60px] bg-white border border-brand-border shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-accent/10 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <Target size={40} className="text-brand-accent" />
              </div>
              <h3 className="text-4xl font-black text-brand-primary mb-8 tracking-tight">Our Mission</h3>
              <p className="text-brand-secondary text-xl leading-relaxed font-light">
                To empower businesses of all sizes with scalable, automated, AI-driven software that handles the heavy lifting, so they can focus on growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 rounded-[60px] bg-white border border-brand-border shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-accent/10 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <Eye size={40} className="text-brand-accent" />
              </div>
              <h3 className="text-4xl font-black text-brand-primary mb-8 tracking-tight">Our Vision</h3>
              <p className="text-brand-secondary text-xl leading-relaxed font-light">
                To become India’s most intelligent business operating system provider, setting the standard for how modern enterprises operate.
              </p>
            </motion.div>
          </section>

          {/* 4. FOUNDER SHOWCASE — DARK GRADIENT */}
          <section className="mb-48 py-32 border-y border-brand-border relative overflow-hidden bg-brand-deep rounded-[80px] text-white">
            <div className="container px-12 lg:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-3 text-brand-accent font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-10">
                    Meet the Founder & CEO
                  </div>
                  <h2 className="text-7xl font-black mb-6 tracking-tighter text-white">Narendhiran C</h2>
                  <p className="text-brand-accent font-medium text-3xl mb-12">Founder and CEO, NarenNet</p>

                  <div className="space-y-10 text-white/50 text-lg md:text-2xl leading-relaxed mb-16 font-light">
                    <p>
                      A visionary tech entrepreneur with a deep passion for building intelligent, scalable SaaS solutions. Naren has spent over a decade identifying inefficiencies in retail and enterprise operations.
                    </p>
                    <p>
                      As the driving force behind NarenNet, his focus is on creating a future where software isn't just a tool, but an intelligent partner that anticipates business needs.
                    </p>
                  </div>

                  <div className="relative p-8 md:p-12 rounded-[40px] md:rounded-[50px] bg-white/5 backdrop-blur-md border border-white/10 mb-16 shadow-2xl">
                    <Quote size={40} className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-brand-accent opacity-30" />
                    <p className="text-xl md:text-3xl italic font-light leading-relaxed text-white/90">
                      "Our goal isn't just to build software; it's to build the operating system for the next generation of Indian businesses."
                    </p>
                  </div>

                  <div className="flex items-center gap-12">
                    <a href="https://www.linkedin.com/in/narennet" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/40 hover:text-brand-accent transition-all uppercase tracking-[0.3em] text-[11px] font-bold">
                      <Linkedin size={20} /> LinkedIn
                    </a>
                    <a href="https://twitter.com/narennet" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white/40 hover:text-brand-accent transition-all uppercase tracking-[0.3em] text-[11px] font-bold">
                      <Twitter size={20} /> Twitter
                    </a>
                  </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                  <div className="relative w-full max-w-lg aspect-[4/5] rounded-[80px] overflow-hidden border-2 border-brand-accent/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] group">
                    <img
                      src="/ceo-naren.jpeg"
                      alt="Narendhiran C - Founder and CEO of NarenNet"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-16 left-16 text-white">
                      <p className="font-black text-5xl tracking-tighter">Narendhiran C</p>
                      <p className="text-brand-accent uppercase tracking-[0.3em] text-[11px] mt-4 font-bold">Founder and CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. VALUES — LIGHT GRID */}
          <section className="text-center pb-24">
            <div className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] font-bold mb-6">Our DNA</div>
            <h2 className="text-5xl md:text-7xl font-black mb-32 tracking-tighter text-brand-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-12 rounded-[50px] bg-white border border-brand-border shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={32} className="text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-brand-primary tracking-tight">{value.title}</h3>
                  <p className="text-brand-secondary text-lg leading-relaxed font-light">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
