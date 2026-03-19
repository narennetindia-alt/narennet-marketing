import logo from "../logo.png";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Send, MessageCircle, Edit3, ChevronDown, Home, LayoutGrid, Layers, MoreHorizontal } from 'lucide-react';
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
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Launches', path: '/launches' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isLightPage = [
    '/pricing-retail-pos-india', 
    '/hospital-management-software-pricing', 
    '/erp-software-pricing-india',
  ].some(path => location.pathname === path || location.pathname.startsWith(path + '/'));

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 lg:py-4' : 'bg-transparent py-4 lg:py-8'}`}>
        <div className="container-wide flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 overflow-hidden rounded-xl bg-white flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-brand-accent/20">
            <img src={logo} alt="NarenNet" className="w-full h-full object-cover" />
          </div>
          <span className={`text-2xl font-display font-bold tracking-tighter uppercase transition-colors ${(scrolled || isLightPage) ? 'text-black' : 'text-white'}`}>NarenNet</span>
        </Link>


        {/* Desktop Nav Links */}
        <div className={`hidden lg:flex items-center gap-1 xl:gap-2 rounded-full px-3 py-2 border transition-all ${scrolled ? 'bg-black/5 border-black/5' : 'bg-white/5 border-white/10'} backdrop-blur-md shadow-sm`}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group/nav"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1 ${
                  (location.pathname === link.path || link.dropdown?.some(d => d.path === location.pathname)) 
                    ? 'text-brand-accent bg-brand-accent/10' 
                    : (scrolled || isLightPage ? 'text-gray-600 hover:bg-black/5 hover:text-black' : 'text-gray-200 hover:bg-white/10 hover:text-white')
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
          <div className={`flex items-center gap-6 transition-colors ${(scrolled || isLightPage) ? 'text-gray-500' : 'text-gray-600'}`}>
            <a href="#" className="hover:text-brand-accent transition-colors"><Send size={18} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><MessageCircle size={18} /></a>
          </div>

          <Link to="/contact" className="group flex items-center gap-4">
            <span className={`text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-brand-accent transition-colors ${(scrolled || isLightPage) ? 'text-black' : 'text-white'}`}>Get in touch</span>
            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center group-hover:bg-brand-accent/80 transition-colors shadow-lg shadow-brand-accent/20">
              <Edit3 size={18} className="text-white" />
            </div>
          </Link>
        </div>

        {/* Mobile Contact Button */}
        <div className="lg:hidden flex items-center">
          <Link to="/contact" className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white hover:bg-brand-accent/80 transition-colors shadow-lg shadow-brand-accent/20">
            <Edit3 size={18} />
          </Link>
        </div>
      </div>
    </nav>

    {/* Mobile Bottom Navigation Bar */}
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 flex items-center justify-around py-3 px-2 pb-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <Link 
        to="/" 
        onClick={() => setIsOpen(false)}
        className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === '/' ? 'text-brand-accent' : 'text-gray-400 hover:text-gray-900'}`}
      >
        <Home size={22} className={location.pathname === '/' ? 'fill-brand-accent/20' : ''} />
        <span className="text-[9px] font-bold uppercase tracking-wider">Home</span>
      </Link>
      
      <button 
        onClick={() => {
          setIsOpen(true);
          setActiveDropdown('Ecosystem');
        }}
        className={`flex flex-col items-center gap-1 transition-colors ${(activeDropdown === 'Ecosystem' && isOpen) || location.pathname.includes('/ecosystem') ? 'text-brand-accent' : 'text-gray-400 hover:text-gray-900'}`}
      >
        <LayoutGrid size={22} className={location.pathname.includes('/ecosystem') ? 'fill-brand-accent/20' : ''} />
        <span className="text-[9px] font-bold uppercase tracking-wider">Ecosystem</span>
      </button>

      <Link 
        to="/platform" 
        onClick={() => setIsOpen(false)}
        className={`flex flex-col items-center gap-1 transition-colors ${location.pathname === '/platform' ? 'text-brand-accent' : 'text-gray-400 hover:text-gray-900'}`}
      >
        <Layers size={22} className={location.pathname === '/platform' ? 'fill-brand-accent/20' : ''} />
        <span className="text-[9px] font-bold uppercase tracking-wider">Platform</span>
      </Link>

      <button 
        onClick={() => setIsOpen(true)}
        className={`flex flex-col items-center gap-1 transition-colors ${isOpen && activeDropdown !== 'Ecosystem' ? 'text-brand-accent' : 'text-gray-400 hover:text-gray-900'}`}
      >
        <Menu size={22} />
        <span className="text-[9px] font-bold uppercase tracking-wider">Menu</span>
      </button>
    </div>

    {/* Mobile Nav Drawer */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-[70] w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-xl font-display font-bold tracking-tighter text-black uppercase">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow flex flex-col py-6 overflow-y-auto px-6 gap-2 pb-24">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
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
                      className={`flex-grow py-4 text-base font-bold tracking-wide uppercase transition-colors ${
                        (location.pathname === link.path || link.dropdown?.some(d => d.path === location.pathname)) 
                          ? 'text-brand-accent' 
                          : 'text-gray-900 hover:text-brand-accent'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className={`p-4 text-gray-400 transition-transform ${activeDropdown === link.name ? 'rotate-180 text-brand-accent' : ''}`}
                      >
                        <ChevronDown size={20} />
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-4 pl-4 border-l-2 border-gray-100 ml-2">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
                                location.pathname === subItem.path ? 'text-brand-accent' : 'text-gray-500 hover:text-black'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 mb-20 lg:mb-0">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full bg-brand-accent text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-brand-accent/20"
              >
                <span>Get in touch</span>
                <Edit3 size={18} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
