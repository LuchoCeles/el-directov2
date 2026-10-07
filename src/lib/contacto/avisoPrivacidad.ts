export const fragmentosAutorizacionDatos = {
  inicio: "Autorizo el tratamiento de mis datos para responder mi consulta. Consultá la ",
  politica: "Política de privacidad",
  entreEnlaces: " y los ",
  terminos: "Términos y condiciones del sitio",
  cierre: ".",
} as const;

export const textoAutorizacionDatos = Object.values(fragmentosAutorizacionDatos).join("");
