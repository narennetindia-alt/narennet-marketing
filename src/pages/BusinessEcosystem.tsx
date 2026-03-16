import { motion } from 'motion/react';
import { 
    ArrowRight, CheckCircle2, LayoutDashboard, Users, Workflow, 
    BarChart3, Settings, Smartphone, CloudLightning, MessageSquare, 
    Database, Shield, Globe, Bot, Server, CreditCard, ShoppingCart, 
    Mail, Zap, Network, Building2, Briefcase, PieChart, Send, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessEcosystem() {
    const products = [
        {
            icon: <LayoutDashboard className="w-8 h-8 text-brand-accent" />,
            title: "CRM Software",
            description: "Build stronger customer relationships and close deals faster.",
            features: ["Lead tracking", "Sales pipeline", "Client management", "WhatsApp integration"]
        },
        {
            icon: <Database className="w-8 h-8 text-brand-accent" />,
            title: "ERP System",
            description: "Unify your business operations from supply chain to inventory.",
            features: ["Inventory management", "Purchase management", "Supplier tracking", "Reports dashboard"]
        },
        {
            icon: <Users className="w-8 h-8 text-brand-accent" />,
            title: "HR Management",
            description: "Empower your workforce with intelligent HR tools.",
            features: ["Employee records", "Attendance management", "Payroll system", "Performance tracking"]
        },
        {
            icon: <CreditCard className="w-8 h-8 text-brand-accent" />,
            title: "Finance & Billing",
            description: "Take control of your cash flow and financial health.",
            features: ["Invoice generation", "Payment tracking", "Expense management", "Financial reports"]
        }
    ];

    const mobileApps = [
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Owner Dashboard App",
            features: ["Revenue analytics", "Business insights", "Notifications"],
            mockupColor: "from-brand-accent/80 to-brand-accent"
        },
        {
            icon: <Briefcase className="w-6 h-6 text-white" />,
            title: "Employee App",
            features: ["Task management", "Attendance tracking", "Project updates"],
            mockupColor: "from-brand-card to-[#111]"
        },
        {
            icon: <Target className="w-6 h-6 text-white" />,
            title: "Sales Team App",
            features: ["Lead tracking", "Client communication", "Deal updates"],
            mockupColor: "from-[#222] to-black"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Client Portal App",
            features: ["Orders", "Invoices", "Support requests"],
            mockupColor: "from-[#1a1a1a] to-[#0a0a0a]"
        }
    ];

    const integrations = [
        { name: "WhatsApp Business", icon: <MessageSquare size={32} className="text-brand-accent" /> },
        { name: "SMS Gateway", icon: <MessageSquare size={32} className="text-white" /> },
        { name: "Payment Gateways", icon: <CreditCard size={32} className="text-brand-accent" /> },
        { name: "Email Systems", icon: <Mail size={32} className="text-white" /> },
        { name: "REST APIs", icon: <Network size={32} className="text-brand-secondary" /> }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-brand-bg text-brand-primary overflow-hidden selection:bg-brand-accent/30">
            
            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden">
                {/* Tech Gradient / Network Animation Background */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-blob animation-delay-2000 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

                <div className="container-wide max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-accent mb-8"
                    >
                        <Shield size={16} />
                        <span className="text-sm font-semibold tracking-wide uppercase text-brand-primary">Enterprise Grade SaaS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tighter text-white mb-6 leading-[0.9]"
                    >
                        NarenNet Company <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent">Cloud Platform</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-brand-primary font-medium mb-6 uppercase tracking-tight"
                    >
                        The Complete SaaS Ecosystem
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-brand-secondary max-w-3xl font-light leading-relaxed mb-12"
                    >
                        Run your entire company from one connected cloud platform including CRM, ERP, HR, Sales Automation, and AI-powered analytics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            View Demo <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>

                    {/* Hero Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full max-w-6xl mt-24 relative"
                    >
                        {/* Gradient mask at the bottom to blend into the next section */}
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg to-transparent z-20 pointer-events-none" />
                        
                        <div className="aspect-[16/9] rounded-[40px] border border-white/10 bg-brand-card overflow-hidden shadow-2xl relative p-2">
                            {/* Minimalist Dashboard Mockup */}
                            <div className="w-full h-full rounded-[32px] border border-white/5 bg-[#0a0a0a] overflow-hidden flex flex-col relative z-10">
                                {/* Top Bar */}
                                <div className="h-16 border-b border-white/5 flex items-center px-8 gap-4 bg-white/[0.02]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="ml-8 w-64 h-8 bg-white/5 rounded-xl border border-white/5" />
                                    <div className="ml-auto w-8 h-8 bg-brand-accent/20 rounded-full border border-brand-accent/30" />
                                </div>
                                {/* Main Canvas */}
                                <div className="flex-1 flex p-8 gap-8">
                                    {/* Sidebar */}
                                    <div className="w-64 flex flex-col gap-4">
                                        <div className="h-10 bg-brand-accent/20 border border-brand-accent/20 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                    </div>
                                    {/* Content area splitting */}
                                    <div className="flex-1 flex flex-col gap-8">
                                        <div className="flex gap-8 h-48">
                                            {/* Card 1 */}
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-48 h-12 bg-white/20 rounded" />
                                            </div>
                                            {/* Card 2 (Active/Brand) */}
                                            <div className="flex-1 bg-white/5 border border-brand-accent/20 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-24 h-12 bg-brand-accent/80 rounded" />
                                            </div>
                                            {/* Card 3 */}
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-32 h-12 bg-white/20 rounded" />
                                            </div>
                                        </div>
                                        {/* Chart Area */}
                                        <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
                                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-accent/5 to-transparent blur-xl" />
                                            <div className="w-full h-full border border-white/5 rounded-xl flex items-end p-8 gap-4 relative z-10">
                                                {[40, 70, 45, 90, 65, 80, 55, 100].map((height, i) => (
                                                    <div key={i} className="flex-1 bg-gradient-to-t from-brand-accent/40 to-brand-accent rounded-t-md hover:from-brand-accent/60 transition-colors" style={{ height: `${height}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. COMPANY ECOSYSTEM OVERVIEW */}
            <section className="py-24 px-6 relative z-20">
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ecosystem Overview</h2>
                        <p className="text-xl text-brand-secondary font-light">
                            NarenNet connects every part of your business into one intelligent cloud ecosystem where data flows automatically between departments.
                        </p>
                    </div>

                    {/* Visual Architecture Diagram */}
                    <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video rounded-[40px] border border-white/5 bg-black/50 overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                        {/* Animated connecting lines (svg) */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ filter: 'drop-shadow(0 0 8px rgba(242, 125, 38, 0.5))' }}>
                            <motion.line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                            <motion.line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                            <motion.line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                            <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                            <motion.line x1="50%" y1="50%" x2="15%" y2="70%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                            <motion.line x1="50%" y1="50%" x2="15%" y2="30%" stroke="#F27D26" strokeWidth="2" strokeDasharray="10 10" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
                        </svg>

                        {/* Center Hub */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(242,125,38,0.3)] filter backdrop-brightness-125 text-white"
                        >
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-brand-accent/30 flex flex-col items-center justify-center animate-pulse duration-3000">
                                <CloudLightning className="w-10 h-10 md:w-16 md:h-16 text-white mb-2" />
                                <span className="text-white font-bold text-sm md:text-base hidden sm:block text-center leading-tight">NarenNet<br/>Cloud</span>
                            </div>
                        </motion.div>

                        {/* Satellites */}
                        {[
                            { name: "CRM System", icon: Users, delay: 0.2, left: "50%", top: "15%" },
                            { name: "ERP System", icon: Database, delay: 0.3, left: "85%", top: "30%" },
                            { name: "HR Management", icon: Briefcase, delay: 0.4, left: "85%", top: "70%" },
                            { name: "Sales Auto", icon: Zap, delay: 0.5, left: "50%", top: "85%" },
                            { name: "Finance", icon: CreditCard, delay: 0.6, left: "15%", top: "70%" },
                            { name: "Analytics", icon: PieChart, delay: 0.7, left: "15%", top: "30%" }
                        ].map((node, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: node.delay, type: 'spring', stiffness: 100 }}
                                style={{ left: node.left, top: node.top }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 md:w-32 md:h-32 bg-white/[0.03] backdrop-blur-xl rounded-full md:rounded-[2rem] shadow-lg border border-white/10 flex flex-col items-center justify-center gap-2 hover:scale-110 hover:bg-white/[0.08] hover:border-brand-accent transition-all cursor-default group text-center p-2"
                            >
                                <node.icon className="w-6 h-6 md:w-8 md:h-8 text-brand-secondary group-hover:text-brand-accent transition-colors" />
                                <span className="font-bold text-white text-[10px] md:text-sm leading-tight px-1">{node.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. COMPANY SOFTWARE DEMOS */}
            <section className="py-24 px-6 relative bg-[#050505]">
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-4 block">Core Modules</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Explore Our Software</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                            {product.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white normal-case tracking-normal">{product.title}</h3>
                                    </div>
                                    
                                    <p className="text-brand-secondary mb-8 text-lg font-light leading-relaxed">{product.description}</p>
                                    
                                    <ul className="space-y-4 mb-10 flex-1">
                                        {product.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-brand-secondary font-light text-lg">
                                                <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="mt-auto relative z-10 pt-4">
                                    <Link to="/contact" className="w-full py-5 rounded-full border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                                        View Demo <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MOBILE BUSINESS APPS */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
                
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-4 block">Mobile First</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Business Apps for Teams</h2>
                        <p className="text-xl text-brand-secondary font-light">Native mobile applications that keep your entire organization connected, no matter where they are working from.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mobileApps.map((app, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.02] rounded-[40px] p-8 border border-white/5 flex flex-col group relative overflow-hidden"
                            >
                                <h3 className="text-2xl font-bold text-white w-full mb-6 z-10 relative break-words leading-tight normal-case tracking-normal">{app.title}</h3>
                                
                                <div className="space-y-4 mb-8 z-10 relative flex-1">
                                    {app.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-brand-secondary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0 shadow-[0_0_8px_rgba(242,125,38,0.8)]" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Abstract Phone Mockup inside the card */}
                                <div className="relative w-full aspect-[9/16] mt-4 z-10 translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-black rounded-[32px] p-2 border border-white/20 shadow-2xl">
                                        <div className={`w-full h-full rounded-[24px] bg-gradient-to-b ${app.mockupColor} flex flex-col p-4 relative overflow-hidden`}>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20" />
                                            {/* UI Mockup Elements */}
                                            <div className="h-8 flex justify-between items-center mb-6 mt-4">
                                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                                    {app.icon}
                                                </div>
                                                <div className="w-16 h-2 bg-white/20 rounded-full" />
                                            </div>
                                            <div className="flex-1 flex flex-col gap-3">
                                                <div className="w-full h-24 bg-white/10 rounded-xl backdrop-blur-sm" />
                                                <div className="w-full flex gap-3">
                                                    <div className="flex-1 h-16 bg-white/10 rounded-xl backdrop-blur-sm" />
                                                    <div className="flex-1 h-16 bg-white/10 rounded-xl backdrop-blur-sm" />
                                                </div>
                                                <div className="w-full flex-1 bg-white/10 rounded-xl backdrop-blur-sm mt-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. AI BUSINESS AUTOMATION */}
            <section className="py-32 px-6 bg-[#050505]">
                <div className="container-wide max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-brand-accent/20 rounded-[40px] translate-x-4 translate-y-4 filter blur-sm" />
                            <div className="relative bg-brand-card border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
                                <div className="absolute top-8 right-8 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                                    <Bot className="w-8 h-8 text-brand-accent" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-8 normal-case tracking-normal">Predictive Analytics</h4>
                                
                                {/* Abstract Data Viz */}
                                <div className="space-y-8">
                                    {[ 
                                        { label: "Sales Probabilities", val: "87%", width: "87%", color: "bg-brand-accent" },
                                        { label: "Churn Risk", val: "12%", width: "12%", color: "bg-white" },
                                        { label: "Cash Flow Prediction", val: "+24%", width: "65%", color: "bg-brand-secondary" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm font-medium mb-3">
                                                <span className="text-brand-secondary font-mono">{stat.label}</span>
                                                <span className="text-white font-bold font-mono">{stat.val}</span>
                                            </div>
                                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: stat.width }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                                                    className={`h-full ${stat.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 space-y-8">
                        <div>
                            <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-4 block">Artificial Intelligence</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">AI-Powered Intelligence</h2>
                            <p className="text-xl text-brand-secondary font-light leading-relaxed">
                                Stop guessing and start knowing. Our embedded AI agents analyze your company data across all modules to provide actionable insights.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Automated reports generated weekly",
                                "Smart sales predictions based on historical data",
                                "Customer behavior insights and churn warnings",
                                "Business performance analytics and anomalies"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <div className="mt-1">
                                        <Zap size={20} className="text-brand-accent" />
                                    </div>
                                    <span className="text-lg text-brand-primary font-light">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. BUSINESS INTEGRATIONS */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/5 to-transparent z-0" />
                <div className="container-wide max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Connect With Your Tools</h2>
                    <p className="text-xl text-brand-secondary font-light max-w-2xl mx-auto mb-20 leading-relaxed">
                        Seamlessly sync NarenNet with the applications you already use to create a truly unified workflow.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {integrations.map((int, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, type: "spring" }}
                                className="w-40 h-40 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-brand-accent/50 hover:bg-white/10 transition-all flex flex-col items-center justify-center gap-6 group"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    {int.icon}
                                </div>
                                <span className="font-semibold text-sm text-brand-secondary group-hover:text-white uppercase tracking-wider">{int.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-accent/10 z-0" />
                
                <div className="container-wide max-w-5xl mx-auto relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-8 leading-none">
                        Upgrade Your Company with <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">NarenNet Cloud</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-brand-secondary mb-16 font-light max-w-3xl mx-auto">
                        Transform how your business operates with an intelligent SaaS ecosystem built for modern companies.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/contact"
                            className="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                        >
                            Request Demo <ArrowRight size={24} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
                        >
                            Talk to Our Team
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
