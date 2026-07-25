import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

interface CtaButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
}

export default function CtaButton({
  href = siteConfig.formAnchor,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-sm transition-transform active:scale-95 hover:brightness-105";

  const variants: Record<string, string> = {
    primary: "bg-accent-600 text-white",
    secondary: "bg-white text-navy-900 border border-navy-100",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
