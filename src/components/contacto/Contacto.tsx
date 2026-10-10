import FormularioContacto from "@/components/contacto/FormularioContacto";
import Link from "next/link";

export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-[#EAF2FA] py-20 text-[#154677] sm:py-28">
      <div className="container mx-auto grid items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Escribinos</p>
          <h2 className="font-heading max-w-lg text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Cotizá tu envío
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#42617F] sm:text-lg">
            Contanos qué querés enviar y te respondemos para ayudarte a
            organizar el traslado.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#42617F]">
            Si preferís hablar por teléfono, correo o WhatsApp, encontrá los
            datos de nuestras sucursales en Rosario y Mar del Plata.
          </p>
          <Link href="/sucursales" className="mt-4 inline-flex min-h-11 items-center font-bold underline decoration-[#087CE5] underline-offset-4 hover:text-[#087CE5] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087CE5]">
            Ver teléfonos y direcciones
          </Link>
        </div>
        <FormularioContacto />
      </div>
    </section>
  );
}
