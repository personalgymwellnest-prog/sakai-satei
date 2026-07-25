import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AssessmentForm from "@/components/form/AssessmentForm";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import { getArticlesBySceneSlug } from "@/data/articles";
import { getSceneBySlug, scenes } from "@/data/scenes";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ scene: string }>;
}

export function generateStaticParams() {
  return scenes.map((scene) => ({ scene: scene.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { scene: sceneSlug } = await params;
  const scene = getSceneBySlug(sceneSlug);

  if (!scene) {
    return buildMetadata({
      title: "ページが見つかりません",
      description: "指定されたページは見つかりませんでした。",
      path: `/scenes/${sceneSlug}`,
    });
  }

  return buildMetadata({
    title: `${scene.name}による堺市の不動産売却｜査定のポイントと進め方`,
    description: `${scene.catchCopy}。堺市の不動産を${scene.name}のきっかけで売却する際のポイントを解説し、無料の一括査定にご案内します。`,
    path: `/scenes/${scene.slug}`,
  });
}

export default async function ScenePage({ params }: PageProps) {
  const { scene: sceneSlug } = await params;
  const scene = getSceneBySlug(sceneSlug);

  if (!scene) {
    notFound();
  }

  const relatedArticles = getArticlesBySceneSlug(scene.slug);

  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb
            items={[
              { name: "トップ", href: "/" },
              { name: "売却のきっかけ", href: "/" },
              { name: scene.name, href: `/scenes/${scene.slug}` },
            ]}
          />
          <p className="mt-6 text-xs font-bold tracking-widest text-accent-100">
            {scene.name}による売却
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-4xl">{scene.catchCopy}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            {scene.leadText}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading align="left" title="こんなお悩みはありませんか" />
          <ul className="mt-6 space-y-3">
            {scene.worries.map((worry) => (
              <li key={worry} className="flex gap-3 rounded-xl bg-navy-50 p-4 text-sm text-slate-700 sm:text-base">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                {worry}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <SectionHeading align="left" title={`${scene.name}による売却の進め方`} />
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">{scene.body}</p>
          </div>

          {relatedArticles.length > 0 && (
            <div className="mt-10">
              <SectionHeading align="left" title="関連コラム" />
              <ul className="mt-4 space-y-3">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 p-4 text-sm font-bold text-navy-900 hover:border-accent-500"
                    >
                      {article.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy-50 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            title="まずは無料の一括査定から"
            description={`${scene.name}に伴う堺市の不動産売却について、まずは査定額の目安から確認してみませんか。`}
          />
          <div className="mt-8">
            <AssessmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
