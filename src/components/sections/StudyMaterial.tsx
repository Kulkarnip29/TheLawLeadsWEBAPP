import { studyMaterials } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  FileCheck2,
  FileText,
  Download,
  BookOpen,
  Video,
  CheckCircle,
} from "lucide-react";

export default function StudyMaterial() {
  return (
    <section id="study-material" className="py-20 lg:py-28 bg-primary/5">
      <div className="container mx-auto px-4">

        {/* Unified Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary mb-6">
            MH-CET Law 2026 Complete Preparation Program
          </h2>
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
            Learn Anytime | Anywhere | At Your Own Pace with Complete Live +
            Recorded Lectures, Topic-wise MCQs, Full-Length Mock Tests,
            English + Marathi Explanation, Updated GK PDFs and CAP Counselling Support.
          </p>
        </div>

        {/* Main Unified Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Legal Aptitude */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-accent" />
              <CardTitle className="text-primary">Legal Aptitude</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <p>Legal Principles & Facts</p>
              <p>Indian Constitution</p>
              <p>Criminal Law (Basics)</p>
              <p>Law of Contracts</p>
              <p>Law of Torts</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="flex items-center gap-2 text-accent font-medium">
                  <FileText className="w-4 h-4" /> Notes PDF
                </span>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          {/* Logical Reasoning */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-accent" />
              <CardTitle className="text-primary">Logical Reasoning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <p>Syllogism, Statements & Conclusions</p>
              <p>Seating Arrangement</p>
              <p>Blood Relationship</p>
              <p>Coding-Decoding</p>
              <p>Number-Letter Series</p>
              <p>Analogy, Cause & Effect</p>
              <p>Direction & Odd One Out</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="flex items-center gap-2 text-accent font-medium">
                  <FileText className="w-4 h-4" /> Practice PDF
                </span>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          {/* English */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-accent" />
              <CardTitle className="text-primary">English</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <p>Grammar Rules</p>
              <p>Vocabulary & Synonyms</p>
              <p>Antonyms & One Word Substitution</p>
              <p>Parts of Speech</p>
              <p>Tense, Voice</p>
              <p>Direct & Indirect Speech</p>
              <p>Comprehension</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="flex items-center gap-2 text-accent font-medium">
                  <FileText className="w-4 h-4" /> Grammar Notes
                </span>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          {/* GK */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-accent" />
              <CardTitle className="text-primary">GK & Current Affairs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <p>Current Affairs 2025-2026</p>
              <p>History & Geography</p>
              <p>Indian Economy</p>
              <p>Science</p>
              <p>Sports & Awards</p>
              <p>Art & Architecture</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="flex items-center gap-2 text-accent font-medium">
                  <FileText className="w-4 h-4" /> GK PDF
                </span>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          {/* Mathematics */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex items-center gap-4">
              <BookOpen className="w-7 h-7 text-accent" />
              <CardTitle className="text-primary">Mathematics (5 Year CET)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <p>Number System & Algebraic Equation</p>
              <p>Percentage & Ratio</p>
              <p>Profit & Loss</p>
              <p>Simple & Compound Interest</p>
              <p>Probability</p>
              <p>Average</p>
              <p>Time & Distance</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <span className="flex items-center gap-2 text-accent font-medium">
                  <FileText className="w-4 h-4" /> Maths PDF
                </span>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </div>
            </CardContent>
          </Card>

          {/* Program Benefits */}
          <Card className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-primary">What You Get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-foreground/80 text-sm">
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Live + Recorded Lectures</div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Topic-wise MCQs + PYQ</div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Full-Length Mock Tests with Analysis</div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> 1-to-1 Mentorship</div>
              <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> CAP Counselling & College Selection</div>
            </CardContent>
          </Card>

        </div>

        {/* Original Section (Kept & Styled Consistent) */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {studyMaterials.map((material, index) => (
            <Card key={index} className="glassmorphism hover:shadow-lg transition-all">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileCheck2 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">
                  {material.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-foreground/80 text-sm">
                  {material.description}
                </p>
                <Download className="w-4 h-4 text-primary cursor-pointer" />
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}