import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";
// import { CardFeatureSection } from "../components/CardFeatureSection";
// import { Pricing } from "../components/Pricing";
import { Navbar } from "../components/Navbar";
import { Numbers } from "../components/Numbers";
import Information from "../components/Information";
import { Features } from "../components/Features";
import { TodoEvent } from "../components/TodoEvent";
import { NewPricing } from "../components/NewPricing";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Feature />
      <Features />
      {/* <CardFeatureSection /> */}
      <TodoEvent />
      <Integrations />
      {/* <Pricing /> */}
      <NewPricing />
      <Information />
      <Footer />
    </>
  );
};
