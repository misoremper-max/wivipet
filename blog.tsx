import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog o starostlivosti o zvieratá | WIVIPET" },
      {
        name: "description",
        content:
          "Tipy a rady o opatrovaní, venčení, výcviku a zdraví psíkov a mačiek od komunity WIVIPET.",
      },
      { property: "og:title", content: "Blog o starostlivosti o zvieratá | WIVIPET" },
      {
        property: "og:description",
        content: "Praktické rady pre majiteľov psíkov a mačiek.",
      },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "🐾 Vitaj na WIVIPET – starostlivosť pre tvojho miláčika",
    date: "12. máj 2026",
    excerpt:
      "Prečo sme platformu vytvorili a ako ti pomôže nájsť spoľahlivého opatrovateľa v tvojom okolí.",
  },
  {
    title: "Ako vybrať správneho opatrovateľa pre psíka",
    date: "28. máj 2026",
    excerpt:
      "Na čo sa pýtať pri prvom kontakte, čo si overiť a ako pripraviť psíka na prvé opatrovanie.",
  },
  {
    title: "Venčenie v lete: 7 pravidiel, na ktoré sa často zabúda",
    date: "14. jún 2026",
    excerpt: "Horúci asfalt, pitný režim a najlepšie časy na prechádzku počas letných dní.",
  },
  {
    title: "Prvá návšteva psieho salónu bez stresu",
    date: "3. júl 2026",
    excerpt: "Ako pripraviť chlpáčika na strihanie a čo od úpravy realisticky očakávať.",
  },
];

function Blog() {
  return (
    <PageShell title="Blog" lead="Tipy, rady a novinky zo sveta starostlivosti o miláčikov.">
      <div className="mx-auto grid max-w-4xl gap-5">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-0.5"
          >
            <p className="text-xs uppercase tracking-wide text-primary">{post.date}</p>
            <h2 className="mt-2 font-display text-xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
