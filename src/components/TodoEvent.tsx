import { todoEventData } from "../config/todoEvent";
export const TodoEvent = () => {
  const featureText = "text-sm lg:text-base text-gray-800 m-1 md:mb-2";
  const featureTitle = "text-base font-semibold lg:font-semibold text-gray-600";
  const cardStyle = "p-3 bg-transparent rounded-xl hover:shadow-md transition-shadow-xl duration-200";
  return (
    <div>
      <div className="">
        {todoEventData.map((card, index) => (
          <div key={index} className={`pb-10 last:mb-0 m-2 mx-4 rounded-b-2xl font-funnel-sans`}>
            <h2 className="section-title leading-snug text-gray-800 text-center my-10">
              Stay productive and organized with our{" "}
              <span className="bg-green-500 text-white px-2 rounded-lg text-nowrap">to-do</span> list feature.
            </h2>
            <div className={`${card.background} break-points relative grid grid-cols-1 lg:grid-cols-3 gap-2 py-10`}>
              <div className="space-y-6 z-10">
                {card.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className={`${cardStyle}`}>
                    <div className={`${featureTitle} flex item-center gap-2`}>
                      <span className={`h-6 w-6`}>
                        <img src={feature.icon} alt="" className="text-green-600" />
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
      </div>
    </div>
  );
};
