import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StatsCard = ({ title, value, trend, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
        <Icon size={24} />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
        {trend}
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </motion.div>
);

export default function HospitalPreview() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="container-wide">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent mb-4 hover:gap-3 transition-all">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-gray-900 leading-tight">
              Hospital Intelligence <span className="text-brand-accent">Preview</span>
            </h1>
            <p className="text-gray-500 mt-2 text-lg">Verification page for the NarenNet HMS Content System.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">System Status</span>
              <span className="flex items-center gap-2 text-sm font-bold text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Enterprise Analytics Live
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <section className="mb-20">
          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-200 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Hospital Intelligence Command</h2>
                <p className="text-sm text-gray-500">Live data across all departments</p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-gray-100 text-orange-600 text-xs font-bold flex items-center gap-2 border border-orange-100">
                   <Clock size={14} /> Refreshing in 30s
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatsCard title="Total Revenue" value="₹42,82,410" trend="+14.2%" icon={DollarSign} color="bg-blue-500" />
              <StatsCard title="OPD Footfall" value="1,240" trend="+8.5%" icon={Users} color="bg-purple-500" />
              <StatsCard title="IPD Occupancy" value="84%" trend="+5.1%" icon={Activity} color="bg-green-500" />
              <StatsCard title="Avg. TAT (Lab)" value="42m" trend="-12.4%" icon={TrendingUp} color="bg-orange-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Revenue Chart Stand-in */}
              <div className="lg:col-span-2 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">Revenue by Department</h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { dept: 'OPD & Consultations', val: 45, color: '#3B82F6', amount: '₹19.2L' },
                    { dept: 'Pharmacy Sales', val: 32, color: '#8B5CF6', amount: '₹13.7L' },
                    { dept: 'Laboratory & Imaging', val: 18, color: '#10B981', amount: '₹7.7L' },
                    { dept: 'IPD Services', val: 5, color: '#F59E0B', amount: '₹2.1L' },
                  ].map((d) => (
                    <div key={d.dept}>
                      <div className="flex justify-between text-xs mb-2 font-bold">
                        <span className="text-gray-600">{d.dept}</span>
                        <span className="text-gray-900">{d.amount} ({d.val}%)</span>
                      </div>
                      <div className="h-3 bg-white rounded-full overflow-hidden border border-gray-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${d.val}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full rounded-full" 
                          style={{ backgroundColor: d.color }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts Column */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Recent Operational Alerts</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { msg: 'Near Expiry Alert: ICU Drug Batch #402', type: 'warning', time: '12m ago' },
                    { msg: 'OT #3 Ready for Scheduled Procedure', type: 'info', time: '18m ago' },
                    { msg: 'Billing Leakage Flagged: Ward #4', type: 'error', time: '34m ago' },
                    { msg: 'Insurance Approved: Case #9210', type: 'success', time: '1h ago' },
                  ].map((alert, i) => (
                    <div key={i} className={`flex flex-col gap-1 p-4 rounded-2xl border bg-white ${
                      alert.type === 'warning' ? 'border-amber-200' :
                      alert.type === 'error' ? 'border-red-200' :
                      'border-blue-100'
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${
                           alert.type === 'warning' ? 'text-amber-600' :
                           alert.type === 'error' ? 'text-red-600' :
                           'text-blue-600'
                        }`}>{alert.type}</span>
                        <span className="text-[10px] text-gray-400 font-medium">{alert.time}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-800 leading-tight">{alert.msg}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 rounded-xl bg-white text-gray-400 text-xs font-bold border border-gray-200 hover:text-brand-accent hover:border-brand-accent transition-all">
                  View All Activity
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Highlights Group */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: <ShieldCheck size={28} />, 
              title: "GDPR & HIPAA Ready", 
              desc: "Bank-grade encryption for patient data and hospital financials.",
              color: "text-green-500"
            },
            { 
              icon: <Zap size={28} />, 
              title: "Lightning Fast Sync", 
              desc: "Works perfectly offline and syncs automatically when reconnected.",
              color: "text-blue-500"
            },
            { 
              icon: <Activity size={28} />, 
              title: "360° Departmental View", 
              desc: "Unified ecosystem for OPD, IPD, Billing, Pharmacy, and Lab.",
              color: "text-purple-500"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center flex flex-col items-center shadow-sm">
              <div className={`mb-4 ${feature.color}`}>{feature.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className="bg-brand-deep rounded-[40px] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '36px 36px' }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">This is just the beginning.</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg relative z-10">
            I have generated 25+ unique pages of content to build NarenNet's topical authority in the hospital software market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="px-10 py-5 rounded-2xl bg-brand-accent font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Book a Full Demo
            </Link>
            <a href="https://wa.me/918438966728" className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
