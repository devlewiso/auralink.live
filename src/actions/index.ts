import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    contactForm: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string().min(2, 'Name must be at least 2 characters'),
            email: z.string().email('Invalid email address'),
            company: z.string().optional(),
            service: z.string().optional(),
            message: z.string().min(10, 'Message must be at least 10 characters'),
        }),
        handler: async (input) => {
            try {
                // Send data to n8n webhook
                const webhookUrl = 'https://trigger.nosotros.space/webhook/auralinkdrinklandingpage';

                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: input.name,
                        email: input.email,
                        company: input.company || 'Not provided',
                        service: input.service || 'Not specified',
                        message: input.message,
                        timestamp: new Date().toISOString(),
                        source: 'AuraLink Contact Form',
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Webhook failed with status: ${response.status}`);
                }

                // Log success
                console.log('Contact form submitted successfully:', {
                    name: input.name,
                    email: input.email,
                    timestamp: new Date().toISOString(),
                });

                // Return success response
                return {
                    success: true,
                    message: 'Thank you for your message! We will get back to you within 24 hours.',
                };
            } catch (error) {
                console.error('Error sending to webhook:', error);

                // Still return success to user, but log the error
                // You can change this to throw an error if you want to show failure to user
                return {
                    success: true,
                    message: 'Thank you for your message! We will get back to you within 24 hours.',
                };
            }
        },
    }),
};
