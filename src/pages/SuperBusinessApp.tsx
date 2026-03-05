import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Users,
    BarChart3,
    PackageSearch,
    ClipboardList,
    Smartphone,
    BrainCircuit,
    Building2,
    Store,
    Truck,
    Stethoscope,
    GraduationCap
} from 'lucide-react';

export default function SuperBusinessApp() {
    useEffect(() => {
        // SEO Settings
        document.title = "Super Business App | All-in-One CRM HRM Inventory Business Platform";

        // Add meta description if it doesn't exist, update if it does
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Super Business App is an all-in-one business management platform integrating CRM, HRM, inventory management, billing systems, and mobile workforce apps to automate and manage modern organizations.');

        // Add meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'super business app, business management software, crm hrm inventory software, enterprise automation platform, mobile workforce management, integrated business software, all in one business platform');
    }, []);

    const features = [
        {
            icon: Users,
            title: "Customer Relationship Management (CRM)",
            description: "Manage leads, automate sales pipelines, and track all customer interactions in one unified dashboard."
        },
        {
            icon: ClipboardList,
            title: "Human Resource Management (HRM)",
            description: "Automate payroll, track employee attendance, manage leaves, and streamline your entire hiring process."
        },
        {
            icon: PackageSearch,
            title: "Inventory and Billing System",
            description: "Real-time stock tracking, multi-warehouse management, and lightning-fast GST-compliant billing."
        },
        {
            icon: BarChart3,
            title: "Project and Task Management",
            description: "Assign tasks, track project deadlines, and monitor team productivity with visual Kanban boards."
        },
        {
            icon: Smartphone,
            title: "Mobile Workforce Apps",
            description: "Dedicated iOS and Android apps for field staff to log updates, capture expenses, and manage tasks on the go."
        },
        {
            icon: BrainCircuit,
            title: "AI Business Insights and Analytics",
            description: "Predictive analytics and automated reporting that turns the raw data into actionable decision-making intelligence."
        }
    ];

    const industries = [
        { icon: Building2, name: "Real Estate Companies" },
        { icon: Store, name: "Retail Chains and Department Stores" },
        { icon: Truck, name: "Logistics and Transportation Companies" },
        { icon: Stethoscope, name: "Healthcare Clinics and Hospitals" },
        { icon: GraduationCap, name: "Coaching Institutes and Educational Organizations" }
    ];

    const benefits = [
        "Automation of tedious business processes",
        "Real-time operational visibility across departments",
        "Improved team productivity and collaboration",
        "Centralized business data eliminating data silos",
        "Scalable digital infrastructure for rapid growth"
    ];

    return (
        <div className="flex flex-col bg-brand-bg text-white">
            {/* HERO SECTION */}
            <section className="relative pt-48 pb-32 overflow-hidden flex items-center min-h-[85vh]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[120px] rounded-full -z-10" />

                <div className="container-wide px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent font-mono text-xs uppercase tracking-widest mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                            The Ultimate Enterprise Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
                        >
                            Run Your Entire Business <br />
                            From One <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Intelligent Platform</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-brand-secondary max-w-3xl mx-auto leading-relaxed font-light mb-12"
                        >
                            An all-in-one business management system integrating CRM, HRM, inventory, billing, project tools, and mobile workforce apps.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group"
                            >
                                Request Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PLATFORM OVERVIEW & BENEFITS */}
            <section className="py-24 border-y border-brand-border bg-brand-card/30 relative">
                <div className="container-wide px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                                A Unified Business <span className="text-brand-accent">Operating System</span>
                            </h2>
                            <p className="text-brand-secondary text-lg leading-relaxed mb-8">
                                The Super Business App eliminates the chaos of disjointed software. It is a unified business operating system combining powerful software dashboards and intuitive mobile apps. Automate daily operations, manage your teams effortlessly, and analyze your entire business performance in real time—all from a single login.
                            </p>

                            <div className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-brand-card border border-brand-border/50">
                                        <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0" />
                                        <span className="text-gray-300 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* HOW THE PLATFORM WORKS - VISUAL FLOW */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-brand-card border border-brand-border rounded-[40px] p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-bold mb-10 text-center tracking-wide uppercase text-brand-secondary">How It Works</h3>

                            <div className="relative">
                                {/* Flow Path Line */}
                                <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-accent via-blue-500 to-green-500 hidden md:block"></div>

                                <div className="space-y-12">
                                    {/* Step 1 */}
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-brand-bg border-2 border-brand-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-accent/20">
                                            <Smartphone size={32} className="text-brand-accent" />
                                        </div>
                                        <div className="text-center md:text-left mt-2 md:mt-0">
                                            <h4 className="text-xl font-bold text-white mb-2">1. Mobile Apps for Employees</h4>
                                            <p className="text-brand-secondary">Field staff and employees interact seamlessly through dedicated mobile applications, logging data in real-time from anywhere.</p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-brand-bg border-2 border-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.138 20.1983 10.2036 17.8863 10.0249C17.4339 6.64367 14.4981 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2334 4.0114 11.4642 4.03362 11.6912C2.30232 12.3571 1 14.0537 1 16C1 18.7614 3.23858 21 6 21H18" /></svg>
                                        </div>
                                        <div className="text-center md:text-left mt-2 md:mt-2">
                                            <h4 className="text-xl font-bold text-white mb-2">2. Secure Cloud Platform</h4>
                                            <p className="text-brand-secondary">All actions, sales, tasks, and communications are instantly synchronized to our ultra-secure enterprise cloud backend.</p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-brand-bg border-2 border-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                                            <BarChart3 size={32} className="text-green-500" />
                                        </div>
                                        <div className="text-center md:text-left mt-2 md:mt-2">
                                            <h4 className="text-xl font-bold text-white mb-2">3. Business Management Dashboard</h4>
                                            <p className="text-brand-secondary">Managers and owners monitor operations, approve workflows, and analyze performance via the centralized web dashboard.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CORE FEATURES */}
            <section className="py-32">
                <div className="container-wide px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            Powerful Core <span className="text-brand-accent">Modules</span>
                        </h2>
                        <p className="text-xl text-brand-secondary font-light">
                            Replace multiple software subscriptions with our completely integrated suite of enterprise tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-brand-card border border-brand-border p-8 rounded-[32px] hover:border-brand-accent/50 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center mb-8 group-hover:border-brand-accent group-hover:scale-110 transition-all">
                                    <feature.icon size={24} className="text-brand-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">{feature.title}</h3>
                                <p className="text-brand-secondary leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SECTION */}
            <section className="py-24 bg-brand-card/50 border-t border-brand-border overflow-hidden">
                <div className="container-wide px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Industries We Serve</h2>

                    <div className="flex flex-wrap justify-center gap-6">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex items-center gap-4 bg-brand-card border border-brand-border px-8 py-5 rounded-full hover:border-brand-accent transition-colors"
                            >
                                <ind.icon size={24} className="text-brand-accent" />
                                <span className="font-bold text-gray-200 tracking-wide">{ind.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-accent/20 blur-[150px] rounded-full -z-10" />

                <div className="container-wide px-6">
                    <div className="bg-brand-card border border-brand-border rounded-[40px] md:rounded-[80px] p-10 md:p-32 text-center relative overflow-hidden max-w-6xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none" />

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 tracking-tighter text-white relative z-10"
                        >
                            Transform Your Business With <br className="hidden md:block" />
                            <span className="text-brand-accent">Intelligent Automation</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative z-10"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20 hover:bg-brand-accent hover:text-white group"
                            >
                                Book a Free Demo
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
