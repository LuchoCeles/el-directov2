import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { empresa } from "@/lib/empresa";

export default function ResumenEmpresa() {
  return (
    <section id="sobre-nosotros" aria-labelledby="titulo-empresa-inicio" className="bg-[#154677] py-20 text-white sm:py-24 lg:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b5dfff]">La empresa</p>
          <h2 id="titulo-empresa-inicio" className="font-heading mt-5 max-w-xl text-4xl leading-[1.1] tracking-tight sm:text-5xl">Conocé quiénes estamos detrás de cada envío</h2>
          <div className="mt-12 border-t border-white/30 pt-6"><span className="font-heading text-5xl leading-none sm:text-6xl">{empresa.añoFundacion}</span><span className="ml-4 text-sm text-white/75">Año de fundación</span></div>
        </div>
        <div className="lg:pt-12">
          <p className="max-w-2xl text-lg leading-9 text-white/85">En {empresa.nombreCompleto} atendemos a particulares, comercios y empresas. Escuchamos qué necesitás trasladar y buscamos con vos la forma de enviarlo desde Rosario o Mar del Plata.</p>
          <Link href="/empresa" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-white text-sm font-bold text-white hover:text-[#b5dfff]">Conocer la empresa <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
