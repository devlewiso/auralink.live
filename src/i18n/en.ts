export const en = {
    nav: {
        home: "Home",
        services: "Services",
        products: "Products",
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
    merch: {
        title: "AuraLink",
        titleGradient: "Merch",
        description: "Carry security with you. Exclusive products designed for the cyber community.",
        products: {
            cap: {
                name: "Tactical Cap",
                description: "Black cap with embroidered logo in emerald green. Tactical style, universal fit.",
                price: "$35"
            },
            tshirt: {
                name: "Zero Day T-Shirt",
                description: "Premium black cotton. 'Zero Day' design on chest, AuraLink logo on back.",
                price: "$45"
            },
            hoodie: {
                name: "Encrypted Hoodie",
                description: "Black hoodie with encrypted code design. Kangaroo pocket, soft interior.",
                price: "$75"
            },
            keychain: {
                name: "Hex Keychain",
                description: "Metal keychain in hexagonal chip shape. Matte black finish with engraved logo.",
                price: "$15"
            },
            sticker: {
                name: "Sticker Pack",
                description: "Pack of 5 water-resistant stickers. Logos, icons and cyber-security phrases.",
                price: "$10"
            },
            mug: {
                name: "Terminal Mug",
                description: "Matte black ceramic mug. Command terminal design in phosphor green.",
                price: "$25"
            }
        }
    },
    footer: {
        tagline: "Security is not a product, it's a process. And AuraLink is the architect of that process."
    }
};

export type Translations = typeof en;
