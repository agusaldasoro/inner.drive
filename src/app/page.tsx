import Link from "next/link";
import Image from "next/image";
import { plans } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ActionStrip />
      <PlansPreview />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-grid bg-grid opacity-60"
      />
      <div className="container-x relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div>
          <p className="eyebrow">Arrancamos.</p>
          <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Base sólida.
            <br />
            <span className="text-brand-red">Resultado real.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Programación para entrenar con criterio, estructura y propósito.
            Diseñada por coaches que compitieron y entienden lo que necesitás
            para mejorar de verdad.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/planes" className="btn-primary">
              Ver planes
            </Link>
            <Link href="/contacto" className="btn-ghost">
              Consultá
            </Link>
          </div>
          <p className="mt-12 flex items-center gap-3 text-xs uppercase tracking-widest text-white/50">
            <span className="inline-block h-px w-10 bg-brand-red" />
            Entrenamiento online · Desde cualquier lugar
          </p>
        </div>

        {/* Hero photo — both coaches at Semifinals, melted into the background */}
        <div className="relative hidden overflow-hidden rounded-sm lg:block" style={{ aspectRatio: "3/4" }}>
          <Image
            src="/Ale-002.jpg"
            alt="Alexia y Nacho en Semifinals"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "62% 25%" }}
            sizes="40vw"
          />
          {/* Fade left → blends into page background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/30 to-transparent" />
          {/* Fade bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent" />
          {/* Fade top */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 to-transparent" />
          {/* General dark tint so colours don't pop too much */}
          <div className="absolute inset-0 bg-brand-ink/20" />
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      n: "01",
      title: "Criterio",
      body: "Cada sesión tiene un por qué. Volumen, intensidad y descanso planificados.",
    },
    {
      n: "02",
      title: "Estructura",
      body: "Bloques medibles que se construyen unos sobre otros. Sin entrenar al azar.",
    },
    {
      n: "03",
      title: "Propósito",
      body: "Tu progreso es la métrica. Plan ajustado a tu nivel y momento competitivo.",
    },
  ];
  return (
    <section className="border-b border-white/5">
      <div className="container-x py-20">
        <p className="eyebrow">Por qué Inner Drive</p>
        <h2 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
          Diseñada por atletas. Probada en competencia.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.n} className="bg-brand-ink p-8">
              <span className="font-display text-3xl text-brand-red">{it.n}</span>
              <h3 className="mt-4 font-display text-2xl uppercase tracking-wider">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionStrip() {
  const photos = [
    { src: "/Ale-003.jpg", alt: "Alexia en competencia", pos: "60% 20%" },
    { src: "/Nacho-002.jpg", alt: "Nacho en competencia", pos: "50% 30%" },
    { src: "/Nacho-003.jpg", alt: "Nacho en competencia", pos: "50% 25%" },
  ];
  return (
    <section className="border-b border-white/5">
      <div className="grid h-64 grid-cols-3 overflow-hidden sm:h-80 lg:h-96">
        {photos.map(({ src, alt, pos }, i) => (
          <div key={src} className="relative overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover brightness-50 saturate-[0.25]"
              style={{ objectPosition: pos }}
              sizes="33vw"
            />
            {/* Extra fade on the outer edges to blend with page */}
            {i === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 to-transparent" />
            )}
            {i === photos.length - 1 && (
              <div className="absolute inset-0 bg-gradient-to-l from-brand-ink/80 to-transparent" />
            )}
            {/* Top + bottom fades */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/60 via-transparent to-brand-ink/60" />
          </div>
        ))}
      </div>
    </section>
  );
}

function PlansPreview() {
  return (
    <section className="border-b border-white/5">
      <div className="container-x py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Training plans</p>
            <h2 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
              5 planes. <span className="text-brand-red">Un solo objetivo.</span>
            </h2>
          </div>
          <Link
            href="/planes"
            className="hidden text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white sm:block"
          >
            Ver detalle →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <Link
              key={p.slug}
              href={`/planes#${p.slug}`}
              className="group block border border-white/10 bg-brand-panel p-6 transition hover:border-brand-red"
            >
              <span className="text-xs uppercase tracking-widest text-brand-red">
                {p.level}
              </span>
              <h3 className="mt-3 font-display text-2xl uppercase tracking-wider">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-white/70">{p.tagline}</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-white/40 group-hover:text-white">
                Más info →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section>
      <div className="container-x py-24">
        <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-brand-red-dim/40 via-brand-panel to-brand-panel p-10 md:p-16">
          <p className="eyebrow">Consultá</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Hay un plan para donde estás hoy y para donde querés llegar.
          </h2>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">
              Quiero empezar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
