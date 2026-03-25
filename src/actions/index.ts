import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const AIRTABLE_TOKEN = import.meta.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE  = import.meta.env.AIRTABLE_BASE;
const AIRTABLE_TABLE = import.meta.env.AIRTABLE_TABLE;

async function saveToAirtable(fields: Record<string, string>) {
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records: [{ fields }] }),
    });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`Airtable ${res.status}: ${body}`);
    }
    return res.json();
}

export const server = {
    contactForm: defineAction({
        accept: 'form',
        input: z.object({
            name:    z.string().min(2, 'Name must be at least 2 characters'),
            email:   z.string().email('Invalid email address'),
            company: z.string().optional(),
            service: z.string().optional(),
            message: z.string().min(10, 'Message must be at least 10 characters'),
        }),
        handler: async (input) => {
            await saveToAirtable({
                'Name':             input.name,
                'Email':            input.email,
                'Company':          input.company || '',
                'Website':          '',
                'Service Interest': input.service || 'General Inquiry',
                'Notes':            input.message,
                'Status':           'New',
                'Source':           'AuraLink Contact Form',
            });

            return {
                success: true,
                message: 'Thank you! We will get back to you within 24 hours.',
            };
        },
    }),
};
