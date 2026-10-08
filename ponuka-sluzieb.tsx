import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Phone, Star } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { categories } from "@/lib/wivipet-data";

export const Route = createFileRoute("/ponuka-sluzieb")({
  head: () => ({
    meta: [
      { title: "Ponuka služieb pre zvieratá | WIVIPET" },
      {
        name: "description",
        content:
          "Prehliadaj opatrovateľov, venčiteľov, salóny, pet taxi a veterinárov v tvojom okolí a kontaktuj ich priamo.",
      },
      { property: "og:title", content: "Ponuka služieb pre zvieratá | WIVIPET" },
      {
        property: "og:description",
        content: "Overení poskytovatelia služieb pre psíkov a mačky po celom Slovensku.",
      },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): { q?: string | undefined; cat?: string | undefined } => ({
    q: typeof s["q"] === "string" ? s["q"] : undefined,
    cat: typeof s["cat"] === "string" ? s["cat"] : undefined,
  }),
  component: Listings,
});

const listings = [
  {
    name: "Lucia – opatrovanie doma",
    category: "🏠 Opatrovanie",
    city: "Bratislava – Ružinov",
    price: "od 18 € / deň",
    rating: 4.9,
    reviews: 42,
  },
  {
    name: "Psí salón Bella",
    category: "✂️ Strihanie a úprava",
    city: "Košice – Staré Mesto",
    price: "od 30 € / úprava",
    rating: 4.8,
    reviews: 67,
  },
  {
    name: "Martin – venčenie psov",
    category: "🐕 Prechádzka so psom",
    city: "Nitra",
    price: "od 8 € / prechádzka",
    rating: 5.0,
    reviews: 23,
  },
  {
    name: "Pet Taxi Žilina",
    category: "🚗 Pet taxi",
    city: "Žilina",
    price: "od 0,80 € / km",
    rating: 4.7,
    reviews: 31,
  },
  {
    name: "Tréning s Evou",
    category: "🎓 Výcvik & tréning",
    city: "Trnava",
    price: "od 25 € / hodina",
    rating: 4.9,
    reviews: 18,
  },
  {
    name: "Veterina Zvieratko",
    category: "🩺 Veterinári & Zdravie",
    city: "Banská Bystrica",
    price: "od 20 € / konzultácia",
    rating: 4.6,
    reviews: 89,
  },
];

function Listings() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [category, setCategory] = useState<string>(
    search.cat && (categories as readonly string[]).includes(search.cat) ? search.cat : categories[0],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      const hay = `${l.name} ${l.city} ${l.category}`.toLowerCase();
      const matchesQuery = !q || q.split(/\s+/).every((w) => hay.includes(w));
      const matchesCategory = category === categories[0] || l.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <PageShell
      title="Ponuka služieb"
      lead="Vyber si poskytovateľa, ktorý ti sedí, a dohodni si detaily priamo s ním."
    >
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-card md:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Kľúčové slová alebo mesto"
          className="flex-1 rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Našli sme {filtered.length}{" "}
        {filtered.length === 1 ? "výsledok" : filtered.length < 5 ? "výsledky" : "výsledkov"}.
      </p>

      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <article
            key={l.name}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <span className="inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
              {l.category}
            </span>
            <h2 className="mt-3 font-display text-lg font-semibold">{l.name}</h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {l.city}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="size-4 text-primary" />
              {l.rating.toFixed(1)} ({l.reviews} hodnotení)
            </p>
            <p className="mt-4 font-display text-base font-semibold text-primary-deep">{l.price}</p>
            <a
              href="tel:+421900000000"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
            >
              <Phone className="size-4" />
              Kontaktovať
            </a>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Pre tento filter sme nič nenašli. Skús inú kategóriu alebo lokalitu.
        </p>
      )}
    </PageShell>
  );
}
