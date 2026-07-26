import type { Metadata } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import { companies } from "@/data/companies";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "堺市の不動産会社(参考情報)",
  description:
    "堺市内に拠点を持つ不動産会社の一般的な参考情報です。当サイトとの業務提携関係はありません。",
  path: "/companies",
});

export default function CompaniesPage() {
  return (
    <>
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Breadcrumb items={[{ name: "トップ", href: "/" }, { name: "堺市の不動産会社", href: "/companies" }]} />
          <h1 className="mt-6 text-2xl font-bold sm:text-4xl">堺市の不動産会社(参考情報)</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            堺市内に拠点を持つ不動産会社を、一般的な参考情報としてご紹介します。
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 rounded-2xl border border-accent-100 bg-accent-50 p-6 text-sm leading-relaxed text-slate-700">
            <p className="font-bold text-navy-900">ご利用にあたっての注意</p>
            <p className="mt-2">
              以下の情報は、堺市内で不動産の売買仲介を取り扱っている会社について、一般に公開されている情報をもとにまとめた参考情報です。当サイトとこれらの会社との間に業務提携・紹介契約・その他の契約関係は一切ございません。当サイトの査定フォームからのお申し込みが、これらの会社に自動的に送られることもありません。
            </p>
            <p className="mt-2">
              掲載内容は執筆時点の情報であり、変更されている場合があります。最新の情報や詳細については、各社の公式サイト等で直接ご確認ください。
            </p>
          </div>

          <SectionHeading align="left" title="会社一覧" />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {companies.map((company) => (
              <div key={company.name} className="rounded-2xl border border-slate-200 p-6">
                <p className="font-bold text-navy-900">{company.name}</p>
                <p className="mt-2 text-sm text-slate-600">{company.address}</p>
                {company.phone && (
                  <p className="mt-1 text-sm text-slate-600">電話: {company.phone}</p>
                )}
                {company.url && (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-2 inline-block text-sm font-bold text-accent-600 hover:underline"
                  >
                    公式サイトを見る →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
