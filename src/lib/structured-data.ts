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

function postalAddressStructuredData() {
  const location = contactConfig.location;

  if (!location.isConfirmed) {
    return undefined;
  }

  return compact({
    "@type": "PostalAddress",
    streetAddress: `${location.street}, ${location.complement}`,
    addressLocality: location.city,
    addressRegion: location.state,
    postalCode: location.postalCode,
    addressCountry: location.country
  });
}

function geoStructuredData() {
  const { latitude, longitude } = contactConfig.location;

  return {
    "@type": "GeoCoordinates",
    latitude,
    longitude
  };
}

function openingHoursSpecificationStructuredData() {
  return contactConfig.location.openingHoursSpecification.map((item) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: item.dayOfWeek,
    opens: item.opens,
    closes: item.closes
  }));
}

export function dentistStructuredData() {
  const url = absoluteUrl("/");
  const location = contactConfig.location;

  return compact({
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    url,
    areaServed: `${location.city}/${location.state}`,
    telephone: contactConfig.phone.isConfirmed ? contactConfig.phone.value : undefined,
    email: contactConfig.email.isConfirmed ? contactConfig.email.value : undefined,
    identifier: [siteConfig.clinicRegistration, siteConfig.technicalDirector.registration],
    hasMap: location.mapsUrl,
    address: postalAddressStructuredData(),
    geo: geoStructuredData(),
    openingHoursSpecification: openingHoursSpecificationStructuredData()
  });
}

export function localBusinessStructuredData() {
  const location = contactConfig.location;

  if (!location.isConfirmed && !contactConfig.phone.isConfirmed) {
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
    identifier: [siteConfig.clinicRegistration, siteConfig.technicalDirector.registration],
    areaServed: `${location.city}/${location.state}`,
    hasMap: location.mapsUrl,
    address: postalAddressStructuredData(),
    geo: geoStructuredData(),
    openingHoursSpecification: openingHoursSpecificationStructuredData()
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
