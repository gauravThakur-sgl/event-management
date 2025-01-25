// import { cardData } from "../config/cardData";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

import { EventCalendar } from "./EventCalendar";
import { Features } from "./Features";
import { TodoEvent } from "./TodoEvent";

// import { Features } from "./Features";
export const CardFeatureSection = () => {
  return (
    <>
      <div className="break-points mx-4 md:mx-10 lg:mx-28">
        <Features />
        <EventCalendar />
        <TodoEvent />
      </div>
    </>
  );
};
