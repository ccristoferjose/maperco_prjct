import Link from "next/link";

/**
 * Tarjeta de servicio para grillas.
 */
export default function ServiceCard({ service }) {
  const href = `/servicios/${service.slug}`;
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-clay/40 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.65 2.65 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink/65">
        {service.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600">
        {service.ctaLabel}
        <svg
          className="h-4 w-4 transition group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
}
