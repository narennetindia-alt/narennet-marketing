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
        { label: 'Total Blogs', value: stats.blogs, change: '+1', icon: FileText, color: 'text-brand-accent' },
        { label: 'New Leads', value: stats.leads, change: `+${stats.leads}`, icon: MessageSquare, color: 'text-emerald-500' },
        { label: 'Our Services', value: stats.services, change: '0', icon: Briefcase, color: 'text-blue-500' },
        { label: 'Help FAQs', value: stats.faqs, change: '0', icon: HelpCircle, color: 'text-orange-500' },
    ];

    return (
        <div className="space-y-12">
            <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">Console <span className="text-brand-accent">Overview</span></h1>
                        <p className="text-brand-secondary text-lg font-light leading-none">Intelligence and operations at a glance.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white border border-brand-border p-2 pr-6 rounded-2xl shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                            <Clock size={18} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-brand-secondary">Last Sync: Just Now</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid — LIGHT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {statCards.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="bg-white border border-brand-border p-8 rounded-[40px] shadow-sm hover:shadow-2xl hover:border-brand-accent/30 transition-all group"
                    >
                        <div className="flex items-start justify-between mb-8">
                            <div className={`w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-[10px] font-black text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                                {stat.change} <ArrowUpRight size={12} />
                            </span>
                        </div>
                        <p className="text-brand-secondary text-xs font-black uppercase tracking-widest mb-2 opacity-50">{stat.label}</p>
                        <p className="text-4xl font-black text-brand-primary tracking-tight">{isLoading ? '...' : stat.value}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Recent Leads — LIGHT */}
                <div className="bg-white border border-brand-border rounded-[48px] p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <h2 className="text-2xl font-black text-brand-primary uppercase tracking-tighter">Latest <span className="text-brand-accent">Leads</span></h2>
                        <Link to="/admin/leads" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all">
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                    
                    <div className="space-y-6 relative z-10">
                        {isLoading ? (
                            <div className="py-20 text-center text-brand-secondary font-light">Synthesizing lead data...</div>
                        ) : recentLeads.length === 0 ? (
                            <div className="py-20 text-center text-brand-secondary font-light italic">No incoming intelligence findings.</div>
                        ) : recentLeads.map((lead) => (
                            <div key={lead.id} className="flex items-center gap-6 p-4 rounded-3xl hover:bg-brand-bg border border-transparent hover:border-brand-border transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-brand-deep text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:bg-brand-accent transition-colors">
                                    {lead.name[0]}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <p className="font-black text-brand-primary text-lg tracking-tight truncate">{lead.name}</p>
                                    <p className="text-xs text-brand-secondary font-medium truncate uppercase tracking-widest opacity-60">{lead.email}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${lead.status === 'new' ? 'bg-brand-accent/10 border-brand-accent/20 text-brand-accent' : 'bg-emerald-50 border-emerald-100 text-emerald-600'}`}>
                                        {lead.status}
                                    </span>
                                    <p className="text-[10px] text-brand-secondary mt-3 font-bold uppercase tracking-widest opacity-40 flex items-center justify-end gap-2">
                                        <Clock size={10} /> {new Date(lead.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Blogs — LIGHT */}
                <div className="bg-white border border-brand-border rounded-[48px] p-8 md:p-12 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <h2 className="text-2xl font-black text-brand-primary uppercase tracking-tighter">Recent <span className="text-brand-accent">Insights</span></h2>
                        <Link to="/admin/blogs" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all">
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {isLoading ? (
                            <div className="py-20 text-center text-brand-secondary font-light">Parsing content archive...</div>
                        ) : recentBlogs.length === 0 ? (
                            <div className="py-20 text-center text-brand-secondary font-light italic">Blog archive is currently empty.</div>
                        ) : recentBlogs.map((blog) => (
                            <div key={blog.id} className="flex items-center gap-6 p-4 rounded-3xl hover:bg-brand-bg border border-transparent hover:border-brand-border transition-all group">
                                <div className="w-24 h-16 rounded-2xl bg-brand-bg overflow-hidden flex-shrink-0 border border-brand-border shadow-sm">
                                    <img
                                        src={blog.cover_image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200&h=200&fit=crop'}
                                        alt="blog"
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-black text-brand-primary mb-2 group-hover:text-brand-accent transition-colors truncate tracking-tight uppercase text-sm">{blog.title}</h3>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${blog.status === 'published' ? 'text-emerald-600' : 'text-orange-500'}`}>
                                            {blog.status}
                                        </span>
                                        <div className="w-1 h-1 rounded-full bg-brand-border" />
                                        <span className="text-[10px] text-brand-secondary font-black uppercase tracking-widest opacity-40 flex items-center gap-2">
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
