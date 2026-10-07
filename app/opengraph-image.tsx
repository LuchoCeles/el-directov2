import { ImageResponse } from "next/og";
import { empresa, urlSitio } from "@/lib/empresa";

export const alt = `${empresa.nombreCompleto} — transporte entre Rosario y Mar del Plata`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ImagenOpenGraph() {
  return new ImageResponse(
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
      padding: "62px 74px",
      backgroundColor: "#EAF2FA",
      color: "#154677",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 31, fontWeight: 700, letterSpacing: -1.5 }}>{empresa.nombre}</span>
          <span style={{ marginTop: 4, fontSize: 14, fontWeight: 700, letterSpacing: 3.5, textTransform: "uppercase" }}>
            Transporte y logística
          </span>
        </div>
        <div style={{ display: "flex", width: 62, height: 9, borderRadius: 8, backgroundColor: "#087CE5" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
        <span style={{ fontSize: 19, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#087CE5" }}>
          Servicio directo entre sucursales
        </span>
        <span style={{ marginTop: 23, fontSize: 79, fontWeight: 700, lineHeight: 1.07, letterSpacing: -4.5 }}>Rosario ↔</span>
        <span style={{ fontSize: 79, fontWeight: 700, lineHeight: 1.07, letterSpacing: -4.5 }}>Mar del Plata</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #bdd4e9", paddingTop: 26 }}>
        <span style={{ fontSize: 24, fontWeight: 600 }}>Encomiendas y cargas en ambos sentidos</span>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#087CE5" }}>{new URL(urlSitio).host}</span>
      </div>
    </div>,
    { ...size },
  );
}
