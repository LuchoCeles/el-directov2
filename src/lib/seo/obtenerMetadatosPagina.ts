import type { Metadata } from "next";
import { metadatosPaginas } from "@/lib/empresa";
import { crearMetadatos } from "@/lib/seo/crearMetadatos";

type RutaPagina = keyof typeof metadatosPaginas;

export function obtenerMetadatosPagina(ruta: RutaPagina): Metadata {
  const { titulo, descripcion, imagenAlt } = metadatosPaginas[ruta];
  return crearMetadatos({ ruta, titulo, descripcion, imagenAlt });
}
