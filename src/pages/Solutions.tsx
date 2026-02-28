import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SolutionItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  category: string;
}

interface Category {
  title: string;
  description: string;
  items: SolutionItem[];
}

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.Briefcase;
  return <Icon className="text-brand-accent" />;
};

export default function Solutions() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('type', 'solution')
        .eq('active', true);

      if (data) {
        // Group by category
        const groups: { [key: string]: SolutionItem[] } = {};
        data.forEach((item: any) => {
          const cat = item.category || 'General';
          if (!groups[cat]) groups[cat] = [];
          groups[cat].push({
            id: item.id,
            name: item.title,
            description: item.description,
            icon: item.icon,
            image: item.image || `https://picsum.photos/seed/${item.id}/800/450`,
            category: cat
          });
        });

        const categoryList: Category[] = Object.keys(groups).map(key => ({
          title: key,
          description: `Custom ${key} tailored for your business needs.`,
          items: groups[key]
        }));
        setCategories(categoryList);
      }
      setIsLoading(false);
    };

    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[70vh] flex items-center">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            SOLUTIONS
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
              02.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-white"
            >
              Solutions for <br />
              Every <span className="text-brand-accent">Business</span> <br />
              Scale
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-secondary max-w-2xl leading-relaxed font-light"
            >
              From local shops to global enterprises, NarenNet provides the intelligent tools you need to automate, optimize, and grow.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-brand-bg pt-32 pb-24">
        <div className="container-wide px-6">
          <div className="space-y-40">
            {categories.map((category, catIdx) => (
              <div key={category.title} className="relative">
                <div className="flex flex-col lg:flex-row gap-12 mb-20 items-end justify-between">
                  <div className="max-w-xl">
                    <div className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-4">Category {catIdx + 1}</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{category.title}</h2>
                    <p className="text-brand-secondary text-xl font-light leading-relaxed">{category.description}</p>
                  </div>
                  <div className="h-px bg-brand-border flex-grow mx-12 hidden lg:block opacity-30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: itemIdx * 0.1 }}
                      className="rounded-[48px] bg-brand-card border border-brand-border overflow-hidden card-glow group flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                          {getIcon(item.icon)}
                        </div>
                      </div>

                      <div className="p-10 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-white">{item.name}</h3>
                        <p className="text-brand-secondary mb-10 leading-relaxed font-light text-lg flex-grow">{item.description}</p>
                        <a href="https://wa.me/918438966728" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-brand-accent group-hover:gap-6 transition-all">
                          Book a Demo <ArrowRight size={18} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-48 p-10 md:p-32 rounded-[40px] md:rounded-[60px] bg-brand-card border border-brand-border text-center overflow-hidden relative group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[120px] rounded-full -z-10 group-hover:bg-brand-accent/10 transition-colors duration-700" />
            <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter text-white">Not sure which solution <br /> is right for you?</h2>
            <p className="text-brand-secondary text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Our experts are ready to help you design the perfect software ecosystem for your specific business needs.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20">
              Talk to an Expert <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
