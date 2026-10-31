import LinkButton from "@/components/link-button/link-button";
import UserAvatar from "@/components/user-avatar/user-avatar";
import WelcomeCard from "@/components/welcome-card/welcome-card";
import { Info, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 lg:fixed"
      >
        <Image
          alt=""
          className="pointer-events-none object-cover"
          fill
          priority
          sizes="100vw"
          src="/background.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-cream/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent via-40% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-16 pt-6 md:px-8 md:pt-16 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.75fr)]">
          <section className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              Poznaj naszą hodowlę!
            </h1>

            <p className="paragraph-lead text-foreground/85">
              Poznaj nasze psiaki i umów się na pierwsze spotkanie.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 md:flex md:flex-row">
              <LinkButton
                color="accent"
                href="/pages/contact"
                icon={<Mail aria-hidden="true" />}
                shape="pill"
                size="lg"
                variant="candy"
              >
                Kontakt
              </LinkButton>
              <LinkButton
                href="/pages/about"
                icon={<Info aria-hidden="true" />}
                shape="pill"
                size="lg"
                variant="outline"
              >
                O nas
              </LinkButton>
            </div>
          </section>

          <WelcomeCard className="mx-auto w-full max-w-sm lg:p-8">
            <div className="flex items-center gap-4">
              <UserAvatar />
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                O mnie
              </h2>
            </div>
            <p className="mt-4 text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </WelcomeCard>
        </div>
      </main>
    </div>
  );
}
