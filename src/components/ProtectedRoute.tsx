import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (session?.user) {
                    setIsAuthenticated(true);

                    // Fetch profile to check role
                    const { data: profile, error } = await supabase
                        .from('profiles')
                        .select('role')
                        .eq('id', session.user.id)
                        .single();

                    if (!error && profile?.role === 'super_admin') {
                        setIsSuperAdmin(true);
                    } else {
                        setIsSuperAdmin(false);
                    }
                } else {
                    setIsAuthenticated(false);
                    setIsSuperAdmin(false);
                }
            } catch (err) {
                console.error('Auth check error:', err);
                setIsAuthenticated(false);
                setIsSuperAdmin(false);
            } finally {
                setIsLoading(false);
            }
        }

        checkAuth();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            if (session) {
                setIsAuthenticated(true);
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', session.user.id)
                    .single();
                setIsSuperAdmin(profile?.role === 'super_admin');
            } else {
                setIsAuthenticated(false);
                setIsSuperAdmin(false);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg">
                <div className="w-12 h-12 border-4 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (!isSuperAdmin) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg p-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
                <p className="text-gray-400 mb-8">You do not have the required permissions to access the Admin Panel.</p>
                <button
                    onClick={() => supabase.auth.signOut()}
                    className="px-6 py-2 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/80 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return <>{children}</>;
}
