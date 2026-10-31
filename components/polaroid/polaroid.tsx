import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

type PolaroidProps = {
  alt?: string;
  // Text or custom content for the bottom strip; size it with `cqw` units so
  // it scales with the card.
  caption?: ReactNode;
  className?: string;
  preload?: boolean;
  rotate?: number;
  sizes?: string;
  src?: string | StaticImageData;
};

// Proportions follow a printed Polaroid 600 (88 × 107 mm card, 79 × 77 mm
// photo): thin even borders on top and sides, a wide strip at the bottom.
export default function Polaroid({
  alt = "",
  caption,
  className,
  preload,
  rotate = 0,
  sizes = "(max-width: 768px) 90vw, 50vw",
  src,
}: PolaroidProps) {
  return (
    <figure
      className={cn(
        "@container aspect-[88/107] w-[min(100%,calc((100dvh_-_10rem)*88/107))] shrink-0 bg-[linear-gradient(160deg,#fdfdfb,#f1efe9)] p-[5.5%] shadow-[0_1px_2px_rgb(0_0_0/0.15),0_20px_40px_-15px_rgb(0_0_0/0.45)]",
        className,
      )}
      style={{ rotate: `${rotate}deg` }}
    >
      <div className="relative aspect-[79/77] w-full overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#3a3632,#1c1a18)]">
        {src ? (
          <Image
            alt={alt}
            className="object-cover"
            fill
            preload={preload}
            sizes={sizes}
            src={src}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-500">
            <ImageIcon aria-hidden className="size-[12cqw]" />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_6px_rgb(0_0_0/0.35)]" />
      </div>
      <figcaption className="flex aspect-[89/24] items-center justify-center px-[4%] text-center text-[6cqw] leading-tight text-neutral-700">
        {caption}
      </figcaption>
    </figure>
  );
}
