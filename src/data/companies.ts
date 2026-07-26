export interface CompanyInfo {
  name: string;
  address: string;
  phone?: string;
  url?: string;
}

/**
 * 堺市内に拠点を持つ不動産会社の一般的な参考情報。
 * 当サイトとの業務提携・契約関係は一切ない。公開情報をもとに掲載しており、
 * 最新情報は各社公式サイト等で確認する必要がある。
 */
export const companies: CompanyInfo[] = [
  {
    name: "株式会社イエストア",
    address: "大阪府堺市中区毛穴町113番地1",
  },
  {
    name: "センチュリー21 フロンティア不動産販売 南大阪店",
    address: "大阪府堺市北区百舌鳥梅町1丁15-2",
  },
  {
    name: "センチュリー21 近畿不動産販売 三国ヶ丘店",
    address: "大阪府堺市堺区向陵中町6丁1-9",
  },
  {
    name: "株式会社福屋不動産販売 堺東駅前店",
    address: "大阪府堺市堺区南花田口町2丁3番20号",
  },
  {
    name: "リノヴェック株式会社",
    address: "大阪府堺市中区東山66-1",
  },
  {
    name: "三井のリハウス 堺東センター(三井不動産リアルティ株式会社)",
    address: "大阪府堺市堺区南花田口町2-3-1 堺東髙橋ビル1F",
    phone: "0120-959-313",
    url: "https://www.rehouse.co.jp/store/sakaihigashi/",
  },
  {
    name: "住友不動産販売株式会社 堺営業センター",
    address: "大阪府堺市堺区一条通20-5 銀泉堺東ビル1階",
    phone: "0120-002-579",
    url: "https://www.stepon.co.jp/center/sakai/",
  },
  {
    name: "東急リバブル株式会社 なかもずセンター",
    address: "大阪府堺市北区中百舌鳥町2丁244-2 なかもずライブ2階",
    url: "https://www.livable.co.jp/branch/nakamozu/",
  },
];
