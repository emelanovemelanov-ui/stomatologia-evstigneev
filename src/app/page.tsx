import Image from "next/image";
import Link from "next/link";
import { DoctorCard } from "@/components/DoctorCard";
import { ContactsBlock } from "@/components/ContactsBlock";
import {
  IconArrow,
  IconClock,
  IconCrown,
  IconHeart,
  IconPhone,
  IconSearch,
  IconShield,
  IconSparkle,
  IconTooth,
} from "@/components/icons";
import { asset } from "@/lib/asset";
import { clinic, doctors, serviceCategories } from "@/lib/clinic";

const categoryIcons: Record<string, typeof IconTooth> = {
  consultation: IconSearch,
  prevention: IconSparkle,
  therapy: IconTooth,
  endodontics: IconShield,
  surgery: IconHeart,
  prosthetics: IconCrown,
};

const values = [
  { icon: IconShield, title: "Протоколы лечения", text: "Знаем и соблюдаем современные клинические протоколы." },
  { icon: IconSparkle, title: "Современное оборудование", text: "Точная диагностика и бережное лечение." },
  { icon: IconCrown, title: "Качественные материалы", text: "Используем проверенные материалы для долговечного результата." },
  { icon: IconHeart, title: "Без спешки", text: "Размеренность и внимательность к каждому пациенту." },
];

const tips = [
  {
    title: "После удаления зуба",
    text: "Держите тампон 20–40 минут, прикладывайте холод по 15–20 минут, не ешьте 2 часа и избегайте физических нагрузок.",
  },
  {
    title: "Циркониевые коронки",
    text: "Эстетичные и прочные: выглядят как натуральные зубы и подходят для жевательной и передней группы.",
  },
  {
    title: "Уход за съёмным протезом",
    text: "Очищайте протез после каждого приёма пищи и приходите на контрольные осмотры — так он прослужит дольше.",
  },
];

function priceFrom(values: (number | null)[]) {
  const nums = values.filter((v): v is number => v != null);
  if (!nums.length) return "по договорённости";
  return `от ${Math.min(...nums).toLocaleString("ru-RU")}\u00a0₽`;
}

export default function HomePage() {
  const categories = serviceCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-40 size-[560px] rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="pointer-events-none absolute right-0 bottom-0 size-[420px] rounded-full bg-blush-100/70 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-12 md:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="eyebrow">Стоматология доктора Евстигнеева</div>
            <h1 className="h-display mt-5">
              Здоровая улыбка <span className="text-emerald-700 italic">для&nbsp;всей семьи</span>
            </h1>
            <p className="lead mt-6 max-w-xl">
              Семейная клиника в с.&nbsp;Раменье. Лечим бережно и без спешки — по протоколам, на
              современном оборудовании, с заботой о вашем комфорте.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${clinic.phoneTel}`} className="btn-primary tabular-nums">
                <IconPhone className="size-4" /> {clinic.phoneDisplay}
              </a>
              <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary">
                Написать в WhatsApp <IconArrow className="size-4" />
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-emerald-950/10 pt-8">
              {[
                ["10+", "лет опыта"],
                ["3", "врача"],
                ["500\u00a0₽", "консультация"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-4xl font-semibold text-emerald-950 sm:text-5xl">{v}</dt>
                  <dd className="mt-1 text-sm text-emerald-900/65">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] sm:aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(28,34,21,0.55)]">
              <Image
                src={asset("/images/hero-rose.jpg")}
                alt="Врач клиники: инструменты и роза в кармане формы"
                fill
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover object-[50%_35%]"
              />
            </div>
            <div className="card absolute bottom-5 left-5 right-5 flex items-center gap-4 p-4 sm:right-auto lg:-left-8">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                <IconClock className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-emerald-950">Пн–Пт 8:30–15:00</div>
                <div className="text-xs text-emerald-900/60">Запись по телефону и в WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-emerald-950/[0.06] bg-white">
        <div className="container-page grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-semibold text-emerald-950">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-emerald-900/65">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[9/10] overflow-hidden rounded-[2rem]">
              <Image
                src={asset("/images/team.jpg")}
                alt="Врачи клиники Дмитрий Юрьевич и Юлия Игоревна Евстигнеевы"
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 hidden rounded-3xl bg-emerald-800 px-6 py-5 text-white shadow-xl sm:block">
              <div className="font-display text-4xl font-semibold">10+</div>
              <div className="text-sm text-white/70">лет практики</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">О клинике</div>
            <h2 className="h-section mt-4">Мы не просто лечим зубы — мы заботимся о вас</h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-emerald-900/75">
              {clinic.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <figure className="mt-8 border-l-2 border-blush-300 pl-5">
              <blockquote className="font-display text-2xl leading-snug text-emerald-950 italic">
                «Качественное лечение с комфортом для всей семьи»
              </blockquote>
              <figcaption className="mt-2 text-sm text-emerald-900/60">
                Дмитрий Юрьевич Евстигнеев, главный врач
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="eyebrow">Услуги</div>
              <h2 className="h-section mt-4">Всё для здоровья зубов в одной клинике</h2>
            </div>
            <Link href="/services" className="link-arrow">
              Полный прайс-лист <IconArrow className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
                const Icon = categoryIcons[c.slug] ?? IconTooth;
                return (
                  <Link
                    key={c.slug}
                    href={`/services#${c.slug}`}
                    className="group flex flex-col rounded-3xl bg-cream p-7 ring-1 ring-emerald-950/[0.05] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgba(28,34,21,0.3)]"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-white text-emerald-700 ring-1 ring-emerald-950/5">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-emerald-950">{c.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-emerald-900/65">
                      {c.services.map((s) => s.name).join(" · ")}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="text-sm font-semibold text-emerald-800 tabular-nums">
                        {priceFrom(c.services.map((s) => s.priceFrom))}
                      </span>
                      <span className="grid size-9 place-items-center rounded-full bg-white text-emerald-800 ring-1 ring-emerald-950/10 transition group-hover:bg-emerald-800 group-hover:text-white">
                        <IconArrow className="size-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="eyebrow">Команда</div>
              <h2 className="h-section mt-4">Врачи клиники</h2>
            </div>
            <Link href="/doctors" className="link-arrow">
              Подробнее о врачах <IconArrow className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <DoctorCard key={d.slug} fullName={d.fullName} specialty={d.specialty} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-emerald-900 py-20 text-white md:py-28">
        <div className="container-page">
          <div className="max-w-xl">
            <div className="eyebrow text-blush-300">Полезно знать</div>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,3rem)] leading-tight font-semibold">
              Советы наших врачей
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tips.map((t, i) => (
              <article key={t.title} className="rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                <div className="font-display text-5xl font-semibold text-blush-300/80">0{i + 1}</div>
                <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactsBlock />
    </>
  );
}
