import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_ur5-Flif.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_De95F2xK.mjs';
import { P as ParticlesBackground } from '../chunks/ParticlesBackground_BvWWRDi_.mjs';
import { a as actions } from '../chunks/virtual_dh08R7ll.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const result = Astro2.getActionResult(actions.contactForm);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "description": "Get in touch with AuraLink AI Security. Schedule a free consultation or request a security audit." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen overflow-hidden bg-[#020617]"> <!-- Particles Background --> ${renderComponent($$result2, "ParticlesBackground", ParticlesBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/devlewiso/Desktop/git/auralink.live/src/components/react/ParticlesBackground", "client:component-export": "default" })} <!-- Background glow effects --> <div class="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div> <div class="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div> <!-- Navigation --> ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/contact" })} <!-- Hero Section --> <section class="container mx-auto px-6 pt-20 pb-16 text-center relative z-10"> <div class="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 bg-emerald-500/10 rounded-full"> <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider">Get in Touch</span> </div> <h1 class="text-5xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
Let's <span class="text-gradient">Secure Your Future</span> </h1> <p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
Ready to protect your infrastructure? Schedule a free
                consultation with our cybersecurity experts.
</p> </section> <!-- Contact Section --> <section class="container mx-auto px-6 py-20 relative z-10"> <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"> <!-- Contact Form --> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"> <h2 class="text-3xl font-bold mb-6">Send us a message</h2> ${result?.data && renderTemplate`<div class="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"> <p class="text-emerald-400 font-medium"> ${result.data.message} </p> </div>`} ${result?.error && renderTemplate`<div class="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"> <p class="text-red-400 font-medium"> ${result.error.fields?.name?.[0] || result.error.fields?.email?.[0] || result.error.fields?.message?.[0] || "Please check your form and try again."} </p> </div>`} <form method="POST"${addAttribute(actions.contactForm, "action")} class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Full Name *</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="John Doe"> </div> <div> <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email Address *</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="john@company.com"> </div> <div> <label for="company" class="block text-sm font-medium text-slate-300 mb-2">Company</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors" placeholder="Your Company Inc."> </div> <div> <label for="service" class="block text-sm font-medium text-slate-300 mb-2">Service Interested In</label> <select id="service" name="service" class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors"> <option value="">Select a service</option> <option value="monitoring">24/7 AI Monitoring</option> <option value="pentest">Penetration Testing</option> <option value="incident">Incident Response</option> <option value="audit">Security Audit</option> <option value="compliance">Compliance Consulting</option> <option value="zerotrust">Zero Trust Architecture</option> <option value="training">Security Training</option> <option value="other">Other</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message *</label> <textarea id="message" name="message" required rows="5" class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white transition-colors resize-none" placeholder="Tell us about your security needs..."></textarea> </div> <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 glow-primary">
Send Message
</button> </form> </div> <!-- Contact Information --> <div class="space-y-8"> <!-- Contact Details --> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"> <h3 class="text-2xl font-bold mb-6">
Why Choose AuraLink?
</h3> <div class="space-y-6"> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <p class="font-bold text-white mb-1">
Fast Response
</p> <p class="text-sm text-slate-400">
We respond to all inquiries within 24
                                        hours
</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div> <p class="font-bold text-white mb-1">
Trusted Security
</p> <p class="text-sm text-slate-400">
Enterprise-grade protection for all
</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <p class="font-bold text-white mb-1">
Global Coverage
</p> <p class="text-sm text-slate-400">
Serving clients worldwide with Latin
                                        America focus
</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <div> <p class="font-bold text-white mb-1">
AI-Powered
</p> <p class="text-sm text-slate-400">
Advanced threat detection with machine
                                        learning
</p> </div> </div> </div> </div> <!-- Quick Links --> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"> <h3 class="text-2xl font-bold mb-6">Quick Actions</h3> <div class="space-y-4"> <a href="/scanner" class="block w-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-lg p-4 transition-all group"> <div class="flex items-center justify-between"> <div> <p class="font-bold text-white group-hover:text-emerald-400 transition-colors">
Free Security Scan
</p> <p class="text-sm text-slate-400">
Test your website now
</p> </div> <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a> <a href="/pricing" class="block w-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-lg p-4 transition-all group"> <div class="flex items-center justify-between"> <div> <p class="font-bold text-white group-hover:text-emerald-400 transition-colors">
View Pricing
</p> <p class="text-sm text-slate-400">
Transparent pricing plans
</p> </div> <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a> <a href="/services" class="block w-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-lg p-4 transition-all group"> <div class="flex items-center justify-between"> <div> <p class="font-bold text-white group-hover:text-emerald-400 transition-colors">
Our Services
</p> <p class="text-sm text-slate-400">
Explore our solutions
</p> </div> <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </a> </div> </div> </div> </div> </section> <!-- FAQ Section --> <section class="container mx-auto px-6 py-16 relative z-10"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">
Frequently Asked Questions
</h2> <div class="space-y-6"> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold text-white mb-2">
How quickly will I receive a response?
</h3> <p class="text-slate-400">
We respond to all inquiries within 24 hours during
                            business days. For urgent security matters, we
                            prioritize immediate response.
</p> </div> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold text-white mb-2">
Do you offer free consultations?
</h3> <p class="text-slate-400">
Yes! We provide a complimentary 30-minute security
                            assessment to understand your needs and recommend
                            the best solutions.
</p> </div> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold text-white mb-2">
What industries do you serve?
</h3> <p class="text-slate-400">
We serve businesses across all industries including
                            finance, healthcare, e-commerce, SaaS, and more. Our
                            solutions are tailored to your specific compliance
                            and security requirements.
</p> </div> </div> </div> </section> </main> ` })}`;
}, "/home/devlewiso/Desktop/git/auralink.live/src/pages/contact.astro", void 0);

const $$file = "/home/devlewiso/Desktop/git/auralink.live/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
