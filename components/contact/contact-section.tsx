import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  emailHref,
  hasContactEmail,
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
        className="text-3xl font-semibold leading-[1.05] tracking-[-0.015em] md:text-4xl"
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
        {CONTACT_PHONES.filter((phone) => phone.number).map((phone) => (
          <ContactItem
            href={phoneHref(phone.number)}
            icon={<Phone aria-hidden="true" className="size-5" />}
            key={phone.name}
            label="Telefon"
            name={phone.name}
            value={phone.number}
          />
        ))}
        <ContactItem
          className="md:col-span-2 lg:col-span-1"
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
  // Who answers this contact, shown as a badge next to the label.
  name?: string;
  value?: string;
};

function ContactItem({
  className,
  href,
  icon,
  label,
  name,
  value,
}: ContactItemProps) {
  const content = (
    <>
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-foreground/10">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="caption">{label}</span>
          {name ? (
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-sm font-semibold text-on-brand">
              {name}
            </span>
          ) : null}
        </span>
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
        "transition-[background-color,scale] duration-150 ease-out hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-[0.98] active:bg-white/80 motion-reduce:active:scale-100",
      )}
      href={href}
    >
      {content}
    </a>
  ) : (
    <div className={cardClassName}>{content}</div>
  );
}
