import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import HeroSection from '../../components/ecosystem/HeroSection';
import FeatureCards from '../../components/ecosystem/FeatureCards';
import CTASection from '../../components/ecosystem/CTASection';
import { 
  Briefcase, 
  Users, 
  Settings, 
  Bell,
  LineChart,
  ShoppingBag,
  ListTodo,
  Bot,
  ArrowRight
} from 'lucide-react';
import MobileAppMockup from '../../components/mockups/MobileAppMockup';

export default function MobileApps() {
  const mobileFeatures = [
    {
      title: 'Business Owner App',
      description: 'Control everything directly from your mobile device.',
      icon: Briefcase,
      features: ['View live sales reports', 'Monitor daily operations', 'Manage employees', 'Analytics insights']
    },
    {
      title: 'Customer Apps',
      description: 'Your own branded app for customers to engage and shop.',
      icon: ShoppingBag,
      features: ['Online ordering', 'Customer loyalty rewards', 'Order tracking', 'Deals notifications'],
      delay: 0.2
    },
    {
      title: 'Staff Operation Apps',
      description: 'Empower your employees on the ground floor.',
      icon: Users,
      features: ['Task management', 'Live inventory updates', 'Shift tracking', 'Operational dashboards'],
      delay: 0.3
    },
    {
      title: 'Mobile AI Assistant',
      description: 'AI tools directly built into your mobile ecosystem.',
      icon: Bot,
      features: ['Smart summarization reports', 'Automated restock suggestions', 'Critical business alerts', 'Predictive insights'],
      delay: 0.4
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Ecosystem Mobile Apps | NarenNet</title>
        <meta name="description" content="One mobile platform that connects hospitals, supermarkets, businesses, and customers in a unified digital ecosystem." />
        <meta name="keywords" content="business mobile apps platform, enterprise mobile apps, AI business apps, business ecosystem apps" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <HeroSection 
          title="Mobile Apps That Power Your Business Ecosystem"
          subtitle="One mobile platform that connects hospitals, supermarkets, businesses, and customers in a unified digital ecosystem."
          primaryCta="Download Demo"
          secondaryCta="Request Mobile Solution"
          badge="Unified Mobile Experience"
        >
          <div className="max-w-md mx-auto relative group mt-16 scale-90 md:scale-100">
             <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full group-hover:bg-brand-accent/30 transition-colors" />
             <div className="relative h-[600px]">
               <MobileAppMockup persona="owner" theme="bg-blue-600" />
             </div>
          </div>
        </HeroSection>

        <FeatureCards 
          title="Apps for Every Stakeholder"
          subtitle="Specific interfaces designed perfectly for owners, staff, and customers."
          features={mobileFeatures}
        />

        {/* Visual Showcase Section */}
        <section className="py-24 bg-brand-deep relative overflow-hidden text-white">
             <div className="container-wide px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        One Platform, <span className="text-brand-accent">Four Contexts.</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Our mobile infrastructure provides specialized interfaces for every stakeholder, ensuring maximum efficiency and real-time connectivity.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                     {[
                       { p: 'owner', n: 'Business Owner', t: 'bg-blue-600', d: 'Global Control' },
                       { p: 'employee', n: 'Staff Portal', t: 'bg-brand-accent', d: 'Operations' },
                       { p: 'customer', n: 'Consumer App', t: 'bg-emerald-600', d: 'End-user' },
                       { p: 'sales', n: 'Sales Force', t: 'bg-orange-600', d: 'Field Sales' }
                     ].map((mock, i) => (
                       <motion.div 
                         key={mock.p}
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.15 }}
                         className="flex flex-col items-center"
                       >
                          <div className="w-full max-w-[280px] h-[580px] mb-8 relative group">
                             <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
                             <MobileAppMockup persona={mock.p as any} theme={mock.t} appName={mock.n} />
                          </div>
                          <div className="text-center">
                             <h4 className="font-bold text-brand-accent text-lg mb-1">{mock.n}</h4>
                             <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{mock.d}</p>
                          </div>
                       </motion.div>
                     ))}
                </div>
             </div>
        </section>

        <CTASection 
          title="Take Your Business Everywhere"
          subtitle="Don't restrict your business to a desktop. Manage, operate, and sell from anywhere in the world."
          buttonText="Start Your Mobile Ecosystem"
        />
      </div>
    </>
  );
}
