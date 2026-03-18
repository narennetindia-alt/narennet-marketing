import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';

export default function FaqPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
            {/* 1. HERO SECTION — DARK */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white min-h-[60vh] flex items-center">
                <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-white/10 flex items-center justify-center overflow-hidden pointer-events-none">
                    <div className="writing-mode-vertical text-[10vw] md:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
                        FAQ
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[130px] -z-10 opacity-30" />

                <div className="container-wide px-6 relative z-10 w-full">
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-6 font-black"
                        >
                            Answers to your questions
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] tracking-tighter uppercase text-white"
                        >
                            Frequently <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Asked</span> <br />
                            Questions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/60 max-w-xl leading-relaxed font-light"
                        >
                            Everything you need to know about NarenNet's services, software solutions, and how we can help your business grow.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* 2. FAQ ACCORDION — LIGHT */}
            <section className="bg-brand-bg py-32">
                <div className="container-wide px-6 max-w-5xl">
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${openIdx === idx
                                        ? 'bg-white border-brand-accent shadow-2xl shadow-brand-accent/5 scale-[1.02]'
                                        : 'bg-white border-brand-border hover:border-brand-accent/40 hover:shadow-xl'
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between gap-6 p-8 md:p-10 text-left"
                                    aria-expanded={openIdx === idx}
                                >
                                    <span className="flex items-start gap-6">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIdx === idx ? 'bg-brand-accent text-white' : 'bg-brand-accent/10 text-brand-accent'}`}>
                                            <HelpCircle size={20} />
                                        </div>
                                        <span className={`text-xl md:text-2xl font-black leading-tight tracking-tight transition-colors ${openIdx === idx ? 'text-brand-primary' : 'text-brand-secondary group-hover:text-brand-primary'}`}>
                                            {faq.question}
                                        </span>
                                    </span>
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${openIdx === idx ? 'bg-brand-accent border-brand-accent text-white rotate-180' : 'border-brand-border text-brand-secondary'}`}>
                                        <Plus size={24} className={openIdx === idx ? 'hidden' : 'block'} />
                                        <Minus size={24} className={openIdx === idx ? 'block' : 'hidden'} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIdx === idx && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-8 md:px-10 pb-10 pl-24 md:pl-28 text-brand-secondary leading-relaxed font-light text-xl max-w-4xl">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Still have questions CTA — DARK CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-40 p-12 md:p-24 rounded-[60px] bg-brand-deep text-white text-center relative overflow-hidden group shadow-2xl border border-white/5"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full -z-10 group-hover:bg-brand-accent/15 transition-colors duration-700" />
                        <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">
                            Still have questions?
                        </h2>
                        <p className="text-white/50 mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Our team is ready to walk you through any questions about our solutions, pricing, or implementation process.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-4 bg-brand-accent text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/30"
                        >
                            Contact Our Team <ArrowRight size={24} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
