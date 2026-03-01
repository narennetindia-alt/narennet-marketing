import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Post not found</h1>
          <Link to="/blog" className="text-brand-accent hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-bg">
      {/* Dramatic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white">
        <div className="container-wide px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors mb-16 uppercase tracking-[0.3em] text-[10px] font-bold"
            >
              <ArrowLeft size={14} /> Back to Archive
            </Link>

            <div className="flex items-center gap-6 mb-12">
              <span className="px-6 py-2 rounded-full bg-brand-accent text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                {post.category}
              </span>
              <div className="h-px w-12 bg-gray-200" />
              <div className="flex items-center gap-3 text-gray-400 font-mono text-[10px] uppercase tracking-[0.2em]">
                <Calendar size={12} /> {post.date}
              </div>
            </div>

            <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-bold mb-16 leading-[0.85] md:leading-[0.82] tracking-tighter uppercase">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-12">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-border shadow-xl">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white leading-none mb-2">{post.author.name}</p>
                  <p className="text-brand-accent text-[10px] uppercase tracking-[0.2em] font-bold">{post.author.role}</p>
                </div>
              </div>

              <div className="hidden md:block h-12 w-px bg-brand-border" />

              <div className="flex items-center gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Read Time</p>
                  <p className="text-xl font-bold tracking-tight">{post.readTime}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Comments</p>
                  <p className="text-xl font-bold tracking-tight">12</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-24 border-l border-gray-50 hidden xl:flex items-center justify-center">
          <div className="writing-mode-vertical text-[10px] font-bold uppercase tracking-[0.5em] text-gray-200">
            ARTICLE — {post.id.padStart(3, '0')}
          </div>
        </div>
      </section>

      {/* Full Width Featured Image */}
      <section className="px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[16/10] md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl relative group"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container-wide px-6 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <div className="markdown-body text-brand-secondary text-xl md:text-2xl leading-relaxed font-light space-y-12">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Discussion Section */}
            <div className="mt-48 pt-24 border-t border-brand-border">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                  <span className="text-brand-accent font-mono text-sm font-bold uppercase tracking-widest block mb-4">Community</span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase text-white">Discussion</h2>
                </div>
                <p className="text-xl text-brand-secondary font-light">12 Comments</p>
              </div>

              <div className="bg-white/5 rounded-[40px] md:rounded-[48px] p-8 md:p-16 border border-brand-border mb-20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-2xl font-bold mb-8 relative z-10">Join the conversation</h3>
                <div className="relative z-10">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What are your thoughts on this?"
                    className="w-full bg-white/5 border border-brand-border rounded-[24px] md:rounded-[32px] p-6 md:p-10 min-h-[200px] focus:outline-none focus:border-brand-accent transition-all text-lg md:text-xl font-light shadow-sm focus:shadow-xl text-white"
                  />
                  <button className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-brand-accent text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-opacity-80 transition-all shadow-xl flex items-center gap-3 font-bold uppercase tracking-widest text-xs">
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
                  },
                  {
                    name: 'Anand Kumar',
                    role: 'Systems Architect',
                    time: '3 days ago',
                    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
                    comment: 'The point about "Vibe Coding" resonated strongly. We are moving towards a future where intent matters more than syntax. Exciting times ahead for enterprise automation.'
                  }
                ].map((commentData, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-8"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex-shrink-0 overflow-hidden border border-brand-border">
                      <img
                        src={commentData.avatar}
                        alt={commentData.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-xl text-white">{commentData.name}</span>
                        <div className="w-1 h-1 rounded-full bg-brand-border" />
                        <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest">{commentData.time}</span>
                      </div>
                      <p className="text-brand-accent text-xs font-mono uppercase tracking-widest mb-2">{commentData.role}</p>
                      <p className="text-brand-secondary text-xl font-light leading-relaxed max-w-2xl">
                        {commentData.comment}
                      </p>
                      <button className="text-brand-accent text-[10px] font-bold uppercase tracking-widest hover:underline">Reply</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-16">
              <div className="p-12 rounded-[48px] bg-black text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-8 tracking-tight relative z-10">NarenNet Intelligence</h3>
                <p className="text-white/60 font-light leading-relaxed mb-10 relative z-10 text-lg">
                  We build intelligent software ecosystems that automate complex business workflows and drive growth through AI-driven insights.
                </p>
                <Link to="/about" className="group/link inline-flex items-center gap-4 bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all relative z-10">
                  Our Mission <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-10">
                <div className="flex items-center justify-between border-b border-brand-border pb-6">
                  <h3 className="text-xl font-bold uppercase tracking-tighter text-white">Recent Archive</h3>
                  <Link to="/blog" className="text-brand-accent text-[10px] font-bold uppercase tracking-widest hover:underline">View All</Link>
                </div>
                <div className="space-y-12">
                  {recentPosts.map((p) => (
                    <Link key={p.id} to={`/blog/${p.id}`} className="group block space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-brand-accent font-mono text-[10px] font-bold uppercase tracking-widest">{p.category}</span>
                        <div className="h-px flex-grow bg-brand-border" />
                      </div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors leading-tight tracking-tight">
                        {p.title}
                      </h4>
                      <p className="text-brand-secondary text-sm font-mono uppercase tracking-widest">{p.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-12 rounded-[48px] border border-brand-border bg-white/5">
                <h3 className="text-xl font-bold mb-8 tracking-tight text-white">Newsletter</h3>
                <p className="text-brand-secondary font-light mb-8 text-lg">Get the latest insights on AI and business automation.</p>
                {subscribed ? (
                  <div className="flex items-center gap-4 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-6 py-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4">
                    <CheckCircle2 size={20} className="flex-shrink-0" />
                    <p className="font-bold text-xs uppercase tracking-widest">Subscribed Successfully!</p>
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
                      className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-accent transition-colors text-white"
                    />
                    <button className="w-full bg-brand-accent text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-opacity-80 transition-colors">
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
