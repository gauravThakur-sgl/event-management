import { cardData } from "../config/cardData";

export const Features = () => {
  const featureText = "text-base font-medium lg:font-semibold text-gray-800 m-1 md:mb-2";
  const featureTitle = "text-sm lg:text-base text-gray-600";
  const cardStyle = "p-3 bg-transparent rounded-xl shadow-sm hover:shadow-md transition-shadow-xl duration-200";
  return (
    <div className="break-points mx-auto pt-5">
      {cardData.map((card, index) => (
        <div key={index} className="mb-32 last:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">{card.description}</h2>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="space-y-6">
              {card.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className={`${cardStyle}`}>
                  <h3 className={`${featureTitle}`}>{feature.title}</h3>
                  <p className={`${featureText}`}>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 lg:h-96 aspect-square hidden lg:block">
                <img
                  src={card.img}
                  alt={card.description}
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              {card.features.slice(4, 8).map((feature, idx) => (
                <div key={idx} className={`${cardStyle}`}>
                  <div className={`${featureTitle} flex item-center`}>
                    <span className="h-8 w-8">
                      <img src={feature.icon} alt="" className="text-green-500" />
                    </span>
                    {feature.title}
                  </div>
                  <p className={`${featureText}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
