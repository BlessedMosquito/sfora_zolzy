import ContactSection from "@/components/contact/contact-section";
import CookieSettingsButton from "@/components/cookie-consent/cookie-settings-button";
import LocationSection from "@/components/location/location-section";

export default function ContactPage() {
  return (
    <>
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-10">
        <LocationSection>
          <ContactSection />
        </LocationSection>
      </main>
      <footer className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-foreground/10 py-6 text-sm text-foreground/55">
          <p>© Sfora Zołzy</p>
          <CookieSettingsButton />
        </div>
      </footer>
    </>
  );
}
