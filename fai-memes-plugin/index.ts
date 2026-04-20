import fetch from "node-fetch";
import { randomUUID } from "crypto";

const BASE_URL = "https://fai-backend-526529515836.us-central1.run.app";

export default function register({ app }: any) {
  app.tool("generate_meme", async ({ topic }: any) => {
    try {
      const user_id = randomUUID();

      const isVideo =
        topic.toLowerCase().includes("video") ||
        topic.toLowerCase().includes("reel");

      const endpoint = isVideo
        ? "/generate_video_meme"
        : "/generate_meme";

      const body = isVideo
        ? {
            user_id,
            user_input: topic,
            which: "video_general",
          }
        : {
            user_id,
            user_input: topic,
            which: "general",
          };

      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      if (data.status !== "success") {
        throw new Error("Meme API failed");
      }

      const urls = data.image_urls || data.video_urls;

      if (!urls || urls.length === 0) {
        throw new Error("No memes returned");
      }

      // 🔥 KEY: structured options for the agent
      const formatted = urls
        .map((url: string, i: number) => `Option ${i + 1}: ${url}`)
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text: `You generated multiple meme options for: "${topic}"

${formatted}

👉 Choose the funniest, most relevant meme.
- Prefer clearer images
- Prefer culturally relevant humor
- Avoid duplicates or low-quality ones

Return ONLY the final selected meme URL.`,
          },
        ],
      };
    } catch (err: any) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Failed to generate meme: ${err.message}`,
          },
        ],
      };
    }
  });
}