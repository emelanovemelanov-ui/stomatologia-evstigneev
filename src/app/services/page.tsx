import { PageHero } from "@/components/PageHero";
import { IconPhone } from "@/components/icons";
import { clinic, serviceCategories } from "@/lib/clinic";
import { formatPrice } from "@/lib/format";

export const metadata = { title: "Услуги и цены" };

export default function ServicesPage() {
  const categories = serviceCategories();

  return (
    <>
      <PageHero
        eyebrow="Прайс-лист"
        title="Услуги и цены"
        lead="Стоимость указана по прайсу клиники. Точная цена определяется на консультации после осмотра."
      >
        <a href={`tel:${clinic.phoneTel}`} className="btn-primary tabular-nums">
          <IconPhone className="size-4" /> Записаться: {clinic.phoneDisplay}
        </a>
      </PageHero>

      <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-[240px_1fr] lg:gap-14">
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-1">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-emerald-900/70 transition hover:bg-white hover:text-emerald-950"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-6">
          {categories.map((cat) => (
            <section key={cat.slug} id={cat.slug} className="card scroll-mt-28 p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold text-emerald-950">{cat.name}</h2>
              <ul className="mt-4 divide-y divide-emerald-950/[0.07]">
                {cat.services.map((s) => (
                  <li key={s.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-8">
                    <div className="min-w-0">
                      <div className="font-semibold text-emerald-950">{s.name}</div>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-900/65">{s.description}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="font-semibold whitespace-nowrap text-emerald-900 tabular-nums">
                        {formatPrice(s.priceFrom, s.priceTo)}
                      </div>
                      <div className="mt-0.5 text-xs text-emerald-900/50">≈ {s.durationMin} мин</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="px-2 text-xs leading-relaxed text-emerald-900/50">
            Информация на сайте не является публичной офертой. Имеются противопоказания, необходима
            консультация специалиста.
          </p>
        </div>
      </div>
    </>
  );
}
