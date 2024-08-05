import type { ReactNode } from "react";
import ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA from "~/components/blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA";
import ABYA_END_OF_YEAR_PARTY_2023 from "~/components/blog/ABYA_END_OF_YEAR_PARTY_2023";
import AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT from "~/components/blog/AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT";
import ASEANJAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT from "~/components/blog/ASEAN-JAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT";

import ASEANS_SUSTAINABLE_ENERGY_FUTURE from "~/components/blog/ASEANS_SUSTAINABLE_ENERGY_FUTURE";
import ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION from "~/components/blog/ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION";
import A_FUTURE_IN_ASEAN_1 from "~/components/blog/A_FUTURE_IN_ASEAN_1";
import A_FUTURE_IN_ASEAN_2 from "~/components/blog/A_FUTURE_IN_ASEAN_2";
import A_FUTURE_IN_ASEAN_3 from "~/components/blog/A_FUTURE_IN_ASEAN_3";
import A_FUTURE_IN_ASEAN_4 from "~/components/blog/A_FUTURE_IN_ASEAN_4";
import A_FUTURE_IN_ASEAN_5 from "~/components/blog/A_FUTURE_IN_ASEAN_5";
import A_FUTURE_IN_ASEAN_6 from "~/components/blog/A_FUTURE_IN_ASEAN_6";
import A_FUTURE_IN_ASEAN_7 from "~/components/blog/A_FUTURE_IN_ASEAN_7";
import A_FUTURE_IN_ASEAN_8 from "~/components/blog/A_FUTURE_IN_ASEAN_8";
import A_FUTURE_IN_ASEAN_9 from "~/components/blog/A_FUTURE_IN_ASEAN_9";
import A_FUTURE_IN_ASEAN_FOOD_SUSTAINABILITY_AND_INNOVATIONS from "~/components/blog/A_FUTURE_IN_ASEAN_FOOD_SUSTAINABILITY_AND_INNOVATIONS";
import A_FUTURE_IN_ASEAN_TRENDS_AND_OPPORTUNITIES_OF_ASEANS_FUTURE_ECONOMY from "~/components/blog/A_FUTURE_IN_ASEAN_TRENDS_AND_OPPORTUNITIES_OF_ASEANS_FUTURE_ECONOMY";
import ETHNOGRAPHY_101_MASTERCLASS from "~/components/blog/ETHNOGRAPHY_101_MASTERCLASS";
import FAMILY_BUSINESS_IN_INDONESIA_STRATEGY_AND_TRANSFORMATION from "~/components/blog/FAMILY_BUSINESS_IN_INDONESIA_STRATEGY_AND_TRANSFORMATION";
import LETS_TALK_ABOUT_ASEAN from "~/components/blog/LETS_TALK_ABOUT_ASEAN";
import OUR_FOUNDING_STORY from "~/components/blog/OUR_FOUNDING_STORY";
import YOUTHS_AND_THE_FUTURE_OF_WORK_IN_SEA from "~/components/blog/YOUTHS_AND_THE_FUTURE_OF_WORK_IN_SEA";
import YSEALI_SUMMIT_2023 from "~/components/blog/YSEALI_SUMMIT_2023";

export type BLOG_TYPE = {
  title: string;
  link: string;
  thumbnail: string;
  content: ReactNode;
  writer: string;
  editor: string;
};

export const BLOG_DETAILS: BLOG_TYPE[] = [
  {
    title: "ASEAN-Japan Generation Z Business Leaders Summit",
    link: "/blog/ASEAN-Japan_Generation_Z_Business_Leaders_Summit",
    thumbnail: "/Blog/ASEAN_JAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT_1.png",
    content: <ASEANJAPAN_GENERATION_Z_BUSINESS_LEADERS_SUMMIT />,
    writer: "",
    editor: "",
  },
  {
    title: "YSEALI SUMMIT 2023",
    link: "/blog/YSEALI_SUMMIT_2023",
    thumbnail: "/Blog/YSEALI_SUMMIT_2023_1.png",
    content: <YSEALI_SUMMIT_2023 />,
    writer: "",
    editor: "",
  },
  {
    title: "ABYA End of Year Party 2023",
    link: "/blog/ABYA_END_OF_YEAR_PARTY_2023",
    thumbnail: "/Blog/ABYA_END_OF_YEAR_PARTY_2023_1.png",
    content: <ABYA_END_OF_YEAR_PARTY_2023 />,
    writer: "",
    editor: "",
  },
  {
    title: "ASEAN Prosperity Initiative Roundtable discussion",
    link: "/blog/ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION",
    thumbnail: "/Blog/ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION_1.png",
    content: <ASEAN_PROSPERITY_INITIATIVE_ROUNDTABLE_DISCUSSION />,
    writer: "",
    editor: "",
  },
  {
    title: "ASEAN's Sustainable Energy Future",
    link: "/blog/ASEANS_SUSTAINABLE_ENERGY_FUTURE",
    thumbnail: "/Blog/ASEANS_SUSTAINABLE_ENERGY_FUTURE.png",
    content: <ASEANS_SUSTAINABLE_ENERGY_FUTURE />,
    writer: "Jolene Yeo",
    editor: "Nisrina Khotimah",
  },
  {
    title: "ABYA's trip to Jakarta and youth involvement in Indonesia.",
    link: "/blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA",
    thumbnail:
      "/Blog/ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA_1.png",
    content: <ABYAS_TRIP_TO_JAKARTA_AND_YOUTH_INVOLVEMENT_IN_INDONESIA />,
    writer: "",
    editor: "",
  },
  {
    title: "A Future in ASEAN: Food Sustainability and Innovations",
    link: "/blog/A_FUTURE_IN_ASEAN_FOOD_SUSTAINABILITY_AND_INNOVATIONS",
    thumbnail:
      "/Blog/A_FUTURE_IN_ASEAN_FOOD_SUSTAINABILITY_AND_INNOVATIONS.png",
    content: <A_FUTURE_IN_ASEAN_FOOD_SUSTAINABILITY_AND_INNOVATIONS />,
    writer: "Edric",
    editor: "Wei Wen",
  },
  {
    title: "Our Founding Story",
    link: "/blog/OUR_FOUNDING_STORY",
    thumbnail: "/HearFromOurCommunity.png",
    content: <OUR_FOUNDING_STORY />,
    writer: "",
    editor: "",
  },
  {
    title:
      "A Future in ASEAN: Trends & Opportunities of ASEAN's Future Economy",
    link: "/blog/A_FUTURE_IN_ASEAN_TRENDS_AND_OPPORTUNITIES_OF_ASEANS_FUTURE_ECONOMY",
    thumbnail:
      "/Blog/A_FUTURE_IN_ASEAN_TRENDS_AND_OPPORTUNITIES_OF_ASEANS_FUTURE_ECONOMY.png",
    content: (
      <A_FUTURE_IN_ASEAN_TRENDS_AND_OPPORTUNITIES_OF_ASEANS_FUTURE_ECONOMY />
    ),
    writer: "Roselle",
    editor: "Charleston & Emelia",
  },
  {
    title: "Let's Talk About ASEAN",
    link: "/blog/LETS_TALK_ABOUT_ASEAN",
    thumbnail: "/Blog/LETS_TALK_ABOUT_ASEAN.jpg",
    content: <LETS_TALK_ABOUT_ASEAN />,
    writer: "",
    editor: "",
  },
  {
    title: "An AGILE Guide to Project Management",
    link: "/blog/AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT",
    thumbnail: "/Blog/AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT.png",
    content: <AN_AGILE_GUIDE_TO_PROJECT_MANAGEMENT />,
    writer: "Rebecca Tan",
    editor: "Wei Wen",
  },
  {
    title: "Ethnography 101 Masterclass",
    link: "/blog/ETHNOGRAPHY_101_MASTERCLASS",
    thumbnail: "/Blog/ETHNOGRAPHY_101_MASTERCLASS.png",
    content: <ETHNOGRAPHY_101_MASTERCLASS />,
    writer: "Ong Hui Min",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #1",
    link: "/blog/A_FUTURE_IN_ASEAN_1",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_1.png",
    content: <A_FUTURE_IN_ASEAN_1 />,
    writer: "Isabelle Goh",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #2",
    link: "/blog/A_FUTURE_IN_ASEAN_2",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_2.png",
    content: <A_FUTURE_IN_ASEAN_2 />,
    writer: "Soon Poh Suan",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #3",
    link: "/blog/A_FUTURE_IN_ASEAN_3",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_3.png",
    content: <A_FUTURE_IN_ASEAN_3 />,
    writer: "Stanley Toh & Soon Poh Suan",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #4",
    link: "/blog/A_FUTURE_IN_ASEAN_4",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_4.png",
    content: <A_FUTURE_IN_ASEAN_4 />,
    writer: "Deborah Tan & Stanley Toh",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #5",
    link: "/blog/A_FUTURE_IN_ASEAN_5",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_5.png",
    content: <A_FUTURE_IN_ASEAN_5 />,
    writer: "Bryan Chang",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #6",
    link: "/blog/A_FUTURE_IN_ASEAN_6",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_6.png",
    content: <A_FUTURE_IN_ASEAN_6 />,
    writer: "Clarence Ng Kai Lun",
    editor: "Soon Poh Suan & Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #7",
    link: "/blog/A_FUTURE_IN_ASEAN_7",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_7.png",
    content: <A_FUTURE_IN_ASEAN_7 />,
    writer: "Wesley Tan",
    editor: "Isabelle Goh",
  },
  {
    title: "A Future in ASEAN #8",
    link: "/blog/A_FUTURE_IN_ASEAN_8",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_8.png",
    content: <A_FUTURE_IN_ASEAN_8 />,
    writer: "Veronica Low Kai Lin",
    editor: "Louise Tang & Bryan Chang",
  },
  {
    title: "A Future in ASEAN #9",
    link: "/blog/A_FUTURE_IN_ASEAN_9",
    thumbnail: "/Blog/A_FUTURE_IN_ASEAN_9.png",
    content: <A_FUTURE_IN_ASEAN_9 />,
    writer: "Hendri Surya Widcaksana",
    editor: "Bryan Chang",
  },
  {
    title: "Family Business in Indonesia: Strategy & Transformation",
    link: "/blog/FAMILY_BUSINESS_IN_INDONESIA_STRATEGY_AND_TRANSFORMATION",
    thumbnail:
      "/Blog/FAMILY_BUSINESS_IN_INDONESIA_STRATEGY_AND_TRANSFORMATION.png",
    content: <FAMILY_BUSINESS_IN_INDONESIA_STRATEGY_AND_TRANSFORMATION />,
    writer: "Qiu Jia Yu",
    editor: "Isabelle Goh",
  },
  {
    title: "Youths and the Future of Work in SEA",
    link: "/blog/YOUTHS_AND_THE_FUTURE_OF_WORK_IN_SEA",
    thumbnail: "/Blog/YOUTHS_AND_THE_FUTURE_OF_WORK_IN_SEA.png",
    content: <YOUTHS_AND_THE_FUTURE_OF_WORK_IN_SEA />,
    writer: "Chime Ngawang & Ng Yan Ting",
    editor: "Isabelle Goh",
  },
];
