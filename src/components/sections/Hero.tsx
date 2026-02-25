import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlayCircle, ArrowRight } from "lucide-react";
import { marqueeItems } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Marquee = () => {
  return (
    <div className="bg-primary text-primary-foreground border-b border-accent/20">
      <div className="relative flex overflow-x-hidden w-full py-3 marquee-group">
        <div className="flex whitespace-nowrap marquee">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={index} className="text-sm font-bold mx-12 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div id="home" className="relative">
      <Marquee />
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                priority
                className="object-cover scale-105"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-primary/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-6 py-2 mb-8 rounded-full glassmorphism text-white font-bold text-xs md:text-sm tracking-widest uppercase animate-fade-in-up">
            #Welcome to The Law Leads – Online Coaching for Law Students &amp; Aspirants
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-white" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <span className="block text-accent">EXCELLENCE</span>
            <span className="block italic">IS OUR HABIT.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 mb-12 font-medium leading-relaxed drop-shadow-md px-4">
            Your definitive path to success in LAW entrance Exam (LLB 3 years & 5 yrars), CLAT PG & LLM exams.
            Based in Latur, serving all of Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg md:text-xl px-10 py-8 rounded-full font-black shadow-[0_0_20px_rgba(255,191,0,0.4)] w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
            >
              <Link href="#book-demo" className="flex items-center gap-2">
                Book Free Demo <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white/40 hover:bg-white hover:text-primary text-lg md:text-xl px-10 py-8 rounded-full font-black shadow-2xl backdrop-blur-md bg-white/10 w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
            >
              <Link href="#courses" className="flex items-center gap-2">
                <PlayCircle className="w-6 h-6" />
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </section>
    </div>
  );
}