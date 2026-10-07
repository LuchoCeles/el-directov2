import { NextRequest, NextResponse } from "next/server";
import { estaDentroDelLimite, marcarEnvio } from "@/lib/limite-tasa";
import { esquemaFormularioContacto } from "@/lib/esquemas";
import { clienteResend } from "@/lib/resend";
import PlantillaConsulta from "@/components/emails/PlantillaConsulta";

export const runtime = "nodejs";

const INTERVALO_ENTRE_MENSAJES_MS = 5 * 60 * 1000;
const MAX_MENSAJES_EN_INTERVALO = 1;
const CONFIGURACION_LIMITE = {
  intervalo: INTERVALO_ENTRE_MENSAJES_MS,
  maxSolicitudes: MAX_MENSAJES_EN_INTERVALO,
};

function obtenerIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "ip-desconocida"
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  if (
    typeof body === "object" &&
    body !== null &&
    (body as Record<string, unknown>)._hp
  ) {
    return NextResponse.json(
      { message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  }

  const ip = obtenerIp(req);

  if (!estaDentroDelLimite(ip, CONFIGURACION_LIMITE)) {
    return NextResponse.json(
      {
        error:
          "Ya ha enviado un mensaje recientemente. Por favor intente nuevamente en unos minutos.",
      },
      { status: 429, headers: { "Retry-After": "300" } }
    );
  }

  const resultado = esquemaFormularioContacto.safeParse(body);
  if (!resultado.success) {
    const mensajes = resultado.error.issues.map((i) => i.message).join(" ");
    return NextResponse.json({ error: mensajes }, { status: 400 });
  }

  const { nombre, empresa, correo, telefono, mensaje } = resultado.data;

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !fromEmail || !recipientEmail) {
    console.error("Faltan variables de entorno Resend en /api/contacto");
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 }
    );
  }

  const { error } = await clienteResend.emails.send({
    from: fromEmail,
    to: recipientEmail,
    replyTo: correo,
    subject: `Consulta de ${nombre}${empresa ? ` (${empresa})` : ""}`,
    react: PlantillaConsulta({
      nombre,
      empresa,
      correo,
      telefono,
      mensaje,
    }),
    text: `
Nueva consulta desde el sitio web

Nombre: ${nombre}
${empresa ? `Empresa: ${empresa}\n` : ""}Email: ${correo}
${telefono ? `Teléfono: ${telefono}\n` : ""}
Mensaje:
${mensaje}
      `.trim(),
  });

  if (error) {
    console.error("Error al enviar el email con Resend:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intente nuevamente más tarde." },
      { status: 500 }
    );
  }

  marcarEnvio(ip, CONFIGURACION_LIMITE);

  return NextResponse.json(
    { message: "Mensaje enviado correctamente." },
    { status: 200 }
  );
}
