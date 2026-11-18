import { createFileRoute } from "@tanstack/react-router";

const VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // ElevenLabs default voice: George
const MAX_TEXT_CHARS = 1200;

export const Route = createFileRoute("/api/voice")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { text?: unknown };
        try {
          body = await request.json();
        } catch {
          return new Response("Invalid JSON body", { status: 400 });
        }

        const text = typeof body.text === "string" ? body.text.trim() : "";
        if (!text) return new Response("Text is required", { status: 400 });
        if (text.length > MAX_TEXT_CHARS) {
          return new Response(`Text must be ${MAX_TEXT_CHARS} characters or fewer`, { status: 413 });
        }

        const apiKey = process.env.ELEVENLABS_API_KEY;
        if (!apiKey) return new Response("Missing ELEVENLABS_API_KEY", { status: 500 });

        const response = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
          {
            method: "POST",
            headers: {
              "xi-api-key": apiKey,
              "Content-Type": "application/json",
              Accept: "audio/mpeg",
            },
            body: JSON.stringify({
              text,
              model_id: "eleven_flash_v2_5",
              voice_settings: { stability: 0.5, similarity_boost: 0.75 },
            }),
          },
        );

        if (!response.ok) {
          const detail = await response.text();
          console.error("ElevenLabs TTS request failed:", response.status, detail.slice(0, 500));
          return new Response("Speech generation failed. Please try again.", { status: 502 });
        }

        return new Response(response.body, {
          status: 200,
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
