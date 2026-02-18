"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const QuoteIcon = () => (
    <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-6 text-primary/10">
        <path d="M12.7236 27.0312H0.917969V15.9375C0.917969 11.2135 2.21094 7.23438 4.79883 3.99902L7.38672 6.5C5.81641 8.80762 5.03125 11.3623 5.03125 14.1602H12.7236V27.0312ZM34.2578 27.0312H22.4521V15.9375C22.4521 11.2135 23.7451 7.23438 26.333 3.99902L28.9209 6.5C27.3506 8.80762 26.5654 11.3623 26.5654 14.1602H34.2578V27.0312Z" fill="currentColor"/>
    </svg>
);

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`}
            />
        );
    }
    return <div className="flex gap-1">{stars}</div>;
};

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
            Words from Our Achievers
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            See how The Law Leads has shaped the careers of our students.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background text-center">
                    <CardHeader className="flex flex-col items-center">
                      {testimonial.image && (
                        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                          <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="font-bold text-xl text-primary">{testimonial.name}</p>
                        <p className="text-sm text-accent font-semibold">{testimonial.title}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 relative flex-grow">
                        <QuoteIcon/>
                        <p className="text-foreground/80 italic z-10 relative">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="flex justify-center pt-4">
                        {testimonial.rating && renderStars(testimonial.rating)}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
