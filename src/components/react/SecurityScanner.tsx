import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ScanResult {
    domain: string;
    grade: string;
    score: number;
    ssl: boolean;
    issues: string[];
    recs: string[];
}

const sanitizeInput = (input: string): string => {
    return input.trim()
        .replace(/[<>'"]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .slice(0, 253);
};

const validateDomain = (domain: string): boolean => {
    const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
    if (domain.length > 253) return false;
    if (domain.includes('..')) return false;
    if (domain.startsWith('-') || domain.endsWith('-')) return false;
    return domainRegex.test(domain);
};

export default function SecurityScanner() {
    const [domain, setDomain] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState<ScanResult | null>(null);
    const [error, setError] = useState<string>('');
    const [lastScanTime, setLastScanTime] = useState<number>(0);

    const RATE_LIMIT_MS = 10000;

    const handleScan = useCallback(async () => {
        setError('');
        const sanitizedDomain = sanitizeInput(domain)
            .replace(/https?:\/\//i, '')
            .split('/')[0]
            .trim();

        if (!sanitizedDomain) { setError('Please enter a domain'); return; }
        if (!validateDomain(sanitizedDomain)) { setError('Invalid domain. Example: yourcompany.com'); return; }

        const now = Date.now();
        if (now - lastScanTime < RATE_LIMIT_MS) {
            const wait = Math.ceil((RATE_LIMIT_MS - (now - lastScanTime)) / 1000);
            setError(`Please wait ${wait}s before scanning again`);
            return;
        }

        setIsScanning(true);
        setResult(null);
        setLastScanTime(now);

        try {
            const res = await fetch('/api/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ domain: sanitizedDomain }),
                signal: AbortSignal.timeout(15000)
            });

            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            const data = await res.json();

            if (data.error) throw new Error(data.error);
            setResult(data);
        } catch (err: any) {
            if (err.name === 'TimeoutError') {
                setError('Scan timed out. The domain may be unreachable.');
            } else {
                setError('Scan failed. Please check the domain and try again.');
            }
        } finally {
            setIsScanning(false);
        }
    }, [domain, lastScanTime]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleaned = e.target.value.slice(0, 253).replace(/[<>'"]/g, '');
        setDomain(cleaned);
        setError('');
    };

    const getGradeColor = (grade: string) => ({
        'A': 'text-emerald-400', 'B': 'text-cyan-400',
        'C': 'text-amber-400',  'D': 'text-orange-400', 'F': 'text-rose-400'
    }[grade] || 'text-slate-400');

    const getGradeEmoji = (grade: string) => ({
        'A': '🟢', 'B': '🟡', 'C': '🟠', 'D': '🔴', 'F': '🔴'
    }[grade] || '⚪');

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Free Security Scan</h3>
                <p className="text-slate-400 text-center mb-6">
                    Real-time AI analysis of your website's security posture
                </p>

                <div className="flex gap-3 mb-6">
                    <input
                        type="text"
                        value={domain}
                        onChange={handleInputChange}
                        placeholder="yourcompany.com"
                        maxLength={253}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                        onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                        aria-label="Domain to scan"
                    />
                    <button
                        onClick={handleScan}
                        disabled={isScanning || !domain}
                        className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-black px-8 py-3 rounded-xl font-bold transition-all"
                        aria-label="Start security scan"
                    >
                        {isScanning ? 'Scanning...' : 'Scan Now'}
                    </button>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl"
                    >
                        <p className="text-rose-400 text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                        </p>
                    </motion.div>
                )}

                {isScanning && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                        <div className="inline-block w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-400 mt-4">Scanning security headers & SSL...</p>
                        <p className="text-slate-600 text-xs mt-1">This may take a few seconds</p>
                    </motion.div>
                )}

                {result && !isScanning && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Grade */}
                        <div className="text-center py-6 bg-slate-900/50 rounded-xl border border-slate-800">
                            <p className="text-slate-400 text-sm mb-2">Security Grade for <span className="text-white font-mono">{result.domain}</span></p>
                            <div className={`text-6xl font-bold ${getGradeColor(result.grade)}`}>
                                {getGradeEmoji(result.grade)} {result.grade}
                            </div>
                            <p className="text-slate-500 text-sm mt-2">Score: {result.score}/100</p>
                            <p className="text-slate-500 text-xs mt-1">SSL/HTTPS: {result.ssl ? '✅ Active' : '❌ Missing'}</p>
                        </div>

                        {/* Issues */}
                        <div>
                            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Issues Found ({result.issues.length})
                            </h4>
                            {result.issues.length === 0 ? (
                                <p className="text-emerald-400 text-sm">✅ No critical issues detected</p>
                            ) : (
                                <ul className="space-y-2">
                                    {result.issues.map((issue, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-400">
                                            <span className="text-rose-400 mr-2 shrink-0">•</span>{issue}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Recommendations */}
                        {result.recs.length > 0 && (
                            <div>
                                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    How to Fix
                                </h4>
                                <ul className="space-y-2">
                                    {result.recs.map((rec, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-400">
                                            <span className="text-emerald-400 mr-2 shrink-0">→</span>{rec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="pt-4 border-t border-slate-800">
                            <p className="text-center text-slate-400 mb-4 text-sm">
                                Want a full security audit and remediation plan?
                            </p>
                            <a
                                href="/contact"
                                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold transition-all"
                            >
                                Get a Free Consultation →
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
