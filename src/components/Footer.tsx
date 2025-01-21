import { FooterData } from "../config/footerData";
import { footerIcons } from "../config/footerIcons";
export const Footer = () => {
  
  
  const listStyle = "flex flex-col items-start text-gray-400";
  return (
    <div className="bg-black text-white">
      <div className="pt-10 px-6 md:px-6 xl:px-32 2xl:px-56">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-semibold text-3xl text-center md:text-left">Event Management</div>
          {/* Social Media Icons */}
          <ul className="flex justify-center lg:justify-end items-center gap-2 mt-4 md:mt-0">
            {footerIcons.map((icon, index) => (
              <li key={index} className="bg-white rounded-full p-2 h-9 w-9">
                <img src={icon.icon} alt={icon.alt} />
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray-400 font-medium text-center md:text-left pt-5">
          Creating Unforgettable Experiences, One Event at a Time
        </div>
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:justify-center lg:flex-row gap-9 md:gap-12 xl:gap-32 2xl:gap-40 pt-5  ">
          {FooterData.map((item, index) => (
            <ul key={index} className={`${listStyle}`}>
              <li className="text-2xl font-medium text-white">{item.title}</li>
              {item.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:px-20 xl:px-11 2xl:px-14 md:justify-around items-center gap-2 py-5 border-t border-gray-400 mt-10">
        <div>Terms and Conditions</div>
        <div className="text-center">© 2023 Event Management. All rights reserved.</div>
        <div>Cookies Policy</div>
      </div>
    </div>
  );
};
