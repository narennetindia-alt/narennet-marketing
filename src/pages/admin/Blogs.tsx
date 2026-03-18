import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Plus,
    Image as ImageIcon,
    Type,
    FileText,
    Tag,
    Send,
    CheckCircle2,
    AlertCircle,
    LogOut,
    User,
    AlignLeft,
    Clock,
    ArrowLeft,
    Trash2,
    Edit3,
    Eye,
    Search,
    Filter
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

interface Blog {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    category: string;
    cover_image: string;
    read_time: string;
    status: 'draft' | 'published';
    created_at: string;
}

export default function Admin() {
    const navigate = useNavigate();
    const [view, setView] = useState<'list' | 'editor'>('list');
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isFetching, setIsFetching] = useState(true);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Tech',
        cover_image: '',
        read_time: '5 min read',
        status: 'draft' as 'draft' | 'published'
    });

    const fetchBlogs = async () => {
        setIsFetching(true);
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setBlogs(data);
        setIsFetching(false);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    };

    const handleEdit = (blog: Blog) => {
        setCurrentId(blog.id);
        setFormData({
            title: blog.title,
            excerpt: blog.excerpt,
            content: blog.content,
            category: blog.category,
            cover_image: blog.cover_image,
            read_time: blog.read_time,
            status: blog.status
        });
        setView('editor');
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        const { error } = await supabase.from('blogs').delete().eq('id', id);
        if (!error) fetchBlogs();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        const slug = generateSlug(formData.title);
        const payload = { ...formData, slug };

        try {
            let error;
            if (currentId) {
                const { error: err } = await supabase
                    .from('blogs')
                    .update(payload)
                    .eq('id', currentId);
                error = err;
            } else {
                const { error: err } = await supabase
                    .from('blogs')
                    .insert([payload]);
                error = err;
            }

            if (error) throw error;

            setFormState('success');
            setTimeout(() => {
                setFormState('idle');
                setView('list');
                fetchBlogs();
                resetForm();
            }, 1500);
        } catch (error) {
            console.error('Error saving blog:', error);
            setFormState('error');
            setTimeout(() => setFormState('idle'), 3000);
        }
    };

    const resetForm = () => {
        setCurrentId(null);
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Tech',
            cover_image: '',
            read_time: '5 min read',
            status: 'draft'
        });
    };

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">Blog <span className="text-brand-accent">Management</span></h1>
                    <p className="text-brand-secondary text-lg font-light">
                        {view === 'list' ? 'Manage your corporate publications.' : 'Create or edit enterprise insights.'}
                    </p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    {view === 'list' ? (
                        <button
                            onClick={() => { resetForm(); setView('editor'); }}
                            className="w-full md:w-auto px-8 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-deep/20"
                        >
                            <Plus size={18} /> Create Post
                        </button>
                    ) : (
                        <button
                            onClick={() => setView('list')}
                            className="w-full md:w-auto px-8 py-5 rounded-2xl bg-white border border-brand-border text-brand-primary font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-bg transition-all"
                        >
                            <ArrowLeft size={18} /> Back to List
                        </button>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <AnimatePresence mode="wait">
                {view === 'list' ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-white border border-brand-border rounded-[48px] overflow-hidden shadow-sm"
                    >
                        <div className="p-8 md:p-12 border-b border-brand-border flex flex-col md:flex-row justify-between gap-8 bg-brand-bg/50">
                            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-brand-border flex-grow max-w-xl shadow-sm focus-within:border-brand-accent transition-colors">
                                <Search size={20} className="text-brand-secondary/40" />
                                <input type="text" placeholder="Search insights..." className="bg-transparent border-none outline-none text-brand-primary text-sm w-full font-medium placeholder:text-brand-secondary/30" />
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="p-4 rounded-2xl bg-white border border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary transition-all shadow-sm">
                                    <Filter size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.3em] text-brand-secondary font-black bg-brand-bg/30">
                                        <th className="px-10 py-8">Article</th>
                                        <th className="px-10 py-8">Category</th>
                                        <th className="px-10 py-8">Status</th>
                                        <th className="px-10 py-8">Created</th>
                                        <th className="px-10 py-8 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-border">
                                    {isFetching ? (
                                        <tr>
                                            <td colSpan={5} className="px-10 py-32 text-center">
                                                <div className="w-10 h-10 border-4 border-brand-accent/10 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                            </td>
                                        </tr>
                                    ) : blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-10 py-32 text-center text-brand-secondary font-light italic">
                                                No blog posts discovered in the archive.
                                            </td>
                                        </tr>
                                    ) : blogs.map((blog) => (
                                        <tr key={blog.id} className="group hover:bg-brand-bg transition-colors">
                                            <td className="px-10 py-8">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-16 h-12 rounded-xl bg-brand-bg overflow-hidden border border-brand-border shadow-sm flex-shrink-0">
                                                        <img src={blog.cover_image || '/placeholder.png'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-black text-brand-primary mb-1 group-hover:text-brand-accent transition-colors truncate text-base uppercase tracking-tight">{blog.title}</p>
                                                        <p className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest opacity-40 truncate">{blog.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary bg-brand-bg px-3 py-1 rounded-full border border-brand-border">{blog.category}</span>
                                            </td>
                                            <td className="px-10 py-8">
                                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border ${blog.status === 'published' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-orange-50 border-orange-100 text-orange-600'
                                                    }`}>
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-10 py-8 text-brand-secondary text-xs font-bold uppercase tracking-widest opacity-40">
                                                {new Date(blog.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                                    <button
                                                        onClick={() => handleEdit(blog)}
                                                        className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all shadow-sm"
                                                    >
                                                        <Edit3 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog.id)}
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

                        {/* Mobile Card Layout */}
                        <div className="md:hidden divide-y divide-brand-border">
                            {isFetching ? (
                                <div className="p-16 text-center">
                                    <div className="w-8 h-8 border-4 border-brand-accent/10 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                </div>
                            ) : blogs.length === 0 ? (
                                <div className="p-16 text-center text-brand-secondary text-sm font-light italic">
                                    No blog posts found.
                                </div>
                            ) : blogs.map((blog) => (
                                <div key={blog.id} className="p-8 space-y-6">
                                    <div className="flex gap-6">
                                        <div className="w-20 h-20 rounded-2xl bg-brand-bg overflow-hidden flex-shrink-0 border border-brand-border shadow-sm">
                                            <img src={blog.cover_image || '/placeholder.png'} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0 flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary opacity-40">{blog.category}</span>
                                                <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${blog.status === 'published' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-orange-50 border-orange-100 text-orange-600'}`}>
                                                    {blog.status}
                                                </span>
                                            </div>
                                            <p className="font-black text-brand-primary text-base line-clamp-2 leading-tight uppercase tracking-tight">{blog.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-brand-bg">
                                        <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-widest opacity-40 flex items-center gap-2">
                                            <Clock size={12} /> {new Date(blog.created_at).toLocaleDateString()}
                                        </span>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-primary"
                                            >
                                                <Edit3 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-500"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="editor"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="max-w-4xl"
                    >
                        <div className="bg-white rounded-[48px] p-10 md:p-16 border border-brand-border shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            
                            {/* Success Overlay */}
                            <AnimatePresence>
                                {formState === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center text-center p-12"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 shadow-sm">
                                            <CheckCircle2 size={40} className="text-emerald-500" />
                                        </div>
                                        <h3 className="text-4xl font-black mb-3 text-brand-primary uppercase tracking-tighter">Saved Successfully</h3>
                                        <p className="text-brand-secondary text-lg font-light leading-none">The insight has been archived in the global vault.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <h2 className="text-4xl font-black mb-16 tracking-tighter uppercase text-brand-primary">
                                {currentId ? 'Edit' : 'Create New'} <br /><span className="text-brand-accent">Insight Post</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                                <div className="space-y-4">
                                    <label htmlFor="blog-title" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40 cursor-pointer">
                                        <Type size={14} /> Post Title
                                    </label>
                                    <input
                                        id="blog-title"
                                        required type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="The Future of AI Intelligence..."
                                        className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-primary text-base font-bold uppercase tracking-tight placeholder:text-brand-secondary/20"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">
                                            <Tag size={14} /> Category
                                        </label>
                                        <div className="relative group">
                                            <select
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                className="w-full bg-brand-bg border border-brand-border rounded-2xl px-10 py-5 focus:outline-none focus:border-brand-accent transition-all text-brand-primary font-bold uppercase tracking-widest text-xs appearance-none cursor-pointer"
                                            >
                                                <option value="Tech">Tech</option>
                                                <option value="Business">Business</option>
                                                <option value="Development">Development</option>
                                                <option value="AI">AI</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-secondary/40">
                                                <Plus size={16} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">
                                            <Clock size={14} /> Read Time
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.read_time}
                                            onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                                            placeholder="5 min read"
                                            className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-accent transition-all text-brand-primary text-base font-bold placeholder:text-brand-secondary/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="blog-image" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40 cursor-pointer">
                                        <ImageIcon size={14} /> Cover Image URL
                                    </label>
                                    <input
                                        id="blog-image"
                                        required type="url"
                                        value={formData.cover_image}
                                        onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                                        placeholder="https://images.unsplash.com/..."
                                        className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-accent transition-all text-brand-primary text-sm font-medium placeholder:text-brand-secondary/20"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="blog-excerpt" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40 cursor-pointer">
                                            <AlignLeft size={14} /> Short Excerpt
                                        </label>
                                        <span className="text-[10px] font-black text-brand-secondary opacity-40">{formData.excerpt.length}/200</span>
                                    </div>
                                    <textarea
                                        id="blog-excerpt"
                                        required rows={3} maxLength={200}
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        placeholder="Catchy summary for the insight card..."
                                        className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-accent transition-all text-brand-primary resize-none text-base font-medium leading-relaxed placeholder:text-brand-secondary/20"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="blog-content" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40 cursor-pointer">
                                        <FileText size={14} /> Detailed Content
                                    </label>
                                    <textarea
                                        id="blog-content"
                                        required rows={12}
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        placeholder="# Chapter 1: The Beginning..."
                                        className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-8 focus:outline-none focus:border-brand-accent transition-all text-brand-primary font-mono text-base leading-relaxed placeholder:text-brand-secondary/20"
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 pt-6">
                                    <div className="flex-grow flex items-center justify-between md:justify-start gap-6 bg-brand-bg/50 border border-brand-border rounded-3xl px-8 py-5">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary opacity-40">Status</span>
                                        <div className="flex gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, status: 'draft' })}
                                                className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${formData.status === 'draft' ? 'bg-orange-500 border-orange-500 text-white shadow-xl shadow-orange-500/30' : 'bg-white border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary'}`}
                                            >
                                                Draft
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, status: 'published' })}
                                                className={`px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${formData.status === 'published' ? 'bg-brand-accent border-brand-accent text-white shadow-xl shadow-brand-accent/30' : 'bg-white border-brand-border text-brand-secondary hover:text-brand-primary hover:border-brand-primary'}`}
                                            >
                                                Publish
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full md:w-auto px-16 py-6 rounded-3xl bg-brand-deep text-white font-black text-xl hover:scale-[1.05] transition-all flex items-center justify-center gap-6 disabled:opacity-50 shadow-2xl shadow-brand-deep/30 uppercase tracking-tighter"
                                    >
                                        {formState === 'submitting' ? (
                                            <span className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>{currentId ? 'Update' : 'Post'} Insight <Send size={24} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
