"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { esquemaFormularioContacto } from "@/lib/contacto/esquemaFormulario";
import { fragmentosAutorizacionDatos } from "@/lib/contacto/avisoPrivacidad";

interface DatosFormulario {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
  autorizaTratamiento: boolean;
}

const datosIniciales: DatosFormulario = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  mensaje: "",
  autorizaTratamiento: false,
};

const claseCampo = "min-h-12 w-full rounded-none border border-[#B6D0E5] bg-white px-4 py-3 text-sm text-[#154677] placeholder:text-[#748DA5] outline-none transition-colors hover:border-[#154677] focus-visible:border-[#087CE5] focus-visible:ring-2 focus-visible:ring-[#087CE5]/20 disabled:cursor-not-allowed disabled:bg-[#EAF2FA]";
const claseEtiqueta = "mb-2 block text-sm font-semibold text-[#154677]";
const claseError = "mt-2 text-sm font-medium text-[#B42318]";

export default function FormularioContacto() {
  const { toast } = useToast();
  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>(datosIniciales);
  const [errores, setErrores] = useState<Partial<Record<keyof DatosFormulario, string>>>({});
  const [estaCargando, setEstaCargando] = useState(false);
  const [mielero, setMielero] = useState("");

  const manejarCambio = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evento.target;
    const valor = name === "telefono" ? value.replace(/[^\d+ ]/g, "") : value;
    setDatosFormulario((anterior) => ({ ...anterior, [name]: valor }));
    if (errores[name as keyof DatosFormulario]) {
      setErrores((anteriores) => ({ ...anteriores, [name]: undefined }));
    }
  };

  const validarFormulario = () => {
    const resultado = esquemaFormularioContacto.safeParse(datosFormulario);
    if (resultado.success) {
      setErrores({});
      return true;
    }

    const erroresCampos: Partial<Record<keyof DatosFormulario, string>> = {};
    for (const problema of resultado.error.issues) {
      const campo = problema.path[0] as keyof DatosFormulario;
      if (!erroresCampos[campo]) erroresCampos[campo] = problema.message;
    }
    setErrores(erroresCampos);
    const primerCampo = resultado.error.issues[0]?.path[0];
    if (typeof primerCampo === "string") document.getElementById(primerCampo)?.focus();
    return false;
  };

  const manejarEnvio = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (!validarFormulario()) return;
    setEstaCargando(true);

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...datosFormulario, _hp: mielero }),
      });
      const datos = await respuesta.json();

      if (!respuesta.ok) {
        if (respuesta.status === 429) {
          toast({
            title: "Límite de mensajes alcanzado",
            description: datos.error || "Ya enviaste un mensaje recientemente. Esperá unos minutos antes de intentar nuevamente.",
            variant: "destructive",
          });
          return;
        }
        toast({
          title: "Error al enviar el mensaje",
          description: datos.error || "Intentá nuevamente más tarde.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto a la brevedad. Gracias por escribirnos.",
      });
      setDatosFormulario(datosIniciales);
      setMielero("");
    } catch {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar el mensaje. Intentá nuevamente.",
        variant: "destructive",
      });
    } finally {
      setEstaCargando(false);
    }
  };

  return (
    <form onSubmit={manejarEnvio} noValidate aria-busy={estaCargando} className="relative border border-[#C9DCEB] bg-white p-6 shadow-[0_18px_45px_-35px_rgba(21,70,119,0.3)] sm:p-9 lg:p-11">
      <div className="mb-8 border-b border-[#D6E5F1] pb-6">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-[#154677] sm:text-3xl">Contanos qué necesitás enviar</h3>
        <p className="mt-2 text-sm text-[#42617F]">Los campos marcados con * son obligatorios.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={claseEtiqueta}>Nombre *</label>
          <input id="nombre" name="nombre" value={datosFormulario.nombre} onChange={manejarCambio} placeholder="Tu nombre completo" autoComplete="name" required disabled={estaCargando} aria-invalid={Boolean(errores.nombre)} aria-describedby={errores.nombre ? "error-nombre" : undefined} className={claseCampo} />
          {errores.nombre && <p id="error-nombre" role="alert" className={claseError}>{errores.nombre}</p>}
        </div>
        <div>
          <label htmlFor="empresa" className={claseEtiqueta}>Empresa <span className="font-normal text-[#607D9A]">(opcional)</span></label>
          <input id="empresa" name="empresa" value={datosFormulario.empresa} onChange={manejarCambio} placeholder="Nombre de la empresa" autoComplete="organization" disabled={estaCargando} className={claseCampo} />
        </div>
        <div>
          <label htmlFor="correo" className={claseEtiqueta}>Email *</label>
          <input id="correo" name="correo" type="email" value={datosFormulario.correo} onChange={manejarCambio} placeholder="correo@empresa.com" autoComplete="email" required disabled={estaCargando} aria-invalid={Boolean(errores.correo)} aria-describedby={errores.correo ? "error-correo" : undefined} className={claseCampo} />
          {errores.correo && <p id="error-correo" role="alert" className={claseError}>{errores.correo}</p>}
        </div>
        <div>
          <label htmlFor="telefono" className={claseEtiqueta}>Teléfono <span className="font-normal text-[#607D9A]">(opcional)</span></label>
          <input id="telefono" name="telefono" type="tel" inputMode="tel" value={datosFormulario.telefono} onChange={manejarCambio} placeholder="+54 XXX XXX-XXXX" autoComplete="tel" disabled={estaCargando} aria-invalid={Boolean(errores.telefono)} aria-describedby={errores.telefono ? "error-telefono" : undefined} className={claseCampo} />
          {errores.telefono && <p id="error-telefono" role="alert" className={claseError}>{errores.telefono}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className={claseEtiqueta}>Mensaje *</label>
          <textarea id="mensaje" name="mensaje" value={datosFormulario.mensaje} onChange={manejarCambio} placeholder="Indicá origen, destino, tipo de carga, medidas y peso aproximados..." rows={5} required disabled={estaCargando} aria-invalid={Boolean(errores.mensaje)} aria-describedby={errores.mensaje ? "error-mensaje" : undefined} className={`${claseCampo} min-h-36 resize-y`} />
          {errores.mensaje && <p id="error-mensaje" role="alert" className={claseError}>{errores.mensaje}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="autorizaTratamiento" className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#154677]">
          <input
            id="autorizaTratamiento"
            name="autorizaTratamiento"
            type="checkbox"
            checked={datosFormulario.autorizaTratamiento}
            onChange={(evento) => {
              setDatosFormulario((anterior) => ({ ...anterior, autorizaTratamiento: evento.target.checked }));
              setErrores((anteriores) => ({ ...anteriores, autorizaTratamiento: undefined }));
            }}
            required
            disabled={estaCargando}
            aria-invalid={Boolean(errores.autorizaTratamiento)}
            aria-describedby={errores.autorizaTratamiento ? "error-autorizaTratamiento" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-[#087CE5]"
          />
          <span>
            {fragmentosAutorizacionDatos.inicio}
            <Link href="/privacidad" className="font-semibold text-[#154677] underline decoration-[#087CE5] underline-offset-4 hover:text-[#087CE5]">
              {fragmentosAutorizacionDatos.politica}
            </Link>
            {fragmentosAutorizacionDatos.entreEnlaces}
            <Link href="/terminos-y-condiciones" className="font-semibold text-[#154677] underline decoration-[#087CE5] underline-offset-4 hover:text-[#087CE5]">
              {fragmentosAutorizacionDatos.terminos}
            </Link>
            {fragmentosAutorizacionDatos.cierre} *
          </span>
        </label>
        {errores.autorizaTratamiento && <p id="error-autorizaTratamiento" role="alert" className={claseError}>{errores.autorizaTratamiento}</p>}
      </div>

      <button type="submit" disabled={estaCargando} className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#087CE5] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0969BF] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#087CE5] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {estaCargando ? "Enviando..." : "Enviar mensaje"}
        {!estaCargando && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </button>

      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="_hp">No llenar</label>
        <input id="_hp" name="_hp" type="text" value={mielero} onChange={(evento) => setMielero(evento.target.value)} tabIndex={-1} autoComplete="off" />
      </div>
    </form>
  );
}
