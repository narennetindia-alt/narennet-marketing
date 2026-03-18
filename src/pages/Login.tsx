import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) navigate('/admin');
        });
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setIsLoading(false);
        } else {
            navigate('/admin');
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-accent/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-xl relative z-10"
            >
                <div className="bg-brand-deep border border-white/5 p-12 md:p-20 rounded-[64px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="flex justify-center mb-12 relative z-10">
                        <div className="w-24 h-24 rounded-[32px] bg-white flex items-center justify-center shadow-2xl ring-8 ring-white/5">
                            <ShieldCheck size={48} className="text-brand-deep" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tighter uppercase text-white leading-none">Admin Access</h1>
                    <p className="text-white/40 text-center mb-16 font-light text-lg">Secure login for NarenNet Business Control</p>

                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-2xl mb-12 text-sm text-center font-bold uppercase tracking-widest"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-6">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-accent transition-colors" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-lg font-medium placeholder:text-white/10"
                                    placeholder="admin@narennet.in"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-6">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-accent transition-colors" size={20} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-8 py-5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-lg font-medium placeholder:text-white/10"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand-accent text-white py-6 rounded-[32px] font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 mt-12 shadow-2xl shadow-brand-accent/20"
                        >
                            {isLoading ? (
                                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Sign In <LogIn size={24} /></>
                            )}
                        </button>
                    </form>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mt-16 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                    >
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Back to public site
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
