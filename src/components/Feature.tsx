export const Feature = () => {
  const logos = ["/notion-logo.svg", "/slack-logo.svg", "/relume-logo.svg", "/github-logo.svg", "/notion-logo.svg"];
  return (
    <div className="mt-10">
      <p className="section-title">Featuring the Our management software used by</p>
      <div className="flex justify-center items-center gap-4 mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        {logos.map((logo, index) => (
          <div key={index}>
            <div className="p-1 md:p-2">
              <img src={logo} className="h-10 md:h-10 lg:h-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
