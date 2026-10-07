import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroPrincipal() {
  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="relative isolate overflow-hidden bg-[#102f4f] text-white">
      <div className="absolute inset-0">
        <Image src="/CAMION_ENTRANDO_EN_MAR_DEL_PLATA.webp" alt="Camión de Transporte El Directo en el ingreso a Mar del Plata" fill preload sizes="100vw" className="object-cover object-[58%_center] sm:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,25,43,.85)_0%,rgba(9,25,43,.55)_37%,rgba(9,25,43,.08)_76%),linear-gradient(0deg,rgba(9,25,43,.6),transparent_47%)]" />
      </div>
      <div className="section-shell relative flex min-h-[560px] items-center py-20 sm:min-h-[620px] lg:min-h-[680px] lg:py-24">
        <div className="max-w-[690px] pt-2 sm:pt-5 lg:pt-8">
          <p className="mb-7 flex items-center gap-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-white/90 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Transporte El Directo</p>
          <h1 id="titulo-inicio" className="font-heading max-w-[740px] text-[clamp(2.85rem,6.2vw,5.7rem)] font-semibold leading-[1.09] tracking-[-0.045em] text-balance">Envíos entre Rosario y Mar del Plata.</h1>
          <p className="mt-7 max-w-[540px] text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">Transportamos encomiendas y carga en ambos sentidos, con atención en nuestras dos sucursales.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contacto" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#087ce5] px-6 text-sm font-bold text-white transition-colors hover:bg-[#0669c3]">Cotizá tu envío <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/cobertura" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/70 bg-white/5 px-6 text-sm font-bold text-white transition-colors hover:bg-white/15">Conocé nuestras rutas <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
