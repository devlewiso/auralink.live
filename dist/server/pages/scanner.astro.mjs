import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ur5-Flif.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_De95F2xK.mjs';
import { S as SecurityScanner } from '../chunks/SecurityScanner_Daj_QwBi.mjs';
export { renderers } from '../renderers.mjs';

const $$Scanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Security Scanner", "description": "Free website security analysis powered by AI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617]"> <!-- Navigation --> ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/scanner" })} <!-- Hero Section --> <section class="container mx-auto px-6 pt-20 pb-16 text-center"> <div class="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 bg-emerald-500/10 rounded-full"> <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider">Free Security Analysis</span> </div> <h1 class="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
Discover Your <span class="text-gradient">Security Vulnerabilities</span> </h1> <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
Our AI-powered scanner analyzes your website's security headers
                and identifies critical vulnerabilities in seconds.
</p> </section> <!-- Scanner Component --> <section class="container mx-auto px-6 py-8"> ${renderComponent($$result2, "SecurityScanner", SecurityScanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/devlewiso/Desktop/git/auralink.live/src/components/react/SecurityScanner", "client:component-export": "default" })} </section> <!-- How It Works --> <section class="container mx-auto px-6 py-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">
How Our Scanner Works
</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4"> <span class="text-3xl font-bold text-emerald-400">1</span> </div> <h3 class="text-xl font-bold mb-2">
Enter Your Domain
</h3> <p class="text-slate-400 text-sm">
Simply type your website URL and hit scan
</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4"> <span class="text-3xl font-bold text-emerald-400">2</span> </div> <h3 class="text-xl font-bold mb-2">AI Analysis</h3> <p class="text-slate-400 text-sm">
Our AI checks security headers and configurations
</p> </div> <div class="text-center"> <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4"> <span class="text-3xl font-bold text-emerald-400">3</span> </div> <h3 class="text-xl font-bold mb-2">Get Results</h3> <p class="text-slate-400 text-sm">
Receive a detailed report with actionable
                            recommendations
</p> </div> </div> </div> </section> <!-- What We Check --> <section class="container mx-auto px-6 py-16"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">
What We Analyze
</h2> <div class="grid md:grid-cols-2 gap-6"> <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold mb-3 flex items-center"> <svg class="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Security Headers
</h3> <ul class="space-y-2 text-sm text-slate-400"> <li>• HSTS (HTTP Strict Transport Security)</li> <li>• Content-Security-Policy</li> <li>• X-Frame-Options</li> <li>• X-Content-Type-Options</li> </ul> </div> <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold mb-3 flex items-center"> <svg class="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
SSL/TLS Configuration
</h3> <ul class="space-y-2 text-sm text-slate-400"> <li>• Certificate validity</li> <li>• Protocol versions</li> <li>• Cipher strength</li> <li>• Certificate chain</li> </ul> </div> <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold mb-3 flex items-center"> <svg class="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Cookie Security
</h3> <ul class="space-y-2 text-sm text-slate-400"> <li>• Secure flag</li> <li>• HttpOnly flag</li> <li>• SameSite attribute</li> <li>• Cookie encryption</li> </ul> </div> <div class="bg-slate-900/30 border border-slate-800 rounded-xl p-6"> <h3 class="text-lg font-bold mb-3 flex items-center"> <svg class="w-5 h-5 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Common Vulnerabilities
</h3> <ul class="space-y-2 text-sm text-slate-400"> <li>• Clickjacking protection</li> <li>• MIME-sniffing prevention</li> <li>• XSS protection</li> <li>• Information disclosure</li> </ul> </div> </div> </div> </section> <!-- CTA Section --> <section class="container mx-auto px-6 py-20"> <div class="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-3xl p-12 text-center"> <h2 class="text-4xl font-bold mb-6">Need More Than a Scan?</h2> <p class="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
Our comprehensive penetration testing services go deeper to
                    identify vulnerabilities that automated scanners miss.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/pricing" class="inline-block bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all glow-primary">
View Pricing
</a> <a href="/services" class="inline-block border border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500/10 transition-all">
Explore Services
</a> </div> </div> </section> </main> ` })}`;
}, "/home/devlewiso/Desktop/git/auralink.live/src/pages/scanner.astro", void 0);

const $$file = "/home/devlewiso/Desktop/git/auralink.live/src/pages/scanner.astro";
const $$url = "/scanner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Scanner,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
