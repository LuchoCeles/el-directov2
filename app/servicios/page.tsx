import type { Metadata } from "next";
import PaginaServicios from "@/components/servicios/PaginaServicios";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("servicios");

export default function PaginaServiciosRuta() {
  return <PaginaServicios />;
}
