import Link from "next/link";
import CtaButton from "@/components/common/CtaButton";
import { areas } from "@/data/areas";
import { articles } from "@/data/articles";
import { scenes } from "@/data/scenes";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-navy-900 px-6 py-8 text-center sm:px-10">
          <p className="text-lg sm:text-xl font-bold text-white">
            まずは無料の一括査定から。堺市の不動産売却を、しっかりサポートします。
          </p>
          <CtaButton size="lg">無料で査定を依頼する</CtaButton>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">対応エリア</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="hover:text-white">
                    {area.name}の売却査定
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-white">売却のきっかけ</h3>
            <ul className="space-y-2 text-sm">
              {scenes.map((scene) => (
                <li key={scene.slug}>
                  <Link href={`/scenes/${scene.slug}`} className="hover:text-white">
                    {scene.name}による売却
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-white">コラム</h3>
            <ul className="space-y-2 text-sm">
              {articles.slice(0, 5).map((article) => (
                <li key={article.slug}>
                  <Link href={`/blog/${article.slug}`} className="hover:text-white">
                    {article.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="font-bold hover:text-white">
                  コラム一覧を見る
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-white">サイトについて</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white">
                  堺市の不動産会社(参考情報)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-white">規約・法令</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/tokushoho" className="hover:text-white">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-navy-100/70">
          <p>{siteConfig.operator}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
