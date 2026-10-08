import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/obchodne-podmienky")({
  head: () => ({
    meta: [
      { title: "Všeobecné obchodné podmienky | WIVIPET" },
      {
        name: "description",
        content:
          "Podmienky používania platformy WIVIPET pre majiteľov zvierat aj poskytovateľov služieb.",
      },
      { property: "og:title", content: "Všeobecné obchodné podmienky | WIVIPET" },
      { property: "og:description", content: "Pravidlá používania platformy WIVIPET." },
    ],
  }),
  component: Terms,
});

const sections = [
  {
    title: "1. Úvodné ustanovenia",
    text: "WIVIPET je online platforma, ktorá sprostredkúva kontakt medzi majiteľmi zvierat a poskytovateľmi služieb. WIVIPET nie je stranou zmluvy medzi používateľom a poskytovateľom.",
  },
  {
    title: "2. Registrácia a účet",
    text: "Používateľ je povinný uvádzať pravdivé údaje a chrániť svoje prihlasovacie údaje. Za obsah zverejneného profilu zodpovedá jeho autor.",
  },
  {
    title: "3. Služby a platby",
    text: "Cenu, rozsah a spôsob úhrady služby si dohodne používateľ priamo s poskytovateľom. Platforma neúčtuje provízie z uzatvorených dohôd.",
  },
  {
    title: "4. Hodnotenia",
    text: "Hodnotenia môžu pridávať iba používatelia, ktorí službu skutočne využili. Vulgárne či nepravdivé hodnotenia môžu byť odstránené.",
  },
  {
    title: "5. Zodpovednosť",
    text: "WIVIPET nenesie zodpovednosť za kvalitu poskytnutých služieb ani za škody vzniknuté pri ich poskytovaní.",
  },
  {
    title: "6. Ochrana osobných údajov",
    text: "Osobné údaje spracúvame v súlade s GDPR výlučne na účely prevádzky platformy a komunikácie medzi používateľmi.",
  },
];

function Terms() {
  return (
    <PageShell
      title="Všeobecné obchodné podmienky"
      lead="Prehľad pravidiel používania platformy WIVIPET."
    >
      <div className="mx-auto max-w-3xl space-y-7">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
