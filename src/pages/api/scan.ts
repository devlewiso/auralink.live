import type { APIRoute } from 'astro';
import https from 'https';

interface ScanResult {
  domain: string;
  grade: string;
  score: number;
  ssl: boolean;
  issues: string[];
  recs: string[];
}

function scanDomain(domain: string): Promise<ScanResult> {
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: domain,
        port: 443,
        path: '/',
        method: 'HEAD',
        timeout: 8000,
        rejectUnauthorized: false,
      },
      (res) => {
        const h = res.headers;
        const issues: string[] = [];
        const recs: string[] = [];
        let score = 100;

        if (!h['strict-transport-security']) {
          issues.push('Missing HSTS');
          recs.push('Enable HSTS max-age ≥ 31536000');
          score -= 15;
        }
        if (!h['content-security-policy']) {
          issues.push('No Content-Security-Policy');
          recs.push('Implement a strict Content-Security-Policy');
          score -= 15;
        }
        if (!h['x-frame-options']) {
          issues.push('No X-Frame-Options');
          recs.push('Add X-Frame-Options: DENY');
          score -= 10;
        }
        if (!h['x-content-type-options']) {
          issues.push('No X-Content-Type-Options');
          recs.push('Add X-Content-Type-Options: nosniff');
          score -= 5;
        }
        if (!h['referrer-policy']) {
          issues.push('No Referrer-Policy');
          recs.push('Add Referrer-Policy: strict-origin-when-cross-origin');
          score -= 5;
        }

        score = Math.max(score, 0);
        const grade =
          score >= 90 ? 'A' : score >= 75 ? 'B' : score >= 60 ? 'C' : score >= 45 ? 'D' : 'F';

        resolve({ domain, grade, score, ssl: true, issues, recs });
      }
    );

    req.on('error', () =>
      resolve({
        domain,
        grade: 'F',
        score: 20,
        ssl: false,
        issues: ['No HTTPS / domain unreachable'],
        recs: ['Migrate to HTTPS immediately'],
      })
    );

    req.on('timeout', () => {
      req.destroy();
      resolve({
        domain,
        grade: 'F',
        score: 0,
        ssl: false,
        issues: ['Scan timeout — domain may be unreachable'],
        recs: ['Verify the domain is publicly accessible'],
      });
    });

    req.end();
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const raw: string = (body?.domain || '').toString().trim();

    // Sanitize
    const domain = raw
      .replace(/https?:\/\//i, '')
      .split('/')[0]
      .toLowerCase()
      .trim();

    if (!domain || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain) || domain.length > 253) {
      return new Response(JSON.stringify({ error: 'Invalid domain' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await scanDomain(domain);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Scan failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
