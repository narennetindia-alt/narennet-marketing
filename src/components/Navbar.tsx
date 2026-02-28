import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send, MessageCircle, Edit3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../logo.png";
const navLinks = [
  { name: 'Services', path: '/solutions' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Launches', path: '/launches' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="container-wide flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-brand-accent/20">
            <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter uppercase transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>NarenNet</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-accent ${location.pathname === link.path ? 'text-brand-accent' : (scrolled ? 'text-gray-500' : 'text-gray-600')}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-8">
          <div className={`flex items-center gap-6 transition-colors ${scrolled ? 'text-gray-500' : 'text-gray-600'}`}>
            <a href="#" className="hover:text-brand-accent transition-colors"><Send size={18} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><MessageCircle size={18} /></a>
          </div>

          <Link to="/contact" className="group flex items-center gap-4">
            <span className={`text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-brand-accent transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>Get in touch</span>
            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center group-hover:bg-brand-accent/80 transition-colors shadow-lg shadow-brand-accent/20">
              <Edit3 size={18} className="text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-brand-bg/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                  <img src="/src/logo.png" alt="NarenNet" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tighter uppercase text-white">NarenNet</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center gap-10 p-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-bold tracking-tighter uppercase transition-all ${location.pathname === link.path ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-12 border-t border-white/5">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between bg-brand-accent text-white px-10 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-brand-accent/20"
              >
                Get in touch <Edit3 size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
