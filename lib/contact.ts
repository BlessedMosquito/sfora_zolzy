// Fill these in to show real contact details on the contact page. A phone
// with an empty number is hidden.
export const CONTACT_PHONES: { name: string; number: string }[] = [
  { name: "Gabrysia", number: "123 456 789" },
  { name: "Mariusz", number: "987 654 321" },
];
export const CONTACT_EMAIL: string = "sfora_zolzy@gmail.com";

export const hasContactEmail = CONTACT_EMAIL !== "YOUR_EMAIL";

export const phoneHref = (number: string) =>
  `tel:${number.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${CONTACT_EMAIL}`;
