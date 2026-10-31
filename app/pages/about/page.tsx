import Polaroid from "@/components/polaroid/polaroid";

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <section className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">
            O nas
          </h1>
          <p className="paragraph-lead">
            Sfora Zołzy to rodzinna hodowla, w której psy są częścią naszego
            codziennego życia. Dbamy o zdrowie, charakter i dobrą socjalizację
            każdego szczeniaka, zanim trafi do nowego domu.
          </p>
          <p className="paragraph-lead mt-4">
            Chętnie opowiemy więcej o naszych psach i pomożemy wybrać
            szczeniaka, który najlepiej pasuje do Twojej rodziny.
          </p>
        </section>

        <Polaroid
          caption="Nasza sfora"
          className="mx-auto lg:max-w-md"
          rotate={2}
        />
      </div>
    </main>
  );
}
