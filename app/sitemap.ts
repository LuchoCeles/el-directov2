import type { MetadataRoute } from "next";
import { metadatosPaginas, rutasDirectas, urlSitio } from "@/lib/empresa";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: urlSitio,
    },
    ...Object.keys(metadatosPaginas).map((ruta) => ({
      url: `${urlSitio}/${ruta}`,
    })),
    ...rutasDirectas.map((ruta) => ({ url: `${urlSitio}/${ruta.slug}` })),
  ];
}
