import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "~/components/Hero";
import { ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import IndexEstablishedDate from "public/IndexEstablishedDate.jpg";
import ContentContainer from "~/components/common/ContentContainer";
import HearFromOurCommunity from "~/components/HearFromOurCommunity";

export default function Home() {
  return (
    <PageLayout>
      <Hero />

      <div
        className="bg-[url('/WithYourSupport.jpg')] bg-cover bg-fixed bg-center"
        id="support"
      >
        <div className="z-0 flex h-[90vh] items-center justify-center py-16 text-center">
          <div className="flex flex-col gap-5 text-white sm:gap-8">
            <h2 className="heading2 font-bold">
              With your support,
              <br />
              Here&apos;s what we have achieved!
            </h2>

            <div className="flex justify-center gap-8">
              <div className="flex w-fit flex-col items-center justify-center gap-3 border-r-4 pr-8">
                <p className="heading1 font-bold">3500+</p>
                <p className="heading4 capitalize">
                  ASEAN Youth
                  <br />
                  Impacted
                </p>
              </div>
              <div className="flex justify-center">
                <div className="grid w-fit grid-rows-2 gap-4">
                  <div className="flex flex-col">
                    <p className="heading2">70+</p>
                    <p className="font-semibold capitalize">
                      Supporting
                      <br />
                      Organisations
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="heading2">11</p>
                    <p className="font-semibold capitalize">
                      ASEAN member <br />
                      nations covered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href={""}>
                <Button variant="blue_filled">
                  Learn More About Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ContentContainer>
        <div className="mx-auto max-w-5xl py-16">
          <div className="m-2 rounded-xl border-2 border-brandYellow transition duration-200 hover:cursor-pointer hover:bg-neutral-200">
            <div className="p-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Image
                  src={IndexEstablishedDate}
                  alt={""}
                  className="w-full rounded-md object-cover shadow-md sm:w-1/2"
                />
                <div className="flex flex-col justify-center gap-3">
                  <Link href={"/aboutUs"} className="group">
                    <h2 className="heading3 pb-4">
                      ABYA, legalized in 2021, connects youth to ASEAN's
                      opportunities.
                    </h2>
                    <p>
                      Through our PEC pillars — Political, Economic, and
                      Cultural — we collaborate with industry experts and
                      corporations to gain knowledge and practical experience in
                      line with current trends. - should this be enough?
                    </p>
                    <div className="flex items-center pt-2">
                      <ChevronRight className="h-8 w-8 text-neutral-200 duration-200 group-hover:translate-x-2 group-hover:text-neutral-950" />
                      <p className="pl-2 text-transparent duration-200 group-hover:text-black">
                        Find out <strong>About Us</strong>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HoverEffect items={values} />
        </div>
      </ContentContainer>
      <HearFromOurCommunity />
    </PageLayout>
  );
}

const values = [
  {
    title: "Cultural Awareness",
    description:
      "ABYA provides youths exposure to happenings within our geographical region to foster a sense of belonging and understanding of the ASEAN community",
  },
  {
    title: "Network Facilitation",
    description:
      "Create Networking connections and opportunities between ABYA members, professionals and partners",
  },
  {
    title: "Competency Building",
    description:
      "Provide a platform for exposure surrounding business & cross-cultural competence in the ASEAN region",
  },
];
