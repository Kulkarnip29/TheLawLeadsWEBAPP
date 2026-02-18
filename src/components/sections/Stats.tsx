"use client";

import { stats } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const AnimatedCounter = ({ value, label, index }: { value: string, label: string, index: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''), 10);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div 
      ref={ref} 
      className={cn(
        "text-center p-6 md:p-8 rounded-[2.5rem] bg-primary/5 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="text-4xl md:text-6xl lg:text-7xl font-black text-primary tracking-tighter mb-2">
        {count}{value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
      </p>
      <div className="w-12 h-1.5 bg-accent mx-auto rounded-full mb-4"></div>
      <p className="text-xs md:text-sm font-bold text-foreground/60 uppercase tracking-widest leading-tight">{label}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, idx) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}