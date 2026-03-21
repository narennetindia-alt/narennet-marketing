import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Search, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function ModuleReports() {
  return (
    <>
      <Helmet>
        <title>Hospital MIS Reports & Analytics | Healthcare ERP Insights | NarenNet</title>
        <meta name="description" content="Make data-driven decisions with NarenNet's MIS reports. Detailed clinical, financial, and operational analytics for hospital administrators." />
        <meta name="keywords" content="hospital MIS reports, healthcare analytics software, hospital dashboard, medical data reporting" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Data-Driven Hospital Management"
          title="Turn Your Hospital Data into Operational Intelligence"
          subtitle="MIS & Analytics Reports"
          description="Stop guessing. NarenNet's reporting engine provides real-time visibility into your hospital's clinical outcomes, financial health, and staff productivity."
          primaryCta="See Analytics Demo"
          primaryCtaLink="/contact"
          secondaryCta="Explore Dashboards"
          secondaryCtaLink="#dashboards"
        />

        {/* Analytics Section */}
        <section className="py-24 bg-white">
           <div className="container-wide px-6">
              <div className="max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Decision-Ready Data.</h2>
                 <p className="text-lg text-gray-500 font-medium leading-relaxed">
                    A hospital administrator needs more than just a list of numbers. NarenNet provides context, trends, and predictive insights to help you manage your institution with precision.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                 {[
                   { t: 'Financial Health', d: 'Track collection cycles, outstanding balances, and department-wise profitability.' },
                   { t: 'Clinical Outcomes', d: 'Monitor average length of stay (ALOS), infection rates, and doctor productivity.' },
                   { t: 'Operational Performance', d: 'Analyze patient wait times, bed turnover, and pharmacy inventory velocity.' }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all text-center">
                      <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-6">
                         <PieChart className="text-brand-accent" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.t}</h3>
                      <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <CTASection 
          title="Lead with Intelligence"
          subtitle="Get the visibility you need to grow your medical institution. Request an MIS demo today."
          buttonText="Request Analytics Session"
        />

        <Footer />
      </div>
    </>
  );
}
