"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconMenu, IconPhone } from "./icons";

type Props = {
  links: { href: string; label: string }[];
  phone: string;
  phoneTel: string;
  whatsapp: string;
};

export function MobileMenu({ links, phone, phoneTel, whatsapp }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        className="grid size-11 place-items-center rounded-full bg-white text-emerald-950 ring-1 ring-emerald-950/10"
      >
        {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
      </button>
      {open
        ? createPortal(
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-[60] overflow-y-auto bg-cream">
          <nav className="container-page flex flex-col py-6">
            <Link href="/" className="border-b border-emerald-950/10 py-4 font-display text-3xl font-semibold text-emerald-950">
              Главная
            </Link>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-emerald-950/10 py-4 font-display text-3xl font-semibold text-emerald-950"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-8 grid gap-3">
              <a href={`tel:${phoneTel}`} className="btn-primary w-full tabular-nums">
                <IconPhone className="size-4.5" />
                {phone}
              </a>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                Написать в WhatsApp
              </a>
            </div>
          </nav>
        </div>,
          document.body,
        )
        : null}
    </div>
  );
}
