"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

// Category name used by components that load third-party content.
export const MAPS_CATEGORY = "maps";

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: { enabled: true, readOnly: true },
        [MAPS_CATEGORY]: {},
      },
      guiOptions: {
        consentModal: { layout: "box", position: "bottom left" },
        preferencesModal: { layout: "box" },
      },
      language: {
        default: "pl",
        translations: {
          pl: {
            consentModal: {
              title: "Używamy plików cookie",
              description:
                "Strona korzysta z niezbędnych plików cookie. Za Twoją zgodą pokażemy też mapę Google, która zapisuje własne pliki cookie.",
              acceptAllBtn: "Akceptuj wszystkie",
              acceptNecessaryBtn: "Tylko niezbędne",
              showPreferencesBtn: "Ustawienia",
            },
            preferencesModal: {
              title: "Ustawienia plików cookie",
              acceptAllBtn: "Akceptuj wszystkie",
              acceptNecessaryBtn: "Odrzuć wszystkie",
              savePreferencesBtn: "Zapisz ustawienia",
              closeIconLabel: "Zamknij",
              sections: [
                {
                  description:
                    "Wybierz, na które pliki cookie się zgadzasz. Ustawienia możesz zmienić w każdej chwili.",
                },
                {
                  title: "Niezbędne",
                  description:
                    "Potrzebne do działania strony i zapamiętania Twojego wyboru. Nie można ich wyłączyć.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Mapy Google",
                  description:
                    "Wyświetlanie mapy dojazdu na stronie Kontakt. Google może zapisywać własne pliki cookie.",
                  linkedCategory: MAPS_CATEGORY,
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
