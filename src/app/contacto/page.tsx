import ContactForm from "@/components/ContactForm";
import { contact, plans } from "@/lib/content";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <section>
      <div className="container-x grid gap-12 py-20 md:grid-cols-[1fr,1.1fr] md:py-28">
        <div>
          <p className="eyebrow">Consultá</p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Empezá tu <span className="text-brand-red">plan</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Contanos tu nivel, tu objetivo y desde dónde entrenás. Te respondemos
            con la propuesta que mejor se adapte.
          </p>

          <div className="mt-10 space-y-5 text-sm text-white/80">
            <Row label="Instagram" value={contact.instagramHandle} href={contact.instagramUrl} />
            <Row label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <Row label="Modalidad" value="100% online · Desde cualquier lugar" />
          </div>
        </div>

        <div className="border border-white/10 bg-brand-panel p-6 md:p-10">
          <ContactForm plans={plans.map((p) => ({ slug: p.slug, name: p.name }))} />
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-4">
      <span className="text-xs uppercase tracking-widest text-white/40">
        {label}
      </span>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="hover:text-brand-red-link">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
