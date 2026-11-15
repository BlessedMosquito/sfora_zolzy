import RoundedPhoto from "@/components/rounded-photo/rounded-photo";
import { cn } from "@/lib/utils";

// Add a `src` (e.g. "/therapy1.jpg") once the photos are ready; without it
// an empty frame is shown.
const activities: {
  alt: string;
  description: string;
  src?: string;
  title: string;
}[] = [
  {
    alt: "Zajęcia z dziećmi",
    description:
      "Kontakt z psem pomaga dzieciom się otworzyć, ćwiczyć koncentrację i budować pewność siebie. Zajęcia dopasowujemy do wieku i potrzeb każdego dziecka.",
    title: "Dla dzieci",
  },
  {
    alt: "Wizyty u seniorów",
    description:
      "Odwiedzamy domy seniora i ośrodki opieki. Spotkania z psem przynoszą radość, pobudzają do ruchu i rozmowy, a często przywołują dobre wspomnienia.",
    title: "Dla seniorów",
  },
  {
    alt: "Wsparcie w terapii",
    description:
      "Wspieramy terapeutów i rehabilitantów. Obecność spokojnego, przygotowanego psa motywuje do ćwiczeń i zmniejsza stres podczas zajęć.",
    title: "Wsparcie terapii",
  },
];

export default function DogTherapyPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 py-16 md:px-8 md:py-20 lg:gap-24 lg:px-12">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-6xl lg:text-7xl">
          Dogoterapia
        </h1>
        <p className="paragraph-lead">
          Nasze psy to nie tylko członkowie rodziny, ale też przygotowani
          pomocnicy w terapii. Spokojne, zrównoważone i przyzwyczajone do nowych
          miejsc wspierają dzieci, seniorów i osoby w trakcie rehabilitacji.
        </p>
      </section>

      {/* Zig-zag rows: photo and text swap sides on every other row. */}
      {activities.map((activity, index) => (
        <section
          className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          key={activity.title}
        >
          <RoundedPhoto
            alt={activity.alt}
            className={cn(index % 2 === 1 && "md:order-last")}
            sizes="(max-width: 768px) 90vw, 600px"
            src={activity.src}
          />
          <div className="max-w-md">
            <p className="caption">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.015em] md:text-4xl">
              {activity.title}
            </h2>
            <p className="paragraph-lead mt-4">{activity.description}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
