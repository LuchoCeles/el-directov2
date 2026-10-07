export interface ConfiguracionLimite {
  intervalo: number;
  maxSolicitudes: number;
}

const almacen = new Map<string, number[]>();

let intervaloMaximo: number | null = null;

const INTERVALO_LIMPIEZA_MS = 5 * 60 * 1000;
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const ahora = Date.now();
    const retencion = intervaloMaximo ?? INTERVALO_LIMPIEZA_MS;
    for (const [clave, marcasTiempo] of almacen) {
      const vigentes = marcasTiempo.filter((t) => ahora - t < retencion);
      if (vigentes.length === 0) {
        almacen.delete(clave);
      } else {
        almacen.set(clave, vigentes);
      }
    }
  }, INTERVALO_LIMPIEZA_MS);
}

function registrarIntervalo(configuracion: ConfiguracionLimite): void {
  if (intervaloMaximo === null || configuracion.intervalo > intervaloMaximo) {
    intervaloMaximo = configuracion.intervalo;
  }
}

export function estaDentroDelLimite(
  clave: string,
  configuracion: ConfiguracionLimite
): boolean {
  const ahora = Date.now();
  const marcasTiempo = almacen.get(clave) ?? [];
  const recientes = marcasTiempo.filter(
    (t) => ahora - t < configuracion.intervalo
  );

  return recientes.length < configuracion.maxSolicitudes;
}

export function marcarEnvio(
  clave: string,
  configuracion: ConfiguracionLimite
): void {
  const ahora = Date.now();
  const marcasTiempo = almacen.get(clave) ?? [];
  const recientes = marcasTiempo.filter(
    (t) => ahora - t < configuracion.intervalo
  );

  recientes.push(ahora);
  almacen.set(clave, recientes);
  registrarIntervalo(configuracion);
}
