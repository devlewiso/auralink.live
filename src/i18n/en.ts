import type { Translations } from './es';

export const en: Translations = {
    nav: {
        home: "Home",
        services: "Services",
        pricing: "Pricing",
        about: "About",
        intelligence: "Intelligence",
        requestAudit: "Request Audit"
    },
    hero: {
        badge: "AI-Powered Defense Systems",
        headline: "Security that thinks",
        headlineGradient: "faster than hackers",
        description: "Protecting infrastructure with proactive AI-driven intelligence. We stop threats",
        descriptionBold: "before",
        descriptionEnd: "they happen.",
        ctaPrimary: "Start Free Security Scan",
        ctaSecondary: "View Solutions",
        trustedBy: "Trusted by Global Innovators",
        motto: "Active Defense // Artificial Intelligence // Borderless Security"
    },
    services: {
        title: "AI-Powered Security",
        titleGradient: "Solutions",
        description: "From continuous monitoring to incident response, our AI-driven services protect your infrastructure around the clock.",
        monitoring: {
            title: "24/7 AI Monitoring",
            description: "Our AI never sleeps. Continuous threat detection with machine learning algorithms that identify anomalies before they become breaches.",
            features: ["Real-time threat detection", "Behavioral analysis", "Automated alerts"]
        },
        pentesting: {
            title: "AI-Driven Pentesting",
            description: "We hack you ethically before the bad actors do. AI-powered vulnerability scanning combined with expert manual validation.",
            features: ["Black box testing", "SQL injection detection", "Detailed reporting"]
        }
    },
    pricing: {
        title: "Security That Scales",
        titleGradient: "With You",
        description: "From startups to enterprises, we have a plan designed for your security needs and budget.",
        sme: {
            name: "SME Shield",
            description: "Essential protection for small businesses",
            price: "$350",
            priceRange: "- $500",
            period: "per month"
        },
        sentinel: {
            name: "Aura Sentinel",
            description: "Advanced AI-powered protection",
            badge: "Most Popular"
        },
        ciso: {
            name: "CISO as a Service",
            description: "Executive-level security leadership"
        }
    },
    scanner: {
        title: "Scan Your Website Now",
        description: "Get a free security analysis in seconds",
        placeholder: "example.com",
        button: "Scan Now",
        scanning: "Scanning...",
        results: {
            grade: "Security Grade",
            issues: "Issues Found",
            recommendations: "Recommendations"
        }
    },
    footer: {
        tagline: "Security is not a product, it's a process. And AuraLink is the architect of that process."
    }
};
