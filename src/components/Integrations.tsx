export const Integrations = () => {
  const logos = [
    "/notion-logo.svg",
    "/slack-logo.svg",
    "/relume-logo.svg",
    "/github-logo.svg",
    "/notion-logo.svg",
    "/slack-logo.svg",
    "/relume-logo.svg",
    "/github-logo.svg",
  ];
  return (
    <>
      <div className="h-screen bg-white">
        <div className="mt-40 flex flex-col justify-center items-center mx-4">
          <h2 className="font-semibold text-3xl lg:text-5xl tracking-tight text-center px-2 lg:px-96">
            Sync Events seamlessly <br /> with all the tools you use every day
          </h2>
          <p className="text-gray-500 text-lg mt-3 text-center">
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
