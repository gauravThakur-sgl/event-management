import { CircleCheck } from "lucide-react";
interface IEventManagementPricing {
  eventManagementPricing: {
    planName: string;
    price: number;
    features: string[];
    supportedDevices: string[];
    simultaneousEvents: number | string;
  }[];
  active?: number | null;
  handleActive: (index: number) => void;
}
export const NewPricingMobile = ({ eventManagementPricing, active, handleActive }: IEventManagementPricing) => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="flex justify-center items-end">
        {eventManagementPricing.map((item, index) => (
          <div key={index}>
            {item.planName === "Popular" && (
              <div
                className={`text-center p-1  border rounded-t-xl text-sm ${
                  active === index
                    ? "bg-purple-500 text-white transition-all duration-300"
                    : "bg-gray-500 text-white transition-all duration-300"
                } font-semibold`}
              >
                popular
              </div>
            )}
            <div
              onClick={() => handleActive(index)}
              className={` border ${
                active === index ? "shadow-xl transition-all duration-200" : "transition-all duration-200"
              } ${item.planName === "Popular" ? "rounded-b-2xl" : "rounded-2xl"} `}
            >
              <div className="min-w-20 min-h-16 relative rounded-xl border p-2 bg-gradient-to-br from-green-700 via-green-500 to-green-700">
                <h3 className="font-semibold text-white">{item.planName}</h3>
                {/* <p className="font-semibold text-white">{item.price}</p> */}
                <span
                  className={`absolute right-4 bottom-2 ${
                    active === index ? "block transition-all duration-300" : "hidden transition-all duration-300"
                  }`}
                >
                  <CircleCheck className="text-white w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {eventManagementPricing.map((item, index) => (
        <div key={index}>
          {active === index && (
            <div>
              <div className="px-6 pt-5 pb-2 flex justify-between items-center">
                <p className="text-gray-700">price</p>
                <p>
                  ₹<span className="font-semibold">{item.price}</span>
                </p>
              </div>
              <div className="px-6 pt-2">
                <div className="w-full border-t border-gray-400"></div>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-gray-500 pt-2 text-sm font-semibold ">Features</p>
                  <div className="flex flex-col text-right">
                    {item.features.map((feature, index) => (
                      <p key={index} className="text-sm text-gray-700 font-semibold pt-1">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pt-2">
                <div className="w-full border-t border-gray-400"></div>
                <div className="flex justify-between">
                  <p className="text-gray-500 pt-2 text-sm font-semibold">Supported Devices</p>
                  <p className="text-sm text-gray-800 font-semibold pt-1">
                    {item.supportedDevices.map((feature, index) => (
                      <div className="flex items-center gap-1">
                        <p key={index} className="text-sm text-gray-700 font-semibold pt-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
              <div className="px-6 pt-2">
                <div className="w-full border-t border-gray-400"></div>
                <div className="flex justify-between">
                  <p className="text-gray-500 pt-2 text-sm font-semibold">Simultaneous Events</p>
                  <p key={index} className="text-sm text-gray-700 font-semibold pt-1">
                    {item.simultaneousEvents}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
