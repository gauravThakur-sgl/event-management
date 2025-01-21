import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { cardData } from "../config/cardData";
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
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items gap-2 mt-10 px-2 lg:px-52">
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="rounded-xl p-4 md:p-6 hover:scale-105 hover:transition-all hover:duration-200"
              >
                <CardTitle>{card.title}</CardTitle>
                <CardDescription className="text-md mt-2">{card.description}</CardDescription>
                <CardContent className="rounded-xl bg-green-50 mt-5 flex justify-center items-center">
                  <img src={card.imageUrl} alt="icon" className="w-96 my-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
