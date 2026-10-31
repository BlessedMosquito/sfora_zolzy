import ContactSection from "@/components/contact/contact-section";
import LocationSection from "@/components/location/location-section";

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-10">
      <LocationSection>
        <ContactSection />
      </LocationSection>
    </main>
  );
}
