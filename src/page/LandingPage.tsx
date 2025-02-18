import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Numbers } from "../components/Numbers";
import Information from "../components/Information";
import { Features } from "../components/Features";
import { NewPricing } from "../components/NewPricing";
import { Faq } from "../components/Faq";
import { Progress } from "../components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { Schedule } from "../components/Schedule";
import { AboutUs } from "../components/AboutUs";
import { EventCalendar } from "../components/EventCalendar";
import { TodoEvent } from "../components/TodoEvent";

export const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const aboutusRef = useRef<HTMLDivElement>(null);
  const eventCalendarRef = useRef<HTMLDivElement>(null);
  const eventTodoRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header featureRef={featuresRef} pricingRef={pricingRef} faqRef={faqRef} aboutusRef={aboutusRef} eventCalendarRef={eventCalendarRef} eventTodoRef={eventTodoRef} />
      <Progress
        value={scrollProgress}
        max={100}
        className={`z-10 h-1 fixed top-16 ${scrollProgress > 0 ? "block transition-all duration-300" : "hidden"}`}
      />
      <div className="pt-16">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={numbersRef}>
          <Numbers />
        </div>
        <div ref={featuresRef}>
          <Features />
        </div>
        <div ref={eventCalendarRef}>
          <EventCalendar />
        </div>
        <div ref={eventTodoRef}>
          <TodoEvent />
        </div>
        <div ref={scheduleRef}>
          <Schedule />
        </div>
        <div ref={aboutusRef}>
          <AboutUs />
        </div>
        <div ref={pricingRef}>
          <NewPricing />
        </div>
        <div ref={faqRef}>
          <Faq />
        </div>
        <Information />
        <Footer />
      </div>
    </>
  );
};
