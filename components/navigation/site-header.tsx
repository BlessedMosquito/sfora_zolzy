import SiteNavbar from "@/components/navigation/navbar/site-navbar";
import Sidebar from "@/components/navigation/sidebar";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 flex-col gap-6 px-6 pt-6 md:px-8 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:pt-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          className="shrink-0 text-4xl font-semibold leading-none tracking-[-0.07em] md:text-5xl"
          href="/"
        >
          Sfora Zołzy
        </Link>
        <Sidebar className="lg:hidden" />
      </div>
      <span className="hidden h-10 w-px bg-foreground/15 lg:block" />
      <div className="hidden lg:contents">
        <SiteNavbar />
      </div>
    </header>
  );
}
