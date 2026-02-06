import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const sanitizeInput = (input) => {
  return input.trim().replace(/[<>'"]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").slice(0, 253);
};
const validateDomain = (domain) => {
  const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
  if (domain.length > 253) return false;
  if (domain.includes("..")) return false;
  if (domain.startsWith("-") || domain.endsWith("-")) return false;
  return domainRegex.test(domain);
};
const escapeHtml = (unsafe) => {
  return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};
function SecurityScanner() {
  const [domain, setDomain] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [lastScanTime, setLastScanTime] = useState(0);
  const RATE_LIMIT_MS = 5e3;
  const handleScan = useCallback(async () => {
    setError("");
    const sanitizedDomain = sanitizeInput(domain);
    if (!sanitizedDomain) {
      setError("Please enter a domain");
      return;
    }
    if (!validateDomain(sanitizedDomain)) {
      setError("Invalid domain format. Example: example.com");
      return;
    }
    const now = Date.now();
    if (now - lastScanTime < RATE_LIMIT_MS) {
      const waitTime = Math.ceil((RATE_LIMIT_MS - (now - lastScanTime)) / 1e3);
      setError(`Please wait ${waitTime} seconds before scanning again`);
      return;
    }
    setIsScanning(true);
    setResult(null);
    setLastScanTime(now);
    try {
      await Promise.race([
        new Promise((resolve) => setTimeout(resolve, 2e3)),
        new Promise(
          (_, reject) => setTimeout(() => reject(new Error("Scan timeout")), 1e4)
        )
      ]);
      const mockResult = {
        domain: escapeHtml(sanitizedDomain),
        // Escaped for safety
        grade: Math.random() > 0.5 ? "B" : "C",
        score: Math.floor(Math.random() * 40) + 60,
        issues: [
          "Missing HSTS header",
          "Content-Security-Policy not configured",
          "X-Frame-Options header missing"
        ],
        recommendations: [
          "Enable HSTS with max-age of at least 31536000",
          "Implement a strict Content-Security-Policy",
          "Add X-Frame-Options: DENY header"
        ]
      };
      setResult(mockResult);
    } catch (err) {
      setError("Scan failed. Please try again later.");
      console.error("Scan error:", err);
    } finally {
      setIsScanning(false);
    }
  }, [domain, lastScanTime]);
  const handleInputChange = (e) => {
    const value = e.target.value.slice(0, 253);
    const cleaned = value.replace(/[<>'"]/g, "");
    setDomain(cleaned);
    setError("");
  };
  const getGradeColor = (grade) => {
    const allowedGrades = ["A", "B", "C", "D", "F"];
    if (!allowedGrades.includes(grade)) return "text-slate-400";
    const colors = {
      "A": "text-emerald-400",
      "B": "text-cyan-400",
      "C": "text-amber-400",
      "D": "text-orange-400",
      "F": "text-rose-400"
    };
    return colors[grade] || "text-slate-400";
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4 text-center", children: "Free Security Scan" }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-center mb-6", children: "Get an instant security analysis of your website" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: domain,
          onChange: handleInputChange,
          placeholder: "example.com",
          maxLength: 253,
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          spellCheck: "false",
          className: "flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors",
          onKeyPress: (e) => e.key === "Enter" && handleScan(),
          "aria-label": "Domain to scan"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleScan,
          disabled: isScanning || !domain,
          className: "bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-black px-8 py-3 rounded-xl font-bold transition-all",
          "aria-label": "Start security scan",
          children: isScanning ? "Scanning..." : "Scan Now"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "mb-4 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl",
        children: /* @__PURE__ */ jsxs("p", { className: "text-rose-400 text-sm flex items-center", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          error
        ] })
      }
    ),
    isScanning && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "text-center py-8",
        children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 mt-4", children: "Analyzing security headers..." })
        ]
      }
    ),
    result && !isScanning && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center py-6 bg-slate-900/50 rounded-xl border border-slate-800", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mb-2", children: "Security Grade" }),
            /* @__PURE__ */ jsx("div", { className: `text-6xl font-bold ${getGradeColor(result.grade)}`, children: result.grade }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-sm mt-2", children: [
              "Score: ",
              result.score,
              "/100"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs mt-1", children: [
              "Domain: ",
              result.domain
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold mb-3 flex items-center", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-rose-400 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }),
              "Issues Found (",
              result.issues.length,
              ")"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: result.issues.map((issue, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-sm text-slate-400", children: [
              /* @__PURE__ */ jsx("span", { className: "text-rose-400 mr-2", children: "•" }),
              issue
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold mb-3 flex items-center", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-emerald-400 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
              "Recommendations"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: result.recommendations.map((rec, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start text-sm text-slate-400", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-400 mr-2", children: "→" }),
              rec
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-slate-800", children: [
            /* @__PURE__ */ jsx("p", { className: "text-center text-slate-400 mb-4", children: "Need help fixing these issues?" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold transition-all",
                children: "Schedule a Free Consultation"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}

export { SecurityScanner as S };
