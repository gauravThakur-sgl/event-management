import { Button } from "./ui/button";

export const Schedule = () => {
  return (
    <div className="break-points bg-gradient-to-r py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-green-600 rounded-lg h-full p-4 lg:p-20 overflow-hidden shadow">
        <div className="flex flex-col justify-center lg:justify-normal items-center gap-2">
          <h3 className="section-title text-white p-2 text-left">Take your Event Management to next Level</h3>
          <p className="section-description text-white px-2 text-left">
            From effortless event organization to seamless calendar integration, Event management makes staying top of
            your schedule easier and more effective than ever before
          </p>
          <div className="flex flex-col items-center justify-start md:flex-row w-full gap-2 pt-5">
            <Button className="bg-white text-black hover:bg-gray-50 rounded-xl px-10 py-6 shadow">
              Sign up for free
            </Button>
            <Button
              variant="outline"
              className="border-none text-base rounded-xl px-8 bg-bransparent text-white shadow-inner hover:bg-transparent hover:text-white"
            >
              Get a Demo
            </Button>
          </div>
        </div>
        <div className="hidden md:block lg:relative">
          <div className="absolute -right-40 -bottom-80 bg-transparent shadow-2xl rounded-2xl">
            <img src="/product-image.png" alt="Hero" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
