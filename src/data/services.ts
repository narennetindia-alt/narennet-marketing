import {
    Binary,
    Store,
    Utensils,
    Globe,
    Cpu,
    ShieldCheck,
    Cloud,
    Smartphone,
    TrendingUp,
    Megaphone,
    Factory,
    Wrench,
    Layers,
    BarChart3
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    items: string[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        id: 'enterprise',
        title: 'Enterprise Software Solutions',
        icon: Binary,
        description: 'Full-scale ERP and enterprise platforms built for scale, compliance, and intelligence.',
        items: [
            'ERP Development (Finance, GST, HR, Inventory)',
            'CRM Systems',
            'Business Intelligence Dashboards',
            'Supply Chain Management',
            'Vendor Management Systems',
            'Multi-Branch Management Software',
            'Document Management Systems',
            'Workflow Automation Systems',
            'Compliance & Audit Software',
            'Custom Enterprise Portals',
        ],
    },
    {
        id: 'retail',
        title: 'Retail & POS Solutions',
        icon: Store,
        description: 'Smart point-of-sale and store management systems for modern retailers.',
        items: [
            'Smart POS Systems',
            'Barcode & Billing Software',
            'Supermarket Management Software',
            'Pharmacy Management System',
            'Textile & Garment Store Software',
            'Wholesale Distribution Software',
            'Multi-Outlet Sync Systems',
            'Self-Checkout Kiosk Systems',
            'Customer Loyalty Programs',
            'Theft Monitoring Integration',
            'Smart Inventory Forecasting',
        ],
    },
    {
        id: 'restaurant',
        title: 'Restaurant & Hospitality Tech',
        icon: Utensils,
        description: 'End-to-end technology for restaurants, cloud kitchens, and hospitality businesses.',
        items: [
            'Restaurant POS',
            'Cloud Kitchen Management',
            'Table Reservation Systems',
            'QR Code Ordering',
            'Kitchen Display System (KDS)',
            'Food Delivery Integration',
            'Hotel Management Software',
            'Room Booking Systems',
            'Billing & Accounting Integration',
            'Inventory Tracking for Restaurants',
        ],
    },
    {
        id: 'web-ecommerce',
        title: 'Website & eCommerce Development',
        icon: Globe,
        description: 'Custom websites and high-converting online stores built for growth.',
        items: [
            'AI-Powered Website Builder',
            'Custom Business Websites',
            'eCommerce Store Development',
            'Payment Gateway Integration',
            'SEO Optimization',
            'Landing Page Design',
            'Performance Optimization',
            'Website Maintenance',
            'Conversion Optimization',
            'Domain & Hosting Setup',
        ],
    },
    {
        id: 'ai',
        title: 'Artificial Intelligence Solutions',
        icon: Cpu,
        description: 'Custom AI systems that automate, predict, and transform your business operations.',
        items: [
            'AI Chatbots',
            'AI Sales Assistants',
            'AI Customer Support Automation',
            'Predictive Business Analytics',
            'AI Recommendation Systems',
            'AI Career Guidance Systems',
            'AI Fraud Detection',
            'AI Image & Video Processing',
            'NLP Systems',
            'AI Voice Assistants (Online & Offline)',
            'Custom LLM Integration',
            'Business Process Automation with AI',
        ],
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity & Infrastructure',
        icon: ShieldCheck,
        description: 'Enterprise-grade security hardening and infrastructure to protect your digital assets.',
        items: [
            'Firewall Setup & Configuration',
            'Website Security Hardening',
            'Server Security Monitoring',
            'Cloud Infrastructure Setup',
            'DevOps Deployment Pipelines',
            'Data Backup & Recovery',
            'Penetration Testing',
            'API Security',
            'Zero Trust Architecture Setup',
            'Network Security Consulting',
        ],
    },
    {
        id: 'cloud',
        title: 'Cloud & Backend Systems',
        icon: Cloud,
        description: 'Scalable, reliable cloud architectures and backend APIs built for the modern web.',
        items: [
            'Supabase Setup & Architecture',
            'Cloud Database Design',
            'Scalable Backend Development',
            'API Development',
            'Microservices Architecture',
            'Real-Time Systems',
            'Edge Deployment',
            'Serverless Application Setup',
            'Cloud Cost Optimization',
            'Replication & Backup Systems',
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile & App Development',
        icon: Smartphone,
        description: 'Powerful mobile applications for Android and iOS that work offline and online.',
        items: [
            'Android App Development',
            'iOS App Development',
            'Cross-Platform Apps',
            'Business Productivity Apps',
            'Custom Launcher Development',
            'Offline-First Applications',
            'AI Mobile Assistants',
            'Enterprise Mobile Solutions',
            'Internal Company Apps',
        ],
    },
    {
        id: 'saas',
        title: 'Startup & SaaS Development',
        icon: Layers,
        description: 'From MVP to multi-tenant SaaS — we build products that scale.',
        items: [
            'MVP Development',
            'SaaS Architecture Design',
            'Subscription Billing Systems',
            'Multi-Tenant SaaS Systems',
            'Admin Dashboards',
            'Marketplace Development',
            'White-Label Software',
            'API Marketplace Development',
            'Licensing Systems',
        ],
    },
    {
        id: 'digital-transformation',
        title: 'Business Growth & Digital Transformation',
        icon: TrendingUp,
        description: 'Strategic consulting to guide your company through the digital era.',
        items: [
            'Digital Strategy Consulting',
            'Automation Planning',
            'Business Process Optimization',
            'Tech Stack Consulting',
            'AI Adoption Strategy',
            'Revenue Optimization Systems',
            'Data-Driven Decision Systems',
            'Corporate Digital Transformation',
        ],
    },
    {
        id: 'marketing',
        title: 'Marketing & Automation Tools',
        icon: Megaphone,
        description: 'Automated marketing systems and funnels to capture and convert leads at scale.',
        items: [
            'Email Automation Systems',
            'CRM Automation',
            'Lead Capture Systems',
            'Funnel Development',
            'Sales Tracking Systems',
            'WhatsApp Business Integration',
            'SMS Automation',
            'SEO Strategy Planning',
            'Analytics & Tracking Setup',
        ],
    },
    {
        id: 'industry',
        title: 'Industry-Specific Solutions',
        icon: Factory,
        description: 'Specialized software tailored for the unique challenges of your industry.',
        items: [
            'Education ERP',
            'Hospital Management Systems',
            'Manufacturing ERP',
            'Real Estate CRM',
            'Logistics & Fleet Management',
            'Finance & NBFC Systems',
            'MSME Business Solutions',
            'Franchise Management Software',
            'E-commerce Aggregator Systems',
        ],
    },
    {
        id: 'custom-dev',
        title: 'Custom Development Services',
        icon: Wrench,
        description: 'Bespoke engineering services — from UI/UX design to full system migrations.',
        items: [
            'UI/UX Design Systems',
            'Admin Panel Development',
            'Dashboard Engineering',
            'API Integration',
            'Payment Integration',
            'Third-Party Integration',
            'Legacy System Modernization',
            'Software Refactoring',
            'Performance Optimization',
            'System Migration',
        ],
    },
    {
        id: 'emerging',
        title: 'Emerging Technologies',
        icon: BarChart3,
        description: 'Next-generation tech solutions — blockchain, IoT, AR/VR, and edge AI.',
        items: [
            'Blockchain Solutions',
            'Smart Contract Development',
            'IoT Integration',
            'Edge AI Systems',
            'AR/VR Applications',
            'AI-Powered Surveillance Systems',
            'Automation Robotics Integration',
        ],
    },
];

// Legacy interface kept for backward compatibility with Home.tsx
export interface Service {
    id: string;
    title: string;
    description: string;
    iconName: string;
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
