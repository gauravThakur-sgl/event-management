import { Menu } from "lucide-react";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Hero } from "../components/Hero";

export const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-bold text-green-00">Event Management</h2>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center gap-4 text-lg text-slate-600">
            <li className="hover:text-green-500">Feature</li>
            <li className="hover:text-green-500">Pricing</li>
            <li className="hover:text-green-500">Support</li>
            <li className="hover:text-green-500">Download</li>
            <li className="hover:text-green-500">About us</li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-2 px-2 md:px-8">
          <Menu className="md:hidden" />
          <div className="hidden md:block">
            <Button variant="outline" className="border-none rounded-full px-8">
              Login
            </Button>
            <Button variant="default" className="bg-green-600 hover:bg-green-700 rounded-full px-8 ">
              Signup
            </Button>
          </div>
        </div>
      </div>
      <Hero />
      <Footer />
    </div>
  );
};
