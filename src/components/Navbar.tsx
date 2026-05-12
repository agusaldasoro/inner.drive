"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/planes", label: "Planes" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-ink/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="text-white" aria-label="Inner Drive — Inicio">
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-widest text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary text-xs">
            Consultá
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="container-x flex flex-col gap-2 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm uppercase tracking-widest text-white/80 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Consultá
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
