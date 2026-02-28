"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* ✅ Updated Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-s-none">
              <Image
                src="/icon.png"
                alt="The Law Leads Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Hide on mobile, show on md and above */}
            <span className="hidden md:block text-lg font-semibold tracking-wide text-primary">
              THE LAW LEADS
            </span>
          </Link>
          {/* ✅ End Logo Section */}

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#book-demo">Book a Demo</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && isMobile && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col items-center gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              <Link href="#book-demo" onClick={() => setIsOpen(false)}>
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}