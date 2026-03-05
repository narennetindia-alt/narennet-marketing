import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Users, LayoutDashboard, MessageSquare, Database, Shield, Globe, Workflow, BarChart3, Bot, Settings, Server, Smartphone, CloudLightning } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessEcosystem() {
    const features = [
        {
            icon: <LayoutDashboard className="w-6 h-6 text-brand-accent" />,
            title: "CRM System",
            items: ["Lead management", "Sales pipeline tracking", "Customer interaction history", "Automated follow-ups"]
        },
        {
            icon: <Users className="w-6 h-6 text-[#9b87f5]" />,
            title: "HRM System",
            items: ["Employee database", "Payroll and attendance", "Hiring workflow", "Performance monitoring"]
        },
        {
            icon: <Workflow className="w-6 h-6 text-[#D946EF]" />,
            title: "Project Management",
            items: ["Kanban task boards", "Team collaboration", "Deadlines and progress tracking", "Project analytics"]
        },
        {
            icon: <MessageSquare className="w-6 h-6 text-[#0EA5E9]" />,
            title: "Company Communication",
            items: ["Internal company chat", "Team channels", "File sharing", "Video meetings"]
        }
    ];

    const aiAssistants = [
        {
            role: "CEO Assistant",
            icon: <BarChart3 className="w-8 h-8 text-brand-accent mb-6" />,
            features: ["Strategic insights", "Meeting summaries", "Business analytics"],
            gradient: "from-brand-accent/20 to-transparent"
        },
        {
            role: "HR Assistant",
            icon: <Users className="w-8 h-8 text-[#9b87f5] mb-6" />,
            features: ["Hiring analysis", "Employee performance insights", "Workforce planning"],
            gradient: "from-[#9b87f5]/20 to-transparent"
        },
        {
            role: "Operations Assistant",
            icon: <Settings className="w-8 h-8 text-[#D946EF] mb-6" />,
            features: ["Workflow automation", "Task management", "Operational insights"],
            gradient: "from-[#D946EF]/20 to-transparent"
        }
    ];

    const smePlans = [
        {
            name: "Starter SME",
            users: "Up to 25 employees",
            price: "$29",
            popular: false
        },
        {
            name: "Growth SME",
            users: "Up to 100 employees",
            price: "$79",
            popular: true
        },
        {
            name: "Pro SME",
            users: "Up to 300 employees",
            price: "$199",
            popular: false
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-brand-bg text-white overflow-hidden selection:bg-brand-accent/30">

            {/* SECTION 1 - HERO */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#9b87f5]/10 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-blob animation-delay-2000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                <div className="container-wide relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Database size={14} className="text-brand-accent" />
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary">Enterprise OS V2.0 Available</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-8"
                    >
                        One Platform.<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">Entire Company.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-secondary max-w-3xl font-light leading-relaxed mb-12"
                    >
                        AI-powered ecosystem for companies that combines CRM, HRM, project management, communication, and AI assistants into a single unified platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            Request Demo <ArrowRight size={20} />
                        </Link>
                        <a
                            href="#overview"
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            Explore Features
                        </a>
                    </motion.div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-full max-w-6xl mt-24 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />
                        <div className="aspect-[16/9] rounded-[40px] border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative p-2">
                            {/* Minimalist Dashboard Mockup */}
                            <div className="w-full h-full rounded-[32px] border border-white/5 bg-[#111] overflow-hidden flex flex-col">
                                {/* Top Bar */}
                                <div className="h-16 border-b border-white/5 flex items-center px-8 gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="ml-8 w-64 h-8 bg-white/5 rounded-lg" />
                                    <div className="ml-auto w-8 h-8 bg-white/5 rounded-full" />
                                </div>
                                {/* Main Canvas */}
                                <div className="flex-1 flex p-8 gap-8">
                                    {/* Sidebar */}
                                    <div className="w-64 flex flex-col gap-4">
                                        <div className="h-10 bg-brand-accent/20 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                        <div className="h-10 bg-white/5 rounded-xl w-full" />
                                    </div>
                                    {/* Content area splitting */}
                                    <div className="flex-1 flex flex-col gap-8">
                                        <div className="flex gap-8 h-48">
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#9b87f5]/20 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-48 h-12 bg-white/20 rounded" />
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-24 h-12 bg-white/20 rounded" />
                                            </div>
                                            <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9]/20 blur-3xl rounded-full" />
                                                <div className="w-32 h-6 bg-white/10 rounded mb-4" />
                                                <div className="w-32 h-12 bg-white/20 rounded" />
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-white/5 border border-white/5 rounded-3xl p-8">
                                            <div className="w-full h-full border border-white/5 rounded-xl flex items-end p-8 gap-4">
                                                {[40, 70, 45, 90, 65, 80, 55, 100].map((height, i) => (
                                                    <div key={i} className="flex-1 bg-gradient-to-t from-brand-accent/40 to-brand-accent rounded-t-sm" style={{ height: `${height}%` }} />
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

            {/* SECTION 2 - PLATFORM OVERVIEW */}
            <section id="overview" className="py-32 px-6 relative z-20">
                <div className="container-wide">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">A Complete Business Operating System</h2>
                        <p className="text-xl text-brand-secondary font-light">
                            Our platform replaces multiple disconnected tools by combining all business operations into a single ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {feature.icon}
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-bold mb-8">{feature.title}</h3>
                                <ul className="space-y-4">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-brand-secondary text-lg font-light">
                                            <CheckCircle2 size={20} className="text-brand-accent/50 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3 - ORGANIZATION STRUCTURE */}
            <section className="py-32 px-6 bg-[#050505]">
                <div className="container-wide">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1 space-y-8">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 blur-0">
                                <Workflow className="w-8 h-8 text-[#9b87f5]" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Smart Organizational Tree</h2>
                            <p className="text-xl text-brand-secondary leading-relaxed font-light">
                                Manage your entire company hierarchy digitally. Managers can track tasks, monitor employee performance in real-time, and ensure team progress aligns with broad company goals without micromanagement.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <span className="px-6 py-2 rounded-full border border-white/10 text-sm font-mono uppercase tracking-widest text-brand-secondary">Role-based Access</span>
                                <span className="px-6 py-2 rounded-full border border-white/10 text-sm font-mono uppercase tracking-widest text-brand-secondary">Real-time Sync</span>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 to-brand-accent/20 blur-[100px] opacity-30" />
                            {/* Abstract Org Chart UI */}
                            <div className="relative border border-white/10 rounded-[40px] bg-black/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl">
                                <div className="flex flex-col items-center gap-8">
                                    {/* Level 1 */}
                                    <div className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-center relative z-10 w-48 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                        <p className="font-bold text-lg">CEO</p>
                                    </div>
                                    {/* Connectors */}
                                    <div className="w-full h-12 border-t-2 border-l-2 border-r-2 border-brand-accent/30 rounded-t-xl relative -mt-10 mb-2 z-0 max-w-[80%]" />

                                    {/* Level 2 */}
                                    <div className="flex justify-between w-full max-w-lg gap-4 relative z-10">
                                        <div className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <p className="font-bold">COO</p>
                                        </div>
                                        <div className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                            <p className="font-bold">HR Manager</p>
                                        </div>
                                    </div>

                                    {/* Connectors */}
                                    <div className="w-full h-12 border-t-2 border-l-2 border-r-2 border-[#9b87f5]/30 rounded-t-xl relative -mt-6 mb-2 z-0 max-w-[90%]" />

                                    {/* Level 3 */}
                                    <div className="flex justify-between w-full gap-2 relative z-10">
                                        <div className="flex-1 px-2 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-sm">
                                            <p className="text-brand-secondary">Project Mgr</p>
                                        </div>
                                        <div className="flex-1 px-2 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-sm">
                                            <p className="text-brand-secondary">Sales Mgr</p>
                                        </div>
                                        <div className="flex-1 px-2 py-3 rounded-xl bg-white/5 border border-white/10 text-center text-sm">
                                            <p className="text-brand-secondary">Team Leads</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - AI ASSISTANTS */}
            <section className="py-32 px-6 relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container-wide relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">AI Assistants for Leadership</h2>
                        <p className="text-xl text-brand-secondary font-light">
                            Dedicated AI models that act as personal advisors, helping founders and managers make data-driven decisions faster.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aiAssistants.map((bot, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group p-10 rounded-[40px] bg-white/[0.02] border border-white/5 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-b ${bot.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                                        {bot.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-8 text-white">{bot.role}</h3>
                                    <div className="space-y-4 w-full">
                                        {bot.features.map((feature, i) => (
                                            <div key={i} className="px-6 py-4 rounded-2xl bg-black/40 border border-white/5 text-sm font-mono tracking-wide text-brand-secondary backdrop-blur-md">
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 - OFFLINE + ONLINE SYSTEM */}
            <section className="py-32 px-6 bg-[#050505]">
                <div className="container-wide text-center">
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 mb-12">
                        <Globe className="w-10 h-10 text-white opacity-80" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Work Even Without Internet</h2>
                    <p className="text-xl text-brand-secondary font-light max-w-3xl mx-auto mb-20 leading-relaxed">
                        Connectivity issues shouldn't stop your business. Our ecosystem runs locally on employee devices and seamlessly synchronizes with the cloud the moment a connection is restored.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
                        <div className="flex-1 p-8 rounded-[32px] border border-white/10 bg-black shadow-2xl relative w-full">
                            <Smartphone className="w-12 h-12 text-[#9b87f5] mb-6" />
                            <h4 className="text-xl font-bold mb-4">Local Operations</h4>
                            <p className="text-brand-secondary font-light">Employees work uninterrupted. Data generated is encrypted and stored safely on the device.</p>
                        </div>

                        <div className="flex-shrink-0 relative w-24 h-24 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-brand-accent/50 rounded-full"
                            />
                            <CloudLightning className="w-8 h-8 text-brand-accent" />
                        </div>

                        <div className="flex-1 p-8 rounded-[32px] border border-white/10 bg-black shadow-2xl relative w-full">
                            <Server className="w-12 h-12 text-[#0EA5E9] mb-6" />
                            <h4 className="text-xl font-bold mb-4">Cloud Sync</h4>
                            <p className="text-brand-secondary font-light">Background processes detect network restoration and merge state silently without conflicts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6 - SME PLANS */}
            <section className="py-32 px-6 relative">
                <div className="container-wide">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Solutions for Growing Companies</h2>
                        <p className="text-xl text-brand-secondary font-light">
                            Clear, transparent pricing designed to scale seamlessly with your organizational growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {smePlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`relative p-10 rounded-[40px] border flex flex-col ${plan.popular ? 'bg-white/5 border-white/20 scale-105 z-10 shadow-2xl shadow-brand-accent/5' : 'bg-black/50 border-white/5'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-accent text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-brand-secondary mb-8">{plan.users}</p>
                                <div className="flex items-baseline gap-2 mb-10">
                                    <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                                    <span className="text-brand-secondary">/mo</span>
                                </div>

                                <ul className="space-y-4 mb-12 flex-1">
                                    {["CRM Module", "HRM Module", "Project Management", "Mobile Employee App", "Basic AI Assistants", "Offline Sync"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-4 text-brand-secondary">
                                            <CheckCircle2 size={18} className={plan.popular ? "text-brand-accent" : "text-white/30"} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-full font-bold transition-all ${plan.popular ? 'bg-white text-black hover:scale-105' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                                    Start Free Trial
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7 & 8 - ENTERPRISE */}
            <section className="py-32 px-6 bg-gradient-to-b from-[#050505] to-black border-t border-white/5">
                <div className="container-wide text-center">
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase">Enterprise-Grade<br />Infrastructure</h2>
                    <p className="text-xl text-brand-secondary font-light max-w-3xl mx-auto mb-24 leading-relaxed">
                        For large scale organizations requiring deep customization, private cloud deployments, and sophisticated workflow automation tools built right in.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left max-w-6xl mx-auto mb-24">
                        <div className="space-y-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <Shield className="text-brand-accent" size={24} />
                                    <h4 className="text-2xl font-bold">Enterprise Core</h4>
                                </div>
                                <ul className="space-y-4 pl-10 border-l border-white/10 ml-3">
                                    <li className="text-brand-secondary text-lg">Everything in SME plans</li>
                                    <li className="text-brand-secondary text-lg">Advanced business analytics</li>
                                    <li className="text-brand-secondary text-lg">Custom workflow automation engines</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-4">
                                    <Zap className="text-[#9b87f5]" size={24} />
                                    <h4 className="text-2xl font-bold">Vibe Coding Tools</h4>
                                </div>
                                <ul className="space-y-4 pl-10 border-l border-white/10 ml-3">
                                    <li className="text-brand-secondary text-lg">Internal development tools</li>
                                    <li className="text-brand-secondary text-lg">Custom third-party integrations</li>
                                    <li className="text-brand-secondary text-lg">Dedicated sandbox environments</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-6 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-4">
                                    <Shield className="text-[#0EA5E9]" size={24} />
                                    <h4 className="text-2xl font-bold">Compliance & Support</h4>
                                </div>
                                <ul className="space-y-4 pl-10 border-l border-white/10 ml-3">
                                    <li className="text-brand-secondary text-lg">Enterprise SLA & security standards</li>
                                    <li className="text-brand-secondary text-lg">Dedicated 24/7 priority support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold mb-2">Enterprise Standard</h3>
                                <div className="text-5xl font-bold tracking-tighter mb-4">$999<span className="text-xl text-brand-secondary font-normal">/mo</span></div>
                                <p className="text-brand-secondary text-sm">Perfect for regional enterprise branches.</p>
                            </div>
                            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold mb-2">Enterprise Pro</h3>
                                <div className="text-5xl font-bold tracking-tighter mb-4">$2499<span className="text-xl text-brand-secondary font-normal">/mo</span></div>
                                <p className="text-brand-secondary text-sm">Full scale national implementations.</p>
                            </div>
                            <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden flex items-center justify-between group">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Custom Scale</h3>
                                    <p className="text-brand-secondary">Bespoke architecture</p>
                                </div>
                                <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-black font-bold group-hover:scale-105 transition-transform">
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9 - FINAL CTA */}
            <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-accent/5 z-0" />
                <div className="container-wide relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase"
                    >
                        Build Your Company's<br />
                        <span className="text-brand-accent">Digital Backbone</span>
                    </motion.h2>
                    <p className="text-xl md:text-3xl font-light text-brand-secondary mb-16 max-w-4xl mx-auto">
                        Transform your organization with an AI powered business ecosystem structured around growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/contact"
                            className="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                        >
                            Request Demo <Bot size={24} />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-12 py-6 bg-white/5 border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-colors flex items-center justify-center text-white"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
