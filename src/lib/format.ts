export function formatPrice(from: number | null | undefined, to?: number | null) {
  if (from == null && to == null) return "по договорённости";
  const fmt = (n: number) =>
    new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(n);
  if (from != null && to != null && from !== to) return `${fmt(from)}–${fmt(to)}`;
  if (from != null) return from === 0 ? "бесплатно" : `от ${fmt(from)}`;
  return to != null ? `до ${fmt(to)}` : "по договорённости";
}
