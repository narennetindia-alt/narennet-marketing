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
  ChevronDown
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

  // Close dropdown when clicking outside
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
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters';
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
    const baseClass = "w-full bg-white/5 border rounded-2xl px-6 py-4 focus:outline-none transition-all duration-300 text-white placeholder:text-gray-600";
    const errorClass = touched[name] && errors[name as keyof FormErrors]
      ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
      : "border-brand-border focus:border-brand-accent";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-bg text-white min-h-[60vh] flex items-center">
        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-0 h-full w-12 md:w-32 lg:w-48 bg-white/5 border-l border-brand-border flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="writing-mode-vertical text-[10vw] md:text-[8vw] lg:text-[15vw] font-bold text-white/[0.03] uppercase tracking-tighter select-none whitespace-nowrap">
            CONTACT
          </div>
        </div>

        <div className="container-wide px-6 relative z-10">
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
              className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase text-white"
            >
              Let's Build <br />
              Something <br />
              <span className="text-brand-accent">Great</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-secondary max-w-2xl leading-relaxed font-light"
            >
              Ready to transform your business? Reach out to our team for a personalized consultation and demo.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="bg-brand-bg pt-32 pb-24">
        <div className="container-wide px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <div className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] mb-8">Contact Info</div>
                <h2 className="text-4xl font-bold mb-12 tracking-tight text-white">Get in touch directly</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                      <Mail className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-brand-secondary text-sm uppercase tracking-widest mb-2 font-bold">Email us</p>
                      <p className="text-2xl font-medium text-white">narennetindia@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                      <Phone className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-brand-secondary text-sm uppercase tracking-widest mb-2 font-bold">Call us</p>
                      <p className="text-2xl font-medium text-white">+91 84389 66728</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                      <MapPin className="text-brand-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-brand-secondary text-sm uppercase tracking-widest mb-2 font-bold">Visit us</p>
                      <p className="text-2xl font-medium text-white">India, TamilNadu, Dharmapuri, Karimangalam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 rounded-[40px] md:rounded-[50px] bg-brand-card border border-brand-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 blur-3xl rounded-full" />
                <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Corporate Information</h3>
                <div className="space-y-4 relative z-10 text-brand-secondary font-light">
                  <p><strong className="text-white">Company Name:</strong> NarenNet Technologies</p>
                  <p><strong className="text-white">Founder & CEO:</strong> Narendhiran C</p>
                  <p><strong className="text-white">Head Office:</strong> Dharmapuri, Tamil Nadu, India</p>
                  <p><strong className="text-white">Industry:</strong> AI & Enterprise Software Development</p>
                  <p><strong className="text-white">Monthly Business Turnover:</strong> Growing technology company with expanding monthly revenue</p>
                  <div className="h-px w-full bg-brand-border my-6" />
                  <p><strong className="text-white">Business Inquiries:</strong> narennetindia@gmail.com</p>
                  <p><strong className="text-white">Customer Support:</strong> contactcustomercarenarennet@gmail.com</p>
                  <p><strong className="text-white">Official Website:</strong> https://narennet.cloud</p>
                </div>
              </div>

              <div className="p-8 md:p-12 rounded-[40px] md:rounded-[50px] bg-brand-card border border-brand-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 blur-3xl rounded-full" />
                <MessageSquare className="text-brand-accent mb-8 relative z-10" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Live Support</h3>
                <p className="text-brand-secondary font-light leading-relaxed relative z-10">
                  Our technical support team is available 24/7 to assist you with any inquiries or issues.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-brand-card border border-brand-border shadow-2xl">
                {formState === 'success' ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-10">
                      <CheckCircle2 size={48} className="text-brand-accent" />
                    </div>
                    <h2 className="text-5xl font-bold mb-6 tracking-tighter text-white uppercase">Message Sent!</h2>
                    <p className="text-brand-secondary text-xl mb-12 font-light leading-relaxed">
                      Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormState('idle');
                        setFormData({ fullName: '', businessType: '', email: '', phone: '', message: '' });
                        setErrors({});
                        setTouched({});
                      }}
                      className="bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-brand-accent/20"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        className="space-y-3"
                        animate={touched.fullName && errors.fullName ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary ml-4">Full Name</label>
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
                              className="text-red-500 text-xs flex items-center gap-2 mt-2 ml-4"
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
                        <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary ml-4">Business Type</label>
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`${getInputClassName('businessType')} flex items-center justify-between text-left`}
                          >
                            <span className={formData.businessType ? 'text-white' : 'text-gray-600'}>
                              {formData.businessType ? businessTypes.find(t => t.value === formData.businessType)?.label : 'Select type'}
                            </span>
                            <ChevronDown className={`text-brand-secondary transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={18} />
                          </button>

                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute top-full left-0 right-0 mt-2 bg-brand-card border border-brand-border rounded-2xl overflow-hidden z-50 shadow-2xl"
                              >
                                {businessTypes.map((type) => (
                                  <button
                                    key={type.value}
                                    type="button"
                                    onClick={() => handleDropdownSelect(type.value)}
                                    className="w-full px-6 py-4 text-left text-sm hover:bg-white/5 transition-colors text-brand-secondary hover:text-white flex items-center justify-between group"
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
                              className="text-red-500 text-xs flex items-center gap-2 mt-2 ml-4"
                            >
                              <AlertCircle size={12} /> {errors.businessType}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        className="space-y-3"
                        animate={touched.email && errors.email ? shakeAnimation : {}}
                      >
                        <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary ml-4">Email</label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@example.com"
                          className={getInputClassName('email')}
                        />
                        <AnimatePresence>
                          {touched.email && errors.email && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-500 text-xs flex items-center gap-2 mt-2 ml-4"
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
                        <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary ml-4">Phone</label>
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
                              className="text-red-500 text-xs flex items-center gap-2 mt-2 ml-4"
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
                      <label className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary ml-4">Message</label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your business needs..."
                        className={getInputClassName('message') + " resize-none"}
                      />
                      <AnimatePresence>
                        {touched.message && errors.message && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-500 text-xs flex items-center gap-2 mt-2 ml-4"
                          >
                            <AlertCircle size={12} /> {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand-accent text-white py-6 rounded-[30px] font-bold text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-brand-accent/20"
                    >
                      {formState === 'submitting' ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={24} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918438966728"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
