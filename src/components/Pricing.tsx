import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Pricing = () => {
  const pricingTiers = [
    {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      description: "For small teams",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      description: "For growing teams",
      popular: true,
      inverse: true,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      description: "For large teams",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];
  return (
    <div>
      <div className="min-h-screen mx-2 pb-10 bg-green-50">
        <h2 className="pt-20 font-semibold text-3xl lg:text-5xl tracking-tight text-center px-2 xl:px-64">Pricing</h2>
        <p className="text-gray-500 text-lg mt-6 text-center">
          Free forever. Upgrade for unlimited events, better security, and exclusive features.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map((item, index) => (
            <Card
              key={index}
              className={`p-4 md:p-6 shadow-lg rounded-lg gap-8 text-white w-96 hover:scale-105 hover:transition-all hover:duration-200 ${
                index === 1
                  ? "bg-green-600 text-white inset-0 bg-[linear-gradient(to_right,#FFFFFF1A_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF1A_1px,transparent_1px)] bg-[size:24px_24px]"
                  : "text-black bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {index === 1 && (
                  <span className="py-1 px-3 text-sm font-medium rounded-full shadow-lg bg-green-100 text-green-600">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-6 font-semibold">
                <span className="text-4xl font-bold tracking-tighter leading-none">${item.monthlyPrice}</span>
                <span className={`${index === 1 ? "text-gray-200" : ""}`}>/month</span>
              </p>
              <p className="mt-6 tracking-tight">{item.description}</p>
              <ul className={`mt-6 ${index === 1 ? "text-white" : "text-gray-500"} space-y-4`}>
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <div className="flex justify-start items-center gap-4">
                      <span className={`${item.title === "Pro" ? "" : "text-green-500"}`}>
                        <Check className={`h-5`} />
                      </span>
                      <p>{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <span className="flex justify-center items-center">
                <Button
                  className={` mt-6 ${
                    index === 1
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
