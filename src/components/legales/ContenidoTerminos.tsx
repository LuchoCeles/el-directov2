import Link from "next/link";
import { empresa, sucursales } from "@/lib/empresa";

export default function ContenidoTerminos() {
  return (
    <main className="bg-white text-[#154677]">
      <div className="section-shell pb-20 pt-12 sm:pb-28 sm:pt-16">
        <nav aria-label="Ruta de navegación" className="text-xs font-bold text-[#53708b]">
          <Link href="/" className="hover:text-[#087ce5]">Inicio</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          Términos y condiciones
        </nav>

        <div className="mt-12 max-w-3xl">
          <p className="eyebrow">Información legal</p>
          <h1 className="font-heading mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            Términos y condiciones de uso del sitio
          </h1>
          <p className="mt-6 text-base leading-8 text-[#42617F] sm:text-lg">
            Estas condiciones explican para qué sirve este sitio y cómo funcionan las consultas. La información publicada orienta tu decisión; cada envío requiere que se confirmen sus condiciones concretas. Ninguna disposición de esta página reduce los derechos que reconoce la ley.
          </p>
        </div>

        <div className="mt-14 grid max-w-5xl gap-12 border-t border-[#C9DCEB] pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="text-sm leading-7 text-[#42617F]">
            <p className="font-heading text-lg font-semibold text-[#154677]">{empresa.nombreCompleto}</p>
            <p className="mt-3">Servicio de transporte con atención en Rosario y Mar del Plata.</p>
            <Link href="/sucursales" className="mt-4 inline-block font-semibold text-[#087CE5] underline underline-offset-4">Ver sucursales y contactos</Link>
          </aside>

          <div className="space-y-11 text-base leading-8 text-[#365572]">
            <section aria-labelledby="alcance-sitio">
              <h2 id="alcance-sitio" className="font-heading text-2xl font-semibold text-[#154677]">1. Alcance del sitio</h2>
              <p className="mt-4">El sitio presenta servicios de encomiendas, carga y traslados que se consultan con {empresa.nombreCompleto}. La ruta directa es entre Rosario y Mar del Plata. Los retiros, las entregas a domicilio y los redespachos a otras localidades se coordinan según la carga, el trayecto y la disponibilidad.</p>
              <p className="mt-3">Los días de salida y horarios de arribo publicados son referencias de servicio. Al solicitar un envío, consultá el plazo y la modalidad aplicables a tu caso.</p>
            </section>

            <section aria-labelledby="consultas-formulario">
              <h2 id="consultas-formulario" className="font-heading text-2xl font-semibold text-[#154677]">2. Consultas mediante el formulario</h2>
              <p className="mt-4">El formulario permite pedir información o una cotización. Enviarlo no reserva espacio, no fija un precio ni confirma la contratación de un transporte. Para responder con precisión, indicá datos correctos sobre el origen, el destino, la carga, sus medidas y su peso aproximado. No incluyas contraseñas, datos bancarios ni información sensible en el mensaje.</p>
              <p className="mt-3">El tratamiento de tus datos personales se explica en la <Link href="/privacidad" className="font-semibold text-[#087CE5] underline underline-offset-4">Política de privacidad</Link>. Antes de enviar el formulario, se solicita una autorización específica para gestionar y responder la consulta.</p>
            </section>

            <section aria-labelledby="condiciones-envio">
              <h2 id="condiciones-envio" className="font-heading text-2xl font-semibold text-[#154677]">3. Información antes de contratar un envío</h2>
              <p className="mt-4">El precio y las condiciones dependen, entre otros factores, del tipo, tamaño y valor declarado de la carga, del trayecto y de los servicios adicionales solicitados. Antes de confirmar un envío, pedí que te informen el precio total, qué servicios incluye, las condiciones de retiro y entrega, el plazo previsto y la documentación necesaria.</p>
              <p className="mt-3">El sitio informa que el servicio incluye seguro de carga. Consultá antes de confirmar cuáles son los riesgos cubiertos, el alcance, las condiciones y el valor declarado que corresponden a tu mercadería. La información general de esta página no reemplaza la cotización ni la documentación aplicable a cada traslado.</p>
            </section>

            <section aria-labelledby="uso-enlaces">
              <h2 id="uso-enlaces" className="font-heading text-2xl font-semibold text-[#154677]">4. Uso del sitio y enlaces externos</h2>
              <p className="mt-4">Usá el sitio y el formulario para consultas legítimas, sin enviar contenido ilícito ni intentar afectar su funcionamiento. Los enlaces a WhatsApp y a servicios de mapas abren plataformas de terceros que tienen sus propias condiciones y políticas de privacidad.</p>
            </section>

            <section aria-labelledby="cambios-derechos">
              <h2 id="cambios-derechos" className="font-heading text-2xl font-semibold text-[#154677]">5. Actualizaciones y derechos</h2>
              <p className="mt-4">La información del sitio puede actualizarse. Los cambios publicados no modifican retroactivamente las condiciones de un envío ya acordado. Se mantienen íntegros los derechos previstos por la legislación argentina de transporte y defensa del consumidor.</p>
            </section>

            <section aria-labelledby="contacto-legal">
              <h2 id="contacto-legal" className="font-heading text-2xl font-semibold text-[#154677]">6. Contacto y reclamos</h2>
              <p className="mt-4">Para consultar condiciones de un envío, corregir datos de una consulta o presentar un reclamo, comunicate con la sucursal correspondiente:</p>
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
