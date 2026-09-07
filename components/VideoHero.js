"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Hero full screen con carrusel de videos de fondo, overlay y CTAs.
 *
 * - Pasa `videos` como arreglo de strings o de objetos { src, poster }.
 * - Si solo hay un video, se reproduce en loop.
 * - Con varios videos, cada uno se reproduce una vez y avanza al siguiente
 *   con una transición de fundido. También rota solo por tiempo como respaldo.
 */
export default function VideoHero({
  title,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  trustText = "Asesoría, medición e instalación profesional.",
  eyebrow = "Persianas Maperco",
  // Compatibilidad: si no se pasa `videos`, usa el video único.
  videoSrc = "/videos/hero-maperco.mp4",
  posterSrc,
  videos,
  // Tiempo máximo por video (ms) antes de avanzar, por si el video es muy largo
  // o no dispara el evento "ended".
  interval = 9000,
}) {
  // Normaliza la lista de videos a objetos { src, poster }.
  const slides = (
    videos && videos.length
      ? videos
      : [{ src: videoSrc, poster: posterSrc }]
  ).map((v) => (typeof v === "string" ? { src: v, poster: posterSrc } : v));

  const isCarousel = slides.length > 1;
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      const next = (index + slides.length) % slides.length;
      setActive(next);
    },
    [slides.length]
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  // Reproduce el video activo, reinicia y pausa los demás.
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        try {
          vid.currentTime = 0;
        } catch (_) {}
        const playPromise = vid.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        vid.pause();
      }
    });
  }, [active]);

  // Respaldo por tiempo: avanza aunque el video no dispare "ended".
  useEffect(() => {
    if (!isCarousel) return undefined;
    if (typeof window === "undefined") return undefined;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return undefined;

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, interval);
    return () => clearTimeout(timerRef.current);
  }, [active, isCarousel, interval, goNext]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      {/* Capa de videos apilados con fundido entre ellos. */}
      {slides.map((slide, i) => (
        <video
          key={slide.src}
          ref={(el) => (videoRefs.current[i] = el)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          autoPlay={i === 0}
          muted
          loop={!isCarousel}
          playsInline
          preload={i === 0 ? "auto" : "none"}
          poster={slide.poster || posterSrc || undefined}
          aria-hidden="true"
          onEnded={isCarousel ? goNext : undefined}
        >
          <source src={slide.src} type="video/mp4" />
        </video>
      ))}

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-base">
          <div className="max-w-[18rem] animate-fade-up py-28 sm:max-w-3xl sm:py-32">
            {eyebrow ? (
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                {eyebrow}
              </p>
            ) : null}

            <h1 className="hero-title max-w-[18rem] text-3xl font-bold leading-[1.08] tracking-tight text-white sm:max-w-4xl sm:text-5xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-xl sm:leading-8">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCtaLabel ? (
                <Link
                  href={primaryCtaHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-semibold text-ink shadow-lg shadow-ink/20 transition hover:bg-sand-100 sm:w-auto"
                >
                  {primaryCtaLabel}
                </Link>
              ) : null}

              {secondaryCtaLabel ? (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/45 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 sm:w-auto"
                >
                  {secondaryCtaLabel}
                </Link>
              ) : null}
            </div>

            {trustText ? (
              <p className="mt-6 text-sm text-white/75">{trustText}</p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel. */}
      {isCarousel ? (
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver video ${i + 1}`}
              aria-current={i === active}
              className={`h-2.5 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
