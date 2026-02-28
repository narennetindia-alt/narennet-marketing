import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Settings as SettingsIcon,
    Save,
    Image as ImageIcon,
    Globe,
    Shield,
    Bell,
    Palette,
    Layout,
    MessageSquare
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

export default function Settings() {
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('general');
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
        setTimeout(() => setIsSaving(false), 1000);
    };

    const tabs = [
        { id: 'general', icon: Globe, label: 'General' },
        { id: 'branding', icon: Palette, label: 'Branding' },
        { id: 'seo', icon: Layout, label: 'SEO & Metadata' },
        { id: 'notifications', icon: Bell, label: 'Notifications' },
        { id: 'security', icon: Shield, label: 'Security' },
    ];

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">System Settings</h1>
                    <p className="text-brand-secondary font-light">Global configuration for your platform and brand.</p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-8 py-4 rounded-[20px] bg-brand-accent text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 disabled:opacity-50"
                >
                    {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={20} />}
                    {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Navigation Tabs */}
                <div className="lg:w-72 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === tab.id
                                ? 'bg-brand-accent text-white shadow-lg'
                                : 'text-brand-secondary hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <tab.icon size={20} />
                            <span className="font-bold text-xs uppercase tracking-widest">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-brand-card border border-brand-border rounded-[40px] p-10 card-glow">
                    {activeTab === 'general' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold mb-8">General Information</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Site Name</label>
                                    <input
                                        type="text"
                                        value={formData.site_name}
                                        onChange={(e) => setFormData({ ...formData, site_name: e.target.value })}
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Contact Email</label>
                                    <input type="email" defaultValue="narennetindia@gmail.com" className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white/50 cursor-not-allowed outline-none transition-all" disabled />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'seo' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold mb-8">Search Engine Optimization</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Default SEO Title</label>
                                    <input
                                        type="text"
                                        value={formData.seo_title}
                                        onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Meta Description</label>
                                    <textarea
                                        rows={4}
                                        value={formData.seo_description}
                                        onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all resize-none"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'branding' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold mb-8">Branding & Identity</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Logo URL</label>
                                    <input
                                        type="text"
                                        value={formData.logo}
                                        onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                        placeholder="https://example.com/logo.png"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Primary Brand Color</label>
                                        <div className="flex gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-brand-accent border border-brand-border" />
                                            <input type="text" defaultValue="#00F5FF" className="flex-grow bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white/50 cursor-not-allowed outline-none" disabled />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Secondary Brand Color</label>
                                        <div className="flex gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gray-400 border border-brand-border" />
                                            <input type="text" defaultValue="#94A3B8" className="flex-grow bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white/50 cursor-not-allowed outline-none" disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'notifications' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold mb-8">Notification Preferences</h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Email for new Leads', sub: 'Receive an instant email when someone contacts you.' },
                                    { label: 'Weekly Summary', sub: 'Get a weekly report of site performance and activity.' },
                                    { label: 'Security Alerts', sub: 'Important alerts regarding account access and changes.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-brand-border">
                                        <div>
                                            <p className="font-bold text-white mb-1">{item.label}</p>
                                            <p className="text-xs text-brand-secondary">{item.sub}</p>
                                        </div>
                                        <div className="w-12 h-6 bg-brand-accent rounded-full relative cursor-pointer">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'security' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            <h2 className="text-2xl font-bold mb-8">Security & Access</h2>
                            <div className="space-y-6">
                                <button className="w-full p-6 flex items-center justify-between rounded-3xl bg-white/[0.02] border border-brand-border hover:bg-white/5 transition-all text-left">
                                    <div>
                                        <p className="font-bold text-white mb-1">Two-Factor Authentication</p>
                                        <p className="text-xs text-brand-secondary">Add an extra layer of security to your account.</p>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Enable</span>
                                </button>
                                <button className="w-full p-6 flex items-center justify-between rounded-3xl bg-white/[0.02] border border-brand-border hover:bg-white/5 transition-all text-left">
                                    <div>
                                        <p className="font-bold text-white mb-1">Change Admin Password</p>
                                        <p className="text-xs text-brand-secondary">Update your login credentials regularly.</p>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Update</span>
                                </button>
                                <button className="w-full p-6 flex items-center justify-between rounded-3xl bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 transition-all text-left group">
                                    <div>
                                        <p className="font-bold text-red-500 mb-1">Developer Mode</p>
                                        <p className="text-xs text-red-500/60">Access advanced debugging and system tools.</p>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Disabled</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
