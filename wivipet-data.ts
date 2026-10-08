export const categories = [
  "Všetky kategórie",
  "✂️ Strihanie a úprava",
  "🎓 Výcvik & tréning",
  "🏠 Opatrovanie",
  "🐕 Prechádzka so psom",
  "🐾 Útulky & Adopcie",
  "🐶 Zvieratá na adopciu",
  "🤝 Pomoc a dobrovoľníctvo",
  "🚗 Pet taxi",
  "🚨 S.O.S. Straty a nálezy",
  "🛍️ Obchody & Produkty",
  "🩺 Veterinári & Zdravie",
] as const;

export type ServiceCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};
