# Transporte El Directo — V2

Sitio de Transporte El Directo SRL. Conserva el contenido comercial, las rutas públicas y el formulario de contacto de la V1, con una presentación nueva basada en fotografías originales de la empresa.

## Desarrollo

```bash
npm ci
cp .env.example .env
npm run dev
```

Configurá `NEXT_PUBLIC_SITE_URL` con la URL canónica. En producción debe coincidir con `https://transporteeldirecto.com.ar`, ya que `next.config.ts` redirige la variante `www` a ese dominio. Para habilitar el formulario, completá `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `CONTACT_RECIPIENT_EMAIL`. No incluyas esas credenciales en el repositorio.

## Rutas públicas

- `/`: resumen y accesos principales del sitio.
- `/servicios`, `/cobertura`, `/empresa`, `/sucursales`, `/preguntas-frecuentes`, `/contacto`: información detallada y contacto.
- `/envios-a-rosario`: envíos de Mar del Plata a Rosario.
- `/envios-a-mar-del-plata`: envíos de Rosario a Mar del Plata.
- `/sitemap.xml` y `/robots.txt`: generados por Next.js.
- `POST /api/contacto`: consulta del formulario con validación, honeypot y límite de envíos.

## Organización

- `app/`: páginas, layout, metadata técnica y API.
- `src/components/inicio/`: secciones de la página principal.
- `src/components/rutas/`: vista compartida de ambos trayectos.
- `src/lib/datos.js`: fuente única de datos comerciales, itinerario, sucursales y textos SEO.
- `src/lib/empresa.ts`: fachada tipada de los datos.
- `src/lib/seo/` y `src/lib/geo.js`: metadata por ruta y datos estructurados.
- `public/`: fotografías y logo originales.

La ruta directa es Rosario ↔ Mar del Plata. Las demás localidades de `ciudadesRedespacho` requieren confirmar disponibilidad, costo y plazo; no deben presentarse como rutas directas.

## SEO y datos estructurados

Cada página pública tiene título, descripción, URL canónica y etiquetas sociales propios. Las rutas están en `/sitemap.xml`, y `/robots.txt` permite su rastreo. Los textos SEO de las páginas informativas y el itinerario directo se mantienen en `src/lib/datos.js`.

El layout publica los esquemas `Organization` y `WebSite`. La página de sucursales publica un `LocalBusiness` por sede, con la dirección y los horarios visibles en esa página. Las páginas de trayectos describen únicamente el servicio directo entre Rosario y Mar del Plata; los destinos con redespacho se muestran como conexiones sujetas a consulta. Las preguntas frecuentes siguen disponibles como contenido visible, sin `FAQPage` JSON-LD.

Antes de agregar enlaces `sameAs`, perfiles de negocio o afirmaciones comerciales nuevas, contrastalos con datos confirmados de la empresa. La visibilidad orgánica depende también de la indexación y los datos observados en Search Console; el código no garantiza posiciones para consultas específicas.

## Validación

```bash
npm run lint
npm run typecheck
npm run build
```
