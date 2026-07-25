import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import { areas } from "@/data/areas";

export default function AreaSection() {
  return (
    <section id="areas" className="scroll-mt-20 bg-navy-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="COVERAGE AREA"
          title="対応エリア|堺市内7区すべてに対応"
          description="堺区・中区・東区・西区・南区・北区・美原区、堺市内どのエリアの物件でも査定のご相談が可能です。"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-accent-500"
            >
              <span className="text-xs font-bold text-accent-600">堺市</span>
              <span className="text-lg font-bold text-navy-900">{area.name}</span>
              <span className="text-xs text-slate-500">{area.reading}</span>
              <span className="mt-2 flex items-center gap-1 text-xs font-bold text-navy-700 group-hover:text-accent-600">
                売却相場を見る
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                  <path d="M7.5 15l5-5-5-5v10z" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
