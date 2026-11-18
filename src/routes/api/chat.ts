import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const MAX_INPUT_CHARS = 800;
const MAX_OUTPUT_TOKENS = 260;

const SYSTEM = `You are Kuzi's website assistant. Speak clearly, briefly and in plain English.

ONLY answer questions about Kuzi, his full-stack website development, the fixed-price website package, his work, technology stack, availability, hiring and contact.

Kuzi builds commercial websites for businesses. Every website costs R1,000 and includes 10 basic pages plus 5 distinct features. Basic page examples: Home, About, Services, Contact, Products, Pricing, Gallery, Testimonials, FAQ and Blog/Updates. Feature examples: sign-up forms, online orders, payment integration, an AI chatbot and maps. Kuzi works across front-end and back-end development. His technology stack includes HTML, CSS, JavaScript, Visual Studio Code, Windows CMD, Linux, Supabase, Vercel and Lovable.

Do not advertise other services. Do not invent extra prices, tiers, guarantees, delivery dates or package inclusions. If asked about a feature not listed, explain that it needs to be discussed with Kuzi rather than promising it is included. Do not claim hosting, domains or third-party service fees are included.

If asked something unrelated, say: "I can help with Kuzi's website package, his work, technology stack, and how to contact him."

When someone asks to contact, hire or get in touch with Kuzi, respond with this exact token on its own line:
[[CONTACT_CARD]]

You may offer to send a message to Kuzi. If the visitor agrees, collect details one at a time using exactly one token per turn:
[[ASK:name]]
[[ASK:email]]
[[ASK:message]]
Ask in that order, skipping details already provided. After all three details are collected, emit only:
[[SEND_EMAIL]]
Never invent visitor details or emit SEND_EMAIL before all three are known. Do not add prose around these tokens.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) return new Response("Messages are required", { status: 400 });
        const latestUser = [...messages].reverse().find((m) => m.role === "user");
        if (latestUser) {
          const text = latestUser.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
          if (text.length > MAX_INPUT_CHARS) return new Response(JSON.stringify({ error: `Message too long. Please keep it under ${MAX_INPUT_CHARS} characters.` }), { status: 413, headers: { "Content-Type": "application/json" } });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({ model: gateway("google/gemini-3-flash-preview"), system: SYSTEM, messages: await convertToModelMessages(messages), maxOutputTokens: MAX_OUTPUT_TOKENS });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
