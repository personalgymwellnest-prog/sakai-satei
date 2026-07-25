import type { MetadataRoute } from "next";
import { areas } from "@/data/areas";
import { scenes } from "@/data/scenes";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/privacy", "/tokushoho"].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.5,
  }));

  const areaPages = areas.map((area) => ({
    url: new URL(`/areas/${area.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const scenePages = scenes.map((scene) => ({
    url: new URL(`/scenes/${scene.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...areaPages, ...scenePages];
}
