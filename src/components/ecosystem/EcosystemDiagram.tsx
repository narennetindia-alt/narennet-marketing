import { motion } from 'motion/react';
import { Network, Database, Brain, Smartphone, Activity, Code, Settings } from 'lucide-react';

export default function EcosystemDiagram() {
  const nodes = [
    { label: 'AI Analytics', icon: Brain, delay: 0.2, pos: 'top-10 left-1/2 -translate-x-1/2' },
    { label: 'Mobile Apps', icon: Smartphone, delay: 0.3, pos: 'top-1/4 right-[10%]' },
    { label: 'Business Ops', icon: Settings, delay: 0.4, pos: 'bottom-1/4 right-[15%]' },
    { label: 'Database', icon: Database, delay: 0.5, pos: 'bottom-10 left-1/2 -translate-x-1/2' },
    { label: 'APIs', icon: Code, delay: 0.6, pos: 'bottom-1/4 left-[15%]' },
    { label: 'Real-time', icon: Activity, delay: 0.7, pos: 'top-1/4 left-[10%]' },
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_100%)]" />

      <div className="container-wide px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Connected Digital Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-secondary"
          >
            Our platform seamlessly connects every aspect of your business operations.
          </motion.p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video rounded-3xl border border-white/10 bg-black/50 overflow-hidden flex items-center justify-center p-8">
          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-30" style={{ filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.5))' }}>
            {/* Top Node */}
            <motion.line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            {/* Top Right */}
            <motion.line x1="50%" y1="50%" x2="85%" y2="35%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            {/* Bottom Right */}
            <motion.line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            {/* Bottom */}
            <motion.line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            {/* Bottom Left */}
            <motion.line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            {/* Top Left */}
            <motion.line x1="50%" y1="50%" x2="15%" y2="35%" stroke="#38BDF8" strokeWidth="2" strokeDasharray="10 10"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
          </svg>

          {/* Center Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(56,189,248,0.3)] filter backdrop-brightness-125"
          >
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-brand-accent/30 flex flex-col items-center justify-center animate-pulse duration-3000">
              <Network className="w-10 h-10 md:w-16 md:h-16 text-white mb-2" />
              <span className="text-white font-bold text-sm md:text-base hidden sm:block">Naren.Cloud</span>
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
              className={`absolute ${node.pos} z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center hover:bg-white/10 hover:border-brand-accent transition-all cursor-pointer group`}
            >
              <node.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-secondary group-hover:text-brand-accent transition-colors mb-2" />
              <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
