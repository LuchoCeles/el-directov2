import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Footer from "@/components/inicio/Footer";
import Header from "@/components/inicio/Header";
import { itinerarioDirecto, redespachosPorSucursal, tiposDeCarga, type RutaDirecta, type Sucursal } from "@/lib/empresa";
import { obtenerEsquemaRuta } from "@/lib/seo/obtenerEsquemaRuta";

interface PropiedadesDetalleRuta {
  ruta: RutaDirecta;
  rutaOpuesta: RutaDirecta;
}

const imagenesPorRuta: Record<string, { archivo: string; descripcion: string }> = {
  "envios-a-rosario": {
    archivo: "/AUTOPISTA_SANTA_FE_ROSARIO.webp",
    descripcion: "Autopista señalizada hacia Rosario con camiones en circulación",
  },
  "envios-a-mar-del-plata": {
    archivo: "/CAMION_ENTRANDO_EN_MAR_DEL_PLATA.webp",
    descripcion: "Camión de El Directo ingresando a Mar del Plata",
  },
};

function DatosSucursal({ sucursal, etiqueta }: { sucursal: Sucursal; etiqueta: string }) {
  return (
    <article className="border-t border-[#154677]/20 pt-7 md:pt-9">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">{etiqueta}</p>
      <h3 className="mb-5 text-2xl font-semibold tracking-tight text-[#154677] md:text-3xl">{sucursal.nombre}</h3>
      <p className="flex items-start gap-3 text-sm leading-7 text-[#365572] md:text-base">
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#087CE5]" aria-hidden="true" />
        {sucursal.direccion}
      </p>
      <div className="mt-5 pl-7 text-sm leading-7 text-[#365572]">
        <p>Lunes a viernes, de {sucursal.horarios.semana.abre} a {sucursal.horarios.semana.cierra}</p>
        <p>Sábados, de {sucursal.horarios.sabado.abre} a {sucursal.horarios.sabado.cierra}</p>
        <p>Domingos: {sucursal.horarios.domingo}. Feriados: {sucursal.horarios.feriados}</p>
      </div>
      <div className="mt-5 flex flex-col gap-2 pl-7">
        {sucursal.telefono.map((telefono) => (
          <a key={telefono} href={`tel:${telefono.replace(/\D/g, "")}`}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#154677] underline-offset-4 transition-colors hover:text-[#087CE5] hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
            <Phone className="h-4 w-4" aria-hidden="true" />{telefono}
          </a>
        ))}
        <a href={`mailto:${sucursal.correo}`} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#154677] underline-offset-4 transition-colors hover:text-[#087CE5] hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
          <Mail className="h-4 w-4" aria-hidden="true" />{sucursal.correo}
        </a>
      </div>
    </article>
  );
}

export default function DetalleRuta({ ruta, rutaOpuesta }: PropiedadesDetalleRuta) {
  const imagen = imagenesPorRuta[ruta.slug];
  const esquemaRuta = obtenerEsquemaRuta(ruta);
  const destinosRedespacho = redespachosPorSucursal.find(
    (grupo) => grupo.sucursal.nombre === ruta.destino.nombre,
  )?.destinos ?? [];

  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(esquemaRuta).replace(/</g, "\\u003c"),
        }} />

        <section className="relative overflow-hidden bg-[#EAF2FA]">
          <div className="mx-auto grid max-w-[1440px] lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="relative z-10 flex flex-col justify-center px-6 pb-14 pt-8 sm:px-10 lg:px-16 lg:pb-20 lg:pt-16 xl:px-24">
              <nav aria-label="Ruta de navegación" className="mb-10 text-xs font-semibold uppercase tracking-[0.16em] text-[#365572]">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="transition-colors hover:text-[#087CE5] focus-visible:underline">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Envíos a {ruta.destino.nombre}</li>
                </ol>
              </nav>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#087CE5]">Transporte directo entre sucursales</p>
              <h1 className="max-w-2xl font-heading text-[clamp(2.45rem,5vw,4.8rem)] font-semibold leading-[1.09] tracking-[-0.055em] text-[#154677]">{ruta.titulo}</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#365572] sm:text-lg">{ruta.descripcion} Las salidas son los {itinerarioDirecto.diasSalida.join(" y ")}, con arribo previsto a la sucursal de destino {itinerarioDirecto.arriboPrevisto.referencia} a las {itinerarioDirecto.arriboPrevisto.hora}.</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
                <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
                  Cotizar un envío <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/sucursales" className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-[#154677] underline-offset-4 hover:underline focus-visible:underline">
                  Ver sucursales <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-full">
              {imagen && <Image src={imagen.archivo} alt={imagen.descripcion} fill preload sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover object-center" />}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:py-28" aria-labelledby="como-enviar">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Tu envío, paso a paso</p>
              <h2 id="como-enviar" className="max-w-lg font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#154677] sm:text-4xl">Cómo enviar una encomienda o carga a {ruta.destino.nombre}</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#365572]">Podés llevar tu carga a nuestra sucursal de {ruta.origen.nombre} y retirarla en {ruta.destino.nombre}. Si preferís que la retiremos o la entreguemos a domicilio, pasanos las direcciones para consultar la disponibilidad.</p>
            </div>
            <ol className="border-t border-[#154677]/20">
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#154677]/20 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="pt-1 text-sm font-bold text-[#087CE5]">01</span>
                <div><h3 className="text-lg font-semibold text-[#154677]">Contanos qué vas a enviar</h3><p className="mt-2 text-sm leading-7 text-[#365572]">Decinos qué es, cuánto mide y pesa aproximadamente, y entre qué direcciones tiene que viajar. Con esos datos podemos cotizarlo.</p></div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#154677]/20 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="pt-1 text-sm font-bold text-[#087CE5]">02</span>
                <div><h3 className="text-lg font-semibold text-[#154677]">Coordiná el despacho</h3><p className="mt-2 text-sm leading-7 text-[#365572]">Podés acercar la carga a {ruta.origen.direccion}. Si necesitás que la busquemos, consultanos si hay retiro disponible en tu domicilio.</p></div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#154677]/20 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="pt-1 text-sm font-bold text-[#087CE5]">03</span>
                <div><h3 className="text-lg font-semibold text-[#154677]">Elegí cómo recibirla</h3><p className="mt-2 text-sm leading-7 text-[#365572]">Podés retirarla en nuestra sucursal de {ruta.destino.nombre}. Si preferís recibirla en tu domicilio, consultanos si podemos entregarla allí.</p></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-[#EAF2FA] px-6 py-20 sm:px-10 lg:py-28" aria-labelledby="sucursales-trayecto">
          <div className="mx-auto max-w-6xl">
            <div className="mb-11 max-w-2xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Atención en ambos extremos</p>
              <h2 id="sucursales-trayecto" className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#154677] sm:text-4xl">Sucursales del trayecto</h2>
              <p className="mt-5 text-base leading-8 text-[#365572]">Acá tenés las direcciones, los horarios y los datos de contacto de las dos sucursales para organizar tu envío.</p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <DatosSucursal etiqueta="Origen" sucursal={ruta.origen} />
              <DatosSucursal etiqueta="Destino" sucursal={ruta.destino} />
            </div>
          </div>
        </section>

        {destinosRedespacho.length > 0 && (
          <section className="px-6 py-20 sm:px-10 lg:py-28" aria-labelledby="redespachos-desde-destino">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Conexiones desde la sucursal de destino</p>
                <h2 id="redespachos-desde-destino" className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#154677] sm:text-4xl">
                  Redespachos desde {ruta.destino.nombre}
                </h2>
                <p className="mt-5 text-base leading-8 text-[#365572]">
                  Si tu carga sigue viaje desde {ruta.destino.nombre}, consultanos por una conexión a estas localidades. Antes de coordinar el redespacho, confirmaremos la disponibilidad, el costo y el plazo para tu envío.
                </p>
              </div>
              <ul className="mt-10 grid gap-x-8 gap-y-3 border-t border-[#154677]/20 pt-7 sm:grid-cols-2 lg:grid-cols-3" aria-label={`Destinos de redespacho desde ${ruta.destino.nombre}`}>
                {destinosRedespacho.map((destino) => (
                  <li key={destino} className="flex items-center gap-3 text-sm font-semibold text-[#154677] sm:text-base">
                    <MapPin className="h-4 w-4 shrink-0 text-[#087CE5]" aria-hidden="true" />
                    {destino}
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="mt-9 inline-flex min-h-12 items-center gap-3 border-b border-[#087CE5] text-sm font-bold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
                Consultar un redespacho <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        <section className="px-6 py-20 sm:px-10 lg:py-28" aria-labelledby="tipos-carga-ruta">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
            <h2 id="tipos-carga-ruta" className="font-heading text-3xl font-semibold tracking-[-0.04em] text-[#154677] sm:text-4xl">Qué podés enviar en esta ruta</h2>
            <div>
              <p className="text-base leading-8 text-[#365572]">Llevamos encomiendas, mercadería y otros tipos de carga en este trayecto. Si tu envío es grande o frágil, consultanos antes de despacharlo para saber cómo prepararlo.</p>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {tiposDeCarga.map((tipo) => (
                  <li key={tipo} className="border-t border-[#154677]/20 pt-3 text-sm leading-7 text-[#365572]">{tipo}</li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
                <Link href="/servicios" className="inline-flex min-h-12 items-center gap-3 border-b border-[#087CE5] text-sm font-bold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
                  Ver servicios <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={`/${rutaOpuesta.slug}`} className="inline-flex min-h-12 items-center gap-3 border-b border-[#087CE5] text-sm font-bold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
                  Envíos a {rutaOpuesta.destino.nombre} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EAF2FA] px-6 py-20 text-[#154677] sm:px-10 lg:py-24" aria-labelledby="consultar-envio">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Hablemos de tu envío</p>
              <h2 id="consultar-envio" className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Contanos qué necesitás enviar a {ruta.destino.nombre}.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#365572]">Con el tamaño y peso aproximados, y las direcciones de origen y destino, podemos orientarte y preparar una cotización.</p>
            </div>
            <Link href="/contacto" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
              Solicitar cotización <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
