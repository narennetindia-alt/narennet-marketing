import { motion } from 'motion/react';
import { 
  BarChart3, 
  ShoppingBag, 
  Users, 
  ArrowUpRight, 
  Zap, 
  Globe,
  Database,
  CheckCircle2
} from 'lucide-react';

export default function EcosystemLegacyMockup() {
  return (
    <div className="relative w-full h-full bg-slate-950 p-4 md:p-8 overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative grid grid-cols-12 gap-4 h-full">
        {/* Main Dashboard Area (8 cols) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          {/* Header Stats */}
          <div className="grid grid-cols-3 gap-3">
             {[
               { label: 'Live Sales', value: '₹2.4L', color: 'text-emerald-400' },
               { label: 'Active Users', value: '1.2k', color: 'text-blue-400' },
               { label: 'Conversion', value: '4.8%', color: 'text-brand-accent' }
             ].map((s, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md"
               >
                 <div className="text-[10px] text-slate-400 uppercase tracking-tighter mb-1 font-bold">{s.label}</div>
                 <div className={`text-lg font-black ${s.color}`}>{s.value}</div>
               </motion.div>
             ))}
          </div>

          {/* Main Chart Card */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-sm relative group overflow-hidden">
             <div className="flex justify-between items-center mb-6">
                <div>
                   <h4 className="text-white font-bold text-sm">Revenue Ecosystem</h4>
                   <p className="text-[10px] text-slate-400">Real-time Attribution</p>
                </div>
                <div className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">+12.5%</div>
             </div>
             
             {/* Abstract Chart Bars */}
             <div className="flex items-end justify-between gap-1 h-32 mt-4">
                {[40, 70, 45, 90, 65, 80, 55, 95, 75, 40, 60, 85].map((h, i) => (
                   <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + (i * 0.05), duration: 1, ease: "easeOut" }}
                    className={`w-full rounded-t-sm ${i === 7 ? 'bg-brand-accent' : 'bg-white/10'}`}
                   />
                ))}
             </div>
             
             {/* Floating Badge */}
             <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 right-10 bg-black/60 border border-white/10 p-3 rounded-2xl backdrop-blur-xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <Zap size={14} className="text-brand-accent" />
                   </div>
                   <div>
                      <div className="text-[9px] text-slate-400 uppercase mb-0.5 font-bold">Automation Status</div>
                      <div className="text-xs text-white font-bold">100% Active</div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Sidebar Insights (4 cols) */}
        <div className="hidden lg:flex col-span-4 flex-col gap-4">
          {/* Inventory Card */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-5 backdrop-blur-sm">
             <div className="flex items-center gap-3 mb-4">
                <Database size={16} className="text-slate-400" />
                <h4 className="text-white font-bold text-xs">Inventory Sync</h4>
             </div>
             <div className="space-y-3">
                {[
                  { name: 'Store A', stock: '98%', status: 'Normal' },
                  { name: 'Warehouse', stock: '45%', status: 'Low' },
                  { name: 'Online', stock: '100%', status: 'Ready' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <div className="text-[10px] text-slate-300">{item.name}</div>
                     <div className={`text-[10px] font-bold ${item.status === 'Low' ? 'text-amber-400' : 'text-emerald-400'}`}>{item.stock}</div>
                  </div>
                ))}
             </div>
          </div>

          {/* Activity Log */}
          <div className="flex-1 bg-white/5 border border-white/10 rounded-[32px] p-5 backdrop-blur-sm overflow-hidden">
             <h4 className="text-white font-bold text-xs mb-4">Live Activity</h4>
             <div className="space-y-4">
                {[
                  { user: 'Babu S.', action: 'New Order', time: '2m ago' },
                  { user: 'Admin', action: 'Price Synced', time: '5m ago' },
                  { user: 'Bot', action: 'Cart Saved', time: '8m ago' }
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                     <div className="w-2 h-2 rounded-full bg-brand-accent mt-1" />
                     <div>
                        <div className="text-[10px] text-white font-bold">{a.action}</div>
                        <div className="text-[9px] text-slate-500">{a.user} • {a.time}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Mobile View Overlay (Mocking responsiveness in mockup) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-[-20px] right-4 w-48 aspect-[9/19] bg-slate-900 border-[6px] border-slate-800 rounded-[40px] shadow-2xl overflow-hidden hidden md:block"
        >
          <div className="h-full w-full bg-white p-4">
             <div className="flex justify-between items-center mb-6">
                <ShoppingBag size={18} className="text-brand-primary" />
                <div className="w-6 h-6 rounded-full bg-slate-100" />
             </div>
             <div className="space-y-4">
                <div className="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center">
                   <Globe size={40} className="text-slate-200" />
                </div>
                <div className="space-y-2">
                   <div className="h-4 w-3/4 bg-slate-100 rounded-md" />
                   <div className="h-4 w-1/2 bg-slate-100 rounded-md" />
                </div>
                <div className="h-10 w-full bg-brand-accent rounded-xl flex items-center justify-center">
                   <CheckCircle2 size={16} className="text-white" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
