import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AssessmentForm from "@/components/form/AssessmentForm";
import Breadcrumb from "@/components/common/Breadcrumb";
import PlaceholderImage from "@/components/common/PlaceholderImage";
import SectionHeading from "@/components/common/SectionHeading";
import { articles, getArticleBySlug } from "@/data/articles";
import { getSceneBySlug } from "@/data/scenes";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "ページが見つかりません",
      description: "指定された記事は見つかりませんでした。",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedScene = article.relatedSceneSlug ? getSceneBySlug(article.relatedSceneSlug) : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: siteConfig.operator },
    publisher: { "@type": "Organization", name: siteConfig.operator },
    mainEntityOfPage: new URL(`/blog/${article.slug}`, siteConfig.url).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb
            items={[
              { name: "トップ", href: "/" },
              { name: "コラム", href: "/blog" },
              { name: article.title, href: `/blog/${article.slug}` },
            ]}
          />
          <span className="mt-6 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-accent-100">
            {article.category}
          </span>
          <h1 className="mt-3 text-2xl font-bold leading-snug sm:text-4xl">{article.title}</h1>
          <time className="mt-4 block text-xs text-navy-100" dateTime={article.publishedAt}>
            {article.publishedAt} 公開
          </time>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PlaceholderImage label={article.title} aspect="wide" className="mb-10" />

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{article.leadText}</p>

          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-navy-900 sm:text-xl">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {relatedScene && (
            <div className="mt-12 rounded-2xl bg-navy-50 p-6">
              <p className="text-sm font-bold text-navy-900">
                「{relatedScene.name}」に関するご相談も承っています
              </p>
              <Link
                href={`/scenes/${relatedScene.slug}`}
                className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-accent-600 hover:underline"
              >
                {relatedScene.name}による売却について詳しく見る →
              </Link>
            </div>
          )}

          <div className="mt-12">
            <Link href="/blog" className="text-sm text-slate-500 hover:text-accent-600">
              ← コラム一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            title="まずは無料の一括査定から"
            description="ここまで読んでいただいた内容を踏まえて、まずはご自身の物件の査定額を確認してみませんか。"
          />
          <div className="mt-8">
            <AssessmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
