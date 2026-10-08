import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, MessageCircle, PawPrint, Search } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { categories } from "@/lib/wivipet-data";
import heroImg from "@/assets/hero-pes-a-macka.jpg";
import opatrovanieImg from "@/assets/opatrovanie-doma.jpg";
import salonImg from "@/assets/psi-salon.jpg";
import prechadzkaImg from "@/assets/prechadzka.jpg";
import petTaxiImg from "@/assets/pet-taxi.jpg";
import vycvikImg from "@/assets/vycvik.jpg";
import utulkyImgAsset from "@/assets/utulky-adopcie.jpg.asset.json";
const utulkyImg = utulkyImgAsset.url;
import veterinariImgAsset from "@/assets/veterinari-zdravie.jpg.asset.json";
const veterinariImg = veterinariImgAsset.url;
import obchodyImgAsset from "@/assets/obchody-produkty.jpg.asset.json";
const obchodyImg = obchodyImgAsset.url;
import stratyImgAsset from "@/assets/straty-nalezy.jpg.asset.json";
const stratyImg = stratyImgAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WIVIPET – Opatrovanie a služby pre tvojho miláčika" },
      {
        name: "description",
        content:
          "Nájdi spoľahlivé opatrovanie, venčenie, strihanie, pet taxi a ďalšie služby pre psíka či kocúra v tvojom okolí.",
      },
      { property: "og:title", content: "WIVIPET – Opatrovanie a služby pre tvojho miláčika" },
      {
        property: "og:description",
        content: "Venčenie, opatrovanie a starostlivosť – všetko na jednom mieste.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "🏠 Opatrovanie doma",
    description: "Starostlivosť cez deň, cez noc a viac dní.",
    image: opatrovanieImg,
    alt: "Opatrovateľka hladí zlatého retrievera na pohovke",
  },
  {
    title: "✂️ Strihanie a úprava",
    description: "Všetko čo tvoj miláčik potrebuje pre dokonalý vzhľad a zdravie.",
    image: salonImg,
    alt: "Kaderníčka pre psy upravuje bieleho psíka v salóne",
  },
  {
    title: "🐕 Prechádzky",
    description: "Prechádzky pre tvojho miláčika.",
    image: prechadzkaImg,
    alt: "Zlatý retriever beží v parku s vodítkom v papuli",
  },
  {
    title: "🚗 Pet taxi",
    description: "Keď je potrebné pomôcť s prepravou tvojho miláčika.",
    image: petTaxiImg,
    alt: "Psík sedí bezpečne pripútaný v autosedačke",
  },
  {
    title: "🎓 Výcvik & tréning",
    description: "Nauč svojho miláčika základy aj triky s pomocou skúseného trénera.",
    image: vycvikImg,
    alt: "Trénerka učí border kólie sedieť na lúke",
  },
];

const steps = [
  {
    title: "Vyhľadaj službu",
    text: "Zadaj lokalitu a vyber si službu podľa svojich potrieb.",
  },
  {
    title: "Kontaktuj",
    text: "Vyber si opatrovateľa, zavolaj mu a dohodni si všetky detaily naživo.",
  },
  {
    title: "Uži si pokoj 🐾",
    text: "Tvoj miláčik je v dobrých rukách, spokojný a v bezpečí.",
  },
];

const community = [
  { title: "🐾 Útulky & Adopcie", description: "Podporte útulky vo vašom okolí a a otvorte srdce pre nového člena rodiny.", image: utulkyImg, alt: "Pes vhodný na adopciu" },
  { title: "🩺 Veterinári & Zdravie", description: "Nájdite overených zverolekárov, špecializované kliniky a pohotovostné služby.", image: veterinariImg, alt: "Veterinár vyšetruje psíka" },
  { title: "🛍️ Obchody & Produkty", description: "Objavte kvalitné krmivá, doplnky, hračky a všetko potrebné vybavenie.", image: obchodyImg, alt: "Produkty a potreby pre zvieratá" },
  { title: "🚨 S.O.S. Straty a nálezy", description: "Rýchla pomoc pri hľadaní strateného zvieratka alebo nahlásení nálezu.", image: stratyImg, alt: "Pomoc pri hľadaní strateného zvieratka" },
];

function Home() {
  const navigate = useNavigate();
  const [kw, setKw] = useState("");
  const [loc, setLoc] = useState("");
  const [cat, setCat] = useState<string>(categories[0]);
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden hero-gradient">
          <img
            src={heroImg}
            alt="Zlatý retriever a mačka na fialovom pozadí"
            width={1920}
            height={768}
            className="absolute inset-0 size-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-primary-deep/50 md:hidden" />
          <div className="absolute inset-0 hidden md:block hero-overlay" />

          <div className="container-page relative py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-3xl font-semibold text-primary-foreground md:text-5xl">
                Tvoj chlpáčik si zaslúži to najlepšie
              </h1>
              <p className="mt-5 text-base font-medium text-primary-foreground/95 md:text-lg">
                Nájdi si spoľahlivé opatrovanie a služby pre svojho miláčika v tvojom okolí.
                Venčenie, opatrovanie a starostlivosť – všetko na jednom mieste.
              </p>

              <form
                className="mx-auto mt-8 flex w-full max-w-4xl flex-col gap-2 rounded-lg bg-card p-2 shadow-search md:flex-row md:items-center md:gap-0 md:p-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate({ to: "/ponuka-sluzieb", search: { q: [kw, loc].filter(Boolean).join(" ") || undefined, cat: cat !== categories[0] ? cat : undefined } });
                }}
              >
                <label className="flex flex-1 items-center gap-2 px-4 py-3 md:border-r md:border-border">
                  <span className="sr-only">Kľúčové slová</span>
                  <Search className="size-4 shrink-0 text-muted-foreground md:hidden" />
                  <input
                    type="text"
                    placeholder="Kľúčové slová"
                    value={kw}
                    onChange={(e) => setKw(e.target.value)}
                    className="w-full bg-transparent text-sm text-card-foreground outline-none placeholder:text-muted-foreground"
                  />
                </label>

                <label className="flex flex-1 items-center gap-2 px-4 py-3 md:border-r md:border-border">
                  <span className="sr-only">Poloha</span>
                  <input
                    type="text"
                    placeholder="Poloha"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    className="w-full bg-transparent text-sm text-card-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <MapPin className="size-4 shrink-0 text-muted-foreground" />
                </label>

                <label className="flex flex-1 items-center px-4 py-3">
                  <span className="sr-only">Kategória</span>
                  <select
                    className="w-full bg-transparent text-sm text-card-foreground outline-none"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="p-1 md:pr-2">
                  <button
                    type="submit"
                    aria-label="Hľadať"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep md:size-12 md:rounded-full"
                  >
                    <span className="md:hidden">Nájdi ma</span>
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface py-16 md:py-20">
          <div className="container-page">
            <h2 className="section-title">Služby pre tvojho miláčika</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to="/ponuka-sluzieb"
                  className="group overflow-hidden rounded-xl bg-card shadow-card transition-transform hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-page">
            <h2 className="section-title">Wivipet Komunita &amp; Pomoc</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {community.map((item) => (
                <a key={item.title} href="https://wivipet.sk/listing-category/utulky-dopcie/" className="group overflow-hidden rounded-xl bg-card shadow-card transition-transform hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden"><img src={item.image} alt={item.alt} loading="lazy" width={600} height={600} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="p-5"><h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.description}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why WIVIPET */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <h2 className="section-title">Prečo si vybrať WIVIPET?</h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-7 shadow-card">
                <h3 className="font-display text-lg font-semibold">
                  🐾 Hľadáš starostlivosť pre svojho miláčika?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Nájdi spoľahlivých opatrovateľov vo svojom okolí, porovnaj ceny a dohodni sa
                  rýchlo a napriamo.
                </p>
                <Link
                  to="/ponuka-sluzieb"
                  className="mt-5 inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
                >
                  Hľadať služby
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card p-7 shadow-card">
                <h3 className="font-display text-lg font-semibold">
                  💜 Ponúkaš služby pre zvieratá?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Zarábaj tým, čo miluješ. Získaj zákazníkov a buduj si vlastný profil.
                </p>
                <Link
                  to="/pre-poskytovatelov"
                  className="mt-5 inline-flex rounded-md border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-accent"
                >
                  Ponúknuť služby
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-primary-soft p-7">
                <h3 className="font-display text-lg font-semibold text-primary-deep">
                  ✅ Prečo WIVIPET?
                </h3>
                <ul className="mt-3 space-y-3 text-sm text-secondary-foreground">
                  <li>
                    ✅ <strong>Transparentné profily</strong> s podrobnými informáciami o
                    skúsenostiach
                  </li>
                  <li>
                    🛡️ <strong>Poskytovatelia služieb s čistým štítom</strong> – každý opatrovateľ
                    buduje svoje meno na webe
                  </li>
                  <li>
                    🐾 <strong>Priama a rýchla dohoda s vybraným opatrovateľom</strong>
                  </li>
                  <li>
                    ⭐ <strong>Reálne hodnotenia</strong> a recenzie od skutočných majiteľov psíkov
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-surface py-16 md:py-20">
          <div className="container-page">
            <h2 className="section-title">Ako funguje WIVIPET?</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title} className="rounded-xl bg-card p-7 text-center shadow-card">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-soft font-display text-lg font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/ponuka-sluzieb"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                <PawPrint className="size-4" />
                Nájdi ma
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-10">
          <div className="container-page text-center">
            <p className="font-display text-base font-semibold">Zdieľajte a pomáhajte: Každé zdieľanie zvyšuje šancu na nový domov alebo rýchlejšiu pomoc!</p>
            <div className="mt-4 flex justify-center gap-3">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://wivipet.sk" aria-label="Facebook" className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Facebook className="size-4" /></a>
              <a href="https://wa.me/?text=https://wivipet.sk" aria-label="WhatsApp" className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><MessageCircle className="size-4" /></a>
              <a href="mailto:?body=https://wivipet.sk" aria-label="Email" className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Mail className="size-4" /></a>
            </div>
            <p className="mt-7 font-display text-lg font-semibold">Starostlivosť pre tvojho miláčika 🐾</p>
            <div className="mt-3 flex flex-col justify-center gap-2 sm:flex-row sm:gap-6">
              <a href="https://www.facebook.com/wivipet" className="font-medium text-primary hover:text-primary-deep">📘 Sledujte nás na Facebooku</a>
              <a href="https://www.instagram.com/wivipet_sk/" className="font-medium text-primary hover:text-primary-deep"><Instagram className="mr-1 inline size-4" /> Sledujte nás na Instagrame</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
