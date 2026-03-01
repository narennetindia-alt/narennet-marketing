import { serviceCategories } from '../data/services';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[70vh] flex items-center">
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            SOLUTIONS
          </div>
        </div>

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
              className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-6"
            >
              14 Categories — 100+ Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-white"
            >
              Solutions for <br />
              Every <span className="text-brand-accent">Business</span> <br />
              Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-secondary max-w-2xl leading-relaxed font-light"
            >
              From local shops to global enterprises, NarenNet provides the intelligent tools you need to automate, optimize, and grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Index */}
      <div className="bg-brand-card border-y border-brand-border py-8 sticky top-0 z-30 backdrop-blur-xl bg-brand-card/80">
        <div className="container-wide px-6">
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border text-brand-secondary hover:border-brand-accent hover:text-brand-accent transition-all text-sm font-medium whitespace-nowrap"
              >
                <cat.icon size={14} />
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* All Categories */}
      <div className="bg-brand-bg py-24">
        <div className="container-wide px-6">
          <div className="space-y-28">
            {serviceCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="relative scroll-mt-28"
              >
                {/* Category Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12 pb-8 border-b border-brand-border items-start lg:items-end justify-between">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                      <category.icon size={28} className="text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] mb-2">
                        Category {String(catIdx + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                        {category.title}
                      </h2>
                      <p className="text-brand-secondary text-base font-light max-w-xl">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918438966728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-3 border border-brand-accent text-brand-accent px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-accent hover:text-white transition-all"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </a>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:bg-white/[0.02] transition-all group cursor-default"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand-accent flex-shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-brand-secondary text-sm font-medium leading-snug group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-40 p-10 md:p-32 rounded-[40px] md:rounded-[60px] bg-brand-card border border-brand-border text-center overflow-hidden relative group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full -z-10 group-hover:bg-brand-accent/10 transition-colors duration-700" />
            <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-white">
              Not sure which solution <br /> is right for you?
            </h2>
            <p className="text-brand-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Our experts are ready to help you design the perfect software ecosystem for your specific business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20"
            >
              Talk to an Expert <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
