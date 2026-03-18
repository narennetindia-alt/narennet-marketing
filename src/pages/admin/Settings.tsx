import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Settings as SettingsIcon,
    Save,
    Image as ImageIcon,
    Globe,
    Shield,
    Bell,
    Palette,
    Layout,
    MessageSquare,
    CheckCircle2,
    Lock,
    ExternalLink
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function Settings() {
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('general');
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        site_name: 'NarenNet',
        seo_title: 'NarenNet | Enterprise AI Solutions',
        seo_description: 'Building the future of business with AI and modern software.',
        logo: '',
    });

    useEffect(() => {
        const fetchSettings = async () => {
            const { data } = await supabase.from('settings').select('*').single();
            if (data) setFormData(data);
        };
        fetchSettings();
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        const { error } = await supabase.from('settings').upsert({ id: 1, ...formData });
        
        setTimeout(() => {
            setIsSaving(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 800);
    };

    const tabs = [
        { id: 'general', icon: Globe, label: 'Platform Core' },
        { id: 'branding', icon: Palette, label: 'Identity & Brand' },
        { id: 'seo', icon: Layout, label: 'Global Intelligence (SEO)' },
        { id: 'notifications', icon: Bell, label: 'Alert Protocols' },
        { id: 'security', icon: Shield, label: 'Security Vault' },
    ];

    return (
        <div className="space-y-12 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">System <span className="text-brand-accent">Configuration</span></h1>
                    <p className="text-brand-secondary text-lg font-light">Global control center for platform architecture and brand scaling.</p>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                    <AnimatePresence>
                        {showSuccess && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="hidden md:flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-black uppercase tracking-widest"
                            >
                                <CheckCircle2 size={16} /> Sync Verified
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex-grow md:flex-none px-10 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-brand-deep/30 disabled:opacity-50"
                    >
                        {isSaving ? <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={20} />}
                        {isSaving ? 'Synchronizing...' : 'Commit Changes'}
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Navigation Tabs */}
                <div className="w-full lg:w-80 flex flex-row lg:flex-col gap-3 overflow-x-auto no-scrollbar lg:overflow-visible pb-4 lg:pb-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col lg:flex-row items-center gap-4 p-6 rounded-3xl transition-all flex-shrink-0 min-w-[160px] lg:min-w-0 text-center lg:text-left ${activeTab === tab.id
                                ? 'bg-brand-deep text-white shadow-2xl shadow-brand-deep/20'
                                : 'bg-white border border-brand-border text-brand-secondary hover:bg-brand-bg hover:text-brand-primary'
                                }`}
                        >
                            <tab.icon size={24} className={activeTab === tab.id ? 'text-brand-accent' : 'opacity-40'} />
                            <div className="flex flex-col items-center lg:items-start group">
                                <span className="font-black text-[10px] uppercase tracking-[0.2em] leading-none mb-1">{tab.label}</span>
                                <span className={`text-[8px] font-bold uppercase tracking-widest opacity-40 hidden lg:block ${activeTab === tab.id ? 'text-white' : 'text-brand-secondary'}`}>Configuration Index</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-grow w-full bg-white border border-brand-border rounded-[48px] p-10 md:p-16 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <AnimatePresence mode="wait">
                        {activeTab === 'general' && (
                            <motion.div 
                                key="general"
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12 relative z-10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-brand-primary uppercase tracking-tighter">Platform <span className="text-brand-accent">Core</span></h2>
                                    <p className="text-brand-secondary text-sm font-medium">Fundamental scaling parameters for the NarenNet ecosystem.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Architectural Site Name</label>
                                        <input
                                            type="text"
                                            value={formData.site_name}
                                            onChange={(e) => setFormData({ ...formData, site_name: e.target.value })}
                                            className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-black text-lg"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Master Contact Protocol (Email)</label>
                                        <div className="relative">
                                            <input type="email" defaultValue="narennetindia@gmail.com" className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary/40 cursor-not-allowed outline-none font-bold" disabled />
                                            <Lock size={16} className="absolute right-8 top-1/2 -translate-y-1/2 text-brand-secondary opacity-20" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'seo' && (
                            <motion.div 
                                key="seo"
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12 relative z-10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-brand-primary uppercase tracking-tighter">Global <span className="text-brand-accent">Intelligence</span></h2>
                                    <p className="text-brand-secondary text-sm font-medium">Optimization metrics for global discovery and indexing.</p>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Primary Search Index Title</label>
                                        <input
                                            type="text"
                                            value={formData.seo_title}
                                            onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                                            className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-bold text-base"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Intelligence Narrative (Meta Description)</label>
                                        <textarea
                                            rows={5}
                                            value={formData.seo_description}
                                            onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                                            className="w-full bg-brand-bg border border-brand-border rounded-3xl px-8 py-6 text-brand-primary focus:border-brand-accent outline-none transition-all resize-none font-medium leading-relaxed"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'branding' && (
                            <motion.div 
                                key="branding"
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12 relative z-10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-brand-primary uppercase tracking-tighter">Brand <span className="text-brand-accent">Identity</span></h2>
                                    <p className="text-brand-secondary text-sm font-medium">Visual parameters and architectural styling assets.</p>
                                </div>

                                <div className="space-y-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Core Asset Locator (Logo URL)</label>
                                        <div className="flex gap-6 items-start">
                                            <input
                                                type="text"
                                                value={formData.logo}
                                                onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                                className="flex-grow bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-mono text-sm"
                                                placeholder="https://example.com/logo.png"
                                            />
                                            <div className="w-16 h-16 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-secondary shadow-sm">
                                                {formData.logo ? <img src={formData.logo} alt="" className="w-full h-full object-contain" /> : <ImageIcon size={24} className="opacity-20" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Primary Spectrum</label>
                                            <div className="flex items-center gap-4 bg-brand-bg p-4 rounded-2xl border border-brand-border">
                                                <div className="w-12 h-12 rounded-xl bg-brand-accent shadow-lg shadow-brand-accent/20" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Midnight Cyan</span>
                                                    <span className="text-[10px] font-mono text-brand-secondary opacity-40">#0EA5E9</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Structural Base</label>
                                            <div className="flex items-center gap-4 bg-brand-bg p-4 rounded-2xl border border-brand-border">
                                                <div className="w-12 h-12 rounded-xl bg-brand-deep shadow-lg shadow-brand-deep/20" />
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Midnight Sapphire</span>
                                                    <span className="text-[10px] font-mono text-brand-secondary opacity-40">#0B1F3A</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'notifications' && (
                            <motion.div 
                                key="notifications"
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12 relative z-10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-brand-primary uppercase tracking-tighter">Alert <span className="text-brand-accent">Protocols</span></h2>
                                    <p className="text-brand-secondary text-sm font-medium">Configuration for system communications and reporting.</p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { label: 'Lead Intelligence Sync', sub: 'Instant reporting for all new enterprise inquiries.', active: true },
                                        { label: 'Architectural Summary', sub: 'Weekly overview of platform uptime and data flow.', active: false },
                                        { label: 'Security Vault Alerts', sub: 'High-priority reporting for authentication events.', active: true },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-8 rounded-[32px] bg-brand-bg border border-brand-border hover:border-brand-accent/50 transition-all group">
                                            <div className="flex gap-6 items-center">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${item.active ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'bg-white border border-brand-border text-brand-secondary opacity-40'}`}>
                                                    <Bell size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-black text-brand-primary uppercase tracking-tight mb-1 group-hover:text-brand-accent transition-colors">{item.label}</p>
                                                    <p className="text-xs text-brand-secondary font-medium opacity-60">{item.sub}</p>
                                                </div>
                                            </div>
                                            <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-brand-accent' : 'bg-brand-bg border border-brand-border'}`}>
                                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'right-1 shadow-sm' : 'left-1 border border-brand-border'}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'security' && (
                            <motion.div 
                                key="security"
                                initial={{ opacity: 0, y: 10 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12 relative z-10"
                            >
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-brand-primary uppercase tracking-tighter">Security <span className="text-brand-accent">Vault</span></h2>
                                    <p className="text-brand-secondary text-sm font-medium">Access control and encrypted communication protocols.</p>
                                </div>

                                <div className="space-y-6">
                                    <button className="w-full p-8 flex items-center justify-between rounded-[32px] bg-brand-bg border border-brand-border hover:bg-brand-bg hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group text-left">
                                        <div className="flex gap-6 items-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-secondary group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all shadow-sm">
                                                <Shield size={24} />
                                            </div>
                                            <div>
                                                <p className="font-black text-brand-primary uppercase tracking-tight mb-1">Double-Layer Auth</p>
                                                <p className="text-xs text-brand-secondary font-medium opacity-60">Highly recommended biometric or authenticator integration.</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent flex items-center gap-2">Enable <ExternalLink size={14} /></span>
                                    </button>
                                    <button className="w-full p-8 flex items-center justify-between rounded-[32px] bg-brand-bg border border-brand-border hover:bg-brand-bg hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/5 transition-all group text-left">
                                        <div className="flex gap-6 items-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-secondary group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all shadow-sm">
                                                <Lock size={24} />
                                            </div>
                                            <div>
                                                <p className="font-black text-brand-primary uppercase tracking-tight mb-1">Credential Rotation</p>
                                                <p className="text-xs text-brand-secondary font-medium opacity-60">Refresh administrative access tokens and keys.</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary opacity-40">Initialize</span>
                                    </button>
                                    <button className="w-full p-8 flex items-center justify-between rounded-[32px] bg-red-50 border border-red-100 hover:bg-red-500 hover:border-red-500 transition-all group text-left">
                                        <div className="flex gap-6 items-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white border border-red-100 flex items-center justify-center text-red-500 group-hover:bg-white group-hover:shadow-lg transition-all shadow-sm">
                                                <SettingsIcon size={24} />
                                            </div>
                                            <div>
                                                <p className="font-black text-red-600 group-hover:text-white uppercase tracking-tight mb-1">Developer Override</p>
                                                <p className="text-xs text-red-600/60 group-hover:text-white/80 font-medium">Bypass structural constraints for direct system access.</p>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 group-hover:text-white">Standby</span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
