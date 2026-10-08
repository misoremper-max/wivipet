import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, FilePlus2, LogIn, Menu, X } from "lucide-react";
import logoAsset from "@/assets/wivipet-logo.png.asset.json";
const logoImg = logoAsset.url;

const dropdowns = [
  {
    label: "Ponúkaš službu?",
    items: [
      { label: "Stať sa poskytovateľom", to: "/pre-poskytovatelov" },
      { label: "Pridaj službu", to: "/pridaj-sluzbu" },
      { label: "Bezpečnosť a pravidlá", href: "https://wivipet.sk/bezpecnost-a-kodex-komunity-wivipet/" },
      { label: "Finančné pravidlá a zárobky", href: "https://wivipet.sk/vyplaty-pre-poskytovatelov-wivipet/" },
      { label: "Členské plány", href: "https://wivipet.sk/stranky-ponuky-clenstva/" },
      { label: "Dopyty zákazníkov", href: "https://wivipet.sk/requests/" },
      { label: "Transparentný profil a budovanie dôvery", href: "https://wivipet.sk/transparentny-profil-a-budovanie-dovery/" },
      { label: "Často kladené otázky (FAQ)", href: "https://wivipet.sk/casto-kladene-otazky-faq/" },
    ],
  },
  {
    label: "Hľadáš službu?",
    items: [
      { label: "Ako to funguje", to: "/ako-to-funguje" },
      { label: "Ponuka služieb", to: "/ponuka-sluzieb" },
      { label: "Ako vybrať správnu službu", href: "https://wivipet.sk/sprievodca-sluzbami-ako-vybrat-to-spravne-pre-vasho-milacika/" },
      { label: "Bezpečnosť a pravidlá", href: "https://wivipet.sk/bezpecnost-a-kodex-komunity-wivipet/" },
      { label: "Ako napísať recenziu", href: "https://wivipet.sk/ako-napisat-recenziu/" },
      { label: "Poskytovatelia služieb", href: "https://wivipet.sk/poskytovatelia-sluzieb/" },
      { label: "Ako napísať požiadavku na službu", href: "https://wivipet.sk/%f0%9f%90%be-ako-funguje-poziadavka-dopyt-od-zakaznikov-na-wivipet/" },
      { label: "Často kladené otázky (FAQ)", href: "https://wivipet.sk/casto-kladene-otazky-faq/" },
    ],
  },
  {
    label: "Pomoc a komunita",
    items: [
      { label: "Zvieratá na adopciu", href: "https://wivipet.sk/listing-category/zvierata-na-adopciu/" },
      { label: "Pomoc a dobrovoľníctvo", href: "https://wivipet.sk/listing-category/pomoc-dobrovolnictvo/" },
      { label: "Preukaz zvieratka", href: "https://wivipet.sk/preukaz-zvieratka/" },
    ],
  },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="WIVIPET domov">
      <img src={logoImg} alt="WIVIPET" width={226} height={52} className="h-10 w-auto" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-header">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Hlavná navigácia">
          <Link
            to="/o-nas"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            O nás
          </Link>

          {dropdowns.map((group) => (
            <div key={group.label} className="group relative">
              <button className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                <span aria-hidden="true">🐾</span>
                {group.label}
                <ChevronDown className="size-4" />
              </button>
              <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  "to" in item ? (
                    <Link key={item.label} to={item.to} className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground">{item.label}</Link>
                  ) : (
                    <a key={item.label} href={item.href} className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent hover:text-accent-foreground">{item.label}</a>
                  )
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/blog"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link
            to="/ponuka-sluzieb"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Ponuka služieb
          </Link>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            to="/prihlasenie"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <LogIn className="size-4" />
            Prihlásiť sa
          </Link>
          <Link
            to="/pridaj-sluzbu"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Pridaj službu
          </Link>
          <Link
            to="/vytvorit-poziadavku"
            className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <FilePlus2 className="size-4 text-muted-foreground" />
            Vytvoriť požiadavku
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
          aria-label="Otvoriť menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobilná navigácia">
            {[
              { label: "O nás", to: "/o-nas" },
              { label: "Ako to funguje", to: "/ako-to-funguje" },
              { label: "Pre poskytovateľov", to: "/pre-poskytovatelov" },
              { label: "Blog", to: "/blog" },
              { label: "Ponuka služieb", to: "/ponuka-sluzieb" },
              { label: "Prihlásiť sa", to: "/prihlasenie" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link
                to="/pridaj-sluzbu"
                onClick={() => setOpen(false)}
                className="rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Pridaj službu
              </Link>
              <Link
                to="/vytvorit-poziadavku"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground"
              >
                Vytvoriť požiadavku
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
