import { motion } from 'motion/react';
import { 
  Users, Database, Briefcase, CreditCard, 
  BarChart3, LayoutDashboard, Settings, 
  MessageSquare, Bell, Search, Plus,
  ChevronDown, TrendingUp, TrendingDown, Clock,
  Globe, Shield, Zap
} from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
}

function MetricCard({ label, value, trend, trendUp }: MetricCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm group hover:border-brand-accent/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{label}</span>
        <div className={`flex items-center gap-1 text-[10px] font-bold ${trendUp ? 'text-emerald-400' : 'text-rose-400'}`}>
          {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {trend}
        </div>
      </div>
      <div className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">{value}</div>
    </div>
  );
}

export default function DashboardMockup() {
  return (
    <div className="w-full h-full bg-brand-deep flex flex-col font-sans select-none overflow-hidden text-white/90">
      {/* SaaS Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02] backdrop-blur-md relative z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg shadow-brand-accent/20">
              <LayoutDashboard size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm tracking-tight">NarenNet Cloud</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/40">
            <Search size={14} />
            <span className="text-[11px] px-2 font-medium">Search ecosystem...</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/10 font-mono">⌘K</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 text-white/40 hover:text-white transition-colors relative">
              <Bell size={18} />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-accent rounded-full border border-brand-deep" />
            </button>
            <button className="p-2 text-white/40 hover:text-white transition-colors">
              <MessageSquare size={18} />
            </button>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-accent to-blue-400 p-[1px]">
              <div className="w-full h-full rounded-full bg-brand-deep flex items-center justify-center overflow-hidden">
                <Users size={14} className="text-brand-accent" />
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
            { icon: LayoutDashboard, label: 'Overview', active: true },
            { icon: Users, label: 'CRM / Leads' },
            { icon: Database, label: 'ERP / Inventory' },
            { icon: Briefcase, label: 'HR Management' },
            { icon: CreditCard, label: 'Billing / Invoices' },
            { icon: BarChart3, label: 'AI Analytics' },
            { icon: Settings, label: 'Settings' }
          ].map((item, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${item.active ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={16} />
              {item.label}
            </div>
          ))}
          
          <div className="mt-auto">
            <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-12 h-12 bg-brand-accent/10 rounded-full -translate-y-4 translate-x-4 blur-xl" />
              <p className="text-[10px] font-bold text-white mb-2 relative z-10 font-mono tracking-widest uppercase opacity-60">Usage</p>
              <div className="w-full h-1 bg-white/10 rounded-full mb-3 relative z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-brand-accent rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                />
              </div>
              <button className="w-full py-1.5 text-[10px] font-bold text-white bg-brand-accent rounded-lg shadow-lg shadow-brand-accent/20 hover:brightness-110 transition-all">Upgrade Cloud</button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-white/[0.02] flex flex-col gap-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">Enterprise Ecosystem</h1>
              <p className="text-xs text-brand-accent/60 flex items-center gap-2 mt-1 font-medium">
                <Clock size={12} className="animate-pulse" />
                Real-time synchronization active across 5 branches
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[11px] font-bold text-white border border-white/10 rounded-xl hover:bg-white/5 transition-colors">Export .CSV</button>
              <button className="px-4 py-2 text-[11px] font-bold text-white bg-brand-accent rounded-xl flex items-center gap-2 shadow-lg shadow-brand-accent/20 hover:brightness-110 transition-all">
                <Plus size={14} />
                New Entity
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard label="Total Revenue" value="₹12.4M" trend="+15.2%" trendUp />
            <MetricCard label="Active Leads" value="2,842" trend="+8.4%" trendUp />
            <MetricCard label="Inventory Stock" value="84,200" trend="-2.1%" />
            <MetricCard label="HR Attendance" value="98.5%" trend="+0.5%" trendUp />
          </div>

          {/* Table / List View */}
          <div className="bg-white/[0.03] border border-white/10 rounded-[24px] overflow-hidden flex-1 flex flex-col min-h-[300px] shadow-inner">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Live Activity Log</span>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span className="text-brand-accent border-b-2 border-brand-accent pb-1 cursor-pointer">CRM</span>
                <span className="hover:text-white cursor-pointer transition-colors">ERP</span>
                <span className="hover:text-white cursor-pointer transition-colors">HR</span>
              </div>
            </div>
            
            <div className="flex flex-col divide-y divide-white/5">
              {[
                { name: 'Karthik Sales', action: 'New Deal Managed', time: '2 mins ago', value: '+₹45,000', color: 'text-emerald-400', status: 'billing' },
                { name: 'Inventory Sync', action: 'Barcode Batch Updated', time: '14 mins ago', value: '450 Units', color: 'text-brand-accent', status: 'inventory' },
                { name: 'Staff Attendance', action: 'Branch #4 Check-in', time: '25 mins ago', value: '54 Employees', color: 'text-white/60', status: 'hr' },
                { name: 'WhatsApp Bot', action: 'Customer Query Resolved', time: '42 mins ago', value: '1,244 Sent', color: 'text-brand-accent', status: 'crm' },
              ].map((activity, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-accent text-xs group-hover:bg-brand-accent/20 group-hover:border-brand-accent/40 transition-all">
                       {activity.name.charAt(0)}
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
