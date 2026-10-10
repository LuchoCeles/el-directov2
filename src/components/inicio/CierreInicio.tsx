import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CierreInicio() {
  return (
    <section id="contacto" aria-labelledby="titulo-contacto-inicio" className="bg-[#eaf2fa] py-20 sm:py-24">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Hablemos de tu envío</p>
          <h2 id="titulo-contacto-inicio" className="font-heading mt-4 max-w-[760px] text-4xl leading-[1.1] tracking-tight text-[#154677] sm:text-5xl">Contanos qué querés enviar</h2>
          <p className="mt-5 max-w-[640px] text-base leading-8 text-[#48647e]">Decinos desde dónde sale, adónde va y qué tamaño y peso aproximados tiene. Con esos datos podemos orientarte y preparar una cotización.</p>
        </div>
        <Link href="/contacto" className="inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-full bg-[#087ce5] px-6 text-sm font-bold text-white hover:bg-[#0667bf]">Pedir una cotización <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
