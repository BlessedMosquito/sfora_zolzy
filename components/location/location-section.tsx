import CookieSettingsButton from "@/components/cookie-consent/cookie-settings-button";
import MapEmbed from "@/components/location/map-embed";
import { hasMapEmbed, MAP_EMBED_URL } from "@/lib/location";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import type { ReactNode } from "react";

type LocationSectionProps = {
  // Rendered next to the map on desktop and below it on mobile.
  children?: ReactNode;
  className?: string;
};

export default function LocationSection({
  children,
  className,
}: LocationSectionProps) {
  return (
    <section
      aria-labelledby="dojazd-heading"
      className={cn("w-full", className)}
      id="dojazd"
    >
      <div className="max-w-2xl">
        <h2
          className="text-3xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl"
          id="dojazd-heading"
        >
          Jak nas znaleźć?
        </h2>
      </div>

      <div className="mt-10 grid gap-12 lg:mt-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
        <div className="flex flex-col gap-3">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-white/50 shadow-sm ring-1 ring-foreground/10 md:h-96 lg:h-auto lg:min-h-[22rem] lg:flex-1">
            {hasMapEmbed ? (
              <MapEmbed
                src={MAP_EMBED_URL}
                title="Mapa dojazdu do hodowli Sfora Zołzy"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-foreground/10">
                  <MapPin
                    aria-hidden="true"
                    className="size-6 text-foreground/60"
                  />
                </span>
                <p className="text-lg font-medium">Mapa wkrótce</p>
                <p className="max-w-xs text-sm text-foreground/55">
                  Mapa dojazdu zostanie wkrótce udostępniona.
                </p>
              </div>
            )}
          </div>
          {hasMapEmbed && <CookieSettingsButton className="self-start" />}
        </div>
        {children}
      </div>
    </section>
  );
}
