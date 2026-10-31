"use client";

import { cn } from "@/lib/utils";
import * as CookieConsent from "vanilla-cookieconsent";

type CookieSettingsButtonProps = {
  className?: string;
};

export default function CookieSettingsButton({
  className,
}: CookieSettingsButtonProps) {
  return (
    <button
      className={cn(
        "text-sm text-foreground/55 underline underline-offset-4 transition-colors hover:text-foreground",
        className,
      )}
      onClick={() => CookieConsent.showPreferences()}
      type="button"
    >
      Ustawienia cookies
    </button>
  );
}
