"use client";

import { MAPS_CATEGORY } from "@/components/cookie-consent/cookie-consent-banner";
import SmoothButton from "@/components/smoothui/smooth-button";
import { MapPin } from "lucide-react";
import { useSyncExternalStore } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

const CONSENT_EVENTS = ["cc:onConsent", "cc:onChange"];

const subscribeToConsent = (onChange: () => void) => {
  for (const event of CONSENT_EVENTS) {
    window.addEventListener(event, onChange);
  }
  return () => {
    for (const event of CONSENT_EVENTS) {
      window.removeEventListener(event, onChange);
    }
  };
};

const readMapsConsent = () => CookieConsent.acceptedCategory(MAPS_CATEGORY);

type MapEmbedProps = {
  src: string;
  title: string;
};

// Google Maps sets third-party cookies, so the iframe loads only after the
// visitor accepts the "maps" category in the cookie banner.
export default function MapEmbed({ src, title }: MapEmbedProps) {
  const hasConsent = useSyncExternalStore(
    subscribeToConsent,
    readMapsConsent,
    () => false,
  );

  if (hasConsent) {
    return (
      <iframe
        allowFullScreen
        className="absolute inset-0 size-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        title={title}
      />
    );
  }

  return (
    <div className="flex size-full flex-col items-center justify-center gap-3 px-6 text-center">
      <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-foreground/10">
        <MapPin aria-hidden="true" className="size-6 text-foreground/60" />
      </span>
      <p className="text-lg font-medium">Mapa dojazdu</p>
      <p className="max-w-xs text-sm text-foreground/55">
        Mapa jest dostarczana przez Google, który może zapisywać pliki cookie
        na Twoim urządzeniu.
      </p>
      <SmoothButton
        className="mt-2"
        color="accent"
        onClick={() => CookieConsent.acceptCategory(MAPS_CATEGORY)}
        shape="pill"
        variant="candy"
      >
        Pokaż mapę
      </SmoothButton>
    </div>
  );
}
