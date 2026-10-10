import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/inicio/Footer";
import Header from "@/components/inicio/Header";
import Servicios from "@/components/servicios/Servicios";
import ProcesoConsulta from "@/components/servicios/ProcesoConsulta";
import { empresa, rutasDirectas } from "@/lib/empresa";

export default function PaginaServicios() {
  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <section className="bg-[#EAF2FA]" aria-labelledby="titulo-pagina-servicios">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[620px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="flex flex-col justify-center px-5 pb-14 pt-8 sm:px-10 lg:px-16 lg:py-20 xl:px-24">
              <nav aria-label="Ruta de navegación" className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#365572]">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-[#087CE5] focus-visible:underline">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Servicios</li>
                </ol>
              </nav>
              <p className="eyebrow">Transporte y logística</p>
              <h1 id="titulo-pagina-servicios" className="mt-5 max-w-2xl font-heading text-[clamp(2.5rem,5.5vw,5.2rem)] font-semibold leading-[1.07] tracking-[-0.055em]">
                Transporte para tus encomiendas y cargas
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#365572] sm:text-lg">
                En {empresa.nombreCompleto} llevamos tus envíos entre Rosario y Mar del Plata. También podemos ayudarte con mudanzas, vehículos y conexiones a otras localidades. Contanos qué necesitás transportar y te orientamos.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href="/contacto" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CE5]">
                  Consultar un envío <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/cobertura" className="inline-flex min-h-12 items-center gap-2 text-sm font-bold underline-offset-4 hover:underline focus-visible:underline">
                  Ver cobertura <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-full">
              <Image src="/CAMION_EN_RUTA_2.webp" alt="Camión de El Directo durante un traslado de mercadería" fill preload sizes="(max-width: 1023px) 100vw, 53vw" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b3051]/80 to-transparent px-6 pb-7 pt-20 text-sm font-semibold text-white sm:px-10">
                Rosario <span className="mx-2 text-white/70" aria-hidden="true">↔</span> Mar del Plata
              </div>
            </div>
          </div>
        </section>

        <Servicios />
        <ProcesoConsulta />

        <section className="bg-white px-5 py-20 text-[#154677] sm:px-10 lg:py-24" aria-labelledby="titulo-rutas-servicios">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Trayecto principal</p>
              <h2 id="titulo-rutas-servicios" className="mt-5 font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Un trayecto directo en ambos sentidos</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#365572]">Elegí la ciudad de destino para ver cómo despachar y recibir tu carga. Si necesitás enviarla a otra localidad, consultanos si hay una conexión disponible y qué plazo tendría.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {rutasDirectas.map((ruta) => (
                  <Link key={ruta.slug} href={`/${ruta.slug}`} className="group flex min-h-16 items-center justify-between gap-4 border-t border-[#C9DCEB] py-4 text-sm font-bold text-[#154677] transition-colors hover:text-[#087CE5] focus-visible:text-[#087CE5]">
                    Envíos a {ruta.destino.nombre} <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
