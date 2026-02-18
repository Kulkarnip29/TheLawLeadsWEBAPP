import { footerLinks, seoKeywords, currentYear } from "@/lib/data";
import { Book, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-8 border-accent">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               <Image src="/logo.png" alt="The Law Leads Logo" width={180} height={45} className="brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed font-medium">
              Empowering law aspirants across Maharashtra with expert guidance and high-quality educational resources since 2015.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 text-accent uppercase tracking-wider">Our Courses</h4>
            <ul className="space-y-4">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent font-medium flex items-center gap-2 group transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-8 text-accent uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70 font-medium">Trichandra Ornament, 501 Fifth Floor, Barshi Road, Latur - 413512</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-accent font-medium">+91 98765 43210</a>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="mailto:info@thelawleads.com" className="text-primary-foreground/70 hover:text-accent font-medium">info@thelawleads.com</a>
              </li>
            </ul>
          </div>

          {/* Subscription/Legal */}
          <div>
            <h4 className="text-xl font-black mb-8 text-accent uppercase tracking-wider">Quick Access</h4>
             <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
               <h5 className="font-bold text-sm mb-4">LEGAL</h5>
               <div className="flex gap-4 text-xs font-bold text-primary-foreground/40">
                  <Link href="#" className="hover:text-accent">PRIVACY POLICY</Link>
                  <Link href="#" className="hover:text-accent">TERMS & CONDITIONS</Link>
               </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-30 text-[10px] font-black uppercase tracking-widest text-center">
            {seoKeywords.map((k) => <span key={k}>{k}</span>)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-bold text-primary-foreground/40">
            &copy; {currentYear} THE LAW LEADS PVT LTD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}