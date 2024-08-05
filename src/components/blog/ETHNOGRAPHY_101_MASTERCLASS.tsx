import Image from "next/image";
import img1 from "/public/Blog/ETHNOGRAPHY_101_MASTERCLASS_1.png";
import img2 from "/public/Blog/ETHNOGRAPHY_101_MASTERCLASS_2.png";

export default function blog() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        On 5<sup>th</sup> June 2021, ABYA held its very first cultural
        masterclass - Ethnography 101: Seeing, Understanding &amp; Using
        “Culture” In Our Daily Lives. We had the privilege of hearing from Dr
        Priscilla, a historian and anthropologist, who kindly shared with us her
        ethnographic research journey, using heartfelt anecdotes from her
        fieldwork and social experiences in Vietnam.
      </p>
      <p>
        Dr Priscilla started the masterclass with an introduction on Vietnam's
        culture and history and shared with us her first impressions and often
        humorous encounters while doing research in Vietnam. The masterclass was
        highly interactive as participants were encouraged to ask questions
        throughout, allowing us to easily clarify our understanding.
      </p>
      <h2 className="blogheading1">
        <strong>RESEARCH EXPERIENCES IN VIETNAM</strong>{" "}
      </h2>
      <p>
        Dr Priscilla&rsquo;s sharing emphasised the importance of understanding
        cultural differences and nuances&nbsp; in Vietnam. As a culture that
        values trust, community and &lsquo;sentiment&rsquo;, social ties and
        connections are essential as they can open doors to more ethnographic
        opportunities and richer data. It is thus important to spend time
        building connections and trust with the people or culture you are
        interested in understanding more about. She also shared with us her
        research on the notions of belonging, identity, home and homeland among
        the returning diaspora in Vietnam. Her findings highlighted that
        economic and social capital acquired in an overseas setting do not
        necessarily translate to social acceptance and cultural belonging in
        Vietnam. Common descent alone does no guarantee social acceptance by the
        local community. Returnees have to learn and adapt to local cultural
        norms and expectations in their professional and personal lives there.
      </p>
      <h2 className="blogheading1">
        <strong>INTERACTIVE, MULITIMEDIA LEARNING</strong>{" "}
      </h2>
      <p>
        During the masterclass, participants also shared their observations and
        reflections on two videos about Vietnamese Food culture. Some of the key
        takeaways were the importance of market research and in depth
        understanding of the specific consumer market traits and needs.
        Additionally, it was pointed out that the Vietnamese seem more inclined
        to consume local street food, which was not only more affordable, but
        also served important communal and social needs. Dr Priscilla also
        highlighted that the output of an ethnographic research could come in
        different forms ranging from formal academic papers to films and books.
        The two books recommended by Dr Priscilla were:
      </p>
      <p>
        <em>
          - Behind the Beautiful Forevers: Life, Death, and Hope in a Mumbai
          Undercity
        </em>
        , written by the Pulitzer Prize-winner Katherine Boo in 2012
      </p>
      <p>
        <em>
          - The Spirit Catches You and You Fall Down: A Hmong Child, Her
          American Doctors, and the Collision of Two Cultures
        </em>
        , a book by Anne Fadiman in 1997.
      </p>
      <h2 className="blogheading1">
        <strong>THEORY &amp; BASICS</strong>{" "}
      </h2>
      <p>
        So, what is Ethnography? In essence, it is a process of studying a
        social or cultural group with the aim of generating meaningful results.
        It places an emphasis on the ”insider&rsquo;s perspective”. One who
        engages in ethnographic research would have to keep an account of
        observations, interviews and analyse such research materials
        appropriately. The session also covered fundamental aspects of the
        ethnographic research process and how to record our observations both
        descriptively and reflectively.
      </p>
      <Image src={img1} alt="" />
      <p>
        In addition, Dr Priscilla also shared some of the ways in which
        ethnographic research have adapted to the “new norms” of the pandemic.
        The landscape of fieldwork has changed rather significantly with other
        non-contact methods gaining prevalence such as online interviews,
        digital and social media observations gaining popularity among
        researchers keen on carrying out *safely distanced* observations and
        surveys. Listed below are the checklist items to review when doing field
        research, as recommended by Dr Priscilla, which may prove useful for
        researchers doing fieldwork!
      </p>
      <Image src={img2} alt="" />
      <h2 className="blogheading1">
        <strong>PUTTING LEARNING INTO PRACTICE</strong>{" "}
      </h2>
      <p>
        The cultural masterclass will not end after a single session. Instead,
        we hope to continue with a “sequel” in July 2021! Prior to this second
        masterclass, participants will have the opportunity to embark on a
        group/individual field research project which will be shared and
        reviewed in that session. These research projects will be focused on how
        the pandemic has affected various aspects of culture and society.
      </p>
      <p>
        I look forward to deepening my understanding of ethnography and
        sharpening my critical and analytical thinking skills by putting my new
        understanding of the field into practice.
      </p>
    </div>
  );
}
