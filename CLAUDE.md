# AuraLink.live — Project Context for AI Assistants

You are working on **AuraLink.live**, an AI-powered cybersecurity firm. This file contains everything you need to contribute effectively to this project.

---

## Project Info
- **Repo:** https://github.com/devlewiso/auralink.live
- **Live:** https://auralink.live
- **Path:** /root/github projects/auralink.live
- **Branch:** main (production)

---

## Tech Stack
- **Framework:** Astro 5 (Islands Architecture)
- **Frontend:** React 19, TypeScript, Tailwind CSS 4
- **Animations:** Framer Motion, tsparticles
- **i18n:** ES / EN / PT via `src/i18n/en.ts`, `es.ts`, `pt.ts`
- **Deploy:** Netlify (SSR enabled)
- **Auth:** Clerk (in progress)
- **Payments:** LemonSqueezy (in progress)

---

## Visual Identity: "Cyber-Corporate"
- **Background:** `Slate-950`
- **Primary:** `Emerald-500` — cybersecurity green
- **Secondary:** `Cyan-500` — futuristic
- **Alert:** `Rose-500`
- **Headings:** Space Grotesk
- **Body:** Inter

---

## Component Architecture
- `src/components/react/` — Interactive React islands (`client:load`, `client:visible`)
- `src/components/` — Static Astro components (zero JS)
- `src/layouts/` — Shared page layouts
- `src/content/blog/` — Blog posts as Markdown with YAML frontmatter
- `public/blog/` — Blog post images (generated with fal.ai Flux Dev)

---

## Blog Content Strategy

### Audience
Security-conscious business owners, IT professionals, and tech-savvy individuals in Latin America and globally.

### Brand Voice
Expert but accessible. No jargon for jargon's sake. Conversational, direct, occasionally provocative. Every post connects to a cybersecurity angle — AuraLink's core domain.

### Post Structure (follow this every time)
1. **Hook** — Shocking fact, real incident, or provocative question. First 2 sentences must earn the read.
2. **Context section** — Why this topic matters right now
3. **Main content** — H2/H3 hierarchy, minimum 2,500 words for competitive topics
4. **Comparison table** — Stars (⭐ ⭐ ⭐) with spaces between them, not ⭐⭐⭐
5. **AuraLink Security Perspective** — Connect ANY topic back to cybersecurity (this is the brand differentiator)
6. **FAQ** — For high-volume search topics, add 3–4 direct Q&A
7. **Two CTAs** — Scanner (`/#scanner`) and Contact (`/contact`)
8. **Signature line** — *AuraLink AI Security — [thematic closing line]*

### Frontmatter Schema
```yaml
---
title: "Primary keyword + year + compelling angle"       # Under 65 chars ideal
description: "150-160 chars. Hook + keyword + benefit."  # Critical for CTR
pubDate: YYYY-MM-DD
author: "AuraLink Intelligence Team"
category: "AI & Cyber Trends" | "AI Security" | "Tech Culture"
tags: ["10 tags", "mix of exact-match", "long-tail keywords", "brand terms"]
featured: false   # Only ONE post can be true at a time
image: "/blog/slug-name.jpg"   # Always local, generated with fal.ai
---
```

### SEO Requirements (target: position 1 on Google + AI search engines)
- **Primary keyword** in: title, first paragraph, at least 2 H2s, meta description
- **Word count:** 2,500–3,500 words for competitive topics
- **Tables:** Use for comparisons — AI searchers (Perplexity, SearchGPT) extract and cite them
- **FAQ section:** Triggers Google "People Also Ask" rich results
- **Internal links:** Always link to other blog posts and to `/#scanner`
- **E-E-A-T signals:** Cite real incidents, real numbers, real dates
- **Unique angle:** Every post must have a cybersecurity perspective no generic tech blog has

### Images
- Generated with **fal.ai Flux Dev** model
- Saved to `public/blog/[slug].jpg`
- Referenced as `/blog/[slug].jpg` in frontmatter
- Prompt style: cinematic, dark atmosphere, emerald/cyan lighting, 16:9

### Existing Posts
| Slug | Topic | Category |
|------|-------|----------|
| `back-to-the-future-we-are-living-it` | Tech culture + AI threats | Tech Culture |
| `generative-ai-security-threat-and-shield` | GenAI as threat and defense | AI Security |
| `5-signs-your-business-was-hacked` | Incident detection listicle | AI Security |
| `ai-as-your-command-center` | AI productivity | AI & Cyber Trends |
| `ai-car-audio-future` | AI in vehicles | Tech Culture |
| `red-team-operations-the-watcher` | Red team / offensive security | AI Security |
| `the-end-of-boring-search-2026` | Perplexity vs SearchGPT vs Google | AI & Cyber Trends |
| `ai-video-generation-sora-kling-runway-2026` | AI video tools comparison | AI & Cyber Trends |
| `ai-agents-replacing-productivity-apps-2026` | AI agents vs app stacks | AI & Cyber Trends |
| `deepfake-detection-how-to-spot-ai-content-2026` | Deepfake detection guide | AI Security |
| `ai-gadgets-vs-smartphones-end-of-iphone-era-2026` | AI hardware vs smartphones | AI & Cyber Trends |

---

## Development Mandates
1. **Performance first** — Static Astro for content, React only where interaction is required
2. **Strict TypeScript** — No `any`, interfaces defined for all API responses and props
3. **i18n mandatory** — All user-facing strings go through translation files
4. **Security dogfooding** — DOMPurify for inputs, CSP headers enforced, all form data validated
5. **No hardcoded secrets** — Environment variables only, never in source code or this file
