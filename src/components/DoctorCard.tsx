import Image from "next/image";
import { clinic } from "@/lib/clinic";
import { doctorInitials, doctorPhoto, splitName } from "@/lib/doctor-photos";
import { IconArrow } from "./icons";

type Props = {
  fullName: string;
  specialty: string;
  bio?: string | null;
};

export function DoctorPortrait({ fullName, className = "" }: { fullName: string; className?: string }) {
  const src = doctorPhoto(fullName);
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-emerald-100 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={fullName}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,#5a673f_0%,#2d3521_70%)]">
          <div className="text-center">
            <div className="mx-auto grid size-28 place-items-center rounded-full ring-1 ring-white/25">
              <span className="font-display text-5xl font-semibold text-blush-100">
                {doctorInitials(fullName)}
              </span>
            </div>
            <div className="mt-4 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Фото скоро
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function DoctorCard({ fullName, specialty, bio }: Props) {
  const { first, last } = splitName(fullName);
  return (
    <article className="group card flex flex-col overflow-hidden">
      <DoctorPortrait fullName={fullName} />
      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs font-semibold tracking-[0.16em] text-blush-700 uppercase">{specialty}</div>
        <h3 className="mt-2 font-display text-[1.75rem] leading-tight font-semibold text-emerald-950">
          {first}
          <span className="block text-emerald-900/55">{last}</span>
        </h3>
        {bio ? <p className="mt-3 text-sm leading-relaxed text-emerald-900/70">{bio}</p> : null}
        <a href={`tel:${clinic.phoneTel}`} className="link-arrow mt-auto pt-5">
          Записаться к врачу <IconArrow className="size-4" />
        </a>
      </div>
    </article>
  );
}
