import type { ReasonItem, VoiceItem } from "@/types";

export const reasons: ReasonItem[] = [
  {
    number: "01",
    title: "堺市に特化した相場感",
    description:
      "堺区・中区・東区・西区・南区・北区・美原区それぞれの地域特性を踏まえた査定で、地域相場に即した金額の目安がわかります。",
    stat: "7区",
    statLabel: "堺市内全域に対応",
  },
  {
    number: "02",
    title: "入力3ステップ・最短60秒",
    description:
      "物件種別と所在地、簡単な物件情報を入力するだけ。複雑な手続きなしで、査定依頼を完了できます。",
    stat: "60秒",
    statLabel: "フォーム入力の目安時間",
  },
  {
    number: "03",
    title: "しつこい営業を強要しません",
    description:
      "査定結果はあくまで参考情報としてご案内。売却を急がせるような対応がないよう配慮した運営を行っています。",
    stat: "0円",
    statLabel: "査定利用料",
  },
  {
    number: "04",
    title: "相続・空き家・離婚にも対応",
    description:
      "相続や空き家、離婚、住み替えなど、事情に応じた売却の進め方について相談できる体制を整えています。",
    stat: "4シーン",
    statLabel: "売却理由別に案内",
  },
];

export const voices: VoiceItem[] = [
  {
    area: "堺区",
    propertyType: "マンション",
    age: "築18年",
    comment:
      "相続した親のマンションをどうするか迷っていましたが、査定額の目安がわかったことで家族での話し合いがスムーズに進みました。",
  },
  {
    area: "南区",
    propertyType: "戸建て",
    age: "築25年",
    comment:
      "泉北ニュータウンの実家が空き家になっていましたが、放置するリスクを説明してもらい、売却の判断がしやすくなりました。",
  },
  {
    area: "西区",
    propertyType: "戸建て",
    age: "築15年",
    comment:
      "住み替えを検討する中で、まず今の家の価値を知りたくて利用しました。入力もシンプルで、思ったより早く目安がわかりました。",
  },
  {
    area: "北区",
    propertyType: "土地",
    age: "-",
    comment:
      "離婚に伴う財産分与のため、客観的な評価額が必要でした。第三者からの査定という形で、話し合いの材料にできました。",
  },
];

export const trustStats = [
  { value: "7区", label: "堺市内全域をカバーする対応エリア" },
  { value: "無料", label: "査定のご依頼・ご利用料" },
  { value: "60秒", label: "フォーム入力の目安時間" },
];
