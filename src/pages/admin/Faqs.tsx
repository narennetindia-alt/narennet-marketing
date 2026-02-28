import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
    GripVertical
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
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">FAQ Management</h1>
                    <p className="text-brand-secondary font-light">Manage the questions and answers displayed on your help sections.</p>
                </div>

                <button
                    onClick={() => { setIsEditing(true); setCurrentFaq({ question: '', answer: '', category: 'General', display_order: faqs.length }); }}
                    className="px-8 py-4 rounded-[20px] bg-brand-accent text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                >
                    <Plus size={20} /> Add New FAQ
                </button>
            </div>

            {isEditing && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-card border border-brand-border rounded-[40px] p-10 card-glow text-white"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">{currentFaq.id ? 'Edit FAQ' : 'New FAQ'}</h2>
                        <button onClick={() => setIsEditing(false)} className="text-brand-secondary hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Category</label>
                            <input
                                type="text"
                                value={currentFaq.category}
                                onChange={(e) => setCurrentFaq({ ...currentFaq, category: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="General, Billing, Technical..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Display Order</label>
                            <input
                                type="number"
                                value={currentFaq.display_order}
                                onChange={(e) => setCurrentFaq({ ...currentFaq, display_order: parseInt(e.target.value) })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Question</label>
                            <input
                                type="text"
                                value={currentFaq.question}
                                onChange={(e) => setCurrentFaq({ ...currentFaq, question: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="What is NarenNet?"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Answer</label>
                            <textarea
                                rows={4}
                                value={currentFaq.answer}
                                onChange={(e) => setCurrentFaq({ ...currentFaq, answer: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all resize-none"
                                placeholder="NarenNet is an AI-driven software solutions provider..."
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-8 py-4 rounded-2xl border border-brand-border text-brand-secondary font-bold hover:bg-white/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-8 py-4 rounded-2xl bg-brand-accent text-white font-bold hover:scale-105 transition-all shadow-lg shadow-brand-accent/20"
                        >
                            <Save size={20} className="inline mr-2" /> Save FAQ
                        </button>
                    </div>
                </motion.div>
            )}

            <div className="bg-brand-card border border-brand-border rounded-[40px] overflow-hidden card-glow">
                <div className="p-8 border-b border-brand-border flex items-center gap-4 bg-white/[0.02]">
                    <Search size={20} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        className="bg-transparent border-none focus:outline-none text-white text-sm w-full font-light"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-bold">
                                <th className="px-8 py-6 w-16">Ord</th>
                                <th className="px-8 py-6">Question & Category</th>
                                <th className="px-8 py-6">Answer Preview</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                    </td>
                                </tr>
                            ) : faqs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-brand-secondary">
                                        No FAQs found. Add your first one!
                                    </td>
                                </tr>
                            ) : faqs.map((faq) => (
                                <tr key={faq.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6 text-brand-secondary font-mono text-xs">
                                        {faq.display_order}
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="font-bold text-white mb-1">{faq.question}</p>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full font-bold">
                                            {faq.category}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 max-w-md">
                                        <p className="text-brand-secondary text-sm truncate opacity-60">
                                            {faq.answer}
                                        </p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => editFaq(faq)}
                                                className="p-2 rounded-lg bg-white/5 text-white hover:bg-brand-accent transition-all"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(faq.id)}
                                                className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                <Trash2 size={16} />
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
