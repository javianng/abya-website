import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Testimonials from "~/components/Testomonials";
import PageLayout from "~/components/common/PageLayout";
import type { Partner } from "~/database/OurPartnersData";
import { OUR_PARTNERS_DETAILS } from "~/database/OurPartnersData";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function OurSupporters() {
  return (
    <PageLayout>
      <PageTitleSection title={"Our Partners"}>
        The ASEAN Business Youth Association greatly appreciates the support of
        our industry partners, who have contributed to the success of our
        events.
      </PageTitleSection>
      <ContentContainer>
        <div className="mb-12 border-l-4 border-brandYellow py-2 pl-4">
          <h2 className="heading4">
            Here are some of our ABYA valued Partners!
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 pb-12">
          {OUR_PARTNERS_DETAILS.map((partner, index) => (
            <EventPartnerSection key={index} partner={partner} />
          ))}
        </div>
        <div className="flex flex-col items-center py-24">
          <div className="flex w-full flex-col items-center gap-5 rounded-md bg-brandYellow-40 p-12 shadow-lg">
            <h2 className="heading2">Interested in becoming a partner?</h2>
            <Link href={"/getInvolved/partner"}>
              <Button variant="blue_filled">
                Click Here to Find out More!
              </Button>
            </Link>
          </div>
        </div>
      </ContentContainer>
      <Testimonials />
    </PageLayout>
  );
}

interface EventPartnerSectionProps {
  partner: Partner;
}

const EventPartnerSection: React.FC<EventPartnerSectionProps> = React.memo(
  ({ partner }) => (
    <div className="flex flex-col items-center">
      <Image
        width={1600}
        height={1600}
        src={partner.image}
        alt={partner.text}
        className="h-32 w-full max-w-60 object-contain"
      />
    </div>
  ),
);
