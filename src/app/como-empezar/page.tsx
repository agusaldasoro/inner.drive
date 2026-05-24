import Link from "next/link";
import { contact } from "@/lib/content";

export const metadata = { title: "Cómo empezar" };

export default function ComoEmpezarPage() {
  return (
    <section>
      <div className="container-x py-20 md:py-28">
        <p className="eyebrow">Transferencia · Inicio</p>
        <h1 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-7xl">
          Cómo <span className="text-brand-red">empezar.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/70">
          Seguí estos pasos para activar tu plan y empezar a entrenar.
        </p>

        <div className="mt-16 space-y-4">

          <Step n="01" title="Elegí tu plan">
            <p className="text-sm text-white/80">
              Revisá los planes disponibles y elegí el que mejor se adapte a tu nivel y objetivo.
            </p>
            <div className="mt-5">
              <Link
                href="/planes"
                className="text-xs font-semibold uppercase tracking-widest text-brand-red transition-colors hover:text-white"
              >
                Ver planes →
              </Link>
            </div>
          </Step>

          <Step n="02" title="Realizá la transferencia">
            <p className="text-sm text-white/80">
              Elegí la opción según tu país de residencia.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <PaymentPanel title="Argentina">
                <PaymentRow label="CBU" value="0000003100046344159695" mono />
                <PaymentRow label="Alias" value="alexiawilliams" />
              </PaymentPanel>
              <PaymentPanel title="Extranjero">
                <PaymentRow label="Plataforma" value="PayPal" />
                <PaymentRow label="Email" value="alexia_0998@hotmail.com" mono />
              </PaymentPanel>
            </div>
          </Step>

          <Step n="03" title="Enviá el mail">
            <p className="text-sm text-white/80">
              Escribinos a{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-brand-red transition-colors hover:underline"
              >
                {contact.email}
              </a>{" "}
              con la siguiente información:
            </p>
            <ul className="mt-4 space-y-2.5">
              {["Plan seleccionado", "Contacto de WhatsApp", "Comprobante de pago"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Step>

          <Step n="04" title="Descargá WodUp">
            <p className="text-sm text-white/80">
              Descargá la aplicación{" "}
              <span className="font-semibold text-white">WodUp</span>{" "}
              donde vas a encontrar toda tu planificación.
            </p>
          </Step>

          <Step n="05" title="¿Tenés dudas?">
            <p className="text-sm text-white/80">
              Si tenés dudas sobre qué plan elegir o alguna parte del proceso, escribinos
              por mensaje directo en{" "}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-brand-red transition-colors hover:underline"
              >
                {contact.instagramHandle}
              </a>{" "}
              y te ayudamos.
            </p>
          </Step>

        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid border border-white/10 bg-brand-panel md:grid-cols-[1fr,2fr]">
      <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
        <span className="font-display text-5xl leading-none text-brand-red">{n}</span>
        <h2 className="mt-3 font-display text-2xl uppercase leading-tight tracking-wide">
          {title}
        </h2>
      </div>
      <div className="p-8 md:p-10">{children}</div>
    </div>
  );
}

function PaymentPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-white/10 bg-brand-ink/60 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-white">{title}</p>
      <div className="mt-3 divide-y divide-white/5">{children}</div>
    </div>
  );
}

function PaymentRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="py-3">
      <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
      <p
        className={`mt-1 break-all text-sm text-white/90 ${
          mono ? "font-mono tracking-tight" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
