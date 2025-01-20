import { Button } from "../components/ui/button";
import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Footer } from "../components/Footer";
import { Menu } from "lucide-react";
import { Feature } from "../components/Feature";

export const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-bold text-green-600">Event Management</h2>
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

        <div className="flex justify-center items-center gap-2 px-2 md:px-8">
          <Menu className="md:hidden" />
          <div className="hidden md:block">
            <Button variant="outline" className="border-none rounded-full px-8">
              Login
            </Button>
            <Button variant="default" className="bg-green-600 hover:bg-green-700 rounded-full px-8 shadow">
              Signup
            </Button>
          </div>
        </div>
      </div>
      <Hero />
      <Feature />
      <Integrations />
      <Footer />
    </div>
  );
};
