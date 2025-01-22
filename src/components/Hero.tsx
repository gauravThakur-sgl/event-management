import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="md:h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-green-100 mx-4 rounded-b-3xl">
      <div className="mt-24 flex flex-col justify-center items-center mx-4">
        <h1 className="section-title">
          Simplify Your WorkFlow <br /> Maximize your productivity
        </h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 rounded-full px-10 py-6 mt-10 shadow">
          <span className="inline-flex justify-center items-center text-lg font-medium">Get Started</span>
        </Button>
      </div>
      <div className="pt-10 flex justify-center items-center m-4">
        <div className="bg-transparent rounded-lg shadow-2xl hidden md:block">
          <img src="/product-image.png" alt="Hero"  />
        </div>
      </div>
    </div>
  );
};
