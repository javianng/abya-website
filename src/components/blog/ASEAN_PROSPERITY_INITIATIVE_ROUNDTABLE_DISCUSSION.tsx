import Image from "next/image";
import img1 from "/public/Blog/ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION_2.png";

export default function blog() {
  return (
    <div className="flex flex-col items-center gap-5">
      <p>
        ABYA representatives were part of the 16 ASEAN delegates invited to take
        part in discussions on “Advancing Regional Integration: Priorities of
        the Youths in the ASEAN Economic Community (AEC) 2025.” During this
        discussion, they had the opportunity to explore how the AEC and its
        goals impact young people in the business and consumer product sectors.
      </p>
      <Image src={img1} alt={""} />
      <p>
        The diverse selection of participants contributed significantly to the
        fruitful nature of the discussions. The participants explored how the
        growth of ASEAN’s digital economy positively impacts entrepreneurship
        while emphasising the necessity for policies to ensure a fair and
        inclusive digital economy.
      </p>
      <p>
        The AEC is beneficial for ABYA as it promotes cross-cultural competence
        and intercultural proficiency. In reciprocation, ABYA can support the
        AEC through grassroots initiatives such as LEAPS and ABYA Explore. The
        existence and support for youth-led projects are important as this is
        one of the ways that ASEAN can maintain its impact on the next
        generation of leaders.
      </p>
      <p>
        It was also great to witness the participation of Arvin Martin Santos,
        one of the winners of LEAPS 2022, in this roundtable discussion. We are
        pleased to observe our community members actively contributing to the
        ASEAN ecosystem.
      </p>
    </div>
  );
}
