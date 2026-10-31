import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type WelcomeCardProps = {
  children: ReactNode;
  className?: string;
};

export default function WelcomeCard({ children, className }: WelcomeCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-black/40 px-5 py-4 text-base leading-relaxed text-white shadow-lg backdrop-blur-md md:px-6 md:py-5 md:text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
