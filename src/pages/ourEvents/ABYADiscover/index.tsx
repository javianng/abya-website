import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import { ABYA_DISCOVER_DETAILS } from "~/database/ABYADiscoverData";
import DiscoverOffer from "~/components/ourEvents/ABYADiscover/DiscoverOffer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function ABYADiscover() {
  return (
    <PageLayout>
      <PageTitleSection title={"ABYA Discover"}>
        ABYA Discover is a dynamic platform designed to deepen your
        understanding of the diverse ASEAN countries. Designed for youth, ABYA
        Discover provides easily accessible, bite-sized content that fosters
        meaningful exchanges and enriches cross-cultural understanding.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="heading2">What ABYA Discover Offers:</h2>
          <DiscoverOffer />
          <h2 className="heading2 pt-8">How ABYA Discover Works</h2>
          <div className="grid">
            <p className="my-4 border-l-4 border-brandYellow py-2 pl-4">
              ABYA Discover makes exploring ASEAN{" "}
              <strong>straightforward </strong>
              and <strong>engaging</strong>:
            </p>
            <h3 className="pb-2 underline decoration-brandRed decoration-4 underline-offset-4">
              <strong>Social Integration</strong>
            </h3>
            <p>
              Follow us on platforms like Instagram, LinkedIn, Facebook, and
              Telegram for bite-sized insights and interactive content that
              keeps you informed and engaged.
            </p>
          </div>
          <div>
            <h3 className="pb-2 underline decoration-brandRed decoration-4 underline-offset-4">
              <strong>Digital Expansion</strong>
            </h3>
            <p>
              Dive deeper with longer-form content such as webinars, partner-led
              initiatives, and blogs. These resources offer comprehensive
              insights into various aspects of the ASEAN business and cultural
              landscape.
            </p>
          </div>
          <h2 className="heading2 pt-8">
            <span className=" bg-brandBlue-20">Highlights</span> of ABYA
            Discover
          </h2>
          <p>
            ABYA Discover serves as the central hub for exploring the vast
            opportunities and challenges within ASEAN. Through our flagship
            programme, we ensure regular, self-directed engagement, offering
            information in a format that is both educational and accessible.
          </p>
          <h2 className="heading2 pt-8">Examples of Our Past Initiatives:</h2>
          <ul className="grid gap-4">
            <li>
              <p className="pb-2 underline decoration-brandRed decoration-4 underline-offset-4">
                <strong>Webinars</strong>
              </p>
              <p>
                Participate in sessions like “Empowering ASEAN Through ESG:
                Paving the Way for Sustainable Growth,” featuring esteemed
                speakers such as Malaysia's Deputy Minister of Economy, Dato
                Hajjah Hanifah Hajar Taib.
              </p>
            </li>
            <li>
              <p className="pb-2 underline decoration-brandRed decoration-4 underline-offset-4">
                <strong>Networking Events</strong>
              </p>
              <p>
                Join events such as the Networking Picnic at Marina Barrage,
                connecting with peers and industry leaders.
              </p>
            </li>
            <li>
              <p className="pb-2 underline decoration-brandRed decoration-4 underline-offset-4">
                <strong>Experiential Learning</strong>
              </p>
              <p>
                Engage in overseas trips for hands-on experience and a global
                perspective.
              </p>
            </li>
          </ul>

          <div className="flex items-center justify-center py-28">
            <p className="heading4 max-w-xl rounded-lg bg-brandRed-10 p-4 shadow-xl">
              Ready to delve into the heart of ASEAN? Join ABYA Discover today
              and become part of our community. Explore, learn, and grow with us
              as we uncover the potential of ASEAN together.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {ABYA_DISCOVER_DETAILS.map((item, index) => (
            <Card className="w-[350px]" key={index}>
              <CardHeader>
                <CardTitle className="line-clamp-2 h-12">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex h-48">
                <Image
                  src={item.thumbnail}
                  alt={""}
                  width={800}
                  height={800}
                  className="rounded-md object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={item.link}>
                  <Button>View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
