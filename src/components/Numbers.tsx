import { BicepsFlexed, CalendarCheck2, ThumbsUp } from "lucide-react";
import { NumberIcon } from "./ui/NumberIcon";

export const Numbers = () => {
  const iconStyle = "rounded-full bg-green-500 text-white font semibold h-10 w-10 p-2";
  return (
    <div className="mx-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 py-12 rounded-md">
      <NumberIcon
        icon={<CalendarCheck2 className={`${iconStyle}`} />}
        description="Total Events Created"
        number="1000 +"
      />
      <NumberIcon
        icon={<ThumbsUp className={`${iconStyle}`} />}
        description="of Our Clients recommend us"
        number="97"
      />
      <NumberIcon
        icon={<BicepsFlexed className={`${iconStyle}`} />}
        description="Years of Client needs"
        number="30 +"
      />
    </div>
  );
};
