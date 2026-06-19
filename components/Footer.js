import Link from "next/link";
import { site } from "@/lib/site";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { waLink } from "@/lib/whatsapp";

const year = 2026;

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-base py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <p className="font-serif text-xl font-bold text-white">
              Persianas <span className="text-clay-300">Maperco</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Persianas, cortinas, puertas plegables y mosquiteros a la medida
              en Guatemala. Fabricación, instalación, reparación y mantenimiento.
            </p>
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 px-5 py-2.5"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Productos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/productos/${p.slug}`}
                    className="text-white/65 transition hover:text-clay-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-white/65 transition hover:text-clay-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/proyectos" className="text-white/65 transition hover:text-clay-300">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a href={`tel:${site.phoneE164}`} className="transition hover:text-clay-300">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-clay-300">
                  {site.email}
                </a>
              </li>
              <li>{site.address.street}</li>
              <li>
                {site.address.locality}, {site.address.region}
              </li>
              <li>{site.hours}</li>
              {site.facebookUrl ? (
                <li>
                  <a
                    href={site.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-clay-300"
                  >
                    Facebook
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Cobertura para SEO local */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-wider text-white/45">
            Cobertura
          </p>
          <p className="mt-2 text-sm text-white/55">
            {site.coverage.join(" · ")}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/cotizar" className="transition hover:text-clay-300">
              Cotizar
            </Link>
            <Link href="/nosotros" className="transition hover:text-clay-300">
              Nosotros
            </Link>
            <Link href="/contacto" className="transition hover:text-clay-300">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
