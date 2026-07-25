"use client";

import Link from "next/link";
import { useState } from "react";
import CtaButton from "@/components/common/CtaButton";
import { navLinks, siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-col leading-tight text-navy-900"
          onClick={() => setOpen(false)}
        >
          <span className="text-sm sm:text-lg font-bold">{siteConfig.shortName}</span>
          <span className="text-[10px] sm:text-xs text-slate-600">堺市の不動産売却に特化</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-navy-800">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton size="md">無料で査定を依頼する</CtaButton>
        </div>

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-navy-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 hover:bg-navy-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3">
            <CtaButton size="md" className="w-full">
              無料で査定を依頼する
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}
