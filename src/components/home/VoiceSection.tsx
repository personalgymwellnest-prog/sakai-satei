import SectionHeading from "@/components/common/SectionHeading";
import { trustStats, voices } from "@/data/reasons";

export default function VoiceSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="VOICE & TRUST"
          title="利用者の声"
          description="堺市内でご利用いただいた方の声の一例です(掲載にあたり内容を一部編集しています)。"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-navy-900 sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {voices.map((voice, index) => (
            <blockquote
              key={index}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-accent-600">
                <span className="rounded-full bg-accent-50 px-3 py-1">{voice.area}</span>
                <span className="rounded-full bg-navy-50 px-3 py-1 text-navy-700">
                  {voice.propertyType} / {voice.age}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">「{voice.comment}」</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
