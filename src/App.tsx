import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

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
