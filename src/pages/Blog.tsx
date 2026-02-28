import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (data) {
        const mappedBlogs = data.map(blog => ({
          id: blog.id,
          title: blog.title,
          image: blog.cover_image,
          date: new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          readTime: blog.read_time,
          excerpt: blog.excerpt,
          category: blog.category
        }));
        setBlogPosts(mappedBlogs);
      }
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <div className="w-12 h-12 border-4 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin" />
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  if (!featuredPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <p className="text-brand-secondary font-light text-xl">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-brand-bg">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[60vh] flex items-center border-b border-brand-border">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-24 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10px] font-bold text-gray-200 uppercase tracking-[0.5em] select-none whitespace-nowrap">
            INSIGHTS — 2026
          </div>
        </div>

        <div className="container-wide px-6 relative z-10">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-16 top-4 text-brand-accent/60 font-mono text-lg hidden xl:block"
            >
              04.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl md:text-9xl font-bold mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase text-white"
            >
              Latest <br />
              Insights & <br />
              <span className="text-brand-accent">Updates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-brand-secondary max-w-2xl leading-tight font-light"
            >
              Exploring the intersection of business, technology, and artificial intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-32 bg-white/5 border-b border-brand-border">
        <div className="container-wide px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            <div className="lg:col-span-7">
              <Link to={`/blog/${featuredPost.id}`} className="block relative aspect-[16/9] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10">
                  <span className="px-6 py-2 rounded-full bg-brand-accent text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                    Featured Article
                  </span>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-brand-accent font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{featuredPost.date}</span>
                <div className="w-1 h-1 bg-brand-border rounded-full" />
                <span className="text-brand-secondary font-mono text-[10px] uppercase tracking-[0.2em]">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] uppercase text-white group-hover:text-brand-accent transition-colors">
                <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-xl text-brand-secondary font-light leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-brand-accent/20">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="bg-brand-bg py-32">
        <div className="container-wide px-6">
          <div className="flex items-center justify-between mb-24">
            <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Recent <br /> Archive</h2>
            <div className="flex gap-4">
              {['All', 'Tech', 'Business', 'Development'].map((cat) => (
                <button key={cat} className="px-6 py-2 rounded-full border border-brand-border text-[10px] font-bold uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all text-brand-secondary">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {otherPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="group block space-y-8">
                  <div className="aspect-[16/10] rounded-[48px] overflow-hidden relative shadow-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-black">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-brand-accent font-mono text-[10px] uppercase tracking-[0.2em] font-bold">{post.date}</span>
                      <div className="w-1 h-1 bg-brand-border rounded-full" />
                      <span className="text-brand-secondary font-mono text-[10px] uppercase tracking-[0.2em]">{post.readTime}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-brand-accent transition-colors leading-tight tracking-tight uppercase">
                      {post.title}
                    </h3>
                    <p className="text-brand-secondary text-lg font-light leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-48 p-10 md:p-32 rounded-[40px] md:rounded-[60px] bg-black text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 blur-[120px] rounded-full -z-10 group-hover:bg-brand-accent/20 transition-colors duration-700" />
            <div className="max-w-3xl">
              <div className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-8">Newsletter</div>
              <h2 className="text-4xl md:text-8xl font-bold mb-10 tracking-tighter uppercase leading-[0.9] md:leading-[0.85]">Stay ahead <br /> of the curve.</h2>
              <p className="text-white/60 text-lg md:text-xl mb-16 font-light leading-relaxed max-w-xl">
                Get the latest insights on business automation and AI delivered straight to your inbox every month.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-4 text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-10 py-8 rounded-[32px] max-w-xl animate-in fade-in slide-in-from-bottom-4">
                  <CheckCircle2 className="flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white uppercase tracking-tight">You're on the list!</h3>
                    <p className="text-emerald-500/80 font-light">Thanks for subscribing to our newsletter.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                  className="flex flex-col sm:flex-row gap-4 max-w-xl"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="flex-grow bg-white/10 border border-white/10 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-brand-accent transition-colors text-lg"
                  />
                  <button className="bg-brand-accent text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
