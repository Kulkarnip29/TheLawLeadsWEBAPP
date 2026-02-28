"use client"

import { internshipOpportunities } from "@/lib/data";
import { Briefcase, Building, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";

const iconMap: { [key: string]: React.ReactNode } = {
  GraduationCap: <GraduationCap className="w-10 h-10 text-accent" />,
  Building: <Building className="w-10 h-10 text-accent" />,
  Briefcase: <Briefcase className="w-10 h-10 text-accent" />,
};

export default function Internship() {
  return (
    <section id="internships" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* 🔥 Enhanced Heading Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
            Launch Your Professional Career with <span className="text-accent">The Law Leads</span>
          </h2>

          <p className="text-lg lg:text-xl text-foreground/80 max-w-4xl mx-auto mb-6">
            Start your journey as a Business Development Executive Intern, Data Analyst,
            Legal Researcher, Content Creator, Graphic Designer, Video Editor,
            HR Intern, Student Counselor Intern, or Marketing Incharge Intern.
          </p>

          <p className="text-base text-foreground/70 max-w-4xl mx-auto mb-6">
            Open for Fresh Graduates, 12th Pass Students, and Undergraduates/Postgraduates
            from LLB, LLM, BCom, MCom, BBA, BSc, BCA, MCA, BE, BTech, MBA and other streams.
          </p>

          {/* Internship Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              2–3 Months Internship
            </div>
            <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Performance-Based Stipend
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
              Offer Letter Provided
            </div>
            <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Internship Completion Letter
            </div>
            <div className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
              Digital Certificate
            </div>
            <div className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              Real Corporate Experience
            </div>
          </div>

          <p className="mt-6 text-accent font-semibold text-lg">
            Limited Internship Slots Available – Apply Early!
          </p>
        </div>
        {/* 🔥 End Enhanced Section */}

        {/* Your Original Grid Section (UNCHANGED) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipOpportunities.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="text-center bg-background border-2 border-transparent hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-primary/20 cursor-pointer flex flex-col h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-primary/10 rounded-full p-4 w-fit">
                      {iconMap[item.icon]}
                    </div>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[625px] bg-background/95 backdrop-blur-lg">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 rounded-full p-3 w-fit-content">
                      {iconMap[item.icon]}
                    </div>
                    <DialogTitle className="text-2xl text-primary">
                      {item.title}
                    </DialogTitle>
                  </div>

                  <DialogDescription className="text-base text-left text-foreground/90 pt-2">
                    {item.details}
                  </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                  <h4 className="font-semibold text-lg mb-3 text-accent">
                    Why This Opportunity?
                  </h4>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <DialogFooter>
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                  >
                    <Link href="#contact">Apply Now</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  )
}