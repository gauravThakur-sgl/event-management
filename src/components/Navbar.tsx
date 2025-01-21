import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 md:px-6 lg:20 xl:px-56 sticky top-0 z-10">
      <div className="flex justify-center items-center font-bold text-green-600 gap-2">
        <span>
          <img src="/logo.png" alt="Event Management Logo" height={40} width={40} />
        </span>
        Event Management
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-center items-center gap-4 text-lg text-slate-600">
          <li>
            <a href="#features" className="hover:text-green-500">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-green-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#support" className="hover:text-green-500">
              Support
            </a>
          </li>
          <li>
            <a href="#download" className="hover:text-green-500">
              Download
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500">
              About us
            </a>
          </li>
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
  );
};
