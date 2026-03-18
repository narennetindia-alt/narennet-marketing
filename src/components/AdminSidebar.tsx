import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    FileText,
    Settings,
    Users,
    LogOut,
    ChevronRight,
    ShieldCheck,
    MessageSquare,
    Briefcase,
    HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabaseClient';
import logo from '../logo.png';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: FileText, label: 'Blogs', path: '/admin/blogs' },
    { icon: Briefcase, label: 'Services', path: '/admin/services' },
    { icon: MessageSquare, label: 'Leads', path: '/admin/leads' },
    { icon: HelpCircle, label: 'FAQs', path: '/admin/faqs' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export default function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    return (
        <>
            {/* Backdrop for mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            <aside className={`
                fixed inset-y-0 left-0 w-80 bg-brand-deep border-r border-white/5 z-50 flex flex-col p-8 transition-transform duration-500 md:relative md:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex items-center gap-4 mb-16 px-2">
                    <div className="w-12 h-12 overflow-hidden rounded-2xl bg-white flex items-center justify-center shadow-2xl ring-4 ring-white/5 group hover:rotate-3 transition-transform">
                        <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-black tracking-tighter text-white leading-none mb-1.5 text-xl uppercase">NarenNet</h2>
                        <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none">Admin Console</p>
                    </div>
                </div>

                <nav className="flex-grow space-y-2 overflow-y-auto custom-scrollbar">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between p-4 px-5 rounded-2xl transition-all group ${isActive
                                    ? 'bg-brand-accent text-white shadow-2xl shadow-brand-accent/30 scale-[1.02]'
                                    : 'text-white/40 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={22} className={isActive ? 'text-white' : 'text-white/20 group-hover:text-brand-accent transition-colors'} />
                                    <span className={`text-sm tracking-tight ${isActive ? 'font-black' : 'font-medium'}`}>{item.label}</span>
                                </div>
                                <ChevronRight size={16} className={`transition-all duration-300 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 p-4 px-5 rounded-2xl text-white/40 hover:bg-red-500/10 hover:text-red-400 transition-all group"
                    >
                        <LogOut size={22} className="group-hover:rotate-12 transition-transform opacity-30 group-hover:opacity-100" />
                        <span className="font-black text-sm tracking-widest uppercase">Logout</span>
                    </button>
                    
                    <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 relative z-10">System Status</h4>
                        <div className="flex items-center gap-2 relative z-10">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-black text-white/80">All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
