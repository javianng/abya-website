import type { ReactNode } from "react";
import DinnerAndDialogue from "~/components/ourEvents/ABYADiscover/DinnerAndDialogue";
import LEAPS2023 from "~/components/ourEvents/ABYADiscover/LEAPS2023";
import LEAPS2021 from "~/components/ourEvents/ABYADiscover/LEAPS2021";

export type ABYA_DISCOVER_TYPE = {
  title: string;
  link: string;
  thumbnail: string;
  content: ReactNode;
};

export const ABYA_DISCOVER_DETAILS: ABYA_DISCOVER_TYPE[] = [
  {
    title:
      "ABYA's Dinner & Dialogue Unveils the Power of Innovation for Sustainable Growth in ASEAN",
    link: "/ourEvents/ABYADiscover/DinnerAndDialogue",
    thumbnail: "/ABYALeaps/DINNERANDDIALOGUE.jpeg",
    content: <DinnerAndDialogue />,
  },
  // {
  //   title: "ABYA Leaps 2023",
  //   link: "/ourEvents/ABYADiscover/ABYALeaps2023",
  //   thumbnail: "/ABYALeaps/LEAPS2023_1.jpg",
  //   content: <LEAPS2023 />,
  // },
  {
    title: "ABYA Leaps 2021",
    link: "/ourEvents/ABYADiscover/ABYALeaps2021",
    thumbnail: "/ABYALeaps/LEAPS2021.png",
    content: <LEAPS2021 />,
  },
];
