import { Helmet } from 'react-helmet';
import HeroSection from '../components/ecosystem/HeroSection';
import EcosystemDiagram from '../components/ecosystem/EcosystemDiagram';
import CTASection from '../components/ecosystem/CTASection';
import { motion } from 'motion/react';
import { Network, Database, Brain, Smartphone, Activity, Link as LinkIcon } from 'lucide-react';

export default function Platform() {
  const platformComponents = [
    { title: "Cloud Infrastructure", description: "Scalable hosting and 99.99% uptime guarantees for uninterrupted business operations.", icon: Database },
    { title: "AI Analytics Engine", description: "Process millions of data points to generate actionable insights and predictive forecasts.", icon: Brain },
    { title: "Mobile Apps Platform", description: "Native iOS and Android delivery network syncing instantly with the core.", icon: Smartphone },
    { title: "Business Automation Tools", description: "Trigger-based workflows replacing manual tasks across every department.", icon: Activity },
    { title: "Data Intelligence Layer", description: "Unified security protocol protecting sensitive corporate and customer information.", icon: Network }
  ];

  return (
    <>
      <Helmet>
        <title>The Digital Ecosystem Engine | NarenNet</title>
        <meta name="description" content="Discover how NarenNet's Platform Infrastructure connects cloud, AI, automation, and mobile tools securely." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg pt-20">
        <HeroSection 
          title="The Digital Ecosystem Engine"
          subtitle="A powerful, interconnected architecture designed to run entire industries. See how everything connects seamlessly."
          primaryCta="Explore Architecture"
          badge="Platform Infrastructure"
        />

        <EcosystemDiagram />

        {/* Explain the components */}
        <section className="py-24 bg-brand-bg relative">
            <div className="container-wide px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Built for Scale and Speed</h2>
                     <p className="text-lg text-brand-secondary">
                        Our platform is composed of 5 distinct layers working together to provide an unparalleled digital experience.
                     </p>
                 </div>

                 <div className="max-w-4xl mx-auto space-y-6">
                    {platformComponents.map((comp, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-6 hover:bg-white/10 hover:border-brand-accent/50 transition-all group"
                        >
                             <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                 <comp.icon className="w-8 h-8 text-brand-accent" />
                             </div>
                             <div>
                                 <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                    {comp.title}
                                    <LinkIcon className="w-4 h-4 text-brand-secondary" />
                                 </h3>
                                 <p className="text-brand-secondary leading-relaxed">
                                    {comp.description}
                                 </p>
                             </div>
                        </motion.div>
                    ))}
                 </div>
            </div>
        </section>

        <CTASection 
          title="Build Your Custom Ecosystem"
          subtitle="Speak with our expert architects to design a platform implementation tailored to your unique requirements."
          buttonText="Contact Architecture Team"
        />
      </div>
    </>
  );
}
