import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

const DURACION_DEFECTO = 5000
const INTERVALO_VIGILANCIA = 500

export function Toaster() {
  const { toasts, dismiss } = useToast()

  useEffect(() => {
    const desecharVencidos = () => {
      const ahora = Date.now()
      for (const toast of toasts) {
        if (!toast.open || toast.creadaEn === undefined) continue
        const duracion = toast.duration ?? DURACION_DEFECTO
        if (ahora - toast.creadaEn >= duracion) {
          dismiss(toast.id)
        }
      }
    }

    const intervalo = setInterval(desecharVencidos, INTERVALO_VIGILANCIA)

    const alCambiarVisibilidad = () => {
      if (document.visibilityState === "visible") desecharVencidos()
    }
    document.addEventListener("visibilitychange", alCambiarVisibilidad)

    return () => {
      clearInterval(intervalo)
      document.removeEventListener("visibilitychange", alCambiarVisibilidad)
    }
  }, [toasts, dismiss])

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, creadaEn, duration, ...props }) {
        void creadaEn
        return (
          <Toast key={id} {...props} duration={duration}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
