import type { Metadata } from "next";
import PaginaCobertura from "@/components/cobertura/PaginaCobertura";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("cobertura");

export default function PaginaCoberturaRuta() {
  return <PaginaCobertura />;
}
