import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/inicio/Footer";
import Header from "@/components/inicio/Header";
import Cobertura from "@/components/cobertura/Cobertura";
import RutasDirectas from "@/components/cobertura/RutasDirectas";
import { ciudadesDirecto, empresa, sucursales } from "@/lib/empresa";

export default function PaginaCobertura() {
  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <section className="bg-[#EAF2FA]" aria-labelledby="titulo-pagina-cobertura">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="flex flex-col justify-center px-5 pb-14 pt-8 sm:px-10 lg:px-16 lg:py-20 xl:px-24">
              <nav aria-label="Ruta de navegación" className="mb-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#365572]">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-[#087CE5] focus-visible:underline">Inicio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page">Cobertura</li>
                </ol>
              </nav>
              <p className="eyebrow">Rutas y destinos</p>
              <h1 id="titulo-pagina-cobertura" className="mt-5 max-w-2xl font-heading text-[clamp(2.5rem,5.5vw,5.2rem)] font-semibold leading-[1.07] tracking-[-0.055em]">
                Cobertura de envíos entre Rosario y Mar del Plata.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#365572] sm:text-lg">
                {empresa.nombreCompleto} une sus sucursales de {ciudadesDirecto.join(" y ")} en ambos sentidos. Desde cada una se pueden coordinar redespachos a las localidades indicadas más abajo, previa confirmación.
              </p>
              <Link href="#rutas-directas" className="mt-9 inline-flex min-h-12 w-fit items-center gap-2 border-b border-[#087CE5] text-sm font-bold underline-offset-4 hover:text-[#087CE5] focus-visible:text-[#087CE5]">
                Explorar rutas <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-full">
              <Image src="/CAMION_ENTRANDO_EN_MAR_DEL_PLATA.webp" alt="Camión de El Directo al ingresar a Mar del Plata" fill preload sizes="(max-width: 1023px) 100vw, 53vw" className="object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b3051]/80 to-transparent px-6 pb-7 pt-20 text-sm font-semibold text-white sm:px-10">
                Consultá el trayecto y las conexiones disponibles
              </div>
            </div>
          </div>
        </section>

        <RutasDirectas />
        <Cobertura />

        <section className="bg-[#EAF2FA] px-5 py-20 text-[#154677] sm:px-10 lg:py-24" aria-labelledby="titulo-sucursales-cobertura">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">Puntos de atención</p>
            <h2 id="titulo-sucursales-cobertura" className="mt-5 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Dónde despachar o retirar tu carga</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
              {sucursales.map((sucursal) => (
                <address key={sucursal.nombre} className="border-t border-[#C9DCEB] pt-6 not-italic">
                  <h3 className="font-heading text-2xl font-semibold">{sucursal.nombre}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#365572]">{sucursal.direccion}</p>
                  <p className="mt-1 text-sm leading-7 text-[#365572]">Lunes a viernes: {sucursal.horarios.semana.abre} a {sucursal.horarios.semana.cierra}. Sábados: {sucursal.horarios.sabado.abre} a {sucursal.horarios.sabado.cierra}.</p>
                  <a href={`tel:${sucursal.telefono[0].replace(/\D/g, "")}`} className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-[#154677] underline underline-offset-4 hover:text-[#087CE5]">{sucursal.telefono[0]}</a>
                </address>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
