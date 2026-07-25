"use client";

import { useState } from "react";
import { areas } from "@/data/areas";
import type { AssessmentFormValues } from "@/types";
import { submitAssessment } from "@/components/form/submitAssessment";

const propertyTypes = ["戸建て", "マンション", "土地"];
const buildingAges = ["5年以内", "6〜10年", "11〜20年", "21〜30年", "31年以上", "わからない"];

const initialValues: AssessmentFormValues = {
  propertyType: "",
  prefecture: "大阪府",
  city: "",
  buildingAge: "",
  size: "",
  name: "",
  phone: "",
  email: "",
};

type StepErrors = Partial<Record<keyof AssessmentFormValues, string>>;

interface AssessmentFormProps {
  defaultWardSlug?: string;
  heading?: string;
  description?: string;
}

const TOTAL_STEPS = 3;

export default function AssessmentForm({
  defaultWardSlug,
  heading = "60秒で入力完了。無料一括査定はこちら",
  description = "物件情報を選んで送信するだけ。しつこい営業を強要しない運営を心がけています。",
}: AssessmentFormProps) {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<AssessmentFormValues>(() => ({
    ...initialValues,
    city: defaultWardSlug
      ? `堺市${areas.find((a) => a.slug === defaultWardSlug)?.name ?? ""}`
      : "",
  }));
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  function update<K extends keyof AssessmentFormValues>(key: K, value: AssessmentFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateStep(currentStep: number): boolean {
    const nextErrors: StepErrors = {};

    if (currentStep === 1) {
      if (!values.propertyType) nextErrors.propertyType = "物件種別を選択してください";
      if (!values.city) nextErrors.city = "エリアを選択してください";
    }

    if (currentStep === 2) {
      if (!values.buildingAge) nextErrors.buildingAge = "築年数を選択してください";
      if (!values.size) nextErrors.size = "広さの目安を入力してください";
    }

    if (currentStep === 3) {
      if (!values.name.trim()) nextErrors.name = "お名前を入力してください";
      if (!/^[0-9()\-+ ]{9,}$/.test(values.phone.trim()))
        nextErrors.phone = "電話番号を正しく入力してください";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
        nextErrors.email = "メールアドレスを正しく入力してください";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  }

  function goBack() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validateStep(3)) return;

    setSubmitting(true);
    const response = await submitAssessment(values);
    setSubmitting(false);
    setResult(response);
  }

  if (result?.ok) {
    return (
      <div
        id="assessment-form"
        className="scroll-mt-24 rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-10"
      >
        <p className="text-2xl font-bold">送信が完了しました</p>
        <p className="mt-3 text-sm text-navy-100 sm:text-base">{result.message}</p>
      </div>
    );
  }

  return (
    <div
      id="assessment-form"
      className="scroll-mt-24 rounded-3xl border border-navy-100 bg-white px-5 py-8 shadow-lg shadow-navy-900/5 sm:px-10 sm:py-10"
    >
      <div className="mx-auto max-w-xl">
        <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">{heading}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>

        <ol className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-400 sm:text-sm">
          {["物件情報", "詳細情報", "ご連絡先"].map((label, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === step;
            const isDone = stepNumber < step;
            return (
              <li key={label} className="flex flex-1 items-center gap-2">
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] ${
                    isActive || isDone
                      ? "bg-accent-600 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {isDone ? "✓" : stepNumber}
                </span>
                <span className={isActive ? "text-navy-900" : ""}>{label}</span>
                {stepNumber !== TOTAL_STEPS && (
                  <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <fieldset>
                <legend className="mb-2 text-sm font-bold text-navy-900">
                  物件種別 <span className="text-accent-600">必須</span>
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {propertyTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => update("propertyType", type)}
                      className={`rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                        values.propertyType === type
                          ? "border-accent-600 bg-accent-50 text-accent-900"
                          : "border-slate-200 text-slate-600 hover:border-accent-500"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.propertyType && (
                  <p className="mt-1 text-xs text-red-600">{errors.propertyType}</p>
                )}
              </fieldset>

              <div>
                <label htmlFor="city" className="mb-2 block text-sm font-bold text-navy-900">
                  所在地(都道府県・市区町村) <span className="text-accent-600">必須</span>
                </label>
                <div className="flex gap-2">
                  <input
                    disabled
                    value={values.prefecture}
                    className="w-24 shrink-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-500"
                  />
                  <select
                    id="city"
                    value={values.city}
                    onChange={(event) => update("city", event.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                  >
                    <option value="">区を選択してください</option>
                    {areas.map((area) => (
                      <option key={area.slug} value={`堺市${area.name}`}>
                        堺市{area.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="buildingAge" className="mb-2 block text-sm font-bold text-navy-900">
                  築年数 <span className="text-accent-600">必須</span>
                </label>
                <select
                  id="buildingAge"
                  value={values.buildingAge}
                  onChange={(event) => update("buildingAge", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                >
                  <option value="">選択してください</option>
                  {buildingAges.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                {errors.buildingAge && (
                  <p className="mt-1 text-xs text-red-600">{errors.buildingAge}</p>
                )}
              </div>

              <div>
                <label htmlFor="size" className="mb-2 block text-sm font-bold text-navy-900">
                  広さの目安(㎡) <span className="text-accent-600">必須</span>
                </label>
                <input
                  id="size"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  placeholder="例: 80"
                  value={values.size}
                  onChange={(event) => update("size", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                />
                {errors.size && <p className="mt-1 text-xs text-red-600">{errors.size}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy-900">
                  お名前 <span className="text-accent-600">必須</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="堺 太郎"
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy-900">
                  電話番号 <span className="text-accent-600">必須</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="090-1234-5678"
                  value={values.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy-900">
                  メールアドレス <span className="text-accent-600">必須</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@sakai-satei.jp"
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm text-slate-900"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <p className="text-xs text-slate-500">
                送信いただいた情報は査定のご案内以外の目的では使用しません。詳しくは
                <a href="/privacy" className="text-accent-600 underline">
                  プライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>
          )}

          {result && !result.ok && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {result.message}
            </p>
          )}

          <div className="flex items-center justify-between gap-3 pt-2">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600"
              >
                戻る
              </button>
            ) : (
              <span />
            )}

            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-accent-600 px-8 py-3 text-sm font-bold text-white hover:brightness-105"
              >
                次へ進む
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-accent-600 px-8 py-3 text-sm font-bold text-white hover:brightness-105 disabled:opacity-60"
              >
                {submitting ? "送信中..." : "無料で査定を依頼する"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
