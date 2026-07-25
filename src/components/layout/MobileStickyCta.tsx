import CtaButton from "@/components/common/CtaButton";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <CtaButton size="md" className="w-full">
        無料で査定を依頼する
      </CtaButton>
    </div>
  );
}
