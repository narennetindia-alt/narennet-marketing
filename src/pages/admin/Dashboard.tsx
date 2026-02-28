import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    FileText,
    MessageSquare,
    Users,
    TrendingUp,
    ArrowUpRight,
    Clock,
    ArrowRight,
    Briefcase,
    HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

interface DashboardStats {
    blogs: number;
    leads: number;
    profiles: number;
    faqs: number;
    services: number;
}

export default function Dashboard() {
    const [stats, setStats] = useState<DashboardStats>({ blogs: 0, leads: 0, profiles: 0, faqs: 0, services: 0 });
    const [recentLeads, setRecentLeads] = useState<any[]>([]);
    const [recentBlogs, setRecentBlogs] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            setIsLoading(true);

            // Fetch counts
            const [blogsCount, leadsCount, profilesCount, faqsCount, servicesCount] = await Promise.all([
                supabase.from('blogs').select('*', { count: 'exact', head: true }),
                supabase.from('leads').select('*', { count: 'exact', head: true }),
                supabase.from('profiles').select('*', { count: 'exact', head: true }),
                supabase.from('faqs').select('*', { count: 'exact', head: true }),
                supabase.from('services').select('*', { count: 'exact', head: true }),
            ]);

            setStats({
                blogs: blogsCount.count || 0,
                leads: leadsCount.count || 0,
                profiles: profilesCount.count || 0,
                faqs: faqsCount.count || 0,
                services: servicesCount.count || 0
            });

            // Fetch recent leads
            const { data: leads } = await supabase
                .from('leads')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(4);
            if (leads) setRecentLeads(leads);

            // Fetch recent blogs
            const { data: blogs } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(3);
            if (blogs) setRecentBlogs(blogs);

            setIsLoading(false);
        };

        fetchDashboardData();
    }, []);

    const statCards = [
        { label: 'Total Blogs', value: stats.blogs, change: '+1', icon: FileText, color: 'text-blue-500' },
        { label: 'New Leads', value: stats.leads, change: `+${stats.leads}`, icon: MessageSquare, color: 'text-green-500' },
        { label: 'Our Services', value: stats.services, change: '0', icon: Briefcase, color: 'text-purple-500' },
        { label: 'Help FAQs', value: stats.faqs, change: '0', icon: HelpCircle, color: 'text-orange-500' },
    ];

    return (
        <div className="space-y-10">
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Welcome Back, Admin</h1>
                <p className="text-brand-secondary text-sm md:text-base font-light">Here's what's happening with NarenNet today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-brand-card border border-brand-border p-6 md:p-8 rounded-[24px] md:rounded-[32px] card-glow text-white"
                    >
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-green-500 flex items-center gap-1 bg-green-500/10 px-3 py-1 rounded-full">
                                {stat.change} <ArrowUpRight size={10} />
                            </span>
                        </div>
                        <p className="text-brand-secondary text-xs md:text-sm font-medium mb-1">{stat.label}</p>
                        <p className="text-2xl md:text-3xl font-bold">{isLoading ? '...' : stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Recent Leads */}
                <div className="bg-brand-card border border-brand-border rounded-[32px] md:rounded-[40px] p-6 md:p-10 card-glow text-white">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg md:text-xl font-bold">Latest Leads</h2>
                        <Link to="/admin/leads" className="text-brand-accent text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {isLoading ? (
                            <div className="py-10 text-center text-brand-secondary italic">Loading leads...</div>
                        ) : recentLeads.length === 0 ? (
                            <div className="py-10 text-center text-brand-secondary italic">No leads found.</div>
                        ) : recentLeads.map((lead) => (
                            <div key={lead.id} className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-colors group">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-sm md:text-base">
                                    {lead.name[0]}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-bold text-sm md:text-base truncate">{lead.name}</p>
                                    <p className="text-[10px] md:text-xs text-brand-secondary truncate">{lead.email}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-3 py-0.5 md:py-1 rounded-full ${lead.status === 'new' ? 'bg-brand-accent/10 text-brand-accent' : 'bg-green-500/10 text-green-500'}`}>
                                        {lead.status}
                                    </span>
                                    <p className="text-[8px] md:text-[10px] text-brand-secondary mt-1 md:mt-2 flex items-center justify-end gap-1">
                                        <Clock size={8} /> {new Date(lead.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity / Blogs */}
                <div className="bg-brand-card border border-brand-border rounded-[40px] p-10 card-glow text-white">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Recent Blogs</h2>
                        <Link to="/admin/blogs" className="text-brand-accent text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Manage <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="space-y-6">
                        {isLoading ? (
                            <div className="py-10 text-center text-brand-secondary italic">Loading blogs...</div>
                        ) : recentBlogs.length === 0 ? (
                            <div className="py-10 text-center text-brand-secondary italic">No blog posts found.</div>
                        ) : recentBlogs.map((blog) => (
                            <div key={blog.id} className="flex items-start gap-6 p-4 rounded-3xl hover:bg-white/5 transition-colors group">
                                <div className="w-20 h-20 rounded-2xl bg-white/5 overflow-hidden flex-shrink-0 border border-brand-border">
                                    <img
                                        src={blog.cover_image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop'}
                                        alt="blog"
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-bold mb-2 group-hover:text-brand-accent transition-colors truncate">{blog.title}</h3>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${blog.status === 'published' ? 'text-green-500' : 'text-yellow-500'}`}>
                                            {blog.status}
                                        </span>
                                        <span className="text-[10px] text-brand-secondary">•</span>
                                        <span className="text-[10px] text-brand-secondary flex items-center gap-1">
                                            <Clock size={10} /> {new Date(blog.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
