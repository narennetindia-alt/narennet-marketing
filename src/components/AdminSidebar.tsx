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
                fixed inset-y-0 left-0 w-72 bg-brand-card border-r border-brand-border z-50 flex flex-col p-6 transition-transform duration-300 md:relative md:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center shadow-lg text-black font-bold text-xs ring-4 ring-brand-accent/5">
                        <img src="/src/logo.png" alt="NarenNet" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-bold tracking-tight text-white leading-none mb-1">NarenNet</h2>
                        <p className="text-[10px] text-brand-secondary uppercase font-bold tracking-widest leading-none">Admin Console</p>
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
                                className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${isActive
                                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20'
                                    : 'text-brand-secondary hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon size={20} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-brand-accent'} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </div>
                                <ChevronRight size={14} className={`transition-transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                            </Link>
                        );
                    })}
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-8 flex items-center gap-4 p-4 text-brand-secondary hover:text-red-500 transition-colors group border-t border-brand-border pt-8"
                >
                    <LogOut size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </aside>
        </>
    );
}
