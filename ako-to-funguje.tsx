import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/ako-to-funguje")({
  head: () => ({
    meta: [
      { title: "Ako funguje WIVIPET | WIVIPET" },
      {
        name: "description",
        content:
          "Tri kroky k pokoju: vyhľadaj službu, kontaktuj poskytovateľa a uži si istotu, že o miláčika je postarané.",
      },
      { property: "og:title", content: "Ako funguje WIVIPET" },
      {
        property: "og:description",
        content: "Vyhľadaj, kontaktuj, uži si pokoj – bez provízií a zdĺhavého hľadania.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    title: "1. Vyhľadaj službu",
    text: "Zadaj svoju lokalitu a vyber kategóriu – od opatrovania cez venčenie až po pet taxi.",
  },
  {
    title: "2. Kontaktuj",
    text: "Prezri si profily, hodnotenia a ceny. Zavolaj alebo napíš priamo poskytovateľovi.",
  },
  {
    title: "3. Uži si pokoj 🐾",
    text: "Dohodnete si detaily naživo a ty máš istotu, že tvoj miláčik je v dobrých rukách.",
  },
];

const faq = [
  {
    q: "Platím za používanie WIVIPET?",
    a: "Vyhľadávanie a kontaktovanie poskytovateľov je pre majiteľov zvierat bezplatné.",
  },
  {
    q: "Prebieha platba cez platformu?",
    a: "Nie. Cenu aj spôsob platby si dohodnete priamo s poskytovateľom služby.",
  },
  {
    q: "Ako viem, že je opatrovateľ spoľahlivý?",
    a: "Každý profil obsahuje popis skúseností a reálne hodnotenia od majiteľov, ktorí službu využili.",
  },
];

function HowItWorks() {
  return (
    <PageShell title="Ako funguje WIVIPET?" lead="Tri kroky a o tvojho miláčika je postarané.">
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
            <h2 className="font-display text-lg font-semibold text-primary-deep">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 section-title">Časté otázky</h2>
      <div className="mx-auto mt-8 max-w-3xl space-y-4">
        {faq.map((item) => (
          <div key={item.q} className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold">{item.q}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/ponuka-sluzieb"
          className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Hľadať služby
        </Link>
      </div>
    </PageShell>
  );
}
