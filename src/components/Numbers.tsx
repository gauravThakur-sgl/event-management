import { BicepsFlexed, CalendarCheck2, ThumbsUp } from "lucide-react";
import { NumberIcon } from "./ui/NumberIcon";
import CountUp from "react-countup";

export const Numbers = () => {
  const iconStyle = "rounded-full bg-green-500 text-white font semibold h-10 w-10 p-2";
  return (
    <div className="mx-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 py-20 rounded-md">
      <NumberIcon
        icon={<CalendarCheck2 className={`${iconStyle}`} />}
        description="Total Events Created"
        number={<CountUp end={1000} duration={2} suffix=" +" className="transition-all duration-200"/>}
      />
      <NumberIcon
        icon={<ThumbsUp className={`${iconStyle}`} />}
        description="of Our Clients recommend us"
        number={<CountUp end={95} duration={2} suffix=" %" />}
      />
      <NumberIcon
        icon={<BicepsFlexed className={`${iconStyle}`} />}
        description="Years of Client needs"
        number={<CountUp end={37} duration={2} suffix=" +" />}
      />
    </div>
  );
};
