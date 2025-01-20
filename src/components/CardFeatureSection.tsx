import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
export const CardFeatureSection = () => {
  // const cardData = [
  //   {
  //     title: "Remainders that actually work",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec, mattis ac neque.",
  //     icon: "https://img.icons8.com/ios/452/calendar.png",
  //     imageData: {
  //       src: "https://img.icons8.com/ios/452/calendar.png",
  //       alt: "calendar",
  //       title: "Popup Reminder meeting at 2:00 PM",
  //     },
  //   },
  //   {
  //     title: "See how your day looks like",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec, mattis ac neque.",
  //     icon: "https://img.icons8.com/ios/452/calendar.png",
  //   },
  //   {
  //     title: "Team up and get things done",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec, mattis ac neque.",
  //     icon: "https://img.icons8.com/ios/452/calendar.png",
  //   },
  //   {
  //     title: "One event calendar for all your needs",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec, mattis ac neque.",
  //     icon: "https://img.icons8.com/ios/452/calendar.png",
  //   },
  // ];
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
              <Card className="rounded-xl p-4 pb-10">
                <CardTitle>Remainders that actually work</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="" alt="icon" className="h-10 md:h-10 lg:h-20" />
                </CardContent>
              </Card>
              <Card className="rounded-xl p-4 md:w-9/12">
                <CardTitle>See how your day looks like</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="" alt="icon" className="h-10 md:h-10 lg:h-20" />
                </CardContent>
              </Card>
            </div>
            {/* Second Row */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-2">
              <Card className="rounded-xl p-4 md:w-9/12">
                <CardTitle>Team up and get things done</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="" alt="icon" className="h-10 md:h-10 lg:h-20" />
                </CardContent>
              </Card>
              <Card className="rounded-xl p-4 pb-10">
                <CardTitle>One event calendar for all your needs</CardTitle>
                <CardDescription className="text-md mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu phare tra nec,
                  mattis ac neque.
                </CardDescription>
                <CardContent className="rounded-xl bg-gray-100 p-2 mt-5 flex justify-center items-center">
                  <img src="" alt="icon" className="h-10 md:h-10 lg:h-20" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
