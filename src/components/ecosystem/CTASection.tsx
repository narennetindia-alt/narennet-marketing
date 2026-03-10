import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonLink = '/contact' }: CTASectionProps) {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/5 backdrop-blur-3xl" />
      <div className="container-wide relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-20 text-center backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 relative z-10">
            {title}
          </h2>
          <p className="text-xl text-brand-secondary mb-12 max-w-2xl mx-auto relative z-10">
            {subtitle}
          </p>
          <Link 
            to={buttonLink}
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-accent hover:text-white transition-all shadow-xl group relative z-10"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
