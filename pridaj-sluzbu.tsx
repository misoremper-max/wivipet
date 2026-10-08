import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { PageShell } from "@/components/page-shell";
import { categories } from "@/lib/wivipet-data";

export const Route = createFileRoute("/pridaj-sluzbu")({
  head: () => ({
    meta: [
      { title: "Pridaj službu pre zvieratá | WIVIPET" },
      {
        name: "description",
        content:
          "Vytvor inzerát svojej služby – opatrovanie, venčenie, strihanie, výcvik či pet taxi – a získaj zákazníkov.",
      },
      { property: "og:title", content: "Pridaj službu pre zvieratá | WIVIPET" },
      { property: "og:description", content: "Zverejni svoju službu na WIVIPET za pár minút." },
    ],
  }),
  component: AddListing,
});

function AddListing() {
  const [category, setCategory] = useState<string>(categories[1]);

  return (
    <PageShell
      title="Pridaj službu"
      lead="Predstav svoju službu majiteľom zvierat v tvojom okolí."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Služba bola pripravená na zverejnenie 🐾");
        }}
        className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 shadow-card"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">Názov služby</span>
            <input
              required
              placeholder="Napr. Opatrovanie psíkov u mňa doma"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Kategória</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            >
              {categories.slice(1).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium">Mesto / lokalita</span>
            <input
              required
              placeholder="Napr. Bratislava – Ružinov"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Cena</span>
            <input
              placeholder="Napr. od 18 € / deň"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Telefón</span>
            <input
              type="tel"
              required
              placeholder="+421 900 000 000"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">Popis služby</span>
            <textarea
              required
              rows={5}
              placeholder="Napíš niečo o svojich skúsenostiach a o tom, čo zákazníkom nabízaš."
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-7 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Zverejniť službu
        </button>
      </form>
    </PageShell>
  );
}
