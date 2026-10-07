# Transporte El Directo V2

Las reglas vigentes de trabajo están en `AGENTS.md`. La preparación del proyecto, las rutas públicas y los comandos de validación están en `README.md`.

## Mapa breve

- `app/`: portada, seis páginas informativas, dos páginas de rutas, API y metadata técnica.
- `src/components/inicio/`: componentes de la portada y elementos compartidos como Header, Footer y formulario.
- `src/components/rutas/`: presentación de ambas rutas directas.
- `src/components/servicios/`, `src/components/cobertura/`, `src/components/sucursales/`: contenido detallado de las páginas internas.
- `src/lib/datos.js`: fuente única de datos empresariales, rutas, sucursales, horarios, servicios y preguntas.
- `src/lib/empresa.ts`: tipos y exportaciones para componentes.
- `src/lib/seo/` y `src/lib/geo.js`: metadata y JSON-LD.
- `public/`: logo y fotografías originales.

Las URLs `/envios-a-rosario` y `/envios-a-mar-del-plata` se conservan. Rosario ↔ Mar del Plata es la ruta directa; las otras localidades son opciones de redespacho sujetas a confirmación.
