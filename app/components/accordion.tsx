import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionComponent = () => {
  const faqData = [
    {
      question: "Is my personal information secured?",
      answer:
        "Yes, we take privacy seriously. Your personal information is encrypted and stored securely.",
    },
    {
      question: "How are ratings and reviews moderated?",
      answer:
        "Ratings and reviews are moderated to ensure fairness and authenticity. We have a team that reviews submissions to prevent misuse.",
    },
    {
      question: "Can professors or lecturers delete negative reviews?",
      answer:
        "No, professors or lecturers cannot delete reviews. However, they can respond to reviews to provide their perspective.",
    },
    {
      question: "Is there a way to report inappropriate content?",
      answer:
        "Yes, users can report reviews that they find inappropriate. Our team will review reports promptly.",
    },
    {
      question: "How can I trust the authenticity of the reviews?",
      answer:
        "We encourage users to provide constructive feedback based on their genuine experiences. We also have mechanisms in place to detect and prevent fake reviews.",
    },
  ];
  return (
    <div className=" mt-5">
      <h2 className=" text-lg md:text-2xl mt-5 text-green-400 underline-offset-4 underline">
        FAQS 🤔
      </h2>
      {faqData.map((each, idx) => {
        return (
          <Accordion key={idx} type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" text-start hover:no-underline hover:text-green-400">
                {each.question}
              </AccordionTrigger>
              <AccordionContent className="">{each.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
