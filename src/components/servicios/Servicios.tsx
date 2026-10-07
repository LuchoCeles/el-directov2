import { servicios, tiposDeCarga } from "@/lib/empresa";

const Servicios = () => {
  return (
    <section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#154677]">
              Servicios
            </p>
            <h2
              id="titulo-servicios"
              className="font-heading max-w-lg text-4xl leading-[1.08] tracking-tight text-[#154677] sm:text-5xl lg:text-6xl"
            >
              Cada carga tiene su recorrido.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base leading-7 text-[#154677]/80 sm:text-lg sm:leading-8">
            Transportamos encomiendas y carga de distintos tamaños. Contanos qué
            necesitás enviar para coordinar el despacho, el retiro o la entrega.
          </p>
        </div>

        <ol className="mt-14 grid border-t border-[#154677]/20 md:grid-cols-2 md:gap-x-12 lg:mt-20 lg:gap-x-20">
          {servicios.map((servicio, indice) => (
            <li
              key={servicio.nombre}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-[#154677]/20 py-7 sm:py-9"
            >
              <span
                aria-hidden="true"
                className="pt-1 text-xs font-semibold tracking-[0.18em] text-[#154677]"
              >
                {String(indice + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-2xl leading-tight text-[#154677]">
                  {servicio.nombre}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#154677]/80 sm:text-base">
                  {servicio.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-7 border-t-2 border-[#154677] pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-20">
          <h3 className="font-heading text-2xl leading-tight text-[#154677] sm:text-3xl">
            Tipos de carga que transportamos
          </h3>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {tiposDeCarga.map((tipo) => (
              <li
                key={tipo}
                className="flex items-start gap-3 text-sm leading-6 text-[#154677]/80 sm:text-base"
              >
                <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#087CE5]" />
                {tipo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
