import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
export const CardFeatureSection = () => {
  return (
    <>
      <div className="mt-24 bg-gradient-to-r from-white to-green-50 mx-4 pb-4 rounded-b-xl">
        <div className="flex flex-col justify-center items-center pt-5">
          <Badge color="green" className="bg-green-50 hover:bg-green-50 shadow-sm">
            <div className="flex justify-center items-center gap-3 text-green-600 text-base px-2 py-1">
              <p>Our Cool Tools</p>
            </div>
          </Badge>
          <div className="mt-6">
            <h2 className="font-semibold text-3xl lg:text-5xl tracking-tight text-center px-2 lg:px-96">
              Effortless scheduling with Event Management for every event in your day
            </h2>
            <p className="text-gray-500 text-lg mt-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
              mattis ac neque.
            </p>
          </div>
          {/* Card Section */}
          <div className="flex flex-col gap-2 mt-10 px-10 lg:px-20">
            <div className="flex flex-col md:flex-row justify-center items-start gap-2">
              <Card className="rounded-xl p-2 md:p-6 hover:scale-105 hover:transition-all hover:duration-200">
                <CardTitle>Remainders that actually work</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="/cardImage-1.png" alt="icon" className="w-96 my-4" />
                </CardContent>
              </Card>
              <Card className="rounded-xl p-2 md:p-6 md:w-7/12 hover:scale-105 hover:transition-all hover:duration-200">
                <CardTitle>See how your day looks like</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2  mt-5 flex justify-center items-center">
                  <img src="/cardImage-1.png" alt="icon" className="w-96 my-4" />
                </CardContent>
              </Card>
            </div>
            {/* Second Row */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-2">
              <Card className="rounded-xl p-2 md:p-6 md:w-7/12 hover:scale-105 hover:transition-all hover:duration-200">
                <CardTitle>Team up and get things done</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="/cardImage-1.png" alt="icon" className="w-96 my-4" />
                </CardContent>
              </Card>
              <Card className="rounded-xl p-2 md:p-6 hover:scale-105 hover:transition-all hover:duration-400">
                <CardTitle>One event calendar for all your needs</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="/cardImage-1.png" alt="icon" className="w-96 my-4" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
