import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import EcosystemDiagram from '../../components/ecosystem/EcosystemDiagram';
import CTASection from '../../components/ecosystem/CTASection';
import { motion } from 'motion/react';
import { 
  ScanBarcode, 
  Package, 
  Gift, 
  TrendingUp,
  Percent,
  Clock,
  Star,
  Truck,
  LineChart,
  ShoppingBag,
  Bell
} from 'lucide-react';

export default function Supermarkets() {
  const retailFeatures = [
    {
      title: 'POS Billing System',
      description: 'Lightning-fast checkout for high-volume stores.',
      icon: ScanBarcode,
      features: ['Barcode scanning', 'GST billing', 'Multi-counter support', 'Quick interface']
    },
    {
      title: 'Inventory Intelligence',
      description: 'Never run out of your best-selling products again.',
      icon: Package,
      features: ['Stock tracking', 'Supplier management', 'Expiry alerts', 'Auto-restocking'],
      delay: 0.2
    },
    {
      title: 'Customer Loyalty Platform',
      description: 'Turn one-time shoppers into lifelong customers.',
      icon: Gift,
      features: ['Reward points', 'Customer profiles', 'Personalized offers', 'Campaign management'],
      delay: 0.3
    },
    {
      title: 'Sales & Delivery',
      description: 'AI analytics and omni-channel order management.',
      icon: TrendingUp,
      features: ['WhatsApp ordering', 'Delivery tracking', 'Sales forecasting', 'Best seller insights'],
      delay: 0.4
    }
  ];

  const deals = [
    { title: "Flash Deals", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
    { title: "Seasonal Promotions", icon: CalendarCheck, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Limited Offers", icon: Clock, color: "text-red-500", bg: "bg-red-500/10" },
    { title: "Targeted Discounts", icon: Percent, color: "text-brand-accent", bg: "bg-brand-accent/10" },
  ];

  // Using a fallback for missing icon imports Zap and CalendarCheck (already used from lucide though)
  // Re-importing missing ones for Deals
  return (
    <>
      <Helmet>
        <title>Smart Retail Ecosystem | NarenNet</title>
        <meta name="description" content="Technology built for modern supermarkets and department stores to automate retail operations and maximize profits." />
        <meta name="keywords" content="supermarket POS software, retail ERP system, inventory management system, department store software" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg pt-20">
        <HeroSection 
          title="Smart Retail Ecosystem"
          subtitle="Technology built for modern supermarkets and department stores to automate retail operations and maximize profits."
          primaryCta="Get Retail Demo"
          badge="Retail Automation"
        />

        <FeatureCards 
          title="Supermarket Operating System"
          subtitle="End-to-end management for retail success."
          features={retailFeatures}
        />

        {/* Deals Engine Section */}
        <section className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(56,189,248,0.05)_0%,transparent_50%)]" />
            
            <div className="container-wide px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
                        >
                            Supermarket Deals Engine
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-brand-secondary mb-12"
                        >
                            Create, manage, and analyze promotional campaigns that drive sales and clear inventory rapidly. Automatically notify your loyal customers.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-4">
                            {deals.map((deal, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    key={i} 
                                    className="p-4 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-4 hover:border-brand-accent/30 transition-colors"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${deal.bg} flex items-center justify-center`}>
                                        <deal.icon className={`w-5 h-5 ${deal.color}`} />
                                    </div>
                                    <span className="text-white font-bold text-sm tracking-wide">{deal.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        {/* Animated Deal Cards Output */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-brand-accent/5 to-transparent overflow-hidden shadow-2xl p-8 flex flex-col justify-center items-center gap-6">
                            
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="w-full max-w-sm rounded-2xl bg-[#111] border border-white/10 p-6 flex items-start gap-4 shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] -z-10" />
                                <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex flex-col items-center justify-center shrink-0">
                                    <span className="text-orange-500 font-black text-xl">50%</span>
                                    <span className="text-orange-500 text-[10px] font-bold uppercase">OFF</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Weekend Grocery Bash</h4>
                                    <p className="text-brand-secondary text-xs">Valid until Sunday 11:59 PM. Apply to fresh produce.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                                className="w-full max-w-sm rounded-2xl bg-[#111] border border-brand-accent/30 p-6 flex items-start gap-4 shadow-xl ml-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-[50px] -z-10" />
                                <div className="w-16 h-16 rounded-xl bg-brand-accent/20 flex items-center justify-center shrink-0">
                                    <Star className="w-8 h-8 text-brand-accent" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Buy 1 Get 1 Free</h4>
                                    <p className="text-brand-secondary text-xs">Targeted: Sent to 1,245 regular customers via WhatsApp.</p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <EcosystemDiagram />

        <CTASection 
          title="Ready to Automate Your Retail Store?"
          subtitle="Upgrade your POS, inventory, and customer loyalty all in one seamless ecosystem."
          buttonText="Start Selling Smarter"
        />
      </div>
    </>
  );
}

// Ensure the used icons are imported. I noticed some overlap so defining them above
import { Zap, CalendarCheck } from 'lucide-react';
