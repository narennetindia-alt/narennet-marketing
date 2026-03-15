import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  badge?: string;
  children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, description, primaryCta, secondaryCta, secondaryCtaLink, badge, children }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-brand-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-wide relative z-10 text-center px-6">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 text-brand-accent mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-sm font-semibold tracking-wider uppercase">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white mb-8"
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === title.split(' ').length - 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-display font-medium text-white mb-4"
        >
          {subtitle}
        </motion.p>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto mb-12"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/25">
            {primaryCta}
          </button>
          {secondaryCta && (
            secondaryCtaLink ? (
              <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center">
                {secondaryCta}
              </a>
            ) : (
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                {secondaryCta}
              </button>
            )
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
