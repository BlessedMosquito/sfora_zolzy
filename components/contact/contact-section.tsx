import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  emailHref,
  hasContactEmail,
  hasContactPhone,
  phoneHref,
} from "@/lib/contact";
import { KENNEL_ADDRESS_LINES } from "@/lib/location";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

type ContactSectionProps = {
  className?: string;
};

export default function ContactSection({ className }: ContactSectionProps) {
  return (
    <section
      aria-labelledby="kontakt-heading"
      className={cn("w-full", className)}
      id="kontakt"
    >
      <h2
        className="text-3xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-4xl"
        id="kontakt-heading"
      >
        Dane kontaktowe
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-6 lg:grid-cols-1 lg:gap-3">
        <ContactItem
          className="md:col-span-2 lg:col-span-1"
          icon={<MapPin aria-hidden="true" className="size-5" />}
          label="Adres"
          value={
            KENNEL_ADDRESS_LINES.length > 0
              ? KENNEL_ADDRESS_LINES.join(", ")
              : undefined
          }
        />
        <ContactItem
          href={hasContactPhone ? phoneHref : undefined}
          icon={<Phone aria-hidden="true" className="size-5" />}
          label="Telefon"
          value={hasContactPhone ? CONTACT_PHONE : undefined}
        />
        <ContactItem
          href={hasContactEmail ? emailHref : undefined}
          icon={<Mail aria-hidden="true" className="size-5" />}
          label="E-mail"
          value={hasContactEmail ? CONTACT_EMAIL : undefined}
        />
      </div>
    </section>
  );
}

type ContactItemProps = {
  className?: string;
  href?: string;
  icon: ReactNode;
  label: string;
  value?: string;
};

function ContactItem({ className, href, icon, label, value }: ContactItemProps) {
  const content = (
    <>
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-foreground/10">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="caption block">{label}</span>
        <span
          className={cn(
            "mt-1 block break-words text-lg font-medium",
            !value && "text-foreground/45",
          )}
        >
          {value ?? "Wkrótce"}
        </span>
      </span>
    </>
  );

  const cardClassName = cn(
    "flex items-center gap-4 rounded-3xl bg-white/50 p-5 ring-1 ring-foreground/10 lg:p-4",
    className,
  );

  return href ? (
    <a
      className={cn(
        cardClassName,
        "transition-colors hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
      )}
      href={href}
    >
      {content}
    </a>
  ) : (
    <div className={cardClassName}>{content}</div>
  );
}
