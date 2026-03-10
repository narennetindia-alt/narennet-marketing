import logo from "../logo.png";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send, MessageCircle, Edit3, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    name: 'Ecosystem',
    path: '#',
    dropdown: [
      { name: 'Business Ecosystem Master', path: '/business-ecosystem' },
      { name: 'Super Business App', path: '/super-business-app' },
      { name: 'Hospitals', path: '/ecosystem/hospitals' },
      { name: 'Supermarkets', path: '/ecosystem/supermarkets' },
      { name: 'Mobile Apps Engine', path: '/ecosystem/mobile-apps' }
    ]
  },
  { name: 'Platform', path: '/platform' },
  { name: 'Services', path: '/solutions' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Launches', path: '/launches' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-brand-accent/20">
            <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter uppercase transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>NarenNet</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group/nav"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-accent flex items-center gap-1 ${(location.pathname === link.path || link.dropdown?.some(d => d.path === location.pathname)) ? 'text-brand-accent' : (scrolled ? 'text-gray-500' : 'text-gray-600')
                  }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
                    >
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="px-4 py-3 rounded-xl hover:bg-gray-50 text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-brand-accent transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
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
          className="lg:hidden p-2 rounded-xl bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 transition-colors"
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
            className="fixed inset-0 z-40 lg:hidden bg-brand-bg/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                  <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
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

            <div className="flex-grow flex flex-col justify-center gap-6 p-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === link.name ? null : link.name);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className={`text-3xl md:text-5xl font-bold tracking-tighter uppercase transition-all ${(location.pathname === link.path || link.dropdown?.some(d => d.path === location.pathname)) ? 'text-brand-accent' : 'text-white/40 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 text-white/40"
                      >
                        <ChevronDown size={32} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {link.dropdown && activeDropdown === link.name && (
                    <div className="flex flex-col gap-4 pl-6 border-l border-white/10">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-xl font-bold tracking-wider uppercase transition-all ${location.pathname === subItem.path ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
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
