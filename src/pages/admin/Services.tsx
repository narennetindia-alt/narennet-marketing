import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
    AlertCircle
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
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">Services Management</h1>
                    <p className="text-brand-secondary text-sm md:text-base font-light">Define and manage your business offerings and pricing.</p>
                </div>

                <button
                    onClick={() => { setIsEditing(true); setCurrentService({ title: '', description: '', price: '', icon: 'Layout', image: '', category: '', type: 'solution', features: [], active: true }); }}
                    className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-[16px] md:rounded-[20px] bg-brand-accent text-white font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-accent/20 text-sm md:text-base"
                >
                    <Plus size={18} /> Add New Service
                </button>
            </div>

            {isEditing && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-card border border-brand-border rounded-[32px] md:rounded-[40px] p-8 md:p-12 card-glow text-white"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">{currentService.id ? 'Edit Service' : 'New Service'}</h2>
                        <button onClick={() => setIsEditing(false)} className="text-brand-secondary hover:text-white">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Service Title</label>
                            <input
                                type="text"
                                value={currentService.title}
                                onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="e.g., AI Consulting"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Category</label>
                            <input
                                type="text"
                                value={currentService.category || ''}
                                onChange={(e) => setCurrentService({ ...currentService, category: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="e.g. Retail Solutions"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Cover Image URL</label>
                            <input
                                type="text"
                                value={currentService.image || ''}
                                onChange={(e) => setCurrentService({ ...currentService, image: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="https://unsplash.com/..."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Pricing Range</label>
                            <input
                                type="text"
                                value={currentService.price}
                                onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all"
                                placeholder="e.g., $999 - $5000"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Icon Name</label>
                            <input
                                type="text"
                                value={currentService.icon}
                                onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all text-sm"
                                placeholder="Layout, Brain, Code..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Type</label>
                            <select
                                value={currentService.type || 'solution'}
                                onChange={(e) => setCurrentService({ ...currentService, type: e.target.value as any })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all appearance-none text-sm"
                            >
                                <option value="solution" className="bg-brand-bg text-gray-900">Solution</option>
                                <option value="plan" className="bg-brand-bg text-gray-900">Pricing Plan</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Service Description</label>
                            <textarea
                                rows={4}
                                value={currentService.description}
                                onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all resize-none"
                                placeholder="Provide a detailed description of the service offerings..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Features (comma separated)</label>
                            <textarea
                                rows={3}
                                value={currentService.features?.join(', ') || ''}
                                onChange={(e) => setCurrentService({ ...currentService, features: e.target.value.split(',').map(f => f.trim()).filter(f => f) })}
                                className="w-full bg-white/5 border border-brand-border rounded-2xl px-6 py-4 text-white focus:border-brand-accent outline-none transition-all resize-none text-sm"
                                placeholder="e.g., Inventory Tracking, Priority Support"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setCurrentService({ ...currentService, active: !currentService.active })}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${currentService.active ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-gray-500/10 text-gray-500 border border-gray-500/20'}`}
                            >
                                {currentService.active ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                                {currentService.active ? 'Active' : 'Inactive'}
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="w-full md:w-auto px-8 py-4 rounded-xl border border-brand-border text-brand-secondary font-bold hover:bg-white/5 transition-all text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="w-full md:w-auto px-8 py-4 rounded-xl bg-brand-accent text-white font-bold hover:scale-105 transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 text-sm"
                            >
                                <Save size={18} /> Save Service
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    [1, 2, 3].map(i => <div key={i} className="bg-brand-card border border-brand-border rounded-[40px] h-64 animate-pulse" />)
                ) : services.length === 0 ? (
                    <div className="col-span-full py-20 text-center text-brand-secondary italic bg-brand-card border border-brand-border rounded-[40px]">
                        No services defined. Add your first service to get started!
                    </div>
                ) : services.map((service, idx) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-brand-card border border-brand-border rounded-[32px] md:rounded-[40px] p-8 md:p-10 card-glow group relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-8">
                                <div className="space-y-1">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-2 overflow-hidden border border-brand-border">
                                        {service.image ? (
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <Briefcase size={32} />
                                        )}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2 py-1 rounded-md bg-brand-accent/5 inline-block">
                                        {service.type}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <button
                                        onClick={() => toggleStatus(service)}
                                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${service.active ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}
                                    >
                                        {service.active ? 'Active' : 'Hidden'}
                                    </button>
                                    <div className="text-[10px] font-bold text-brand-secondary mt-2 uppercase tracking-tighter">
                                        {service.category || 'No Category'}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-brand-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-brand-secondary text-sm font-light mb-6 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between pt-8 border-t border-brand-border mt-auto">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-white font-bold">
                                        <DollarSign size={16} className="text-brand-accent" />
                                        <span>{service.price || 'Contact for price'}</span>
                                    </div>
                                    {service.features && service.features.length > 0 && (
                                        <span className="text-[10px] text-brand-secondary mt-1">{service.features.length} features</span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => editService(service)}
                                        className="p-3 rounded-xl bg-white/5 text-brand-secondary hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="p-3 rounded-xl bg-red-500/5 text-red-400 hover:text-white hover:bg-red-500 transition-all"
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
