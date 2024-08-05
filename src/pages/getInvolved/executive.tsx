import Link from "next/link";
import { Button } from "~/components/ui/button";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import { BrainCircuit, Cog, Speech, UsersRound } from "lucide-react";

export default function Executive() {
  return (
    <PageLayout>
      <PageTitleSection title={"Join Us - EXECUTIVE"}>
        Join the ASEAN Business Youth Association (ABYA) as an Executive and be
        part of a dynamic team dedicated to driving positive change in the ASEAN
        region. We're on the lookout for talented individuals who are committed
        to making a difference and ready to contribute their skills to our
        cause.
      </PageTitleSection>
      <ContentContainer>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
            <div className="justify-top flex flex-col items-center">
              <UsersRound className="h-32 w-32" />
              <p className="heading2 pb-2 text-brandBlue">37</p>
              <p className="heading4 text-center">Executives</p>
            </div>
            <div className="justify-top flex flex-col items-center">
              <Cog className="h-32 w-32" />
              <p className="heading2 pb-2 text-brandBlue">4</p>
              <p className="heading4 text-center">Departments</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="heading2 pb-4 underline decoration-brandRed decoration-8 underline-offset-8">
              Talent We're Looking For
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <li className="flex items-center gap-2 rounded-md bg-brandRed-10 p-4">
                <UsersRound className="h-28 w-28" />
                <div>
                  <h3 className="heading4">Leadership Skills</h3>
                  <p>
                    We seek individuals who can lead by example, inspire others,
                    and drive projects forward with determination.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 rounded-md bg-brandYellow-10 p-4">
                <BrainCircuit className="h-28 w-28" />
                <div>
                  <h3 className="heading4">Creativity and Innovation</h3>
                  <p>
                    We value innovative thinkers who can bring fresh ideas to
                    the table and find creative solutions to complex problems.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 rounded-md bg-brandBlue-10 p-4">
                <Speech className="h-28 w-28" />
                <div>
                  <h3 className="heading4">Strong Communication</h3>
                  <p>
                    Excellent communication skills are essential for effectively
                    collaborating with team members, partners, and stakeholders.
                  </p>
                </div>
              </li>
            </ul>
            <p>
              <strong>Commitment to Excellence:</strong>
            </p>
            <p>
              As an Executive at ABYA, you'll have the opportunity to make a
              meaningful impact by contributing your skills and expertise to our
              various initiatives. Whether it's organising events, leading
              projects, or developing strategic partnerships, your contributions
              will play a crucial role in advancing our mission of empowering
              ASEAN youth.
            </p>
            <p>
              <strong>How You Can Contribute:</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>
                Project Management: Take charge of projects from start to
                finish, ensuring timely execution and successful outcomes.
              </li>
              <li>
                Networking and Partnership Building: Forge strategic
                partnerships with organisations and individuals who share our
                vision, expanding our reach and influence.
              </li>
              <li>
                Mentorship and Development: Support the growth and development
                of junior team members through mentorship and guidance.
              </li>
            </ul>

            <h2 className="heading2 py-8 text-center">
              Management Associate Programme
            </h2>

            <p>
              ABYA offers a Management Associate Programme. This intensive
              programme provides hands-on experience, mentorship from industry
              leaders, and opportunities for personal and professional growth.
              Join us as an Executive and pave the way for a successful career
              in the ASEAN business landscape.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12 py-24">
            <p className="heading3 max-w-2xl border-l-8 border-brandRed pl-6">
              <strong>
                <span className="bg-yellow-200 px-2">
                  Ready to make a difference?
                </span>{" "}
              </strong>
              Join ABYA as an Executive and embark on a rewarding journey
              towards building a brighter future for ASEAN youth. Apply now and
              be part of something extraordinary.
            </p>
            <Link
              href={
                "https://airtable.com/embed/appghdn6ePUtfECW7/shr2TFgzI3bnojU7F?backgroundColor=yellow"
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
