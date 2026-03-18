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
    ExternalLink,
    ArrowRight
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
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">Leads <span className="text-brand-accent">Intelligence</span></h1>
                    <p className="text-brand-secondary text-lg font-light">Monitor and respond to potential client inquiries.</p>
                </div>

                <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-brand-border shadow-sm overflow-x-auto no-scrollbar max-w-full">
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === 'all' ? 'bg-brand-deep text-white shadow-xl shadow-brand-deep/20' : 'text-brand-secondary hover:bg-brand-bg'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('new')}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === 'new' ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/20' : 'text-brand-secondary hover:bg-brand-bg'}`}
                    >
                        New
                    </button>
                    <button
                        onClick={() => setFilter('contacted')}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filter === 'contacted' ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/20' : 'text-brand-secondary hover:bg-brand-bg'}`}
                    >
                        Contacted
                    </button>
                </div>
            </div>

            <div className="bg-white border border-brand-border rounded-[48px] overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 border-b border-brand-border flex items-center gap-6 bg-brand-bg/50">
                    <Search size={22} className="text-brand-secondary/40" />
                    <input
                        type="text"
                        placeholder="Search lead inquiries..."
                        className="bg-transparent border-none focus:outline-none text-brand-primary text-base w-full font-bold uppercase tracking-tight placeholder:text-brand-secondary/20"
                    />
                </div>

                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.3em] text-brand-secondary font-black bg-brand-bg/30">
                                <th className="px-10 py-8">Customer</th>
                                <th className="px-10 py-8">Inquiry Detail</th>
                                <th className="px-10 py-8">Status</th>
                                <th className="px-10 py-8">Date Arrival</th>
                                <th className="px-10 py-8 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center">
                                        <div className="w-10 h-10 border-4 border-brand-accent/10 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                    </td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-10 py-32 text-center text-brand-secondary font-light italic text-lg">
                                        No leads identified matching your filters.
                                    </td>
                                </tr>
                            ) : leads.map((lead) => (
                                <tr key={lead.id} className="group hover:bg-brand-bg transition-colors">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 rounded-2xl bg-brand-deep text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:bg-brand-accent transition-colors">
                                                {lead.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-black text-brand-primary mb-1 uppercase tracking-tight text-lg">{lead.name}</p>
                                                <p className="text-[10px] text-brand-secondary flex items-center gap-2 font-bold uppercase tracking-widest opacity-40">
                                                    <Mail size={12} /> {lead.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 max-w-sm">
                                        <p className="text-brand-secondary text-sm font-medium leading-relaxed group-hover:text-brand-primary transition-colors">
                                            {lead.message}
                                        </p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border ${lead.status === 'new' ? 'bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20' :
                                            lead.status === 'contacted' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                                                'bg-brand-bg border-brand-border text-brand-secondary'
                                            }`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-brand-secondary text-[10px] font-black uppercase tracking-widest opacity-40">
                                        <div className="flex flex-col gap-1">
                                            <span className="flex items-center gap-2"><Clock size={12} /> {new Date(lead.created_at).toLocaleDateString()}</span>
                                            <span>{new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                            {lead.status === 'new' && (
                                                <button
                                                    onClick={() => updateStatus(lead.id, 'contacted')}
                                                    className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-primary hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-sm"
                                                    title="Mark as Contacted"
                                                >
                                                    <CheckCircle2 size={18} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteLead(lead.id)}
                                                className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm"
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
                        <div className="p-16 text-center">
                            <div className="w-8 h-8 border-4 border-brand-accent/10 border-t-brand-accent rounded-full animate-spin mx-auto" />
                        </div>
                    ) : leads.length === 0 ? (
                        <div className="p-16 text-center text-brand-secondary text-sm font-light italic">
                            No leads matching your parameters.
                        </div>
                    ) : leads.map((lead) => (
                        <div key={lead.id} className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-deep text-white flex items-center justify-center font-black shadow-lg">
                                        {lead.name[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-black text-brand-primary uppercase tracking-tight truncate">{lead.name}</p>
                                        <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest opacity-40 truncate">
                                            {lead.email}
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${lead.status === 'new' ? 'bg-brand-accent text-white border-brand-accent' :
                                    lead.status === 'contacted' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                                        'bg-brand-bg border-brand-border text-brand-secondary'
                                    }`}>
                                    {lead.status}
                                </span>
                            </div>
                            <p className="text-brand-secondary text-base leading-relaxed font-medium italic">
                                "{lead.message}"
                            </p>
                            <div className="flex justify-between items-center pt-4 border-t border-brand-bg">
                                <span className="text-[10px] text-brand-secondary font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
                                    <Clock size={12} /> {new Date(lead.created_at).toLocaleDateString()}
                                </span>
                                <div className="flex gap-3">
                                    {lead.status === 'new' && (
                                        <button
                                            onClick={() => updateStatus(lead.id, 'contacted')}
                                            className="p-3 rounded-xl bg-brand-bg border border-brand-border text-emerald-600"
                                        >
                                            <CheckCircle2 size={18} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteLead(lead.id)}
                                        className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-500"
                                    >
                                        <Trash2 size={18} />
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
