import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Smartphone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function CompareMocDoc() {
  const comparison = [
    { feature: 'Core Architecture', naren: 'Autonomous AI-Driven Cloud', moc: 'Cloud-Based Database' },
    { feature: 'Search Dominance', naren: 'Native SEO Pages for Your Hospital', moc: 'Generic Directory Listing' },
    { feature: 'Staff Adoption', naren: 'Zero-Fatigue Modern UI', moc: 'Traditional Layout' },
    { feature: 'Regional Support', naren: 'On-Site Implementation Team in TN', moc: 'Centralized Online Support' },
    { feature: 'Revenue Analytics', naren: 'Predictive Integrity Dashboard', moc: 'Static Reports' }
  ];

  return (
    <>
      <Helmet>
        <title>NarenNet vs MocDoc | Best Hospital Software Comparison | NarenNet</title>
        <meta name="description" content="Choosing between NarenNet and MocDoc? See why NarenNet's autonomous ERP and native SEO architecture offer more growth for your hospital." />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Buyer's Comparison Guide"
          title="Choosing the Right Digital Partner: NarenNet vs. MocDoc"
          subtitle="NarenNet vs. MocDoc"
          description="In the search for the best hospital management system, architecture and scalability matter. See how NarenNet's autonomous ERP stacks up against traditional cloud solutions like MocDoc."
          primaryCta="Download Comparison Report"
          primaryCtaLink="/contact"
          secondaryCta="Explore NarenNet Features"
          secondaryCtaLink="/hospital-management-software"
        />

        {/* Comparison Table */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Better Architecture. Faster Growth.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    While MocDoc provides a solid foundation, NarenNet is built for the *next* decade of healthcare. We don't just manage data; we provide the clinical intelligence to grow your institution autonomously.
                 </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
                 <table className="w-full text-left bg-white">
                    <thead>
                       <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="p-8 text-gray-900 font-bold text-xl">Service Feature</th>
                          <th className="p-8 text-brand-accent font-bold text-xl italic">NarenNet</th>
                          <th className="p-8 text-gray-400 font-bold text-xl">MocDoc</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {comparison.map((item, i) => (
                         <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="p-8 font-bold text-gray-900">{item.feature}</td>
                            <td className="p-8 text-brand-accent font-bold"><CheckCircle2 className="inline mr-2" size={18} /> {item.naren}</td>
                            <td className="p-8 text-gray-400 font-medium">{item.moc}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        <CTASection 
          title="Experience the NarenNet Advantage"
          subtitle="Join the hospitals that have switched for better control and clinical intelligence."
          buttonText="Book Comparative Demo"
        />

        <Footer />
      </div>
    </>
  );
}
