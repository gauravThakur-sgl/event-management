import { todoEventData } from "../config/todoEvent";
export const TodoEvent = () => {
  return (
    <div className="break-points py-10 font-funnel-sans bg-transparent">
      <h2 className="section-title">Stay <span className="bg-green-500 px-2 rounded-lg text-white text-medium font-normal">productive</span> and organized with our to-do list feature.</h2>
      <div>
        {todoEventData.map((todoEvent, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-2 pt-10">
            {todoEvent.features.map((feature, index) => (
              <div key={index} className="p-3 w-full h-60 hover:shadow-lg rounded-xl hover:bg-gray-100 transition-all ease-in">
                <div className="flex flex-col items-start gap-2">
                  <span className="h-14 w-14 mb-6 bg-transparent shadow-sm rounded-xl bg-gray-100">
                    <img src={feature.icon} alt="" className="text-green-600 p-4" />
                  </span>
                  <span className="text-green-600 text-xl font-semibold pb-4">{feature.title}</span>
                </div>
                <div className="text-start">
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
