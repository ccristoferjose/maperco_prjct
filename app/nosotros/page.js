import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nosotros | Persianas Maperco | Persianas a la Medida en Guatemala",
  description:
    "Conoce a Persianas Maperco: fabricación, instalación, reparación y mantenimiento de persianas y cortinas a la medida en Guatemala, con atención personalizada.",
  path: "/nosotros",
});

const values = [
  {
    title: "Trabajo a la medida",
    desc: "Cada solución se fabrica según las dimensiones y necesidades reales de tu espacio.",
  },
  {
    title: "Atención personalizada",
    desc: "Te escuchamos y asesoramos con honestidad para que elijas la mejor opción.",
  },
  {
    title: "Instalación profesional",
    desc: "Montaje cuidado, nivelado y seguro, dejando tu espacio limpio y funcional.",
  },
  {
    title: "Soporte real",
    desc: "Reparación y mantenimiento para que tus persianas duren más y operen mejor.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Nosotros", href: "/nosotros" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Quiénes somos"
              title="Especialistas en persianas y cortinas a la medida"
            />
            <div className="prose-maperco mt-6 space-y-4">
              <p>
                Persianas Maperco es una empresa guatemalteca dedicada a la venta,
                fabricación, instalación, reparación y mantenimiento de persianas,
                cortinas, puertas plegables y mosquiteros a la medida.
              </p>
              <p>
                Trabajamos con hogares, oficinas y comercios que buscan controlar
                la luz, ganar privacidad y decorar sus espacios con un acabado
                elegante. Nos especializamos en soluciones hechas a la medida, con
                productos como persianas blackout, screen, día y noche, cortinas
                romanas y francesas, además de puertas plegables y mosquiteros.
              </p>
              <p>
                Lo que nos distingue es la atención personalizada: te asesoramos
                para elegir el producto y la tela adecuada, medimos con precisión y
                realizamos una instalación profesional. Y cuando lo necesites,
                ofrecemos reparación y mantenimiento para alargar la vida de tus
                persianas.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand-100 shadow-xl shadow-ink/5">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=70"
              alt="Interior moderno con persianas instaladas por Persianas Maperco en Guatemala"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Lo que nos mueve"
            title="Por qué confiar en Maperco"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-ink/10 bg-sand-50 p-6">
                <h3 className="text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-base rounded-3xl border border-ink/10 bg-white p-8 sm:p-12">
          <SectionHeading
            align="left"
            eyebrow="Cobertura"
            title="Atención en Ciudad de Guatemala y alrededores"
            description={`Atendemos ${site.coverage.join(", ")}. Escríbenos para confirmar cobertura en tu ubicación.`}
          />
        </div>
      </section>

      <CTASection
        title="Trabajemos juntos en tu próximo proyecto"
        subtitle="Cuéntanos qué necesitas y te damos una propuesta a la medida."
        whatsAppKey="general"
        primaryLabel="Hablar con un asesor"
      />
    </>
  );
}
