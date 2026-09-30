import Image from "next/image";
import { DoctorCard } from "@/components/DoctorCard";
import { PageHero } from "@/components/PageHero";
import { IconAward } from "@/components/icons";
import { asset } from "@/lib/asset";
import { doctors } from "@/lib/clinic";

export const metadata = { title: "Врачи" };

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Команда"
        title="Врачи клиники"
        lead="Семейная команда стоматологов с опытом более 10 лет. Записаться к конкретному врачу можно по телефону или в WhatsApp."
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <DoctorCard key={d.slug} fullName={d.fullName} specialty={d.specialty} bio={d.bio} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-cream shadow-[0_40px_80px_-40px_rgba(28,34,21,0.45)]">
              <Image
                src={asset("/images/certificate-yulia.jpg")}
                alt="Благодарственное письмо администрации муниципального округа Шаховская"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <span className="grid size-14 place-items-center rounded-2xl bg-blush-50 text-blush-700">
              <IconAward className="size-7" />
            </span>
            <div className="eyebrow mt-6">Признание</div>
            <h2 className="h-section mt-4">Благодарность за профессионализм</h2>
            <p className="lead mt-6">
              Евстигнеева Юлия Игоревна отмечена благодарственным письмом администрации муниципального
              округа Шаховская за добросовестный труд и высокий профессионализм в работе.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
