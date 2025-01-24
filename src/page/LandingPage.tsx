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
import { Faq } from "../components/Faq";
import { EventCalendar } from "../components/EventCalendar";

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
        <div id="feature">
          <Feature />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="event-calendar">
          <EventCalendar />
        </div>
        {/* <CardFeatureSection /> */}
        <div id="todo-event">
          <TodoEvent />
        </div>
        <div id="integrations">
          <Integrations />
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
