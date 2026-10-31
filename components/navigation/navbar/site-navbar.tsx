"use client";

import type { FloatingNavbarItem } from "@/components/navigation/navbar/navbar";
import FloatingNavbar from "@/components/navigation/navbar/navbar";
import { Home, Info, Mail, PawPrint } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS: FloatingNavbarItem[] = [
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

export default function SiteNavbar() {
  const pathname = usePathname();
  const activeId =
    NAV_ITEMS.find((item) => item.href === pathname)?.id ?? "home";

  return (
    <FloatingNavbar
      activeId={activeId}
      className="relative top-0 mx-0 w-full justify-center md:w-fit md:justify-start"
      items={NAV_ITEMS}
      position="top"
    />
  );
}
