import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  PackageCheck,
  Truck,
} from "lucide-react";
import Header from "@/components/inicio/Header";
import Footer from "@/components/inicio/Footer";
import { empresa, sucursales } from "@/lib/empresa";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("empresa");

export default function PaginaEmpresa() {
  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <section className="bg-[#EAF2FA]" aria-labelledby="titulo-empresa">
          <div className="mx-auto grid max-w-[1440px] lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="flex flex-col justify-center px-6 pb-14 pt-8 sm:px-10 lg:px-16 lg:py-20 xl:px-24">
              <nav
                aria-label="Ruta de navegación"
                className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#42617F]"
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
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Nuestra historia
              </p>
              <h1
                id="titulo-empresa"
                className="max-w-2xl font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
              >
                Conectamos Rosario y Mar del Plata desde {empresa.añoFundacion}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#365572] sm:text-lg">
                {empresa.descripcion}
              </p>
              <Link
                href="/contacto"
                className="mt-9 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677]"
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
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 sm:px-10 lg:py-28"
          aria-labelledby="quienes-somos"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Sobre nosotros
              </p>
              <h2
                id="quienes-somos"
                className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                Transporte para personas, comercios y empresas
              </h2>
            </div>
            <div className="border-t border-[#C9DCEB] pt-7">
              <p className="text-base leading-8 text-[#365572] sm:text-lg sm:leading-9">
                {empresa.quienesSomos}
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#EAF2FA] px-6 py-20 sm:px-10 lg:py-28"
          aria-labelledby="como-trabajamos"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Cómo trabajamos
              </p>
              <h2
                id="como-trabajamos"
                className="font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
              >
                Nos ocupamos de cada traslado según lo que necesitás enviar
              </h2>
              <p className="mt-6 text-base leading-8 text-[#365572]">
                {empresa.queHacemos}
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[#C9DCEB] bg-[#C9DCEB] md:grid-cols-3">
              <article className="bg-white p-7 sm:p-9">
                <Truck className="h-8 w-8 text-[#087CE5]" aria-hidden="true" />
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  Un viaje directo entre sucursales
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#42617F]">
                  Tu carga viaja entre Rosario y Mar del Plata sin transbordo
                  entre nuestras sucursales.
                </p>
              </article>
              <article className="bg-white p-7 sm:p-9">
                <PackageCheck
                  className="h-8 w-8 text-[#087CE5]"
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  Cargas de distintos tamaños
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#42617F]">
                  Llevamos encomiendas y carga general de distintos tamaños.
                  Organizamos el traslado según las características de tu envío.
                </p>
              </article>
              <article className="bg-white p-7 sm:p-9">
                <MapPin className="h-8 w-8 text-[#087CE5]" aria-hidden="true" />
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  Opciones para llegar más lejos
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#42617F]">
                  Si necesitás retiro, entrega a domicilio o redespacho,
                  consultanos qué opciones hay para tu origen y destino.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 sm:px-10 lg:py-28"
          aria-labelledby="donde-estamos"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Atención en persona
              </p>
              <h2
                id="donde-estamos"
                className="font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
              >
                Podés acercarte a Rosario o Mar del Plata
              </h2>
              <Link
                href="/sucursales"
                className="mt-8 inline-flex min-h-12 items-center gap-3 border-b border-[#087CE5] text-sm font-bold hover:text-[#087CE5]"
              >
                Ver sucursales y horarios{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {sucursales.map((sucursal) => (
                <article
                  key={sucursal.nombre}
                  className="border-t border-[#C9DCEB] pt-6"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#087CE5]">
                    Sucursal
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold">
                    {sucursal.nombre}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#42617F]">
                    {sucursal.direccion}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
