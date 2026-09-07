import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios | Instalación, Reparación y Mantenimiento | Maperco",
  description:
    "Servicios de instalación, reparación, mantenimiento, medición y asesoría de persianas y cortinas en Guatemala. Atención profesional y a la medida.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base">
          <SectionHeading
            eyebrow="Lo que hacemos"
            title="Servicios profesionales"
            description="Más que vender persianas, te acompañamos en todo el proceso: medición, instalación, reparación y mantenimiento."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
