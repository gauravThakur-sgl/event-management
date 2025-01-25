import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { HashLink as Link } from "react-router-hash-link";
export const Navbar = () => {
  const navBarData = [
    {
      title: "Features",
      link: "/#features",
    },
    {
      title: "Pricing",
      link: "/#pricing",
    },
    {
      title: "Support",
      link: "/#faq",
    },
    {
      title: "About us",
      link: "/#information",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center bg-green-600 p-2 lg:p-4 md:px-6 xl:px-32 2xl:px-56 fixed top-0 w-full z-20">
        <div className="flex justify-center items-center font-bold text-white gap-2 cursor-pointer">
          <span>
            <img src="/logo.png" alt="Event Management Logo" height={40} width={40} />
          </span>
          {/* Event Management */}
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-4 text-lg text-white">
            {navBarData.map((item, index) => (
              <li key={index}>
                <Link to={item.link} smooth className="hover:green-500">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
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
