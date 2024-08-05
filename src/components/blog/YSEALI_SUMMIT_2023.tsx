import Image from "next/image";
import img1 from "/public/Blog/YSEALI_SUMMIT_2023_2.png";
import img2 from "/public/Blog/YSEALI_SUMMIT_2023_3.png";

export default function blog() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p>
        Following a successful implementation of the Young Southeast Asian
        Leadership Initiative (YSEALI) Seeds for the Future Grant 2021, ABYA was
        invited to present their grant-supported project, LEAPS, at YSEALI
        Summit 2023 in Bali.
      </p>
      <Image src={img1} alt={""} />
      <p>
        Presented to high-level dignitaries such as Elizabeth M. Allen, Under
        Secretary for Public Diplomacy and Public Affairs, U.S. State
        Department, after the Opening Ceremony of YSEALI Summit 2023
      </p>
      <Image src={img2} alt={""} />
      <p>
        This was no ordinary annual YSEALI Summit as it marked a
        <a
          className="underline decoration-brandRed-30"
          href="https://www.linkedin.com/feed/hashtag/?keywords=decadeofimpact&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7143749821953191938"
        >
          #decadeofimpact
        </a>
        . LEAPS was invited to apply and was selected as one of the 11 Seeds for
        the Future Grant teams across Southeast Asia. Leadership, Exploration
        And Progress (LEAPS) was represented by the Founding President of ABYA,
        Veronica Low, and Seeds for the Future 2021 Grant LEAPS Team Leader and
        Programme Lead, Christina Ong.
      </p>
      <p>
        The team is deeply grateful to have been selected as the first of two
        Seeds for the Future Grant projects presented to high-level dignitaries
        such as Elizabeth M. Allen, Under Secretary for Public Diplomacy and
        Public Affairs, U.S. State Department, after the Opening Ceremony of
        YSEALI Summit 2023. Through an intensive four days, the team forged
        bonds beyond borders, upgraded their skills in stakeholder management
        and capacity-building, and discussed collaborations across Southeast
        Asia and with bilateral exchange delegates and speakers from the United
        States. ABYA is thrilled to empower both individuals and entities with
        the belief that ASEAN Matters, Youths Matter.
      </p>
      <p>
        The team would like to express our sincere gratitude and congratulations
        to the U.S. Mission to ASEAN, YSEALI and U.S. Embassy Singapore for
        inviting us to participate in this opportunity and for marking the tenth
        anniversary of this high-impact initiative for youth leaders across
        Southeast Asia. This would not have been possible without the dedication
        and hard work of the sponsors, partners, Seeds for the Future LEAPS
        team, including Clarence, Rachel, Jimy, Amanda, Hendri, James, Wei Yang,
        David, Vallie, Yun Jae, Khalil, Indra and all who made it a success.
      </p>
    </div>
  );
}
