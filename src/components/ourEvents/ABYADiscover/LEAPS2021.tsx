import Image from "next/image";
import img1 from "/public/ABYALeaps/LEAPS2021_1.png";
import img2 from "/public/ABYALeaps/LEAPS2021_2.png";
import img3 from "/public/ABYALeaps/LEAPS2021_3.png";

export default function LEAPS2021() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="underline decoration-brandRed-30">
        Discover connections with every new leap
      </h2>
      <h2 className="underline decoration-brandRed-30">ABYA LEAPS DEMO DAY</h2>
      <p>
        The past year has been a tumultuous time for youths and businesses
        alike. The COVID-19 pandemic has exacerbated existing inequalities and
        posed unprecedented challenges to our world, forcing youths,
        organizations, and countries to rethink how we can build resilience
        through sustainability.
      </p>
      <p>
        The LEAPS Youth Challenge aims to help tertiary students sharpen their
        business acumen and knowledge of ASEAN markets while enabling companies
        to gain different perspectives from youths in building business
        resiliency through sustainable strategies.
      </p>
      <p>
        To celebrate the accomplishments of the youth teams and their mentors
        over the past months, Talent @ Switch and ABYA hosted{" "}
        <strong>Demo Day 2021</strong> on{" "}
        <strong>
          30th October, Saturday, between 10:00-13:00 hours (GMT +8)
        </strong>
        .
      </p>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-demo-day/">
        Find Out More
      </a>
      <h4 className="underline decoration-brandRed-30">Leadership</h4>
      <p>
        Get personalized consultation on the best practices and approach for
        your business
      </p>
      <h4 className="underline decoration-brandRed-30">Exploration</h4>
      <p>
        Develop the most effective strategies and plans to boost your growth and
        achieve your goals.
      </p>
      <h4 className="underline decoration-brandRed-30">Progress</h4>
      <p>
        Receive detailed feedback and evaluation based on insightful data for
        your business.
      </p>
      <Image src={img1} alt="" />
      <h2 className="underline decoration-brandRed-30">leaps 2021</h2>
      <h2 className="underline decoration-brandRed-30">
        CALLING OUT FOR ALL UNDERGRADUATES ACROSS ASEAN TO JOIN LEAPS 2022!
      </h2>
      <p>
        Develop practical and implementable solutions that suit the needs of
        businesses in ASEAN markets
      </p>
      <p>
        Interact with people from different backgrounds across the region and
        build lasting networks
      </p>
      <p>Access to workshops and develop interdisciplinary learning skills</p>
      <h2 className="underline decoration-brandRed-30">
        wrapping up with phase 1 of leaps 2021
      </h2>
      <a>LEARN MORE</a>
      <h2 className="underline decoration-brandRed-30">
        LEAPS 2021 Asean Business Challenge
      </h2>
      <p>
        Powered by Young NTUC and the National Youth Council, ABYA LEAPS aims to
        provide a platform for ASEAN youths to deepen their interest in the
        ASEAN market and sharpen their technical &amp; soft skills that would be
        relevant in ASEAN.
      </p>
      <p>
        LEAPS (Leadership, Exploration and Progress) is an ASEAN-focused
        industry immersion programme, designed to equip and groom students to
        become industry-relevant future ASEAN- savvy talents.
      </p>
      <p>The Competition was open to individuals who:</p>
      <ul className="list-disc pl-4">
        <li>
          Are nationals of ASEAN member countries (includes Brunei, Cambodia,
          Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Indonesia
          and Vietnam)
        </li>
        <li>Tertiary students/ Institute of Higher Learning from all majors</li>
      </ul>
      <Image src={img2} alt="" />
      <h2 className="underline decoration-brandRed-30">
        Commencement of Phase 2
      </h2>
      <p>
        The top 5 teams from the case competition proceeded to our sponsored
        projects by partnering organizations, alongside active guidance provided
        by selected industry mentors.
      </p>
      <Image src={img3} alt="" />
      <h2 className="underline decoration-brandRed-30">learn more here!</h2>
      <a href="https://www.aseanbusinessya.com/leaps/phase-2-themes/">
        01
        <h4 className="underline decoration-brandRed-30">themes</h4>
        <p>Check out the themes for Phase 2 of LEAPS 2021</p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-partners/">
        02
        <h4 className="underline decoration-brandRed-30">Guests & Partners</h4>
        <p>
          Check out the list of guests and partners we have for Phase 2 of LEAPS
          2021
        </p>
      </a>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gLaM9-UFPtQ?si=JE17-uCqKKbfh8zk"
        title="ABYA Leaps"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <h2 className="underline decoration-brandRed-30">
        SUMMARY OF LEAPS PHASE 1 2021
      </h2>
      <a href="https://www.aseanbusinessya.com/leaps/prize/">
        01
        <h4 className="underline decoration-brandRed-30">Prize Winners</h4>
        <p>
          <p>
            Check out the Top 5 Winners and the People's Choice award recipients
            for LEAPS 2021
          </p>
        </p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/workshops/">
        02
        <h4 className="underline decoration-brandRed-30">Workshops</h4>
        <p>Check out the list of workshops we held for LEAPS 2021</p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-faq/">
        03
        <h4 className="underline decoration-brandRed-30">FAQ</h4>
        <p>Check our FAQ page for further information on LEAPS 2021</p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-partners/">
        04
        <h4 className="underline decoration-brandRed-30">Partners</h4>
        <p>Check out the list of partners we have for LEAPS 2021</p>
      </a>
      <p>
        Have a question which is not found at our Frequently Asked Questions
        (FAQ) page?
        <br />
        Email us today at{" "}
        <strong>
          <em>leapshr@aseanbusinessya.com</em>
        </strong>
        . We are happy to be in touch!
      </p>
    </div>
  );
}
