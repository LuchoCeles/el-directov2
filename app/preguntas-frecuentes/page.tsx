import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import Header from "@/components/inicio/Header";
import Footer from "@/components/inicio/Footer";
import { preguntasFrecuentes } from "@/lib/empresa";
import { obtenerMetadatosPagina } from "@/lib/seo/obtenerMetadatosPagina";

export const metadata: Metadata = obtenerMetadatosPagina("preguntas-frecuentes");

export default function PaginaPreguntasFrecuentes() {
  return (
    <div className="min-h-screen bg-white text-[#154677]">
      <Header />
      <main>
        <section
          className="bg-[#EAF2FA] px-6 pb-16 pt-8 sm:px-10 sm:pb-20 lg:pb-24"
          aria-labelledby="titulo-preguntas"
        >
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Ruta de navegación"
              className="mb-14 text-xs font-semibold uppercase tracking-[0.16em] text-[#42617F]"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#087CE5]">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Preguntas frecuentes</li>
              </ol>
            </nav>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-20">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                  Información útil
                </p>
                <h1
                  id="titulo-preguntas"
                  className="font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em]"
                >
                  Preguntas frecuentes sobre envíos y cargas
                </h1>
              </div>
              <p className="max-w-lg text-base leading-8 text-[#365572] sm:text-lg">
                Reunimos las dudas más comunes sobre cómo preparar la carga,
                cotizar un envío y coordinar el retiro, la entrega o un
                redespacho.
              </p>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 sm:px-10 lg:py-28"
          aria-labelledby="respuestas-preguntas"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Antes de enviar
              </p>
              <h2
                id="respuestas-preguntas"
                className="font-heading text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl"
              >
                Lo que conviene saber antes de despachar
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#42617F]">
                Abrí la pregunta que te interese para ver la respuesta. Si
                necesitás algo más específico, podés escribirnos.
              </p>
            </div>
            <div className="border-t border-[#C9DCEB]">
              {preguntasFrecuentes.map((elemento, indice) => (
                <details
                  key={elemento.pregunta}
                  className="group border-b border-[#C9DCEB]"
                  open={indice === 0}
                >
                  <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left transition-colors hover:text-[#087CE5] marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="font-heading text-lg font-semibold leading-snug sm:text-xl">
                      {elemento.pregunta}
                    </span>
                    <Plus
                      className="h-5 w-5 shrink-0 text-[#087CE5] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-2xl pb-7 pr-8 text-base leading-8 text-[#42617F]">
                    {elemento.respuesta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-[#EAF2FA] px-6 py-20 text-[#154677] sm:px-10 lg:py-24"
          aria-labelledby="consulta-personalizada"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
                Estamos para ayudarte
              </p>
              <h2
                id="consulta-personalizada"
                className="max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                ¿Tenés una consulta sobre tu envío?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#365572]">
                Contanos qué querés enviar, desde dónde y hacia dónde. Si
                conocés las medidas y el peso aproximados, sumalos para que
                podamos orientarte mejor.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#087CE5] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154677]"
            >
              Contactanos{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
