import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="md:h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-green-100 rounded-b-3xl py-20">
      <div className="flex flex-col justify-center items-center mx-4">
        <h2 className="leading-snug section-title">
          <span className="font-light">Simplify </span>Your WorkFlow <br /> Maximize your Choose the right event{" "}
          <span className="rounded-lg px-2 bg-green-500 text-white text-nowrap">productivity</span>
        </h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis
          ac neque.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 rounded-full px-10 py-6 mt-10 shadow">
          <span className="inline-flex justify-center items-center text-lg font-medium">Get Started</span>
        </Button>
      </div>
      <div className="flex justify-center items-center m-4">
        <div className="bg-transparent rounded-lg shadow-2xl">
          <img src="/product-image.png" alt="Hero"/>
        </div>
      </div>
    </div>
  );
};
