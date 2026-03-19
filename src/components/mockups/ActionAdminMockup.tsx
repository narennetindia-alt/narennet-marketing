import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  LayoutDashboard,
  LucideIcon
} from 'lucide-react';

interface MetricProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

function MiniMetric({ label, value, icon: Icon, color }: MetricProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-md">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={12} className={color} />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-tight">{label}</span>
      </div>
      <div className="text-sm font-black text-white">{value}</div>
    </div>
  );
}

export default function ActionAdminMockup() {
  return (
    <div className="w-full h-full bg-slate-900 p-6 flex flex-col gap-6 font-sans relative overflow-hidden select-none">
       {/* Abstract Header */}
       <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-brand-accent rounded-lg flex items-center justify-center">
                <LayoutDashboard size={14} className="text-white" />
             </div>
             <div className="text-xs font-black text-white tracking-tight uppercase opacity-60">Admin HQ</div>
          </div>
          <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <div className="text-[9px] font-black text-emerald-400">LIVE</div>
          </div>
       </div>

       {/* Centered Chart Visualization */}
       <div className="flex-1 bg-white/[0.03] border border-white/10 rounded-3xl p-6 relative group overflow-hidden">
          <div className="flex justify-between items-baseline mb-6">
             <div className="text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">₹12.4M</div>
             <div className="text-xs font-black text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-lg">
                <TrendingUp size={12} /> +15.2%
             </div>
          </div>
          
          <div className="flex items-end justify-between gap-2 h-24">
             {[40, 60, 45, 80, 55, 70, 90, 65, 50, 85, 100].map((h, i) => (
                <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ delay: i * 0.05, duration: 1 }}
                   className={`w-full rounded-t-lg ${i === 6 ? 'bg-brand-accent shadow-[0_0_20px_rgba(14,165,233,0.6)]' : 'bg-white/10'}`}
                />
             ))}
          </div>
       </div>

       {/* Floating Metric Overlay */}
       <div className="grid grid-cols-2 gap-4">
          <MiniMetric label="Active Leads" value="2,842" icon={Users} color="text-brand-accent" />
          <MiniMetric label="Orders/h" value="142" icon={BarChart3} color="text-white" />
       </div>

       {/* Decorative Side Glow */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </div>
  );
}
