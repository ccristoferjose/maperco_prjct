import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Persianas en Guatemala | A la Medida, Instalación y Reparación | Maperco",
  description:
    "¿Buscas persianas en Guatemala? En Persianas Maperco fabricamos, instalamos y reparamos persianas y cortinas a la medida: blackout, screen, verticales y más. Cotiza por WhatsApp.",
  path: "/persianas-guatemala",
});

export default function PersianasGuatemalaPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Persianas en Guatemala", href: "/persianas-guatemala" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Persianas Maperco</p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
              Persianas en Guatemala a la medida
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">
              Somos especialistas en persianas y cortinas a la medida en
              Guatemala. Fabricamos, instalamos, reparamos y damos mantenimiento a
              persianas blackout, screen, verticales, cortinas
              romanas, puertas plegables y mosquiteros para hogares, oficinas y
              comercios.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/cotizar" className="btn-primary">
                Solicitar cotización
              </Link>
              <Link href="/productos" className="btn-outline">
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido SEO */}
      <section className="section bg-white">
        <div className="container-base grid gap-12 lg:grid-cols-2">
          <div className="prose-maperco">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Persianas a la medida para cada espacio
            </h2>
            <p className="mt-4">
              Elegir las persianas correctas depende de la luz, la privacidad y el
              estilo de cada ambiente. Por eso todas nuestras persianas y cortinas
              se fabrican a la medida exacta de tus ventanas. Si buscas oscuridad
              total, las persianas blackout son ideales para dormitorios y salas de
              TV; si necesitas control solar manteniendo la vista, las persianas
              screen son perfectas para oficinas y ventanales; y si necesitas
              cubrir ventanales amplios, las persianas verticales aportan control
              práctico de luz y privacidad.
            </p>
            <p className="mt-4">
              Además de la venta y fabricación, ofrecemos instalación profesional,
              reparación y mantenimiento de persianas en Guatemala, para que tu
              inversión dure y funcione como el primer día.
            </p>
          </div>
          <div className="prose-maperco">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Cobertura en Ciudad de Guatemala y alrededores
            </h2>
            <p className="mt-4">
              Instalamos persianas en Guatemala con cobertura en{" "}
              {site.coverage.join(", ")}. Ya sea que estés en una casa, un
              apartamento, una oficina o un local comercial, coordinamos una visita
              de medición y asesoría para darte una cotización exacta.
            </p>
            <p className="mt-4">
              ¿No ves tu zona en la lista? Escríbenos por WhatsApp y con gusto
              confirmamos si podemos llegar a tu ubicación.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.coverage.map((zone) => (
                <li
                  key={zone}
                  className="rounded-full border border-ink/10 bg-sand-50 px-3 py-1.5 text-xs font-medium text-ink/65"
                >
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="section">
        <div className="container-base">
          <SectionHeading
            eyebrow="Tipos de persianas y cortinas"
            title="Nuestros productos"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Servicios"
            title="Instalación, reparación y mantenimiento"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={getFaqs("general")} />

      <CTASection
        title="Cotiza tus persianas en Guatemala"
        subtitle="Asesoría, medición e instalación profesional. Escríbenos y resolvemos tu proyecto."
        whatsAppKey="general"
        primaryLabel="Cotizar por WhatsApp"
      />
    </>
  );
}
