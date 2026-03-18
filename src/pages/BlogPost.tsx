import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, User, Calendar, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { useState, useEffect } from 'react';

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Find the current post
    const foundPost = blogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
    }

    // Get recent posts excluding current
    const recent = blogPosts.filter(p => p.id !== id).slice(0, 3);
    setRecentPosts(recent);

    // Simulate brief loading state for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="w-12 h-12 border-4 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-brand-accent hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. DRAMATIC HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white">
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[130px] -z-10 opacity-30" />
        
        <div className="container-wide px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-brand-accent transition-colors mb-16 uppercase tracking-[0.3em] text-[10px] font-black"
            >
              <ArrowLeft size={14} /> Back to Archive
            </Link>

            <div className="flex items-center gap-6 mb-12">
              <span className="px-6 py-2 rounded-full bg-brand-accent text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                {post.category}
              </span>
              <div className="h-px w-12 bg-white/20" />
              <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                <Calendar size={12} /> {post.date}
              </div>
            </div>

            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black mb-16 leading-[0.85] md:leading-[0.82] tracking-tighter uppercase text-white">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-12">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-[24px] overflow-hidden border-2 border-brand-accent/30 shadow-2xl">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-2xl font-black text-white leading-none mb-2">{post.author.name}</p>
                  <p className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-black">{post.author.role}</p>
                </div>
              </div>

              <div className="hidden md:block h-12 w-px bg-white/10" />

              <div className="flex items-center gap-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest leading-none">Read Time</p>
                  <p className="text-xl font-black tracking-tight text-white">{post.readTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-widest leading-none">Comments</p>
                  <p className="text-xl font-black tracking-tight text-white">12</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-24 border-l border-white/5 hidden xl:flex items-center justify-center">
          <div className="writing-mode-vertical text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
            ARTICLE — {post.id.padStart(3, '0')}
          </div>
        </div>
      </section>

      {/* 2. FULL WIDTH FEATURED IMAGE — WHITE BG UNDERNEATH */}
      <section className="px-6 mb-32 -mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[16/9] md:aspect-[21/9] rounded-[48px] md:rounded-[64px] overflow-hidden shadow-2xl border-4 border-white relative group"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 3. CONTENT SECTION — LIGHT */}
      <section className="container-wide px-6 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <div className="markdown-body text-brand-secondary text-xl md:text-2xl leading-relaxed font-light space-y-12 mb-32">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Discussion Section — LIGHT BOXES */}
            <div className="mt-48 pt-24 border-t border-brand-border">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                  <span className="text-brand-accent font-black text-sm uppercase tracking-widest block mb-4">Community</span>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-brand-primary">Discussion</h2>
                </div>
                <p className="text-xl text-brand-secondary font-light">12 Comments</p>
              </div>

              <div className="bg-brand-card/50 rounded-[40px] md:rounded-[48px] p-8 md:p-16 border border-brand-border mb-20 relative overflow-hidden shadow-sm">
                <h3 className="text-2xl font-black mb-8 text-brand-primary tracking-tight">Join the conversation</h3>
                <div className="relative">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What are your thoughts on this?"
                    className="w-full bg-white border border-brand-border rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[200px] focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-lg md:text-xl font-light shadow-sm text-brand-primary placeholder:text-brand-secondary/40"
                  />
                  <button className="mt-8 bg-brand-deep text-white px-10 py-5 rounded-2xl hover:bg-brand-primary transition-all shadow-xl flex items-center gap-3 font-black uppercase tracking-widest text-xs">
                    Post Comment <Send size={16} />
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-16">
                {[
                  {
                    name: 'Rajesh Subramaniam',
                    role: 'IT Director',
                    time: '2 hours ago',
                    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
                    comment: 'This is exactly the shift we are seeing. The integration of AI into ERP systems is no longer a luxury but a necessity for scaling retail operations in India.'
                  },
                  {
                    name: 'Priya Sharma',
                    role: 'Retail Store Owner',
                    time: '1 day ago',
                    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
                    comment: 'I completely agree regarding the offline billing capabilities. It is the single most important feature for our POS, given the unpredictable connectivity. Great read!'
                  }
                ].map((commentData, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-8 sm:items-start"
                  >
                    <div className="w-16 h-16 rounded-[20px] bg-white flex-shrink-0 overflow-hidden border border-brand-border shadow-md">
                      <img
                        src={commentData.avatar}
                        alt={commentData.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="font-black text-xl text-brand-primary tracking-tight">{commentData.name}</span>
                        <div className="w-1 h-1 rounded-full bg-brand-border" />
                        <span className="text-brand-secondary text-[10px] font-black uppercase tracking-widest">{commentData.time}</span>
                      </div>
                      <p className="text-brand-accent text-xs font-black uppercase tracking-widest mb-2">{commentData.role}</p>
                      <p className="text-brand-secondary text-xl font-light leading-relaxed max-w-2xl">
                        {commentData.comment}
                      </p>
                      <button className="text-brand-accent text-[10px] font-black uppercase tracking-widest hover:underline mt-4">Reply</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. SIDEBAR — LIGHT/DARK HYBRID */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-16">
              {/* BRAND CARD — DARK */}
              <div className="p-12 rounded-[48px] bg-brand-deep text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-black mb-8 tracking-tighter relative z-10 text-white uppercase">NarenNet Intelligence</h3>
                <p className="text-white/60 font-light leading-relaxed mb-10 relative z-10 text-lg">
                  We build intelligent software ecosystems that automate complex business workflows and drive growth through AI-driven insights.
                </p>
                <Link to="/about" className="group/link inline-flex items-center gap-4 bg-brand-accent text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all relative z-10">
                  Our Mission <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* RECENT POSTS — LIGHT */}
              <div className="space-y-10 px-4">
                <div className="flex items-center justify-between border-b border-brand-border pb-6">
                  <h3 className="text-xl font-black uppercase tracking-tighter text-brand-primary">Archive</h3>
                  <Link to="/blog" className="text-brand-accent text-[10px] font-black uppercase tracking-widest hover:underline">View All</Link>
                </div>
                <div className="space-y-12">
                  {recentPosts.map((p) => (
                    <Link key={p.id} to={`/blog/${p.id}`} className="group block space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-brand-accent font-mono text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                        <div className="h-px flex-grow bg-brand-border" />
                      </div>
                      <h4 className="text-2xl font-black text-brand-primary group-hover:text-brand-accent transition-colors leading-tight tracking-tight uppercase">
                        {p.title}
                      </h4>
                      <p className="text-brand-secondary text-xs font-black uppercase tracking-widest">{p.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* NEWSLETTER — LIGHT CARD */}
              <div className="p-12 rounded-[48px] border border-brand-border bg-white shadow-sm">
                <h3 className="text-xl font-black mb-6 tracking-tighter text-brand-primary uppercase">Newsletter</h3>
                <p className="text-brand-secondary font-light mb-8 text-lg">Get the latest insights on AI and business automation.</p>
                {subscribed ? (
                  <div className="flex items-center gap-4 text-emerald-600 bg-emerald-50 border border-emerald-100 px-6 py-6 rounded-2xl shadow-inner">
                    <CheckCircle2 size={24} className="flex-shrink-0" />
                    <p className="font-black text-[10px] uppercase tracking-widest">Subscribed!</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                    className="space-y-4"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Email address"
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-brand-primary font-medium"
                    />
                    <button className="w-full bg-brand-deep text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-primary transition-colors shadow-lg">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
