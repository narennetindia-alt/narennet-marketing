import { motion } from 'motion/react';
import { 
  Users, Briefcase, CreditCard, 
  BarChart3, LayoutDashboard, Settings, 
  Zap, Smartphone, CheckCircle2,
  Package, LineChart, TrendingUp,
  Search, Bell, Signal, Battery, Clock
} from 'lucide-react';

export type AppPersona = 'owner' | 'employee' | 'sales' | 'client' | 'customer';

interface MobileAppMockupProps {
  persona: AppPersona;
  theme?: string;
  appName?: string;
}

export default function MobileAppMockup({ 
  persona, 
  theme = 'bg-brand-accent', 
  appName 
}: MobileAppMockupProps) {
  
  const getAppTitle = () => {
    if (appName) return appName;
    switch (persona) {
      case 'owner': return 'Owner Admin';
      case 'employee': return 'Staff Portal';
      case 'sales': return 'Sales Force';
      case 'client': return 'Business Client';
      case 'customer': return 'Supermarket App';
      default: return 'Business App';
    }
  };

  const Icon = () => {
    switch (persona) {
      case 'owner': return <LayoutDashboard size={20} />;
      case 'employee': return <Smartphone size={20} />;
      case 'sales': return <TrendingUp size={20} />;
      case 'client': return <Briefcase size={20} />;
      case 'customer': return <Package size={20} />;
      default: return <Smartphone size={20} />;
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-[#050505] rounded-[48px] p-2 border border-white/20 shadow-2xl overflow-hidden group/phone flex flex-col">
      {/* iPhone Frame Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-7 bg-black rounded-b-[20px] z-50 flex items-center justify-center gap-1.5 pb-1">
        <div className="w-8 h-1 bg-white/10 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-white/5" />
      </div>

      <div className="absolute top-2 left-6 right-6 z-40 flex justify-between items-center text-white/90">
         <div className="text-[10px] font-bold">9:41</div>
         <div className="flex items-center gap-1.5">
            <Signal size={10} />
            <span className="text-[10px] font-bold">5G</span>
            <Battery size={12} className="rotate-0" />
         </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 w-full bg-[#f8fafc] rounded-[40px] overflow-hidden flex flex-col relative z-20">
        
        {/* Header Section */}
        <div className={`w-full pt-12 pb-6 px-5 ${theme} text-white rounded-b-[32px] shadow-lg flex flex-col items-center justify-center shrink-0`}>
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner border border-white/10">
            <Icon />
          </div>
          <h4 className="font-bold text-sm tracking-tight mb-0.5">{getAppTitle()}</h4>
          <div className="flex items-center gap-1.5 opacity-80">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <p className="text-[10px] uppercase font-bold tracking-widest">Active System</p>
          </div>
        </div>

        {/* Dynamic App Content */}
        <div className="flex-1 w-full p-4 overflow-hidden flex flex-col gap-4">
          
          {persona === 'owner' && (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Sales today</div>
                <div className="text-2xl font-black text-slate-900 tracking-tighter">₹1,42,850.00</div>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    className="h-full bg-orange-500 rounded-full" 
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Zap size={12} className="text-orange-600" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">Real-time Traffic</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 70, 30, 90, 60, 50, 80].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 bg-orange-100 rounded-t-sm relative"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-orange-500 rounded-t-sm opacity-80" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}

          {persona === 'employee' && (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-slate-900">Task Overview</span>
                    <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">12 Active</span>
                 </div>
                 <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${i === 3 ? 'bg-blue-600' : 'border-2 border-slate-100'}`}>
                          {i === 3 && <CheckCircle2 size={12} className="text-white" />}
                        </div>
                        <div className={`flex-1 h-3 rounded ${i === 3 ? 'bg-slate-100' : 'bg-slate-50'}`} />
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-blue-600 rounded-[24px] p-5 text-white flex flex-col justify-center items-center gap-2 shadow-lg shadow-blue-500/20">
                 <Clock size={24} className="opacity-60" />
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Shift Remaining</div>
                 <div className="text-2xl font-black tabular-nums">04:12:05</div>
              </div>
            </>
          )}

          {persona === 'customer' && (
            <>
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-5 flex flex-col justify-end text-white overflow-hidden relative">
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                 <span className="text-2xl font-black mb-1">50% OFF</span>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Flash Sale Ending Soon</p>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-col">
                      <div className="flex-1 bg-slate-50 rounded-xl mb-2" />
                      <div className="h-2 w-12 bg-slate-100 rounded mb-1.5" />
                      <div className="h-1.5 w-8 bg-orange-100 rounded" />
                   </div>
                 ))}
              </div>
            </>
          )}

          {persona === 'sales' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leads Pipeline</span>
                   <TrendingUp size={16} className="text-emerald-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'High Priority', val: 75, color: 'bg-emerald-500' },
                    { label: 'Under Review', val: 45, color: 'bg-emerald-300' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-bold mb-1.5">
                         <span className="text-slate-600">{item.label}</span>
                         <span className="text-slate-900">₹{item.val}k</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.val}%` }}
                          className={`h-full ${item.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Users size={18} className="text-emerald-600" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">Lead Matcher Active</span>
                    <span className="text-[10px] text-emerald-600 font-bold">14 New Potential Deals</span>
                 </div>
              </div>
            </div>
          )}

          {persona === 'client' && (
            <div className="space-y-3">
              <div className="flex gap-2 pb-1 overflow-x-auto hide-scrollbar">
                {['Transactions', 'Quotes', 'Analytics'].map((tab, i) => (
                  <div key={tab} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap ${i === 0 ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {tab}
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                           <CreditCard size={18} className="text-slate-400" />
                        </div>
                        <div className="flex flex-col">
                           <div className="h-3 w-16 bg-slate-100 rounded mb-1.5" />
                           <div className="h-2 w-10 bg-slate-50 rounded" />
                        </div>
                     </div>
                     <div className="w-12 h-4 bg-emerald-100 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Navigation Bar */}
        <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-6 rounded-b-[40px] shrink-0">
          {[Icon, Search, Bell, Settings].map((I, i) => (
            <div key={i} className={`p-2.5 rounded-xl ${i === 0 ? `${theme.replace('bg-', 'text-')} ${theme.replace('bg-', 'bg-')}/10` : 'text-slate-300'}`}>
              {i === 0 ? <I size={20} /> : <I size={20} />}
            </div>
          ))}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/30 rounded-full z-50 pointer-events-none" />
    </div>
  );
}
