"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utilidades";
import PanelFlotante from "./PanelFlotante";
import IconoWhatsapp from "@/components/inicio/IconoWhatsapp";
import type { PropiedadesBotonContactoFlotante } from "./tipos";

const BotonContactoFlotante = ({
  titulo = "¿En qué podemos ayudarte?",
  subtitulo = "Elegí la sucursal con la que querés hablar por WhatsApp.",
  mensajeDefecto = "Hola, quisiera consultar por un envío. ¿Me pueden ayudar?",
  contactos,
  color = "#25D366",
  posicion = { inferior: 24, derecha: 24 },
}: PropiedadesBotonContactoFlotante) => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const rutaActual = usePathname();
  const [estaVisible, setEstaVisible] = useState(rutaActual !== "/");

  const manejarCierre = useCallback(() => {
    setEstaAbierto(false);
  }, []);

  const manejarAlternar = () => {
    setEstaAbierto((anterior) => !anterior);
  };

  useEffect(() => {
    if (rutaActual !== "/") {
      setEstaVisible(true);
      return;
    }

    const actualizarVisibilidad = () => {
      const superaUmbral = window.scrollY > 400;
      setEstaVisible(superaUmbral);

      if (!superaUmbral) {
        setEstaAbierto(false);
      }
    };

    actualizarVisibilidad();
    window.addEventListener("scroll", actualizarVisibilidad, { passive: true });
    window.addEventListener("pageshow", actualizarVisibilidad);

    return () => {
      window.removeEventListener("scroll", actualizarVisibilidad);
      window.removeEventListener("pageshow", actualizarVisibilidad);
    };
  }, [rutaActual]);

  useEffect(() => {
    if (!estaAbierto) return;

    const manejarTeclaAbajo = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        manejarCierre();
      }
    };

    const manejarClickFuera = (evento: MouseEvent) => {
      const objetivo = evento.target as HTMLElement;
      if (!objetivo.closest("[data-floating-container]")) {
        manejarCierre();
      }
    };

    document.addEventListener("keydown", manejarTeclaAbajo);
    document.addEventListener("mousedown", manejarClickFuera);

    return () => {
      document.removeEventListener("keydown", manejarTeclaAbajo);
      document.removeEventListener("mousedown", manejarClickFuera);
    };
  }, [estaAbierto, manejarCierre]);

  if (!estaVisible) return null;

  return (
    <div
      data-floating-container
      className="fixed z-50"
      style={{
        bottom: posicion.inferior,
        right: posicion.derecha,
      }}
    >
      <AnimatePresence>
        {estaAbierto && (
          <PanelFlotante
            titulo={titulo}
            subtitulo={subtitulo}
            mensajeDefecto={mensajeDefecto}
            contactos={contactos}
            color={color}
            alCerrar={manejarCierre}
          />
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={manejarAlternar}
        className={cn(
          "w-[3.25rem] h-[3.25rem] sm:w-16 sm:h-16",
          "rounded-full shadow-2xl",
          "flex items-center justify-center",
          "transition-shadow duration-200",
          "hover:shadow-2xl"
        )}
        style={{ backgroundColor: color }}
        aria-label={estaAbierto ? "Cerrar chat" : "Abrir chat de WhatsApp"}
        aria-expanded={estaAbierto}
      >
        {estaAbierto ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[1.5rem] h-[1.5rem]"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </motion.svg>
        ) : (
          <IconoWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        )}
      </motion.button>
    </div>
  );
};

export default BotonContactoFlotante;
