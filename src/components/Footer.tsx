import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">{clinic.tagline}.</p>
        </div>
        <div className="text-sm">
          <div className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">Навигация</div>
          <ul className="space-y-2.5">
            <li><Link className="hover:text-white" href="/services">Услуги и цены</Link></li>
            <li><Link className="hover:text-white" href="/doctors">Врачи</Link></li>
            <li><Link className="hover:text-white" href="/contacts">Контакты</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">Контакты</div>
          <ul className="space-y-2.5">
            <li>
              <a className="font-semibold text-white tabular-nums hover:text-blush-300" href={`tel:${clinic.phoneTel}`}>
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>{clinic.addressShort}</li>
            <li>Пн–Пт 8:30–15:00</li>
            <li className="flex gap-4 pt-1">
              <a className="hover:text-white" href={clinic.vkUrl} target="_blank" rel="noreferrer">ВКонтакте</a>
              <a className="hover:text-white" href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">Реквизиты</div>
          <ul className="space-y-2.5">
            <li>{clinic.legalName}</li>
            <li>ИНН {clinic.inn}</li>
            <li className="break-words">Лицензия {clinic.license}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {clinic.name}</span>
          <Link href="/privacy" className="hover:text-white">
            Политика обработки персональных данных
          </Link>
        </div>
        <div className="container-page pb-6 text-[11px] leading-relaxed text-white/35">
          Имеются противопоказания. Необходима консультация специалиста.
        </div>
      </div>
    </footer>
  );
}
