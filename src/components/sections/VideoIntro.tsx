import { videoSection } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Youtube, ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function VideoIntro() {
    return (
        <section id="video-intro" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-accent text-accent px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
                                <Sparkles className="w-3 h-3 mr-2" /> Live the Experience
                            </Badge>
                            <h2 className="text-4xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tighter">
                                {videoSection.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-accent mx-auto lg:mx-0 rounded-full"></div>
                        </div>
                        
                        <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                            {videoSection.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-5">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold h-14 px-8 rounded-2xl shadow-xl shadow-red-600/20 group transition-all">
                                <Link href={videoSection.youtubeChannel} target="_blank" className="flex items-center gap-3">
                                    <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span>Subscribe Now</span>
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="border-primary/20 text-primary hover:bg-primary/5 h-14 px-8 rounded-2xl font-bold">
                                <Link href="#courses" className="flex items-center gap-2">
                                    Browse All Classes <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                        
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs font-bold text-foreground/40 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5"><Play className="w-3 h-3 text-accent" /> 1'st Lecture Free</span>
                            <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
                            <span>Expert Guidance</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full group">
                        <div className="relative">
                            {/* Decorative frame elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-accent rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                            
                            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-8 border-white bg-white ring-1 ring-primary/5 transform group-hover:-rotate-1 transition-transform duration-700">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={videoSection.videoUrl}
                                    title="The Law Leads Introductory Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 glassmorphism p-6 rounded-3xl shadow-2xl hidden md:flex items-center gap-4 animate-float border-white/40">
                                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground shadow-lg shadow-accent/20">
                                    <Play className="fill-current w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-foreground/40 uppercase tracking-tighter">Watch Duration</p>
                                    <p className="text-lg font-black text-primary">5.33 Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
