import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Footer } from "../components/Footer";
import { Feature } from "../components/Feature";
import { CardFeatureSection } from "../components/CardFeatureSection";
import { Pricing } from "../components/Pricing";
import { Navbar } from "../components/Navbar";
import { Numbers } from "../components/Numbers";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Feature />
      <CardFeatureSection />
      <Integrations />
      <Pricing />
      <Footer />
    </>
  );
};
