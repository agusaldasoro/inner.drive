import { coaches } from "@/lib/content";

export const metadata = { title: "Quiénes somos" };

export default function QuienesSomosPage() {
  return (
    <section>
      <div className="container-x py-20 md:py-28">
        <p className="eyebrow">¿Quiénes somos?</p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-7xl">
          Built by <span className="text-brand-red">experience.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Detrás de cada plan hay experiencia real. No somos un coach más:
          somos atletas que compiten, que entrenaron durante años y que saben
          exactamente lo que se necesita para mejorar.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 md:grid-cols-2">
          {coaches.map((c) => (
            <article key={c.name} className="bg-brand-panel p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-4xl uppercase tracking-wider">
                  {c.name}
                </h2>
                <span className="text-xs uppercase tracking-widest text-brand-red">
                  {c.role}
                </span>
              </div>
              <p className="mt-4 text-white/80">{c.bio}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-px w-6 bg-brand-red" />
                    <span className="text-white/80">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
          <Stat label="Años entrenando atletas" value="10+" />
          <Stat label="Atletas online" value="100+" />
          <Stat label="Apariciones en Semifinales" value="Múltiples" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-brand-ink p-8">
      <p className="font-display text-5xl text-brand-red">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
        {label}
      </p>
    </div>
  );
}
