import { rutasDirectas } from "@/lib/empresa";
import { obtenerMetadatosRuta } from "@/lib/seo/obtenerMetadatosRuta";
import DetalleRuta from "@/components/rutas/DetalleRuta";

const ruta = rutasDirectas.find((trayecto) => trayecto.slug === "envios-a-rosario");
const rutaOpuesta = rutasDirectas.find((trayecto) => trayecto.slug === "envios-a-mar-del-plata");

if (!ruta || !rutaOpuesta) {
  throw new Error("Faltan los datos de los trayectos directos.");
}

export const metadata = obtenerMetadatosRuta(ruta);

const rutaConfirmada = ruta;
const rutaOpuestaConfirmada = rutaOpuesta;

export default function PaginaEnviosARosario() {
  return <DetalleRuta ruta={rutaConfirmada} rutaOpuesta={rutaOpuestaConfirmada} />;
}
