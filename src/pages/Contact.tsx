import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabaseClient';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Globe,
  Shield,
  Zap,
  Building2
} from 'lucide-react';
import { useState, FormEvent, ChangeEvent, FocusEvent, useRef, useEffect } from 'react';

interface FormData {
  fullName: string;
  businessType: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessType?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const businessTypes = [
  { value: 'supermarket', label: 'Supermarket' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'other', label: 'Other' }
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessType: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return undefined;
      case 'businessType':
        if (!value) return 'Please select a business type';
        return undefined;
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'phone':
        if (!value) return 'Phone number is required';
        if (!/^\+?[\d\s-]{10,}$/.test(value)) return 'Invalid phone format (min 10 digits)';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleDropdownSelect = (value: string) => {
    setFormData(prev => ({ ...prev, businessType: value }));
    setIsDropdownOpen(false);
    setTouched(prev => ({ ...prev, businessType: true }));
    const error = validateField('businessType', value);
    setErrors(prev => ({ ...prev, businessType: error }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        businessType: true,
        email: true,
        phone: true,
        message: true
      });
      return;
    }

    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 }
  };

  const getInputClassName = (name: string) => {
    const baseClass = "w-full bg-white border rounded-2xl px-6 py-4 focus:outline-none transition-all duration-300 text-brand-primary placeholder:text-gray-400 font-medium";
    const errorClass = touched[name] && errors[name as keyof FormErrors]
      ? "border-red-500 focus:ring-1 focus:ring-red-100 bg-red-50/10"
      : "border-brand-border focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <div className="flex flex-col bg-brand-bg text-brand-primary min-h-screen">
      {/* 1. HERO SECTION — DARK */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-deep text-white min-h-[60vh] flex items-center">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-white/10 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            CONTACT
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[130px] -z-10 opacity-30" />

        <div className="container-wide px-6 relative z-10 w-full">
          <div className="max-w-4xl relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-16 top-4 text-brand-accent/60 font-mono text-lg hidden xl:block"
            >
              05.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black mb-10 leading-[0.95] md:leading-[1] tracking-tighter uppercase text-white"
            >
              Let's Build <br />
              Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Great</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed font-light"
            >
              Ready to transform your business? Reach out to our team for a personalized consultation and software demo.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT — LIGHT */}
      <div className="bg-brand-bg pt-32 pb-24">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-4 space-y-16">
              <div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-black mb-8"
                >
                  Contact Info
                </motion.div>
                <h2 className="text-4xl font-black mb-12 tracking-tight text-brand-primary leading-tight">Get in touch <br/> directly</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-accent group-hover:shadow-lg transition-all shadow-sm">
                      <Mail className="text-brand-accent" size={28} />
                    </div>
                    <div>
                      <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mb-2 font-black">Email</p>
                      <p className="text-xl md:text-2xl font-black text-brand-primary break-all">hello@narennet.cloud</p>
                      <p className="text-white/40 text-sm font-medium mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center group-hover:border-brand-accent group-hover:shadow-lg transition-all shadow-sm">
                      <Phone className="text-brand-accent" size={28} />
                    </div>
                    <div>
                      <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mb-2 font-black">Call / WhatsApp</p>
                      <p className="text-2xl font-black text-brand-primary">+91 84389 66728</p>
                      <p className="text-white/40 text-sm font-medium mt-1">Mon - Sat, 9am - 7pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Card — DARK */}
              <div className="p-10 md:p-12 rounded-[50px] bg-brand-deep text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 blur-3xl rounded-full" />
                <h3 className="text-2xl font-black mb-10 text-white relative z-10 tracking-tight">Corporate</h3>
                <div className="space-y-6 relative z-10 text-white/50 font-light text-sm">
                  <p className="flex justify-between items-center gap-4 border-b border-white/10 pb-4">
                    <span className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Company</span> 
                    <span className="text-right">NarenNet Technologies</span>
                  </p>
                  <p className="flex justify-between items-center gap-4 border-b border-white/10 pb-4">
                    <span className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Founder</span> 
                    <span className="text-right">Narendhiran C</span>
                  </p>
                  <p className="flex justify-between items-center gap-4 border-b border-white/10 pb-4">
                    <span className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Location</span> 
                    <span className="text-right">Tamil Nadu, India</span>
                  </p>
                  <p className="flex justify-between items-center gap-4 border-b border-white/10 pb-4">
                    <span className="text-white/80 font-bold uppercase tracking-wider text-[10px]">Support</span> 
                    <span className="text-right">24/7 Priority</span>
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-brand-accent font-black text-xs uppercase tracking-widest">
                   <Shield size={14} /> Built for Enterprises
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <div className="p-8 md:p-20 rounded-[60px] bg-white border border-brand-border shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-accent/10 transition-colors" />
                
                {formState === 'success' ? (
                  <div className="text-center py-20 relative z-10">
                    <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 size={48} className="text-brand-accent" />
                    </div>
                    <h2 className="text-5xl font-black mb-6 tracking-tighter text-brand-primary uppercase">Message Sent!</h2>
                    <p className="text-brand-secondary text-xl mb-12 font-light leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. Our founders will review your inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({ fullName: '', businessType: '', email: '', phone: '', message: '' });
                        setErrors({});
                        setTouched({});
                      }}
                      className="bg-brand-deep text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-deep/20"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10 relative z-10" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <motion.div
                        className="space-y-3"
                        animate={touched.fullName && errors.fullName ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent ml-2">Full Name</label>
                        <input
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={getInputClassName('fullName')}
                        />
                        <AnimatePresence>
                          {touched.fullName && errors.fullName && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-600 text-[10px] font-bold flex items-center gap-2 mt-2 ml-2"
                            >
                              <AlertCircle size={12} /> {errors.fullName}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        className="space-y-3"
                        animate={touched.businessType && errors.businessType ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent ml-2">Business Category</label>
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`${getInputClassName('businessType')} flex items-center justify-between text-left h-[58px]`}
                          >
                            <span className={formData.businessType ? 'text-brand-primary' : 'text-gray-400'}>
                              {formData.businessType ? businessTypes.find(t => t.value === formData.businessType)?.label : 'Select Industry'}
                            </span>
                            <ChevronDown className={`text-brand-accent transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={18} />
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute top-full left-0 right-0 mt-3 bg-white border border-brand-border rounded-2xl overflow-hidden z-50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                              >
                                {businessTypes.map((type) => (
                                  <button
                                    key={type.value}
                                    type="button"
                                    onClick={() => handleDropdownSelect(type.value)}
                                    className="w-full px-6 py-4 text-left text-sm font-bold hover:bg-brand-accent/5 transition-colors text-brand-secondary hover:text-brand-accent flex items-center justify-between group"
                                  >
                                    {type.label}
                                    {formData.businessType === type.value && <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <AnimatePresence>
                          {touched.businessType && errors.businessType && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-600 text-[10px] font-bold flex items-center gap-2 mt-2 ml-2"
                            >
                              <AlertCircle size={12} /> {errors.businessType}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <motion.div
                        className="space-y-3"
                        animate={touched.email && errors.email ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent ml-2">Email Address</label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@organization.com"
                          className={getInputClassName('email')}
                        />
                        <AnimatePresence>
                          {touched.email && errors.email && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-600 text-[10px] font-bold flex items-center gap-2 mt-2 ml-2"
                            >
                              <AlertCircle size={12} /> {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        className="space-y-3"
                        animate={touched.phone && errors.phone ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent ml-2">Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+91 00000 00000"
                          className={getInputClassName('phone')}
                        />
                        <AnimatePresence>
                          {touched.phone && errors.phone && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-600 text-[10px] font-bold flex items-center gap-2 mt-2 ml-2"
                            >
                              <AlertCircle size={12} /> {errors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-3"
                      animate={touched.message && errors.message ? shakeAnimation : {}}
                    >
                      <label className="text-[11px] uppercase tracking-[0.3em] font-black text-brand-accent ml-2">Requirement Description</label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Describe your business needs and current challenges..."
                        className={getInputClassName('message') + " resize-none"}
                      />
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-600 text-[10px] font-bold flex items-center gap-2 mt-2 ml-2"
                          >
                            <AlertCircle size={12} /> {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand-accent text-white py-6 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-brand-accent/30"
                    >
                      {formState === 'submitting' ? (
                        <div className="flex items-center gap-3">
                           <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                           Processing...
                        </div>
                      ) : (
                        <>Send Inquiry <Send size={24} /></>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                       <Shield size={10} className="inline mr-1 mb-0.5" /> Your data is encrypted and handled according to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CTA — DARK */}
      <section className="py-24 border-t border-brand-border bg-white overflow-hidden">
        <div className="container-wide px-6 text-center">
            <h2 className="text-4xl font-black text-brand-primary mb-12 tracking-tight">Prefer 1-on-1 Discussion?</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="https://wa.me/918438966728" target="_blank" rel="noreferrer" className="flex items-center gap-4 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-green-500/20">
                  <MessageSquare size={24} /> Chat on WhatsApp
               </a>
               <a href="mailto:hello@narennet.cloud" className="flex items-center gap-4 px-8 py-5 bg-brand-deep text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-brand-deep/20">
                  <Mail size={24} /> Send an Email
               </a>
            </div>
        </div>
      </section>
    </div>
  );
}
