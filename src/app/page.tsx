import { AppointmentCta } from "@/components/sections/AppointmentCta";
import { ClinicIntro } from "@/components/sections/ClinicIntro";
import { Differentials } from "@/components/sections/Differentials";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { LocationSection } from "@/components/sections/LocationSection";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TechnicalDirectorStrip } from "@/components/sections/TechnicalDirectorStrip";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { TreatmentsPreview } from "@/components/sections/TreatmentsPreview";
import {
  dentistStructuredData,
  faqStructuredData,
  localBusinessStructuredData
} from "@/lib/structured-data";

export default function Home() {
  const structuredData = [
    dentistStructuredData(),
    localBusinessStructuredData(),
    faqStructuredData()
  ].filter(Boolean);

  return (
    <main>
      {structuredData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <Hero />
      <TechnicalDirectorStrip />
      <Differentials />
      <TreatmentsPreview />
      <ClinicIntro />
      <TechnologySection />
      <TeamPreview />
      <FaqSection />
      <LocationSection />
      <AppointmentCta />
    </main>
  );
}
