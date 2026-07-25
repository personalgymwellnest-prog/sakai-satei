import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
