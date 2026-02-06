import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ur5-Flif.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header } from '../chunks/Header_De95F2xK.mjs';
import { P as ParticlesBackground } from '../chunks/ParticlesBackground_BvWWRDi_.mjs';
import { S as SecurityScanner } from '../chunks/SecurityScanner_Daj_QwBi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen overflow-hidden bg-[#020617]" data-astro-cid-j7pv25f6> <!-- Particles Background --> ${renderComponent($$result2, "ParticlesBackground", ParticlesBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/devlewiso/Desktop/git/auralink.live/src/components/react/ParticlesBackground", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <!-- Background glow effects --> <div class="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" data-astro-cid-j7pv25f6></div> <div class="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" data-astro-cid-j7pv25f6></div> <!-- Navigation --> ${renderComponent($$result2, "Header", $$Header, { "currentPath": "/", "data-astro-cid-j7pv25f6": true })} <!-- Hero Section --> <section class="container mx-auto px-6 pt-20 pb-16 text-center relative z-10" data-astro-cid-j7pv25f6> <div class="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 bg-emerald-500/10 rounded-full" data-astro-cid-j7pv25f6> <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider" data-astro-cid-j7pv25f6>AI-Powered Defense Systems</span> </div> <h1 class="text-5xl md:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight" data-astro-cid-j7pv25f6>
Security that thinks <span class="text-gradient" data-astro-cid-j7pv25f6>faster than hackers</span> </h1> <p class="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12" data-astro-cid-j7pv25f6>
Protecting infrastructure with proactive AI-driven intelligence.
				We stop threats <strong class="text-white" data-astro-cid-j7pv25f6>before</strong> they happen.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16" data-astro-cid-j7pv25f6> <a href="#scanner" class="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 glow-primary" data-astro-cid-j7pv25f6>
Start Free Security Scan
</a> <a href="/services" class="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500/10 transition-all" data-astro-cid-j7pv25f6>
View Solutions
</a> </div> </section> <!-- Free Security Scanner Section --> <section id="scanner" class="container mx-auto px-6 py-20 relative z-10" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <div class="inline-block px-4 py-1.5 mb-6 border border-emerald-500/30 bg-emerald-500/10 rounded-full" data-astro-cid-j7pv25f6> <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider" data-astro-cid-j7pv25f6>Free Security Analysis</span> </div> <h2 class="text-4xl md:text-5xl font-bold mb-4" data-astro-cid-j7pv25f6>
Test Your <span class="text-gradient" data-astro-cid-j7pv25f6>Security Posture</span> </h2> <p class="text-slate-400 text-lg max-w-2xl mx-auto" data-astro-cid-j7pv25f6>
Get an instant AI-powered security analysis of your website.
					No credit card required.
</p> </div> ${renderComponent($$result2, "SecurityScanner", SecurityScanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/devlewiso/Desktop/git/auralink.live/src/components/react/SecurityScanner", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <!-- Features Section --> <section class="container mx-auto px-6 py-20 relative z-10" data-astro-cid-j7pv25f6> <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all" data-astro-cid-j7pv25f6> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6" data-astro-cid-j7pv25f6> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-j7pv25f6></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" data-astro-cid-j7pv25f6>24/7 AI Monitoring</h3> <p class="text-slate-400" data-astro-cid-j7pv25f6>
Our AI never sleeps. Continuous threat detection with
						machine learning algorithms that identify anomalies in
						real-time.
</p> </div> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all" data-astro-cid-j7pv25f6> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6" data-astro-cid-j7pv25f6> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" data-astro-cid-j7pv25f6>Penetration Testing</h3> <p class="text-slate-400" data-astro-cid-j7pv25f6>
We hack you ethically before the bad actors do.
						AI-powered vulnerability scanning combined with expert
						manual validation.
</p> </div> <div class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all" data-astro-cid-j7pv25f6> <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6" data-astro-cid-j7pv25f6> <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-j7pv25f6></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" data-astro-cid-j7pv25f6>Incident Response</h3> <p class="text-slate-400" data-astro-cid-j7pv25f6>
When seconds count, our AI-assisted incident response
						team neutralizes threats with precision and speed.
</p> </div> </div> </section> <!-- Motto Section --> <section class="container mx-auto px-6 py-16 relative z-10" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <p class="text-emerald-400 text-sm font-mono tracking-wider" data-astro-cid-j7pv25f6>
Active Defense // Artificial Intelligence // Borderless
					Security
</p> </div> </section> </main> ` })} `;
}, "/home/devlewiso/Desktop/git/auralink.live/src/pages/index.astro", void 0);

const $$file = "/home/devlewiso/Desktop/git/auralink.live/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
