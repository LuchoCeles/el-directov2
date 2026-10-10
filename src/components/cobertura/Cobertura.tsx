import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { redespachosPorSucursal } from "@/lib/empresa";

export default function Cobertura() {
  return (
    <section id="cobertura" aria-labelledby="titulo-cobertura" className="bg-[#eaf2fa]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[290px] sm:min-h-[390px] lg:min-h-[640px]">
          <Image src="/AUTOPISTA_SANTA_FE_ROSARIO.webp" alt="Autopista en dirección a Rosario, Santa Fe y Córdoba" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-center" />
        </div>
        <div className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-[clamp(3rem,6vw,8rem)]">
          <div className="max-w-[610px]">
            <p className="eyebrow">Destinos con redespacho</p>
            <h2 id="titulo-cobertura" className="font-heading mt-5 text-4xl leading-[1.1] tracking-tight text-[#154677] sm:text-5xl">¿Tu envío va a otra localidad?</h2>
            <p className="mt-6 text-base leading-8 text-[#3d5975]">Desde nuestras sucursales podemos coordinar redespachos a los destinos que aparecen abajo. Escribinos para confirmar si hay disponibilidad y conocer el costo y el plazo de tu envío.</p>
            <div className="mt-8 space-y-8 border-t border-[#c7d9e9] pt-6">
              {redespachosPorSucursal.map(({ sucursal, destinos }) => (
                <div key={sucursal.nombre}>
                  <h3 className="font-heading text-xl font-semibold text-[#154677]">Desde {sucursal.nombre}</h3>
                  <ul className="mt-3 columns-2 gap-x-6 text-sm leading-9 text-[#154677] sm:gap-x-10 sm:text-base">
                    {destinos.map((ciudad) => <li key={ciudad} className="break-inside-avoid">{ciudad}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/contacto" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-[#087ce5] text-sm font-bold text-[#154677] hover:text-[#087ce5]">Consultar mi destino <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
