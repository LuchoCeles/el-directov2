import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicios } from "@/lib/empresa";

export default function ResumenServicios() {
  return (
    <section id="servicios" aria-labelledby="titulo-servicios-inicio" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[300px] sm:min-h-[430px] lg:min-h-[600px]">
          <Image src="/CAMION_EN_RUTA_2.webp" alt="Camión de Transporte El Directo en ruta" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-center" />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-[clamp(3rem,6vw,8rem)]">
          <div className="max-w-[600px]">
            <p className="eyebrow">Servicios de transporte</p>
            <h2 id="titulo-servicios-inicio" className="font-heading mt-5 text-4xl leading-[1.1] tracking-tight text-[#154677] sm:text-5xl">Desde una encomienda hasta una mudanza</h2>
            <p className="mt-6 text-base leading-8 text-[#48647e]">Podés enviarnos desde cajas y bultos hasta muebles o mercadería para tu negocio. Para saber qué opciones hay para tu carga y cómo prepararla, contanos sus medidas, peso y destino.</p>
            <ul className="mt-8 grid gap-x-5 border-t border-[#d2e0ed] pt-5 sm:grid-cols-2">
              {servicios.map((servicio) => <li key={servicio.nombre} className="border-b border-[#d2e0ed] py-3 text-sm font-bold text-[#154677]">{servicio.nombre}</li>)}
            </ul>
            <Link href="/servicios" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#087ce5] text-sm font-bold text-[#154677] hover:text-[#087ce5]">Ver qué podés transportar <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
