import CtaButton from "@/components/common/CtaButton";

const steps = [
  { step: "STEP 1", label: "物件種別とエリアを選択" },
  { step: "STEP 2", label: "築年数・広さを入力" },
  { step: "STEP 3", label: "連絡先を入力して送信" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg
          className="h-full w-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="80" cy="60" r="140" fill="currentColor" className="text-accent-600" />
          <circle cx="360" cy="340" r="180" fill="currentColor" className="text-navy-600" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-bold tracking-wide text-accent-100 sm:text-sm">
          堺区・中区・東区・西区・南区・北区・美原区 対応
        </span>

        <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
          堺市の不動産売却、
          <br className="sm:hidden" />
          まずは無料の一括査定で
          <br />
          相場を知ることから。
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-navy-100 sm:text-base">
          戸建て・マンション・土地に対応。入力はわずか3ステップ、最短60秒で査定のご依頼が完了します。
          相続・空き家・離婚・住み替えなど、状況に合わせたご相談も承ります。
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CtaButton size="lg">無料で一括査定を依頼する</CtaButton>
          <p className="text-xs text-navy-100 sm:text-sm">
            ご利用は完全無料。しつこい営業を強要しません。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur sm:grid-cols-3 sm:p-6">
          {steps.map((item) => (
            <div key={item.step} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <span className="text-xs font-bold text-accent-100">{item.step}</span>
              <span className="text-sm font-medium text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
