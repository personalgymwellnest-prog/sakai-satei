import SectionHeading from "@/components/common/SectionHeading";
import { reasons } from "@/data/reasons";

export default function ReasonsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="SELECTED REASONS"
          title="堺市不動産売却査定ナビが選ばれる理由"
          description="堺市の不動産売却に特化しているからこそできる、地域に根ざした査定体制を整えています。"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-6"
            >
              <span className="text-3xl font-bold text-accent-600">{reason.number}</span>
              <div>
                <p className="text-lg font-bold text-navy-900">{reason.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {reason.description}
                </p>
              </div>
              <div className="mt-auto flex items-baseline gap-2 border-t border-slate-100 pt-4">
                <span className="text-2xl font-bold text-navy-900">{reason.stat}</span>
                <span className="text-xs text-slate-500">{reason.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
