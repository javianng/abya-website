import Link from "next/link";
import { CornerRightDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function Member() {
  return (
    <PageLayout>
      <PageTitleSection title={"Join Us - MEMBER"}>
        Ready to elevate your career and expand your horizons in leadership and
        entrepreneurship? Become a member of the ASEAN Business Youth
        Association (ABYA) and unlock a host of exclusive benefits to boost your
        professional growth.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-4">
          <h2 className="heading3 pb-2 underline decoration-brandBlue-50 decoration-8 underline-offset-8">
            Here's what you can expect:
          </h2>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <li>
              <p>
                <strong>Access to Exclusive Webinars and Events</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Dive into specialized webinars led by experienced leaders
                    and industry experts. These sessions are your ticket to
                    staying ahead of the curve and expanding your network with
                    like-minded professionals.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Networking Opportunities Galore</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Get involved in panel discussions hosted by ABYA through our
                    diverse programs, such as the ABYA Explore and ABYA LEAPS.
                    It's not just exposure—it's a chance to establish
                    connections and exchange ideas that could elevate your
                    career forward.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Skill Development and Learning</strong>
              </p>
              <ul>
                <li>
                  <p>
                    Sharpen your skill set with webinars and resources designed
                    to equip you with practical problem-solving. Unlock a
                    variety of training sessions, workshops, and resources aimed
                    at developing essential business skills.
                  </p>
                </li>
              </ul>
            </li>
          </ol>

          <div className="mt-12 flex items-center justify-center gap-2 py-8">
            <h2 className="heading1 text-center">JOIN US NOW!</h2>
            <CornerRightDown className="h-8 w-8 animate-bounce text-brandYellow" />
          </div>

          <div className="flex items-center justify-center gap-12 pb-24">
            <p className="heading3 max-w-2xl border-l-8 border-brandRed pl-6">
              <span className="bg-yellow-200 px-2">
                Join the ABYA community today
              </span>{" "}
              and take your professional journey to new heights. Together, let's
              pave the way for a brighter, more prosperous ASEAN future.
            </p>
            <Link
              href={
                "https://airtable.com/embed/appt5opZxZjWqQd1s/shrK6MGvmxkufqfO7?backgroundColor=teal"
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
