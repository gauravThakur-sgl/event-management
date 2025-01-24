import { useState } from "react";
import { eventManagementPricing } from "../config/newPricingData";
import { NewPricingMobile } from "./NewPricingMobile";
import { NewPricingDexktop } from "./NewPricingDexktop";
import { useScreenDetector } from "../config/useScreenDetector";

export const NewPricing = () => {
  const initialIndex = eventManagementPricing.findIndex((item) => item.planName === "Popular");
  const index = initialIndex !== -1 ? initialIndex : 0;
  const [active, setActive] = useState<number | null>(index);
  const handleActive = (index: number) => {
    setActive(index);
  };
  const { isMobile, isLaptop } = useScreenDetector();
  return (
    <div className="break-points min-h-screen py-10 font-funnel-sans snap-center">
      <div className="">
        <h2 className="section-title pt-20">
          Choose the right event <span className="rounded-lg px-2 bg-green-500 text-white">Planning</span> for you
        </h2>
        <p className="section-description py-5">Start with our free plan and switch to premium as you grow</p>
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
