import RoundedPhoto from "@/components/rounded-photo/rounded-photo";

// Add a `src` (e.g. "/training1.jpg") once the photos are ready; without it
// an empty frame is shown.
const photos: { caption: string; src?: string }[] = [
  { caption: "Posłuszeństwo" },
  { caption: "Chodzenie na smyczy" },
  { caption: "Socjalizacja" },
];

export default function TrainingPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 py-16 md:px-8 md:py-20 lg:px-12">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] md:text-6xl lg:text-7xl">
          Szkolenia
        </h1>
        <p className="paragraph-lead">
          Pomagamy właścicielom zbudować z psem dobrą relację od pierwszych dni
          w nowym domu. Uczymy podstaw posłuszeństwa, spokojnego chodzenia na
          smyczy i zachowania w nowych sytuacjach, zawsze z użyciem pozytywnych
          metod.
        </p>
      </section>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {photos.map((photo) => (
          <RoundedPhoto
            alt={photo.caption}
            caption={photo.caption}
            key={photo.caption}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 400px"
            src={photo.src}
          />
        ))}
      </div>
    </main>
  );
}
