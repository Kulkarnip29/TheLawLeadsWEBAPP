import { faqs } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Faq() {
    return (
        <section id="faq" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                             <AccordionItem key={index} value={`item-${index}`} className="bg-primary/5 rounded-lg px-6 border-b-0">
                                <AccordionTrigger className="text-lg font-semibold text-primary text-left hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/80">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
