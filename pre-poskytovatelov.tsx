import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/pre-poskytovatelov")({
  head: () => ({
    meta: [
      { title: "Staň sa poskytovateľom služieb | WIVIPET" },
      {
        name: "description",
        content:
          "Ponúkaš opatrovanie, venčenie či strihanie? Vytvor si profil na WIVIPET a získaj nových zákazníkov.",
      },
      { property: "og:title", content: "Staň sa poskytovateľom služieb na WIVIPET" },
      {
        property: "og:description",
        content: "Zarábaj tým, čo miluješ. Vytvor si profil a buduj si svoje meno.",
      },
    ],
  }),
  component: ForProviders,
});

const benefits = [
  {
    title: "💜 Zarábaj tým, čo miluješ",
    text: "Nastav si vlastné ceny a pracuj vtedy, keď ti to vyhovuje.",
  },
  {
    title: "🐾 Vlastný profil",
    text: "Predstav svoje skúsenosti, fotky a služby na jednom prehľadnom mieste.",
  },
  {
    title: "⭐ Reálne hodnotenia",
    text: "Každá spokojná návšteva ti pomáha budovať dôveryhodné meno.",
  },
  {
    title: "🤝 Bez provízií",
    text: "Dohoda so zákazníkom je priama – WIVIPET si neberie podiel z tvojej práce.",
  },
];

function ForProviders() {
  return (
    <PageShell
      title="Ponúkaš služby pre zvieratá?"
      lead="Zarábaj tým, čo miluješ. Získaj zákazníkov a buduj si vlastný profil."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
            <h2 className="font-display text-lg font-semibold">{b.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-primary-soft p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-primary-deep">
          Pripravený začať? 🐾
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-secondary-foreground">
          Vyplň svoj profil, pridaj službu a prvé požiadavky môžu prísť už dnes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/pridaj-sluzbu"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Pridaj službu
          </Link>
          <Link
            to="/registracia"
            className="rounded-md border border-primary bg-card px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent"
          >
            Registrovať sa
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
