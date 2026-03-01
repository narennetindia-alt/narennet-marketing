import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield, Cpu, Code2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Founder() {
    return (
        <div className="bg-brand-bg min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link
                    to="/about"
                    className="inline-flex items-center text-brand-secondary hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to About Us
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        {/* Elegant text block rather than an image avatar, since we don't have a source image */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                            <span className="text-4xl text-brand-accent font-bold">NC</span>
                        </div>

                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                                Narendhiran C
                            </h1>
                            <p className="text-xl text-brand-accent font-medium mb-4">
                                Founder & CEO, NarenNet Technologies
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/narennet" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors flex items-center">
                                    LinkedIn <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                                <a href="https://twitter.com/Narennetindia" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-white transition-colors flex items-center">
                                    Twitter <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12 text-brand-secondary leading-relaxed text-lg">

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Globe2 className="w-6 h-6 mr-3 text-brand-accent" />
                            The Vision
                        </h2>
                        <p className="mb-4">
                            I founded NarenNet with a singular, unyielding vision: to democratize enterprise-grade technology for businesses of all scales. In a rapidly evolving digital landscape, true competitive advantage shouldn't be gated behind massive IT budgets. My goal has always been to build solutions that bridge the gap—bringing advanced automation, robust infrastructure, and intelligent software to the forefront of everyday business operations.
                        </p>
                        <p>
                            We are not just writing code; we are engineering efficiency, removing operational bottlenecks, and enabling founders and operational leaders to focus on scaling remarkable businesses.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Code2 className="w-6 h-6 mr-3 text-brand-accent" />
                            Our Software Ecosystem
                        </h2>
                        <p className="mb-4">
                            At NarenNet, our ecosystem is designed to be cohesive rather than disjointed. From high-throughput Retail POS systems running in active supermarkets, to sophisticated multi-tenant SaaS platforms, the underlying architecture is built on principles of modularity and supreme reliability.
                        </p>
                        <p>
                            Our ERP solutions are tailored. We recognized early on that off-the-shelf software forces businesses to change their workflows. Our approach is the opposite: we build scalable, adaptive ecosystems—handling everything from GST billing and massive inventory syncs to real-time BI dashboards—that map perfectly to the unique operational DNA of our clients.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Cpu className="w-6 h-6 mr-3 text-brand-accent" />
                            AI Ambitions
                        </h2>
                        <p className="mb-4">
                            Artificial Intelligence is the defining technological shift of our generation, and integrating it into practical business workflows is my primary technical obsession. We are moving beyond simple chatbots into the realm of truly agentic business intelligence.
                        </p>
                        <p>
                            I envision an ecosystem where NarenNet's AI agents handle predictive inventory forecasting, automate first-line customer resolution, and intelligently parse thousands of data points to deliver actionable insights directly to business owners. Our ambition is to embed AI so seamlessly into our ERP and CRM offerings that it becomes an invisible, massive multiplier of human capital.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-brand-accent" />
                            Security Expertise
                        </h2>
                        <p className="mb-4">
                            In modern software, trust is the ultimate currency. With extensive experience in cloud infrastructure and cybersecurity hardening, I've embedded a "security-first" culture into NarenNet's engineering DNA.
                        </p>
                        <p>
                            Whether we are deploying a local cloud network for a healthcare provider or a highly available backend for a consumer application, we implement rigorous defenses. From strict Zero Trust configurations and penetration testing to automated database backups and real-time threat monitoring, we ensure that our partners' data remains impenetrable. Building great software is pointless if it isn't safe.
                        </p>
                    </motion.section>

                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 p-8 rounded-2xl border border-brand-secondary/20 bg-brand-surface/50 text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Let's build something remarkable.</h3>
                    <p className="text-brand-secondary mb-6">
                        Looking for a digital transformation partner that understands both robust engineering and business scale?
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 font-medium text-black transition-colors hover:bg-neutral-200"
                    >
                        Connect with NarenNet
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
