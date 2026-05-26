"use client";

import { useState } from "react";

type Platform = "web" | "ios" | "android";

const TABS: { id: Platform; label: string }[] = [
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "web", label: "Web" },
];

export default function WodUpInstructions() {
  const [active, setActive] = useState<Platform>("ios");

  return (
    <div>
      <div className="flex border-b border-white/10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`-mb-px px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-colors ${
              active === tab.id
                ? "border-b-2 border-brand-red text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 text-sm text-white/80">
        {active === "web" && (
          <p>
            Creá tu cuenta directamente desde el navegador en{" "}
            <a
              href="https://www.wodup.com/signup/athlete"
              target="_blank"
              rel="noreferrer"
              className="text-brand-red-link transition-colors hover:underline"
            >
              wodup.com/signup →
            </a>
          </p>
        )}

        {active === "ios" && (
          <p>
            Descargá la app desde la App Store:{" "}
            <a
              href="https://apps.apple.com/es/app/wodup/id1407715516"
              target="_blank"
              rel="noreferrer"
              className="text-brand-red-link transition-colors hover:underline"
            >
              WodUp en App Store →
            </a>
          </p>
        )}

        {active === "android" && (
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-white/40">
              WodUp no tiene app nativa para Android, pero funciona igual que una app del Play Store.
            </p>
            <ol className="space-y-4">
              {[
                <>
                  Abrí el navegador{" "}
                  <span className="text-white">sin modo incógnito</span> y creá tu cuenta en{" "}
                  <a
                    href="https://www.wodup.com/signup/athlete"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-red-link transition-colors hover:underline"
                  >
                    wodup.com/signup
                  </a>
                  .
                </>,
                <>
                  Tocá el menú (tres puntos verticales) y seleccioná{" "}
                  <span className="text-white">Agregar a pantalla de inicio</span> o{" "}
                  <span className="text-white">Instalar app</span>.
                </>,
                <>El ícono de WodUp aparecerá en la pantalla de inicio de tu teléfono.</>,
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 font-display text-xl leading-none text-brand-red">
                    {i + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
