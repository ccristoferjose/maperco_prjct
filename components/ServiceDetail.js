import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { services } from "@/data/services";
import { getFaqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { serviceSchema, jsonLd } from "@/lib/schema";

export default function ServiceDetail({ service }) {
  const faqs = getFaqs(service.slug);
  const related = services.filter((s) => s.slug !== service.slug);
  const path = `/servicios/${service.slug}`;

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: service.name, href: path },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            name: service.name,
            description: service.metaDescription,
            path,
          })
        )}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero del servicio */}
      <section className="section pt-10">
        <div className="container-base grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Servicio profesional</p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(service.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {service.ctaLabel}
              </a>
              <Link href="/cotizar" className="btn-outline">
                Solicitar cotización
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand-100 shadow-xl shadow-ink/5">
            <Image
              src={service.image}
              alt={`${service.name} en Guatemala — Persianas Maperco`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section bg-white">
        <div className="container-base grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              ¿Qué incluye este servicio?
            </h2>
            <ul className="mt-6 space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <svg className="mt-0.5 h-6 w-6 flex-none text-clay-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-base leading-7 text-ink/75">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-sand-50 p-7">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Cómo trabajamos
            </h2>
            <ol className="mt-6 space-y-5">
              {service.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-clay text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base leading-7 text-ink/75">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-7 text-ink/65">
              Cobertura en {site.coverage.slice(0, 6).join(", ")} y más zonas de
              Guatemala.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Otros servicios */}
      <section className="section bg-white">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Otros servicios
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={service.h1}
        subtitle="Escríbenos y coordinamos la visita. Atención personalizada en toda el área."
        whatsAppKey={service.waKey}
        primaryLabel={service.ctaLabel}
      />
    </>
  );
}
