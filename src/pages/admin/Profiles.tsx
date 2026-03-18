import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Users,
    Shield,
    Mail,
    Clock,
    Search,
    UserPlus,
    ShieldAlert,
    ShieldCheck,
    ShieldQuestion,
    ArrowRight
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface Profile {
    id: string;
    full_name: string;
    role: 'super_admin' | 'admin' | 'editor';
    created_at: string;
}

export default function Profiles() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProfiles = async () => {
        setIsLoading(true);
        const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
        if (data) setProfiles(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    const getRoleIcon = (role: string) => {
        switch (role) {
            case 'super_admin': return <ShieldAlert size={16} className="text-red-500" />;
            case 'admin': return <ShieldCheck size={16} className="text-brand-accent" />;
            case 'editor': return <Shield size={16} className="text-brand-secondary" />;
            default: return <ShieldQuestion size={16} />;
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">Team <span className="text-brand-accent">Intelligence</span></h1>
                    <p className="text-brand-secondary text-lg font-light">Manage access levels and permissions for your staff.</p>
                </div>

                <button className="w-full md:w-auto px-8 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-deep/20">
                    <UserPlus size={20} /> Invite Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {isLoading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-white border border-brand-border rounded-[48px] p-12 animate-pulse h-80 shadow-sm" />
                    ))
                ) : profiles.map((profile, idx) => (
                    <motion.div
                        key={profile.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-white border border-brand-border rounded-[48px] p-12 relative group overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-deep/5 transition-all"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bg rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-brand-accent/5 transition-colors" />
                        
                        <Users size={120} className="absolute -right-12 -bottom-12 text-brand-bg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-10">
                                <div className="w-20 h-20 rounded-3xl bg-brand-deep text-white flex items-center justify-center text-3xl font-black shadow-xl group-hover:bg-brand-accent transition-colors">
                                    {profile.full_name?.[0] || 'U'}
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="px-4 py-1.5 rounded-full bg-brand-bg border border-brand-border flex items-center gap-2 mb-2">
                                        {getRoleIcon(profile.role)}
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">{profile.role.replace('_', ' ')}</span>
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-secondary opacity-40">Classification</span>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-black mb-1 text-brand-primary uppercase tracking-tight leading-none group-hover:text-brand-accent transition-colors">{profile.full_name || 'Anonymous User'}</h3>
                                <div className="flex items-center gap-2 text-brand-secondary font-bold text-xs uppercase tracking-widest opacity-40">
                                    <Mail size={12} /> narennet@internal.com
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 mt-auto bg-brand-bg/50 p-6 rounded-3xl border border-brand-border/50">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary opacity-40">Deployment</span>
                                    <span className="text-[10px] font-black text-brand-primary uppercase">{new Date(profile.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary opacity-40">Last Activity</span>
                                    <span className="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Active Now
                                    </span>
                                </div>
                            </div>

                            <button className="w-full py-5 rounded-2xl bg-white border border-brand-border text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all shadow-sm group/btn flex items-center justify-center gap-3">
                                Admin Access <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
