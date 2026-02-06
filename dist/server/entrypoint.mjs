import './chunks/virtual_dh08R7ll.mjs';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_yx-8eRR_.mjs';

const server = {
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      company: z.string().optional(),
      service: z.string().optional(),
      message: z.string().min(10, "Message must be at least 10 characters")
    }),
    handler: async (input) => {
      try {
        const webhookUrl = "https://trigger.nosotros.space/webhook/auralinkdrinklandingpage";
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: input.name,
            email: input.email,
            company: input.company || "Not provided",
            service: input.service || "Not specified",
            message: input.message,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            source: "AuraLink Contact Form"
          })
        });
        if (!response.ok) {
          throw new Error(`Webhook failed with status: ${response.status}`);
        }
        console.log("Contact form submitted successfully:", {
          name: input.name,
          email: input.email,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
        return {
          success: true,
          message: "Thank you for your message! We will get back to you within 24 hours."
        };
      } catch (error) {
        console.error("Error sending to webhook:", error);
        return {
          success: true,
          message: "Thank you for your message! We will get back to you within 24 hours."
        };
      }
    }
  })
};

export { server };
