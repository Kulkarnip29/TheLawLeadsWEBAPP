
'use client';

import { useParams, notFound } from 'next/navigation';
import { detailedCourses, targetExamYear } from '@/lib/data';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, BookOpen, FileText, Landmark, UserCheck, BarChart, DollarSign, Calendar, FileCheck2, Info, Users, GraduationCap, ChevronRight, ListChecks, HelpCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CourseSlug = 'mh-cet-law-5-year' | 'mh-cet-law-3-year';

const Section = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <Card className="bg-background/80 backdrop-blur-sm shadow-xl border-t-4 border-accent rounded-3xl overflow-hidden">
        <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-black text-primary">
                {icon}
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">{children}</CardContent>
    </Card>
);

export default function CourseDetailPage() {
    const params = useParams();
    const slug = params.slug as CourseSlug;
    const course = detailedCourses[slug];

    if (!course) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-primary/5">
            <Navbar />
            <main className="flex-grow py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px] uppercase tracking-widest">
                            Academic Session {targetExamYear}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter leading-none">{course.title}</h1>
                        <p className="text-xl md:text-2xl text-foreground/60 font-medium max-w-2xl mx-auto italic">"{course.subtitle}"</p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        <Section title="What is this Exam?" icon={<HelpCircle className="w-8 h-8 text-accent" />}>
                            <p className="text-foreground/80 leading-relaxed font-medium">{course.whatIs}</p>
                        </Section>

                        <Section title="Exam Details" icon={<Calendar className="w-8 h-8 text-accent" />}>
                            <ul className="grid sm:grid-cols-2 gap-6">
                                {course.examDetails.map(detail => (
                                    <li key={detail.label} className="flex flex-col p-4 bg-primary/5 rounded-2xl border border-primary/5">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-foreground/40 mb-1">{detail.label}</span>
                                        <span className="font-bold text-primary text-lg">{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Eligibility Criteria" icon={<UserCheck className="w-8 h-8 text-accent" />}>
                             <h4 className="font-black text-xl text-primary mb-4">{course.eligibility.title}</h4>
                             <p className='mb-6 text-foreground/80 font-medium p-4 bg-primary/5 rounded-2xl border-l-4 border-primary'>{course.eligibility.qualification}</p>
                             <h5 className="font-bold text-lg text-primary mb-4">Minimum Marks for 10+2 (Category-wise)</h5>
                             <div className="grid sm:grid-cols-3 gap-4 mb-8">
                                {course.eligibility.minimumMarks.map(item => (
                                    <div key={item.category} className="p-6 text-center rounded-2xl bg-white shadow-sm border border-primary/5">
                                        <p className="text-3xl font-black text-primary mb-1">{item.marks}</p>
                                        <p className="text-[10px] uppercase font-bold text-foreground/40 tracking-widest">{item.category}</p>
                                    </div>
                                ))}
                             </div>
                             <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-2xl text-accent font-bold">
                                <Info className="w-5 h-5" />
                                <span>Age Limit: {course.eligibility.ageLimit}</span>
                             </div>
                        </Section>
                        
                        <Section title="Application Fees" icon={<DollarSign className="w-8 h-8 text-accent" />}>
                             <div className="grid sm:grid-cols-2 gap-6">
                                {course.fees.map(item => (
                                    <div key={item.category} className="flex justify-between items-center p-6 bg-primary/5 rounded-2xl border border-primary/5">
                                        <span className="font-bold text-primary">{item.category}</span>
                                        <span className="text-2xl font-black text-accent">{item.amount}</span>
                                    </div>
                                ))}
                             </div>
                        </Section>

                        <Section title={`MH-CET LAW ${targetExamYear} Exam Pattern`} icon={<BarChart className="w-8 h-8 text-accent" />}>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="font-black text-xl text-primary mb-6">General Exam Details</h4>
                                    <div className="overflow-x-auto rounded-3xl border border-primary/10 shadow-sm bg-white">
                                        <Table>
                                            <TableBody>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Mode of Exam</TableCell><TableCell className="px-8">Computer-Based Test (Online)</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Language</TableCell><TableCell className="px-8">English and Marathi</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Type of Questions</TableCell><TableCell className="px-8">Objective / Multiple Choice Questions (MCQs)</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Total Questions</TableCell><TableCell className="px-8">120 questions</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Total Marks</TableCell><TableCell className="px-8">120 marks</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8">Duration</TableCell><TableCell className="px-8">120 minutes (2 hours)</TableCell></TableRow>
                                                <TableRow><TableCell className="font-bold text-primary px-8 border-b-0">Marking Scheme</TableCell><TableCell className="px-8 border-b-0">+1 mark for each correct answer</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                                
                                {slug === 'mh-cet-law-5-year' && (
                                    <div>
                                        <h4 className="font-black text-xl text-primary mb-6">Subject-Wise Weightage (5-Year LLB)</h4>
                                        <div className="overflow-x-auto rounded-3xl border border-primary/10 shadow-sm bg-white">
                                            <Table>
                                                <TableHeader className="bg-primary/5">
                                                    <TableRow>
                                                        <TableHead className="font-black text-primary px-8 h-16">Section</TableHead>
                                                        <TableHead className="text-right font-black text-primary px-8 h-16">Approx. Questions</TableHead>
                                                        <TableHead className="text-right font-black text-primary px-8 h-16">Marks</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">Legal Aptitude & Legal Reasoning</TableCell><TableCell className="text-right px-8">32</TableCell><TableCell className="text-right px-8 font-bold">32</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">Logical & Analytical Reasoning</TableCell><TableCell className="text-right px-8">32</TableCell><TableCell className="text-right px-8 font-bold">32</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">General Knowledge & Current Affairs</TableCell><TableCell className="text-right px-8">24</TableCell><TableCell className="text-right px-8 font-bold">24</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">English Language</TableCell><TableCell className="text-right px-8">24</TableCell><TableCell className="text-right px-8 font-bold">24</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">Basic Mathematics (Quantitative Aptitude)</TableCell><TableCell className="text-right px-8">8</TableCell><TableCell className="text-right px-8 font-bold">8</TableCell></TableRow>
                                                    <TableRow className="bg-primary/10 border-b-0">
                                                        <TableCell className="px-8 py-6 font-black text-primary text-lg">Total</TableCell>
                                                        <TableCell className="text-right px-8 font-black text-primary text-lg">120</TableCell>
                                                        <TableCell className="text-right px-8 font-black text-primary text-lg">120</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                )}

                                {slug === 'mh-cet-law-3-year' && (
                                    <div>
                                        <h4 className="font-black text-xl text-primary mb-6">Subject-Wise Weightage (3-Year LLB)</h4>
                                        <div className="overflow-x-auto rounded-3xl border border-primary/10 shadow-sm bg-white">
                                            <Table>
                                                <TableHeader className="bg-primary/5">
                                                    <TableRow>
                                                        <TableHead className="font-black text-primary px-8 h-16">Section</TableHead>
                                                        <TableHead className="text-right font-black text-primary px-8 h-16">Approx. Questions</TableHead>
                                                        <TableHead className="text-right font-black text-primary px-8 h-16">Marks</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">Legal Aptitude & Legal Reasoning</TableCell><TableCell className="text-right px-8">32</TableCell><TableCell className="text-right px-8 font-bold">32</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">Logical & Analytical Reasoning</TableCell><TableCell className="text-right px-8">24</TableCell><TableCell className="text-right px-8 font-bold">24</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">General Knowledge & Current Affairs</TableCell><TableCell className="text-right px-8">24</TableCell><TableCell className="text-right px-8 font-bold">24</TableCell></TableRow>
                                                    <TableRow><TableCell className="px-8 py-4 font-medium">English Language</TableCell><TableCell className="text-right px-8">40</TableCell><TableCell className="text-right px-8 font-bold">40</TableCell></TableRow>
                                                    <TableRow className="bg-primary/10 border-b-0">
                                                        <TableCell className="px-8 py-6 font-black text-primary text-lg">Total</TableCell>
                                                        <TableCell className="text-right px-8 font-black text-primary text-lg">120</TableCell>
                                                        <TableCell className="text-right px-8 font-black text-primary text-lg">120</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100">
                                    <h4 className="font-black text-xl text-green-900 mb-6">Key Performance Indicators</h4>
                                    <div className="grid sm:grid-cols-3 gap-6">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                            </div>
                                            <p className="text-sm font-bold text-green-800 leading-tight">No negative marking — attempt everything!</p>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                            </div>
                                            <p className="text-sm font-bold text-green-800 leading-tight">100% Objective Type Multiple Choice Questions.</p>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                            </div>
                                            <p className="text-sm font-bold text-green-800 leading-tight">English & Marathi medium support available.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Syllabus Overview" icon={<BookOpen className="w-8 h-8 text-accent" />}>
                            <div className="grid md:grid-cols-2 gap-8">
                                {Object.entries(course.syllabus).map(([subject, topics]) => (
                                    <div key={subject} className="p-8 rounded-3xl bg-primary/5 border border-primary/5 hover:bg-white hover:shadow-xl transition-all duration-500">
                                        <h4 className="font-black text-xl text-primary mb-4 flex items-center gap-2">
                                            <div className="w-2 h-8 bg-accent rounded-full"></div>
                                            {subject}
                                        </h4>
                                        <ul className="space-y-3">
                                            {(topics as string[]).map(topic => (
                                                <li key={topic} className="flex items-center gap-3 text-foreground/70 font-medium">
                                                    <ChevronRight className="w-4 h-4 text-accent" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        
                         <Section title="Documents Required" icon={<FileCheck2 className="w-8 h-8 text-accent" />}>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="p-4 bg-primary text-white rounded-2xl font-black text-center uppercase tracking-widest text-xs">For CET Registration</div>
                                    <ul className="space-y-3 px-4">
                                        {course.documentsRequired.registration.map(doc => (
                                            <li key={doc} className="flex items-start gap-3 text-foreground/70 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-4 bg-accent text-accent-foreground rounded-2xl font-black text-center uppercase tracking-widest text-xs">For CAP Counselling</div>
                                    <ul className="space-y-3 px-4">
                                        {course.documentsRequired.counselling.map(doc => (
                                            <li key={doc} className="flex items-start gap-3 text-foreground/70 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                {doc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        <Section title="Important Points for Aspirants" icon={<Info className="w-8 h-8 text-accent" />}>
                             <div className="grid gap-4">
                                {course.importantPoints.map((point, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-primary/5 border-l-4 border-accent font-bold text-primary">
                                        {point}
                                    </div>
                                ))}
                             </div>
                        </Section>

                         <Section title={`Why Choose The Law Leads?`} icon={<Target className="w-8 h-8 text-accent" />}>
                             <div className="text-center space-y-4 mb-10">
                                <h4 className="font-black text-2xl text-primary">Learn Anytime | Anywhere | At Your Own Pace</h4>
                                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                             </div>
                             <div className="grid md:grid-cols-2 gap-6">
                                {course.whyChooseUs.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-primary/5 group hover:bg-primary hover:text-white transition-all duration-500">
                                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20">
                                            <CheckCircle className="w-6 h-6 text-accent group-hover:text-white" />
                                        </div>
                                        <span className="font-bold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        
                        <Section title={`Online Course Plans`} icon={<ListChecks className="w-8 h-8 text-accent" />}>
                            <div className="grid md:grid-cols-3 gap-8">
                                {course.coursePlans.map((plan, idx) => (
                                    <Card key={plan.name} className={cn(
                                        "flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden",
                                        idx === 0 ? "border-accent scale-105 shadow-2xl relative z-10" : "border-transparent bg-primary/5"
                                    )}>
                                        {idx === 0 && (
                                            <div className="bg-accent text-accent-foreground py-2 text-center text-[10px] font-black uppercase tracking-[0.2em]">Recommended</div>
                                        )}
                                        <CardHeader className="text-center pt-8 pb-4">
                                            <CardTitle className="text-xl font-black text-primary leading-tight">{plan.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow pb-10">
                                            <ul className="space-y-4">
                                                {plan.features.map(feature => (
                                                    <li key={feature} className="flex items-start gap-3 text-sm font-bold text-foreground/60">
                                                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                             <div className="text-center mt-16">
                                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black text-xl px-12 py-8 rounded-[2rem] shadow-2xl shadow-accent/20 hover:scale-105 transition-all">
                                    <Link href="/#book-demo">Join Now & Secure Your Future</Link>
                                </Button>
                            </div>
                        </Section>

                        {course.faqs.length > 0 && (
                             <Section title="Frequently Asked Questions" icon={<HelpCircle className="w-8 h-8 text-accent" />}>
                                 <Accordion type="single" collapsible className="w-full space-y-4">
                                    {course.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="bg-primary/5 rounded-2xl px-8 border-none overflow-hidden">
                                            <AccordionTrigger className="text-lg font-black text-primary text-left hover:no-underline py-6">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-lg font-medium text-foreground/60 pb-8 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </Section>
                        )}
                        
                        <div className="p-12 rounded-[3rem] bg-primary text-primary-foreground text-center space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                            <h4 className="text-3xl font-black relative z-10">Ready to start your legal journey?</h4>
                            <p className="text-xl text-primary-foreground/70 font-medium max-w-2xl mx-auto relative z-10">
                                "We help you take the first step with clarity, confidence, and correct guidance."
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                                <div className="flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest text-accent">
                                    <Users className="w-5 h-5" /> Trusted by Thousands
                                </div>
                                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20 self-center"></div>
                                <div className="flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest text-accent">
                                    <Target className="w-5 h-5" /> Expert Guidance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
