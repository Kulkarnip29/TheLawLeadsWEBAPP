import { studyMaterials } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FileCheck2 } from "lucide-react";

export default function StudyMaterial() {
    return (
        <section id="study-material" className="py-20 lg:py-28 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        Comprehensive Study Material
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        Get access to our exclusively curated law notes, mock tests, and landmark judgement analyses to boost your preparation.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    {studyMaterials.map((material, index) => (
                        <Card key={index} className="glassmorphism hover:bg-card/80 transition-colors duration-300">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <FileCheck2 className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg text-primary">{material.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/80">{material.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
