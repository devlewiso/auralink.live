import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || name.length < 2) return json({ error: 'Name too short' }, 400);
    if (!email || !email.includes('@')) return json({ error: 'Invalid email' }, 400);
    if (!message || message.length < 10) return json({ error: 'Message too short' }, 400);

    const serviceMap: Record<string, string> = {
      monitoring:  '24/7 AI Monitoring',
      pentest:     'Penetration Testing',
      incident:    'Incident Response',
      audit:       'Free Security Scan',
      compliance:  'General Inquiry',
      zerotrust:   'General Inquiry',
      training:    'General Inquiry',
      other:       'General Inquiry',
    };
    const mappedService = serviceMap[service] ?? 'General Inquiry';

    const token = process.env.AIRTABLE_TOKEN;
    const base  = process.env.AIRTABLE_BASE;
    const table = process.env.AIRTABLE_TABLE;

    if (!token || !base || !table) {
      console.error('[contact] Missing env vars:', { token: !!token, base: !!base, table: !!table });
      return json({ error: 'Server configuration error' }, 500);
    }

    const res = await fetch(`https://api.airtable.com/v0/${base}/${table}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'Name':             String(name).slice(0, 100),
            'Email':            String(email).slice(0, 200),
            'Company':          String(company || '').slice(0, 100),
            'Website':          '',
            'Service Interest': mappedService,
            'Notes':            String(message).slice(0, 2000),
            'Status':           'New',
            'Source':           'AuraLink Contact Form',
          }
        }]
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('[contact] Airtable error:', res.status, errBody);
      return json({ error: `Airtable error ${res.status}` }, 500);
    }

    return json({ success: true });
  } catch (e: any) {
    console.error('[contact] exception:', e.message);
    return json({ error: 'Internal error' }, 500);
  }
};

function json(data: object, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
