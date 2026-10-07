import Link from "next/link";
import { empresa, sucursales } from "@/lib/empresa";

export default function ContenidoPrivacidad() {
  return (
    <main className="bg-white text-[#154677]">
      <div className="section-shell pb-20 pt-12 sm:pb-28 sm:pt-16">
        <nav aria-label="Ruta de navegación" className="text-xs font-bold text-[#53708b]">
          <Link href="/" className="hover:text-[#087ce5]">Inicio</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          Política de privacidad
        </nav>

        <div className="mt-12 max-w-3xl">
          <p className="eyebrow">Tus datos personales</p>
          <h1 className="font-heading mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            Política de privacidad
          </h1>
          <p className="mt-6 text-base leading-8 text-[#42617F] sm:text-lg">
            Si nos escribís mediante el formulario de contacto, usamos los datos que nos das para gestionar y responder tu consulta. Acá te explicamos qué información recibimos, quién interviene en el envío y cómo podés ejercer tus derechos.
          </p>
        </div>

        <div className="mt-14 grid max-w-5xl gap-12 border-t border-[#C9DCEB] pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <aside className="text-sm leading-7 text-[#42617F]">
            <p className="font-heading text-lg font-semibold text-[#154677]">Responsable</p>
            <p className="mt-3">{empresa.nombreCompleto}</p>
            <p className="mt-3">Domicilios de atención:</p>
            <ul className="mt-2 space-y-2">
              {sucursales.map((sucursal) => (
                <li key={sucursal.nombre}>{sucursal.direccion}</li>
              ))}
            </ul>
            <Link href="/sucursales" className="mt-4 inline-block font-semibold text-[#087CE5] underline underline-offset-4">Ver todos los contactos</Link>
          </aside>

          <div className="space-y-11 text-base leading-8 text-[#365572]">
            <section aria-labelledby="datos-recibidos">
              <h2 id="datos-recibidos" className="font-heading text-2xl font-semibold text-[#154677]">1. Datos que recibimos</h2>
              <p className="mt-4">El formulario solicita nombre, correo electrónico y mensaje como datos obligatorios. El nombre de la empresa y el teléfono son opcionales. Las consultas recibidas quedan en las casillas de correo de la empresa, que forman su archivo electrónico de consultas. También recibimos la dirección IP desde la que se envía la consulta para limitar los envíos repetidos y proteger el formulario frente a usos abusivos.</p>
              <p className="mt-3">No incluyas en el mensaje contraseñas, datos bancarios ni información sensible. Para orientarte sobre un envío basta con describir la carga, el origen y el destino.</p>
            </section>

            <section aria-labelledby="finalidad-datos">
              <h2 id="finalidad-datos" className="font-heading text-2xl font-semibold text-[#154677]">2. Para qué usamos los datos</h2>
              <p className="mt-4">Usamos los datos del formulario para recibir tu solicitud, evaluar lo que necesitás y responderte por los medios de contacto que nos indiques. La IP se emplea en un registro temporal en memoria que impide más de un envío exitoso cada cinco minutos desde la misma dirección.</p>
            </section>

            <section aria-labelledby="destinatarios-datos">
              <h2 id="destinatarios-datos" className="font-heading text-2xl font-semibold text-[#154677]">3. Quiénes intervienen</h2>
              <p className="mt-4">El formulario transmite la consulta a una casilla de correo de {empresa.nombreCompleto} mediante Resend, proveedor tecnológico del servicio de envío de correos. <a href="https://resend.com/security" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#087CE5] underline underline-offset-4">Resend informa</a> que almacena los datos de esos correos en Estados Unidos. El personal de la empresa que atiende consultas puede acceder al mensaje para responderlo. La IP usada para limitar envíos no se agrega al correo de consulta.</p>
              <p className="mt-3">La página de <Link href="/sucursales" className="font-semibold text-[#087CE5] underline underline-offset-4">sucursales</Link> muestra mapas incrustados de Google. Al cargar esos mapas, tu navegador puede comunicarse con Google y ese proveedor puede tratar datos técnicos conforme a sus propias políticas. Los enlaces a WhatsApp abren ese servicio cuando decidís usarlos.</p>
            </section>

            <section aria-labelledby="opciones-datos">
              <h2 id="opciones-datos" className="font-heading text-2xl font-semibold text-[#154677]">4. Tus opciones al completar el formulario</h2>
              <p className="mt-4">Antes de enviar la consulta te pedimos una autorización específica para tratar los datos con esa finalidad, incluido su envío y almacenamiento mediante Resend en Estados Unidos. Si no proporcionás nombre, correo, mensaje o autorización, el formulario no podrá enviarse; podés contactarnos por los canales publicados en el sitio. La empresa y el teléfono son facultativos. Si los datos de contacto son incorrectos, es posible que no podamos responderte.</p>
              <p className="mt-3">El envío del formulario no implica contratar un servicio de transporte ni aceptar condiciones comerciales para un envío.</p>
            </section>

            <section aria-labelledby="derechos-datos">
              <h2 id="derechos-datos" className="font-heading text-2xl font-semibold text-[#154677]">5. Acceso, rectificación y supresión</h2>
              <p className="mt-4">Podés solicitar acceso a tus datos, su rectificación o actualización y, cuando corresponda, su supresión. Para hacerlo, escribí a cualquiera de los correos indicados abajo o dirigite a una sucursal. Podremos pedirte información razonable para verificar tu identidad y proteger tus datos antes de responder.</p>
              <ul className="mt-4 space-y-4">
                {sucursales.map((sucursal) => (
                  <li key={sucursal.nombre}>
                    <strong className="text-[#154677]">{sucursal.nombre}:</strong> {sucursal.direccion}.{" "}
                    <a href={`mailto:${sucursal.correo}`} className="break-all font-semibold text-[#087CE5] underline underline-offset-4">{sucursal.correo}</a>
                  </li>
                ))}
              </ul>
              <p className="mt-3">También podés acudir a la <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#087CE5] underline underline-offset-4">Agencia de Acceso a la Información Pública</a>, autoridad de control de la Ley 25.326.</p>
            </section>

            <section aria-labelledby="actualizaciones-privacidad">
              <h2 id="actualizaciones-privacidad" className="font-heading text-2xl font-semibold text-[#154677]">6. Cambios en esta política</h2>
              <p className="mt-4">Si cambia la forma en que funciona el formulario o tratamos la información, actualizaremos esta página. Podés consultar los <Link href="/terminos-y-condiciones" className="font-semibold text-[#087CE5] underline underline-offset-4">Términos y condiciones de uso del sitio</Link> para conocer cómo se gestionan las consultas.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
