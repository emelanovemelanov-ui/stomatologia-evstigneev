import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="На главную">
      <Image
        src={asset("/images/logo.png")}
        alt="Логотип «Семейная стоматология доктора Евстигнеева»"
        width={52}
        height={52}
        priority
        className={`size-[52px] shrink-0 rounded-full ${
          light ? "ring-2 ring-white/15" : "shadow-[0_4px_12px_-4px_rgba(28,34,21,0.35)]"
        }`}
      />
      <span className="min-w-0 leading-tight">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-tight ${
            light ? "text-white" : "text-emerald-950"
          }`}
        >
          Евстигнеев
        </span>
        <span
          className={`block text-[0.68rem] font-semibold tracking-[0.18em] uppercase ${
            light ? "text-white/55" : "text-emerald-700/80"
          }`}
        >
          Семейная стоматология
        </span>
      </span>
    </Link>
  );
}
