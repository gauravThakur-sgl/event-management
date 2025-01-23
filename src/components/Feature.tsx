import { FacebookLogo } from "./icons/FacebookLogo";
import { InstagramLogo } from "./icons/InstagramLogo";
import { NotionLogo } from "./icons/NotionLogo";
import { RelumeLogo } from "./icons/RelumeLogo";
import { Slack } from "./icons/SlackLogo";

export const Feature = () => {
  // const logos = [<GithubLogo />, <NotionLogo />];
  const logos = [
    <RelumeLogo height={60} width={60} />,
    <Slack height={50} width={50} />,
    <NotionLogo height={70} width={70} />,
    <FacebookLogo height={50} width={50} />,
    <InstagramLogo height={50} width={50} />,
  ];

  return (
    <div className="mt-10">
      <p className="section-title">Featuring the Our management software used by</p>
      <div className="flex justify-center items-center gap-4 mt-6 pb-10 overflow-hidden logo-fade">
        {logos.map((logo, index) => (
          <div key={index}>
            <div className="p-1 md:p-2">
              <div>
                {/* <img src={logo} className="h-10 md:h-10 lg:h-20" /> */}
                {logo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
