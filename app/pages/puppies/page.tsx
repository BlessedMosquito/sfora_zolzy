import Polaroid from "@/components/polaroid/polaroid";

// Sample details: replace with the real puppies. Empty fields show a dash.
const puppies = [
  {
    name: "Luna",
    age: "8 tygodni",
    color: "czarne podpalane",
    rotate: -2,
    src: "/puppy1.jpg",
  },
  {
    name: "Max",
    age: "10 tygodni",
    color: "czaprakowe",
    rotate: 1.5,
    src: "/puppy2.jpg",
  },
  {
    name: "Bella",
    age: "9 tygodni",
    color: "wilczaste",
    rotate: -1,
    src: "/puppy3.jpg",
  },
];

export default function PuppiesPage() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-16 px-6 py-16 md:px-8 md:py-20 lg:px-12">
      <section className="max-w-2xl self-start">
        <h1 className="text-4xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">
          {"Poznaj nasze psiaki"}
        </h1>
      </section>
      {puppies.map((puppy, index) => {
        const details = [
          { term: "Imię", value: puppy.name },
          { term: "Wiek", value: puppy.age },
          { term: "Umaszczenie", value: puppy.color },
        ];

        return (
          <Polaroid
            alt={puppy.name || `Szczenię ${index + 1}`}
            caption={
              <dl className="grid w-full grid-cols-[auto_1fr] items-baseline gap-x-[5cqw] gap-y-[1.2cqw] text-left">
                {details.map(({ term, value }) => (
                  <div className="contents" key={term}>
                    <dt className="text-[2.8cqw] font-medium uppercase tracking-[0.2em] text-foreground/45">
                      {term}
                    </dt>
                    <dd className="text-[4.6cqw] leading-tight text-foreground/70">
                      {value || <span className="text-foreground/35">—</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            }
            key={puppy.src}
            preload={index === 0}
            rotate={puppy.rotate}
            sizes="(max-width: 768px) 90vw, 700px"
            src={puppy.src}
          />
        );
      })}
    </main>
  );
}
