import { PlaceHolderImages } from "@/lib/placeholder-images";
import { aboutContent } from "@/lib/data";
import { CheckCircle2, ShieldCheck, Zap, Users } from "lucide-react";
import Image from "next/image";

const iconMap = [
    <ShieldCheck className="w-8 h-8 text-accent" key="1" />,
    <Zap className="w-8 h-8 text-accent" key="2" />,
    <Users className="w-8 h-8 text-accent" key="3" />,
    <CheckCircle2 className="w-8 h-8 text-accent" key="4" />
];

export default function About() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-image');

    return (
        <section id="about" className="py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            {aboutImage && (
                                <Image
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    data-ai-hint={aboutImage.imageHint}
                                    width={800}
                                    height={1000}
                                    className="object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-700"
                                />
                            )}
                        </div>
                        <div className="absolute -bottom-10 -right-10 glassmorphism p-8 rounded-3xl hidden md:block animate-float">
                            <p className="text-4xl font-black text-primary">10+</p>
                            <p className="text-sm font-bold text-foreground/60 uppercase tracking-tighter">Years Success</p>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
                            <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-tight">
                                {aboutContent.title}
                            </h2>
                            <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                                {aboutContent.description}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {aboutContent.standOut.points.map((feature, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {iconMap[index] || <CheckCircle2 className="w-6 h-6 text-accent" />}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-primary mb-1">Feature {index + 1}</h4>
                                        <p className="text-sm text-foreground/60 font-medium">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <h3 className="font-black text-2xl mb-4 relative z-10">{aboutContent.standOut.title}</h3>
                            <p className="text-primary-foreground/80 leading-relaxed font-medium relative z-10">
                                {aboutContent.standOut.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}