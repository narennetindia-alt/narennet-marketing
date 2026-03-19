import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Star, 
  Zap, 
  CreditCard,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function ActionStoreMockup() {
  return (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden font-sans">
       {/* Background Abstract Shapes */}
       <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px]" />
       
       {/* Phone Mockup Frame */}
       <motion.div 
         initial={{ y: 40, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         className="w-[180px] aspect-[9/19] bg-white border-[6px] border-slate-950 rounded-[40px] shadow-[0_40px_80px_rgba(11,31,58,0.15)] overflow-hidden relative"
       >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-950 rounded-b-xl z-20" />
          
          {/* Simple App UI */}
          <div className="p-4 pt-10 space-y-4">
             {/* Header */}
             <div className="flex justify-between items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                   <ShoppingBag size={14} className="text-slate-900" />
                </div>
                <div className="w-4 h-4 rounded-full bg-brand-accent flex items-center justify-center">
                   <Check size={10} className="text-white" />
                </div>
             </div>

             {/* Product Image Capsule */}
             <div className="w-full aspect-square bg-slate-50 rounded-3xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-3 right-3 bg-brand-accent text-white p-1.5 rounded-xl shadow-lg">
                   <Zap size={10} className="fill-white" />
                </div>
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full blur-2xl" />
                <ShoppingBag size={48} className="text-slate-200" />
             </div>

             {/* Text Content */}
             <div className="space-y-1">
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">High-Performance X1</div>
                <div className="flex items-center gap-1">
                   {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={6} className="fill-amber-500 text-amber-500" />
                   ))}
                   <span className="text-[7px] font-bold text-slate-400">9k+ Sales</span>
                </div>
             </div>

             {/* Price & CTA */}
             <div className="flex items-center justify-between pt-2">
                <div className="text-xs font-black text-slate-900">₹24,999</div>
                <div className="px-3 py-1.5 bg-brand-accent text-white text-[9px] font-black rounded-lg shadow-lg shadow-brand-accent/30">BUY NOW</div>
             </div>

             {/* Trust Badge */}
             <div className="mt-4 p-2 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center gap-2">
                <ShieldCheck size={10} className="text-emerald-500" />
                <span className="text-[7px] font-black text-emerald-800 uppercase tracking-widest">Secured checkout</span>
             </div>
          </div>
       </motion.div>

       {/* Floating Abandoned Cart Badge */}
       <motion.div 
         animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
         transition={{ duration: 4, repeat: Infinity }}
         className="absolute top-10 right-10 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl hidden md:block"
       >
          <div className="text-[8px] font-black text-slate-400 uppercase mb-1">Recovery Rate</div>
          <div className="text-sm font-black text-emerald-500">72.4%</div>
       </motion.div>
    </div>
  );
}
