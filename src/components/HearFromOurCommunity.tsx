import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { HEAR_FROM_OUR_COMMUNITY_DETAILS } from "~/database/HearFromOurCommunityData";

export default function HearFromOurCommunity() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-600 antialiased">
      <InfiniteMovingCards
        items={HEAR_FROM_OUR_COMMUNITY_DETAILS}
        direction="right"
        speed="slow"
        header={"Hear From Our Community"}
      />
    </div>
  );
}
