import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Семейная стоматология доктора Евстигнеева">
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
          className={`block font-display text-[0.95rem] leading-none font-semibold tracking-tight whitespace-nowrap sm:text-[1.15rem] ${
            light ? "text-white" : "text-emerald-950"
          }`}
        >
          Семейная стоматология
        </span>
        <span
          className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.12em] whitespace-nowrap uppercase sm:text-[0.66rem] sm:tracking-[0.16em] ${
            light ? "text-white/55" : "text-emerald-700/80"
          }`}
        >
          доктора Евстигнеева
        </span>
      </span>
    </Link>
  );
}
