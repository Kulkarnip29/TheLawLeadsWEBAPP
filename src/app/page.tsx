
import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Courses from '@/components/sections/Courses';
import Faculty from '@/components/sections/Faculty';
import StudyMaterial from '@/components/sections/StudyMaterial';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import VideoIntro from '@/components/sections/VideoIntro';
import Faq from '@/components/sections/Faq';
import InquiryForm from '@/components/sections/InquiryForm';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/shared/Footer';
import FloatingWhatsapp from '@/components/shared/FloatingWhatsapp';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import Internship from '@/components/sections/Internship';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <AnimatedSection>
          <Stats />
        </AnimatedSection>
        
        <AnimatedSection>
          <About />
        </AnimatedSection>

        <AnimatedSection>
          <Courses />
        </AnimatedSection>

        <AnimatedSection>
          <Faculty />
        </AnimatedSection>

        <AnimatedSection>
          <StudyMaterial />
        </AnimatedSection>
        
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection>
          <Internship />
        </AnimatedSection>

        <AnimatedSection>
          <Blog />
        </AnimatedSection>

        <AnimatedSection>
          <VideoIntro />
        </AnimatedSection>

        <AnimatedSection>
          <Faq />
        </AnimatedSection>
        
        <AnimatedSection>
          <InquiryForm />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>

      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
