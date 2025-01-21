import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";
import { CardFeatureSection } from "../components/CardFeatureSection";
import { Pricing } from "../components/Pricing";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CardFeatureSection />
      <Integrations />
      <Pricing />
      <Footer />
    </>
  );
};
