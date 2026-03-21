import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Map as MapIcon, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Flag,
  Globe,
  Building2,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/ecosystem/HeroSection';
import CTASection from '../../components/ecosystem/CTASection';

export default function RegionalHubTN() {
  const cities = [
    { name: 'Chennai', link: '/hospital-management-software-chennai', desc: 'Metropolitan hub with massive outpatient volumes.' },
    { name: 'Coimbatore', link: '/hospital-management-software-coimbatore', desc: 'Medical tourism and multi-specialty expertise.' },
    { name: 'Madurai', link: '/hospital-management-software-madurai', desc: 'The healthcare anchor for South Tamil Nadu.' },
    { name: 'Salem', link: '/hospital-management-software-salem', desc: 'Growing hub for surgical and specialized care.' },
    { name: 'Trichy', link: '/hospital-management-software-trichy', desc: 'Central healthcare node with reliable workflows.' },
    { name: 'Nagercoil', link: '/hospital-management-software-nagercoil', desc: 'Localized care for the southern-most district.' }
  ];

  const regionalNeeds = [
    { title: 'Local 24/7 Support', desc: 'On-site implementation teams available across all major TN districts.' },
    { title: 'Offline-First Tech', desc: 'Perfect for areas with fluctuating connectivity, ensuring continuous care.' },
    { title: 'Multi-Lingual Interface', desc: 'Simplified interfaces for diverse clinical and administrative staff.' },
    { title: 'NREN Direct Sync', desc: 'Localized data hosting for speed and security within the state.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital Management Software Tamil Nadu | Top HMS in TN | NarenNet</title>
        <meta name="description" content="NarenNet is the leading hospital software provider in Tamil Nadu. Serving Chennai, Coimbatore, Madurai, and more with localized HMS & ERP solutions." />
        <meta name="keywords" content="hospital software Tamil Nadu, HMS Chennai, hospital ERP Coimbatore, medical software Madurai" />
      </Helmet>

      <div className="min-h-screen bg-brand-bg">
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          badge="Powering Tamil Nadu's Healthcare"
          title="The Medical Capital's Chosen Software"
          subtitle="Hospital Management Software TN"
          description="Tamil Nadu is the heart of Indian healthcare. NarenNet provides the specialized, high-performance infrastructure required by the state's most prestigious medical institutions and growing clinics alike."
          primaryCta="View Regional Solutions"
          primaryCtaLink="#cities"
          secondaryCta="Contact TN Team"
          secondaryCtaLink="/contact"
        >
          <div className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-lg rounded-[32px] p-8 border border-white/10 flex flex-wrap justify-center gap-8 md:gap-16">
             <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-1">100+</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Installations in TN</div>
             </div>
             <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
             <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-1">99.9%</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">State-wide Uptime</div>
             </div>
             <div className="w-px h-12 bg-white/10 hidden md:block self-center" />
             <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-1">15+</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Support Hubs</div>
             </div>
          </div>
        </HeroSection>

        {/* Why TN Hospitals Choose Us */}
        <section className="py-24 bg-white">
          <div className="container-wide px-6">
            <div className="max-w-3xl mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 italic">Built for the Speed of Tamil Nadu Healthcare.</h2>
               <p className="text-lg text-gray-500 font-medium">
                  We understand the unique operational pressures of Tamil Nadu's healthcare ecosystem—from the high footfall in city clinics to the specialist needs of tier-2 surgical centers.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {regionalNeeds.map((need, i) => (
                <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{need.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-semibold">{need.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Network Grid */}
        <section id="cities" className="py-24 bg-gray-50 border-y border-gray-200">
           <div className="container-wide px-6">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Local Presence</h2>
                 <p className="text-gray-500 font-medium font-medium">Tailored digital workflows for every medical hub in the state.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {cities.map((city, i) => (
                   <Link 
                     key={i} 
                     to={city.link}
                     className="group bg-white p-10 rounded-[40px] border border-gray-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                   >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                     <MapPin className="text-brand-accent mb-6" size={32} />
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{city.name}</h3>
                     <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">{city.desc}</p>
                     <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                        Explore Local Hub <ArrowRight size={14} />
                     </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>

        {/* Implementation Proof */}
        <section className="py-24 bg-white relative">
           <div className="container-wide px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                 <div className="flex-1 order-2 lg:order-1">
                    <div className="relative rounded-[40px] overflow-hidden bg-brand-deep p-12 text-white">
                       <MapIcon className="text-brand-accent/20 absolute -bottom-10 -right-10" size={300} />
                       <h3 className="text-3xl font-bold mb-6">Regional Support Network</h3>
                       <p className="text-white/60 mb-8 font-medium italic">"The biggest fear for a hospital is downtime. NarenNet's local TN team was at our doorstep within 3 hours during our major upgrade."</p>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center font-bold">GK</div>
                          <div>
                             <div className="font-bold">Gowtham K.</div>
                             <div className="text-xs text-white/40 font-bold uppercase tracking-widest">IT Director, Kongu Medical Center</div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="flex-1 order-1 lg:order-2">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 italic underline decoration-brand-accent/30 decoration-8 underline-offset-8">Localization That Actually Works.</h2>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">
                       Most software is built for the West. NarenNet is built for Tamil Nadu. We handle indigenous billing rules, local government compliance, and the specific patient journey expected in South Indian medical halls.
                    </p>
                    <div className="flex gap-4">
                       <Link to="/contact" className="px-8 py-4 rounded-xl bg-brand-accent text-white font-bold hover:scale-105 transition-all shadow-lg">
                          Consult Local Expert
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <CTASection 
          title="Ready to Digitize Your Institution in Tamil Nadu?"
          subtitle="Speak with our regional specialists today and see why TN's leading hospitals are switching to NarenNet."
          buttonText="Contact TN HUB"
        />

        <Footer />
      </div>
    </>
  );
}
