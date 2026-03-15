import { motion } from 'motion/react';
import { Network, Building2, Pill, TrendingUp, HardDrive, Smartphone } from 'lucide-react';

export default function HospitalEcosystemDiagram() {
  const nodes = [
    { label: 'Hospital ERP', icon: Building2, delay: 0.2, left: '50%', top: '20%' },
    { label: 'Mobile Ecosystem', icon: Smartphone, delay: 0.3, left: '85%', top: '35%' },
    { label: 'Digital Records', icon: HardDrive, delay: 0.4, left: '80%', top: '75%' },
    { label: 'AI Insights', icon: TrendingUp, delay: 0.5, left: '50%', top: '80%' },
    { label: 'Smart Pharmacy', icon: Pill, delay: 0.6, left: '20%', top: '75%' },
    { label: 'Lab & Diagnostics', icon: Network, delay: 0.7, left: '15%', top: '35%' },
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,125,38,0.05)_0%,transparent_100%)]" />

      <div className="container-wide px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase"
          >
            Platform Overview
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-secondary"
          >
            A seamlessly integrated clinical and operational ecosystem.
          </motion.p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video rounded-3xl border border-white/10 bg-black/50 overflow-hidden flex items-center justify-center p-8 glass">
          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-30" style={{ filter: 'drop-shadow(0 0 8px rgba(242,125,38,0.5))' }}>
            {nodes.map((node, i) => (
              <motion.line 
                key={i}
                x1="50%" y1="50%" x2={node.left} y2={node.top} 
                stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} 
              />
            ))}
          </svg>

          {/* Center Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-32 h-32 md:w-56 md:h-56 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(242,125,38,0.3)]"
          >
            <div className="w-24 h-24 md:w-44 md:h-44 rounded-full bg-brand-accent/30 flex flex-col items-center justify-center text-center p-4">
              <Network className="w-8 h-8 md:w-12 md:h-12 text-white mb-2" />
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-tighter">NarenNet Hospital Cloud Platform</span>
            </div>
          </motion.div>

          {/* Satellites */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay, type: 'spring', stiffness: 100 }}
              style={{ left: node.left, top: node.top }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center hover:bg-white/10 hover:border-brand-accent transition-all cursor-pointer group text-center"
            >
              <node.icon className="w-5 h-5 md:w-8 md:h-8 text-brand-secondary group-hover:text-brand-accent transition-colors mb-2" />
              <span className="text-[8px] md:text-[10px] font-bold text-white tracking-widest uppercase leading-tight px-1">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
