import type { Metadata } from "next";
import AssessmentForm from "@/components/form/AssessmentForm";
import AreaSection from "@/components/home/AreaSection";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import ReasonsSection from "@/components/home/ReasonsSection";
import VoiceSection from "@/components/home/VoiceSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "堺市の不動産売却なら無料一括査定｜堺市不動産売却査定ナビ",
  description:
    "堺市(堺区・中区・東区・西区・南区・北区・美原区)の戸建て・マンション・土地の売却査定に特化。入力3ステップ・最短60秒で無料査定を依頼できます。",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AssessmentForm />
        </div>
      </section>

      <ReasonsSection />
      <AreaSection />
      <VoiceSection />
      <FaqSection />
    </>
  );
}
