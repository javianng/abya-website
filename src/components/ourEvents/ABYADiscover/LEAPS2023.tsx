import Image from "next/image";
import img1 from "/public/ABYALeaps/LEAPS2023_2.jpg";
import img2 from "/public/ABYALeaps/LEAPS2023_3.jpg";
import img3 from "/public/ABYALeaps/LEAPS2023_4.jpg";
import img4 from "/public/ABYALeaps/LEAPS2023_5.jpg";
import img5 from "/public/ABYALeaps/LEAPS2023_6.jpg";
import img6 from "/public/ABYALeaps/LEAPS2023_7.jpg";
import img7 from "/public/ABYALeaps/LEAPS2023_8.jpg";
import img8 from "/public/ABYALeaps/LEAPS2023_9.jpg";

export default function LEAPS2023() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="underline decoration-brandRed-30">
        Discover connections with every new leap
      </h2>
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
      <h4 className="underline decoration-brandRed-30">Progression</h4>
      <p>
        Receive detailed feedback and evaluation based on insightful data for
        your business.
      </p>
      <a href="#sign-up">
        <Image src={img1} alt="" />
      </a>
      <a href="https://airtable.com/shrjZtlC1D9gkUcsY">Sign Up Now!</a>
      <h2 className="underline decoration-brandRed-30">
        LEAPS 2023 ASEAN Business Challenge
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
      <h2 className="underline decoration-brandRed-30">
        CALLING OUT FOR ALL UNDERGRADUATES ACROSS ASEAN TO JOIN LEAPS 2023!
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
      <Image src={img2} alt="" />
      <Image src={img3} alt="" />
      <Image src={img4} alt="" />
      <Image src={img5} alt="" />
      <Image src={img6} alt="" />
      <Image src={img7} alt="" />
      <Image src={img8} alt="" />
      Previous image Next image
      <h2 className="underline decoration-brandRed-30">
        learn more about leaps 2022
      </h2>
      <a href="https://www.aseanbusinessya.com/leaps/phase-2-themes/">
        01
        <h4 className="underline decoration-brandRed-30">Theme</h4>
        <p>
          <p>Check out the themes for Phase 2 of LEAPS 2022</p>
        </p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-partners/">
        02
        <h4 className="underline decoration-brandRed-30">
          Guests &amp; Partners
        </h4>
        <p>
          <p>
            Check out the list of guests and partners we have for Phase 2 of
            LEAPS 2021
          </p>
        </p>
      </a>
      <video src="https://www.youtube.com/watch?v=WCG-E-PkVbQ"></video>
      <h2 className="underline decoration-brandRed-30">
        <a href="#sign-up">SUMMARY OF LEAPS 2021</a>
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
        <p>
          <p>Check out the list of workshops we held for LEAPS 2021</p>
        </p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-faq/">
        03
        <h4 className="underline decoration-brandRed-30">FAQ</h4>
        <p>
          <p>Check our FAQ page for further information on LEAPS 2021</p>
        </p>
      </a>
      <a href="https://www.aseanbusinessya.com/leaps/leaps-partners/">
        04
        <h4 className="underline decoration-brandRed-30">Partners</h4>
        <p>
          <p>Check out the list of partners we have for LEAPS 2021</p>
        </p>
      </a>
      <p>
        Have a question which is not found at our Frequently Asked Questions
        (FAQ) page?
        <br />
        Email us today at{" "}
        <strong>
          <em>enquiry@aseanbusinessya.com</em>
        </strong>
        . We are happy to be in touch!
      </p>
    </div>
  );
}
