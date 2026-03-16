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
            icon: <LayoutDashboard className="w-8 h-8 text-orange-500" />,
            title: "CRM Software",
            description: "Build stronger customer relationships and close deals faster.",
            features: ["Lead tracking", "Sales pipeline", "Client management", "WhatsApp integration"],
            color: "orange"
        },
        {
            icon: <Database className="w-8 h-8 text-orange-500" />,
            title: "ERP System",
            description: "Unify your business operations from supply chain to inventory.",
            features: ["Inventory management", "Purchase management", "Supplier tracking", "Reports dashboard"],
            color: "orange"
        },
        {
            icon: <Users className="w-8 h-8 text-orange-500" />,
            title: "HR Management",
            description: "Empower your workforce with intelligent HR tools.",
            features: ["Employee records", "Attendance management", "Payroll system", "Performance tracking"],
            color: "orange"
        },
        {
            icon: <CreditCard className="w-8 h-8 text-orange-500" />,
            title: "Finance & Billing",
            description: "Take control of your cash flow and financial health.",
            features: ["Invoice generation", "Payment tracking", "Expense management", "Financial reports"],
            color: "orange"
        }
    ];

    const mobileApps = [
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Owner Dashboard App",
            features: ["Revenue analytics", "Business insights", "Notifications"],
            mockupColor: "from-orange-500 to-orange-600"
        },
        {
            icon: <Briefcase className="w-6 h-6 text-white" />,
            title: "Employee App",
            features: ["Task management", "Attendance tracking", "Project updates"],
            mockupColor: "from-gray-800 to-black"
        },
        {
            icon: <Target className="w-6 h-6 text-white" />,
            title: "Sales Team App",
            features: ["Lead tracking", "Client communication", "Deal updates"],
            mockupColor: "from-orange-400 to-orange-500"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Client Portal App",
            features: ["Orders", "Invoices", "Support requests"],
            mockupColor: "from-gray-700 to-gray-900"
        }
    ];

    const integrations = [
        { name: "WhatsApp Business", icon: <MessageSquare size={32} className="text-green-500" /> },
        { name: "SMS Gateway", icon: <MessageSquare size={32} className="text-blue-500" /> },
        { name: "Payment Gateways", icon: <CreditCard size={32} className="text-purple-500" /> },
        { name: "Email Systems", icon: <Mail size={32} className="text-red-500" /> },
        { name: "REST APIs", icon: <Network size={32} className="text-gray-700" /> }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-gray-900 font-sans selection:bg-orange-500/30 selection:text-orange-900">
            
            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-white">
                {/* Tech Gradient / Network Animation Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-50 to-gray-100/80 rounded-full blur-[80px] opacity-70 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                
                {/* Digital Network Grid overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)] pointer-events-none" />

                <div className="container-wide max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 mb-8"
                    >
                        <Shield size={16} />
                        <span className="text-sm font-semibold tracking-wide">Enterprise Grade SaaS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
                    >
                        NarenNet Company <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Cloud Platform</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-gray-600 font-medium mb-6"
                    >
                        The Complete SaaS Ecosystem for Modern Businesses
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-500 max-w-3xl font-normal leading-relaxed mb-12"
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
                            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-orange-500/25"
                        >
                            View Demo <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center"
                        >
                            Book Free Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. COMPANY ECOSYSTEM OVERVIEW */}
            <section className="py-24 px-6 bg-gray-50 relative border-t border-gray-100">
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Company Ecosystem Overview</h2>
                        <p className="text-xl text-gray-600">
                            NarenNet connects every part of your business into one intelligent cloud ecosystem where data flows automatically between departments.
                        </p>
                    </div>

                    {/* Visual Architecture Diagram */}
                    <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                            {/* Animated connecting lines (svg) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0px 0px 4px rgba(249, 115, 22, 0.2))' }}>
                                <motion.circle cx="50%" cy="50%" r="20%" stroke="#f97316" strokeWidth="2" fill="none" strokeDasharray="8 8" 
                                    animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} opacity="0.3" />
                                <motion.circle cx="50%" cy="50%" r="35%" stroke="#f97316" strokeWidth="1" fill="none" strokeDasharray="4 12" 
                                    animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} opacity="0.2" />
                            </svg>

                            {/* Center Node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <motion.div 
                                    animate={{ boxShadow: ['0 0 0 0 rgba(249, 115, 22, 0.4)', '0 0 0 20px rgba(249, 115, 22, 0)'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl shadow-orange-500/30 border-4 border-white"
                                >
                                    <CloudLightning size={48} className="mb-2" />
                                    <span className="font-bold text-center leading-tight">NarenNet<br/>Cloud</span>
                                </motion.div>
                            </div>

                            {/* Surrounding Nodes */}
                            {[
                                { name: "CRM System", icon: <Users size={24} />, pos: "top-[10%] left-1/2 -translate-x-1/2" },
                                { name: "ERP System", icon: <Database size={24} />, pos: "top-[25%] right-[10%] md:right-[20%]" },
                                { name: "HR Management", icon: <Briefcase size={24} />, pos: "bottom-[25%] right-[10%] md:right-[20%]" },
                                { name: "Sales Auto", icon: <Zap size={24} />, pos: "bottom-[10%] left-1/2 -translate-x-1/2" },
                                { name: "Finance", icon: <CreditCard size={24} />, pos: "bottom-[25%] left-[10%] md:left-[20%]" },
                                { name: "Analytics", icon: <PieChart size={24} />, pos: "top-[25%] left-[10%] md:left-[20%]" }
                            ].map((node, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                                    className={`absolute ${node.pos} bg-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-2 z-10 min-w[120px] hover:scale-105 transition-transform cursor-default group`}
                                >
                                    <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                        {node.icon}
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm md:text-base text-center">{node.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPANY SOFTWARE DEMOS */}
            <section className="py-24 px-6 bg-white relative">
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Core Modules</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Business Software</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {products.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[32px] bg-white border border-gray-200 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                            >
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 transition-opacity group-hover:opacity-100" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100">
                                            {product.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-8 border-b border-gray-100 pb-8">{product.description}</p>
                                    
                                    <ul className="space-y-4 mb-10 flex-1">
                                        {product.features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <CheckCircle2 size={20} className="text-orange-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="mt-auto relative z-10 pt-4">
                                    <Link to="/contact" className="w-full py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors flex items-center justify-center gap-2">
                                        View Demo <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MOBILE BUSINESS APPS */}
            <section className="py-32 px-6 bg-gray-50 relative border-y border-gray-100 overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
                
                <div className="container-wide max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Mobile First</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Business Apps for Teams on the Move</h2>
                        <p className="text-xl text-gray-600">Native mobile applications that keep your entire organization connected, no matter where they are working from.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mobileApps.map((app, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[32px] p-6 shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col group relative overflow-hidden"
                            >
                                <h3 className="text-xl font-bold text-gray-900 w-full mb-6 z-10 relative">{app.title}</h3>
                                
                                <div className="space-y-3 mb-8 z-10 relative flex-1">
                                    {app.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Abstract Phone Mockup inside the card */}
                                <div className="relative w-full aspect-[9/16] mt-4 z-10 translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gray-900 rounded-[32px] p-2 border-4 border-gray-200 shadow-lg">
                                        <div className={`w-full h-full rounded-[24px] bg-gradient-to-b ${app.mockupColor} flex flex-col p-4 relative overflow-hidden`}>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-900 rounded-b-xl z-20" />
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
            <section className="py-24 px-6 bg-white">
                <div className="container-wide max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-orange-100 rounded-3xl translate-x-4 translate-y-4 rounded-tl-[80px]" />
                            <div className="relative bg-white border border-gray-200 rounded-3xl rounded-tl-[80px] p-8 md:p-12 shadow-2xl">
                                <div className="absolute top-8 right-8 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                                    <Bot className="w-8 h-8 text-orange-500" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">AI Predictive Analytics Model</h4>
                                
                                {/* Abstract Data Viz */}
                                <div className="space-y-6">
                                    {[ 
                                        { label: "Sales Probabilities", val: "87%", width: "87%", color: "bg-orange-500" },
                                        { label: "Churn Risk", val: "12%", width: "12%", color: "bg-green-500" },
                                        { label: "Cash Flow Prediction", val: "+24%", width: "65%", color: "bg-blue-500" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm font-medium mb-2">
                                                <span className="text-gray-700">{stat.label}</span>
                                                <span className="text-gray-900 font-bold">{stat.val}</span>
                                            </div>
                                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
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
                            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Artificial Intelligence</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">AI-Powered Business Intelligence</h2>
                            <p className="text-xl text-gray-600 font-light">
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
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                                    <div className="mt-1 bg-white border border-orange-100 rounded-full p-1 shadow-sm">
                                        <Zap size={16} className="text-orange-500" />
                                    </div>
                                    <span className="text-lg text-gray-800 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. BUSINESS INTEGRATIONS */}
            <section className="py-24 px-6 bg-gray-900 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="container-wide max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Connect With Your Favorite Tools</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
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
                                className="w-40 h-40 bg-gray-800/80 backdrop-blur-md rounded-3xl border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800 transition-all flex flex-col items-center justify-center gap-4 group"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    {int.icon}
                                </div>
                                <span className="font-semibold text-sm text-gray-300 group-hover:text-white">{int.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-32 px-6 bg-orange-500 relative text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400 rounded-full blur-[100px] opacity-50 z-0" />
                
                <div className="container-wide max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                        Upgrade Your Company with NarenNet Cloud
                    </h2>
                    <p className="text-xl md:text-2xl text-orange-100 mb-12 font-medium">
                        Transform how your business operates with an intelligent SaaS ecosystem built for modern companies.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-5 bg-white text-orange-600 rounded-xl font-extrabold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-xl shadow-orange-900/20"
                        >
                            Request Demo
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-5 bg-orange-600 border border-orange-400 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors"
                        >
                            Talk to Our Team
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
