import { ArrowLeftRight, CalendarDays, ShieldCheck } from "lucide-react";
import { itinerarioDirecto } from "@/lib/empresa";

const datos = [
  { titulo: "Viaje directo", texto: "La carga viaja entre nuestras dos sucursales sin transbordo.", Icono: ArrowLeftRight },
  { titulo: "Salidas desde ambas ciudades", texto: `Partimos los ${itinerarioDirecto.diasSalida.join(" y ")}.`, Icono: CalendarDays },
  { titulo: "Seguro de carga", texto: "Consultanos qué cubre para tu envío.", Icono: ShieldCheck },
];

export default function FranjaValor() {
  return (
    <section aria-label="Datos principales del servicio" className="border-b border-[#d9e5f0] bg-[#f5f8fb]">
      <div className="section-shell grid gap-0 py-3 md:grid-cols-3 md:py-7">
        {datos.map(({ titulo, texto, Icono }) => (
          <div key={titulo} className="flex items-center gap-4 border-b border-[#d9e5f0] py-4 last:border-0 md:border-b-0 md:border-r md:px-8 md:py-1 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <Icono size={25} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-[#154677]" />
            <div>
              <p className="text-sm font-extrabold text-[#133755]">{titulo}</p>
              <p className="mt-1 text-xs text-[#657589]">{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
