export const es = {
    nav: {
        home: "Inicio",
        services: "Servicios",
        pricing: "Precios",
        about: "Nosotros",
        intelligence: "Inteligencia",
        requestAudit: "Solicitar Auditoría"
    },
    hero: {
        badge: "Sistemas de Defensa Impulsados por IA",
        headline: "Seguridad que piensa",
        headlineGradient: "más rápido que los hackers",
        description: "Protegiendo infraestructura con inteligencia proactiva impulsada por IA. Detenemos amenazas",
        descriptionBold: "antes",
        descriptionEnd: "de que sucedan.",
        ctaPrimary: "Iniciar Escaneo de Seguridad Gratuito",
        ctaSecondary: "Ver Soluciones",
        trustedBy: "Confiado por Innovadores Globales",
        motto: "Defensa Activa // Inteligencia Artificial // Seguridad Sin Fronteras"
    },
    services: {
        title: "Soluciones de Seguridad",
        titleGradient: "Impulsadas por IA",
        description: "Desde monitoreo continuo hasta respuesta a incidentes, nuestros servicios impulsados por IA protegen tu infraestructura las 24 horas.",
        monitoring: {
            title: "Monitoreo 24/7 con IA",
            description: "Nuestra IA nunca duerme. Detección continua de amenazas con algoritmos de aprendizaje automático que identifican anomalías antes de que se conviertan en brechas.",
            features: ["Detección de amenazas en tiempo real", "Análisis de comportamiento", "Alertas automatizadas"]
        },
        pentesting: {
            title: "Pentesting Impulsado por IA",
            description: "Te hackeamos éticamente antes que los malos. Escaneo de vulnerabilidades impulsado por IA combinado con validación manual experta.",
            features: ["Pruebas de caja negra", "Detección de inyección SQL", "Informes detallados"]
        }
    },
    pricing: {
        title: "Seguridad que Escala",
        titleGradient: "Contigo",
        description: "Desde startups hasta empresas, tenemos un plan diseñado para tus necesidades de seguridad y presupuesto.",
        sme: {
            name: "Escudo PYME",
            description: "Protección esencial para pequeñas empresas",
            price: "$350",
            priceRange: "- $500",
            period: "por mes"
        },
        sentinel: {
            name: "Aura Sentinel",
            description: "Protección avanzada impulsada por IA",
            badge: "Más Popular"
        },
        ciso: {
            name: "CISO como Servicio",
            description: "Liderazgo de seguridad a nivel ejecutivo"
        }
    },
    scanner: {
        title: "Escanea Tu Sitio Web Ahora",
        description: "Obtén un análisis de seguridad gratuito en segundos",
        placeholder: "ejemplo.com",
        button: "Escanear Ahora",
        scanning: "Escaneando...",
        results: {
            grade: "Calificación de Seguridad",
            issues: "Problemas Encontrados",
            recommendations: "Recomendaciones"
        }
    },
    footer: {
        tagline: "La seguridad no es un producto, es un proceso. Y AuraLink es el arquitecto de ese proceso."
    }
} as const;

export type Translations = typeof es;
