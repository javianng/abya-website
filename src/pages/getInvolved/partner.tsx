import Link from "next/link";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function Partner() {
  return (
    <PageLayout>
      <PageTitleSection title={"Join Us - Partner"}>
        Unlock unparalleled opportunities for growth and impact by partnering
        with the ASEAN Business Youth Association (ABYA). Whether you're a
        corporate entity, a sponsor looking to invest in youth development, or
        an organisation seeking to expand your reach, ABYA offers a range of
        partnership options tailored to your needs.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-8">
          <h2 className="heading2 underline decoration-brandRed decoration-8 underline-offset-8">
            How Partners Benefit
          </h2>
          <div className="space-y-4 border-l-4 border-brandYellow pl-4">
            <h3 className="heading4">Corporate Partners</h3>
            <ul className="list-disc pl-5">
              <li>
                Access to a pool of{" "}
                <strong>talented and motivated youth</strong> ready to
                contribute to your organisation.
              </li>
              <li>
                Opportunities for{" "}
                <strong>brand visibility and recognition</strong> through our
                events, programs, and digital platforms.
              </li>
              <li>
                Collaboration on projects and initiatives that align with your
                corporate <strong>social responsibility goals.</strong>
              </li>
            </ul>

            <h3 className="heading4">Sponsor Partners</h3>

            <ul className="list-disc pl-5">
              <li>
                Showcase your commitment to youth empowerment and sustainable
                development.
              </li>
              <li>
                Build meaningful connections with our community of young
                professionals and stakeholders.
              </li>
              <li>
                Gain exposure and recognition as a key supporter of ABYA's
                mission and initiatives.
              </li>
            </ul>
          </div>
          <h2 className="heading2 text-center">Partner with Us Today</h2>
          <p>
            Join us in shaping the future of ASEAN by becoming a partner with
            ABYA. Whether you're interested in corporate partnerships,
            sponsorship opportunities, or collaboration on specific projects, we
            invite you to indicate your interest by filling out the partnership
            form through the link below:
          </p>
          <div className="flex items-center justify-center gap-12 py-24">
            <p className="heading3 max-w-2xl border-l-8 border-brandRed pl-6">
              Let's partner and make a difference and create a{" "}
              <span className="bg-yellow-200 px-2">brighter future</span> for
              ASEAN youth.
            </p>
            <Link
              href={
                "https://airtable.com/embed/appghdn6ePUtfECW7/shrrVN1F2xA2rBsOh?backgroundColor=yellow"
              }
            >
              <Button variant="blue_outline">Join Us</Button>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
