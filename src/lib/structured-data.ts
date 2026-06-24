import type { FaqItem } from "@/content/faq";
import { homeFaqItems } from "@/content/faq";
import { contactConfig } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

function compact<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (Array.isArray(entry)) {
        return entry.length > 0;
      }
      return entry !== undefined && entry !== null && entry !== "";
    })
  );
}

export function dentistStructuredData() {
  const url = absoluteUrl("/");

  return compact({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    url,
    areaServed: `${siteConfig.city}/${siteConfig.state}`,
    telephone: contactConfig.phone.isConfirmed ? contactConfig.phone.value : undefined,
    email: contactConfig.email.isConfirmed ? contactConfig.email.value : undefined,
    founder: siteConfig.technicalDirector.name,
    foundingDate: String(siteConfig.foundedYear),
    identifier: [siteConfig.clinicRegistration, siteConfig.technicalDirector.registration],
    medicalSpecialty: "Dentistry",
    address: contactConfig.address.isConfirmed
      ? compact({
          "@type": "PostalAddress",
          streetAddress: contactConfig.address.street,
          addressLocality: contactConfig.address.city,
          addressRegion: contactConfig.address.state,
          postalCode: contactConfig.address.postalCode,
          addressCountry: contactConfig.address.country
        })
      : undefined
  });
}

export function localBusinessStructuredData() {
  if (!contactConfig.address.isConfirmed && !contactConfig.phone.isConfirmed) {
    return null;
  }

  const url = absoluteUrl("/");

  return compact({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    url,
    telephone: contactConfig.phone.isConfirmed ? contactConfig.phone.value : undefined,
    email: contactConfig.email.isConfirmed ? contactConfig.email.value : undefined,
    founder: siteConfig.technicalDirector.name,
    foundingDate: String(siteConfig.foundedYear),
    identifier: [siteConfig.clinicRegistration, siteConfig.technicalDirector.registration],
    medicalSpecialty: "Dentistry",
    paymentAccepted: "Atendimento particular",
    address: contactConfig.address.isConfirmed
      ? compact({
          "@type": "PostalAddress",
          streetAddress: contactConfig.address.street,
          addressLocality: contactConfig.address.city,
          addressRegion: contactConfig.address.state,
          postalCode: contactConfig.address.postalCode,
          addressCountry: contactConfig.address.country
        })
      : undefined,
    geo:
      contactConfig.address.latitude && contactConfig.address.longitude
        ? {
            "@type": "GeoCoordinates",
            latitude: contactConfig.address.latitude,
            longitude: contactConfig.address.longitude
          }
        : undefined,
    openingHours: contactConfig.openingHours
  });
}

export function faqStructuredData(items: FaqItem[] = homeFaqItems) {
  if (!items.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbStructuredData(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
