import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Users, Briefcase, 
  BarChart3, LayoutDashboard, Settings, 
  Zap, Smartphone, CheckCircle2,
  Package, LineChart, TrendingUp,
  Search, Bell, Signal, Battery, Clock,
  ChevronRight, Stethoscope, Activity, FileText, Heart,
  Calendar, CreditCard
} from 'lucide-react';
import drRajesh from '../../assets/dr-rajesh.png';

export type AppPersona = 'owner' | 'employee' | 'sales' | 'client' | 'customer' | 'hospital' | 'patient';

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
  const [ticker, setTicker] = useState(0);
  
  // Simulation loop for animations
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getAppTitle = () => {
    if (appName) return appName;
    switch (persona) {
      case 'owner': return 'Owner Admin';
      case 'employee': return 'Staff Portal';
      case 'sales': return 'Sales Force';
      case 'client': return 'Business Client';
      case 'customer': return 'Supermarket App';
      case 'hospital': return 'HealthCare Portal';
      case 'patient': return 'Patient Care';
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
      case 'hospital': return <Stethoscope size={20} />;
      case 'patient': return <Heart size={20} />;
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
          <motion.h4 
            key={persona}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-sm tracking-tight mb-0.5"
          >
            {getAppTitle()}
          </motion.h4>
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
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-900">₹</span>
                  <motion.div 
                    key={ticker % 5}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-black text-slate-900 tracking-tighter"
                  >
                    {(142850 + (ticker % 5) * 450).toLocaleString()}
                  </motion.div>
                </div>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${75 + (ticker % 4) * 5}%` }}
                    className="h-full bg-orange-500 rounded-full" 
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex-1 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-lg bg-orange-100 flex items-center justify-center">
                      <Zap size={12} className="text-orange-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900">Store Traffic</span>
                  </div>
                  <span className="text-[10px] font-bold text-orange-600">Live</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 70, 30, 90, 60, 50, 80].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 rounded-t-sm relative"
                      animate={{ 
                        height: ticker % 2 === 0 ? `${h}%` : `${Math.min(100, h + 15)}%`,
                        backgroundColor: i === (ticker % 7) ? '#f97316' : '#ffedd5'
                      }}
                    >
                      {i === (ticker % 7) && (
                        <motion.div 
                          layoutId="active-bar"
                          className="absolute inset-0 bg-orange-500 rounded-t-sm" 
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}

          {persona === 'employee' && (
            <>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex-1">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-slate-900">Active Tasks</span>
                    <motion.span 
                      key={ticker % 3}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold"
                    >
                      {12 - (ticker % 3)} Left
                    </motion.span>
                 </div>
                 <div className="space-y-4">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <motion.div 
                          animate={{ 
                            backgroundColor: (i <= ticker % 3) ? '#2563eb' : '#fff',
                            borderColor: (i <= ticker % 3) ? '#2563eb' : '#e2e8f0'
                          }}
                          className="w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0"
                        >
                          <AnimatePresence>
                            {(i <= ticker % 3) && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                              >
                                <CheckCircle2 size={14} className="text-white" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        <div className="flex-1 space-y-2">
                           <motion.div 
                              animate={{ opacity: (i <= ticker % 3) ? 0.4 : 1 }}
                              className="h-3 bg-slate-100 rounded w-3/4" 
                           />
                           <motion.div 
                              animate={{ opacity: (i <= ticker % 3) ? 0.4 : 1 }}
                              className="h-2 bg-slate-50 rounded w-1/2" 
                           />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-blue-600 rounded-[24px] p-5 text-white flex flex-col justify-center items-center gap-2 shadow-lg shadow-blue-500/20">
                 <Clock size={24} className="opacity-60" />
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Shift Remaining</div>
                 <div className="text-2xl font-black tabular-nums">
                   04:12:<motion.span 
                     key={ticker}
                     animate={{ opacity: [1, 0.5, 1] }}
                   >
                     {(60 - (ticker % 60)).toString().padStart(2, '0')}
                   </motion.span>
                 </div>
              </div>
            </>
          )}

          {persona === 'customer' && (
            <>
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-5 flex flex-col justify-end text-white overflow-hidden relative">
                 <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full blur-2xl" 
                 />
                 <motion.span 
                   animate={{ y: [0, -2, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="text-2xl font-black mb-1"
                 >
                   50% OFF
                 </motion.span>
                 <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Flash Sale Ending Soon</p>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1 overflow-hidden">
                 {[1, 2, 3, 4].map(i => (
                   <motion.div 
                     key={i} 
                     whileHover={{ scale: 1.05 }}
                     className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-col"
                   >
                      <div className="flex-1 bg-slate-50 rounded-xl mb-2 relative overflow-hidden">
                        {i === 1 && (
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        )}
                      </div>
                      <div className="h-2 w-12 bg-slate-100 rounded mb-1.5" />
                      <div className="h-1.5 w-8 bg-orange-100 rounded" />
                   </motion.div>
                 ))}
              </div>
            </>
          )}

          {persona === 'sales' && (
            <div className="space-y-4 flex-1 flex flex-col">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leads Pipeline</span>
                   <TrendingUp size={16} className="text-emerald-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Hot Leads', val: 75, color: 'bg-emerald-500' },
                    { label: 'Closing', val: 45, color: 'bg-emerald-300' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-bold mb-1.5">
                         <span className="text-slate-600">{item.label}</span>
                         <span className="text-slate-900">₹{item.val + (ticker % 5)}k</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: `${item.val + (ticker % 10)}%` }}
                          className={`h-full ${item.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Feed</p>
                <div className="space-y-2 flex-1 overflow-hidden relative">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={ticker % 4}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Users size={14} className="text-emerald-600" />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-slate-900 truncate">New Lead: John D.</span>
                        <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Assigned 2m ago</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      key={(ticker + 1) % 4}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 0.6, x: 0 }}
                      className="bg-white border border-slate-100 rounded-xl p-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <Users size={14} className="text-slate-400" />
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-slate-400 truncate">Lead: Sarah W.</span>
                        <span className="text-[9px] text-slate-300 font-bold">In Progress</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}

          {persona === 'hospital' && (
            <div className="space-y-3 flex-1 flex flex-col pt-2">
              <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-accent/20 bg-slate-50">
                  <img src={drRajesh} alt="Dr. Rajesh Kumar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Dr. Rajesh Kumar</div>
                  <div className="text-[9px] text-slate-400 font-medium">Chief Medical Officer</div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-[9px] font-bold text-emerald-600">On Duty</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Users size={12} className="text-blue-600" />
                    <span className="text-[10px] font-bold text-blue-900">Patients</span>
                  </div>
                  <div className="text-lg font-black text-blue-900">42</div>
                  <div className="text-[8px] text-blue-600 font-bold uppercase tracking-wider mt-0.5">+5 new today</div>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Activity size={12} className="text-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-900">OPD Status</span>
                  </div>
                  <div className="text-lg font-black text-emerald-900">Live</div>
                  <div className="text-[8px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5">Token #184</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3 border border-slate-100 flex-1 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recent Records</span>
                  <FileText size={12} className="text-slate-400" />
                </div>
                <div className="space-y-2 overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={ticker % 4}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-800">MRN #4829</span>
                        <span className="text-[9px] text-slate-500">Blood Test Report</span>
                      </div>
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-100/50 px-1.5 py-0.5 rounded">View</span>
                    </motion.div>
                    <motion.div 
                      key={(ticker + 1) % 4}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-2.5 rounded-lg bg-white border border-slate-50 flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-800">MRN #4830</span>
                        <span className="text-[9px] text-slate-500">OPD Consultation</span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100/50 px-1.5 py-0.5 rounded italic">Completed</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}

          {persona === 'client' && (
            <div className="space-y-3 flex-1 flex flex-col">
              <div className="flex gap-2 pb-1 overflow-x-auto hide-scrollbar">
                {['Transactions', 'Quotes', 'Support'].map((tab, i) => (
                  <motion.div 
                    key={tab} 
                    animate={{ 
                      backgroundColor: i === (ticker % 3) ? '#7c3aed' : '#f1f5f9',
                      color: i === (ticker % 3) ? '#fff' : '#64748b'
                    }}
                    className="px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap cursor-pointer"
                  >
                    {tab}
                  </motion.div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {[0, 1, 2, 3].map(i => {
                    const itemTicker = (ticker + i) % 8;
                    return (
                      <motion.div 
                        key={itemTicker}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white p-3 rounded-[20px] border border-slate-100 shadow-sm flex items-center justify-between"
                      >
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                               <CreditCard size={18} className="text-slate-400" />
                            </div>
                            <div className="flex flex-col">
                               <div className="h-3 w-20 bg-slate-100 rounded mb-1.5" />
                               <div className="h-2 w-12 bg-slate-50 rounded" />
                            </div>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                            <div className="text-[10px] font-black tabular-nums">₹{(450 + itemTicker * 120).toLocaleString()}</div>
                            <div className="w-8 h-2 bg-emerald-100 rounded-full" />
                         </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          )}

          {persona === 'patient' && (
            <div className="space-y-4 flex-1 flex flex-col pt-2 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Good Morning,</span>
                  <span className="text-sm font-black text-slate-900">Naren Kumar</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                   <Users size={18} className="text-blue-600" />
                </div>
              </div>

              <div className="bg-emerald-500 rounded-2xl p-4 text-white shadow-lg shadow-emerald-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1 opacity-80">
                    <Clock size={12} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Next Medication</span>
                  </div>
                  <h3 className="text-lg font-bold">Metformin 500mg</h3>
                  <p className="text-[10px] opacity-90 mt-1">Take after lunch • 1:30 PM</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-white border border-slate-100 rounded-[20px] p-3 shadow-sm hover:border-brand-accent/30 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                       <Calendar size={18} className="text-orange-500" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 block">Book Appointment</span>
                 </div>
                 <div className="bg-white border border-slate-100 rounded-[20px] p-3 shadow-sm hover:border-brand-accent/30 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                       <FileText size={18} className="text-blue-500" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 block">Lab Reports</span>
                 </div>
              </div>

              <div className="mt-auto bg-slate-900 rounded-2xl p-4 text-white border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-rose-400" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Health Vitals</span>
                  </div>
                  <TrendingUp size={12} className="text-emerald-400" />
                </div>
                <div className="text-xl font-bold flex items-baseline gap-1">
                  72 <span className="text-[10px] text-white/40 font-medium">BPM</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                   <motion.div 
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]"
                   />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Navigation Bar */}
        <div className="mt-auto h-16 bg-white border-t border-slate-100 flex items-center justify-around px-6 rounded-b-[40px] shrink-0">
          {[Icon, Search, Bell, Settings].map((I, i) => (
            <motion.div 
              key={i} 
              animate={{ 
                color: i === (ticker % 4) ? '#252528' : '#e2e8f0',
                scale: i === (ticker % 4) ? 1.1 : 1
              }}
              className={`p-2.5 rounded-xl ${i === 0 ? `${theme.replace('bg-', 'text-')} ${theme.replace('bg-', 'bg-')}/10` : ''}`}
            >
              <I size={20} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/30 rounded-full z-50 pointer-events-none" />
    </div>
  );
}
