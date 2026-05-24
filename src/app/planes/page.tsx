import Link from "next/link";
import { plans, type Plan } from "@/lib/content";

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
          Cada plan está pensado para que progreses.
          Desde el atleta que recién comienza hasta el competidor experimentado.
          Encontrá el tuyo.
        </p>

        <div className="mt-16 space-y-8">
          {plans.map((p, i) => (
            <PlanCard key={p.slug} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan: p, index: i }: { plan: Plan; index: number }) {
  return (
    <article
      id={p.slug}
      className="scroll-mt-24 border border-white/10 bg-brand-panel transition-colors hover:border-brand-red grid md:grid-cols-[1fr,2fr]"
    >
      {/* Left: identity + meta */}
      <div className="flex flex-col gap-8 border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
        <div>
          <span className="font-display text-5xl leading-none text-brand-red">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h2 className="mt-2 font-display text-4xl uppercase leading-[1.05] tracking-wide">
            {p.name}
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-brand-red" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              {p.tagline.replace(/\.$/, "")}
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {p.description}
          </p>
        </div>

        <div className="divide-y divide-white/5">
          <MetaRow icon={<BarChartIcon />} label="Nivel" value={p.level} />
          <MetaRow icon={<CalendarIcon />} label="Frecuencia" value={p.daysPerWeek} />
          {p.precio && (
            <MetaRow icon={<PriceIcon />} label="Precio" value={p.precio} />
          )}
        </div>
      </div>

      {/* Right: details + CTA */}
      <div className="flex flex-col gap-8 p-8 md:p-10">
        {/* Ideal si */}
        <div>
          <SectionTitle title="Ideal si:" />
          <div className="mt-5">
            {p.idealFor.map((item) => (
              <div key={item} className="flex items-center gap-4 py-2">
                <CheckCircle />
                <p className="text-sm text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Este plan incluye */}
        <div className="border border-white/10 bg-brand-ink/60 p-5">
          <SectionTitle title="Este plan incluye:" />
          <div className="mt-5 divide-y divide-white/5">
            {p.includes.map((item, idx) => (
              <div key={item} className="flex items-start gap-4 py-4">
                <IncludeIcon text={item} />
                <p className="pt-1.5 text-sm leading-relaxed text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Focos del plan */}
        <div>
          <SectionTitle title="Focos del plan" />
          <div className="mt-4 flex flex-wrap gap-2">
            {p.focus.map((f) => (
              <span
                key={f}
                className="border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            href={`/contacto?plan=${p.slug}`}
            className="flex w-full items-center justify-center gap-3 bg-brand-red py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a01d1b]"
          >
            Quiero este plan
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-widest text-white">
      {title}
    </h3>
  );
}

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 py-5">
      <div className="mt-0.5 shrink-0 text-brand-red">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
        <p className="mt-1 text-sm text-white/90">{value}</p>
      </div>
    </div>
  );
}

function CheckCircle() {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-red text-[10px] font-bold text-brand-red"
    >
      ✓
    </span>
  );
}

function IncludeIcon({ text }: { text: string }) {
  const t = text.toLowerCase();
  let icon: React.ReactNode;
  if (t.includes("whatsapp")) icon = <WhatsAppIcon />;
  else if (t.includes("videollamada")) icon = <VideoCallIcon />;
  else if (t.includes("clasificatorio") || t.includes("acompañamiento")) icon = <TrophyIcon />;
  else if (t.includes("video")) icon = <PlayIcon />;
  else icon = <ChatIcon />;
  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-white/40"
    >
      {icon}
    </span>
  );
}

function BarChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <rect x="1" y="10" width="3.5" height="5" rx="0.5" />
      <rect x="6.25" y="6" width="3.5" height="9" rx="0.5" />
      <rect x="11.5" y="2" width="3.5" height="13" rx="0.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="1.5" y="3" width="13" height="11" rx="1" />
      <path d="M1.5 6.5h13" />
      <path d="M5 1.5v3" />
      <path d="M11 1.5v3" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v7" />
      <path d="M6 6.5h3a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 0 0 3h3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.9-5.7A8.5 8.5 0 1 1 7.7 19.1z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8M12 17v4M17 3H7l1 8a4 4 0 0 0 8 0l1-8" />
      <path d="M7 3H4v3a3 3 0 0 0 3 3" />
      <path d="M17 3h3v3a3 3 0 0 0-3 3" />
    </svg>
  );
}

function VideoCallIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}
