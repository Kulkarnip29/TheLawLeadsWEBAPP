"use client";

import { courses, detailedCourses, targetExamYear } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Gavel,
  Scale,
  BookOpen,
  FileText,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle,
  ChevronRight,
  HelpCircle,
  Info,
  DollarSign,
  BarChart,
  FileCheck2,
  GraduationCap,
  Target,
  ListChecks,
  Calendar,
  Users,
  X,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const iconMap: { [key: string]: React.ReactNode } = {
  Gavel: <Gavel className="w-10 h-10 text-accent" />,
  Scale: <Scale className="w-10 h-10 text-accent" />,
  BookOpen: <BookOpen className="w-10 h-10 text-accent" />,
  FileText: <FileText className="w-10 h-10 text-accent" />,
};

const SectionHeader = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-primary/10 rounded-xl">{icon}</div>
    <h3 className="text-2xl font-black text-primary tracking-tight">{title}</h3>
  </div>
);

export default function Courses() {
  return (
    <section id="courses" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-accent text-accent animate-pulse px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px]"
          ></Badge>
          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-tight tracking-tighter">
            Our Premier Courses
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Expertly designed courses for excellence in the field of Law.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => {
            const detail = detailedCourses[course.slug];

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="flex group h-full">
                    <Card className="relative text-center bg-background border-2 border-transparent group-hover:border-accent/30 group-hover:-translate-y-3 transition-all duration-700 shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(26,83,92,0.15)] cursor-pointer flex flex-col h-full w-full overflow-hidden rounded-[2.5rem]">
                      {course.promo && (
                        <div className="absolute top-6 right-6 z-20">
                          <Badge
                            className={cn(
                              "shadow-xl font-black px-4 py-1 text-[10px] uppercase tracking-widest rounded-full",
                              course.promo.badge === "Bestseller"
                                ? "bg-red-600 text-white"
                                : "bg-accent text-accent-foreground",
                            )}
                          >
                            {course.promo.badge}
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="pt-12">
                        <div className="mx-auto mb-6 bg-primary/5 rounded-[2rem] p-6 w-fit group-hover:bg-primary/10 transition-colors duration-500 border border-primary/5">
                          {iconMap[course.icon]}
                        </div>
                        <CardTitle className="text-2xl font-black text-primary tracking-tight leading-tight px-4">
                          {course.title.replace(/\s\d{4}.*$/, "")}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="px-8 pb-10 flex-grow flex flex-col">
                        <p className="text-foreground/60 mb-8 flex-grow font-medium leading-relaxed">
                          {course.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>

                <DialogContent className="w-[95vw] max-w-5xl h-[90vh] p-0 border-none bg-background flex flex-col">
                  {/* Accessibility Fix */}
                  <DialogHeader className="sr-only">
                    <DialogTitle>{course.title}</DialogTitle>
                  </DialogHeader>

                  <div className="sticky top-0 z-50 bg-primary text-primary-foreground px-6 py-4 flex justify-between items-center shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-accent-foreground">
                        {iconMap[course.icon]}
                      </div>
                      <div>
                        <h2 className="text-xl font-black tracking-tight">
                          {course.title}
                        </h2>
                        <p className="text-xs text-primary-foreground/70 font-bold uppercase tracking-widest">
                          Enrollment for Open
                        </p>
                      </div>
                    </div>

                    <DialogClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-white/10 text-white"
                      >
                        <X className="w-6 h-6" />
                      </Button>
                    </DialogClose>
                  </div>

                  <ScrollArea className="flex-grow overflow-y-auto">
                    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
                      {detail ? (
                        <>
                          <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-none">
                              {detail.title}
                            </h2>
                            <p className="text-xl md:text-2xl italic text-foreground/60 font-medium">
                              "{detail.subtitle}"
                            </p>
                          </div>

                          {/* Overview */}
                          <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 h-full">
                              <SectionHeader
                                title="What is this Exam?"
                                icon={
                                  <HelpCircle className="w-6 h-6 text-accent" />
                                }
                              />
                              <p className="text-lg leading-relaxed text-foreground/80 font-medium whitespace-pre-line">
                                {detail.whatIs}
                              </p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-white shadow-xl border border-primary/5 h-full">
                              <SectionHeader
                                title="General Exam Pattern"
                                icon={
                                  <BarChart className="w-6 h-6 text-accent" />
                                }
                              />
                              <div className="rounded-2xl border border-primary/5 overflow-hidden bg-white">
                                <Table>
                                  <TableBody>
                                    {detail.examDetails.map((d: any) => (
                                      <TableRow key={d.label}>
                                        <TableCell className="font-bold text-primary">
                                          {d.label}
                                        </TableCell>
                                        <TableCell className="text-right text-foreground/70">
                                          {d.value}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </div>
                            </div>
                          </div>

                          {/* Eligibility & Weightage */}
                          <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8 h-full">
                              <div className="p-8 rounded-[2.5rem] bg-background border-2 border-primary/5 shadow-md h-full flex flex-col">
                                <SectionHeader
                                  title="Eligibility Criteria"
                                  icon={
                                    <GraduationCap className="w-6 h-6 text-accent" />
                                  }
                                />
                                <div className="space-y-6 flex-grow">
                                  <p className="font-bold text-primary p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
                                    {detail.eligibility.qualification}
                                  </p>
                                  <div className="grid grid-cols-3 gap-2">
                                    {detail.eligibility.minimumMarks.map(
                                      (m: any) => (
                                        <div
                                          key={m.category}
                                          className="p-4 text-center rounded-xl bg-secondary/30"
                                        >
                                          <p className="text-2xl font-black text-primary">
                                            {m.marks}
                                          </p>
                                          <p className="text-[9px] uppercase font-bold text-foreground/40">
                                            {m.category}
                                          </p>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                  <Badge className="bg-accent text-accent-foreground font-black px-4 py-1.5 rounded-full uppercase text-[10px] w-fit">
                                    Age Limit: {detail.eligibility.ageLimit}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-white border border-primary/10 shadow-xl overflow-hidden h-full flex flex-col">
                              <SectionHeader
                                title="Subject-Wise Weightage"
                                icon={
                                  <Target className="w-6 h-6 text-accent" />
                                }
                              />
                              <div className="rounded-2xl border border-primary/5 overflow-hidden flex-grow bg-white">
                                <Table>
                                  <TableHeader className="bg-primary/5">
                                    <TableRow>
                                      <TableHead className="font-black text-primary">
                                        Section
                                      </TableHead>
                                      <TableHead className="text-right font-black text-primary">
                                        Marks
                                      </TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {detail.examPattern.map((p: any) => (
                                      <TableRow key={p.section}>
                                        <TableCell className="font-medium">
                                          {p.section}
                                        </TableCell>
                                        <TableCell className="text-right font-black">
                                          {p.marks}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                    <TableRow className="bg-primary/10">
                                      <TableCell className="font-black text-primary">
                                        Total
                                      </TableCell>
                                      <TableCell className="text-right font-black text-primary">
                                        120
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                              <div className="mt-6 flex items-center gap-3 p-4 bg-red-50 text-red-600 font-black rounded-2xl text-xs uppercase tracking-widest border border-red-100">
                                <Info className="w-5 h-5" /> No Negative Marking
                                – Attempt All Confidently!
                              </div>
                            </div>
                          </div>

                          {/* Syllabus */}
                          <div>
                            <SectionHeader
                              title="Syllabus Overview"
                              icon={
                                <BookOpen className="w-6 h-6 text-accent" />
                              }
                            />
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {Object.entries(detail.syllabus).map(
                                ([subj, topics]: [string, any]) => (
                                  <div
                                    key={subj}
                                    className="p-6 rounded-3xl bg-secondary/30 border border-primary/5 group hover:bg-white hover:shadow-2xl transition-all"
                                  >
                                    <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                                      <div className="w-1.5 h-6 bg-accent rounded-full"></div>
                                      {subj}
                                    </h4>
                                    <ul className="space-y-2">
                                      {topics.map((t: string) => (
                                        <li
                                          key={t}
                                          className="text-sm font-medium text-foreground/60 flex items-center gap-2"
                                        >
                                          <ChevronRight className="w-3 h-3 text-accent" />{" "}
                                          {t}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Documents */}
                          <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-8 rounded-[2.5rem] bg-background border-2 border-primary/5">
                              <SectionHeader
                                title="For CET Registration"
                                icon={
                                  <FileCheck2 className="w-6 h-6 text-accent" />
                                }
                              />
                              <ul className="space-y-3">
                                {detail.documentsRequired.registration.map(
                                  (d: string) => (
                                    <li
                                      key={d}
                                      className="flex items-start gap-3 text-sm font-medium text-foreground/70"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                                      {d}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10">
                              <SectionHeader
                                title="For CAP & Admission"
                                icon={
                                  <ListChecks className="w-6 h-6 text-accent" />
                                }
                              />
                              <ul className="space-y-3">
                                {detail.documentsRequired.counselling.map(
                                  (d: string) => (
                                    <li
                                      key={d}
                                      className="flex items-start gap-3 text-sm font-medium text-foreground/70"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                                      {d}
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>

                          {/* Plans */}
                          <div>
                            <SectionHeader
                              title="Choose Your Success Plan"
                              icon={
                                <TrendingUp className="w-6 h-6 text-accent" />
                              }
                            />
                            <div className="grid sm:grid-cols-3 gap-8">
                              {detail.coursePlans.map(
                                (plan: any, i: number) => (
                                  <Card
                                    key={i}
                                    className={cn(
                                      "rounded-[2.5rem] border-2 flex flex-col transition-all duration-500 overflow-hidden",
                                      i === 0
                                        ? "border-accent scale-105 shadow-2xl relative z-10"
                                        : "border-transparent bg-primary/5",
                                    )}
                                  >
                                    {i === 0 && (
                                      <div className="bg-accent text-accent-foreground py-2 text-center text-[10px] font-black uppercase tracking-widest">
                                        Most Popular
                                      </div>
                                    )}
                                    <CardHeader className="text-center pt-8">
                                      <CardTitle className="text-xl font-black text-primary leading-tight">
                                        {plan.name}
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4 pb-10">
                                      <ul className="space-y-3">
                                        {plan.features.map((f: string) => (
                                          <li
                                            key={f}
                                            className="flex items-start gap-3 text-xs font-bold text-foreground/60"
                                          >
                                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />{" "}
                                            {f}
                                          </li>
                                        ))}
                                      </ul>
                                    </CardContent>
                                  </Card>
                                ),
                              )}
                            </div>
                          </div>

                          {/* Final CTA */}
                          <div className="p-12 rounded-[3.5rem] bg-primary text-primary-foreground text-center space-y-8 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
                            <h4 className="text-3xl md:text-5xl font-black tracking-tighter relative z-10">
                              Crack it with Confidence.
                            </h4>
                            <p className="text-lg md:text-xl text-primary-foreground/70 font-medium max-w-2xl mx-auto relative z-10">
                              We help you take the first step with clarity,
                              confidence, and correct guidance.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10 pt-4">
                              <DialogClose asChild>
                                <Button
                                  asChild
                                  size="lg"
                                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-all"
                                >
                                  <a
                                    href="https://play.google.com/store/apps/details?id=co.thor.wivzh&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Secure Your Future Now
                                  </a>
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-20">
                          <h2 className="text-3xl font-black text-primary">
                            Content Coming Soon
                          </h2>
                          <p className="text-foreground/60 mt-4">
                            We are preparing detailed information for this
                            course. Please contact us for details.
                          </p>
                          <Button
                            asChild
                            className="mt-8 bg-accent text-accent-foreground font-bold rounded-full px-8 py-6"
                          >
                            <Link href="#contact">Contact Experts</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
