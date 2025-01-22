import { Badge } from "./ui/badge";
import { cardData } from "../config/cardData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
export const CardFeatureSection = () => {
  return (
    <>
      <div className="mt-6 bg-gradient-to-r from-white to-green-50 mx-4 pb-4 rounded-b-xl">
        <div className="flex flex-col justify-center items-center pt-5">
          <Badge color="green" className="bg-green-50 hover:bg-green-50 shadow-sm">
            <div className="flex justify-center items-center gap-3 text-green-600 text-base px-2 py-1">
              <p>Our Cool Tools</p>
            </div>
          </Badge>
          <div className="mt-6">
            <h2 className="section-title">Effortless scheduling with Event Management for every event in your day</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
              mattis ac neque.
            </p>
          </div>
          {/* Card Section */}
          <div className="snap-x snap-mandatory mt-10 px-2 lg:mx-52">
            <Carousel>
              <CarouselContent className="crousel-fade gap-4 py-10">
                {cardData.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/3 border bg-green-50 shadow-lg rounded-lg p-4 snap-x overflow-hidden mx-2 transition-all duration-200"
                  >
                    <div className="text-md text-green-600 text-pretty font-semibold">{card.description}</div>
                    {card.features.map((feature, index) => (
                      <div key={index} className="flex justify-center items-center gap-4 mt-4">
                        <p className="text-sm font-semibold text-black">{feature.title}:</p>
                        <p className="text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
