import { Hero } from "../components/home/Hero";
import { DivisionsGrid } from "../components/home/DivisionsGrid";
import { FromDivisions } from "../components/home/FromDivisions";
import { HowDivisionsOpen } from "../components/home/HowDivisionsOpen";
import { MadeInBenin } from "../components/home/MadeInBenin";
import { CertificateSection } from "../components/shared/CertificateSection";
import { ContactBand } from "../components/shared/ContactBand";

export function Home() {
  return (
    <>
      <Hero />
      <DivisionsGrid />
      <FromDivisions />
      <HowDivisionsOpen />
      <MadeInBenin />
      <CertificateSection />
      <ContactBand
        title="Building, farming or backing something?"
        body="Software project, a farm that needs records, a site that needs a schedule, or a conversation about what comes next. Tell us, and we come back with questions and honest numbers in naira."
        whatsappText="Hello E-Prime, I would like to talk to you."
      />
    </>
  );
}
