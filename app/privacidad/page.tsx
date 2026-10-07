import type { Metadata } from "next";
import Header from "@/components/inicio/Header";
import Footer from "@/components/inicio/Footer";
import ContenidoPrivacidad from "@/components/legales/ContenidoPrivacidad";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("privacidad");

export default function PaginaPrivacidad() {
  return (
    <>
      <Header />
      <ContenidoPrivacidad />
      <Footer />
    </>
  );
}
