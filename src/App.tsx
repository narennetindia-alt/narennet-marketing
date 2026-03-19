import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link
} from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

/* Layout Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

/* Marketing Pages */
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Launches from "./pages/Launches";
import FaqPage from "./pages/Faq";
import Founder from "./pages/Founder";
import BusinessEcosystem from "./pages/BusinessEcosystem";
import SuperBusinessApp from "./pages/SuperBusinessApp";

/* Ecosystem Pages */
import Hospitals from "./pages/ecosystem/Hospitals";
import Supermarkets from "./pages/ecosystem/Supermarkets";
import MobileApps from "./pages/ecosystem/MobileApps";
import Platform from "./pages/Platform";

/* Admin Pages */
import Dashboard from "./pages/admin/Dashboard";
import Blogs from "./pages/admin/Blogs";
import Leads from "./pages/admin/Leads";
import Profiles from "./pages/admin/Profiles";
import Settings from "./pages/admin/Settings";
import Faqs from "./pages/admin/Faqs";
import Services from "./pages/admin/Services";

/* Auth */
import Login from "./pages/Login";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/* Floating Book Demo Button */
function FloatingBookDemo() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <Link
      to="/contact"
      aria-label="Book a free demo"
      className="fixed bottom-6 left-6 z-[999] group"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="relative flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-white shadow-2xl"
        style={{ background: 'var(--color-brand-accent)', boxShadow: '0 8px 32px rgba(14,165,233,0.45)' }}
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-brand-deep animate-pulse" />
        🗓 Book Free Demo
      </motion.div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
          Free 30-min consultation
        </div>
      </div>
    </Link>
  );
}
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918438966728?text=Hi%20NarenNet%2C%20I%20want%20to%20learn%20more%20about%20your%20ERP%20system."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 relative z-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.112 1.524 5.837L.057 23.743a.5.5 0 0 0 .6.6l5.906-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.098-1.4l-.363-.216-3.754.932.948-3.753-.234-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </motion.div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </div>
      </div>
    </a>
  );
}

function AppContent() {
  const location = useLocation();

  // Robust env checks (support both boolean and string "true" from different environments)
  const isPublicOnly = import.meta.env.VITE_PUBLIC_ONLY === true || import.meta.env.VITE_PUBLIC_ONLY === 'true';
  const isAdminOnly = import.meta.env.VITE_ADMIN_ONLY === true || import.meta.env.VITE_ADMIN_ONLY === 'true';

  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      {/* Hide navbar in admin */}
      {!isAdminRoute && !isAdminOnly && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* ================= PUBLIC WEBSITE ================= */}
          {!isAdminOnly && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/launches" element={<Launches />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/founder-narendhiran-c" element={<Founder />} />
              <Route path="/business-ecosystem" element={<BusinessEcosystem />} />
              <Route path="/super-business-app" element={<SuperBusinessApp />} />

              {/* Ecosystem & Platform */}
              <Route path="/ecosystem/hospitals" element={<Hospitals />} />
              <Route path="/ecosystem/supermarkets" element={<Supermarkets />} />
              <Route path="/ecosystem/mobile-apps" element={<MobileApps />} />
              <Route path="/platform" element={<Platform />} />
            </>
          )}

          {/* ================= LOGIN ================= */}
          {!isPublicOnly && (
            <Route path="/login" element={<Login />} />
          )}

          {/* ================= ADMIN ================= */}
          {!isPublicOnly && (
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="leads" element={<Leads />} />
              <Route path="users" element={<Profiles />} />
              <Route path="settings" element={<Settings />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="services" element={<Services />} />
            </Route>
          )}

          {/* ================= ADMIN BUILD ROOT REDIRECT ================= */}
          {isAdminOnly && (
            <Route path="/" element={<Navigate to="/admin" replace />} />
          )}

          {/* ================= STATIC 404 FALLBACK ================= */}
          {/* We use a static page instead of a redirect to Home to prevent infinite loops */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
              <h1 className="text-6xl font-black text-white mb-4">404</h1>
              <p className="text-brand-secondary mb-8">The page you are looking for doesn't exist.</p>
              <Navigate to="/" replace />
            </div>
          } />
        </Routes>
      </main>

      {/* Hide footer in admin */}
      {!isAdminRoute && !isAdminOnly && <Footer />}

      {/* Floating WhatsApp — hidden on admin routes */}
      {!isAdminRoute && !isAdminOnly && <FloatingWhatsApp />}

      {/* Floating Book Demo — hidden on admin routes */}
      {!isAdminRoute && !isAdminOnly && <FloatingBookDemo />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
