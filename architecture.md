# 🏗️ Technical Architecture & Web Development: AuraLink.live

**Stack:** Astro 4.0 + React (Islands) | **Focus:** Extreme Performance & SEO | **Target:** Global Corporate

## 1. Technology Stack (The Heavy Artillery)

To achieve "professional corporate" grade, we utilize an Islands Architecture that prioritizes load speed (vital for SEO and trust).

*   **Core:** Astro (The premier choice for high-performance sites).
*   **Interactivity:** React (Integrated within Astro only where necessary: scanner, login, payments).
*   **Language:** TypeScript (Strict. Zero production errors).
*   **Styling:** Tailwind CSS (Design velocity) + Shadcn/ui (Enterprise UI components).
*   **Animations:** Framer Motion (For smooth interactions) or native View Transitions.
*   **CMS:** Sanity.io (Publish security alerts and articles without touching code).
*   **Hosting:** Vercel (Global Edge infrastructure).
*   **Authentication:** Clerk (User management for Client Portal).
*   **Global Payments:** LemonSqueezy or Paddle (Automatically handle international taxes, ideal for selling digital services from Guatemala).

## 2. Visual Identity (Cyber-Corporate)

The design must convey "Authority" and "Cutting Edge."

**Color Palette:**
*   **Background:** Slate-950 (Deep dark, not flat black).
*   **Primary:** Emerald-500 (Modern cybersecurity green) or Cyan-500 (Futuristic).
*   **Alert:** Rose-500 (To visualize stopped threats).
*   **Text:** Slate-200 (High contrast without eye strain).

**Typography:**
*   **Headings:** Space Grotesk (Technical and readable).
*   **Body:** Inter (Industry standard for clear reading).

## 3. Project Structure (Astro + i18n)

Structure prepared to scale to your 3 main languages from day 1.

```text
auralink-web/
├── src/
│   ├── components/
│   │   ├── react/        # Interactive Islands (Load JS)
│   │   │   ├── SecurityScanner.tsx
│   │   │   ├── ClientDashboard.tsx
│   │   │   └── PricingTable.tsx (With Paddle buttons)
│   │   ├── astro/        # Static Components (Zero JS)
│   │   │   ├── Hero.astro
│   │   │   └── Features.astro
│   │   └── ui/           # Shadcn Components (Buttons, Cards)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/            # Routes
│   │   ├── index.astro   # Home
│   │   ├── services.astro
│   │   ├── pricing.astro
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── scanner.astro # Security Scanner Demo
│   │   ├── [lang]/       # ⚠️ Dynamic Language Routing (Future)
│   │   └── api/          # Endpoints (Scanner logic, Webhooks)
│   ├── i18n/             # Translation Dictionaries
│   │   ├── es.ts         # "Ciberseguridad Proactiva"
│   │   ├── en.ts         # "Proactive Cybersecurity"
│   │   ├── pt.ts         # "Cibersegurança Proativa"
│   │   └── utils.ts      # Language detection utilities
│   ├── content/          # Blog (Markdown/CMS)
│   └── styles/
│       └── global.css
├── public/
├── astro.config.mjs
└── package.json
```

## 4. Key Components & "Wow Factors"

*   **A. The "Hero" Section (Static)**
    *   Visual: An abstract 3D map (optimized Three.js) showing "nodes" connecting from Guatemala to the world.
    *   Copy: Dynamic based on browser-detected language.
    *   Performance: Instant load, animation enters progressively.

*   **B. Security Scanner (React Island)**
    *   Directive: `<SecurityScanner client:load />`
    *   Function: User enters their domain. Your API checks basic headers (HSTS, CSP) in real-time and gives a grade "F" to "A".
    *   Conversion: If grade is low → "Schedule an audit with Iran".
    *   **Status:** ✅ Implemented with mock API

*   **C. Client Portal (Self-Service) - Future Phase**
    *   Route: `/portal`
    *   Tech: Clerk + React.
    *   Use: Your clients log in here to see:
        *   System status (Simulated or real dashboard).
        *   Download PDF invoices.
        *   View monthly incident reports.

## 5. Scalability Strategy (Growth Pillars)

This is where we go from "Freelance" to "Tech Company."

**A. Internationalization (i18n)**
*   Strategy: Your codebase is one. Content lives in separate files (es.ts, en.ts, pt.ts).
*   Advantage: You can launch LinkedIn campaigns targeting Brazil or USA and direct them to `auralink.live/pt` or `auralink.live/en` with no extra effort.
*   **Status:** ✅ Translation files created for ES, EN, PT

**B. Sales Automation (Checkout)**
*   Tool: LemonSqueezy or Paddle.
*   Flow:
    1. Client selects "SME Plan ($350/mo)".
    2. Pays with corporate card.
    3. System charges taxes, generates invoice, and sends welcome email.
    4. You only receive the money notification.

**C. Trust Center (Trust Hub) - Future Phase**
*   Page: `/trust`
*   Content: Shows "Uptime" of your services and your security policies.
*   Effect: Reduces negotiation time with large clients who demand to know how you protect THEIR data.

## 6. Site Security (Dogfooding)

As a security company, your website must be a fortress.

*   **Strict Headers:** CSP (Content Security Policy) configured to not allow unauthorized external scripts.
*   **DDoS Protection:** Use Vercel/Cloudflare firewall.
*   **Honeypots:** Hidden fields in your forms to catch bots without bothering humans with difficult captchas.

## 7. Execution Roadmap (Sprints)

**Phase 1: Solid MVP (Weeks 1-2)** ✅ COMPLETED
*   Configure Astro with Tailwind and i18n routes (/es, /en).
*   Impactful Home Page + Services Page.
*   Contact form connected to your email.
*   **Delivered:** 5 core pages (Home, Services, Pricing, About, Blog)

**Phase 2: Functionality & Languages (Weeks 3-4)** 🚧 IN PROGRESS
*   Add Portuguese language (/pt).
*   Implement "Security Scanner" (Lead Magnet).
*   Connect CMS for Blog.
*   **Delivered:** Scanner page with React Island, i18n structure

**Phase 3: Automation (Month 2)** 📋 PLANNED
*   Integrate Login (Clerk) and Client Portal.
*   Connect payment gateway for recurring services.

---

## Current Implementation Status

### ✅ Completed Features
- **Core Pages:** Home, Services, Pricing, About, Blog, Scanner
- **Design System:** Cyber-Corporate theme with Emerald-500 primary color
- **i18n Structure:** Translation files for Spanish, English, Portuguese
- **Interactive Components:** Security Scanner React Island with Framer Motion
- **Performance:** Astro Islands architecture for optimal load times

### 🚧 In Progress
- API endpoint for real security scanning
- Language routing implementation
- CMS integration for blog content

### 📋 Planned
- Clerk authentication integration
- Client portal dashboard
- LemonSqueezy/Paddle payment integration
- Trust Center page
- Real-time monitoring dashboard

---

*"Security is not a product, it's a process. And AuraLink is the architect of that process."*