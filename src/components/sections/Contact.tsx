import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 lg:py-28 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                        We are here to help you. Reach out to us for any queries or visit our institute in Latur.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                         <Card className="glassmorphism">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <MapPin className="w-8 h-8 text-accent"/>
                                <CardTitle className="text-primary">Our Address</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/90">Trichandra Ornament, 501 Fifth Floor, Barshi Road,<br/>Latur, Maharashtra - 413512</p>
                            </CardContent>
                        </Card>
                         <Card className="glassmorphism">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Mail className="w-8 h-8 text-accent"/>
                                <CardTitle className="text-primary">Email Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:thelawleads1@gmail.com" className="text-foreground/90 hover:text-accent transition-colors">info@thelawleads.com</a>
                            </CardContent>
                        </Card>
                         <Card className="glassmorphism">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Phone className="w-8 h-8 text-accent"/>
                                <CardTitle className="text-primary">Call Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:+919545661315" className="text-foreground/90 hover:text-accent transition-colors">+91 98765 43210</a>
                            </CardContent>
                        </Card>
                    </div>
                    
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121118.42903264426!2d76.49137564010317!3d18.40306155599818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf838f7aaaaaab%3A0x1d28a3a2d5e2d6a5!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688828989528!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="The Law Leads Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
