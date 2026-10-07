import type { Metadata } from "next";
import { empresa, urlSitio } from "@/lib/empresa";

interface DatosMetadatos {
  ruta: string;
  titulo: string;
  descripcion: string;
  imagenAlt: string;
}

export function crearMetadatos({ ruta, titulo, descripcion, imagenAlt }: DatosMetadatos): Metadata {
  const url = ruta ? `${urlSitio}/${ruta}` : urlSitio;

  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      title: titulo,
      description: descripcion,
      url,
      siteName: empresa.nombre,
      locale: "es_AR",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: imagenAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}
