import { newsletterService } from "@/backend/service/newsletter";

export const dynamic = "auto"; // ou 'force-dynamic'

export async function POST(request: Request) {
  const { addEmail } = newsletterService;
  const { email } = await request.json();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return new Response(JSON.stringify({ message: "Email inválido" }), {
      status: 400,
    });
  }

  const res = await addEmail(email);
  return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
}
