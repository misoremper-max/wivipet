import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/registracia")({
  head: () => ({
    meta: [
      { title: "Registrovať sa a vytvoriť profil | WIVIPET" },
      {
        name: "description",
        content:
          "Vytvor si účet na WIVIPET a začni ponúkať služby pre zvieratá alebo hľadať opatrovanie.",
      },
      { property: "og:title", content: "Registrovať sa a vytvoriť profil | WIVIPET" },
      { property: "og:description", content: "Vytvor si bezplatný WIVIPET účet." },
    ],
  }),
  component: Register,
});

function Register() {
  const [show, setShow] = useState(false);

  return (
    <PageShell title="Registrovať sa" lead="Vytvor si účet a pripoj sa ku komunite WIVIPET.">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 shadow-card"
      >
        <label className="block">
          <span className="text-sm font-medium">E-mail</span>
          <input
            type="email"
            required
            className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
          />
        </label>

        <label className="mt-5 block">
          <span className="text-sm font-medium">Heslo</span>
          <div className="mt-2 flex items-center rounded-md border border-input focus-within:border-ring">
            <input
              type={show ? "text" : "password"}
              required
              className="w-full bg-transparent px-4 py-3 text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="flex items-center gap-1.5 px-3 text-xs text-primary"
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              Zobraziť
            </button>
          </div>
        </label>

        <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" required className="mt-1 size-4 accent-primary" />
          <span>
            Súhlasím s{" "}
            <Link to="/obchodne-podmienky" className="text-primary hover:underline">
              všeobecnými obchodnými podmienkami
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="mt-7 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Registrovať sa
        </button>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Už máte účet?{" "}
          <Link to="/prihlasenie" className="font-medium text-primary hover:underline">
            Prihlásiť sa
          </Link>
        </p>
      </form>
    </PageShell>
  );
}
