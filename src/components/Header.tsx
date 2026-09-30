import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { IconPhone } from "./icons";

export const navLinks = [
  { href: "/services", label: "Услуги и цены" },
  { href: "/doctors", label: "Врачи" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/[0.07] bg-cream/85 backdrop-blur-xl">
      <div className="container-page flex h-[72px] items-center gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-[0.94rem] font-medium whitespace-nowrap text-emerald-950/80 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-emerald-950">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${clinic.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary hidden min-h-11 px-5 whitespace-nowrap sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${clinic.phoneTel}`}
            aria-label={`Позвонить ${clinic.phoneDisplay}`}
            className="btn-primary min-h-11 w-11 px-0 whitespace-nowrap tabular-nums sm:w-auto sm:px-5"
          >
            <IconPhone className="size-4.5" />
            <span className="hidden md:inline">{clinic.phoneDisplay}</span>
            <span className="hidden sm:inline md:hidden">Позвонить</span>
          </a>
          <MobileMenu links={navLinks} phone={clinic.phoneDisplay} phoneTel={clinic.phoneTel} whatsapp={clinic.whatsapp} />
        </div>
      </div>
    </header>
  );
}
