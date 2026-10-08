import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { PageShell } from "@/components/page-shell";
import { categories } from "@/lib/wivipet-data";

export const Route = createFileRoute("/vytvorit-poziadavku")({
  head: () => ({
    meta: [
      { title: "Vytvoriť požiadavku na službu | WIVIPET" },
      {
        name: "description",
        content:
          "Opíš, čo tvoj miláčik potrebuje, a nechaj poskytovateľov v tvojom okolí, aby sa ti ozvali.",
      },
      { property: "og:title", content: "Vytvoriť požiadavku na službu | WIVIPET" },
      {
        property: "og:description",
        content: "Zadaj požiadavku a opatrovatelia sa ti ozvú sami.",
      },
    ],
  }),
  component: CreateRequest,
});

function CreateRequest() {
  const [category, setCategory] = useState<string>(categories[3]);

  return (
    <PageShell
      title="Vytvoriť požiadavku"
      lead="Napíš, čo potrebuješ, a poskytovatelia v tvojom okolí sa ti ozvú."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Požiadavka bola odoslaná 🐾");
        }}
        className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 shadow-card"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Akú službu hľadáš?</span>
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
            <span className="text-sm font-medium">Lokalita</span>
            <input
              required
              placeholder="Napr. Košice"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Od</span>
            <input
              type="date"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Do</span>
            <input
              type="date"
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">Popis požiadavky</span>
            <textarea
              required
              rows={5}
              placeholder="Napr. potrebujem opatrovanie pre dvojročného labradora počas víkendu."
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">Kontaktný e-mail</span>
            <input
              type="email"
              required
              className="mt-2 w-full rounded-md border border-input px-4 py-3 text-sm outline-none focus:border-ring"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-7 w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Odoslať požiadavku
        </button>
      </form>
    </PageShell>
  );
}
