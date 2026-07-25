import SectionHeading from "@/components/common/SectionHeading";
import { faqItems } from "@/data/faq";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-navy-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-navy-100 bg-white p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-bold text-navy-900 sm:text-base">
                <span className="flex gap-2">
                  <span className="text-accent-600">Q</span>
                  {item.question}
                </span>
                <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 flex gap-2 text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-navy-700">A</span>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
