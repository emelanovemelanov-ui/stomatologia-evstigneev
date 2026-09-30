import { ContactsBlock } from "@/components/ContactsBlock";
import { PageHero } from "@/components/PageHero";
import { clinic } from "@/lib/clinic";

export const metadata = { title: "Контакты" };

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Как нас найти"
        title="Контакты"
        lead="Клиника находится в центре с. Раменье, рядом с магазином «Магнит». Приём по предварительной записи."
      />
      <ContactsBlock withHeading={false} />
      <section className="container-page pb-20">
        <div className="grid gap-4 text-sm text-emerald-900/65 sm:grid-cols-3">
          <div className="card p-6">
            <div className="text-xs font-semibold tracking-[0.16em] text-emerald-900/45 uppercase">Организация</div>
            <div className="mt-2 text-emerald-950">{clinic.legalName}</div>
          </div>
          <div className="card p-6">
            <div className="text-xs font-semibold tracking-[0.16em] text-emerald-900/45 uppercase">ИНН</div>
            <div className="mt-2 text-emerald-950 tabular-nums">{clinic.inn}</div>
          </div>
          <div className="card p-6">
            <div className="text-xs font-semibold tracking-[0.16em] text-emerald-900/45 uppercase">Лицензия</div>
            <div className="mt-2 break-words text-emerald-950">{clinic.license}</div>
          </div>
        </div>
      </section>
    </>
  );
}
