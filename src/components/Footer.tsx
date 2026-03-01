import logo from "../logo.png";
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', path: '/about' },
      { name: 'Solutions', path: '/solutions' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Careers', path: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Enterprise SmartOS', path: '/solutions' },
      { name: 'Retail Automation', path: '/solutions' },
      { name: 'AI eCommerce Builder', path: '/solutions' },
      { name: 'Security & Cloud', path: '/solutions' },
      { name: 'SaaS Development', path: '/solutions' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact', path: '/contact' },
      { name: 'Documentation', path: '#' },
      { name: 'Help Center', path: '#' },
      { name: 'Privacy Policy', path: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-24 pb-12">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 overflow-hidden rounded-lg bg-white flex items-center justify-center group-hover:rotate-12 transition-transform">
                <img src={logo} alt="NarenNet Logo" />
              </div>
              <span className="text-xl font-bold tracking-tight">NarenNet</span>
            </Link>
            <p className="text-brand-secondary max-w-sm leading-relaxed">
              Empowering shops, supermarkets, and enterprises with billing, ERP, CRM, AI automation and growth tools — all under one platform.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/narennet" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center border border-brand-border hover:border-brand-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/narennet" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center border border-brand-border hover:border-brand-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCO6Cqc-Q2TzuRMGa-9J5gjw" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center border border-brand-border hover:border-brand-accent transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="font-semibold text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-brand-secondary text-sm">
            © {new Date().getFullYear()} NarenNet. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-brand-secondary text-sm hover:text-brand-accent transition-colors">
              <MapPin size={14} />
              <span>India, TamilNadu, Dharmapuri, Karimangalam</span>
            </a>
            <a href="mailto:narennetindia@gmail.com" className="flex items-center gap-2 text-brand-secondary text-sm hover:text-brand-accent transition-colors">
              <Mail size={14} />
              <span>narennetindia@gmail.com</span>
            </a>
            <a href="tel:+918438966728" className="flex items-center gap-2 text-brand-secondary text-sm hover:text-brand-accent transition-colors">
              <Phone size={14} />
              <span>+91 84389 66728</span>
            </a>
            <a href="https://wa.me/918438966728" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-brand-secondary text-sm hover:text-brand-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
