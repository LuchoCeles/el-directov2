"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BotonVolverArriba = () => {
  const [estaVisible, setEstaVisible] = useState(false);
  const reducirMovimiento = useReducedMotion();

  useEffect(() => {
    const actualizarVisibilidad = () => {
      setEstaVisible(window.scrollY > 400);
    };

    actualizarVisibilidad();
    window.addEventListener("scroll", actualizarVisibilidad, { passive: true });
    window.addEventListener("pageshow", actualizarVisibilidad);

    return () => {
      window.removeEventListener("scroll", actualizarVisibilidad);
      window.removeEventListener("pageshow", actualizarVisibilidad);
    };
  }, []);

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: reducirMovimiento ? "instant" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {estaVisible && (
        <div className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2">
          <motion.button
            type="button"
            initial={reducirMovimiento ? false : { opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reducirMovimiento ? 1 : 0.8, y: reducirMovimiento ? 0 : 20 }}
            transition={{ duration: reducirMovimiento ? 0 : 0.2 }}
            whileHover={reducirMovimiento ? undefined : { scale: 1.08 }}
            whileTap={reducirMovimiento ? undefined : { scale: 0.95 }}
            onClick={volverArriba}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground text-primary shadow-xl transition-[background-color,box-shadow] duration-200 hover:bg-secondary hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
            aria-label="Volver al inicio de la página"
          >
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BotonVolverArriba;
