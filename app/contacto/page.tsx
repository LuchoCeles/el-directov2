import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/inicio/Header";
import Contacto from "@/components/contacto/Contacto";
import Footer from "@/components/inicio/Footer";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("contacto");

export default function PaginaContacto() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-16 sm:py-20">
          <div className="section-shell">
            <nav aria-label="Ruta de navegación" className="text-xs font-bold text-[#53708b]"><Link href="/" className="hover:text-[#087ce5]">Inicio</Link><span className="mx-2" aria-hidden="true">/</span>Contacto</nav>
            <p className="eyebrow mt-12">Contacto</p>
            <h1 className="font-heading mt-4 max-w-3xl text-[clamp(2.7rem,5vw,4.8rem)] leading-[1.08] tracking-tight text-[#154677]">Contacto y cotización de envíos</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#48647e] sm:text-lg">Consultá por encomiendas y cargas entre Rosario y Mar del Plata. Para cotizar, contanos qué enviás, las medidas y el peso aproximados, y las ciudades de origen y destino.</p>
          </div>
        </section>
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
