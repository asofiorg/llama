import VoiceResponse from "twilio/lib/twiml/VoiceResponse";
import { i18n } from "~/lib/i18n";

import OpenAI from "openai";
import { getWeather } from "~/lib/functions";

const openai = new OpenAI();

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") ?? "es") as "es" | "en";

  const formData = await req.formData();
  const SpeechResult = formData.get("SpeechResult") as string;

  const ai = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Imagine you're the friendly voice on a helpful phone line. 
        People call in with questions, and you can only respond with short, 
        easy-to-understand answers—never more than 200 words. Keep it simple, 
        avoid technical jargon, and make sure your responses are clear for 
        anyone who dials in. You're here to make information accessible and 
        assistance a breeze`,
      },
      { role: "user", content: SpeechResult },
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get weather information for a specific location.",
          parameters: {
            type: "object",
            properties: {
              place: {
                type: "string",
                description:
                  "The location for which to get weather information.",
              },
              lang: {
                type: "string",
                description:
                  "The language for the response (optional, defaults to 'es').",
              },
            },
            required: ["place"],
          },
        },
      },
    ],
    model: "gpt-3.5-turbo",
    tool_choice: "auto",
  });

  const responseMessage = ai.choices[0]?.message;

  const twiml = new VoiceResponse();

  if (responseMessage?.tool_calls) {
    const args = JSON.parse(
      responseMessage.tool_calls[0]?.function.arguments ?? "",
    );

    const weather = await getWeather(args.place, args.lang);
    twiml.say(weather);
  } else {
    twiml.say(responseMessage?.content ?? "");
  }

  twiml.say(i18n[lang].bye);

  return new Response(twiml.toString(), {
    headers: { "Content-Type": "text/xml" },
  });
}
