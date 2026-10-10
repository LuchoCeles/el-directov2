import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import IconoWhatsapp from "@/components/inicio/IconoWhatsapp";
import type { Sucursal } from "@/lib/empresa";

interface PropiedadesTarjetaSucursal {
  sucursal: Sucursal;
  indice: number;
}

export default function TarjetaSucursal({
  sucursal,
  indice,
}: PropiedadesTarjetaSucursal) {
  const mensaje = encodeURIComponent(
    `Hola, quiero consultar por un envío desde la sucursal de ${sucursal.nombre}.`,
  );
  const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sucursal.direccion)}`;

  return (
    <article
      id={sucursal.nombre === "Rosario" ? "rosario" : "mar-del-plata"}
      className="scroll-mt-[100px] border-t border-[#C9DCEB] py-14 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087CE5]">
            Sucursal {String(indice + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {sucursal.nombre}
          </h2>
          <address className="mt-8 not-italic">
            <div className="flex items-start gap-3 text-base font-semibold leading-7">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-[#087CE5]"
                aria-hidden="true"
              />
              <span>{sucursal.direccion}</span>
            </div>
            <div className="mt-7 grid gap-5 border-t border-[#C9DCEB] pt-7 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#42617F]">
                  Teléfonos
                </p>
                <div className="flex flex-col items-start gap-2">
                  {sucursal.telefono.map((telefono) => (
                    <a
                      key={telefono}
                      href={`tel:${telefono.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 font-semibold underline decoration-[#B6D7F1] underline-offset-4 hover:text-[#087CE5]"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {telefono}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#42617F]">
                  Correo electrónico
                </p>
                <a
                  href={`mailto:${sucursal.correo}`}
                  className="inline-flex max-w-full items-center gap-2 whitespace-nowrap text-base font-semibold underline decoration-[#B6D7F1] underline-offset-4 hover:text-[#087CE5] lg:text-sm"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {sucursal.correo}
                </a>
              </div>
            </div>
          </address>
          <div className="mt-7 border-t border-[#C9DCEB] pt-7">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#42617F]">
              <Clock3 className="h-4 w-4 text-[#087CE5]" aria-hidden="true" />
              Horarios de atención al público
            </p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-sm leading-7">
              <dt>Lunes a viernes</dt>
              <dd className="font-semibold">
                {sucursal.horarios.semana.abre} a{" "}
                {sucursal.horarios.semana.cierra}
              </dd>
              <dt>Sábados</dt>
              <dd className="font-semibold">
                {sucursal.horarios.sabado.abre} a{" "}
                {sucursal.horarios.sabado.cierra}
              </dd>
              <dt>Domingos</dt>
              <dd className="font-semibold">{sucursal.horarios.domingo}</dd>
              <dt>Feriados</dt>
              <dd className="font-semibold">{sucursal.horarios.feriados}</dd>
            </dl>
          </div>
          <p className="mt-7 text-sm text-[#42617F]">
            WhatsApp:{" "}
            <span className="font-semibold text-[#154677]">
              {sucursal.whatsapp}
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, "")}?text=${mensaje}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#087CE5] px-6 text-sm font-bold text-white transition-colors hover:bg-[#154677]"
            >
              <IconoWhatsapp className="h-4 w-4" />
              Escribir por WhatsApp{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={enlaceMapa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#C9DCEB] px-6 text-sm font-bold hover:border-[#087CE5] hover:text-[#087CE5]"
            >
              Cómo llegar{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="overflow-hidden border border-[#C9DCEB] bg-[#EAF2FA] lg:min-h-[470px]">
          <iframe
            src={sucursal.mapaIncrustado}
            title={`Mapa de la sucursal de ${sucursal.nombre} en ${sucursal.direccion}`}
            className="h-[330px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[470px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>
    </article>
  );
}
