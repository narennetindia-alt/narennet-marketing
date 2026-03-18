import { motion } from 'motion/react';
import { 
  Users, Activity, ClipboardList, Pill, 
  Stethoscope, LayoutDashboard, Settings, 
  MessageSquare, Bell, Search, Plus,
  ChevronDown, TrendingUp, Clock,
  FileText, FlaskConical, Calendar
} from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
}

function MetricCard({ label, value, trend, trendUp }: MetricCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm group hover:border-blue-400/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{label}</span>
        <div className={`flex items-center gap-1 text-[10px] font-bold ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trendUp ? <TrendingUp size={10} /> : <TrendingUp size={10} className="rotate-180" />}
          {trend}
        </div>
      </div>
      <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{value}</div>
    </div>
  );
}

export default function HospitalDashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0B1521] flex flex-col font-sans select-none overflow-hidden text-white/90 rounded-3xl border border-white/10 shadow-2xl">
      {/* Hospital Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02] backdrop-blur-md relative z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Stethoscope size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm tracking-tight uppercase">City Care Cloud</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/40">
            <Search size={14} />
            <span className="text-[11px] px-2 font-medium">Search Patients / Records...</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 text-white/40 hover:text-white transition-colors relative">
              <Bell size={18} />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full border border-[#0B1521]" />
            </button>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0B1521] flex items-center justify-center overflow-hidden">
                <Users size={14} className="text-blue-400" />
              </div>
            </div>
            <ChevronDown size={14} className="text-white/40 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 border-r border-white/10 bg-white/[0.01] hidden lg:flex flex-col p-4 gap-1">
          {[
            { icon: LayoutDashboard, label: 'Dashboard', active: true },
            { icon: Calendar, label: 'Appointments' },
            { icon: ClipboardList, label: 'Medical Records' },
            { icon: Pill, label: 'Pharmacy' },
            { icon: FlaskConical, label: 'Laboratory' },
            { icon: FileText, label: 'Billing / Invoices' },
            { icon: Settings, label: 'Hospital Settings' }
          ].map((item, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${item.active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={16} />
              {item.label}
            </div>
          ))}
          
          <div className="mt-auto">
            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/10 rounded-full -translate-y-4 translate-x-4 blur-xl" />
              <p className="text-[10px] font-bold text-white mb-2 relative z-10 font-mono tracking-widest uppercase opacity-60">Occupancy</p>
              <div className="w-full h-1 bg-white/10 rounded-full mb-3 relative z-10">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '82%' }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                />
              </div>
              <p className="text-[9px] text-white/40 font-bold">164 / 200 Beds Used</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-white/[0.02] flex flex-col gap-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">Main Hospital Hub</h1>
              <p className="text-xs text-blue-400/60 flex items-center gap-2 mt-1 font-medium">
                <Activity size={12} className="animate-pulse" />
                Live Patient Flow Monitoring Active
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[11px] font-bold text-white bg-blue-500 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all">
                <Plus size={14} />
                New Registration
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard label="Today's Patients" value="184" trend="+12.2%" trendUp />
            <MetricCard label="Bed Occupancy" value="82%" trend="+2.4%" trendUp />
            <MetricCard label="Pharmacy Sales" value="₹84,230" trend="+5.4%" trendUp />
            <MetricCard label="Lab Reports" value="12 Pending" trend="-4.1%" />
          </div>

          {/* Activity / List View */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden flex-1 flex flex-col min-h-[300px] shadow-inner">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Recent Medical Events</span>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span className="text-blue-400 border-b-2 border-blue-400 pb-1 cursor-pointer">OPD</span>
                <span className="hover:text-white cursor-pointer transition-colors">IPD</span>
                <span className="hover:text-white cursor-pointer transition-colors">Pharmacy</span>
              </div>
            </div>
            
            <div className="flex flex-col divide-y divide-white/5">
              {[
                { name: 'Patient #8429', action: 'OPD Consultation Completed', time: 'Just now', value: 'Dr. Arun V.', color: 'text-emerald-400' },
                { name: 'Lab #4920', action: 'Blood Panel Ready', time: '12 mins ago', value: 'High Priority', color: 'text-rose-400' },
                { name: 'Pharmacy #103', action: 'Order Dispatched', time: '20 mins ago', value: 'Invoice #842', color: 'text-blue-400' },
                { name: 'New Admission', action: 'Emergency Ward #4', time: '45 mins ago', value: 'B-Positive', color: 'text-rose-400' },
              ].map((activity, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-xs">
                       {activity.name.includes('#') ? '#' : 'E'}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{activity.name}</p>
                      <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.05em] mt-0.5">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-bold ${activity.color}`}>{activity.value}</p>
                    <p className="text-[10px] text-white/20 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
