import { clinic } from "@/lib/clinic";
import { IconArrow, IconClock, IconPhone, IconPin } from "./icons";

export function ContactsBlock({ withHeading = true }: { withHeading?: boolean }) {
  const mapQuery = encodeURIComponent(`${clinic.addressShort}, Шаховской район, Московская область`);
  const items = [
    { icon: IconPin, label: "Адрес", value: clinic.address },
    {
      icon: IconPhone,
      label: "Телефон и WhatsApp",
      value: (
        <a href={`tel:${clinic.phoneTel}`} className="tabular-nums hover:text-emerald-700">
          {clinic.phoneDisplay}
        </a>
      ),
    },
    {
      icon: IconClock,
      label: "Режим работы",
      value: (
        <>
          Пн–Пт: 8:30–15:00, Сб–Вс: выходной
          <span className="mt-1 block text-sm text-emerald-900/60">{clinic.bookingHours}</span>
        </>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="card grid overflow-hidden lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            {withHeading ? (
              <>
                <div className="eyebrow">Контакты</div>
                <h2 className="h-section mt-4">Ждём вас на приём</h2>
              </>
            ) : null}
            <ul className={`space-y-6 ${withHeading ? "mt-10" : ""}`}>
              {items.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-[0.16em] text-emerald-900/50 uppercase">{label}</div>
                    <div className="mt-1 text-emerald-950">{value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${clinic.phoneTel}`} className="btn-primary tabular-nums">
                <IconPhone className="size-4" /> Позвонить
              </a>
              <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary">
                Написать в WhatsApp <IconArrow className="size-4" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[360px] bg-emerald-50 lg:min-h-full">
            <iframe
              title="Клиника на карте"
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://yandex.ru/map-widget/v1/?text=${mapQuery}&z=15`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
