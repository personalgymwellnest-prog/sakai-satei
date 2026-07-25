import type { AssessmentFormValues } from "@/types";

export interface SubmitResult {
  ok: boolean;
  message: string;
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_ASSESSMENT_WEBHOOK_URL;

const SUCCESS_MESSAGE =
  "査定のご依頼を受け付けました。担当者より折り返しご連絡いたします。";
const FAILURE_MESSAGE =
  "送信に失敗しました。恐れ入りますが、時間をおいて再度お試しください。";

/**
 * Single entry point for delivering a completed assessment request.
 *
 * Posts to a Google Apps Script Web App bound to a spreadsheet (see
 * google-apps-script/Code.gs for the receiving script). The body is sent
 * as `text/plain` on purpose — Apps Script Web Apps don't handle the
 * CORS preflight that a real `application/json` request triggers, so
 * `text/plain` (a CORS "simple request") is the standard workaround; the
 * script parses the JSON itself server-side.
 *
 * If NEXT_PUBLIC_ASSESSMENT_WEBHOOK_URL is not set (e.g. local dev before
 * the webhook is deployed), it falls back to logging only so the UI can
 * still be exercised end to end.
 */
export async function submitAssessment(
  values: AssessmentFormValues
): Promise<SubmitResult> {
  if (!WEBHOOK_URL) {
    console.log("[assessment:submit] no webhook configured, logging only", values);
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { ok: true, message: SUCCESS_MESSAGE };
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded with status ${response.status}`);
    }

    return { ok: true, message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error("[assessment:submit] failed", error);
    return { ok: false, message: FAILURE_MESSAGE };
  }
}
