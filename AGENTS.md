<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses Next.js 16.2.4 which may have API differences from earlier versions. Verify uncertain APIs against the installed version. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Reglas del proyecto

- **Idioma**: Todo en español: variables, funciones, exports, nombres de archivo, tipos, comentarios, keys de objetos. Solo inglés para palabras reservadas del lenguaje/framework, HTML estándar, shadcn/ui (`ui/*.tsx`, `cn()`), hooks React (`useX`), nombres propios de librerías y claves de schema.org/JSON-LD.
- **`cn()`**: Usar de `@/lib/utilidades` para merging de clases Tailwind. `src/lib/utils.ts` re-exporta desde `utilidades` solo para compatibilidad con shadcn/ui — el código nuevo debe importar desde `@/lib/utilidades`.
- **Alias**: `@/*` → `./src/*`. Routes y root layout en `app/` (raíz), no en `src/app/`.
- **Server Components por defecto**: Solo agregar `"use client"` para estado/efectos/eventos.
- **Datos empresa**: `src/lib/datos.js` (JS, no TS — `allowJs: true` en tsconfig) es la única fuente de verdad para datos de empresa, sucursales, FAQs, redespacho y SEO. `src/lib/empresa.ts` re-exporta con tipos. Componentes importan desde `@/lib/empresa`. `src/lib/geo.js` importa directamente de `datos.js` para generar JSON-LD.
- **Estructura**: `app/page.tsx` es una portada con resúmenes. El contenido detallado vive en `/servicios`, `/cobertura`, `/empresa`, `/sucursales`, `/preguntas-frecuentes`, `/contacto` y las dos páginas de rutas existentes. Layout (`app/layout.tsx`) contiene fuentes, metadata global y providers.
- **Comandos**: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm run build`, `npm run start`. Sin test runner. Ejecutar lint, TypeScript y build antes de entregar.
- **ESLint**: Flat config (`eslint.config.mjs`) compatible con la versión instalada de `eslint-config-next`.
- **TypeScript**: `strict: true`. Evitar `any` y `@ts-ignore`.
- **Backend**: Sin Prisma ni Server Actions. Solo `app/api/contacto/` con Resend (`src/lib/resend.ts`) para formulario de contacto. Rate limiting in-memory (`Map`): 1 msg cada 5 min por IP con `estaDentroDelLimite()` (chequeo) y `marcarEnvio()` (registro solo si el envío tuvo éxito) (`src/lib/limite-tasa.ts`). Anti-spam honeypot con campo `_hp` (no consume cuota).
- **Zod v4**: Siempre usar `.safeParse()` (no `.parse()`). Zod v4 tiene cambios de API respecto a v3.
- **Interacciones**: Preferir HTML nativo y Server Components. El selector de WhatsApp usa `<details>` sin JavaScript.
- **Icono WhatsApp**: Reutilizar `src/components/inicio/IconoWhatsapp.tsx`.
- **Imágenes locales**: Usar `next/image`, `sizes` apropiados y optimización para las fotografías grandes; reservar `priority` para la imagen principal de cada página.
- **SEO**: Los metadatos se exportan desde `app/layout.tsx` usando `...metadatosSeo`. JSON-LD generado por `src/lib/geo.js` se inyecta en `<head>`.
- **README.md**: Documenta las rutas públicas, configuración y estructura de la V2.

## Organización por carpetas (PERMANENTE — no eliminar, no saltar)

Esta regla complementa las reglas de construcción y es de cumplimiento obligatorio para TODO
código nuevo y toda modificación. Su objetivo es mantener una arquitectura ordenada y predecible.

1. **Todo archivo de código debe vivir dentro de una carpeta que indique su dominio o propósito.**
   Está PROHIBIDO dejar archivos sueltos en la raíz de `src/` o en carpetas de dominio.
   - Si el archivo pertenece a un dominio existente, se coloca en su carpeta de dominio.
   - Si el dominio no existe, se crea una carpeta nueva con nombre descriptivo.
2. **Esquema de referencia de `src/`:**
   - `app/` — solo archivos de ruta de Next.js (`page`, `layout`, `route`, `loading`, `error`,
     `not-found`, `manifest`, `robots`, `sitemap`) y archivos propios del framework (`auth.ts`,
     `proxy.ts`). Los componentes de interfaz NO viven acá.
     `estadisticas/`, `navegacion/`), `pdf/`.
     `mensajes/`, `administradores/`, `contacto/`, `sesion/`. Cada acción y su archivo de estado
     (`*-estado.ts`) van en la carpeta de su dominio. Los tipos compartidos por varios dominios
     van en `compartido/`.
   - `src/lib/` — lógica compartida e infraestructura (`utils/`, `datos-estructurados/`,
     configuración, validaciones, prisma, etc.).
   - `src/hooks/`, `src/context/`, `src/types/` — hooks, contextos y tipos globales.
3. **Archivo nuevo:** si no existe la carpeta de su dominio, se crea. Está prohibido crear un
   archivo de código en un lugar que no sea su carpeta de dominio.
4. **Regla del boy scout aplicada a la organización:** si durante una modificación se detecta un
   archivo suelto (fuera de su carpeta de dominio), se lo mueve a su carpeta y se actualizan sus
   imports en la misma tanda de cambios.
5. **Los imports usan el alias `@/`** (mapeado a `src/`). Nunca se usan imports relativos para
   cruzar dominios; los relativos solo se permiten dentro de una misma carpeta si es estrictamente
   necesario.

## Uso de subagentes (OBLIGATORIO)

1. **Desglose obligatorio:** toda tarea o fase que se pueda desglosar en sub-tareas debe
   ejecutarse mediante subagentes (`task` tool). Nunca ejecutar directamente trabajo que
   pueda paralelizarse o delegarse.
2. **Prompts detallados:** cada subagente debe recibir el prompt más detallado y con el mayor
   contexto posible: objetivo, alcance exacto, archivos involucrados, patrones del proyecto,
   y TODAS las reglas de comportamiento de este documento (idioma, arquitectura, capas,
   límites de líneas, una función por archivo, imports con `@/`, etc.).
3. **Paralelización:** lanzar varios subagentes en paralelo cuando las sub-tareas sean
   independientes entre sí (un solo mensaje con múltiples llamadas a `task`).
4. **Agente verificador global:** cuando una fase requiera muchos subagentes (3 o más) o
   toque código compartido entre ellos, tras completar los subagentes se debe lanzar un
   agente verificador (`verificador`) que revise TODO el código producido en la fase,
   detecte fallas, incoherencias, violaciones de las reglas de este documento y archivos
   fuera de límites, y las repare. El verificador es el último paso de la fase y su
   aprobación es requisito para dar la fase por terminada.
5. **Nunca delegar la coordinación:** la orquestación de subagentes, la definición de
   interfaces entre sub-tareas y la decisión final sobre resultados siempre las hace el
   agente principal, no los subagentes.
