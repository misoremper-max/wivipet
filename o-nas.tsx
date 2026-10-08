import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás – kto sme a prečo WIVIPET | WIVIPET" },
      {
        name: "description",
        content:
          "WIVIPET spája majiteľov zvierat so spoľahlivými opatrovateľmi a poskytovateľmi služieb na Slovensku.",
      },
      { property: "og:title", content: "O nás – kto sme a prečo WIVIPET" },
      {
        property: "og:description",
        content: "Naša misia je, aby každý miláčik mal starostlivosť, akú si zaslúži.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      title="O nás"
      lead="Sme slovenská platforma, ktorá spája majiteľov zvierat s ľuďmi, ktorí sa o ne dokážu postarať."
    >
      <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base">
        <p>
          WIVIPET vznikol z jednoduchej potreby – nájsť si spoľahlivého opatrovateľa pre svojho
          psíka bez zdĺhavého hľadania v skupinách na sociálnych sieťach. Chceli sme miesto, kde sú
          všetky služby pre zvieratá pohromade a kde si majiteľ vie rýchlo overiť, komu svojho
          miláčika zveruje.
        </p>
        <p>
          Dnes na WIVIPET nájdeš opatrovanie doma, venčenie, strihanie a úpravu, výcvik, pet taxi,
          veterinárov, útulky aj pomoc pri stratách a nálezoch. Každý poskytovateľ si buduje vlastný
          profil s hodnoteniami od skutočných majiteľov.
        </p>

        <div className="grid gap-5 pt-4 sm:grid-cols-3">
          {[
            { value: "12", label: "kategórií služieb" },
            { value: "100 %", label: "priama dohoda bez provízií" },
            { value: "8", label: "krajov Slovenska" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-card"
            >
              <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="pt-6 font-display text-xl font-semibold text-foreground">Naša misia</h2>
        <p>
          Veríme, že starostlivosť o zvieratá má byť transparentná, dostupná a ľudská. Preto
          nesprostredkúvame platby ani neúčtujeme provízie – dohodu uzatvárate priamo medzi sebou.
        </p>
      </div>
    </PageShell>
  );
}
