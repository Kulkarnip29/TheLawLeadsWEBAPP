import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarIcon } from "lucide-react";

export default function Blog() {
    return (
        <section id="blog" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        From Our Blog
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        Stay updated with the latest news, tips, and strategies from the world of law.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300">
                           {post.image && (
                                <div className="overflow-hidden">
                                <Image
                                    src={post.image.imageUrl}
                                    alt={post.image.description}
                                    data-ai-hint={post.image.imageHint}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">{post.title}</CardTitle>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                    <CalendarIcon className="w-4 h-4"/>
                                    <span>{post.date}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{post.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="link" className="text-primary hover:text-accent p-0">
                                   <Link href="#">Read More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        View All Posts
                    </Button>
                </div>
            </div>
        </section>
    );
}
