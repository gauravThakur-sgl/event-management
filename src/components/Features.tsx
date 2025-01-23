import { cardData } from "../config/cardData";

export const Features = () => {
  const featureText = "text-sm lg:text-base text-gray-800 m-1 md:mb-2";
  const featureTitle = "text-base font-semibold lg:font-semibold text-gray-600";
  const cardStyle = "p-3 bg-transparent rounded-xl hover:shadow-md transition-shadow-xl duration-200";
  return (
    <div className="">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${card.background} pb-10 last:mb-0 m-2 break-points mx-4 pt-5 rounded-b-2xl font-funnel-sans`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">{card.description}</h2>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="space-y-6">
              {card.features.slice(0, 4).map((feature, index) => (
                <div key={index} className={`${cardStyle}`}>
                  <div className={`${featureTitle} flex item-center gap-2`}>
                    <span className="h-6 w-6">
                      <img src={feature.icon} alt="" className="text-green-500" />
                    </span>
                    {feature.title}
                  </div>
                  <p className={`${featureText}`}>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 lg:h-96 aspect-square hidden lg:block">
                <img
                  src={card.img}
                  alt={card.imgAlt}
                  className={`absolute inset-0 w-full h-full object-cover rounded-md md:rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300 ease-in-out ${card.imgEffects}`}
                />
              </div>
            </div>
            <div className="space-y-6 z-10">
              {card.features.slice(4, 8).map((feature, index) => (
                <div key={index} className={`${cardStyle}`}>
                  <div className={`${featureTitle} flex item-center gap-2`}>
                    <span className="h-6 w-6">
                      <img src={feature.icon} alt="" />
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
