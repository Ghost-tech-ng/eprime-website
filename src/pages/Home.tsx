import { Hero } from "../components/home/Hero";
import { ProductShelf } from "../components/home/ProductShelf";
import { Services } from "../components/home/Services";
import { HowWeWork } from "../components/home/HowWeWork";
import { DivisionsStrip } from "../components/home/DivisionsStrip";
import { CertificateSection } from "../components/shared/CertificateSection";
import { ContactBand } from "../components/shared/ContactBand";

export function Home() {
  return (
    <>
      <Hero />
      <ProductShelf />
      <Services />
      <HowWeWork />
      <DivisionsStrip />
      <CertificateSection />
      <ContactBand />
    </>
  );
}
