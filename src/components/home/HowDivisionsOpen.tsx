import { SectionHeading } from "../ui/SectionHeading";
import { GoLiveCard, Roadmap } from "../shared/Roadmap";
import { groupRoadmap } from "../../content/site";

export function HowDivisionsOpen() {
  return (
    <section aria-labelledby="roadmap-title" className="py-24 md:py-32">
      <div className="ep-container">
        <SectionHeading
          id="roadmap-title"
          eyebrow="How a division opens"
          title={
            <>
              Software first.
              <br className="hidden md:block" /> Then the ground under it.
            </>
          }
          lede="Each new division starts as software we can build and test with real operators, and becomes an operation only once the numbers support it."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.7fr_1fr]">
          <Roadmap items={groupRoadmap} />
          <GoLiveCard />
        </div>
      </div>
    </section>
  );
}
