"use client";

import { cn } from "@/lib/utils";
import {
  GraduationCap,
  HeartHandshake,
  Home,
  Info,
  Mail,
  Menu,
  PawPrint,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useId, useRef, useState } from "react";

const SIDEBAR_ITEMS = [
  {
    href: "/",
    icon: <Home className="size-4" />,
    id: "home",
    label: "Strona główna",
  },
  {
    href: "/pages/about",
    icon: <Info className="size-4" />,
    id: "about",
    label: "O nas",
  },
  {
    href: "/pages/puppies",
    icon: <PawPrint className="size-4" />,
    id: "puppies",
    label: "Szczenięta",
  },
  {
    href: "/pages/training",
    icon: <GraduationCap className="size-4" />,
    id: "training",
    label: "Szkolenia",
  },
  {
    href: "/pages/dog-therapy",
    icon: <HeartHandshake className="size-4" />,
    id: "dog-therapy",
    label: "Dogoterapia",
  },
  {
    href: "/pages/contact",
    icon: <Mail className="size-4" />,
    id: "contact",
    label: "Kontakt",
  },
];

export type SidebarProps = {
  className?: string;
};

// A modal <dialog> drawer (styles in globals.css under `.drawer`). The
// browser makes the page inert, traps focus and restores it to the trigger
// on close; scroll snap gives the swipe-to-close gesture.
export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const drawerId = useId();
  const drawerRef = useRef<HTMLDialogElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openedAtRef = useRef(0);

  const openDrawer = () => {
    openedAtRef.current = performance.now();
    drawerRef.current?.showModal();
    // showModal() would focus the scroller (scroll containers are
    // focusable), so move focus to the close button explicitly.
    closeButtonRef.current?.focus({ preventScroll: true });
    const scroller = scrollerRef.current;
    scroller?.scrollTo({ behavior: "auto", left: scroller.scrollWidth });
  };

  // Slides the sheet out; the observer below closes the dialog once the
  // sheet has left the screen, so the slide-out stays visible.
  const closeDrawer = () => {
    scrollerRef.current?.scrollTo({ behavior: "auto", left: 0 });
  };

  useEffect(() => {
    const drawer = drawerRef.current;
    const scroller = scrollerRef.current;
    const sheet = sheetRef.current;
    if (!drawer || !scroller || !sheet) {
      return;
    }

    // Swipes, taps and programmatic scrolls all end up here.
    const visibleThreshold = 1 / window.innerWidth;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1);
        if (!entry) {
          return;
        }
        if (entry.intersectionRatio < visibleThreshold) {
          if (drawer.open) {
            drawer.close();
          }
          setIsOpen(false);
        } else if (entry.intersectionRatio === 1) {
          setIsOpen(true);
        }
      },
      { root: drawer, threshold: [visibleThreshold, 1] },
    );
    observer.observe(sheet);

    // Escape slides the sheet out instead of closing instantly.
    const handleCancel = (event: Event) => {
      if (event.cancelable) {
        event.preventDefault();
        closeDrawer();
      }
    };
    drawer.addEventListener("cancel", handleCancel);

    // Backdrop fade for browsers without scroll-driven animations.
    let handleScroll: (() => void) | undefined;
    if (!CSS.supports("animation-timeline: scroll()")) {
      handleScroll = () => {
        const ratio = scroller.scrollLeft / sheet.offsetWidth;
        drawer.style.setProperty("--drawer-backdrop", String(ratio));
      };
      scroller.addEventListener("scroll", handleScroll);
    }

    return () => {
      observer.disconnect();
      drawer.removeEventListener("cancel", handleCancel);
      if (handleScroll) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // A tap outside the sheet lands on the dialog itself. Taps right after
  // opening are ignored: the opening tap can arrive again as a ghost click.
  const handleDrawerClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (performance.now() - openedAtRef.current < 400) {
      return;
    }
    if (!sheetRef.current?.contains(event.target as Node)) {
      closeDrawer();
    }
  };

  return (
    <>
      <button
        aria-controls={drawerId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Otwórz menu"
        className={cn(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-[background-color,scale] duration-150 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95 motion-reduce:active:scale-100 reduce-transparency:bg-background reduce-transparency:backdrop-blur-none",
          className,
        )}
        onClick={openDrawer}
        type="button"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <dialog
        aria-label="Menu strony"
        className="drawer"
        id={drawerId}
        onClick={handleDrawerClick}
        ref={drawerRef}
      >
        <div className="drawer-scroller" ref={scrollerRef}>
          <nav
            aria-label="Nawigacja"
            className="drawer-sheet flex flex-col border-l border-foreground/10 bg-background/75 p-6 shadow-2xl backdrop-blur-xl reduce-transparency:bg-background reduce-transparency:backdrop-blur-none"
            ref={sheetRef}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="caption">Menu</p>
              <button
                aria-label="Zamknij menu"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                onClick={closeDrawer}
                ref={closeButtonRef}
                type="button"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-2">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive = item.href === pathname;

                return (
                  <li key={item.id}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-medium transition-[background-color,color,scale] duration-150 active:scale-[0.98] motion-reduce:active:scale-100",
                        isActive
                          ? "bg-foreground/10 text-foreground"
                          : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
                      )}
                      href={item.href}
                      onClick={closeDrawer}
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background/60"
                      >
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto border-t border-foreground/10 pt-6">
              <p className="caption-muted">Sfora Zołzy</p>
              <p className="paragraph-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
