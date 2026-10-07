import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const directorioActual = dirname(fileURLToPath(import.meta.url));
const compatibilidad = new FlatCompat({ baseDirectory: directorioActual });

export default defineConfig([
  ...compatibilidad.extends("next/core-web-vitals", "next/typescript"),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
