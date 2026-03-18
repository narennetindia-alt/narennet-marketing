import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Save,
    X,
    HelpCircle,
    ChevronDown,
    ChevronUp,
    GripVertical,
    ArrowRight
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
    display_order: number;
    created_at: string;
}

export default function Faqs() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentFaq, setCurrentFaq] = useState<Partial<FAQ>>({
        question: '',
        answer: '',
        category: 'General',
        display_order: 0
    });

    const fetchFaqs = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('faqs')
            .select('*')
            .order('display_order', { ascending: true });
        if (data) setFaqs(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchFaqs();
    }, []);

    const handleSave = async () => {
        if (!currentFaq.question || !currentFaq.answer) return;

        if (currentFaq.id) {
            await supabase.from('faqs').update(currentFaq).eq('id', currentFaq.id);
        } else {
            await supabase.from('faqs').insert([currentFaq]);
        }

        setIsEditing(false);
        setCurrentFaq({ question: '', answer: '', category: 'General', display_order: 0 });
        fetchFaqs();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this FAQ?')) return;
        await supabase.from('faqs').delete().eq('id', id);
        fetchFaqs();
    };

    const editFaq = (faq: FAQ) => {
        setCurrentFaq(faq);
        setIsEditing(true);
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">FAQ <span className="text-brand-accent">Intelligence</span></h1>
                    <p className="text-brand-secondary text-lg font-light">Manage the questions and answers displayed on your help sections.</p>
                </div>

                <button
                    onClick={() => { setIsEditing(true); setCurrentFaq({ question: '', answer: '', category: 'General', display_order: faqs.length }); }}
                    className="w-full md:w-auto px-8 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-deep/20"
                >
                    <Plus size={20} /> Add New FAQ
                </button>
            </div>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        className="bg-white border border-brand-border rounded-[48px] p-10 md:p-16 shadow-2xl text-brand-primary relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="flex items-center justify-between mb-12 relative z-10">
                            <h2 className="text-3xl font-black uppercase tracking-tighter">{currentFaq.id ? 'Refine' : 'Initialize'} <span className="text-brand-accent">FAQ</span></h2>
                            <button onClick={() => setIsEditing(false)} className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-bg hover:text-brand-primary transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Classification Category</label>
                                <input
                                    type="text"
                                    value={currentFaq.category}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, category: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all font-bold uppercase tracking-widest text-xs placeholder:text-brand-secondary/20"
                                    placeholder="General, Billing, Technical..."
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Deployment Priority</label>
                                <input
                                    type="number"
                                    value={currentFaq.display_order}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, display_order: parseInt(e.target.value) })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all font-black text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-8 mb-12 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Inquiry Question</label>
                                <input
                                    type="text"
                                    value={currentFaq.question}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, question: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all font-bold text-lg tracking-tight placeholder:text-brand-secondary/20"
                                    placeholder="What is NarenNet?"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Intelligence Resolution (Answer)</label>
                                <textarea
                                    rows={5}
                                    value={currentFaq.answer}
                                    onChange={(e) => setCurrentFaq({ ...currentFaq, answer: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-6 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none text-base leading-relaxed font-medium placeholder:text-brand-secondary/20"
                                    placeholder="NarenNet is an AI-driven software solutions provider..."
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-6 relative z-10">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-10 py-5 rounded-2xl border border-brand-border text-brand-secondary font-black uppercase tracking-widest text-xs hover:bg-brand-bg transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-10 py-5 rounded-2xl bg-brand-accent text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-brand-accent/30"
                            >
                                <Save size={20} className="inline mr-3" /> Archive FAQ
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="bg-white border border-brand-border rounded-[48px] overflow-hidden shadow-sm">
                <div className="p-8 md:p-12 border-b border-brand-border flex items-center gap-6 bg-brand-bg/50">
                    <Search size={22} className="text-brand-secondary/40" />
                    <input
                        type="text"
                        placeholder="Search archived intelligence..."
                        className="bg-transparent border-none focus:outline-none text-brand-primary text-base w-full font-bold uppercase tracking-tight placeholder:text-brand-secondary/20"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.3em] text-brand-secondary font-black bg-brand-bg/30">
                                <th className="px-10 py-8 w-20">Priority</th>
                                <th className="px-10 py-8">Inquiry & Domain</th>
                                <th className="px-10 py-8">Resolution Snippet</th>
                                <th className="px-10 py-8 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="px-10 py-32 text-center">
                                        <div className="w-10 h-10 border-4 border-brand-accent/10 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                    </td>
                                </tr>
                            ) : faqs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-10 py-32 text-center text-brand-secondary font-light italic text-lg">
                                        Intelligence archive is currently empty.
                                    </td>
                                </tr>
                            ) : faqs.map((faq) => (
                                <tr key={faq.id} className="group hover:bg-brand-bg transition-colors">
                                    <td className="px-10 py-8 text-brand-secondary font-mono text-xs font-black opacity-30">
                                        {faq.display_order.toString().padStart(2, '0')}
                                    </td>
                                    <td className="px-10 py-8">
                                        <p className="font-black text-brand-primary mb-2 uppercase tracking-tight text-base leading-tight">{faq.question}</p>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent bg-brand-accent/5 border border-brand-accent/10 px-3 py-1 rounded-full">
                                            {faq.category}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 max-w-md">
                                        <p className="text-brand-secondary text-sm font-medium truncate opacity-60 leading-relaxed group-hover:opacity-100 group-hover:text-brand-primary transition-all">
                                            {faq.answer}
                                        </p>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                            <button
                                                onClick={() => editFaq(faq)}
                                                className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all shadow-sm"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(faq.id)}
                                                className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm"
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
            </div>
        </div>
    );
}
