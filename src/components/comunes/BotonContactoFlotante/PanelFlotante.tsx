"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import TarjetaContacto from "./TarjetaContacto";
import type { Contacto } from "./tipos";

interface PropiedadesPanelFlotante {
  titulo: string;
  subtitulo: string;
  mensajeDefecto: string;
  contactos: Contacto[];
  color: string;
  alCerrar: () => void;
}

const PanelFlotante = ({
  titulo,
  subtitulo,
  mensajeDefecto,
  contactos,
  color,
  alCerrar,
}: PropiedadesPanelFlotante) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
      className={[
        "absolute bottom-[4.75rem] right-0",
        "w-[85vw] sm:w-[23.75rem]",
        "bg-white rounded-2xl shadow-2xl",
        "backdrop-blur-sm bg-opacity-95",
        "overflow-hidden",
      ].join(" ")}
      role="dialog"
      aria-label={titulo}
    >
      <div
        className="p-5 text-white"
        style={{ backgroundColor: color }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div>
              <h3 className="font-semibold text-base">{titulo}</h3>
              <p className="text-sm text-white/80 mt-0.5">{subtitulo}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={alCerrar}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Cerrar panel"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="p-3">
        {contactos.map((contacto, indice) => (
          <TarjetaContacto
            key={contacto.numero}
            sucursal={contacto.sucursal}
            numero={contacto.numero}
            mensaje={mensajeDefecto}
            indice={indice}
          />
        ))}
      </div>

      <div className="px-5 pb-4 pt-1">
        <p className="text-xs text-gray-400 text-center">
          Elegí una sucursal para continuar por WhatsApp.
        </p>
      </div>
    </motion.div>
  );
};

export default PanelFlotante;
