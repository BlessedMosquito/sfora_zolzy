"use client";

import SmoothButton from "@/components/smoothui/smooth-button";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type LinkButtonProps = Omit<
  ComponentProps<typeof SmoothButton>,
  "asChild" | "children"
> & {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
};

// Builds the <Link> on the client: a multi-child link passed from a Server
// Component to `SmoothButton asChild` doesn't arrive as a plain element, so
// asChild would render nothing after hydration.
export default function LinkButton({
  children,
  href,
  icon,
  ...props
}: LinkButtonProps) {
  return (
    <SmoothButton asChild {...props}>
      <Link href={href}>
        {icon}
        {children}
      </Link>
    </SmoothButton>
  );
}
