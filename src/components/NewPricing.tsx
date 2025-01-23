import { useState } from "react";
import { eventManagementPricing } from "../config/newPricingData";
// import { CircleCheck } from "lucide-react";
import { NewPricingMobile } from "./NewPricingMobile";
import { NewPricingDexktop } from "./NewPricingDexktop";
import { useScreenDetector } from "../config/useScreenDetector";

export const NewPricing = () => {
  const initialIndex = eventManagementPricing.findIndex((item) => item.planName === "Popular");
  const [active, setActive] = useState<number | null>(initialIndex !== -1 ? initialIndex : null);
  const handleActive = (index: number) => {
    setActive(index);
  };
  const { isMobile, isLaptop } = useScreenDetector();
  return (
    <div className="break-points min-h-screen pt-10 font-funnel-sans">
      <div className="">
        <h2 className="section-title">Choose the right event Planning for you</h2>
        <p className="section-description">Start with our free plan and switch to premium as you grow</p>
        {/* <div className="flex justify-center items-end gap-2 pt-5 ">
          {eventManagementPricing.map((item, index) => (
            <div key={index}>
              {item.planName === "Popular" && (
                <div
                  className={`text-center p-1 min-w-72 max-w-80 border rounded-t-xl text-sm ${
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
                className={`min-w-72 max-w-80 border ${
                  active === index ? "shadow-xl transition-all duration-200" : "transition-all duration-200"
                } ${item.planName === "Popular" ? "rounded-b-2xl" : "rounded-2xl"} max-w-64 p-2 scroll-height`}
              >
                <div>
                  <div className="relative rounded-xl border p-2 bg-gradient-to-br from-green-700 via-green-500 to-green-700">
                    <h3 className="font-semibold text-white">{item.planName}</h3>
                    <p className="font-semibold text-white">{item.price}</p>
                    <span
                      className={`absolute right-4 bottom-2 ${
                        active === index ? "block transition-all duration-300" : "hidden transition-all duration-300"
                      }`}
                    >
                      <CircleCheck className="text-white w-5 h-5" />
                    </span>
                  </div>

                  <div className="px-6 pt-5 pb-2">
                    <p className="text-gray-700">price</p>
                    <p>
                      ₹<span className="font-semibold">{item.price}</span>
                    </p>
                  </div>

                  <div className="px-6 pt-2">
                    <div className="w-full border-t border-gray-400"></div>
                    <p className="text-gray-500 pt-2 text-sm font-semibold">Features</p>
                    {item.features.map((feature, index) => (
                      <p key={index} className="text-sm text-gray-700 font-semibold pt-1">
                        {feature}
                      </p>
                    ))}
                  </div>

                  <div className="px-6 pt-2">
                    <div className="w-full border-t border-gray-400"></div>
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

                  <div className="px-6 pt-2">
                    <div className="w-full border-t border-gray-400"></div>
                    <p className="text-gray-500 pt-2 text-sm font-semibold">Simultaneous Events</p>
                    <p key={index} className="text-sm text-gray-700 font-semibold pt-1">
                      {item.simultaneousEvents}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {isMobile && (
          <NewPricingMobile
            eventManagementPricing={eventManagementPricing}
            active={active}
            handleActive={handleActive}
          />
        )}
        {isLaptop && (
          <NewPricingDexktop
            eventManagementPricing={eventManagementPricing}
            active={active}
            handleActive={handleActive}
          />
        )}
      </div>
    </div>
  );
};
