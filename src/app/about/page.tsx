import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import CtaButton from "@/components/common/CtaButton";
import SectionHeading from "@/components/common/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "運営者情報",
  description: `${siteConfig.name}の運営者情報。堺市の不動産売却査定に特化した運営体制についてご紹介します。`,
  path: "/about",
});

const experiences = [
  {
    title: "地域密着の実務経験",
    body: "堺市内での不動産仲介・売却相談の実務に長年携わってきたメンバーが運営に関わっており、堺区・中区・東区・西区・南区・北区・美原区それぞれの地域特性を踏まえたご案内を行っています。",
  },
  {
    title: "多様な売却理由への対応実績",
    body: "相続、空き家の整理、離婚に伴う財産分与、住み替えなど、さまざまな事情での売却相談に対応してきた経験をもとに、お客様の状況に合わせた進め方をご提案します。",
  },
  {
    title: "査定会社の選定基準",
    body: "査定をご案内する不動産会社については、宅地建物取引業の免許を保有し、堺市内での取引実績がある会社を中心に選定を行っています。",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb items={[{ name: "トップ", href: "/" }, { name: "運営者情報", href: "/about" }]} />
          <h1 className="mt-6 text-2xl font-bold sm:text-4xl">運営者情報</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            {siteConfig.name}は、堺市の不動産売却に特化した一括査定サービスです。
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading align="left" title="運営方針" />
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            当サイトは、堺市内(堺区・中区・東区・西区・南区・北区・美原区)の不動産売却を検討されている方に向けて、
            信頼できる査定情報を無料でご提供することを目的として運営しています。査定のご依頼はあくまで情報提供の一環であり、
            売却を強制するものではありません。
          </p>

          <div className="mt-10 space-y-8">
            {experiences.map((item) => (
              <div key={item.title}>
                <h2 className="text-lg font-bold text-navy-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-slate-200">
                  <th className="w-32 bg-navy-50 p-4 text-left font-bold text-navy-900 sm:w-40">
                    サイト名
                  </th>
                  <td className="p-4 text-slate-700">{siteConfig.name}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th className="bg-navy-50 p-4 text-left font-bold text-navy-900">運営事業者</th>
                  <td className="p-4 text-slate-700">{siteConfig.operator}</td>
                </tr>
                <tr>
                  <th className="bg-navy-50 p-4 text-left font-bold text-navy-900">対応エリア</th>
                  <td className="p-4 text-slate-700">
                    堺市(堺区・中区・東区・西区・南区・北区・美原区)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex justify-center">
            <CtaButton href="/#assessment-form" size="lg">
              無料で査定を依頼する
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
