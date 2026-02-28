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
        <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-brand-card border border-brand-border p-12 rounded-[40px] shadow-2xl card-glow">
                    <div className="flex justify-center mb-10">
                        <div className="w-20 h-20 rounded-3xl bg-brand-accent/10 flex items-center justify-center">
                            <ShieldCheck size={40} className="text-brand-accent" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-center mb-4 tracking-tighter uppercase text-white">Admin Access</h1>
                    <p className="text-brand-secondary text-center mb-12 font-light">Secure login for NarenNet Business Control</p>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl mb-8 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-secondary" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-brand-border rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-brand-accent transition-all text-white placeholder:text-gray-500"
                                    placeholder="admin@narennet.in"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-4">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-secondary" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-brand-border rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-brand-accent transition-all text-white placeholder:text-gray-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-brand-accent text-white py-5 rounded-[24px] font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 mt-8"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>Sign In <LogIn size={20} /></>
                            )}
                        </button>
                    </form>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full text-[10px] font-bold uppercase tracking-widest text-brand-secondary mt-10 hover:text-white transition-colors"
                    >
                        Back to public site
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
