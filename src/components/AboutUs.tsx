import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { teamData } from "../config/teamData.ts";

export const AboutUs = () => {
  return (
    <div className="break-points py-10">
      <h2 className="leading-snug section-title">
        <span className="rounded-lg px-2 bg-green-500 text-white text-nowrap">About</span> Us
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-4 py-10 p-4">
        <Card className="p-6 space-y-10 border-none bg-gray-50">
          <span className="w-fill flex justify-center items-center">
            <img src="/team.png" alt="" className="object-fill h-96 w-96" />
          </span>
          <div className="rounded-xl text-center px-20">
            <h3 className="pt-5 lg:text-3xl text-2xl font-semibold">
              Our Dream is to be the best Event Management Platform
            </h3>
            <p className="section-description text-justify">
              At Event Management, we transform ideas into extraordinary experiences. For over a decade, we've been
              crafting memorable events that leave lasting impressions and exceed expectations. From intimate gatherings
              to grand celebrations, corporate conferences to dream weddings, we bring creativity, precision, and
              passion to every project we undertake.
            </p>
          </div>
          <div>
            <div className="rounded-xl text-center px-20">
              <h3 className="pt-5 lg:text-2xl text-2xl font-semibold">Experience That Matters</h3>
              <p className="section-description text-justify">
                Our team brings together decades of combined experience in event planning, design, and management. We've
                successfully orchestrated thousands of events across diverse venues and scales, building strong
                relationships with premier vendors and venues along the way.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row gap-2 pt-10">
              <Button className="bg-green-600 text-white text-lg hover:bg-green-700 rounded-xl px-10 py-6 shadow">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-2 p-8">
            {teamData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-2 p-4 rounded-lg hover:bg-gray-100 tansition-all duration-300"
              >
                <h3 className="font-semibold text-3xl">{item.number}</h3>
                <p className="text-gray-500 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
