import type { Metadata } from "next";
import { descripcionSeo, empresa, tituloSeo, urlSitio } from "@/lib/empresa";
import { crearMetadatos } from "@/lib/seo/crearMetadatos";

export const metadatosSeo: Metadata = {
  metadataBase: new URL(urlSitio),
  authors: [{ name: empresa.nombre }],
  ...crearMetadatos({
    ruta: "",
    titulo: tituloSeo,
    descripcion: descripcionSeo,
    imagenAlt: `Transporte de carga entre Rosario y Mar del Plata - ${empresa.nombre}`,
  }),
};
