import Link from "next/link";
import { empresa, sucursales } from "@/lib/empresa";

export default function ContenidoTerminos() {
  return (
    <main className="bg-white text-[#154677]">
      <div className="cabecera-ajustable--simple section-shell pb-20 pt-12 sm:pb-28 sm:pt-16">
        <nav aria-label="Ruta de navegación" className="cabecera-ajustable__migas text-xs font-bold text-[#53708b]">
          <Link href="/" className="hover:text-[#087ce5]">Inicio</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          Términos y condiciones
        </nav>

        <div className="cabecera-ajustable__introduccion mt-12 max-w-3xl">
          <p className="eyebrow">Información legal</p>
          <h1 className="cabecera-ajustable__titulo font-heading mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            Términos y condiciones de uso del sitio
          </h1>
          <p className="cabecera-ajustable__descripcion mt-6 text-base leading-8 text-[#42617F] sm:text-lg">
            Acá encontrás información sobre nuestros servicios y sobre cómo
            hacer una consulta. El precio y las condiciones de cada envío se
            confirman antes de contratarlo.
          </p>
        </div>

        <div className="mt-14 grid max-w-5xl gap-12 border-t border-[#C9DCEB] pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="text-sm leading-7 text-[#42617F]">
            <p className="font-heading text-lg font-semibold text-[#154677]">{empresa.nombreCompleto}</p>
            <p className="mt-3">Atendemos consultas sobre transporte desde nuestras sucursales de Rosario y Mar del Plata.</p>
            <Link href="/sucursales" className="mt-4 inline-block font-semibold text-[#087CE5] underline underline-offset-4">Ver sucursales y contactos</Link>
          </aside>

          <div className="space-y-11 text-base leading-8 text-[#365572]">
            <section aria-labelledby="alcance-sitio">
              <h2 id="alcance-sitio" className="font-heading text-2xl font-semibold text-[#154677]">1. Nuestros servicios</h2>
              <p className="mt-4">En este sitio podés conocer los servicios de encomiendas, cargas generales y traslados de {empresa.nombreCompleto}. Viajamos de forma directa entre Rosario y Mar del Plata, en ambos sentidos. Si necesitás retiro, entrega a domicilio o un redespacho a otra localidad, consultanos por las opciones disponibles.</p>
              <p className="mt-3">Los días de salida y el arribo previsto para el día siguiente son orientativos. Confirmá el plazo y la forma de entrega antes de despachar.</p>
            </section>

            <section aria-labelledby="consultas-formulario">
              <h2 id="consultas-formulario" className="font-heading text-2xl font-semibold text-[#154677]">2. Consultas y cotizaciones</h2>
              <p className="mt-4">Podés escribirnos para pedir información o una cotización. Contanos qué querés enviar, desde dónde y hacia dónde, y sus medidas y peso aproximado. Enviar una consulta no reserva lugar ni confirma un precio o un servicio.</p>
              <p className="mt-3">Usamos los datos que nos dejás para responderte. Encontrás más información en la <Link href="/privacidad" className="font-semibold text-[#087CE5] underline underline-offset-4">Política de privacidad</Link>.</p>
            </section>

            <section aria-labelledby="condiciones-envio">
              <h2 id="condiciones-envio" className="font-heading text-2xl font-semibold text-[#154677]">3. Antes de contratar un envío</h2>
              <p className="mt-4">El precio depende de la carga, el trayecto y los servicios que necesites. Antes de confirmar, consultanos el precio total, qué incluye, el plazo previsto y la documentación necesaria.</p>
              <p className="mt-3">El servicio incluye seguro de carga si no contás con seguro propio. La cotización y los documentos de cada envío indican sus condiciones concretas.</p>
            </section>

            <section aria-labelledby="uso-enlaces">
              <h2 id="uso-enlaces" className="font-heading text-2xl font-semibold text-[#154677]">4. Uso del sitio</h2>
              <p className="mt-4">Usá el formulario para hacer consultas relacionadas con nuestros servicios. Si abrís un enlace a WhatsApp o a un mapa, se aplican las condiciones de esos servicios.</p>
              <p className="mt-3">Podemos actualizar la información del sitio. Los cambios no alteran lo que ya hayas acordado para un envío ni tus derechos como consumidor.</p>
            </section>

            <section aria-labelledby="contacto-legal">
              <h2 id="contacto-legal" className="font-heading text-2xl font-semibold text-[#154677]">5. Consultas y reclamos</h2>
              <p className="mt-4">Para consultar por un envío o presentar un reclamo, comunicate con una de nuestras sucursales:</p>
              <ul className="mt-4 space-y-4">
                {sucursales.map((sucursal) => (
                  <li key={sucursal.nombre}>
                    <strong className="text-[#154677]">{sucursal.nombre}:</strong> {sucursal.direccion}.{" "}
                    <a href={`mailto:${sucursal.correo}`} className="break-all font-semibold text-[#087CE5] underline underline-offset-4">{sucursal.correo}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
