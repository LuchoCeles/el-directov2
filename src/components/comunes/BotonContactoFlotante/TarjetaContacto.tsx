"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utilidades";
import IconoWhatsapp from "@/components/inicio/IconoWhatsapp";

interface PropiedadesTarjetaContacto {
  sucursal: string;
  numero: string;
  mensaje: string;
  indice: number;
}

const TarjetaContacto = ({ sucursal, numero, mensaje, indice }: PropiedadesTarjetaContacto) => {
  const numeroLimpio = numero.replace(/\D/g, "");

  return (
    <motion.a
      href={`https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: indice * 0.08, duration: 0.3 }}
      whileHover={{ scale: 1.02, backgroundColor: "rgb(243 244 246)" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center gap-3 w-full p-3 rounded-xl",
        "cursor-pointer transition-colors"
      )}
      aria-label={`Chatear con sucursal ${sucursal}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
        <IconoWhatsapp className="w-5 h-5 text-white" />
      </div>
      <span className="flex-1 text-left text-sm font-medium text-gray-800">
        {sucursal}
      </span>
    </motion.a>
  );
};

export default TarjetaContacto;
