import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Launches from './pages/Launches';
import Admin from './pages/admin/Blogs';
import Dashboard from './pages/admin/Dashboard';
import Leads from './pages/admin/Leads';
import Profiles from './pages/admin/Profiles';
import Settings from './pages/admin/Settings';
import Faqs from './pages/admin/Faqs';
import Services from './pages/admin/Services';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/launches" element={<Launches />} />
          {/* Admin Routes - Excluded in public marketing build */}
          {!import.meta.env.VITE_PUBLIC_ONLY && (
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="blogs" element={<Admin />} />
                      <Route path="leads" element={<Leads />} />
                      <Route path="users" element={<Profiles />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="faqs" element={<Faqs />} />
                      <Route path="services" element={<Services />} />
                    </Routes>
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
          )}

          {/* Login - Excluded in public marketing build */}
          {!import.meta.env.VITE_PUBLIC_ONLY && (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </main>
      {!isAdmin && <Footer />}
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
