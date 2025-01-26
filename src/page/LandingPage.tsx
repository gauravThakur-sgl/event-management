import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
// import { CardFeatureSection } from "../components/CardFeatureSection";
// import { Pricing } from "../components/Pricing";
import { Navbar } from "../components/Navbar";
import { Numbers } from "../components/Numbers";
import Information from "../components/Information";
import { Features } from "../components/Features";
import { NewPricing } from "../components/NewPricing";
import { Faq } from "../components/Faq";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div id="hero">
          <Hero />
        </div>
        <div id="numbers">
          <Numbers />
        </div>
        <div id="features">
          <Features />
        </div>
        {/* <Pricing /> */}
        <div id="pricing">
          <NewPricing />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="information">
          <Information />
        </div>
        <Footer />
      </div>
    </>
  );
};
