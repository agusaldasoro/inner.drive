"use client";

import { useState, useEffect } from "react";

type PlanOption = { slug: string; name: string };

export default function ContactForm({ plans }: { plans: PlanOption[] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get("plan");
    if (p) setSelectedPlan(p);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Nombre" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="text-xs uppercase tracking-widest text-white/60">
          Plan de interés
        </label>
        <select
          name="plan"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className="mt-2 w-full border border-white/10 bg-brand-ink px-4 py-3 text-sm text-white focus:border-brand-red focus:outline-none"
        >
          <option value="">Seleccioná un plan</option>
          {plans.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
          <option value="otro">No estoy seguro / Otro</option>
        </select>
      </div>
      <Field label="Tu nivel y objetivo" name="message" textarea required />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>

      {status === "ok" && (
        <p className="text-sm text-emerald-400">
          ¡Gracias! Te respondemos en breve.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          No pudimos enviar tu mensaje. Probá de nuevo o escribinos por Instagram.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const common =
    "mt-2 w-full border border-white/10 bg-brand-ink px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand-red focus:outline-none";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-white/60">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={common} />
      ) : (
        <input name={name} type={type} required={required} className={common} />
      )}
    </label>
  );
}
