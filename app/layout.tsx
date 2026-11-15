import CookieConsentBanner from "@/components/cookie-consent/cookie-consent-banner";
import SiteHeader from "@/components/navigation/site-header";
import type { Metadata, Viewport } from "next";
import { Bitter, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

// Slab serif for headings, echoing the lettering in the kennel's logo.
const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Sfora Zołzy",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export const viewport: Viewport = {
  themeColor: "#ede8d0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
