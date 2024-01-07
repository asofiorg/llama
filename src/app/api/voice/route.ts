import VoiceResponse from "twilio/lib/twiml/VoiceResponse";
import { i18n } from "~/lib/i18n";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") ?? "es") as "es" | "en";

  const twiml = new VoiceResponse();

  twiml.say(i18n[lang].welcome);

  const gather = twiml.gather({
    input: ["speech"],
    action: `/api/callback?lang=${lang}`,
    language: lang === "es" ? "es-CO" : "en-US",
    finishOnKey: "#",
  });

  gather.say(i18n[lang].introduce);

  return new Response(twiml.toString(), {
    headers: { "Content-Type": "text/xml" },
  });
}
