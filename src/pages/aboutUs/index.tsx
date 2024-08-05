import Link from "next/link";
import Image from "next/image";
import Hero from "~/components/aboutUs/Hero";
import { Button } from "~/components/ui/button";
import OurStory from "~/components/aboutUs/OurStory";
import { MEMBER_DETAILS } from "~/database/MemberData";
import PageLayout from "~/components/common/PageLayout";
import { ChevronRight, MessageSquareQuote } from "lucide-react";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import HearFromOurCommunity from "~/components/HearFromOurCommunity";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function AboutUs() {
  return (
    <PageLayout>
      <PageTitleSection title={"About Us"}>
        Officially legalised as society in 2021, ABYA is an enabler for youths
        to increase their knowledge and gain a foothold in ASEAN through
        participating in our programmes, to understand economies and navigate
        cultural diversity.
      </PageTitleSection>
      <Hero />
      <OurStory />
      <HearFromOurCommunity />
      <ContentContainer>
        <h1 className="heading1 pb-8">
          Meet the <span className=" text-brandRed">Team</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          {MEMBER_DETAILS.map((item, i) => (
            <div key={i}>
              <Link href={item.linkedin} className="group hidden sm:block">
                <Card className="max-w-80 border-2 shadow-sm duration-200 group-hover:border-brandRed-20 group-hover:bg-brandRed-10">
                  <CardHeader>
                    <CardTitle className="h-12">{item.name}</CardTitle>
                    <CardDescription>{item.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-md bg-neutral-200">
                      <Image
                        src={item.image}
                        alt={""}
                        width={600}
                        height={600}
                        className="flex h-80 object-cover duration-200 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3">
                    <div className="flex items-start gap-1">
                      <div>
                        <MessageSquareQuote className="mr-2 h-6 w-6" />
                      </div>
                      <p className="h-28 overflow-scroll">{item.quote}</p>
                    </div>
                    <div className="flex items-center">
                      <ChevronRight className="h-8 w-8 text-neutral-200 duration-200 group-hover:translate-x-2 group-hover:text-neutral-950" />
                      <p className="pl-2 text-transparent duration-200 group-hover:text-black">
                        Connect with Me
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>

              <Link href={item.linkedin} className="block sm:hidden">
                <div className="flex flex-row gap-3 rounded-lg border-2 bg-white p-4">
                  <div className="h-60 w-36 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={""}
                      width={600}
                      height={600}
                      className="flex h-60 w-36 rounded-md bg-neutral-200 object-cover"
                    />
                  </div>
                  <div className="flex w-32 flex-col gap-2">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs font-extralight">{item.position}</p>
                    <hr />
                    <p className=" h-32 overflow-scroll text-xs font-extralight">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="h-[32rem] max-h-fit bg-[url('/HaveAnyQuestion.jpg')] bg-cover bg-fixed bg-center">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <h1 className="heading1 text-brandYellow">Have any questions?</h1>
          <Button className="border-2 border-white bg-transparent text-white">
            Contact Us
          </Button>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
