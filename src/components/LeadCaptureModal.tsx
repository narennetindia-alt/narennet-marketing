import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'hospital' | 'supermarket' | 'generic';
}

export default function LeadCaptureModal({ isOpen, onClose, type = 'generic' }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Automatically close after success message
      setTimeout(onClose, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-brand-bg border border-brand-border rounded-[32px] overflow-hidden shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-brand-secondary hover:text-white transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Content Swapper */}
            <div className="p-8 md:p-10">
              {!isSuccess ? (
                <div className="flex flex-col text-brand-primary">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                      {type === 'hospital' ? 'Healthcare Innovation' : 'Retail Transformation'}
                    </div>
                    <h3 className="text-3xl font-bold text-brand-primary mb-3">
                      {type === 'hospital' ? 'Modernize Your Hospital' : 'Scale Your Supermarket'}
                    </h3>
                    <p className="text-brand-secondary leading-relaxed">
                      {type === 'hospital' 
                        ? 'Transform patient care with our premium healthcare ecosystem. Smart records, instant OPD, and AI-powered billing.' 
                        : 'Scale your supermarket operations with our premium ecosystem. No credit card required, instant setup.'}
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">Full Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-primary placeholder:text-brand-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">Business Email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        placeholder={type === 'hospital' ? "dr.john@hospital.com" : "john@supermarket.com"}
                        className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-primary placeholder:text-brand-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5 pb-2">
                      <label htmlFor="store" className="text-xs font-bold text-brand-secondary uppercase tracking-widest pl-1">
                        {type === 'hospital' ? 'Hospital Name / Bed Capacity' : 'Store Name / Branch Count'}
                      </label>
                      <input
                        required
                        type="text"
                        id="store"
                        placeholder={type === 'hospital' ? "City Care (250 Beds)" : "Naren Stores (5 Branches)"}
                        className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-primary placeholder:text-brand-primary/20 focus:outline-none focus:border-brand-accent/50 transition-colors"
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-white transition-all shadow-lg shadow-brand-accent/20 disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Scheduling Demo...
                        </>
                      ) : (
                        <>
                          Request Trial Access <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-brand-secondary/60 mt-4 italic uppercase tracking-wider">
                      {type === 'hospital' ? 'Trusted by 100+ Multi-specialty Hospitals' : 'Already used by 50+ leading retail chains'}
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-primary mb-3">Request Received!</h3>
                  <p className="text-brand-secondary max-w-xs mx-auto mb-8">
                    Our {type === 'hospital' ? 'healthcare consultants' : 'sales engineers'} will contact you within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-brand-accent font-bold hover:underline"
                  >
                    Close & Continue Browsing
                  </button>
                </motion.div>
              )}
            </div>

            {/* Decorative bottom element */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-accent via-orange-400 to-brand-accent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
