import { FooterData } from "../config/footerData";
import { footerIcons } from "../config/footerIcons";

const Information = () => {
  const listStyle = "flex flex-col items-start text-gray-600";
  return (
    <div className="bg-slate-50 pt-10 pb-10 px-6 md:px-6 xl:px-32 2xl:px-56">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="font-semibold text-3xl text-center md:text-left">Event Management</div>
        {/* Social Media Icons */}
        <ul className="flex justify-center lg:justify-end items-center gap-2 mt-4 md:mt-0">
          {footerIcons.map((icon, index) => (
            <li key={index} className="bg-gray-200 rounded-full p-2 h-9 w-9">
              <img src={icon.icon} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
      <div className="text-gray-800 font-medium text-center md:text-left pt-5">
        Creating Unforgettable Experiences, One Event at a Time
      </div>
      {/* Footer Links */}
      <div className="flex flex-col md:flex-row md:justify-between lg:flex-row pt-5 gap-5">
        {FooterData.map((item, index) => (
          <ul key={index} className={`${listStyle}`}>
            <li className="text-2xl font-medium text-black">{item.title}</li>
            {item.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Information;
