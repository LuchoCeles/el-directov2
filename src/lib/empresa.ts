import {
  empresa as empresaCruda,
  sucursales as sucursalesCrudas,
  rutasDirectas as rutasDirectasCrudas,
  urlSitio as urlSitioCruda,
  ciudadesDirecto as ciudadesDirectoCrudas,
  ciudadesRedespacho as ciudadesRedespachoCrudas,
  redespachosPorSucursal as redespachosPorSucursalCrudos,
  servicios as serviciosCrudos,
  tiposDeCarga as tiposDeCargaCrudos,
  preguntasFrecuentes as preguntasFrecuentesCrudas,
  metadatosPaginas as metadatosPaginasCrudos,
  tituloSeo as tituloSeoCrudo,
  descripcionSeo as descripcionSeoCruda,
  itinerarioDirecto as itinerarioDirectoCrudo,
} from "./datos.js";

export interface HorarioSucursal {
  semana: { abre: string; cierra: string };
  sabado: { abre: string; cierra: string };
  domingo: string;
  feriados: string;
}

export interface Coordenadas {
  lat: number;
  lng: number;
}

export interface Sucursal {
  nombre: string;
  direccion: string;
  telefono: string[];
  correo: string;
  whatsapp: string;
  mapaIncrustado: string;
  regionDireccion: string;
  horarios: HorarioSucursal;
  coordenadas: Coordenadas;
}

export interface RutaDirecta {
  slug: string;
  origen: Sucursal;
  destino: Sucursal;
  titulo: string;
  descripcion: string;
  tituloSeo: string;
  descripcionSeo: string;
}

export interface RedespachoPorSucursal {
  sucursal: Sucursal;
  destinos: string[];
}

export const urlSitio = urlSitioCruda;
export const metadatosPaginas = metadatosPaginasCrudos;
export const tituloSeo = tituloSeoCrudo;
export const descripcionSeo = descripcionSeoCruda;

export interface ItinerarioDirecto {
  diasSalida: string[];
  arriboPrevisto: { referencia: string; hora: string };
}

export const itinerarioDirecto: ItinerarioDirecto = itinerarioDirectoCrudo;

export const empresa = empresaCruda;

export const sucursales: Sucursal[] = sucursalesCrudas;
export const rutasDirectas: RutaDirecta[] = rutasDirectasCrudas;

export const ciudadesDirecto: string[] = ciudadesDirectoCrudas;
export const ciudadesRedespacho: string[] = ciudadesRedespachoCrudas;
export const redespachosPorSucursal: RedespachoPorSucursal[] =
  redespachosPorSucursalCrudos;
export interface Servicio {
  nombre: string;
  descripcion: string;
}

export const servicios: Servicio[] = serviciosCrudos;

export const tiposDeCarga: string[] = tiposDeCargaCrudos;

export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

export const preguntasFrecuentes: PreguntaFrecuente[] = preguntasFrecuentesCrudas;

