import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import { ABYA_CONNECT_DETAILS } from "~/database/ABYAConnectData";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function ABYAConnect() {
  return (
    <PageLayout>
      <PageTitleSection title={"ABYA Connect"}>
        ABYA Connect is dedicated to creating meaningful connections among
        youths and professionals across diverse sectors in the ASEAN region. Our
        mission is to foster a personalised interaction platform that encourages
        collaboration, idea-sharing, and professional growth.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="heading2">What ABYA Connect Offers:</h2>
          <ul className="list-decimal pl-5">
            <li>
              <p>Interactive Events</p>
              <ul>
                <li>
                  <p>
                    Engage in events that bring together like-minded individuals
                    to share ideas, explore collaborations, and build strong
                    networks.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>Personalised Connections</p>
              <ul>
                <li>
                  <p>
                    Participate in our tailored events designed to cultivate
                    deeper connections and relationships among ABYA members,
                    partners, and stakeholders.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <h2 className="heading2">Highlights of ABYA Connect:</h2>
          <ul className="list-decimal pl-5">
            <li>
              <p>Lunch and Learn Series:</p>
              <ul>
                <li>
                  <p>
                    Mid-sized events where participants can connect and engage
                    in breakout sessions for more focused and meaningful
                    interactions.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>Network Series:</p>
              <ul>
                <li>
                  <p>
                    Intimate gatherings for members and stakeholders, fostering
                    professional engagements and discussions.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>Enhancing Career Development:</p>
              <ul>
                <li>
                  <p>
                    ABYA Connect is committed to your career growth. We offer
                    internship and job opportunities, discussions on critical
                    issues like climate change and sustainability, and blend
                    professional development with recreational activities. Join
                    us for sports, food events, and entertainment-focused
                    activities that make networking fun and engaging.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex items-center justify-center py-28">
            <p className="heading4 max-w-xl rounded-lg bg-brandRed-10 p-4 shadow-xl">
              ABYA Connect is more than just a program; it's a bridge to new
              opportunities, stronger networks, and a collaborative future. Join
              us and be part of this transformative journey.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {ABYA_CONNECT_DETAILS.map((item, index) => (
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
