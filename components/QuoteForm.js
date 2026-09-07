"use client";

import { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { products } from "@/data/products";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

const spaceTypes = ["Casa", "Apartamento", "Oficina", "Comercio"];

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";
const labelClass = "mb-1.5 block text-sm font-medium text-ink/80";

const initialState = {
  nombre: "",
  telefono: "",
  ubicacion: "",
  producto: "",
  ventanas: "",
  medidas: "",
  espacio: "",
  mensaje: "",
};

function buildMessage(form) {
  const lines = [
    "Hola Persianas Maperco, quiero solicitar una cotización:",
    "",
    form.nombre && `• Nombre: ${form.nombre}`,
    form.telefono && `• Teléfono: ${form.telefono}`,
    form.ubicacion && `• Ubicación/zona: ${form.ubicacion}`,
    form.producto && `• Producto: ${form.producto}`,
    form.ventanas && `• Cantidad de ventanas: ${form.ventanas}`,
    form.medidas && `• Medidas aproximadas: ${form.medidas}`,
    form.espacio && `• Tipo de espacio: ${form.espacio}`,
    form.mensaje && `• Mensaje: ${form.mensaje}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function QuoteForm({ defaultProduct = "" }) {
  const [form, setForm] = useState({ ...initialState, producto: defaultProduct });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const waHref = createWhatsAppLink(buildMessage(form));
  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Solicitud de cotización — Persianas Maperco"
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  return (
    <form
      className="rounded-lg border border-sand-200 bg-white p-6 shadow-sm shadow-ink/5 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={form.nombre}
            onChange={update("nombre")}
            className={inputClass}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            value={form.telefono}
            onChange={update("telefono")}
            className={inputClass}
            placeholder="Ej: 5555-5555"
            required
          />
        </div>

        <div>
          <label htmlFor="ubicacion" className={labelClass}>
            Ubicación o zona
          </label>
          <input
            id="ubicacion"
            type="text"
            value={form.ubicacion}
            onChange={update("ubicacion")}
            className={inputClass}
            placeholder="Ej: Zona 14, Mixco, Villa Nueva…"
          />
        </div>

        <div>
          <label htmlFor="producto" className={labelClass}>
            Tipo de producto
          </label>
          <select
            id="producto"
            value={form.producto}
            onChange={update("producto")}
            className={inputClass}
          >
            <option value="">Selecciona un producto</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Aún no estoy seguro">Aún no estoy seguro</option>
          </select>
        </div>

        <div>
          <label htmlFor="ventanas" className={labelClass}>
            Cantidad de ventanas
          </label>
          <input
            id="ventanas"
            type="number"
            min="1"
            value={form.ventanas}
            onChange={update("ventanas")}
            className={inputClass}
            placeholder="Ej: 3"
          />
        </div>

        <div>
          <label htmlFor="medidas" className={labelClass}>
            Medidas aproximadas
          </label>
          <input
            id="medidas"
            type="text"
            value={form.medidas}
            onChange={update("medidas")}
            className={inputClass}
            placeholder="Ej: 1.20 m x 1.50 m"
          />
        </div>

        <div className="sm:col-span-2">
          <span className={labelClass}>Tipo de espacio</span>
          <div className="flex flex-wrap gap-2">
            {spaceTypes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, espacio: s }))}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  form.espacio === s
                    ? "bg-ink text-white"
                    : "border border-sand-200 bg-white text-ink/70 hover:border-clay/30"
                }`}
                aria-pressed={form.espacio === s}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className={labelClass}>
            Mensaje adicional
          </label>
          <textarea
            id="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={update("mensaje")}
            className={inputClass}
            placeholder="Cuéntanos más sobre tu proyecto o tus dudas."
          />
        </div>
      </div>

      <p className="mt-5 rounded-md bg-sand-100 px-4 py-3 text-sm text-ink/70">
        Puedes adjuntar fotos de tus ventanas directamente por WhatsApp para una
        cotización más precisa.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn-whatsapp w-full sm:w-auto">
          <WhatsAppIcon className="h-5 w-5" />
          Enviar por WhatsApp
        </button>
        <a href={mailHref} className="btn-outline w-full sm:w-auto">
          Enviar por correo
        </a>
      </div>
    </form>
  );
}
