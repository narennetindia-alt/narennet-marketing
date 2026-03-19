import { motion } from 'motion/react';
import { 
  Database, 
  RefreshCw, 
  Smartphone, 
  Globe,
  CheckCircle2,
  Box
} from 'lucide-react';

export default function ActionSyncMockup() {
  return (
    <div className="w-full h-full bg-slate-950 p-8 flex flex-col items-center justify-center font-sans space-y-8 overflow-hidden relative">
       {/* Background Connection Lines */}
       <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300">
             <motion.path 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, repeat: Infinity }}
               d="M 100 150 Q 200 50 300 150" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4" 
             />
             <motion.path 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, repeat: Infinity, delay: 1 }}
               d="M 100 150 Q 200 250 300 150" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4" 
             />
          </svg>
       </div>

       <div className="relative z-10 flex items-center justify-between w-full max-w-[280px]">
          {/* Physical POS Node */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col gap-3 items-center"
          >
             <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative group">
                <Box size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                   <CheckCircle2 size={10} className="text-white" />
                </div>
             </div>
             <div className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center">Retail POS</div>
          </motion.div>

          {/* Sync Central Core */}
          <div className="relative">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="w-20 h-20 rounded-full border border-brand-accent/30 border-dashed flex items-center justify-center"
             >
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center">
                   <RefreshCw size={24} className="text-brand-accent animate-spin-slow" />
                </div>
             </motion.div>
             
             {/* Dynamic Badge */}
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-accent text-white text-[8px] font-black rounded-full shadow-lg">
                SYNCING...
             </div>
          </div>

          {/* Cloud Web Node */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col gap-3 items-center"
          >
             <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center group">
                <Globe size={24} className="text-brand-accent group-hover:text-white transition-colors" />
             </div>
             <div className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center">eCommerce</div>
          </motion.div>
       </div>

       {/* Live Stock Indicators */}
       <div className="w-full max-w-[200px] h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1/3 h-full bg-brand-accent"
          />
       </div>

       <style>{`
          @keyframes spin-slow {
             from { transform: rotate(0deg); }
             to { transform: rotate(-360deg); }
          }
          .animate-spin-slow {
             animation: spin-slow 4s linear infinite;
          }
       `}</style>
    </div>
  );
}
