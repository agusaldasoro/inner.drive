import Link from "next/link";
import { plans } from "@/lib/content";

export const metadata = { title: "Planes" };

export default function PlanesPage() {
  return (
    <section>
      <div className="container-x py-20 md:py-28">
        <p className="eyebrow">Training plans</p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-7xl">
          5 planes. <span className="text-brand-red">Un solo objetivo.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Cada plan está pensado para que progreses. Desde el atleta que recién
          comienza hasta el competidor experimentado. Encontrá el tuyo.
        </p>

        <div className="mt-16 space-y-6">
          {plans.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="group grid scroll-mt-24 gap-6 border border-white/10 bg-brand-panel p-8 transition hover:border-brand-red md:grid-cols-[1fr,2fr] md:p-10"
            >
              <div className="flex flex-col justify-between gap-6 border-b border-white/5 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-10">
                <div>
                  <span className="font-display text-3xl text-brand-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-3xl uppercase tracking-wider">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-white/70">{p.tagline}</p>
                </div>
                <dl className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="uppercase tracking-widest text-white/40">Nivel</dt>
                    <dd className="mt-1 text-white/90">{p.level}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-widest text-white/40">Frecuencia</dt>
                    <dd className="mt-1 text-white/90">{p.daysPerWeek}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <p className="text-white/80">{p.description}</p>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Focos del plan
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.focus.map((f) => (
                      <span
                        key={f}
                        className="border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <Link
                    href={`/contacto?plan=${p.slug}`}
                    className="btn-primary text-xs"
                  >
                    Quiero este plan
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
