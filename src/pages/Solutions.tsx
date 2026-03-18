import { serviceCategories } from '../data/services';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white min-h-[70vh] flex items-center">
        {/* Animated Background Element */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-white/10 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            SOLUTIONS
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />

        <div className="container-wide px-6 relative z-10">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-16 top-4 text-brand-accent/60 font-mono text-lg hidden xl:block"
            >
              02.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-6 font-bold"
            >
              14 Categories — 100+ Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-white"
            >
              Solutions for <br />
              Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Business</span> <br />
              Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light"
            >
              From local shops to global enterprises, NarenNet provides the intelligent tools you need to automate, optimize, and grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAV — STICKY */}
      <div className="bg-white border-y border-brand-border py-6 sticky top-0 z-30 backdrop-blur-xl bg-white/90">
        <div className="container-wide px-6">
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-border text-brand-secondary hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all text-sm font-bold whitespace-nowrap"
              >
                <cat.icon size={16} />
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ALL CATEGORIES — LIGHT */}
      <div className="bg-brand-bg py-24">
        <div className="container-wide px-6">
          <div className="space-y-32">
            {serviceCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="relative scroll-mt-32"
              >
                {/* Category Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16 pb-8 border-b border-brand-border items-start lg:items-end justify-between">
                  <div className="flex items-start gap-8">
                    <div className="w-20 h-20 flex-shrink-0 rounded-[24px] bg-brand-card border border-brand-border flex items-center justify-center shadow-sm group hover:border-brand-accent transition-all">
                      <category.icon size={32} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">
                        Category {String(catIdx + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-black text-brand-primary tracking-tight mb-4">
                        {category.title}
                      </h2>
                      <p className="text-brand-secondary text-lg font-light max-w-2xl leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918438966728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-3 bg-brand-accent text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-brand-accent/20 hover:scale-105 transition-all"
                  >
                    Custom Quote <ArrowRight size={18} />
                  </a>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-4 p-5 rounded-[24px] bg-white border border-brand-border hover:border-brand-accent/50 hover:shadow-xl transition-all group cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2
                          size={14}
                          className="text-brand-accent"
                        />
                      </div>
                      <span className="text-brand-secondary text-sm font-semibold leading-relaxed group-hover:text-brand-primary transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4. FINAL CTA — DARK CARD */}
          <div className="mt-40 p-12 md:p-32 rounded-[60px] bg-brand-deep border border-white/10 text-center overflow-hidden relative group shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full -z-10 group-hover:bg-brand-accent/15 transition-colors duration-700" />
            <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-white">
              Not sure which solution <br /> is right for you?
            </h2>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Our experts are ready to help you design the perfect software ecosystem for your specific business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/25"
            >
              Talk to an Expert <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
