import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "特定商取引法に基づく表記",
  description: `${siteConfig.name}の特定商取引法に基づく表記です。`,
  path: "/tokushoho",
});

const rows: Array<[string, string]> = [
  ["運営事業者名", siteConfig.operator],
  ["運営統括責任者", "運営統括責任者(お問い合わせ時にご案内いたします)"],
  ["所在地", "大阪府堺市(詳細はお問い合わせ時にご案内いたします)"],
  ["連絡先", "お問い合わせは本サイトの査定依頼フォームよりご連絡ください"],
  ["サービス内容", "堺市内の不動産売却を検討する個人向けの、提携不動産会社への無料一括査定案内サービス"],
  ["サービス利用料金", "本サービスのご利用(査定のご依頼)は無料です"],
  [
    "料金以外の必要費用",
    "本サービス経由で不動産会社に売却を依頼された場合、成約時に仲介手数料等が発生することがあります。詳細は各不動産会社にご確認ください",
  ],
  ["お申し込み方法", "本サイトの査定依頼フォームより必要事項をご入力の上、送信してください"],
  ["査定結果のご案内時期", "フォーム送信後、提携不動産会社より順次ご連絡いたします"],
  ["キャンセルについて", "査定のお申し込み後であっても、売却を強制するものではありません。キャンセルをご希望の場合はご連絡いただいた不動産会社に直接お伝えください"],
];

export default function TokushohoPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumb
          items={[
            { name: "トップ", href: "/" },
            { name: "特定商取引法に基づく表記", href: "/tokushoho" },
          ]}
        />
        <h1 className="mt-6 text-2xl font-bold text-navy-900 sm:text-4xl">
          特定商取引法に基づく表記
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          本サービスは不動産会社への査定案内を無料で行う情報提供サービスであり、当社自身が商品・不動産の売買を行うものではありませんが、
          利用者の皆様に安心してご利用いただくため、特定商取引法の表示に準じて以下のとおり情報を開示します。
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <tbody>
              {rows.map(([label, value]) => (
                <tr key={label} className="border-b border-slate-200 last:border-b-0">
                  <th className="w-36 shrink-0 bg-navy-50 p-4 align-top text-left font-bold text-navy-900 sm:w-48">
                    {label}
                  </th>
                  <td className="p-4 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
