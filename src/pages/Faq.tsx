import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';

export default function FaqPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[60vh] flex items-center">
                <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
                    <div className="writing-mode-vertical text-[10vw] md:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
                        FAQ
                    </div>
                </div>

                <div className="container-wide px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-6"
                        >
                            Answers to your questions
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter uppercase text-white"
                        >
                            Frequently <br />
                            <span className="text-brand-accent">Asked</span> <br />
                            Questions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-brand-secondary max-w-xl leading-relaxed font-light"
                        >
                            Everything you need to know about NarenNet's services, software solutions, and how we can help your business grow.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-brand-bg pb-32">
                <div className="container-wide px-6 max-w-4xl">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${openIdx === idx
                                        ? 'bg-brand-card border-brand-accent/40'
                                        : 'bg-brand-card border-brand-border hover:border-brand-accent/30'
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between gap-6 p-8 text-left"
                                    aria-expanded={openIdx === idx}
                                >
                                    <span className="flex items-start gap-5">
                                        <span className="text-brand-accent/50 font-mono text-sm pt-1 flex-shrink-0">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-lg font-semibold text-white leading-snug">
                                            {faq.question}
                                        </span>
                                    </span>
                                    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-accent transition-all">
                                        {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIdx === idx && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        >
                                            <div className="px-8 pb-8 pl-20 text-brand-secondary leading-relaxed font-light text-base">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Still have questions CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mt-20 p-10 md:p-16 rounded-[40px] bg-brand-card border border-brand-border text-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full -z-10 group-hover:bg-brand-accent/10 transition-colors duration-700" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
                            Still have questions?
                        </h2>
                        <p className="text-brand-secondary mb-10 text-lg font-light max-w-xl mx-auto">
                            Our team is ready to walk you through any questions about our solutions, pricing, or implementation process.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20"
                        >
                            Contact Our Team <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
