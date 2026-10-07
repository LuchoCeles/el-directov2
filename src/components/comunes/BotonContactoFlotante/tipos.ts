export interface Contacto {
  sucursal: string;
  numero: string;
}

export interface PropiedadesBotonContactoFlotante {
  titulo?: string;
  subtitulo?: string;
  mensajeDefecto?: string;
  contactos: Contacto[];
  color?: string;
  posicion?: {
    inferior: number;
    derecha: number;
  };
}
