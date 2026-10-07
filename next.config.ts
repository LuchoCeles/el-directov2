import type { NextConfig } from "next";

const configuracionNext: NextConfig = {
  // Consolida la indexación en un único dominio canónico: redirige
  // permanentemente la versión "www" hacia la versión sin "www",
  // evitando contenido duplicado y señales de canonicalización contradictorias.
  async redirects() {
    return [
      {
        source: "/:ruta*",
        has: [
          {
            type: "host",
            value: "www.transporteeldirecto.com.ar",
          },
        ],
        destination: "https://transporteeldirecto.com.ar/:ruta*",
        permanent: true,
      },
    ];
  },
};

export default configuracionNext;
