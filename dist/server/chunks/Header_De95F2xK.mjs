import { e as createComponent, r as renderTemplate, l as renderSlot, n as renderHead, o as renderScript, g as addAttribute, h as createAstro, m as maybeRenderHead } from './astro/server_ur5-Flif.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "AuraLink AI Security - Advanced Cybersecurity powered by Artificial Intelligence."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", ' | AuraLink AI Security</title><meta name="description"', '><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet"><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-40MN1DF52C"><\/script>', "", '</head> <body class="bg-[#020617] text-slate-200"> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), renderScript($$result, "/home/devlewiso/Desktop/git/auralink.live/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/devlewiso/Desktop/git/auralink.live/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath = "/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="container mx-auto px-6 py-8 flex justify-between items-center relative z-10" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center space-x-2" data-astro-cid-3ef6ksr2> <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center glow-primary" data-astro-cid-3ef6ksr2> <span class="text-black font-bold" data-astro-cid-3ef6ksr2>A</span> </div> <span class="text-xl font-bold tracking-tight" data-astro-cid-3ef6ksr2>
Aura<span class="text-emerald-500" data-astro-cid-3ef6ksr2>Link</span> </span> </a> <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-400" data-astro-cid-3ef6ksr2> <a href="/services"${addAttribute([
    "hover:text-emerald-400 transition-colors",
    currentPath === "/services" && "text-emerald-400"
  ], "class:list")} data-astro-cid-3ef6ksr2>
Services
</a> <a href="/pricing"${addAttribute([
    "hover:text-emerald-400 transition-colors",
    currentPath === "/pricing" && "text-emerald-400"
  ], "class:list")} data-astro-cid-3ef6ksr2>
Pricing
</a> <a href="/about"${addAttribute([
    "hover:text-emerald-400 transition-colors",
    currentPath === "/about" && "text-emerald-400"
  ], "class:list")} data-astro-cid-3ef6ksr2>
About
</a> <a href="/blog"${addAttribute([
    "hover:text-emerald-400 transition-colors",
    currentPath === "/blog" && "text-emerald-400"
  ], "class:list")} data-astro-cid-3ef6ksr2>
Intelligence
</a> </div> <a href="/contact" class="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 glow-primary" data-astro-cid-3ef6ksr2>
Request Audit
</a> </nav> `;
}, "/home/devlewiso/Desktop/git/auralink.live/src/components/Header.astro", void 0);

export { $$Layout as $, $$Header as a };
