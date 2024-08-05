import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import HearFromOurCommunity from "~/components/HearFromOurCommunity";
import {
  Building,
  ChevronLeft,
  ChevronRight,
  Earth,
  PersonStanding,
} from "lucide-react";

export default function GetInvolved() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });
  return (
    <PageLayout>
      <PageTitleSection title={"Get Involved"}>
        At the ASEAN Business Youth Association, we&apos;re always on the
        lookout for synergies &ndash; whether you&apos;re an undergraduate,
        young professional, or in senior management, we&apos;ve got a place for
        you.
      </PageTitleSection>
      <ContentContainer>
        <div className="grid grid-cols-1 grid-rows-3 py-8 sm:grid-cols-3 sm:grid-rows-1 sm:py-0">
          <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
            <Earth className="h-28 w-28" />
            <p className="heading1 pb-4 text-brandBlue">10</p>
            <p className="heading4">
              Member&apos;s <br /> Countries
            </p>
          </div>
          <div className="sm:border-x-2">
            <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
              <PersonStanding className="h-28 w-28" />
              <p className="heading1 pb-4 text-brandBlue">520</p>
              <p className="heading4">Members</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
            <Building className="h-28 w-28" />
            <p className="heading1 pb-4 text-brandBlue">40</p>
            <p className="heading4">
              Affiliated <br /> Companies
            </p>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer>
        <p>
          The ASEAN Business Youth Association (ABYA) exists to empower ASEAN
          youth to drive positive impact in their communities and beyond.
          Founded in 2020 by seven youths and backed by Singapore’s National
          Youth Council and Ministry of Culture, Community and Youth, ABYA is a
          youth-led organization supported by local and international bodies.
        </p>
        <br />
        <p>
          Our mission is to create a community of business-savvy youth dedicated
          to key United Nations Sustainable Development Goals: Decent Work and
          Economic Growth (SDG #8), Sustainable Cities and Communities (SDG
          #11), and Partnerships for the Goals (SDG #17).
        </p>
        <br />
        <p>
          ABYA serves as a platform for young people to develop essential
          business skills, gain knowledge, and expand their networks. We offer
          programs like ABYA Explore and ABYA LEAPS, which connect ASEAN youths
          with each other and with experienced professionals. We provide
          valuable opportunities and resources by partnering with public,
          private, and civil society organisations.
        </p>
        <br />
        <p>
          Join ABYA to be committed to sustainable and inclusive growth and to
          be part of the next generation of ASEAN business leaders.
        </p>
      </ContentContainer>
      <ContentContainer>
        <div className="grid grid-rows-3 gap-4 py-8">
          {" "}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandBlue p-4 duration-200 hover:bg-brandBlue-10"
              href="/getInvolved/member"
            >
              <div className="flex h-80 w-1/2 overflow-hidden rounded-md">
                <Image
                  src={"/AsAMember.jpg"}
                  alt={""}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover duration-200 group-hover:scale-105"
                />
              </div>

              <div className="flex w-1/2 flex-col gap-3">
                <h2 className="heading4">As a Member</h2>
                <p>
                  Our community seeks to bring together youths who seek to
                  develop their competencies in becoming business savvy with a
                  future in ASEAN.
                </p>
                <div className="flex items-center">
                  <ChevronRight className="h-8 w-8 text-neutral-200 duration-200 group-hover:translate-x-2 group-hover:text-neutral-950" />
                  <p className="pl-2 text-transparent duration-200 group-hover:text-black">
                    Learn More
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/getInvolved/executive"
              className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandYellow p-4 duration-200 hover:bg-brandYellow-10"
            >
              <div className="flex w-1/2 flex-col items-end gap-3 rounded-md text-end ">
                <h2 className="heading4">As an Executive</h2>
                <p>
                  Our community seeks to bring together youths who seek to
                  develop their competencies in becoming business savvy with a
                  future in ASEAN.
                </p>
                <div className="flex items-center">
                  <p className="pr-2 text-transparent duration-200 group-hover:text-black">
                    Learn More
                  </p>
                  <ChevronLeft className="h-8 w-8 text-neutral-200 duration-200 group-hover:-translate-x-2 group-hover:text-neutral-950" />
                </div>
              </div>
              <div className="flex h-80 w-1/2 overflow-hidden">
                <Image
                  src={"/AsAnExecutive.png"}
                  alt={""}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover duration-200 group-hover:scale-105"
                />
              </div>
            </Link>
          </motion.div>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/getInvolved/partner"
              className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandRed p-4 duration-200 hover:bg-brandRed-10"
            >
              <div className="flex h-80 w-1/2 overflow-hidden rounded-md ">
                <Image
                  src={"/PartnerUs.jpg"}
                  alt={""}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex w-1/2 flex-col gap-3">
                <h2 className="heading4">Partner Us</h2>
                <p>
                  Our community seeks to bring together youths who seek to
                  develop their competencies in becoming business savvy with a
                  future in ASEAN.
                </p>
                <div className="flex items-center">
                  <ChevronRight className="h-8 w-8 text-neutral-200 duration-200 group-hover:translate-x-2 group-hover:text-neutral-950" />
                  <p className="pl-2 text-transparent duration-200 group-hover:text-black">
                    Learn More
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </ContentContainer>
      <HearFromOurCommunity />
    </PageLayout>
  );
}
