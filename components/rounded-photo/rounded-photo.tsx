import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

type RoundedPhotoProps = {
  alt?: string;
  caption?: string;
  className?: string;
  sizes?: string;
  src?: string | StaticImageData;
};

// Plain photo with rounded corners, styled like the map and contact cards.
// Shows an empty frame until a `src` is given.
export default function RoundedPhoto({
  alt = "",
  caption,
  className,
  sizes = "(max-width: 768px) 90vw, 50vw",
  src,
}: RoundedPhotoProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/50 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.4)] ring-1 ring-foreground/10">
        {src ? (
          <Image
            alt={alt}
            className="object-cover"
            fill
            sizes={sizes}
            src={src}
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-foreground/10">
              <ImageIcon
                aria-hidden="true"
                className="size-6 text-foreground/45"
              />
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 px-1 text-base font-medium text-foreground/75">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
