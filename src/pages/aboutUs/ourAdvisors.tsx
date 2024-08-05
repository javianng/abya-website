import Link from "next/link";
import Image from "next/image";
import PageLayout from "~/components/common/PageLayout";
import { ADVISOR_DETAILS } from "~/database/AdvisorData";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";

export default function OurAdvisors() {
  return (
    <PageLayout>
      <PageTitleSection title={"Our Advisors"}>
        Empowering Youth: Meet the Visionaries Behind ABYA's Success
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-3">
          {ADVISOR_DETAILS.map((item, i) => (
            <div key={i}>
              <Link href={item.linkedin}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
                  <Image
                    src={item.image}
                    alt={""}
                    width={2000}
                    height={2000}
                    className="h-screen max-h-[40rem] overflow-hidden rounded-lg object-cover "
                  />
                  <div className="flex flex-col justify-center">
                    <h2 className="heading2">{item.name}</h2>
                    <p className="border-l-4 border-brandYellow pl-4">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
