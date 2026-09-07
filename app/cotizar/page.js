import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cotizar | Solicita tu Cotización de Persianas | Persianas Maperco",
  description:
    "Solicita tu cotización de persianas, cortinas, puertas plegables o mosquiteros a la medida en Guatemala. Completa el formulario y envíalo por WhatsApp en segundos.",
  path: "/cotizar",
});

export default function CotizarPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Cotizar", href: "/cotizar" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Cotización a la medida"
              title="Solicita tu cotización"
              description="Completa tus datos y genera automáticamente un mensaje de WhatsApp con tu solicitud. Te respondemos lo antes posible."
            />

            <div className="mt-8 space-y-5 rounded-2xl border border-ink/10 bg-sand-50 p-6">
              <h2 className="text-base font-semibold text-ink">
                ¿Prefieres escribirnos directo?
              </h2>
              <a
                href={waLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Cotizar por WhatsApp
              </a>
              <p className="text-sm leading-6 text-ink/65">
                Puedes enviarnos fotos de tus ventanas por WhatsApp para una
                cotización más precisa. La subida de archivos en el formulario se
                habilitará más adelante.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </>
  );
}
