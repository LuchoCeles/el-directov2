import type { Metadata } from "next";
import Header from "@/components/inicio/Header";
import Footer from "@/components/inicio/Footer";
import ContenidoTerminos from "@/components/legales/ContenidoTerminos";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("terminos-y-condiciones");

export default function PaginaTerminosYCondiciones() {
  return (
    <>
      <Header />
      <ContenidoTerminos />
      <Footer />
    </>
  );
}
