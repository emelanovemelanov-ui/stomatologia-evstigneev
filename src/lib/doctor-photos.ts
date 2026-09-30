import { asset } from "./asset";

const photos: { match: string; src: string }[] = [
  { match: "Дмитрий", src: "/images/portrait-dmitry.jpg" },
  { match: "Юлия", src: "/images/portrait-yulia.jpg" },
];

export function doctorPhoto(fullName: string): string | null {
  const src = photos.find((p) => fullName.includes(p.match))?.src;
  return src ? asset(src) : null;
}

export function doctorInitials(fullName: string): string {
  const [, first = "", middle = ""] = fullName.split(/\s+/);
  return `${first.charAt(0)}${middle.charAt(0)}`.toUpperCase();
}

/** "Евстигнеев Дмитрий Юрьевич" → { first: "Дмитрий Юрьевич", last: "Евстигнеев" } */
export function splitName(fullName: string) {
  const [last = "", ...rest] = fullName.split(/\s+/);
  return { last, first: rest.join(" ") };
}
