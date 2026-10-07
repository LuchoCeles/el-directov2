import type { Metadata } from "next";
import type { RutaDirecta } from "@/lib/empresa";
import { crearMetadatos } from "@/lib/seo/crearMetadatos";

export function obtenerMetadatosRuta(ruta: RutaDirecta): Metadata {
  return crearMetadatos({
    ruta: ruta.slug,
    titulo: ruta.tituloSeo,
    descripcion: ruta.descripcionSeo,
    imagenAlt: ruta.titulo,
  });
}
