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

      <div className="min-h-screen bg-brand-bg">
        <HeroSection 
          title="The Digital Ecosystem Engine"
          subtitle="A powerful, interconnected architecture designed to run entire industries. See how everything connects seamlessly."
          primaryCta="Explore Architecture"
          badge="Platform Infrastructure"
        />

        <div className="bg-brand-deep py-24 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 blur-[130px] rounded-full" />
             <EcosystemDiagram />
        </div>

        {/* Explain the components — LIGHT */}
        <section className="py-32 bg-brand-bg relative">
            <div className="container-wide px-6">
                 <div className="text-center max-w-3xl mx-auto mb-20">
                     <span className="text-brand-accent font-mono text-sm uppercase tracking-[0.3em] font-black mb-6 block">Capabilities</span>
                     <h2 className="text-4xl md:text-6xl font-black text-brand-primary mb-8 tracking-tighter">Built for Scale and Speed</h2>
                     <p className="text-xl text-brand-secondary font-light leading-relaxed">
                        Our platform is composed of 5 distinct layers working together to provide an unparalleled digital experience for modern enterprises.
                     </p>
                 </div>

                 <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {platformComponents.map((comp, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-10 rounded-[32px] bg-white border border-brand-border flex flex-col items-start gap-8 hover:shadow-2xl hover:border-brand-accent transition-all group"
                        >
                             <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                 <comp.icon className="w-8 h-8 text-brand-accent" />
                             </div>
                             <div>
                                 <h3 className="text-2xl font-black text-brand-primary mb-4 flex items-center gap-3 tracking-tight">
                                    {comp.title}
                                    <LinkIcon className="w-4 h-4 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                 </h3>
                                 <p className="text-brand-secondary text-lg leading-relaxed font-light">
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
