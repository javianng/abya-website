import Image from "next/image";
import img1 from "/public/ABYAExplore/EXPLORE2021_2.png";
import img2 from "/public/ABYAExplore/EXPLORE2021_3.png";
import img3 from "/public/ABYAExplore/EXPLORE2021_4.png";
import img4 from "/public/ABYAExplore/EXPLORE2021_5.png";
import img5 from "/public/ABYAExplore/EXPLORE2021_6.png";

export default function EXPLORE2021() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        In 2021, ABYA conducted 10 events and worked with 25 speakers and
        moderators in the process. Evolving alongside Singapore’s COVID-19
        measures, ABYA held many of these events in a hybrid format for both
        physical and virtual events, bringing new dimensions of engagement to
        its participants. These events leveraged ABYA's existing network and
        focused on opportunities which could provide skill-building and
        equitable economic development for the youths in the region.
      </p>
      <Image src={img1} alt="" />
      <p>
        Through the insights gathered, we have identified that youths are
        especially interested in networking segments as they are able to
        interact with the speakers on a personal level and discuss topics in
        greater detail. As such, ABYA strives to add relevance to the youths and
        prepare them for the workforce in ASEAN. Our participants’ satisfaction
        will continue to motivate us to serve the community through our position
        as a leading ASEAN youth organisation.
      </p>
      <h2 className="underline decoration-brandRed-30">
        Testimonials for 2021
      </h2>
      <p>
        "The session was very insightful and interesting on how Abyasa shared
        his experience in building the business in Indonesia." --- ABYA: Family
        Business in Indonesia - Strategy & Transformation
      </p>
      <Image src={img2} alt="" />
      <Image src={img3} alt="" />
      <p>
        "Speakers were very entertaining. I enjoyed the breakout sessions where
        we are able to interact and discuss in smaller and more specific
        details." --- ABYA x Yale NUS: Future of Work in SEA
      </p>
      <Image src={img4} alt="" />
      <Image src={img5} alt="" />
      <p>
        "The speakers all shared very insightful details on how food
        sustainability is not understood despite it being a very important
        issue. There have been many misconceptions around the word
        “sustainability” as it mainly associates with environmental
        sustainability. However, there is so much food waste and technology that
        focuses on reducing the food waste is either not readily available,
        extremely expensive or met with animosity with people hence, there is
        more to be done to encourage food sustainability." --- ABYA x NYC: Food
        Sustainability & Innovations
      </p>
    </div>
  );
}
