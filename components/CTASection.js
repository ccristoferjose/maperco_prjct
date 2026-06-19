import Link from "next/link";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

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
}) {
  return (
    <section className="section bg-ink text-white">
      <div className="container-base text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            {subtitle}
          </p>
        ) : null}

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink(whatsAppKey)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {primaryLabel}
          </a>
          {secondaryLabel ? (
            <Link href={secondaryHref} className="btn-outline w-full sm:w-auto">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
