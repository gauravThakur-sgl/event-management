export const Integrations = () => {
  const logos = [
    "/notion-logo.svg",
    "/slack-logo.svg",
    "/relume-logo.svg",
    "/github-logo.svg",
    "/notion-logo.svg",
  ];
  return (
    <>
      <div className="h-screen bg-gradient-to-l from-white to-green-100 mx-4 rounded-b-xl">
        <div className="pt-20 flex flex-col justify-center items-center">
          <h2 className="section-title">
            Sync Events seamlessly <br /> with all the tools you use every day
          </h2>
          <p className="section-description">
            Connect your favorite apps and services to Event Management and automate your workflow.
          </p>
        </div>
        {/* Integrations */}
        <div className="flex justify-center items-center gap-4 mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {logos.map((logo, index) => (
            <div key={index}>
              <div className="border p-1 md:p-2 rounded:xl lg:rounded-2xl shadow">
                <img src={logo} alt="Notion" className="h-10 md:h-10 lg:h-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
