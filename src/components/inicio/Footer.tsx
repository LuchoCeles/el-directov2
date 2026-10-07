import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { empresa, sucursales } from "@/lib/empresa";
import IconoWhatsapp from "@/components/inicio/IconoWhatsapp";

const navegacion = [
  { etiqueta: "Servicios", destino: "/servicios" },
  { etiqueta: "Rutas y destinos", destino: "/cobertura" },
  { etiqueta: "La empresa", destino: "/empresa" },
  { etiqueta: "Sucursales", destino: "/sucursales" },
  { etiqueta: "Preguntas frecuentes", destino: "/preguntas-frecuentes" },
  { etiqueta: "Contacto", destino: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#154677] py-16 text-white sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 border-b border-white/25 pb-14 lg:grid-cols-[1fr_0.7fr_1.5fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <span className="flex h-12 w-12 items-center justify-center bg-white p-1">
                <Image src={empresa.logo} alt="" width={44} height={44} unoptimized className="h-auto w-11 shrink-0 object-contain" />
              </span>
              <span className="font-heading text-lg font-semibold leading-tight">
                El Directo <span className="block text-xs font-medium uppercase tracking-[0.16em] text-white/70">Transporte y logística</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/75">
              Transporte de encomiendas y carga entre Rosario y Mar del Plata.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/60">Explorá</h2>
            <ul className="space-y-3 text-sm">
              {navegacion.map((enlace) => (
                <li key={enlace.destino}>
                  <Link href={enlace.destino} className="inline-flex min-h-8 items-center hover:text-[#9BD0FF] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    {enlace.etiqueta}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/60">Encontranos</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {sucursales.map((sucursal) => {
                const [calle, ...localidad] = sucursal.direccion.split(", ");

                return (
                  <address key={sucursal.nombre} className="not-italic text-sm leading-relaxed">
                    <h3 className="font-heading mb-3 text-lg font-semibold text-white">{sucursal.nombre}</h3>
                    <p className="mb-3 text-white/75">
                      {calle}
                      {localidad.length > 0 && (
                        <>
                          <span className="sm:hidden">, {localidad.join(", ")}</span>
                          <span className="hidden sm:block">{localidad.join(", ")}</span>
                        </>
                      )}
                    </p>
                    <div className="flex flex-col items-start gap-1.5">
                      {sucursal.telefono.map((telefono) => (
                        <a key={telefono} href={`tel:${telefono.replace(/\D/g, "")}`} className="hover:text-[#9BD0FF] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                          {telefono}
                        </a>
                      ))}
                      <a href={`mailto:${sucursal.correo}`} className="break-all hover:text-[#9BD0FF] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        {sucursal.correo}
                      </a>
                      <a
                        href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría recibir información sobre sus servicios de transporte.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-2 hover:text-[#9BD0FF] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <IconoWhatsapp className="h-4 w-4" /> WhatsApp <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </address>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {empresa.nombreCompleto}. Todos los derechos reservados.</p>
          <p>
            Creada por{" "}
            <a href="https://logabyte.com.ar" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-[#9BD0FF] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Logabyte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
