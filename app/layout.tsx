import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { ProveedorToaster } from "@/components/inicio/ProveedorToaster";
import BotonContactoFlotante from "@/components/comunes/BotonContactoFlotante";
import BotonVolverArriba from "@/components/comunes/BotonVolverArriba";
import { sucursales } from "@/lib/empresa";
import { metadatosSeo } from "@/lib/seo/metadatos";
import {
  obtenerEsquemaOrganizacion,
  obtenerEsquemaSitioWeb,
} from "@/lib/geo";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  ...metadatosSeo,
};

export default function LayoutRaiz({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${sora.variable} ${manrope.variable} scroll-smooth`}>

      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(obtenerEsquemaOrganizacion()).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(obtenerEsquemaSitioWeb()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        {children}
        <BotonContactoFlotante
          contactos={sucursales.map((sucursal) => ({
            sucursal: sucursal.nombre,
            numero: sucursal.whatsapp,
          }))}
        />
        <BotonVolverArriba />
        <ProveedorToaster />
      </body>

    </html>
  );
}
