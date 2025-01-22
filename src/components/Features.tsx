import { cardData } from "../config/cardData";

export const Features = () => {
  return (
    <div className="break-points mx-auto pt-5">
      {cardData.map((card, index) => (
        <div key={index} className="mb-32 last:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{card.description}</h2>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="space-y-6">
              {card.features.slice(0, 4).map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 broder border-2 border-green-600 bg-gradient-to-r from-white to-green-50 rounded-xl shadow-sm hover:shadow-md transition-shadow-xl duration-200"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="relative h-80 lg:h-96 aspect-square">
                <img
                  src={card.img}
                  alt={card.description}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
              </div>
            </div>

            <div className="space-y-6">
              {card.features.slice(4, 8).map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 broder border-2 border-green-600 bg-gradient-to-r from-green-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow-xl duration-200"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
