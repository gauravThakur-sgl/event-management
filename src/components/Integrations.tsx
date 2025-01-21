import { FacebookLogo } from "./icons/FacebookLogo";
import { InstagramLogo } from "./icons/InstagramLogo";
import { NotionLogo } from "./icons/NotionLogo";
import { RelumeLogo } from "./icons/RelumeLogo";
import { Slack } from "./icons/SlackLogo";
export const Integrations = () => {
  // const logos = [
  //   "/notion-logo.svg",
  //   "/slack-logo.svg",
  //   "/relume-logo.svg",
  //   "/github-logo.svg",
  //   "/notion-logo.svg",
  //   "/notion-logo.svg",
  //   "/slack-logo.svg",
  //   "/relume-logo.svg",
  //   "/github-logo.svg",
  //   "/notion-logo.svg",
  //   "/notion-logo.svg",
  //   "/slack-logo.svg",
  //   "/relume-logo.svg",
  //   "/github-logo.svg",
  //   "/notion-logo.svg",
  // ];
  const logos = [
    <RelumeLogo height={60} width={60} />,
    <Slack height={50} width={50} />,
    <NotionLogo height={70} width={70} />,
    <FacebookLogo height={50} width={50} />,
    <InstagramLogo height={50} width={50} />,
    <RelumeLogo height={60} width={60} />,
    <Slack height={50} width={50} />,
    <NotionLogo height={70} width={70} />,
    <FacebookLogo height={50} width={50} />,
    <InstagramLogo height={50} width={50} />,
    <RelumeLogo height={60} width={60} />,
    <Slack height={50} width={50} />,
    <NotionLogo height={70} width={70} />,
    <FacebookLogo height={50} width={50} />,
    <InstagramLogo height={50} width={50} />,
  ];

  return (
    <>
      <div className="bg-gradient-to-l from-white to-green-100 mx-4 rounded-b-xl">
        <div className="pt-20 flex flex-col justify-center items-center">
          <h2 className="section-title">
            Sync Events seamlessly <br /> with all the tools you use every day
          </h2>
          <p className="section-description">
            Connect your favorite apps and services to Event Management and automate your workflow.
          </p>
        </div>
        {/* Integrations */}
        <div className="logo-fade pb-10 overflow-hidden">
          <div className="flex justify-center items-center gap-4 mt-10">
            {logos.map((logo, index) => (
              <div key={index}>
                <div className="p-1 md:p-2">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
