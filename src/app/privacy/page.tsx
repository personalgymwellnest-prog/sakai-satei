import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: `${siteConfig.name}における個人情報の取り扱いについて定めたプライバシーポリシーです。`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumb
          items={[{ name: "トップ", href: "/" }, { name: "プライバシーポリシー", href: "/privacy" }]}
        />
        <h1 className="mt-6 text-2xl font-bold text-navy-900 sm:text-4xl">
          プライバシーポリシー
        </h1>

        <div className="prose-sm mt-8 space-y-8 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            {siteConfig.operator}(以下「当社」といいます)は、当社が運営する「{siteConfig.name}」
            (以下「本サービス」といいます)における個人情報の取り扱いについて、個人情報の保護に関する法律
            (以下「個人情報保護法」といいます)その他の関連法令等を遵守し、以下のとおりプライバシーポリシー
            (以下「本ポリシー」といいます)を定めます。
          </p>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第1条(取得する個人情報)</h2>
            <p className="mt-3">
              当社は、本サービスの査定依頼フォームを通じて、以下の情報を取得します。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>氏名</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>物件所在地(都道府県・市区町村)、物件種別、築年数、広さ等の物件情報</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第2条(利用目的)</h2>
            <p className="mt-3">当社は、取得した個人情報を以下の目的で利用します。</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>不動産の売却査定のご案内・ご連絡のため</li>
              <li>提携先の不動産会社への査定依頼の取り次ぎのため</li>
              <li>本サービスに関するお問い合わせへの対応のため</li>
              <li>本サービスの品質向上、統計データの作成のため</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第3条(第三者提供)</h2>
            <p className="mt-3">
              当社は、査定のご案内にあたり、お客様がご入力いただいた情報を、査定を担当する提携不動産会社に提供します。
              これら提供先以外の第三者に対しては、法令に基づく場合を除き、あらかじめお客様の同意を得ることなく個人情報を提供することはありません。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第4条(委託)</h2>
            <p className="mt-3">
              当社は、利用目的の達成に必要な範囲において、個人情報の取り扱いの全部または一部を第三者に委託することがあります。
              この場合、委託先に対する必要かつ適切な監督を行います。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第5条(安全管理措置)</h2>
            <p className="mt-3">
              当社は、取得した個人情報の漏えい、滅失または毀損の防止その他の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第6条(開示等の請求)</h2>
            <p className="mt-3">
              お客様は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止等を請求することができます。
              請求方法については、本ポリシー末尾のお問い合わせ窓口までご連絡ください。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第7条(Cookie等の利用)</h2>
            <p className="mt-3">
              本サービスでは、利便性向上やアクセス解析のためCookie等の技術を利用する場合があります。
              ブラウザの設定によりCookieの利用を拒否することも可能ですが、その場合、本サービスの一部機能がご利用いただけないことがあります。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第8条(本ポリシーの変更)</h2>
            <p className="mt-3">
              当社は、必要に応じて本ポリシーの内容を変更することがあります。変更後の内容は、本ページに掲載した時点から効力を生じるものとします。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-900">第9条(お問い合わせ窓口)</h2>
            <p className="mt-3">
              本ポリシーに関するお問い合わせは、下記窓口までご連絡ください。
            </p>
            <p className="mt-3">
              {siteConfig.operator}
              <br />
              お問い合わせフォーム:本サイトの査定依頼フォームよりご連絡ください
            </p>
          </div>

          <p className="text-xs text-slate-400">制定日:2026年7月23日</p>
        </div>
      </div>
    </section>
  );
}
