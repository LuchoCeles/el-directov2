import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { empresa } from "@/lib/empresa";

const navegacion = [
  { nombre: "Servicios", destino: "/servicios" },
  { nombre: "Rutas y destinos", destino: "/cobertura" },
  { nombre: "La empresa", destino: "/empresa" },
  { nombre: "Sucursales", destino: "/sucursales" },
  { nombre: "Preguntas frecuentes", destino: "/preguntas-frecuentes" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e3eaf1] bg-white">
      <div className="section-shell flex h-[76px] items-center justify-between gap-5 lg:h-[84px]">
        <Link href="/" aria-label={`${empresa.nombre}, inicio`} className="flex shrink-0 items-center gap-2.5 text-[#154677]">
          <Image src={empresa.logo} alt="" width={36} height={36} className="h-auto w-9 shrink-0 object-contain" />
          <span className="flex flex-col leading-none">
            <strong className="font-heading text-[1.3rem] font-bold tracking-tight sm:text-[1.45rem]">El Directo</strong>
            <span className="mt-1 text-[0.52rem] font-extrabold uppercase tracking-[0.18em] sm:text-[0.58rem]">Transporte y logística</span>
          </span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navegacion.map((item) => (
            <Link key={item.destino} href={item.destino} className="text-[0.79rem] font-medium text-[#58677a] transition-colors hover:text-[#087ce5] focus-visible:text-[#087ce5]">{item.nombre}</Link>
          ))}
        </nav>
        <Link href="/contacto" className="hidden min-h-11 shrink-0 items-center gap-2 rounded-full bg-[#087ce5] px-5 text-sm font-bold text-white transition-colors hover:bg-[#0667bf] md:inline-flex">
          Cotizá tu envío <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <details className="group relative ml-auto lg:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-md border border-[#d8e3ef] text-[#154677] [&::-webkit-details-marker]:hidden" aria-label="Abrir menú de navegación">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Navegación móvil" className="absolute right-0 top-[calc(100%+13px)] z-50 w-[min(86vw,330px)] rounded-xl border border-[#d8e3ef] bg-white p-3 shadow-xl">
            {navegacion.map((item) => (
              <Link key={item.destino} href={item.destino} className="block rounded-md px-4 py-3 text-sm font-semibold text-[#154677] hover:bg-[#eaf2fa]">{item.nombre}</Link>
            ))}
            <Link href="/contacto" className="mt-2 block rounded-md bg-[#087ce5] px-4 py-3 text-center text-sm font-bold text-white">Cotizá tu envío</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
