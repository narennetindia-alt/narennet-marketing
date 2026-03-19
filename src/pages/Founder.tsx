import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield, Cpu, Code2, Globe2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Founder() {
    return (
        <div className="bg-brand-bg min-h-screen pt-32 pb-16 text-brand-primary overflow-hidden">
            <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">

                {/* Back Link */}
                <Link
                    to="/about"
                    className="inline-flex items-center text-brand-secondary hover:text-brand-accent transition-colors mb-12 font-bold text-sm uppercase tracking-widest mx-auto md:mx-0"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to About Us
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center md:items-center text-center md:text-left">
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-4 bg-brand-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-[40px] bg-brand-deep border-4 border-white shadow-2xl flex items-center justify-center relative z-10 overflow-hidden mx-auto">
                                <span className="text-5xl sm:text-7xl text-white font-black">NC</span>
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent" />
                            </div>
                        </div>

                        <div className="flex-grow w-full">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-black uppercase tracking-widest mb-6"
                            >
                                Visionary & Architect
                            </motion.div>
                            <h1 className="text-2xl sm:text-7xl font-black text-brand-primary mb-6 tracking-tighter leading-tight whitespace-nowrap sm:whitespace-normal">
                                Narendhiran C
                            </h1>
                            <p className="text-xl sm:text-2xl text-brand-secondary font-light mb-8 max-w-xl mx-auto md:mx-0">
                                Founder & CEO of <span className="text-brand-accent font-black">NarenNet Technologies</span>
                            </p>
                            <div className="flex justify-center md:justify-start gap-8">
                                <a href="https://www.linkedin.com/in/narennet" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-accent transition-all flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]">
                                    <span className="w-8 h-8 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border"><ExternalLink size={14} /></span> LinkedIn
                                </a>
                                <a href="https://twitter.com/Narennetindia" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-accent transition-all flex items-center gap-2 font-bold uppercase tracking-widest text-[11px]">
                                    <span className="w-8 h-8 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border"><ExternalLink size={14} /></span> Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-20">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                                    <Globe2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-brand-primary tracking-tight">The Vision</h2>
                            </div>
                            <div className="text-xl text-brand-secondary leading-relaxed font-light space-y-6">
                                <p>
                                    I founded NarenNet with a singular, unyielding vision: to democratize enterprise-grade technology for businesses of all scales. In a rapidly evolving digital landscape, true competitive advantage shouldn't be gated behind massive IT budgets. My goal has always been to build solutions that bridge the gap—bringing advanced automation, robust infrastructure, and intelligent software to the forefront of everyday business operations.
                                </p>
                                <p>
                                    We are not just writing code; we are engineering efficiency, removing operational bottlenecks, and enabling founders and operational leaders to focus on scaling remarkable businesses.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-12 rounded-[40px] bg-brand-deep text-white shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full" />
                            <Quote className="text-brand-accent mb-8 opacity-40 group-hover:opacity-100 transition-opacity" size={48} />
                            <p className="text-2xl md:text-3xl italic font-light leading-relaxed relative z-10 mb-8">
                                "Our ambition is to embed AI so seamlessly into our ERP and CRM offerings that it becomes an invisible, massive multiplier of human capital."
                            </p>
                            <div className="w-12 h-1 bg-brand-accent rounded-full" />
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-brand-primary tracking-tight">Our Software Ecosystem</h2>
                            </div>
                            <div className="text-xl text-brand-secondary leading-relaxed font-light space-y-6">
                                <p>
                                    At NarenNet, our ecosystem is designed to be cohesive rather than disjointed. From high-throughput Retail POS systems running in active supermarkets, to sophisticated multi-tenant SaaS platforms, the underlying architecture is built on principles of modularity and supreme reliability.
                                </p>
                                <p>
                                    Our approach is the opposite of traditional off-the-shelf software: we build scalable, adaptive ecosystems—handling everything from GST billing and massive inventory syncs to real-time BI dashboards—that map perfectly to the unique operational DNA of our clients.
                                </p>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar Values */}
                    <div className="lg:col-span-4 space-y-8">
                         <div className="p-8 rounded-[32px] bg-white border border-brand-border shadow-sm">
                             <Cpu className="text-brand-accent mb-6" size={32} />
                             <h3 className="text-xl font-black mb-4 tracking-tight">AI Ambitions</h3>
                             <p className="text-brand-secondary text-sm leading-relaxed font-light">
                                 We are moving beyond simple chatbots into truly agentic business intelligence, where AI handles predictive forecasting and customer resolution.
                             </p>
                         </div>
                         <div className="p-8 rounded-[32px] bg-white border border-brand-border shadow-sm">
                             <Shield className="text-brand-accent mb-6" size={32} />
                             <h3 className="text-xl font-black mb-4 tracking-tight">Security First</h3>
                             <p className="text-brand-secondary text-sm leading-relaxed font-light">
                                 From Zero Trust configurations to penetration testing, we ensure that our partners' data remains impenetrable. Trust is our ultimate currency.
                             </p>
                         </div>
                    </div>
                </div>

                {/* CTA — DARK CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 p-12 md:p-20 rounded-[60px] bg-brand-deep border border-white/5 text-center relative overflow-hidden group shadow-2xl text-white"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full -z-10 group-hover:bg-brand-accent/15 transition-colors duration-700" />
                    <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white uppercase">Let's build something remarkable.</h3>
                    <p className="text-white/50 mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Looking for a digital transformation partner that understands both robust engineering and business scale?
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex h-16 items-center justify-center rounded-2xl bg-brand-accent px-12 font-black text-white transition-all hover:scale-105 shadow-2xl shadow-brand-accent/30 text-xl"
                    >
                        Connect with NarenNet
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
