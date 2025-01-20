import { FolderCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-green-200 mx-4 rounded-b-3xl">
      <div className="flex justify-center items-center pt-5">
        <Badge color="green" className="bg-green-50 hover:bg-green-50">
          <div className="flex justify-center items-center gap-3 text-green-600 text-base px-2 py-1">
            <FolderCheck size={16} className="text-green-600 font-semibold" />
            <p>Organise your Events</p>
          </div>
        </Badge>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center mx-4">
        <p className="font-semibold text-5xl tracking-tight text-center">Simplify Your WorkFlow, Maximize your productivity</p>
        <p className=" text-gray-500 text-lg mt-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 rounded-full px-10 py-6 mt-10">
          <span className="inline-flex justify-center items-center text-lg font-medium">Get Started</span>
        </Button>
      </div>
      <div className="pt-10 text-center pb-20">Hello</div>
    </div>
  );
};
