import { empresa, urlSitio, type RutaDirecta } from "@/lib/empresa";

export function obtenerEsquemaRuta(ruta: RutaDirecta) {
  const base = urlSitio.replace(/\/$/, "");
  const urlRuta = `${base}/${ruta.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${urlRuta}#navegacion`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": base },
          { "@type": "ListItem", "position": 2, "name": ruta.titulo, "item": urlRuta },
        ],
      },
      {
        "@type": "Service",
        "@id": `${urlRuta}#servicio`,
        "name": ruta.titulo,
        "description": ruta.descripcionSeo,
        "url": urlRuta,
        "provider": { "@id": `${base}/#empresa`, "name": empresa.nombreCompleto },
        "areaServed": [
          { "@type": "City", "name": ruta.origen.nombre },
          { "@type": "City", "name": ruta.destino.nombre },
        ],
      },
    ],
  };
}
