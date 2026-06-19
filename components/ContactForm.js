"use client";

import { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";
const labelClass = "mb-1.5 block text-sm font-medium text-ink/80";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const message = [
    "Hola Persianas Maperco:",
    form.nombre && `• Nombre: ${form.nombre}`,
    form.telefono && `• Teléfono: ${form.telefono}`,
    form.mensaje && `• Mensaje: ${form.mensaje}`,
  ]
    .filter(Boolean)
    .join("\n");

  const waHref = createWhatsAppLink(message || "Hola Persianas Maperco, quiero más información.");
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Contacto — Persianas Maperco"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <form
      className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="c-nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="c-nombre"
            type="text"
            value={form.nombre}
            onChange={update("nombre")}
            className={inputClass}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="c-telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="c-telefono"
            type="tel"
            value={form.telefono}
            onChange={update("telefono")}
            className={inputClass}
            placeholder="Ej: 5555-5555"
            required
          />
        </div>
        <div>
          <label htmlFor="c-mensaje" className={labelClass}>
            ¿En qué te ayudamos?
          </label>
          <textarea
            id="c-mensaje"
            rows={4}
            value={form.mensaje}
            onChange={update("mensaje")}
            className={inputClass}
            placeholder="Cuéntanos qué producto o servicio te interesa."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-whatsapp w-full sm:w-auto">
          <WhatsAppIcon className="h-5 w-5" />
          Escribir por WhatsApp
        </button>
        <a href={mailHref} className="btn-outline w-full sm:w-auto">
          Enviar por correo
        </a>
      </div>
    </form>
  );
}
