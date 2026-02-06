import type { Translations } from './es';

export const pt: Translations = {
    nav: {
        home: "Início",
        services: "Serviços",
        pricing: "Preços",
        about: "Sobre",
        intelligence: "Inteligência",
        requestAudit: "Solicitar Auditoria"
    },
    hero: {
        badge: "Sistemas de Defesa Alimentados por IA",
        headline: "Segurança que pensa",
        headlineGradient: "mais rápido que hackers",
        description: "Protegendo infraestrutura com inteligência proativa alimentada por IA. Paramos ameaças",
        descriptionBold: "antes",
        descriptionEnd: "que aconteçam.",
        ctaPrimary: "Iniciar Varredura de Segurança Gratuita",
        ctaSecondary: "Ver Soluções",
        trustedBy: "Confiado por Inovadores Globais",
        motto: "Defesa Ativa // Inteligência Artificial // Segurança Sem Fronteiras"
    },
    services: {
        title: "Segurança Alimentada por IA",
        titleGradient: "Soluções",
        description: "Do monitoramento contínuo à resposta a incidentes, nossos serviços alimentados por IA protegem sua infraestrutura 24 horas por dia.",
        monitoring: {
            title: "Monitoramento 24/7 com IA",
            description: "Nossa IA nunca dorme. Detecção contínua de ameaças com algoritmos de aprendizado de máquina que identificam anomalias antes que se tornem violações.",
            features: ["Detecção de ameaças em tempo real", "Análise comportamental", "Alertas automatizados"]
        },
        pentesting: {
            title: "Pentesting Alimentado por IA",
            description: "Nós hackeamos você eticamente antes que os maus atores façam. Varredura de vulnerabilidades alimentada por IA combinada com validação manual especializada.",
            features: ["Testes de caixa preta", "Detecção de injeção SQL", "Relatórios detalhados"]
        }
    },
    pricing: {
        title: "Segurança que Escala",
        titleGradient: "Com Você",
        description: "De startups a empresas, temos um plano projetado para suas necessidades de segurança e orçamento.",
        sme: {
            name: "Escudo PME",
            description: "Proteção essencial para pequenas empresas",
            price: "$350",
            priceRange: "- $500",
            period: "por mês"
        },
        sentinel: {
            name: "Aura Sentinel",
            description: "Proteção avançada alimentada por IA",
            badge: "Mais Popular"
        },
        ciso: {
            name: "CISO como Serviço",
            description: "Liderança de segurança em nível executivo"
        }
    },
    scanner: {
        title: "Escaneie Seu Site Agora",
        description: "Obtenha uma análise de segurança gratuita em segundos",
        placeholder: "exemplo.com",
        button: "Escanear Agora",
        scanning: "Escaneando...",
        results: {
            grade: "Nota de Segurança",
            issues: "Problemas Encontrados",
            recommendations: "Recomendações"
        }
    },
    footer: {
        tagline: "Segurança não é um produto, é um processo. E AuraLink é o arquiteto desse processo."
    }
};
