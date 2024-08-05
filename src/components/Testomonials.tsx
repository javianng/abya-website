import { TESTIMONIAL_DETAILS } from "~/database/TestimonialData";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-600 antialiased">
      <InfiniteMovingCards
        items={TESTIMONIAL_DETAILS}
        direction="right"
        speed="slow"
        header={"Testimonials"}
      />
    </div>
  );
}
