import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Search,
    Filter,
    Mail,
    Clock,
    MoreVertical,
    CheckCircle2,
    Trash2,
    AlertCircle,
    MessageSquare,
    ExternalLink
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface Lead {
    id: string;
    name: string;
    email: string;
    message: string;
    status: 'new' | 'contacted' | 'spam' | 'archived';
    created_at: string;
}

export default function Leads() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'new' | 'contacted'>('all');

    const fetchLeads = async () => {
        setIsLoading(true);
        let query = supabase.from('leads').select('*').order('created_at', { ascending: false });

        if (filter !== 'all') {
            query = query.eq('status', filter);
        }

        const { data, error } = await query;
        if (data) setLeads(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchLeads();
    }, [filter]);

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase.from('leads').update({ status }).eq('id', id);
        if (!error) fetchLeads();
    };

    const deleteLead = async (id: string) => {
        if (!confirm('Are you sure you want to delete this lead?')) return;
        const { error } = await supabase.from('leads').delete().eq('id', id);
        if (!error) fetchLeads();
    };

    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Leads Management</h1>
                    <p className="text-brand-secondary text-sm md:text-base font-light">Monitor and respond to potential client inquiries.</p>
                </div>

                <div className="flex items-center gap-2 md:gap-4 bg-white/5 p-1.5 md:p-2 rounded-2xl border border-brand-border overflow-x-auto no-scrollbar max-w-full">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${filter === 'all' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-brand-secondary hover:text-white'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('new')}
                        className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${filter === 'new' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-brand-secondary hover:text-white'}`}
                    >
                        New
                    </button>
                    <button
                        onClick={() => setFilter('contacted')}
                        className={`px-4 md:px-6 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${filter === 'contacted' ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' : 'text-brand-secondary hover:text-white'}`}
                    >
                        Contacted
                    </button>
                </div>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-[40px] overflow-hidden card-glow">
                <div className="p-8 border-b border-brand-border flex items-center gap-4 bg-white/[0.02]">
                    <Search size={20} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search leads..."
                        className="bg-transparent border-none focus:outline-none text-white text-sm w-full font-light"
                    />
                </div>

                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-bold">
                                <th className="px-8 py-6">Customer</th>
                                <th className="px-8 py-6">Message</th>
                                <th className="px-8 py-6">Status</th>
                                <th className="px-8 py-6">Date</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-20 text-center">
                                        <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                    </td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-8 py-20 text-center text-brand-secondary">
                                        No leads found matching your filters.
                                    </td>
                                </tr>
                            ) : leads.map((lead) => (
                                <tr key={lead.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold">
                                                {lead.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold text-white mb-1">{lead.name}</p>
                                                <p className="text-xs text-brand-secondary flex items-center gap-2">
                                                    <Mail size={12} /> {lead.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 max-w-xs">
                                        <p className="text-brand-secondary text-sm truncate group-hover:whitespace-normal group-hover:line-clamp-3 transition-all duration-300">
                                            {lead.message}
                                        </p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${lead.status === 'new' ? 'bg-brand-accent/10 text-brand-accent' :
                                            lead.status === 'contacted' ? 'bg-green-500/10 text-green-500' :
                                                'bg-gray-500/10 text-gray-500'
                                            }`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-brand-secondary text-xs">
                                        <div className="flex flex-col gap-1">
                                            <span className="flex items-center gap-2"><Clock size={12} /> {new Date(lead.created_at).toLocaleDateString()}</span>
                                            <span className="text-[10px] opacity-60">{new Date(lead.created_at).toLocaleTimeString()}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {lead.status === 'new' && (
                                                <button
                                                    onClick={() => updateStatus(lead.id, 'contacted')}
                                                    className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                                                    title="Mark as Contacted"
                                                >
                                                    <CheckCircle2 size={18} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteLead(lead.id)}
                                                className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card Layout */}
                <div className="md:hidden divide-y divide-brand-border">
                    {isLoading ? (
                        <div className="p-10 text-center">
                            <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto" />
                        </div>
                    ) : leads.length === 0 ? (
                        <div className="p-10 text-center text-brand-secondary text-sm">
                            No leads found matching your filters.
                        </div>
                    ) : leads.map((lead) => (
                        <div key={lead.id} className="p-6 space-y-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold">
                                        {lead.name[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-white truncate">{lead.name}</p>
                                        <p className="text-[10px] text-brand-secondary flex items-center gap-1 truncate">
                                            <Mail size={10} /> {lead.email}
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${lead.status === 'new' ? 'bg-brand-accent/10 text-brand-accent' :
                                    lead.status === 'contacted' ? 'bg-green-500/10 text-green-500' :
                                        'bg-gray-500/10 text-gray-500'
                                    }`}>
                                    {lead.status}
                                </span>
                            </div>
                            <p className="text-brand-secondary text-sm line-clamp-2 italic font-light">
                                "{lead.message}"
                            </p>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-[10px] text-brand-secondary flex items-center gap-1">
                                    <Clock size={10} /> {new Date(lead.created_at).toLocaleDateString()}
                                </span>
                                <div className="flex gap-2">
                                    {lead.status === 'new' && (
                                        <button
                                            onClick={() => updateStatus(lead.id, 'contacted')}
                                            className="p-2 rounded-lg bg-green-500/10 text-green-500"
                                        >
                                            <CheckCircle2 size={16} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteLead(lead.id)}
                                        className="p-2 rounded-lg bg-red-500/10 text-red-500"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
