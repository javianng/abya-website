import Image from "next/image";
import { Search, Share2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import { ABYA_CONNECT_DETAILS } from "~/database/ABYAConnectData";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import { ABYA_DISCOVER_DETAILS } from "~/database/ABYADiscoverData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Link from "next/link";

export default function OurEvents() {
  return (
    <PageLayout>
      <PageTitleSection title={"Our Events"}>
        Explore the power of connection at ABYA and embark on an exciting
        journey with ABYA Discover and ABYA Connect. Our events are designed to
        ignite meaningful relationships and uncover fresh opportunities. Join us
        to experience inspiring workshops, insightful discussions, and
        networking sessions that foster growth and collaboration.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl bg-[url('/OurEvents.jpg')] bg-cover bg-bottom">
            <div className="flex h-screen max-h-[36rem] min-h-96 justify-center rounded-xl bg-black bg-opacity-40">
              <div className="grids-cols-1 grid w-full grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
                <a
                  href="#ABYADiscover"
                  className="flex items-center justify-center rounded-xl text-white duration-200 hover:bg-brandRed hover:bg-opacity-20"
                >
                  <h2 className="heading2">ABYA Discover</h2>
                </a>
                <a
                  href="#ABYAConnect"
                  className="flex items-center justify-center rounded-xl text-white duration-200 hover:bg-brandYellow hover:bg-opacity-20"
                >
                  <h2 className="heading2">ABYA Connect</h2>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-9">
            <Search className="h-12 w-12" />
            <div>
              <h2 className="heading2 uppercase" id="ABYADiscover">
                ABYA Discover
              </h2>
              <p className="font-thin">Previously ABYA LEAPS</p>
            </div>
          </div>
          <p>
            ABYA Discover is a series of thematic workshops covering macro
            trends in the ASEAN region. With topics such as sustainability and
            digitalisation, youths and young professionals alike can expect to
            gain insights on the opportunities in these spaces
          </p>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col gap-2">
                <p className="heading4">See how the programs go each year</p>
                <Link href={"/ourEvents/ABYADiscover"}>
                  <Button variant="blue_outline">Upcoming Discover</Button>
                </Link>
              </div>
            </div>
            <div className="w-full px-9 sm:w-2/3">
              <Carousel>
                <CarouselContent>
                  {ABYA_DISCOVER_DETAILS.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                        <div className="flex h-48 overflow-hidden">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={800}
                            height={800}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                          <h3 className="heading3 line-clamp-3 uppercase">
                            {item.title}
                          </h3>
                          <Link href={item.link}>
                            <Button variant="blue_filled" className="w-fit">
                              View More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <hr className="mt-8 border-neutral-950 py-4" />

          <div className="flex items-center gap-2">
            <Share2 className="h-12 w-12" />
            <div>
              <h2 className="heading2 uppercase" id="ABYAConnect">
                ABYA Connect
              </h2>
              <p className="font-thin">Previously ABYA Explore</p>
            </div>
          </div>
          <div>
            <p>
              ABYA Connect aims to create a space for all members of the ABYA
              community to exchange ideas in-person, and in a smaller setting,
              facilitating mentorship and growth.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="w-full sm:w-1/3">
              <p className="heading4">
                Interested in finding out how the previous ABYA Connect Series
                went?
              </p>
            </div>
            <div className="w-full px-9 sm:w-2/3">
              <Carousel>
                <CarouselContent>
                  {ABYA_CONNECT_DETAILS.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="card grid grid-cols-1 items-center gap-5 rounded-xl border-2 border-brandBlue-50 p-4 sm:grid-cols-2">
                        <div className="flex h-48 overflow-hidden">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={800}
                            height={800}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                          <h3 className="heading3 line-clamp-3 uppercase">
                            {item.title}
                          </h3>
                          <Link href={item.link}>
                            <Button variant="blue_filled">View More</Button>
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
