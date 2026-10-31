// Fill these in to show real contact details on the contact page.
export const CONTACT_PHONE: string = "123 456 789";
export const CONTACT_EMAIL: string = "sfora_zolzy@gmail.com";

export const hasContactPhone = CONTACT_PHONE !== "YOUR_PHONE";
export const hasContactEmail = CONTACT_EMAIL !== "YOUR_EMAIL";

export const phoneHref = `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${CONTACT_EMAIL}`;
