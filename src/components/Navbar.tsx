import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
interface INavbarProps {
  featureRef: React.RefObject<HTMLDivElement>;
  pricingRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  informationRef: React.RefObject<HTMLDivElement>;
}

export const Navbar = ({ featureRef, pricingRef, faqRef, informationRef }: INavbarProps) => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navBarData = [
    {
      title: "Features",
      link: "/#features",
      ref: featureRef,
      subFeatures: [
        {
          title: "Event Details",
          link: "/#features",
          ref: featureRef,
        },
        {
          title: "Event Blogging",
          link: "/#features",
          ref: featureRef,
        },
        {
          title: "Event Todo",
          link: "/#features",
          ref: featureRef,
        },
      ],
    },
    {
      title: "Pricing",
      link: "/#pricing",
      ref: pricingRef,
      subFeatures: [],
    },
    {
      title: "Support",
      link: "/#faq",
      ref: faqRef,
      subFeatures: [],
    },
    {
      title: "About us",
      link: "/#information",
      ref: informationRef,
      subFeatures: [],
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-green-600 h-16 p-2 lg:p-4 md:px-6 xl:px-32 2xl:px-56 fixed top-0 w-full z-20">
        <div className="flex justify-center items-center font-bold text-white gap-2 cursor-pointer">
          <span>
            <img src="/logo.png" alt="Event Management Logo" height={40} width={40} />
          </span>
          {/* Event Management */}
        </div>
        <div className="hidden lg:block">
          <NavigationMenu className="flex justify-center items-center gap-4 text-lg text-white bg-green-600">
            <NavigationMenuList>
              {navBarData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.title === "Features" && (
                    <div>
                      <NavigationMenuTrigger className="bg-green-600 hover:bg-green-600 hover:text-white text-lg font-normal">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul>
                          {item.subFeatures.map((data, index) => (
                            <li
                              key={index}
                              onClick={() => scrollToRef(item.ref)}
                              className="cursor-pointer text-nowrap p-2 bg-green-600 text-white"
                            >
                              <NavigationMenuLink>{data.title}</NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </div>
                  )}
                  {item.title !== "Features" && (
                    <ul className="">
                      <li onClick={() => scrollToRef(item.ref)} className="cursor-pointer">
                        <NavigationMenuLink className="pl-8">{item.title}</NavigationMenuLink>
                      </li>
                    </ul>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center items-center gap-2 px-2">
          <Menu className="md:hidden" />
          <div className="hidden md:block">
            <span className="flex justify-center items-center gap-2">
              <Button variant="outline" className="border-none text-base rounded-full px-8">
                Login
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
