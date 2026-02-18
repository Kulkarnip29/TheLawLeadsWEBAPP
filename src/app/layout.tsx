import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { currentYear } from '@/lib/data';

const SEO = {
  title: "The Law Leads | Best Judiciary & Law Entrance Coaching in Maharashtra",
  description: "Join The Law Leads, the best law coaching institute in Latur, Maharashtra for Judiciary, CLAT PG, and LLM entrance exam preparation. Get expert guidance, comprehensive law notes, and free demo classes.",
  url: "https://thelawleads.com", // Replace with your actual domain
  ogImage: "/og-image.png" // Replace with your actual OG image path
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: [
    "Judiciary Coaching in Maharashtra",
    "Law Entrance Exam Coaching",
    "CLAT PG Coaching Institute",
    "Law Notes PDF",
    "Law Classes in Latur",
    "Best Law Coaching Institute",
    "Judiciary Exam Preparation India",
    "Law Exam Training Institute",
  ],
  openGraph: {
    type: "website",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "The Law Leads Coaching Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  applicationName: 'The Law Leads',
  appleWebApp: {
    capable: true,
    title: 'The Law Leads',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#1A535C',
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "The Law Leads",
  "alternateName": "The Law Leads Coaching Institute",
  "url": SEO.url,
  "logo": `${SEO.url}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210", // Replace with actual phone
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "hi", "mr"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Trichandra Ornament, 501 Fifth Floor, Barshi Road",
    "addressLocality": "Latur",
    "addressRegion": "MH",
    "postalCode": "413512",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/in/siddheshwar-patane-0736163b1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    // "https://twitter.com/thelawleads",
    // "https://www.instagram.com/thelawleads"
  ],
  "description": SEO.description,
  "hasMap": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.732890520694!2d76.56443421489035!3d18.397395687504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf838f7aaaaaab%3A0x1d28a3a2d5e2d6a5!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622551234567!5m2!1sen!2sin", // Replace with actual map URL
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SEO.url}#book-demo`,
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Book Free Demo Class"
    }
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("font-body antialiased", process.env.NODE_ENV === "development" ? "debug-screens" : "")}>
        {children}
        <Toaster />
        </body>
    </html>
  );
}
