import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="hero-gradient py-14 md:py-16">
          <div className="container-page text-center">
            <h1 className="font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
              {title}
            </h1>
            {lead && (
              <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/90 md:text-base">
                {lead}
              </p>
            )}
          </div>
        </section>
        <div className="container-page py-14 md:py-16">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
