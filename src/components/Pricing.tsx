import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { pricingTiers } from "../config/pricingData";
interface IPricingData {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  description: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
  notIncluded: string[];
}
export const Pricing = () => {
  return (
    <div>
      <div className="min-h-screen mx-4 mt-6 pb-10 bg-gradient-to-b from-white to-green-50">
        <h2 className="pt-20 font-semibold text-3xl lg:text-5xl tracking-tight text-center px-2 xl:px-64">Pricing</h2>
        <p className="text-gray-500 text-lg mt-6 text-center">
          Free forever. Upgrade for unlimited events, better security, and exclusive features.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center scroll-auto">
          {pricingTiers.map((item: IPricingData, index: number) => (
            <Card
              key={index}
              className={`p-4 md:p-6 shadow-lg rounded-lg gap-8 text-white w-72 lg:w-96 hover:scale-105 hover:transition-all hover:duration-200 ${
                item.title === "Pro" ? "bg-green-600 text-white gridLines" : "text-black bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.title === "Pro" && (
                  <span className="py-1 px-3 text-sm font-medium rounded-full shadow-lg bg-green-100 text-green-600">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-6 font-semibold">
                <span className="text-4xl font-bold ">${item.monthlyPrice}</span>
                <span className={`${item.title === "Pro" ? "text-gray-200" : ""}`}>/month</span>
              </p>
              <p className="mt-6 ">{item.description}</p>
              <div className="scroll-height overflow-auto">
                <ul className={`mt-6 ${item.title === "Pro" ? "text-white" : "text-gray-500"} space-y-4`}>
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <div className="flex justify-start  gap-4">
                        <span className={`${item.title === "Pro" ? "" : "text-green-500"}`}>
                          <Check className={`h-5`} />
                        </span>
                        <p>{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className={`mt-6 ${item.title === "Pro" ? "text-white" : "text-gray-500"} space-y-4`}>
                  {item.notIncluded.map((feature, index) => (
                    <li key={index}>
                      <div className="flex justify-start  gap-4">
                        <span className={`${item.title === "Pro" ? "" : "text-green-500"}`}>
                          <X className={`h-5 text-red-500`} />
                        </span>
                        <p>{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="flex justify-center items-center">
                <Button
                  className={` mt-6 ${
                    item.title === "Pro"
                      ? "bg-white text-green-600 hover:bg-green-50 "
                      : "bg-green-50 shadow-sm text-green-600 hover:bg-green-100"
                  }`}
                >
                  {item.buttonText}
                </Button>
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
