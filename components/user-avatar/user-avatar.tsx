import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

type UserAvatarProps = {
  alt?: string;
  className?: string;
  src?: string | StaticImageData;
};

export default function UserAvatar({ alt = "", className, src }: UserAvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-on-brand/70 ring-2 ring-white/80",
        className,
      )}
    >
      {src ? (
        <Image alt={alt} className="object-cover" fill sizes="56px" src={src} />
      ) : (
        <User aria-hidden="true" className="size-1/2" />
      )}
    </span>
  );
}
