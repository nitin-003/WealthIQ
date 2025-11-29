import arcjet from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    {
      mode: "LIVE",
      type: "bot_detection"
    }
  ]
});

export async function GET(req) {
  await aj.protect(req);
  return Response.json({ ok: true });
}

