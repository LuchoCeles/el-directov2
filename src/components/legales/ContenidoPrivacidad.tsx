import Link from "next/link";
import { empresa, sucursales } from "@/lib/empresa";

export default function ContenidoPrivacidad() {
  return (
    <main className="bg-white text-[#154677]">
      <div className="cabecera-ajustable--simple section-shell pb-20 pt-12 sm:pb-28 sm:pt-16">
        <nav aria-label="Ruta de navegación" className="cabecera-ajustable__migas text-xs font-bold text-[#53708b]">
          <Link href="/" className="hover:text-[#087ce5]">Inicio</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          Política de privacidad
        </nav>

        <div className="cabecera-ajustable__introduccion mt-12 max-w-3xl">
          <p className="eyebrow">Tus datos personales</p>
          <h1 className="cabecera-ajustable__titulo font-heading mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight">
            Política de privacidad
          </h1>
          <p className="cabecera-ajustable__descripcion mt-6 text-base leading-8 text-[#42617F] sm:text-lg">
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
              <p className="mt-4">Para enviarnos una consulta, te pedimos tu nombre, correo electrónico y mensaje. Si querés, también podés agregar el nombre de tu empresa y un teléfono. Tu consulta llega a nuestro correo y queda guardada para que podamos darle seguimiento.</p>
              <p className="mt-3">No incluyas contraseñas, datos bancarios ni información sensible en el mensaje. Para orientarte sobre un envío, alcanza con que nos cuentes qué querés transportar, desde dónde y hacia dónde.</p>
            </section>

            <section aria-labelledby="finalidad-datos">
              <h2 id="finalidad-datos" className="font-heading text-2xl font-semibold text-[#154677]">2. Para qué usamos los datos</h2>
              <p className="mt-4">Usamos tus datos para entender lo que necesitás, responderte y dar seguimiento a tu consulta. También protegemos el formulario para evitar mensajes abusivos. No usamos tus datos para enviarte publicidad por haber hecho una consulta.</p>
            </section>

            <section aria-labelledby="destinatarios-datos">
              <h2 id="destinatarios-datos" className="font-heading text-2xl font-semibold text-[#154677]">3. Quién puede acceder a tus datos</h2>
              <p className="mt-4">El equipo de {empresa.nombreCompleto} que atiende las consultas puede leer tu mensaje para responderte. Para recibirlo y enviar la respuesta usamos un servicio de correo, que puede procesar la información fuera de Argentina. No vendemos tus datos ni los compartimos con otras empresas para publicidad o para que los usen con fines propios.</p>
              <p className="mt-3">Al visitar la página de <Link href="/sucursales" className="font-semibold text-[#087CE5] underline underline-offset-4">sucursales</Link>, Google puede recibir información a través de los mapas. Si abrís WhatsApp, también se aplican sus políticas de privacidad.</p>
            </section>

            <section aria-labelledby="opciones-datos">
              <h2 id="opciones-datos" className="font-heading text-2xl font-semibold text-[#154677]">4. Al enviar tu consulta</h2>
              <p className="mt-4">Antes de enviar el formulario, te pedimos autorización para usar tus datos con ese fin. El nombre, correo y mensaje son necesarios para que podamos responderte; el nombre de la empresa y el teléfono son opcionales. También podés comunicarte por los otros canales publicados en el sitio.</p>
              <p className="mt-3">Enviar el formulario no significa contratar un transporte ni aceptar las condiciones comerciales de un envío.</p>
            </section>

            <section aria-labelledby="derechos-datos">
              <h2 id="derechos-datos" className="font-heading text-2xl font-semibold text-[#154677]">5. Tus derechos</h2>
              <p className="mt-4">Podés pedirnos que te informemos qué datos tuyos tenemos, que corrijamos los que estén mal o que los eliminemos cuando corresponda. Escribí a cualquiera de los correos de abajo o acercate a una sucursal. Para proteger tus datos, podremos pedirte que confirmes tu identidad.</p>
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
              <p className="mt-4">Si cambia la forma en que usamos tus datos, actualizaremos esta página. También podés leer los <Link href="/terminos-y-condiciones" className="font-semibold text-[#087CE5] underline underline-offset-4">Términos y condiciones de uso del sitio</Link>.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
