import arcjet, { detectBot } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    detectBot({
      mode: "LIVE",
    }),
  ],
});

export async function GET(req) {
  await aj.protect(req);
  return Response.json({ ok: true });
}


