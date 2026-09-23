export type Lang = "en" | "bn";

export type Bi = { en: string; bn: string };

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Pull the right-language string out of a { en, bn } object. */
export function t(field: Bi | undefined | null, lang: Lang): string {
  if (!field) return "";
  return field[lang] ?? field.en ?? "";
}

export function waLink(phoneDigitsOnly: string, message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneDigitsOnly}?text=${encoded}`;
}

export function telLink(phone: string) {
  return `tel:${phone}`;
}
