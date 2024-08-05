import Image from "next/image";
import img1 from "/public/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_5.jpg";
import img2 from "/public/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_4.jpg";
import img3 from "/public/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_3.png";
import img4 from "/public/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_6.png";
import img5 from "/public/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_2.jpg";

export default function blog() {
  return (
    <div className="flex flex-col gap-5">
      <p className="border-l-2 border-brandRed pl-3">
        <strong>Headline: </strong>Landing with a plan, flying with a passion
        <br />
        <strong>Summary</strong>: Indonesia is a lively country full of ambition
        and opportunities. With a population of 275.5 million (2022), Indonesia
        is a young, energetic nation with many talented youths and change
        makers. Seeking to create a positive impact to the region, the ASEAN
        Business Youth Association (ABYA)'s core team went for their business
        trip in Jakarta.
      </p>
      <p>
        The trip kick-started on the 11th of January 2023 to the 15th of January
        2023.&nbsp; ABYA&rsquo;s team was welcomed by great hospitality and had
        great conversations with their partners. During the visit, the team had
        met with multiple stakeholders ranging from public and private sectors
        to discuss collaboration opportunities with them.&nbsp;
      </p>
      <h2 className="blogheading1">
        #DAY 1 - Meeting with the Foreign Policy Community of Indonesia
        (FPCI)&rsquo;s foreign policy experts and communities.
      </h2>
      <p>
        Our trip started off with our meeting with Foreign Policy Community of
        Indonesia (FPCI). Foreign Policy Community of Indonesia (FPCI) is a
        non-partisan, non-politic and independent foreign policy organisation
        established to discuss and introduce international relations issues to
        many relevant actors in Indonesia. ABYA is grateful to be hosted by
        FPCI&rsquo;s founder, Mr. Dino Patti Djalal and his team to better
        understand FPCI&rsquo;s 2023 strategy and how both organisations can
        collaborate. We had an insightful discussion on ASEAN and identified the
        need to forge closer links between the countries.
      </p>
      <Image src={img1} alt="" />
      <p>
        ABYA concluded our Day 1 with our dinner meeting with Foreign Policy
        Talks (FPT). Established in 2020, Foreign Policy Talks is an
        organisation of foreign policy enthusiasts to embrace diverse
        perspectives and advance expertise and discourse on foreign affairs.
        Both organisations shared the pain points of youths in Singapore and
        Indonesia, and aimed to empower ASEAN youths to grow into future leaders
        of tomorrow. &nbsp;We look forward to working closely with an
        organisation like FPT who shares a similar mission in building a
        platform for the ASEAN youths.
      </p>
      <Image src={img2} alt="" />
      <h2 className="blogheading1">
        #DAY 2 - Meeting with governmental and student bodies.
      </h2>
      <p>
        ABYA&rsquo;s second day started off with our visit to the Ministry of
        Youth and Sport (Kemenpora). During our visit to Kemenpora, we had an
        insightful discussion with the governmental officials and discussed how
        both organisations can collaborate in cultivating youth potential in
        Indonesia through entrepreneurship and job opportunities. We are
        honoured to be featured on the{" "}
        <a href="https://deputi1.kemenpora.go.id/detail/222/abya-leaps-2023-kunjungi-deputi-1-kemenpora-jajaki-kerjasama-program-kepemudaan-tahun-2023">
          Ministry of Youth and Sport (Kemenpora)&rsquo;s website
        </a>{" "}
        and we are equally excited for more opportunities with them&nbsp; in
        2023 in youth empowerment and entrepreneurship.&nbsp;
      </p>
      <p>
        The ABYA&rsquo;s Core Team is grateful to meet Mr. Pak Sedyana and Mr.
        Edwin J. Tanga in a lunch meeting that allowed us to gain deeper
        insights on the culture and business landscape in Indonesia.&nbsp;
      </p>
      <Image src={img3} alt="" />
      <p>
        After our lunch meeting,&nbsp; ABYA had an insightful meet-up with the
        University of Indonesia&rsquo;s Management Student Society (MSS FEB UI).
        Both organisations discussed&nbsp; areas on how to provide better
        opportunities for their members. It was an insightful discussion with
        MSS FEB UI and looking forward to working together in increasing the
        student's regional exposure.
      </p>
      <Image src={img4} alt="" />
      <p>
        Our day concluded with a networking night with Mr. Bobby and Mr.
        Bernadinus from Deloitte Indonesia. The sharing session was full of
        far-sighted knowledge and information on how ABYA could be successful in
        the region.
      </p>
      <Image src={img5} alt="" />
      <h2 className="blogheading1">
        #DAY 3 - Meeting with DBS Indonesia and the ASEAN Secretariat
      </h2>
      <p>
        ABYA&rsquo;s core team started off their Day 3 with Corporate Banking
        Group by DBS Indonesia. ABYA had the opportunity to hear more about DBS
        Indonesia&rsquo;s strategy&nbsp; on corporate sustainability and
        sustainable movement. It was fruitful on how both parties leverage the
        next steps to help the youth community.
      </p>
      <p>
        During our networking lunch with Singapore Chamber of Commerce
        (SingCham), ABYA is grateful to be hosted by distinguished guests from
        different fields such as Madam Santhi Poesposoetjipto, Mr Joel Shen,
        Kevin Mr Ben Laurence, Mr Hafiz Kasma and Pang Xuekai who shared their
        experiences in Indonesia. It filled the meeting with passion and
        information of Indonesia and impact as a key nation in the ASEAN region.
      </p>
      <p>
        Afterward, ABYA joined with the ASEAN Secretariat at&nbsp; the heart of
        Jakarta. The meeting advanced the role of ABYA in the youth community in
        ASEAN and agreed on its commitment to youth development and regional
        agendas. We are excited for the plans with the ASEAN Secretariat and how
        both parties can collaborate to do more for the youths in ASEAN.&nbsp;
      </p>
      <p>
        Our trip ended on a high note with ABYA team hosting a networking dinner
        for over 40 Indonesian youths. Sponsored by Singapore Global Network,
        the event was booming with discussion about the youths&rsquo;
        motivation, passion and dream in the city of Jakarta.&nbsp;
      </p>
      <p>
        The trip marks the start of an exciting journey with Indonesia with our
        insightful meetings&nbsp; with our talented Indonesian youths and
        partners. We look forward to a great&nbsp; year ahead to continue making
        an impact and grooming future ASEAN leaders, especially in a beautiful
        nation like Indonesia filled with great people, energetic vibe and
        youth&rsquo;s ambition.
      </p>
    </div>
  );
}
