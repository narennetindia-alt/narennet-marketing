import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Save,
    X,
    Briefcase,
    DollarSign,
    Layout,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Zap
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

interface Service {
    id: string;
    title: string;
    description: string;
    price: string;
    icon: string;
    image: string | null;
    category: string | null;
    type: 'solution' | 'plan';
    features: string[] | null;
    active: boolean;
    created_at: string;
}

export default function Services() {
    const [services, setServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentService, setCurrentService] = useState<Partial<Service>>({
        title: '',
        description: '',
        price: '',
        icon: 'Layout',
        image: '',
        category: '',
        type: 'solution',
        features: [],
        active: true
    });

    const fetchServices = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('created_at', { ascending: false });
        if (data) setServices(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleSave = async () => {
        if (!currentService.title || !currentService.description) return;

        const serviceData = {
            ...currentService,
            updated_at: new Date().toISOString()
        };

        if (currentService.id) {
            await supabase.from('services').update(serviceData).eq('id', currentService.id);
        } else {
            await supabase.from('services').insert([serviceData]);
        }

        setIsEditing(false);
        setCurrentService({ title: '', description: '', price: '', icon: 'Layout', image: '', category: '', type: 'solution', features: [], active: true });
        fetchServices();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) return;
        await supabase.from('services').delete().eq('id', id);
        fetchServices();
    };

    const toggleStatus = async (service: Service) => {
        const { error } = await supabase
            .from('services')
            .update({ active: !service.active })
            .eq('id', service.id);
        if (!error) fetchServices();
    };

    const editService = (service: Service) => {
        setCurrentService(service);
        setIsEditing(true);
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 text-brand-primary uppercase">Service <span className="text-brand-accent">Management</span></h1>
                    <p className="text-brand-secondary text-lg font-light">Define and manage your business offerings and pricing.</p>
                </div>

                <button
                    onClick={() => { setIsEditing(true); setCurrentService({ title: '', description: '', price: '', icon: 'Layout', image: '', category: '', type: 'solution', features: [], active: true }); }}
                    className="w-full md:w-auto px-8 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-deep/20"
                >
                    <Plus size={20} /> Add New Service
                </button>
            </div>

            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        className="bg-white border border-brand-border rounded-[48px] p-10 md:p-16 shadow-2xl text-brand-primary relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="flex items-center justify-between mb-12 relative z-10">
                            <h2 className="text-3xl font-black uppercase tracking-tighter">{currentService.id ? 'Refine' : 'Initialize'} <span className="text-brand-accent">Offering</span></h2>
                            <button onClick={() => setIsEditing(false)} className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-secondary hover:bg-brand-bg hover:text-brand-primary transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Service Identity</label>
                                <input
                                    type="text"
                                    value={currentService.title}
                                    onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-bold text-base placeholder:text-brand-secondary/20"
                                    placeholder="e.g., AI Consulting"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Market Segment</label>
                                <input
                                    type="text"
                                    value={currentService.category || ''}
                                    onChange={(e) => setCurrentService({ ...currentService, category: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-black uppercase tracking-widest text-xs placeholder:text-brand-secondary/20"
                                    placeholder="e.g. Retail Solutions"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Visual Asset (URL)</label>
                                <input
                                    type="text"
                                    value={currentService.image || ''}
                                    onChange={(e) => setCurrentService({ ...currentService, image: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all text-xs font-mono placeholder:text-brand-secondary/20"
                                    placeholder="https://unsplash.com/..."
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Financial Structure</label>
                                <input
                                    type="text"
                                    value={currentService.price}
                                    onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-bold text-base placeholder:text-brand-secondary/20"
                                    placeholder="e.g., $999 - $5000"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Interactive Icon</label>
                                <input
                                    type="text"
                                    value={currentService.icon}
                                    onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all font-bold text-xs uppercase tracking-widest placeholder:text-brand-secondary/20"
                                    placeholder="Layout, Brain, Code..."
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Deployment Type</label>
                                <select
                                    value={currentService.type || 'solution'}
                                    onChange={(e) => setCurrentService({ ...currentService, type: e.target.value as any })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-2xl px-8 py-5 text-brand-primary focus:border-brand-accent outline-none transition-all appearance-none font-black uppercase tracking-widest text-xs cursor-pointer"
                                >
                                    <option value="solution">Enterprise Solution</option>
                                    <option value="plan">Licensing Plan</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-8 mb-12 relative z-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Value Proposition (Description)</label>
                                <textarea
                                    rows={4}
                                    value={currentService.description}
                                    onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-3xl px-8 py-6 text-brand-primary focus:border-brand-accent outline-none transition-all resize-none text-base font-medium leading-relaxed placeholder:text-brand-secondary/20"
                                    placeholder="Provide a detailed description of the service offerings..."
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary ml-6 opacity-40">Capabilities (Comma Separated)</label>
                                <textarea
                                    rows={2}
                                    value={currentService.features?.join(', ') || ''}
                                    onChange={(e) => setCurrentService({ ...currentService, features: e.target.value.split(',').map(f => f.trim()).filter(f => f) })}
                                    className="w-full bg-brand-bg border border-brand-border rounded-3xl px-8 py-6 text-brand-primary focus:border-brand-accent outline-none transition-all resize-none text-xs font-bold uppercase tracking-widest placeholder:text-brand-secondary/20"
                                    placeholder="e.g., Inventory Tracking, Priority Support"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 border-t border-brand-bg pt-10">
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-secondary opacity-40">Visibility</span>
                                <button
                                    onClick={() => setCurrentService({ ...currentService, active: !currentService.active })}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border ${currentService.active ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-orange-50 border-orange-100 text-orange-600'}`}
                                >
                                    {currentService.active ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                                    {currentService.active ? 'Operational' : 'On Hold'}
                                </button>
                            </div>

                            <div className="flex gap-6 w-full md:w-auto">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="flex-grow md:flex-none px-12 py-5 rounded-2xl border border-brand-border text-brand-secondary font-black uppercase tracking-widest text-xs hover:bg-brand-bg transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex-grow md:flex-none px-12 py-5 rounded-2xl bg-brand-deep text-white font-black uppercase tracking-widest text-xs hover:scale-[1.05] transition-all shadow-2xl shadow-brand-deep/30 flex items-center justify-center gap-3"
                                >
                                    <Save size={18} /> Deploy Service
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {isLoading ? (
                    [1, 2, 3].map(i => <div key={i} className="bg-white border border-brand-border rounded-[48px] h-80 animate-pulse shadow-sm" />)
                ) : services.length === 0 ? (
                    <div className="col-span-full py-32 text-center text-brand-secondary italic text-lg bg-white border border-brand-border rounded-[48px] shadow-sm">
                        Enterprise service catalog is currently unpopulated.
                    </div>
                ) : services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-white border border-brand-border rounded-[48px] p-10 relative group overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-deep/5 transition-all"
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-10">
                                <div className="space-y-4">
                                    <div className="w-20 h-20 rounded-3xl bg-brand-bg flex items-center justify-center text-brand-accent overflow-hidden border border-brand-border shadow-sm group-hover:bg-brand-accent/5 transition-colors">
                                        {service.image ? (
                                            <img src={service.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        ) : (
                                            <Briefcase size={36} className="group-hover:scale-110 transition-transform" />
                                        )}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-brand-deep/5 border border-brand-deep/10 text-brand-deep text-[8px] font-black uppercase tracking-widest inline-block">
                                        {service.type}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <button
                                        onClick={() => toggleStatus(service)}
                                        className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${service.active ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-orange-50 border-orange-100 text-orange-600'}`}
                                    >
                                        {service.active ? 'Public' : 'Hidden'}
                                    </button>
                                    <span className="text-[10px] font-black text-brand-secondary mt-3 uppercase tracking-tighter opacity-40">
                                        {service.category || 'Standard'}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-black mb-3 text-brand-primary uppercase tracking-tight leading-none group-hover:text-brand-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-brand-secondary text-sm font-medium leading-relaxed group-hover:text-brand-primary transition-colors line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-10 border-t border-brand-bg mt-auto">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-brand-primary font-black text-lg uppercase tracking-tight">
                                        <Zap size={18} className="text-brand-accent" />
                                        <span>{service.price || 'POA'}</span>
                                    </div>
                                    {service.features && service.features.length > 0 && (
                                        <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest opacity-40 mt-1">{service.features.length} Components</span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => editService(service)}
                                        className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-primary hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all shadow-sm"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-sm"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
