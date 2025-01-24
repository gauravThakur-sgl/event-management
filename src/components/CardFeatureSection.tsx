import { Badge } from "./ui/badge";
// import { cardData } from "../config/cardData";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
// import { Features } from "./Features";
export const CardFeatureSection = () => {
  return (
    <>
      <div className="mt-6 bg-green-50 mx-4 pb-4 rounded-b-xl">
        <div className="flex flex-col justify-center items-center pt-5">
          <Badge color="green" className="bg-green-50 hover:bg-green-50 shadow-sm">
            <div className="flex justify-center items-center gap-3 text-green-600 text-base px-2 py-1">
              <p>Our Cool Tools</p>
            </div>
          </Badge>
        </div>
      </div>
    </>
  );
};
