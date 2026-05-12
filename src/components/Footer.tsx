import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-black">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo className="h-7 w-auto text-white" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Programación online para atletas de CrossFit. Base sólida. Resultado real.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navegación
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/planes" className="hover:text-brand-red">Planes</Link></li>
            <li><Link href="/quienes-somos" className="hover:text-brand-red">Quiénes somos</Link></li>
            <li><Link href="/contacto" className="hover:text-brand-red">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Conectá
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href="https://instagram.com/innerdrive.program"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-red"
              >
                Instagram · @innerdrive.program
              </a>
            </li>
            <li>
              <a href="mailto:hola@innerdrive.program" className="hover:text-brand-red">
                hola@innerdrive.program
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Inner Drive. Todos los derechos reservados.</span>
          <span>Entrenamiento online · Desde cualquier lugar</span>
        </div>
      </div>
    </footer>
  );
}
