import type { MetadataRoute } from "next";
import { treatments } from "@/content/treatments";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/a-clinica",
    "/tratamentos",
    ...treatments.map((treatment) => `/tratamentos/${treatment.slug}`),
    "/equipe",
    "/contato",
    "/politica-de-privacidade",
    "/aviso-legal"
  ];
  const urls = paths.map((path) => absoluteUrl(path));

  if (urls.some((url) => !url)) {
    return [];
  }

  return urls.map((url, index) => ({
    url: String(url),
    lastModified: new Date(),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.6
  }));
}
