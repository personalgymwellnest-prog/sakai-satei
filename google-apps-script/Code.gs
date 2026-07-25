/**
 * 堺市不動産売却査定ナビ - 査定依頼フォームの受信スクリプト
 *
 * ■ セットアップ手順
 * 1. Google スプレッドシートを新規作成する(例: 「堺市査定フォーム受信」)。
 * 2. 1行目に見出しを入力する:
 *    受信日時 | 物件種別 | 都道府県 | 市区町村 | 築年数 | 広さ(㎡) | 氏名 | 電話番号 | メールアドレス
 * 3. メニューの「拡張機能」>「Apps Script」を開く。
 * 4. デフォルトの Code.gs の中身を全て削除し、このファイルの内容を貼り付ける。
 * 5. 画面右上の「デプロイ」>「新しいデプロイ」を選択。
 *    - 種類の選択: 「ウェブアプリ」
 *    - 実行するユーザー: 「自分」
 *    - アクセスできるユーザー: 「全員」(フォームからPOSTを受け取るために必須)
 * 6. デプロイ後に表示される「ウェブアプリのURL」をコピーする。
 * 7. Next.js側の .env.local (本番は Vercel の環境変数) に
 *    NEXT_PUBLIC_ASSESSMENT_WEBHOOK_URL=<コピーしたURL>
 *    を設定する。
 *
 * ■ 注意
 * - スクリプトを変更した場合は、都度「新しいデプロイ」または既存デプロイの
 *   「管理」から再デプロイしないと変更が反映されません。
 * - スパム対策を強化したい場合は SHARED_SECRET を設定し、
 *   フォーム側にも同じ値を送らせるよう submitAssessment.ts を拡張してください
 *   (現時点では未設定=チェックなし)。
 */

const SHARED_SECRET = ""; // 例: "sakai-satei-2026" のように設定すると簡易認証が有効になる

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && payload.secret !== SHARED_SECRET) {
      return jsonResponse({ ok: false, message: "unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.propertyType || "",
      payload.prefecture || "",
      payload.city || "",
      payload.buildingAge || "",
      payload.size || "",
      payload.name || "",
      payload.phone || "",
      payload.email || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, message: String(error) });
  }
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
