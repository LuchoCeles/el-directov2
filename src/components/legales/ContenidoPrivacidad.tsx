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
            Cuando nos escribís desde el formulario, usamos los datos que nos
            compartís para gestionar tu consulta y responderte. Acá te
            contamos qué información recibimos, quién puede acceder a ella y
            cómo podés ejercer tus derechos.
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
            <Link href="/sucursales" className="mt-4 inline-block font-semibold text-[#087CE5] underline underline-offset-4">Ver teléfonos y horarios</Link>
          </aside>

          <div className="space-y-11 text-base leading-8 text-[#365572]">
            <section aria-labelledby="datos-recibidos">
              <h2 id="datos-recibidos" className="font-heading text-2xl font-semibold text-[#154677]">1. Datos que recibimos</h2>
              <p className="mt-4">Para enviar el formulario, te pedimos nombre, correo electrónico y un mensaje. Podés agregar el nombre de tu empresa y un teléfono si querés. Las consultas llegan a las casillas de correo de la empresa y quedan en nuestro archivo electrónico de consultas. También recibimos la dirección IP desde la que enviás el formulario para limitar mensajes repetidos y protegerlo frente a usos abusivos.</p>
              <p className="mt-3">No incluyas contraseñas, datos bancarios ni información sensible en el mensaje. Para orientarte sobre un envío, alcanza con que nos cuentes qué querés transportar, desde dónde y hacia dónde.</p>
            </section>

            <section aria-labelledby="finalidad-datos">
              <h2 id="finalidad-datos" className="font-heading text-2xl font-semibold text-[#154677]">2. Para qué usamos los datos</h2>
              <p className="mt-4">Usamos los datos del formulario para entender tu solicitud y responderte por los medios de contacto que nos indiques. La dirección IP se guarda temporalmente en memoria para impedir más de un envío exitoso cada cinco minutos desde la misma dirección.</p>
            </section>

            <section aria-labelledby="destinatarios-datos">
              <h2 id="destinatarios-datos" className="font-heading text-2xl font-semibold text-[#154677]">3. Quiénes intervienen</h2>
              <p className="mt-4">Enviamos tu consulta a una casilla de correo de {empresa.nombreCompleto} mediante Resend, el proveedor que usamos para enviar correos. <a href="https://resend.com/security" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#087CE5] underline underline-offset-4">Resend informa</a> que almacena los datos de esos correos en Estados Unidos. El personal que atiende las consultas puede leer tu mensaje para responderte. La IP que usamos para limitar los envíos no se agrega al correo de la consulta.</p>
              <p className="mt-3">En la página de <Link href="/sucursales" className="font-semibold text-[#087CE5] underline underline-offset-4">sucursales</Link> mostramos mapas incrustados de Google. Cuando se cargan, tu navegador puede comunicarse con Google, que puede tratar datos técnicos según sus propias políticas. Los enlaces a WhatsApp abren ese servicio únicamente si decidís usarlos.</p>
            </section>

            <section aria-labelledby="opciones-datos">
              <h2 id="opciones-datos" className="font-heading text-2xl font-semibold text-[#154677]">4. Tus opciones al completar el formulario</h2>
              <p className="mt-4">Antes de enviar el formulario, te pedimos autorización específica para usar tus datos al gestionar y responder la consulta. Esto incluye el envío y almacenamiento del correo mediante Resend en Estados Unidos. Sin nombre, correo electrónico, mensaje o autorización, el formulario no puede enviarse. Podés comunicarte por los otros canales que publicamos en el sitio. El nombre de la empresa y el teléfono son opcionales. Si tus datos de contacto son incorrectos, tal vez no podamos responderte.</p>
              <p className="mt-3">Enviar el formulario no significa contratar un transporte ni aceptar las condiciones comerciales de un envío.</p>
            </section>

            <section aria-labelledby="derechos-datos">
              <h2 id="derechos-datos" className="font-heading text-2xl font-semibold text-[#154677]">5. Acceso, rectificación y supresión</h2>
              <p className="mt-4">Podés pedir acceso a tus datos, solicitar que se corrijan o actualicen y, cuando corresponda, pedir que se eliminen. Escribí a cualquiera de los correos de abajo o acercate a una sucursal. Antes de responder, podremos pedirte información razonable para verificar tu identidad y proteger tus datos.</p>
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
              <p className="mt-4">Si cambia el funcionamiento del formulario o la forma en que tratamos tus datos, actualizaremos esta página. También podés leer los <Link href="/terminos-y-condiciones" className="font-semibold text-[#087CE5] underline underline-offset-4">Términos y condiciones de uso del sitio</Link> para conocer cómo gestionamos las consultas.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
