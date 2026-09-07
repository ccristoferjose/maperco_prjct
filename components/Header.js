"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // En la home el header arranca transparente sobre el video; al hacer scroll
  // (o en cualquier otra página) usa fondo sólido.
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid
          ? "border-b border-sand-200 bg-white/95 shadow-sm shadow-ink/5 backdrop-blur"
          : "border-b border-white/10 bg-brand-navy/82 shadow-sm shadow-ink/20 backdrop-blur-md"
      }`}
    >
      <div className="container-base flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Persianas Maperco — Inicio"
        >
          <span
            className={`inline-flex items-center gap-3 text-xl font-serif font-bold tracking-tight ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <span className={`grid h-10 w-10 place-items-center rounded-md border ${
              solid ? "border-sand-200 bg-ink" : "border-white/30 bg-white/10"
            }`}>
              <span className="flex w-5 flex-col gap-1">
                <span className="h-0.5 bg-white" />
                <span className="h-0.5 bg-white" />
                <span className="h-0.5 bg-white" />
                <span className="h-0.5 bg-white" />
              </span>
            </span>
            <span>
              Persianas <span className={solid ? "text-clay" : "text-white"}>Maperco</span>
            </span>
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  solid ? "text-ink/70 hover:text-ink" : "text-white/85 hover:text-white"
                } ${active ? (solid ? "text-clay-600" : "text-white") : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className={solid ? "btn-primary px-5 py-2.5" : "btn border border-white/35 bg-white text-ink hover:bg-sand-100 px-5 py-2.5"}
          >
            Cotizar
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open ? (
        <div className="border-t border-sand-200 bg-white shadow-lg shadow-ink/5 lg:hidden">
          <nav className="container-base flex flex-col py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/5 py-3 text-base font-medium text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waLink("general")}
              target="_blank"
              rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
              Cotizar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
