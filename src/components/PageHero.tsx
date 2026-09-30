export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-emerald-950/[0.06]">
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-blush-100/60 blur-3xl" />
      <div className={`container-page relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${compact ? "py-10 md:py-12" : "py-14 md:py-20"}`}>
        <div className="max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="h-display mt-4">{title}</h1>
          {lead ? <p className="lead mt-5 max-w-xl">{lead}</p> : null}
        </div>
        {children ? <div className="flex shrink-0 flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
