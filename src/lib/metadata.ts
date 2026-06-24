import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl, isIndexingEnabled } from "@/lib/utils";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/"
}: MetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = absoluteUrl(path);
  const socialImagePath = "/favicon.svg";
  const socialImageUrl = absoluteUrl(socialImagePath) || socialImagePath;
  const indexingEnabled = isIndexingEnabled();
  const socialImage = {
    url: socialImageUrl,
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} - imagem provisoria`
  };
  const openGraph = {
    title: pageTitle,
    description,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website" as const,
    images: [socialImage],
    ...(url ? { url } : {})
  };

  return {
    title: pageTitle,
    description,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
    },
    ...(url
      ? {
          alternates: {
            canonical: url
          }
        }
      : {}),
    openGraph,
    robots: {
      index: indexingEnabled,
      follow: indexingEnabled,
      googleBot: {
        index: indexingEnabled,
        follow: indexingEnabled
      }
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [socialImageUrl]
    }
  };
}
