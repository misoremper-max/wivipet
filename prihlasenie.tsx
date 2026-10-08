import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/prihlasenie")({
  head: () => ({
    meta: [
      { title: "Prihlásiť sa do účtu | WIVIPET" },
      {
        name: "description",
        content: "Prihlás sa do svojho WIVIPET účtu a spravuj svoje služby či požiadavky.",
      },
      { property: "og:title", content: "Prihlásiť sa do účtu | WIVIPET" },
      { property: "og:description", content: "Prihlásenie do platformy WIVIPET." },
    ],
  }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);

  return (
    <PageShell title="Prihlásiť sa" lead="Vitaj späť! Prihlás sa do svojho účtu.">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 shadow-card"
      >
        <label className="block">
          <span className="text-sm font-medium">Používateľské meno alebo e-mail</span>
          <input
            type="text"
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

        <button
          type="submit"
          className="mt-7 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Prihlásiť sa
        </button>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Ešte nemáte účet?{" "}
          <Link to="/registracia" className="font-medium text-primary hover:underline">
            Registrovať sa
          </Link>
        </p>
        <p className="mt-2 text-center text-sm">
          <Link to="/obnovit-heslo" className="text-primary hover:underline">
            Zabudli ste heslo?
          </Link>
        </p>
      </form>
    </PageShell>
  );
}
