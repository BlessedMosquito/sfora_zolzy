// Map embed from Google Maps: Share → Embed a map → copy the iframe's `src`.
// No API key or billing account needed. Set to "" to show the placeholder.
export const MAP_EMBED_URL: string =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.6021445606148!2d19.067754539860545!3d50.708767191392155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710cb8c4a71893f%3A0x18f807c379fd1179!2sTargowa%20155%2C%2042-262%20Nierada!5e0!3m2!1spl!2spl!4v1793449313366!5m2!1spl!2spl";

// Address shown next to the map, one line per entry.
export const KENNEL_ADDRESS_LINES: string[] = ["Targowa 155", "42-262 Nierada"];

export const hasMapEmbed = MAP_EMBED_URL !== "";
