import type { ReactNode } from "react";
import EXPLORE2020 from "~/components/ourEvents/ABYAConnect/EXPLORE2020";
import EXPLORE2021 from "~/components/ourEvents/ABYAConnect/EXPLORE2021";
import EXPLORE2022 from "~/components/ourEvents/ABYAConnect/EXPLORE2022";

export type ABYA_CONNECT_TYPE = {
  title: string;
  link: string;
  thumbnail: string;
  content: ReactNode;
};

export const ABYA_CONNECT_DETAILS: ABYA_CONNECT_TYPE[] = [
  {
    title: "ABYA Explore 2022",
    link: "/ourEvents/ABYAConnect/ABYAExplore2022",
    thumbnail: "/VisionMissionBackground.png",
    content: <EXPLORE2022 />,
  },
  {
    title: "ABYA Explore 2021",
    link: "/ourEvents/ABYAConnect/ABYAExplore2021",
    thumbnail: "/ABYAExplore/EXPLORE2021_1.png",
    content: <EXPLORE2021 />,
  },
  {
    title: "ABYA Explore 2020",
    link: "/ourEvents/ABYAConnect/ABYAExplore2020",
    thumbnail: "/ABYAExplore/EXPLORE2020.jpeg",
    content: <EXPLORE2020 />,
  },
];
