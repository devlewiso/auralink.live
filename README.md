<div align="center">

# 🛡️ AuraLink AI Security

### *Security that thinks faster than hackers*

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

**AI-powered cybersecurity platform delivering proactive threat detection and enterprise-grade protection for organizations across Latin America and beyond.**

[🌐 Live Demo](#) • [📖 Documentation](./architecture.md) • [🚀 Get Started](#-quick-start) • [🔒 Security](#-security-features)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Security Features](#-security-features)
- [Development](#-development)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**AuraLink** is a cutting-edge cybersecurity platform that combines human expertise with artificial intelligence to deliver proactive security solutions. Built with modern web technologies, it provides:

- 🤖 **AI-Powered Threat Detection** - Real-time anomaly detection using machine learning
- 🔍 **Free Security Scanner** - Instant website security analysis
- 🌐 **Multi-language Support** - Spanish, English, and Portuguese (i18n ready)
- ⚡ **High Performance** - Built with Astro for optimal loading speeds
- 🎨 **Premium Design** - Cyber-corporate aesthetic with interactive particle effects

### 🎓 Mission

To democratize enterprise-grade cybersecurity through AI-powered automation, making advanced threat protection accessible to organizations of all sizes.

---

## ✨ Key Features

### 🛡️ Core Services

| Feature | Description | Status |
|---------|-------------|--------|
| **24/7 AI Monitoring** | Continuous threat detection with ML algorithms | ✅ Active |
| **Penetration Testing** | Ethical hacking with AI-powered vulnerability scanning | ✅ Active |
| **Incident Response** | AI-assisted rapid threat neutralization | ✅ Active |
| **Security Audits** | Comprehensive infrastructure assessments | ✅ Active |
| **Compliance Management** | GDPR, SOC 2, ISO 27001 compliance support | ✅ Active |
| **Zero Trust Architecture** | Implementation and consulting | ✅ Active |

### 🎨 Website Features

- ✅ **Interactive Particle Background** - tsparticles with cursor interaction
- ✅ **Free Security Scanner** - React Island component with real-time validation
- ✅ **Hardened Security** - XSS protection, input sanitization, rate limiting
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Smooth Animations** - Framer Motion for premium UX
- ✅ **SEO Optimized** - Meta tags, semantic HTML, performance optimized
- 🚧 **i18n Support** - Multi-language routing (ES, EN, PT)
- 🚧 **Clerk Authentication** - User management for client portal
- 🚧 **Payment Integration** - LemonSqueezy for subscriptions

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Astro 5.0](https://astro.build)** - Static Site Generator with Islands Architecture
- **[React 18](https://react.dev)** - UI components for interactive features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### **Styling & Animation**
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[tsparticles](https://particles.js.org/)** - Interactive particle effects

### **Internationalization**
- **[astro-i18next](https://github.com/yassinedoghri/astro-i18next)** - i18n routing
- **[i18next](https://www.i18next.com/)** - Translation management

### **Authentication & Payments** (Planned)
- **[@clerk/astro](https://clerk.com)** - User authentication
- **[LemonSqueezy](https://lemonsqueezy.com)** - Payment processing

### **Deployment**
- **[Vercel](https://vercel.com)** - Hosting platform (target)
- **[Node.js](https://nodejs.org/)** - SSR adapter

---

## 📁 Project Structure

```
auralink_link_CS/
├── 📂 public/                  # Static assets
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 react/          # React Islands
│   │   │   ├── SecurityScanner.tsx    # Free security scan tool
│   │   │   └── ParticlesBackground.tsx # Interactive particles
│   │   └── ...
│   ├── 📂 layouts/
│   │   └── Layout.astro       # Base layout with SEO
│   ├── 📂 pages/              # File-based routing
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── services.astro     # Services overview
│   │   ├── pricing.astro      # Pricing tiers
│   │   ├── scanner.astro      # Security scanner page
│   │   └── blog/              # Blog posts
│   ├── 📂 i18n/               # Translations
│   │   ├── en.ts              # English
│   │   ├── es.ts              # Spanish
│   │   ├── pt.ts              # Portuguese
│   │   └── utils.ts           # i18n utilities
│   └── 📂 styles/
│       └── global.css         # Global styles
├── 📄 architecture.md         # Technical architecture
├── 📄 businessContext.md      # Business model & strategy
├── 📄 astro.config.mjs        # Astro configuration
├── 📄 tailwind.config.mjs     # Tailwind configuration
└── 📄 package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.9.0+ (LTS recommended)
- **npm** 10.1.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/auralink_link_CS.git
cd auralink_link_CS

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### 🧞 Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run type checking |

---

## 🔒 Security Features

### Implemented Protections

Our **Security Scanner** component demonstrates the security practices we preach:

#### ✅ **XSS Protection**
- Real-time input sanitization
- HTML entity escaping
- Dangerous character removal (`<`, `>`, `'`, `"`)

```typescript
const sanitizeInput = (input: string): string => {
    return input.trim()
        .replace(/[<>'"]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .slice(0, 253);
};
```

#### ✅ **Input Validation**
- RFC 1035 compliant domain validation
- Maximum length enforcement (253 chars)
- Pattern matching with regex
- Path traversal prevention

```typescript
const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
```

#### ✅ **Rate Limiting**
- Client-side throttling (5-second cooldown)
- Timestamp-based enforcement
- User-friendly error messages

#### ✅ **Defense in Depth**
- Multiple validation layers
- Fail-safe defaults
- Graceful error handling
- No sensitive data exposure

### Security Testing

All security features have been tested against:
- ❌ XSS attacks: `<script>alert('XSS')</script>`
- ❌ HTML injection: `<img src=x onerror="alert(1)">`
- ❌ SQL injection patterns: `' OR '1'='1`
- ❌ Path traversal: `../../../etc/passwd`

**Result:** ✅ All attacks successfully blocked

---

## 💻 Development

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting (planned)
- **Prettier** for code formatting (planned)
- **Husky** for pre-commit hooks (planned)

### Design System

- **Colors:** Slate-950 background, Emerald-500 primary, Cyan-500 accent
- **Typography:** System fonts with fallbacks
- **Spacing:** Tailwind's default scale
- **Animations:** Framer Motion with reduced motion support

### Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Build for production
npm run build

# Preview build
npm run preview
```

The build output will be in `./dist/`

### Environment Variables

Create a `.env` file for production:

```env
# Clerk (Authentication)
PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_secret_here

# LemonSqueezy (Payments)
LEMONSQUEEZY_API_KEY=your_key_here
LEMONSQUEEZY_STORE_ID=your_store_id
```

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅ (Completed)
- [x] Core pages (Home, Services, Pricing, About, Blog)
- [x] Security Scanner React Island
- [x] Interactive particle effects
- [x] Responsive design
- [x] Security hardening (XSS, validation, rate limiting)

### Phase 2: i18n & Content 🚧 (In Progress)
- [x] i18n structure setup
- [ ] Dynamic language routing
- [ ] Translated content for all pages
- [ ] Language switcher component

### Phase 3: Authentication & Portal 📋 (Planned)
- [ ] Clerk integration
- [ ] User dashboard
- [ ] Client portal with self-service tools
- [ ] Subscription management

### Phase 4: Payments & CMS 📋 (Planned)
- [ ] LemonSqueezy integration
- [ ] Subscription tiers
- [ ] Sanity.io CMS for blog
- [ ] Invoice generation

### Phase 5: Advanced Features 💡 (Future)
- [ ] Real security scanner API
- [ ] AI chatbot for support
- [ ] Vulnerability database
- [ ] Threat intelligence feed

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write semantic HTML
- Use Tailwind utility classes
- Test on multiple browsers
- Ensure accessibility (WCAG 2.1 AA)

---

## 📄 License

This project is licensed under a **Proprietary License**.

### What this means:

- ✅ **You CAN:** View and reference this code for educational and portfolio purposes
- ❌ **You CANNOT:** Use this code commercially, modify it, or create competing services without permission

**Copyright (c) 2026 AuraLink. All rights reserved.**

For licensing inquiries or commercial use permissions, please contact: **contact@auralink.com**

See the [LICENSE](LICENSE) file for complete terms and conditions.

---

## 👨‍💻 Author

**Iran Trinidad**  
Founder & Chief Security Officer

- 🛡️ 100+ Professional Certifications
- 🎓 Coursera, Pluralsight, Google Cloud Verified
- 💼 Expertise: Cybersecurity, AI/ML, Cloud Infrastructure, Data Analytics

### Certifications & Expertise

- **Cybersecurity:** Palo Alto Networks, ISC2, Penetration Testing, Zero Trust
- **AI & Machine Learning:** Google AI, IBM Watson, Claude 3, GPT-4o
- **Cloud:** Google Cloud Platform, Azure AI Services, Proxmox
- **Data:** IBM Data Analysis, Power BI, SQL, Data Governance

---

## 🔗 Links

- 🌐 **Website:** [auralink.com](#) (Coming Soon)
- 📧 **Email:** contact@auralink.com
- 💼 **LinkedIn:** [Iran Trinidad](#)
- 🐦 **Twitter:** [@AuraLinkSec](#)

---

<div align="center">

**Built with ❤️ and 🛡️ by the AuraLink Team**

*Protecting infrastructure with proactive AI-driven intelligence*

</div>
