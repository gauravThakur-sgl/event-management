import { cardData } from "../config/cardData";

export const Features = () => {
  const featureText = "text-sm lg:text-base text-gray-800 m-1 md:mb-2";
  const featureTitle = "text-base font-semibold lg:font-semibold text-gray-600";
  const cardStyle = "p-3 bg-transparent rounded-xl hover:shadow-md transition-shadow-xl duration-200";
  return (
    <div className="event-points">
      {cardData.map((card, index) => (
        <div key={index} className={`py-10 last:mb-0 m-2  mx-4 pt-5 rounded-b-2xl font-funnel-sans`}>
          <h2 className="leading-snug section-title">
            Express your ideas with our{" "}
            <span className="rounded-lg px-2 bg-green-500 text-white text-nowrap">blogging</span>
          </h2>
          <div className={`${card.background} px-2 md:px-8 relative grid grid-cols-1 lg:grid-cols-3 gap-2 py-20 mt-10`}>
            <div className="space-y-6 z-10">
              {card.features.slice(0, 4).map((feature, index) => (
                <div key={index} className={`${cardStyle} flex flex-col`}>
                  <div className={`${featureTitle} flex item-center gap-2`}>
                    <span className={`h-6 w-6 ${card.iconColor}`}>
                      <img src={feature.icon} alt="" className={`${card.iconColor}`} />
                    </span>
                    {feature.title}
                  </div>
                  <p className={`${featureText}`}>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="absolute event-image aspect-square opacity-40 lg:opacity-70">
                <img
                  src={card.img}
                  alt={card.imgAlt}
                  className={`inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out`}
                />
              </div>
            </div>
            <div className="space-y-6 z-10">
              {card.features.slice(4, 8).map((feature, index) => (
                <div key={index} className={`${cardStyle}`}>
                  <div className={`${featureTitle} flex item-center gap-2`}>
                    <span className={`h-6 w-6 ${card.iconColor}`}>
                      <img src={feature.icon} alt="" className={`${card.iconColor}`} />
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
      {/* <EventCalendar />
      <TodoEvent /> */}
    </div>
  );
};
