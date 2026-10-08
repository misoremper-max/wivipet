import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/obnovit-heslo")({
  head: () => ({
    meta: [
      { title: "Obnoviť heslo k účtu | WIVIPET" },
      {
        name: "description",
        content: "Zadaj svoj e-mail a pošleme ti odkaz na vytvorenie nového hesla k WIVIPET účtu.",
      },
      { property: "og:title", content: "Obnoviť heslo k účtu | WIVIPET" },
      { property: "og:description", content: "Obnovenie hesla k WIVIPET účtu." },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  return (
    <PageShell
      title="Obnoviť heslo"
      lead="Zadajte svoje používateľské meno alebo e-mailovú adresu, na váš e-mail dostanete odkaz na vytvorenie nového hesla."
    >
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

        <button
          type="submit"
          className="mt-7 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Odoslať e-mail
        </button>
      </form>
    </PageShell>
  );
}
