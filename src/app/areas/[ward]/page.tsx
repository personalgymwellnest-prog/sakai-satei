import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AssessmentForm from "@/components/form/AssessmentForm";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import SectionHeading from "@/components/common/SectionHeading";
import { areas, getAreaBySlug } from "@/data/areas";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ ward: string }>;
}

export function generateStaticParams() {
  return areas.map((area) => ({ ward: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ward } = await params;
  const area = getAreaBySlug(ward);

  if (!area) {
    return buildMetadata({
      title: "ページが見つかりません",
      description: "指定されたエリアの情報は見つかりませんでした。",
      path: `/areas/${ward}`,
    });
  }

  return buildMetadata({
    title: `堺市${area.name}の不動産売却相場と査定のポイント`,
    description: `堺市${area.name}(${area.reading})の不動産売却相場感と地域特性を解説。${area.catchCopy}。無料の一括査定はこちらから。`,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { ward } = await params;
  const area = getAreaBySlug(ward);

  if (!area) {
    notFound();
  }

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb
            items={[
              { name: "トップ", href: "/" },
              { name: "対応エリア", href: "/#areas" },
              { name: `堺市${area.name}`, href: `/areas/${area.slug}` },
            ]}
          />
          <p className="mt-6 text-xs font-bold tracking-widest text-accent-100">
            堺市 {area.reading}
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-4xl">
            堺市{area.name}の不動産売却相場と査定のポイント
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            {area.catchCopy}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-10">
              <div>
                <SectionHeading align="left" title="エリア概要" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {area.overview}
                </p>
              </div>

              <div>
                <SectionHeading align="left" title="売却相場感" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {area.marketSummary}
                </p>
              </div>

              <div>
                <SectionHeading align="left" title="地域の特性" />
                <ul className="mt-4 space-y-3">
                  {area.characteristics.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-700 sm:text-base">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionHeading align="left" title="主なエリア" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.areas.map((name) => (
                    <span
                      key={name}
                      className="rounded-full bg-navy-50 px-4 py-2 text-sm text-navy-800"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <PlaceholderImage label={`堺市${area.name}のイメージ`} aspect="square" />
              <p className="text-xs text-slate-400">
                ※ 掲載の相場感・地域情報は一般的な傾向を示す参考情報です。実際の売却価格は個別の査定によりご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            title={`堺市${area.name}の不動産、まずは無料査定から`}
            description="このエリアを選択した状態でフォームが入力済みです。残りの項目を入力するだけで査定を依頼できます。"
          />
          <div className="mt-8">
            <AssessmentForm defaultWardSlug={area.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
