import { motion } from 'motion/react';
import { 
  BarChart3, 
  ShoppingBag, 
  Zap, 
  Database,
  ArrowRight,
  TrendingUp,
  Package
} from 'lucide-react';

export default function RetailSyncMockup() {
  return (
    <div className="relative w-full h-full bg-slate-900 overflow-hidden font-sans p-4 md:p-6 overflow-y-auto custom-scrollbar">
       {/* Top Revenue Header */}
       <div className="flex justify-between items-center mb-6">
          <div>
             <h4 className="text-white text-[8px] md:text-xs font-black uppercase tracking-widest opacity-40">Retail Sync Engine</h4>
             <p className="text-sm md:text-lg font-black text-white">Supermarket #04 Live</p>
          </div>
          <div className="flex gap-2">
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black rounded-lg">LIVE SYNC</div>
          </div>
       </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
           {/* Main Inventory Controller */}
           <div className="col-span-12 lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-brand-accent/20 flex items-center justify-center">
                   <Package size={20} className="text-brand-accent" />
                </div>
                <div>
                   <div className="text-white font-black text-sm">Inventory Synced</div>
                   <p className="text-slate-400 text-[10px]">99,102 SKUs across 4 branches</p>
                </div>
             </div>
             
             <div className="space-y-4">
                {[
                  { name: 'Fresh Produce', pos: 120, web: 118, status: 'Synced' },
                  { name: 'Dairy Section', pos: 85, web: 85, status: 'Perfect' },
                  { name: 'Groceries', pos: 450, web: 442, status: 'Adjusting' }
                ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 lg:hover:border-brand-accent/30 transition-colors">
                      <div className="text-[11px] text-white font-bold">{item.name}</div>
                      <div className="flex gap-4 items-center">
                         <div className="text-center">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">POS</div>
                            <div className="text-xs text-white font-black">{item.pos}</div>
                         </div>
                         <ArrowRight size={10} className="text-brand-accent" />
                         <div className="text-center">
                            <div className="text-[9px] text-slate-500 font-bold uppercase">Web</div>
                            <div className="text-xs text-brand-accent font-black">{item.web}</div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Real-time Order Stream */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
             <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-3xl p-6 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/20 blur-[50px] rounded-full" />
                <div className="relative">
                   <div className="text-[10px] text-brand-accent font-black uppercase mb-1">Total Revenue (24h)</div>
                   <div className="text-2xl font-black text-white">₹1,42,850</div>
                   <div className="flex items-center gap-2 mt-2">
                       <TrendingUp size={14} className="text-emerald-400" />
                       <span className="text-[11px] font-bold text-emerald-400">+22.4%</span>
                   </div>
                </div>
             </div>

             <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h5 className="text-white font-black text-[10px] uppercase tracking-widest mb-4">Latest Store Activity</h5>
                <div className="space-y-4">
                   {[
                     { user: 'Senthil K.', action: 'Order #4010 Paid', time: '1m ago' },
                     { user: 'Admin', action: 'Restock Alert', time: '3m ago' }
                   ].map((a, i) => (
                      <div key={i} className="flex gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5" />
                         <div>
                            <div className="text-[10px] text-white font-bold">{a.action}</div>
                            <div className="text-[9px] text-slate-500">{a.user} • {a.time}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>

       {/* Floating Mobile POS Mockup */}
       <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-32 aspect-[9/19] bg-slate-900 border-[4px] border-slate-800 rounded-[32px] shadow-2xl overflow-hidden hidden lg:block opacity-40 group-hover:opacity-100 transition-opacity"
       >
          <div className="p-3">
             <div className="h-1 w-8 bg-slate-800 rounded-full mx-auto mb-4" />
             <div className="space-y-2">
                <div className="h-4 w-full bg-white/10 rounded-lg" />
                <div className="h-20 w-full bg-brand-accent/20 rounded-xl" />
                <div className="h-4 w-2/3 bg-white/10 rounded-lg" />
             </div>
          </div>
       </motion.div>

       <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
       `}</style>
    </div>
  );
}
