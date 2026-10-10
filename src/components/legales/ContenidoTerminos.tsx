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
            Acá explicamos cómo usar el sitio y qué sucede cuando nos enviás
            una consulta. La información publicada te ayuda a conocer nuestros
            servicios, pero las condiciones concretas de cada traslado se
            confirman antes de contratarlo. Tus derechos reconocidos por la ley
            se mantienen en todos los casos.
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
              <h2 id="alcance-sitio" className="font-heading text-2xl font-semibold text-[#154677]">1. Alcance del sitio</h2>
              <p className="mt-4">Este sitio te permite conocer los servicios de encomiendas, carga y traslados de {empresa.nombreCompleto}. Viajamos de forma directa entre Rosario y Mar del Plata. Si necesitás retiro, entrega a domicilio o redespacho a otra localidad, consultanos para verificar las opciones según la carga, el trayecto y la disponibilidad.</p>
              <p className="mt-3">Los días de salida y los horarios de arribo publicados sirven como referencia. Antes de despachar, confirmá el plazo y la modalidad de tu envío.</p>
            </section>

            <section aria-labelledby="consultas-formulario">
              <h2 id="consultas-formulario" className="font-heading text-2xl font-semibold text-[#154677]">2. Consultas mediante el formulario</h2>
              <p className="mt-4">Podés usar el formulario para pedir información o una cotización. Al enviarlo, no reservás espacio, fijás un precio ni contratás un transporte. Para que podamos responderte con precisión, indicá el origen, el destino y las características de la carga, incluidas sus medidas y su peso aproximado. No incluyas contraseñas, datos bancarios ni información sensible.</p>
              <p className="mt-3">En la <Link href="/privacidad" className="font-semibold text-[#087CE5] underline underline-offset-4">Política de privacidad</Link> explicamos cómo tratamos tus datos personales. Antes de enviar el formulario, te pedimos autorización para gestionar tu consulta y responderte.</p>
            </section>

            <section aria-labelledby="condiciones-envio">
              <h2 id="condiciones-envio" className="font-heading text-2xl font-semibold text-[#154677]">3. Información antes de contratar un envío</h2>
              <p className="mt-4">El precio y las condiciones dependen, entre otros factores, del tipo, tamaño y valor declarado de la carga, del trayecto y de los servicios adicionales que necesites. Antes de confirmar el envío, pedí el precio total y consultá qué incluye, cómo se hacen el retiro y la entrega, cuál es el plazo previsto y qué documentación necesitás.</p>
              <p className="mt-3">El servicio incluye seguro de carga. Antes de confirmar, consultá qué riesgos cubre, cuáles son sus condiciones y qué valor declarado corresponde a tu mercadería. La información general del sitio no reemplaza la cotización ni la documentación aplicable a cada traslado.</p>
            </section>

            <section aria-labelledby="uso-enlaces">
              <h2 id="uso-enlaces" className="font-heading text-2xl font-semibold text-[#154677]">4. Uso del sitio y enlaces externos</h2>
              <p className="mt-4">Usá el sitio y el formulario para hacer consultas legítimas. No envíes contenido ilícito ni intentes afectar su funcionamiento. Si abrís un enlace a WhatsApp o a un servicio de mapas, vas a ingresar a una plataforma de terceros con sus propias condiciones y políticas de privacidad.</p>
            </section>

            <section aria-labelledby="cambios-derechos">
              <h2 id="cambios-derechos" className="font-heading text-2xl font-semibold text-[#154677]">5. Actualizaciones y derechos</h2>
              <p className="mt-4">Podemos actualizar la información del sitio cuando sea necesario. Esos cambios no modifican las condiciones de un envío que ya hayas acordado. Se mantienen íntegros los derechos previstos por la legislación argentina de transporte y defensa del consumidor.</p>
            </section>

            <section aria-labelledby="contacto-legal">
              <h2 id="contacto-legal" className="font-heading text-2xl font-semibold text-[#154677]">6. Contacto y reclamos</h2>
              <p className="mt-4">Si querés consultar las condiciones de un envío, corregir los datos que nos diste o presentar un reclamo, comunicate con la sucursal correspondiente:</p>
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
