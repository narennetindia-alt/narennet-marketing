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
    ShieldQuestion
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
            case 'editor': return <Shield size={16} className="text-gray-400" />;
            default: return <ShieldQuestion size={16} />;
        }
    };

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-white text-surface-200 uppercase tracking-tighter">Team Management</h1>
                    <p className="text-brand-secondary font-light">Manage access levels and permissions for your staff.</p>
                </div>

                <button className="px-8 py-4 rounded-[20px] bg-brand-accent text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20">
                    <UserPlus size={20} /> Invite Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    [1, 2, 3].map(i => (
                        <div key={i} className="bg-brand-card border border-brand-border rounded-[40px] p-10 animate-pulse h-64" />
                    ))
                ) : profiles.map((profile, idx) => (
                    <motion.div
                        key={profile.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-brand-card border border-brand-border rounded-[40px] p-10 card-glow relative group overflow-hidden"
                    >
                        {/* Background Icon */}
                        <Users size={120} className="absolute -right-10 -bottom-10 text-white/[0.02] transition-transform group-hover:scale-110 group-hover:-rotate-12 duration-700" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-2xl font-bold text-brand-accent">
                                    {profile.full_name?.[0] || 'U'}
                                </div>
                                <div className={`p-2 rounded-xl bg-white/5 border border-brand-border flex items-center gap-2 px-4`}>
                                    {getRoleIcon(profile.role)}
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{profile.role.replace('_', ' ')}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-1 text-white">{profile.full_name || 'Anonymous User'}</h3>
                            <p className="text-brand-secondary text-sm font-light mb-8 italic">narennet@internal.com</p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                                    <span>Joined</span>
                                    <span className="text-white">{new Date(profile.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                                    <span>Last Active</span>
                                    <span className="text-white">Today</span>
                                </div>
                            </div>

                            <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 border border-brand-border text-[10px] font-bold uppercase tracking-widest text-white hover:bg-brand-accent hover:border-brand-accent transition-all">
                                Edit Permissions
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
