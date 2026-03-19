import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  CreditCard,
  Target,
  BarChart3,
  BadgeCheck
} from 'lucide-react';

export default function BrandGrowthMockup() {
  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden font-sans p-4 md:p-8 overflow-y-auto custom-scrollbar">
       {/* Background Stats Pattern */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-6 gap-20">
             {Array.from({ length: 12 }).map((_, i) => (
                <BarChart3 key={i} size={60} className="text-slate-900" />
             ))}
          </div>
       </div>

       <div className="relative z-10 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6 md:mb-10">
             <div>
                <h4 className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-0.5 md:mb-1">D2C Growth</h4>
                <p className="text-lg md:text-2xl font-black text-slate-900 tracking-tighter">Premium Analytics</p>
             </div>
             <div className="px-3 md:px-4 py-1.5 md:py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-xl md:rounded-2xl flex items-center gap-1.5 md:gap-2">
                <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent" />
                <span className="text-[9px] md:text-[11px] font-black text-brand-accent uppercase md:normal-case">LTV Goal</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
             <div className="space-y-6">
                {/* Retention Card */}
                <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[32px] p-4 md:p-6 shadow-xl shadow-slate-200/50">
                   <div className="flex items-center justify-between mb-2 md:mb-4">
                      <div className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase">Retention</div>
                      <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-accent" />
                   </div>
                   <div className="text-xl md:text-3xl font-black text-slate-900">72.4%</div>
                   <div className="flex items-center gap-1 md:gap-2 mt-2">
                       <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 text-emerald-500" />
                       <span className="text-[9px] md:text-[11px] font-bold text-emerald-500">+18% Growth</span>
                   </div>
                </div>

                {/* AOV Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-6 shadow-[0_20px_40px_rgba(11,31,58,0.1)]">
                   <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] text-slate-500 font-black uppercase">Avg. Order Value</div>
                      <CreditCard size={16} className="text-white" />
                   </div>
                   <div className="text-3xl font-black text-white">₹4,850</div>
                   <p className="text-[9px] text-slate-500 mt-2 font-bold uppercase tracking-widest">Optimized Checkout Active</p>
                </div>
             </div>

             {/* Loyalty Tier List */}
             <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-xl shadow-slate-200/50">
                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Loyalty Tiers Live</h5>
                <div className="space-y-5">
                   {[
                     { name: 'Elite Member', count: 1204, icon: <BadgeCheck className="text-amber-500" /> },
                     { name: 'Pro Retailer', count: 8503, icon: <ShoppingBag className="text-brand-accent" /> }
                   ].map((t, i) => (
                      <div key={i} className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            {t.icon}
                            <div className="text-xs text-slate-900 font-bold">{t.name}</div>
                         </div>
                         <div className="text-[11px] font-black text-slate-400">{t.count} Users</div>
                      </div>
                   ))}
                </div>
                <div className="mt-10 h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    className="h-full bg-brand-accent" 
                   />
                </div>
             </div>
          </div>
       </div>

       <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 10px; }
       `}</style>
    </div>
  );
}
