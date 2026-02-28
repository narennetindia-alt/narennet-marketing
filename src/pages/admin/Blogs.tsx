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
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Blog Management</h1>
                    <p className="text-brand-secondary text-sm md:text-base font-light">
                        {view === 'list' ? 'Manage your corporate publications.' : 'Create or edit enterprise insights.'}
                    </p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    {view === 'list' ? (
                        <button
                            onClick={() => { resetForm(); setView('editor'); }}
                            className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[20px] bg-brand-accent text-white font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 text-sm md:text-base"
                        >
                            <Plus size={18} /> Create Post
                        </button>
                    ) : (
                        <button
                            onClick={() => setView('list')}
                            className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[20px] bg-white/5 border border-brand-border text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-sm md:text-base"
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
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-brand-card border border-brand-border rounded-[40px] overflow-hidden card-glow"
                    >
                        <div className="p-8 border-b border-brand-border flex flex-col md:flex-row justify-between gap-6 bg-white/[0.02]">
                            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-brand-border flex-grow max-w-md">
                                <Search size={18} className="text-gray-500" />
                                <input type="text" placeholder="Search posts..." className="bg-transparent border-none outline-none text-white text-sm w-full" />
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="p-3 rounded-xl bg-white/5 border border-brand-border text-brand-secondary hover:text-white transition-colors">
                                    <Filter size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-brand-border text-[10px] uppercase tracking-[0.2em] text-brand-secondary font-bold">
                                        <th className="px-8 py-6">Article</th>
                                        <th className="px-8 py-6">Category</th>
                                        <th className="px-8 py-6">Status</th>
                                        <th className="px-8 py-6">Created</th>
                                        <th className="px-8 py-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-brand-border">
                                    {isFetching ? (
                                        <tr>
                                            <td colSpan={5} className="px-8 py-20 text-center">
                                                <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                            </td>
                                        </tr>
                                    ) : blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-8 py-20 text-center text-brand-secondary">
                                                No blog posts found.
                                            </td>
                                        </tr>
                                    ) : blogs.map((blog) => (
                                        <tr key={blog.id} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-brand-border overflow-hidden">
                                                        <img src={blog.cover_image || '/placeholder.png'} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{blog.title}</p>
                                                        <p className="text-xs text-brand-secondary">{blog.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">{blog.category}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${blog.status === 'published' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                                                    }`}>
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-brand-secondary text-xs">
                                                {new Date(blog.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => handleEdit(blog)}
                                                        className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                                                    >
                                                        <Edit3 size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog.id)}
                                                        className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
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
                                <div className="p-10 text-center">
                                    <div className="w-8 h-8 border-2 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin mx-auto" />
                                </div>
                            ) : blogs.length === 0 ? (
                                <div className="p-10 text-center text-brand-secondary text-sm">
                                    No blog posts found.
                                </div>
                            ) : blogs.map((blog) => (
                                <div key={blog.id} className="p-6 space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-brand-border overflow-hidden flex-shrink-0">
                                            <img src={blog.cover_image || '/placeholder.png'} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="min-w-0 flex-grow">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-[8px] font-bold uppercase tracking-widest text-brand-secondary">{blog.category}</span>
                                                <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${blog.status === 'published' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                                    {blog.status}
                                                </span>
                                            </div>
                                            <p className="font-bold text-white text-sm line-clamp-2 leading-tight">{blog.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-[10px] text-brand-secondary flex items-center gap-1">
                                            <Clock size={10} /> {new Date(blog.created_at).toLocaleDateString()}
                                        </span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="p-2 rounded-lg bg-blue-500/10 text-blue-500"
                                            >
                                                <Edit3 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="p-2 rounded-lg bg-red-500/10 text-red-500"
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
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-4xl"
                    >
                        <div className="bg-brand-card rounded-[32px] md:rounded-[40px] p-8 md:p-16 border border-brand-border shadow-2xl card-glow text-white relative overflow-hidden">
                            {/* Success Overlay */}
                            <AnimatePresence>
                                {formState === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-50 bg-brand-bg flex flex-col items-center justify-center text-center p-8"
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                            <CheckCircle2 size={32} className="text-green-500" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Saved Successfully!</h3>
                                        <p className="text-brand-secondary text-sm md:text-base font-light">The blog post has been updated in the global vault.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 tracking-tighter uppercase text-white">
                                {currentId ? 'Edit' : 'Create New'} <br /><span className="text-brand-accent">Blog Post</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="space-y-4">
                                    <label htmlFor="blog-title" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4 cursor-pointer">
                                        <Type size={14} /> Post Title
                                    </label>
                                    <input
                                        id="blog-title"
                                        required type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder="The Future of AI..."
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-brand-accent transition-all text-white text-sm md:text-base"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">
                                            <Tag size={14} /> Category
                                        </label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-white/5 border border-brand-border rounded-2xl px-8 py-5 focus:outline-none focus:border-brand-accent transition-all text-white appearance-none"
                                        >
                                            <option value="Tech">Tech</option>
                                            <option value="Business">Business</option>
                                            <option value="Development">Development</option>
                                            <option value="AI">AI</option>
                                        </select>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">
                                            <Clock size={14} /> Read Time
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.read_time}
                                            onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                                            placeholder="5 min read"
                                            className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-brand-accent transition-all text-white text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="blog-image" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4 cursor-pointer">
                                        <ImageIcon size={14} /> Cover Image URL
                                    </label>
                                    <input
                                        id="blog-image"
                                        required type="url"
                                        value={formData.cover_image}
                                        onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                                        placeholder="https://images.unsplash.com/..."
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-brand-accent transition-all text-white text-sm md:text-base"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label htmlFor="blog-excerpt" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4 cursor-pointer">
                                            <AlignLeft size={14} /> Short Excerpt
                                        </label>
                                        <span className="text-[10px] text-brand-secondary">{formData.excerpt.length}/200</span>
                                    </div>
                                    <textarea
                                        id="blog-excerpt"
                                        required rows={3} maxLength={200}
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        placeholder="Catchy summary for the card..."
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-brand-accent transition-all text-white resize-none text-sm md:text-base"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="blog-content" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4 cursor-pointer">
                                        <FileText size={14} /> Detailed Content
                                    </label>
                                    <textarea
                                        id="blog-content"
                                        required rows={12}
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        placeholder="# Chapter 1: The Beginning..."
                                        className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-brand-accent transition-all text-white font-mono text-sm md:text-base"
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-grow flex items-center justify-between md:justify-start gap-4 bg-white/5 border border-brand-border rounded-3xl px-6 md:px-8 py-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">Status</span>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, status: 'draft' })}
                                                className={`px-4 md:px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${formData.status === 'draft' ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/20' : 'text-brand-secondary hover:text-white'}`}
                                            >
                                                Draft
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, status: 'published' })}
                                                className={`px-4 md:px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${formData.status === 'published' ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'text-brand-secondary hover:text-white'}`}
                                            >
                                                Publish
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState === 'submitting'}
                                        className="w-full md:w-auto px-8 md:px-16 py-4 md:py-6 rounded-[20px] md:rounded-[30px] bg-brand-accent text-white font-bold text-lg md:text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-brand-accent/20"
                                    >
                                        {formState === 'submitting' ? (
                                            <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>{currentId ? 'Update' : 'Post'} Blog <Send size={20} /></>
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
