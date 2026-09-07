import Link from "next/link";
import Image from "next/image";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { archiveImages } from "@/data/archive";

/**
 * Bloque de cierre orientado a conversión.
 */
export default function CTASection({
  title = "¿Listo para transformar tus espacios?",
  subtitle = "Cuéntanos qué necesitas y te asesoramos con la mejor solución a la medida.",
  whatsAppKey = "general",
  primaryLabel = "Cotizar por WhatsApp",
  secondaryLabel = "Solicitar cotización",
  secondaryHref = "/cotizar",
  images = archiveImages,
}) {
  const ctaImages = images.slice(0, 3);

  return (
    <section className="section bg-brand-navy text-white">
      <div className="container-base grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="text-center lg:text-left">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl lg:mx-0 lg:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75 lg:mx-0">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={waLink(whatsAppKey)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-white bg-white text-ink hover:bg-sand-100 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {primaryLabel}
            </a>
            {secondaryLabel ? (
              <Link href={secondaryHref} className="btn border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10 w-full sm:w-auto">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        {ctaImages.length ? (
          <div className="grid grid-cols-2 gap-3">
            {ctaImages.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-lg border border-white/15 bg-white/10 ${
                  index === 0 ? "row-span-2 min-h-64 lg:min-h-80" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 33vw, 22vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
