import { Helmet } from 'react-helmet';
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
  Bot
} from 'lucide-react';

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
        />

        <FeatureCards 
          title="Apps for Every Stakeholder"
          subtitle="Specific interfaces designed perfectly for owners, staff, and customers."
          features={mobileFeatures}
        />

        {/* Visual Showcase Section */}
        <section className="py-24 bg-brand-bg relative overflow-hidden">
             <div className="container-wide px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Always Connected, Everywhere.
                    </h2>
                    <p className="text-lg text-brand-secondary">
                        Our mobile infrastructure runs natively on iOS and Android, ensuring real-time syncing with your central command dashboards.
                    </p>
                </div>
                
                <div className="flex justify-center items-center h-[500px]">
                     {/* Simplified visual representation of connected smartphones */}
                     <div className="relative w-full max-w-2xl aspect-[2/1] bg-black/50 border border-white/10 rounded-full flex justify-around items-center px-12 glow-pulse shadow-[0_0_100px_rgba(56,189,248,0.1)]">
                         <div className="flex flex-col items-center">
                              <Bell className="w-12 h-12 text-blue-500 mb-4 animate-bounce"/>
                              <span className="text-white font-bold font-display uppercase tracking-widest text-sm">Customer App</span>
                         </div>
                         <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 via-brand-accent to-orange-500 opacity-50 relative">
                             <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white opacity-80 animate-ping -translate-y-1/2 translate-x-1/2" />
                         </div>
                         <div className="flex flex-col items-center scale-125">
                              <Settings className="w-16 h-16 text-brand-accent mb-4 animate-spin-slow"/>
                              <span className="text-brand-accent font-bold font-display uppercase tracking-widest text-sm">Owner Core</span>
                         </div>
                         <div className="h-0.5 w-16 bg-gradient-to-r from-orange-500 via-brand-accent to-green-500 opacity-50 relative">
                             <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white opacity-80 animate-ping -translate-y-1/2 -translate-x-1/2" />
                         </div>
                         <div className="flex flex-col items-center">
                              <ListTodo className="w-12 h-12 text-green-500 mb-4 animate-pulse"/>
                              <span className="text-white font-bold font-display uppercase tracking-widest text-sm">Staff App</span>
                         </div>
                     </div>
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
