import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pasos = [
  {
    titulo: "Describí la carga",
    descripcion: "Contanos qué vas a enviar, cuánto mide y pesa aproximadamente, y entre qué ciudades tiene que viajar.",
  },
  {
    titulo: "Prepará el despacho",
    descripcion: "Te indicamos cómo preparar la carga y dónde llevarla. Si necesitás que la retiremos en tu domicilio, consultanos la disponibilidad.",
  },
  {
    titulo: "Elegí cómo recibirlo",
    descripcion: "Podés retirar en la sucursal de destino o consultar por entrega a domicilio. Para otra localidad, confirmaremos si hay redespacho y su plazo antes de coordinarlo.",
  },
];

export default function ProcesoConsulta() {
  return (
    <section className="bg-[#EAF2FA] px-5 py-20 sm:px-10 lg:py-28" aria-labelledby="titulo-proceso-servicios">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 id="titulo-proceso-servicios" className="mt-5 max-w-md font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Cómo cotizar y preparar tu carga</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-[#365572]">El precio depende de lo que enviás y del recorrido. Con los datos básicos de tu carga podemos decirte qué opciones hay y preparar un presupuesto.</p>
          <Link href="/contacto" className="mt-7 inline-flex min-h-12 items-center gap-2 border-b border-[#087CE5] text-sm font-bold text-[#154677] hover:text-[#087CE5] focus-visible:text-[#087CE5]">
            Pedir una cotización <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ol className="border-t border-[#154677]/20">
          {pasos.map((paso, indice) => (
            <li key={paso.titulo} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#154677]/20 py-7 sm:grid-cols-[3.5rem_1fr] sm:py-8">
              <span className="pt-1 text-xs font-bold tracking-[0.16em] text-[#087CE5]">{String(indice + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-[#154677] sm:text-2xl">{paso.titulo}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#365572] sm:text-base">{paso.descripcion}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
