import { motion } from 'motion/react';
import { 
  HeartPulse, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  FileText,
  Truck,
  ShieldCheck
} from 'lucide-react';

export default function PharmaEcosystemMockup() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-sans p-4 md:p-8 overflow-y-auto custom-scrollbar">
       {/* Background Medical Pattern */}
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="grid grid-cols-8 gap-10 rotate-12">
             {Array.from({ length: 16 }).map((_, i) => (
                <HeartPulse key={i} size={40} className="text-white" />
             ))}
          </div>
       </div>

       <div className="relative z-10">
          <div className="flex justify-between items-start mb-6 md:mb-10">
             <div>
                <h4 className="text-white text-[8px] md:text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-1">Health Distribution</h4>
                <p className="text-lg md:text-2xl font-black text-white italic tracking-tighter">Pharmacy Ecosystem</p>
             </div>
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-brand-accent" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Prescription Processing Flow */}
             <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-[32px] p-4 md:p-6 backdrop-blur-xl relative group">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <FileText size={12} md:size={16} className="text-emerald-400" />
                   </div>
                   <h5 className="text-white font-bold text-[10px] md:text-sm">Prescription Engine</h5>
                </div>
                
                <div className="space-y-4">
                   {[
                     { patient: 'David R.', status: 'Verified', color: 'text-emerald-400' },
                     { patient: 'Sarah M.', status: 'Processing', color: 'text-brand-accent' },
                     { patient: 'Babu S.', status: 'Ready', color: 'text-white' }
                   ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                         <div>
                            <div className="text-xs text-white font-bold">{p.patient}</div>
                            <div className="text-[9px] text-slate-500">Manual Check Bypassed</div>
                         </div>
                         <div className={`text-[10px] font-black uppercase ${p.color}`}>{p.status}</div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Logistics & Delivery Grid */}
             <div className="space-y-6">
                <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-[32px] p-6 backdrop-blur-sm">
                   <div className="flex items-center justify-between mb-4">
                      <div className="text-[10px] text-brand-accent font-black uppercase tracking-widest">Delivery Radius</div>
                      <Truck size={14} className="text-brand-accent" />
                   </div>
                   <div className="text-2xl font-black text-white">45 Orders</div>
                   <div className="text-[10px] text-slate-400 font-bold mt-1">Direct-to-Consumer: 12km Avg.</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 backdrop-blur-sm">
                   <div className="flex items-center gap-3 mb-4">
                      <MapPin size={16} className="text-rose-400" />
                      <h5 className="text-white font-bold text-xs uppercase">Chain Distribution</h5>
                   </div>
                   <div className="flex gap-2">
                       {[0.4, 0.8, 0.5, 1, 0.6].map((h, i) => (
                          <div key={i} className="flex-1 h-12 bg-white/5 rounded-lg relative overflow-hidden">
                             <motion.div 
                               initial={{ height: 0 }}
                               animate={{ height: `${h * 100}%` }}
                               className="absolute bottom-0 w-full bg-brand-accent"
                             />
                          </div>
                       ))}
                   </div>
                </div>
             </div>
          </div>
       </div>

       <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
       `}</style>
    </div>
  );
}
