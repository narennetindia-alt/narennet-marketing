import {
    Binary,
    Store,
    Utensils,
    Globe,
    Cpu,
    ShieldCheck,
    Code2,
    Smartphone,
    TrendingUp,
    CreditCard,
    LayoutDashboard,
    BarChart3,
    Zap,
    Shield,
    Briefcase
} from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    iconName: string; // Used for dynamic resolution if needed
    category: string;
    bestFor: string;
    features: string[];
    image: string;
}

export const services: Service[] = [
    {
        id: 'smart-os',
        title: 'NarenNet SmartOS (Enterprise Business Suite)',
        description: 'Complete AI-powered operating system for companies.',
        iconName: 'Binary',
        category: 'Enterprise',
        bestFor: 'Enterprises, Corporates, Growing Companies',
        features: [
            'ERP (Finance, Accounting, GST)',
            'CRM (Sales & Client Management)',
            'HR & Payroll',
            'Inventory & Supply Chain',
            'Project Management',
            'Analytics Dashboard',
            'AI Business Insights'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'retail-management',
        title: 'Retail & Shop Management Software',
        description: 'Smart POS + Store Automation System for modern retail.',
        iconName: 'Store',
        category: 'Retail',
        bestFor: 'Retail Store Owners',
        features: [
            'Billing & Barcode System',
            'Theft Detection Integration',
            'Smart Inventory Alerts',
            'Loyalty Programs',
            'Multi-Branch Control',
            'Self Billing POS Kiosk'
        ],
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'restaurant-automation',
        title: 'Restaurant & Food Business System',
        description: 'Complete restaurant automation ecosystem.',
        iconName: 'Utensils',
        category: 'Food Business',
        bestFor: 'Restaurants, Cafes, Cloud Kitchens',
        features: [
            'Digital Menu System',
            'Kitchen Order Display (KOT)',
            'Table Reservation',
            'Billing + GST',
            'Delivery Tracking',
            'QR Ordering System',
            'Cloud Reports'
        ],
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'ai-ecommerce',
        title: 'AI Website & eCommerce Builder',
        description: 'Instant AI-powered store builder with marketing automation.',
        iconName: 'Globe',
        category: 'Web & eCommerce',
        bestFor: 'Small Businesses & eCommerce Brands',
        features: [
            '1-Click Store Setup',
            'Payment Gateway Integration',
            'SEO Booster Extension',
            'AI Product Description Generator',
            'Marketing Automation',
            'Mobile Optimized Themes'
        ],
        image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'ai-automation',
        title: 'AI Automation & Custom AI Tools',
        description: 'We build custom AI systems for businesses looking for an edge.',
        iconName: 'Cpu',
        category: 'AI Services',
        bestFor: 'Companies wanting AI advantage',
        features: [
            'AI Chatbots',
            'AI Sales Assistant',
            'Predictive Analytics',
            'AI Customer Support',
            'Internal AI Assistants',
            'Voice AI Integration'
        ],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'security-infrastructure',
        title: 'Security & Infrastructure Services',
        description: 'Enterprise-grade protection and cloud deployment.',
        iconName: 'ShieldCheck',
        category: 'Infrastructure',
        bestFor: 'Growing digital businesses',
        features: [
            'Website Security Hardening',
            'Firewall Setup',
            'Cloud Infrastructure Setup',
            'Server Deployment',
            'Data Backup Solutions',
            'Cybersecurity Consulting'
        ],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'saas-development',
        title: 'SaaS Development & Custom Software',
        description: 'Scaling platforms with modern architecture.',
        iconName: 'Code2',
        category: 'Development',
        bestFor: 'Startups & Enterprises',
        features: [
            'Custom ERP Development',
            'CRM Systems',
            'Startup MVP Development',
            'SaaS Product Architecture',
            'API Development',
            'Supabase & Cloud Integration'
        ],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile & Cross-Platform Applications',
        description: 'Smart mobile solutions for Android and iOS.',
        iconName: 'Smartphone',
        category: 'Mobile',
        bestFor: 'Businesses needing mobile presence',
        features: [
            'Android App Development',
            'iOS App Development',
            'Business Apps',
            'Offline-First Applications',
            'Cloud Sync Systems'
        ],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'business-strategy',
        title: 'Business Growth & Digital Strategy',
        description: 'Strategic planning and automation for business expansion.',
        iconName: 'TrendingUp',
        category: 'Consulting',
        bestFor: 'Startups & Enterprises',
        features: [
            'Software Consultation',
            'Digital Transformation Planning',
            'Automation Strategy',
            'AI Adoption Planning'
        ],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
    }
];
