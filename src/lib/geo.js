import { empresa, sucursales, urlSitio } from "./datos.js";

const idEmpresa = `${urlSitio}/#empresa`;

function formatearTelefono(telefono) {
  const digitos = telefono.replace(/\D/g, "");
  const sinCeroInicial = digitos.startsWith("0") ? digitos.slice(1) : digitos;
  return `+54${sinCeroInicial}`;
}

function construirEspecificacionHorarios(horarios) {
  return [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": horarios.semana.abre,
      "closes": horarios.semana.cierra,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": horarios.sabado.abre,
      "closes": horarios.sabado.cierra,
    },
  ];
}

function construirEsquemaSucursal(sucursal) {
  const identificador = sucursal.nombre.toLowerCase().replace(/\s+/g, "-");
  const url = `${urlSitio}/sucursales#${identificador}`;

  return {
    "@type": "LocalBusiness",
    "@id": url,
    "name": `${empresa.nombreCompleto} - Sucursal ${sucursal.nombre}`,
    "description": `La sucursal de ${sucursal.nombre} recibe consultas por envíos entre Rosario y Mar del Plata. Atiende de lunes a viernes de ${sucursal.horarios.semana.abre} a ${sucursal.horarios.semana.cierra} y los sábados de ${sucursal.horarios.sabado.abre} a ${sucursal.horarios.sabado.cierra}. Domingos: ${sucursal.horarios.domingo}. Feriados: ${sucursal.horarios.feriados}.`,
    "parentOrganization": { "@id": idEmpresa },
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": sucursal.direccion.split(",")[0].trim(),
      "addressLocality": sucursal.nombre,
      "addressRegion": sucursal.regionDireccion,
      "addressCountry": "AR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": sucursal.coordenadas.lat,
      "longitude": sucursal.coordenadas.lng,
    },
    "telephone": formatearTelefono(sucursal.telefono[0]),
    "email": sucursal.correo,
    "openingHoursSpecification": construirEspecificacionHorarios(sucursal.horarios),
  };
}

export function obtenerEsquemaOrganizacion() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": idEmpresa,
    "name": empresa.nombreCompleto,
    "legalName": empresa.nombreCompleto,
    "alternateName": empresa.nombre,
    "url": urlSitio,
    "logo": `${urlSitio}${empresa.logo}`,
  };
}

export function obtenerEsquemaSucursales() {
  return {
    "@context": "https://schema.org",
    "@graph": sucursales.map(construirEsquemaSucursal),
  };
}

export function obtenerEsquemaSitioWeb() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${urlSitio}/#sitio`,
    "url": urlSitio,
    "name": empresa.nombre,
    "inLanguage": "es-AR",
    "publisher": { "@id": idEmpresa },
  };
}
