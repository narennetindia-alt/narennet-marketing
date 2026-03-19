import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  ArrowLeft, 
  ArrowRight, 
  CreditCard,
  Star,
  Zap,
  Layout
} from 'lucide-react';

export default function MobileEcosystemMockup() {
  return (
    <div className="relative w-full h-full bg-slate-50 overflow-hidden font-sans flex items-center justify-center p-4 lg:p-10">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0EA5E9 1px, transparent 0)', backgroundSize: '24px 24px' }} />

       <div className="relative flex gap-8 items-center justify-center scale-75 lg:scale-100">
          {/* Main Mobile App (Primary Focus) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-56 aspect-[9/19] bg-white border-[8px] border-slate-950 rounded-[48px] shadow-[0_50px_100px_rgba(11,31,58,0.2)] overflow-hidden relative"
          >
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-950 rounded-b-2xl z-20" />
             
             {/* App Header */}
             <div className="p-4 pt-8 flex justify-between items-center bg-white border-b border-slate-100 sticky top-0 z-10">
                <ArrowLeft size={16} className="text-slate-900" />
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-900">Ecosystem Shop</div>
                <ShoppingBag size={16} className="text-brand-accent" />
             </div>

             {/* App Content */}
             <div className="p-4 space-y-4 overflow-y-auto h-full pb-20 no-scrollbar">
                <div className="w-full aspect-square bg-slate-50 rounded-3xl flex items-center justify-center relative group overflow-hidden">
                   <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Layout size={64} className="text-slate-200" />
                   <div className="absolute bottom-4 right-4 bg-brand-accent text-white p-2 rounded-xl shadow-lg">
                      <Zap size={16} />
                   </div>
                </div>
                
                <div className="space-y-1">
                   <div className="text-xs font-black text-slate-900">Premium Ecosystem X1</div>
                   <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={8} className="fill-amber-500 text-amber-500" />
                      ))}
                      <span className="text-[8px] text-slate-400 font-bold">(12k+)</span>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                   <div className="text-sm font-black text-slate-900">₹45,000</div>
                   <div className="px-3 py-1 bg-brand-accent text-white text-[10px] font-black rounded-lg shadow-lg shadow-brand-accent/30">ADD TO CART</div>
                </div>

                {/* Trust Elements */}
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-2">
                   <CreditCard size={12} className="text-emerald-500" />
                   <div className="text-[8px] text-emerald-800 font-bold uppercase tracking-widest">Secured by NarenNet</div>
                </div>
             </div>
          </motion.div>

          {/* Secondary Stack (Visual depth) */}
          <div className="hidden lg:flex flex-col gap-4 translate-y-10">
              <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="w-48 p-4 bg-white border border-slate-200 rounded-[32px] shadow-2xl"
              >
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-black text-xs">A</div>
                     <div>
                        <div className="text-[10px] text-slate-900 font-bold">Abandoned Cart</div>
                        <div className="text-[8px] text-slate-400">Automated Recovery</div>
                     </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                     <div className="h-full w-2/3 bg-orange-400" />
                  </div>
              </motion.div>

              <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="w-48 p-4 bg-slate-900 border border-slate-800 rounded-[32px] shadow-2xl"
              >
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <Star size={14} className="text-emerald-500" />
                     </div>
                     <div>
                        <div className="text-[10px] text-white font-bold">SEO Rank: #01</div>
                        <div className="text-[8px] text-slate-500">Retail Keywords</div>
                     </div>
                  </div>
              </motion.div>
          </div>
       </div>

       <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
       `}</style>
    </div>
  );
}
