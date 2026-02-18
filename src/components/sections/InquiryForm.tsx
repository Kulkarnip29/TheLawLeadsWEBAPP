"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "../ui/textarea";
import { Mail, MessageSquare, Phone, User, BookOpen } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().max(500, "Message must be 500 characters or less.").optional(),
});

export default function InquiryForm() {
    const { toast } = useToast();
    const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        const inquiryMessage = `Hello The Law Leads Institute,
I would like to book a free demo class.

*Name:* ${values.name}
*Email:* ${values.email}
*Phone:* ${values.phone}
*Interested Course:* ${values.course}
${values.message ? `*Message:* ${values.message}` : ''}`;

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryMessage.trim())}`;
        window.open(whatsappURL, "_blank");

        toast({
            title: "Redirecting to WhatsApp...",
            description: "Please send the pre-filled message to book your demo class.",
            duration: 5000,
        });
        
        form.reset();
    }

    return (
        <section id="book-demo" className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto bg-background border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="grid lg:grid-cols-5">
                        <div className="lg:col-span-2 bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Request a Callback</h2>
                            <p className="text-primary-foreground/80 text-lg mb-8">
                                Take the first step towards your dream legal career. Our experts will get back to you within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="font-semibold">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="font-semibold">info@thelawleads.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 p-8 md:p-12">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2 font-bold"><User className="w-4 h-4 text-primary" /> Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} className="rounded-xl border-primary/10 focus:border-primary" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2 font-bold"><Mail className="w-4 h-4 text-primary" /> Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john@example.com" {...field} className="rounded-xl border-primary/10 focus:border-primary" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2 font-bold"><Phone className="w-4 h-4 text-primary" /> WhatsApp No.</FormLabel>
                                                    <FormControl>
                                                        <Input type="tel" placeholder="10-digit number" {...field} className="rounded-xl border-primary/10 focus:border-primary" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="course"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="flex items-center gap-2 font-bold"><BookOpen className="w-4 h-4 text-primary" /> Course</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="rounded-xl border-primary/10 focus:border-primary">
                                                                <SelectValue placeholder="Select Course" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {courses.map(course => (
                                                                <SelectItem key={course.title} value={course.title}>
                                                                    {course.title}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="flex items-center gap-2 font-bold"><MessageSquare className="w-4 h-4 text-primary" /> Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="How can we help you?" {...field} className="rounded-xl border-primary/10 focus:border-primary min-h-[100px]" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    
                                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-black text-lg py-7 rounded-2xl shadow-xl transition-all hover:scale-[1.02]">
                                        Book My Free Demo
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}