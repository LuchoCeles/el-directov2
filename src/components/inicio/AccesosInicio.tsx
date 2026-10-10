import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sucursales, preguntasFrecuentes } from "@/lib/empresa";

export default function AccesosInicio() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-[#d2e0ed] pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Información para tu envío</p>
            <h2 className="font-heading mt-4 max-w-2xl text-4xl leading-[1.1] tracking-tight text-[#154677] sm:text-5xl">Antes de enviar, encontrá lo que necesitás saber</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#48647e]">Acá tenés los horarios de las sucursales y las respuestas a las consultas más comunes. Si necesitás ayuda con tu carga, también podés escribirnos.</p>
        </div>
        <div className="grid gap-12 py-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-20 lg:py-14">
          <div id="sucursales">
            <div className="mb-7 flex items-center justify-between gap-4">
              <h3 className="font-heading text-2xl text-[#154677] sm:text-3xl">Sucursales</h3>
              <Link href="/sucursales" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#154677] hover:text-[#087ce5]">Ver detalles <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {sucursales.map((sucursal) => (
                <article key={sucursal.nombre} className="border-t border-[#d2e0ed] pt-5">
                  <h4 className="font-heading text-xl text-[#154677]">{sucursal.nombre}</h4>
                  <p id={sucursal.nombre === "Rosario" ? "horarios" : undefined} className="mt-3 text-sm leading-6 text-[#48647e]">Lunes a viernes, de {sucursal.horarios.semana.abre} a {sucursal.horarios.semana.cierra}. Sábados, de {sucursal.horarios.sabado.abre} a {sucursal.horarios.sabado.cierra}.</p>
                  <p className="text-sm leading-6 text-[#48647e]">Domingos: {sucursal.horarios.domingo}. Feriados: {sucursal.horarios.feriados}.</p>
                </article>
              ))}
            </div>
          </div>
          <div id="preguntas-frecuentes" className="border-t border-[#d2e0ed] pt-5 lg:border-t-0 lg:pt-0">
            <h3 className="font-heading text-2xl text-[#154677] sm:text-3xl">Preguntas frecuentes</h3>
            <p className="mt-5 text-sm font-bold text-[#154677]">{preguntasFrecuentes[0]?.pregunta}</p>
            <p className="mt-2 text-sm leading-7 text-[#48647e]">{preguntasFrecuentes[0]?.respuesta}</p>
            <Link href="/preguntas-frecuentes" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#154677] hover:text-[#087ce5]">Ver todas las respuestas <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
