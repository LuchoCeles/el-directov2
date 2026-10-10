import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/inicio/Header";
import Footer from "@/components/inicio/Footer";
import TarjetaSucursal from "@/components/sucursales/TarjetaSucursal";
import { sucursales } from "@/lib/empresa";
import { obtenerEsquemaSucursales } from "@/lib/geo";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("sucursales");

export default function PaginaSucursales() {
  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(obtenerEsquemaSucursales()).replace(/</g, "\\u003c"),
          }}
        />
        <section
          className="bg-[#EAF2FA] px-6 pb-16 pt-8 sm:px-10 sm:pb-20 lg:pb-24"
          aria-labelledby="titulo-sucursales"
        >
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Ruta de navegación"
              className="mb-14 text-xs font-semibold uppercase tracking-[0.16em] text-[#42617F]"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#087CE5]">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Sucursales</li>
              </ol>
            </nav>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                  Encontranos
                </p>
                <h1
                  id="titulo-sucursales"
                  className="font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
                >
                  Sucursales en Rosario y Mar del Plata
                </h1>
              </div>
              <p className="max-w-lg text-base leading-8 text-[#365572] sm:text-lg">
                Si querés despachar o retirar una encomienda o una carga,
                acá tenés la dirección, los horarios y las formas de contacto
                de cada sucursal.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {sucursales.map((sucursal) => (
                <a
                  key={sucursal.nombre}
                  href={
                    sucursal.nombre === "Rosario"
                      ? "#rosario"
                      : "#mar-del-plata"
                  }
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#C9DCEB] bg-white px-5 text-sm font-bold hover:border-[#087CE5] hover:text-[#087CE5]"
                >
                  {sucursal.nombre}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 sm:px-10" aria-label="Datos de las sucursales">
          <div className="mx-auto max-w-6xl">
            {sucursales.map((sucursal, indice) => (
              <TarjetaSucursal
                key={sucursal.nombre}
                sucursal={sucursal}
                indice={indice}
              />
            ))}
          </div>
        </section>
        <section
          className="bg-[#EAF2FA] px-6 py-20 text-[#154677] sm:px-10 lg:py-24"
          aria-labelledby="titulo-contacto-sucursales"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Antes de enviar
              </p>
              <h2
                id="titulo-contacto-sucursales"
                className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                ¿Querés saber cuánto cuesta tu envío?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#365572]">
                Contanos qué vas a transportar, su tamaño aproximado y desde
                dónde hasta dónde tiene que viajar. Con esos datos podemos
                orientarte sobre la cotización.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677]"
            >
              Solicitar cotización{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
