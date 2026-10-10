import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { rutasDirectas } from "@/lib/empresa";

const Rutas = () => {
  return (
    <section
      id="rutas"
      aria-labelledby="titulo-rutas"
      className="scroll-mt-24 bg-[#EAF2FA] px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#154677]">
            Rutas directas
          </p>
          <h2
            id="titulo-rutas"
            className="font-heading max-w-xl text-4xl leading-[1.08] tracking-tight text-[#154677] sm:text-5xl lg:text-6xl"
          >
            ¿Desde dónde necesitás enviar?
          </h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#154677]/80 sm:text-lg sm:leading-8">
            Hacemos viajes directos entre nuestras sucursales de Rosario y Mar del Plata en ambos sentidos. Elegí tu trayecto para ver las direcciones, los horarios de atención y cómo coordinar un retiro o una entrega a domicilio.
          </p>
        </div>

        <div>
        <ol className="border-t border-[#154677]/20">
          {rutasDirectas.map((ruta, indice) => (
            <li key={ruta.slug} className="border-b border-[#154677]/20 py-7 sm:py-9">
              <article className="grid gap-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6">
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold tracking-[0.18em] text-[#154677]"
                >
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-2xl leading-tight text-[#154677] sm:text-3xl">
                    {ruta.titulo}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#154677]/80 sm:text-base">
                    {ruta.descripcion}
                  </p>
                  <Link
                    href={`/${ruta.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-[#087CE5] font-semibold text-[#154677] transition-colors hover:border-[#154677] hover:text-[#154677] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#154677]"
                  >
                    Envíos de {ruta.origen.nombre} a {ruta.destino.nombre}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ol>
        <Link href="/cobertura" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#087CE5] text-sm font-semibold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
          Ver toda la cobertura <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Rutas;
