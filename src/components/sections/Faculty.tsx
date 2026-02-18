import { faculty } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-black tracking-widest uppercase text-sm mb-4 block">
            Our Mentors
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6">
            Learn from the Elite
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Learn from retired judges, experienced advocates, and academic scholars who are masters of their fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faculty.map((member, index) => (
            <Card
              key={index}
              className="text-center overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-4 transition-all duration-500 border-none bg-secondary/30 backdrop-blur-sm rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={member.image?.imageUrl || "/Photos/fallback.png"}
                  alt={member.image?.description || "Faculty Image"}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-6 left-0 w-full px-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <p className="text-white text-sm font-medium">
                    {member.bio}
                  </p>
                </div>
              </div>

              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-black text-primary group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-primary/60 font-bold uppercase tracking-tighter text-xs mt-1">
                  {member.title}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-8">
                <div className="h-1 w-12 bg-accent mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
