import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import SectionHeading from "@/components/common/SectionHeading";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "コラム｜堺市の不動産売却に関するお役立ち情報",
  description:
    "相続・空き家・離婚・住み替えなど、堺市の不動産売却にまつわる手順や税金、相場の調べ方をわかりやすく解説するコラム一覧です。",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb items={[{ name: "トップ", href: "/" }, { name: "コラム", href: "/blog" }]} />
          <h1 className="mt-6 text-2xl font-bold sm:text-4xl">コラム</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            相続・空き家・離婚・住み替えなど、堺市の不動産売却にまつわる手順や税金、相場の調べ方をわかりやすく解説します。
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading align="left" title="記事一覧" />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-6 transition-colors hover:border-accent-500"
              >
                <PlaceholderImage label={article.category} aspect="video" />
                <span className="w-fit rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-accent-700">
                  {article.category}
                </span>
                <h2 className="text-base font-bold text-navy-900 sm:text-lg">{article.title}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{article.description}</p>
                <time className="mt-auto text-xs text-slate-400" dateTime={article.publishedAt}>
                  {article.publishedAt}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
