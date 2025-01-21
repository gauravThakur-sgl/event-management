export const Footer = () => {
  const listStyle = "flex flex-col  items-start text-gray-400 gap-2";
  return (
    <div className="bg-black text-white">
      <div className="pt-10 mx-2 md:mx-40">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-semibold text-3xl text-center md:text-left">Event Management</div>
          {/* Social Media Icons */}
          <ul className="flex justify-center lg:justify-end items-center gap-2">
            <li className="bg-white rounded-full p-2 h-9 w-9">
              <img src="/Twitter.svg" alt="Twitter" className="" />
            </li>
            <li className="bg-white rounded-full p-2 h-9 w-9">
              <img src="/Instagram.svg" alt="Telegram" />
            </li>
            <li className="bg-white rounded-full p-2 h-9 w-9">
              <img src="/Facebook.svg" alt="Facebook" />
            </li>
            <li className="bg-white rounded-full p-2 h-9 w-9">
              <img src="/Instagram.svg" alt="Instagram" />
            </li>
          </ul>
        </div>
        <div className="text-gray-400 font-medium text-center md:text-left pt-5">
          Creating Unforgettable Experiences, One Event at a Time
        </div>

        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row gap-5 px-4 md:gap-4 lg:gap-16 xl:gap-32 2xl:gap-56 pt-20">
          <ul className={`${listStyle}`}>
            <li className="text-2xl font-medium text-white">Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Mobile App</li>
            <li>Demo</li>
          </ul>
          <ul className={`${listStyle}`}>
            <li className="text-2xl font-medium text-white">Company</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
          <ul className={`${listStyle} text-nowrap`}>
            <li className="text-2xl font-medium text-white">Resources</li>
            <li>Help Center</li>
            <li>Tutorials</li>
            <li>Community</li>
            <li>API Documentation</li>
            <li>FAQs</li>
          </ul>
          <ul className={`${listStyle} text-nowrap`}>
            <li className="text-2xl font-medium text-white">Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Security</li>
            <li>GDPR Compliance</li>
          </ul>
          <ul className={`${listStyle}`}>
            <li className="text-2xl font-medium text-white">Social</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Phone</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row  md:justify-around items-center gap-2 py-5 border-t border-gray-400 mt-10">
        <div>Terms and Conditions</div>
        <div className="text-center">© 2023 Event Management. All rights reserved.</div>
        <div>Cookies Policy</div>
      </div>
    </div>
  );
};
