import Image from "next/image";
import img1 from "/public/Blog/ASEAN_JAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT_2.png";
import img2 from "/public/Blog/ASEAN_JAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT_3.png";

export default function blog() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image src={img1} alt={""} />
      <Image src={img2} alt={""} />
      <p>
        The summit represents a significant milestone in regional progress and
        collaboration. ABYA is honored to join young leaders and change-makers
        who are dedicated to shaping the future of ASEAN-Japan ties. The dynamic
        platform facilitated robust discussions on sustainable development,
        economic cooperation, and the evolving ASEAN-Japan landscape. A
        highlight was the collaborative crafting of a comprehensive policy
        proposal by talented delegates, including ABYA, showcasing our
        dedication to a prosperous ASEAN-Japan future.
      </p>
      <p>
        Our efforts culminated in a joint statement presented to leaders—Prime
        Minister Fumio Kishida of Japan and President Joko Widodo of
        Indonesia—underscoring our commitment to tangible change and enduring
        ties. ABYA expresses heartfelt appreciation to the organising
        institutions, Japan's Ministry of Economy, Trade and Industry (METI),
        JETRO - Japan External Trade Organisation and PoliPoli Inc. for their
        exemplary efforts in hosting this impactful summit, providing a platform
        for idea exchange and partnership-building.
      </p>
      <p>
        The ASEAN-Japan Summit is a pivotal moment, reaffirming our resolve to
        nurture a bond based on friendship, collaboration, and mutual respect.
        We look forward to future collaborations in shaping Asian leaders in the
        years to come.
      </p>
    </div>
  );
}
