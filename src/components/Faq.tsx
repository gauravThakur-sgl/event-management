import { faqData } from "../config/faqData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
export const Faq = () => {
  return (
    <div className="break-points py-20">
      <div>
        <h2 className="section-title">
          <span className="text-white text-medium bg-green-500 rounded-lg px-2">Frequently</span> Asked Questions
        </h2>
      </div>
      <div className="grid grid-cols-1 justify-center items-center pt-10 md:px-20 lg:px-40 xl:px-64">
        {faqData.map((item, index) => (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value={index.toString()}>
              <AccordionTrigger className="text-gray-800 text-xl font-semibold">{item.category}</AccordionTrigger>
              {item.questions.map((data, index) => (
                <AccordionContent key={index}>
                  <h3 className="font-semibold text-lg text-black">{data.question}</h3>
                  <p className="text-gray-700 text-lg">{data.answer}</p>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
