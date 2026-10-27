import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { empresa } from "@/lib/empresa";

export default function HeroEmpresa() {
  return (
    <section className="bg-[#EAF2FA]" aria-labelledby="titulo-empresa">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[max(28rem,calc(100svh-12rem))] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="flex flex-col justify-center px-6 pb-14 pt-8 sm:px-10 lg:px-8 lg:py-8 xl:px-12">
          <nav
            aria-label="Ruta de navegación"
            className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#42617F] lg:mb-5"
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#087CE5]">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">La empresa</li>
            </ol>
          </nav>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5] lg:mb-3">
            Nuestra historia
          </p>
          <h1
            id="titulo-empresa"
            className="max-w-2xl font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em] lg:max-w-none lg:text-[clamp(2.8rem,3.7vw,3.75rem)]"
          >
            {empresa.trayectoria}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#365572] sm:text-lg lg:mt-4 lg:max-w-2xl lg:leading-7">
            {empresa.descripcion}
          </p>
          <Link
            href="/contacto"
            className="mt-9 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677] lg:mt-6"
          >
            Hablemos de tu envío{" "}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-full">
          <Image
            src="/CAMION_EN_RUTA_2.webp"
            alt="Camión de transporte en ruta"
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
