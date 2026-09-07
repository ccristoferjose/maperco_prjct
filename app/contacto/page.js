import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contacto | Persianas Maperco | Guatemala",
  description:
    "Contacta a Persianas Maperco en Guatemala. Escríbenos por WhatsApp, llámanos o envíanos un mensaje. Atención personalizada para tu cotización.",
  path: "/contacto",
});

function ContactRow({ label, value, href }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-ink/10 py-4 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink/45">
        {label}
      </span>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-ink transition hover:text-clay-600">
          {value}
        </a>
      ) : (
        <span className="font-medium text-ink">{value}</span>
      )}
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Contacto", href: "/contacto" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Hablemos"
              title="Contacto"
              description="Estamos para ayudarte. Escríbenos por WhatsApp para una respuesta rápida o usa el formulario."
            />

            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-8 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Escribir por WhatsApp
            </a>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
              <ContactRow label="WhatsApp / Teléfono" value={site.phoneDisplay} href={`tel:${site.phoneE164}`} />
              <ContactRow label="Correo" value={site.email} href={`mailto:${site.email}`} />
              <ContactRow label="Dirección" value={`${site.address.street}, ${site.address.locality}, ${site.address.region}`} />
              <ContactRow label="Horario de atención" value={site.hours} />
              {site.facebookUrl ? (
                <ContactRow label="Facebook" value="Persianas Maperco" href={site.facebookUrl} />
              ) : null}
            </div>

            {site.googleMapsUrl ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
                <iframe
                  title="Ubicación de Persianas Maperco"
                  src={site.googleMapsUrl}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Formulario rápido</h2>
            <p className="mt-2 text-sm text-ink/65">
              Déjanos tus datos y te contactamos.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
