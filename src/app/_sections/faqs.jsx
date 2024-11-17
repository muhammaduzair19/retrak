import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How do I track my applications?",
        answer: "Go to your dashboard and add jobs in Retrak to track your applications. You can manually update their statuses or use automatic tracking for certain job platforms.",
    },
    {
        question: "Can I create multiple resumes?",
        answer: "Yes! Free users can create one resume, while Plus and Pro users can create multiple resumes with various templates and customization options.",
    },
    {
        question: "What’s the difference between Free and Pro?",
        answer: "The Free plan offers basic features like a single resume template and tracking up to 5 applications. Pro includes unlimited templates, job tracking, advanced analytics, and premium support.",
    },
    {
        question: "Can I save jobs I’m interested in?",
        answer: "Yes, you can save jobs directly in your dashboard to keep track of opportunities you're considering.",
    },
    {
        question: "How does Retrak recommend jobs?",
        answer: "Retrak uses your profile data, including skills and experience, to recommend jobs that align with your career goals.",
    },
];

const Faqs = () => {
    return (
        <section id="faqs" className="w-full px-4 md:px-10  lg:px-20 py-12">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <h1 className="font-medium text-4xl lg:text-5xl  text-center md:text-left mt-10">
                        Frquently{" "}
                        <span className="text-gray-500"> Asked Questions</span>
                        <br className="max-xl:hidden" />
                    </h1>
                    <p className="font-thin text-gray-600 text-base md:text-lg mt-3">
                        Can’t find your answer? Send{" "}
                        <span className="font-semibold text-gray-800">
                            retrak
                        </span>{" "}
                        an email
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex  items-center">
                    {/* FAQS */}
                    <Accordion
                        className="w-full mt-10 px-2"
                        type="multiple"
                        collapsible
                    >
                        {faqs?.map(({ question, answer }, idx) => (
                            <AccordionItem key={idx} value={`item-${idx + 1}`}>
                                <AccordionTrigger className="text-gray-700 text-xl md:text-2xl ">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-xl md:text-2xl ">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
