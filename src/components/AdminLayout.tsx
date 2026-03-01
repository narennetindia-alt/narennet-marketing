import React from 'react';
import AdminSidebar from './AdminSidebar';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Outlet } from 'react-router-dom';
import logo from '../logo.png';

export default function AdminLayout() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-brand-bg text-white overflow-hidden">
            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between px-6 py-4 bg-brand-card border-b border-brand-border sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-lg">
                        <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-white uppercase tracking-tighter text-sm">NarenNet Admin</span>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-brand-secondary hover:text-white transition-colors"
                >
                    {isSidebarOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    )}
                </button>
            </header>

            <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <main className="flex-grow relative h-[calc(100vh-64px)] md:h-screen overflow-y-auto">
                {/* Background Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
