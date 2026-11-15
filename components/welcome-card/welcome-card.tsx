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
        "rounded-3xl border border-white/60 bg-white/55 px-5 py-4 text-base leading-relaxed text-foreground shadow-[0_20px_40px_-20px_rgb(0_0_0/0.35)] backdrop-blur-xl backdrop-saturate-150 md:px-6 md:py-5 md:text-lg reduce-transparency:bg-[#fbf9f1] reduce-transparency:backdrop-blur-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
