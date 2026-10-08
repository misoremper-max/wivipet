import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, PawPrint } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <PawPrint className="size-5" />
            <span className="font-display text-lg font-extrabold tracking-tight">WIVIPET</span>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Spoľahlivé opatrovanie a služby pre tvojho miláčika – všetko na jednom mieste.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="opacity-80 transition-opacity hover:opacity-100">
              <Facebook className="size-5" />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-80 transition-opacity hover:opacity-100">
              <Instagram className="size-5" />
            </a>
            <a
              href="mailto:info@wivipet.sk"
              aria-label="E-mail"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Služby</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/ponuka-sluzieb" className="hover:opacity-100">
                Opatrovanie doma
              </Link>
            </li>
            <li>
              <Link to="/ponuka-sluzieb" className="hover:opacity-100">
                Strihanie a úprava
              </Link>
            </li>
            <li>
              <Link to="/ponuka-sluzieb" className="hover:opacity-100">
                Prechádzky
              </Link>
            </li>
            <li>
              <Link to="/ponuka-sluzieb" className="hover:opacity-100">
                Pet taxi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">WIVIPET</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/o-nas" className="hover:opacity-100">
                O nás
              </Link>
            </li>
            <li>
              <Link to="/ako-to-funguje" className="hover:opacity-100">
                Ako to funguje
              </Link>
            </li>
            <li>
              <Link to="/pre-poskytovatelov" className="hover:opacity-100">
                Pre poskytovateľov
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:opacity-100">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Účet</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>
              <Link to="/prihlasenie" className="hover:opacity-100">
                Prihlásiť sa
              </Link>
            </li>
            <li>
              <Link to="/registracia" className="hover:opacity-100">
                Registrovať sa
              </Link>
            </li>
            <li>
              <Link to="/pridaj-sluzbu" className="hover:opacity-100">
                Pridaj službu
              </Link>
            </li>
            <li>
              <Link to="/obchodne-podmienky" className="hover:opacity-100">
                Obchodné podmienky
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs opacity-70">
          © {new Date().getFullYear()} WIVIPET. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
}
