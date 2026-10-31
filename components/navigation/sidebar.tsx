"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Home, Info, Mail, Menu, PawPrint, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

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
    href: "/pages/contact",
    icon: <Mail className="size-4" />,
    id: "contact",
    label: "Kontakt",
  },
];

const PANEL_SPRING = {
  damping: 30,
  stiffness: 320,
  type: "spring" as const,
};

const ITEM_EASE = [0.22, 1, 0.36, 1] as const;

export type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openedAtRef = useRef(0);

  const openSidebar = () => {
    openedAtRef.current = performance.now();
    setIsOpen(true);
  };

  const closeSidebar = () => {
    if (performance.now() - openedAtRef.current < 500) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen]);

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.2, ease: ITEM_EASE },
    },
  };

  return (
    <>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Otwórz menu"
        className={cn(
          "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
          className
        )}
        onClick={openSidebar}
        ref={triggerRef}
        type="button"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              aria-hidden="true"
              className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={closeSidebar}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            />
            <motion.aside
              animate={{ x: 0 }}
              aria-label="Menu strony"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-[70] flex w-80 max-w-[85vw] flex-col border-l border-foreground/10 bg-background/75 p-6 shadow-2xl backdrop-blur-xl"
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
              id={panelId}
              initial={shouldReduceMotion ? false : { x: "100%" }}
              role="dialog"
              transition={shouldReduceMotion ? { duration: 0 } : PANEL_SPRING}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="caption">Menu</p>
                <button
                  aria-label="Zamknij menu"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  onClick={closeSidebar}
                  ref={closeButtonRef}
                  type="button"
                >
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>

              <motion.nav
                animate="visible"
                aria-label="Nawigacja"
                className="mt-10 flex flex-col gap-2"
                initial="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: shouldReduceMotion ? 0 : 0.1,
                      staggerChildren: shouldReduceMotion ? 0 : 0.05,
                    },
                  },
                }}
              >
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive = item.href === pathname;

                  return (
                    <motion.div key={item.id} variants={itemVariants}>
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-foreground/10 text-foreground"
                            : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                        )}
                        href={item.href ?? "#"}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon ? (
                          <span
                            aria-hidden="true"
                            className="flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-background/60"
                          >
                            {item.icon}
                          </span>
                        ) : null}
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="mt-auto border-t border-foreground/10 pt-6">
                <p className="caption-muted">Sfora Zołzy</p>
                <p className="paragraph-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
