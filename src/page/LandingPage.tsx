import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Numbers } from "../components/Numbers";
import Information from "../components/Information";
import { Features } from "../components/Features";
import { NewPricing } from "../components/NewPricing";
import { Faq } from "../components/Faq";
import { Progress } from "../components/ui/progress";
import { useEffect, useRef, useState } from "react";

export const LandingPage = () => {
const heroRef = useRef<HTMLDivElement>(null);
const numbersRef = useRef<HTMLDivElement>(null);
const featuresRef = useRef<HTMLDivElement>(null);
const pricingRef = useRef<HTMLDivElement>(null);
const faqRef = useRef<HTMLDivElement>(null);
const informationRef = useRef<HTMLDivElement>(null);
// const footerRef = useRef<HTMLDivElement>(null);

const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <>
      <Progress value={scrollProgress} max={100} className="z-50 h-1 sticky top-0" />
      <Navbar />
      <div className="pt-16">
        <div id="hero" ref={heroRef}>
          <Hero />
        </div>
        <div id="numbers" ref={numbersRef}>
          <Numbers />
        </div>
        <div id="features" ref={featuresRef}>
          <Features />
        </div>
        {/* <Pricing /> */}
        <div id="pricing" ref={pricingRef}>
          <NewPricing />
        </div>
        <div id="faq" ref={faqRef}>
          <Faq />
        </div>
        <div id="information" ref={informationRef}>
          <Information  />
        </div>
        <Footer />
      </div>
    </>
  );
};
