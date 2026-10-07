import { z } from "zod";

export const esquemaFormularioContacto = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(100, "El nombre es demasiado largo"),
  empresa: z.string().max(100).optional().default(""),
  correo: z
    .string()
    .min(1, "El correo es requerido")
    .email("El correo no es válido"),
  telefono: z
    .string()
    .refine(
      (val) => !val || /^[\d+][\d ]+$/.test(val),
      "El teléfono no es válido",
    )
    .optional()
    .default(""),
  mensaje: z
    .string()
    .min(1, "El mensaje es requerido")
    .max(2000, "El mensaje es demasiado largo"),
});

export type DatosFormularioContacto = z.infer<typeof esquemaFormularioContacto>;
