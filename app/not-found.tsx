import Link from "next/link";
import { Truck } from "lucide-react";

export default function NotFound() {
  return (
    <div id="page-not-found" className="min-h-screen flex flex-col items-center justify-center bg-gradient-subtle px-4">
      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-8 shadow-elegant">
        <Truck className="w-12 h-12 text-white" />
      </div>
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Ruta no encontrada
      </h2>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        Parece que esta carga se perdió en el camino.
        <br />
        Volvé al inicio para encontrar lo que buscás.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold shadow-elegant hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
