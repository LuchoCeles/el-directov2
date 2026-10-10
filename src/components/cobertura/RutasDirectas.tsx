import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { itinerarioDirecto, rutasDirectas } from "@/lib/empresa";

export default function RutasDirectas() {
  return (
    <section id="rutas-directas" className="px-5 py-20 sm:px-10 lg:py-28" aria-labelledby="titulo-rutas-directas">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="eyebrow">Servicio directo</p>
            <h2 id="titulo-rutas-directas" className="mt-5 max-w-md font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Envíos de Rosario a Mar del Plata y de Mar del Plata a Rosario</h2>
          </div>
          <p className="max-w-xl self-end text-base leading-8 text-[#365572]">La carga viaja entre Rosario y Mar del Plata sin transbordo entre nuestras sucursales. Hay salidas los {itinerarioDirecto.diasSalida.join(" y ")} desde ambas ciudades. El arribo a la sucursal de destino está previsto {itinerarioDirecto.arriboPrevisto.referencia} a las {itinerarioDirecto.arriboPrevisto.hora}.</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-16">
          {rutasDirectas.map((ruta, indice) => (
            <article key={ruta.slug} className="flex flex-col border-t-2 border-[#154677] pt-7">
              <span className="text-xs font-bold tracking-[0.18em] text-[#087CE5]">{String(indice + 1).padStart(2, "0")} / RUTA DIRECTA</span>
              <h3 className="mt-6 max-w-md font-heading text-2xl font-semibold leading-tight tracking-tight text-[#154677] sm:text-3xl">{ruta.origen.nombre} <span aria-hidden="true">→</span> {ruta.destino.nombre}</h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#365572] sm:text-base">{ruta.descripcion}</p>
              <Link href={`/${ruta.slug}`} className="mt-auto inline-flex min-h-12 w-fit items-center gap-2 border-b border-[#087CE5] pt-8 text-sm font-bold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:text-[#087CE5]">
                Ver envíos a {ruta.destino.nombre} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
