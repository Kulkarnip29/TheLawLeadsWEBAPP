import { PlaceHolderImages } from "./placeholder-images";

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '500+', label: 'Successful Students' },
  // { value: '95%', label: 'Success Rate' },
  { value: '50+', label: 'Courses & Materials' },
];

export const marqueeItems = [
  "New batches for Law Entrance Exams Live Now!",
  // "Register for the All India Mock Test.", //removed
  "Free Demo classes available On App.",
  //"SET NET JRF Law coaching now open for registration.",
  "UGC-NET, MH-SET(Both Papers) Batches are Open Now for Registration.",
  "Registration Open for AIBE-XXI Crash course",
  // "Our Toppers: Ananya Deshmukh secured Rank 1.",//removed
  "Check out our updated Comprehensive Study Materials on App."
];

export const currentYear = new Date().getFullYear();
export const targetExamYear = currentYear + 1; // Assuming the target exam year is the next calendar year

export const videoSection = {
  title: "Experience Our Excellence",
  subtitle: "Watch our  videos to understand our unique teaching methodology and how we help students achieve their dreams in the legal field.",
  videoUrl: "https://www.youtube.com/embed/xM1ba7J-jZo?si=QjIe9Y1OD9OCKEp_&amp;start=00",
  youtubeChannel: "https://youtube.com/@thelawleads-tll?si=l8YUoVRWq4MhHAH6"
};

export const courses = [
  {
    slug: 'mh-cet-law-5-year',
    title: `MH-CET LAW (5-Year LLB) ${targetExamYear}`,
    description: 'Comprehensive preparation for the 5-Year integrated LLB entrance exam conducted by Maharashtra State CET Cell.',
    icon: 'Gavel',
    promo: {
      badge: 'Bestseller',
      discount: 'Upto 40% OFF*',
      tagline: 'Limited Time Early Bird Offer'
    }
  },
  {
    slug: 'mh-cet-law-3-year',
    title: `MH-CET LAW (3-Year LLB)`,
    description: 'Specialized coaching for the 3-Year LLB entrance exam for graduates.',
    icon: 'Scale',
    promo: {
      badge: 'Popular',
      discount: ' Upto 40% OFF*',
      tagline: 'Grab the Deal Now!'
    }
  },

  {
    slug: 'UGC-NET (JRF)/MH-SET LAW',
    title: `UGC-NET (JRF)/MH-SET LAW`,
    description: 'Specialized coaching for UGC-NET (JRF)/MH-SET LAW entrance exams.',
    icon: 'Target',
    promo: {
      badge: 'Bestseller',
      discount: ' Upto 30% OFF*',
      tagline: 'Grab the Deal Now!'
    }
  },
  {
    slug: 'AIBE-XXI Preparation',
    title: `AIBE-XXI Preparation`,
    description: 'Special 30 days crash course for AIBE-XXI exam preparation with expert guidance and comprehensive materials.',
    icon: 'BookOpen',
    promo: {
      badge: 'New Batch',
      discount: 'Upto 30% OFF*',
      tagline: 'Live Interactive Sessions'
    }
  },
  {
    slug: 'CLAT-prep',
    title: `CLAT Prep`,
    description: 'From Prepartion to Addmission in Top National Law Universities (NLUs) in India.',
    icon: 'FileText',
    promo: {
      // badge: 'Scholarship',
       discount: 'Upto 40% OFF*',
      // tagline: 'Based on Mock Performance'
    }
  }
];

export const detailedCourses: Record<string, any> = {
  'mh-cet-law-5-year': {
    title: `MH-CET LAW (5-Year LLB) `,
    subtitle: 'Turn Your Dream of Becoming a Lawyer into Reality.',
    whatIs: `What is MH-CET LAW ${targetExamYear}?\nMH-CET Law (5-Year LLB) is a state-level entrance examination conducted by the State Common Entrance Test Cell, Maharashtra for admission to integrated law programs offered by government, aided, and private law colleges across Maharashtra.`,
    examDetails: [
        { label: 'Mode of Exam', value: 'Online (Computer-Based Test)' },
        { label: 'Language', value: 'English and Marathi' },
        { label: 'Type of Questions', value: 'Objective / MCQs' },
        { label: 'Total Questions', value: '120' },
        { label: 'Total Marks', value: '120' },
        { label: 'Duration', value: '120 Minutes (2 Hours)' },
        { label: 'Marking Scheme', value: '+1 for correct answer' },
        { label: 'Negative Marking', value: 'No negative marking' },
    ],
    eligibility: {
        title: 'Eligibility Criteria – 5-Year LLB',
        qualification: 'Candidates must have passed 10+2 or equivalent from a recognized board.',
        minimumMarks: [
            { category: 'General / EWS / OMS', marks: '45%' },
            { category: 'OBC / VJNT / SBC (Maharashtra)', marks: '42%' },
            { category: 'SC / ST (Maharashtra)', marks: '40%' },
        ],
        ageLimit: 'No upper age limit for appearing in MH-CET Law.'
    },
    fees: [
        { category: 'Open Category', amount: '₹1000/-' },
        { category: 'Reserved Categories (SC / ST / OBC / VJNT / SBC / NT / Orphan)', amount: '₹800/-' }
    ],
    examPattern: [
        { section: 'Legal Aptitude & Legal Reasoning', marks: 32 },
        { section: 'Logical & Analytical Reasoning', marks: 32 },
        { section: 'General Knowledge & Current Affairs', marks: 24 },
        { section: 'English Language', marks: 24 },
        { section: 'Basic Mathematics (Quantitative Aptitude)', marks: 8 }
    ],
    syllabus: {
        'Legal Reasoning': ['Legal Principles & Facts', 'Indian Constitution', 'Criminal Law (Basics)', 'Law of Contracts', 'Law of Torts'],
        'Logical Reasoning': ['Puzzles & Arrangements', 'Syllogisms', 'Blood Relations', 'Coding-Decoding', 'Series & Analogies'],
        'English': ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Synonyms & Antonyms'],
        'GK & Current Affairs': ['Indian Polity', 'History & Geography', 'Indian Economy', 'Awards & Sports', 'National & International Affairs'],
        'Mathematics (Basic)': ['Percentages', 'Ratio & Proportion', 'Averages', 'Simple & Compound Interest', 'Profit & Loss'],
    },
    documentsRequired: {
        registration: ['Aadhar Card', '10th & 12th Marksheet / Appearing Certificate', 'Passport-size Photo & Signature', 'Domicile Certificate', 'Caste Certificate + Validity (if applicable)', 'Non-Creamy Layer Certificate (OBC/VJNT/SBC)'],
        counselling: ['CET Scorecard', '10th & 12th Passing Certificate', 'Leaving Certificate', 'Migration Certificate (OMS candidates)', 'Gap Certificate (if applicable)', 'Nationality / Domicile Certificate']
    },
    importantPoints: [
        'CET score alone decides rank, not 12th marks.',
        'OMS candidates compete in Open category only.',
        'Document verification is conducted during CAP rounds at admission.',
        'Choice filling & college preference are crucial for allotment.'
    ],
    whyChooseUs: [
        `Complete MH-CET Law ${targetExamYear} Syllabus Coverage`,
        'Live & recorded lectures.',
        'Full-Length Mock Tests (CET-Level Difficulty) with analysis.',
        'English + Marathi Explanation.',
        'Daily practice MCQs & topic-wise tests.',
        'Updated GK & Current Affairs PDFs.',
        'CAP counselling & college preference guidance.',
        'Trusted by law aspirants across Maharashtra.',
    ],
    coursePlans: [
        {
            name: `MH-CET 5 YEAR- “DHURANDHAR” BATCH ${targetExamYear}`,
            features: ['Complete Recorded + Live Lectures', 'PDF Notes', 'Topic-wise MCQs', 'Previous Year Question Papers', 'Mock Tests', 'Doubt solving on call', '1-to-1 Mentorship', 'CAP Counselling Support']
        },
        {
            name: `MH-CET 5 YEAR “VIJETAV” BATCH ${targetExamYear}`,
            features: ['Complete Recorded + Live Lectures', 'PDF Notes', 'Topic-wise MCQs', 'Previous Year Question Papers', 'Mock Tests']
        },
        {
            name: `MH-CET 5 YEAR “YASHASWI” BATCH ${targetExamYear}`,
            features: ['Complete Recorded Lectures', 'PDF Notes', 'Topic-wise MCQs', 'Previous Year Papers', 'Mock Tests']
        }
    ],
    faqs: [
        { question: 'How can I join the MH-CET Law 5-Year batch?', answer: 'Enroll via The Law Leads App. After registration, get instant access to live/recorded classes, materials, and tests.' },
        { question: 'Is there negative marking?', answer: 'No, there is no negative marking in MH-CET Law.' },
        { question: 'Will I get CAP counselling guidance?', answer: 'Yes, we provide step-by-step CAP process guidance and choice filling strategy.' }
    ],
  },
  'mh-cet-law-3-year': {
    title: `MH-CET LAW (3-Year LLB) ${targetExamYear}`,
    subtitle: 'Turn Your Dream of Becoming a Lawyer into Reality.',
    whatIs: `What is MH-CET LAW ${targetExamYear}?\nMH-CET Law (3-Year LLB) is a state-level entrance examination conducted by the State Common Entrance Test Cell, Maharashtra for admission to law programs offered by government, aided, and private law colleges.`,
    examDetails: [
        { label: 'Mode of Exam', value: 'Online (Computer-Based Test)' },
        { label: 'Language', value: 'English and Marathi' },
        { label: 'Type of Questions', value: 'Objective / MCQs' },
        { label: 'Total Questions', value: '120' },
        { label: 'Total Marks', value: '120' },
        { label: 'Duration', value: '120 Minutes (2 Hours)' },
        { label: 'Marking Scheme', value: '+1 for correct answer' },
        { label: 'Negative Marking', value: 'No negative marking' },
    ],
    eligibility: {
        title: 'Eligibility Criteria – 3-Year LLB',
        qualification: 'Candidates must be a Graduate in any faculty from a recognized university.',
        minimumMarks: [
            { category: 'General / EWS / OMS', marks: '45%' },
            { category: 'OBC / VJNT / SBC (Maharashtra)', marks: '42%' },
            { category: 'SC / ST (Maharashtra)', marks: '40%' },
        ],
        ageLimit: 'No upper age limit for appearing in MH-CET Law.'
    },
    fees: [
        { category: 'Open Category', amount: '₹1000/-' },
        { category: 'Reserved Categories (SC / ST / OBC / VJNT / SBC / NT / Orphan)', amount: '₹800/-' }
    ],
    examPattern: [
        { section: 'Legal Aptitude & Legal Reasoning', marks: 32 },
        { section: 'Logical & Analytical Reasoning', marks: 24 },
        { section: 'General Knowledge & Current Affairs', marks: 24 },
        { section: 'English Language', marks: 40 }
    ],
    syllabus: {
        'Legal Reasoning': ['Legal Principles & Facts', 'Indian Constitution', 'Criminal Law (Basics)', 'Law of Contracts', 'Law of Torts'],
        'Logical Reasoning': ['Analogies', 'Series (number/alphabet)', 'Coding–Decoding', 'Blood relations', 'Direction sense', 'Syllogisms'],
        'English': ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Synonyms & Antonyms'],
        'GK & Current Affairs': ['Indian Polity', 'History & Geography', 'Indian Economy', 'Awards & Sports', 'National & International Affairs'],
    },
    documentsRequired: {
        registration: ['Aadhar Card', 'Graduation Marksheet', '10th & 12th Marksheet', 'Passport Photo & Signature', 'Domicile Certificate', 'Caste/Validity (if applicable)'],
        counselling: ['CET Scorecard', 'Degree Certificate', 'Leaving Certificate', 'Migration Certificate', 'Gap Certificate (if applicable)']
    },
    importantPoints: [
        'CET score alone decides rank.',
        'OMS candidates compete in Open category only.',
        'GK & Current Affairs has the highest weightage for 3rd Year.',
        'English section is highly critical for score boosting.'
    ],
    whyChooseUs: [
        `Complete MH-CET Law ${targetExamYear} Syllabus Coverage`,
        'Expert guidance from legal professionals.',
        'Full-Length Mock Tests with deep analysis.',
        'English + Marathi Explanation support.',
        'Topic-wise MCQ drills.',
        'Personalized mentorship for CAP rounds.',
    ],
    coursePlans: [
        {
            name: `MH-CET 3 YEAR- “DHURANDHAR” BATCH ${targetExamYear}`,
            features: ['Recorded + Live Lectures', 'PDF Notes', 'Mock Tests', 'PYQs', 'Doubt Support', '1-to-1 Mentorship', 'CAP Support']
        },
        {
            name: `MH-CET 3 YEAR “VIJETAV” BATCH ${targetExamYear}`,
            features: ['Recorded + Live Lectures', 'PDF Notes', 'MCQs', 'PYQs', 'Mock Tests']
        },
        {
            name: `MH-CET 3 YEAR “YASHASWI” BATCH ${targetExamYear}`,
            features: ['Recorded Lectures', 'PDF Notes', 'Topic-wise MCQs', 'Mock Tests']
        }
    ],
    faqs: [
        { question: 'What is the highest weightage section?', answer: 'For 3-Year LLB, the English Language section has the highest weightage with 40 marks.' },
        { question: 'Is prior legal knowledge needed?', answer: 'No, the exam tests legal aptitude and principles, not deep legal knowledge.' }
    ],
  }
};

export const faculty = [
{
    name: "Mr. Siddheshwar Patane",
    title: "Founder & Director",
    bio: "Learn Law, Lead the future.",
    image: {
      imageUrl: "/Photos/MD&Founder.jpg", 
      description: "Profile photo of Mr. Siddheshwar Patane",
      imageHint: "MD"
    }
  },

  {
    name: "Ms. Shraddha Choudhary",
    title: "Coach & Mentor",
    bio: "SET, NET(JRF)PH.D PURSUING, 5+ years of teaching experience, and a passion for empowering law aspirants.",
    image: {
      imageUrl: "/Photos/Shraddha_mam.jpg",
      description: "Profile photo of Dr. Shraddha Choudhary",
      imageHint: "Mentor & Coach"
    }
  },

  // {
  //   name: "Ms. Aishwarya Kulkarni",
  //   title: "Legal Head",
  //   bio: "University Gold Medalist & Legal anayst with expertise in Constitutional Law and Legal Reasoning.",
  //   image: {
  //     imageUrl: "/Photos/faculty-1.png",
  //     description: "Profile photo of Adv. Priya Singh",
  //     imageHint: "woman portrait"
  //   }
  // },
  
  // {
  //   name: "Ms. Kasturi Pathrudkar",
  //   title: "Legal Analyst",
  //   bio: "Expert in  Law and Research.",
  //   image: {
  //     imageUrl: "/Photos/faculty-4.jpg",
  //     description: "Profile photo of Dr. Neha Gupta",
  //     imageHint: "woman professional"
  //   }
  // },
  // {
  //   name: "Mr. Amit Kathare",
  //   title: "Legal Analyst",
  //   bio: "Expert in legal research",
  //   image: {
  //     imageUrl: "/Photos/faculty-5.jpg",
  //     description: "Profile photo of Mr. Sameer Khan",
  //     imageHint: "man professional"
  //   }
  //}
  // {
  //   name: "Adv. Meera Desai",
  //   title: "Civil Law Expert",
  //   bio: "Renowned civil litigation practitioner.",
  //   image: {
  //     imageUrl: "/Photos/faculty-6.png",
  //     description: "Profile photo of Adv. Meera Desai",
  //     imageHint: "woman portrait"
  //   }
  // }
];


export const studyMaterials = [
  // {
  //   title: 'Judiciary Exam Notes',
  //   description: 'Complete set of notes covering all subjects for judiciary exams.',
  // },
  {
    title: 'CLAT Mock Tests',
    description: 'A series of 20+ mock tests with detailed analysis.',
  },
  {
    title: 'Landmark Judgements',
    description: 'A compilation and analysis of the most important recent judgements.',
  },
  {
    title: 'LLM Entrance Guide',
    description: 'Strategies and important topics for various LLM entrance exams.',
  }
]

export const testimonials = [
  {
    quote: 'From daily current affairs updates to full-length mock tests, everything was perfectly structured. The mentors constantly motivated us and guided us personally. The Law Leads helped me achieve my CLAT dream.',
    name: 'Karan T.',
    title: 'CLAT Qualified',
    rating: 5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1'),
  },
  {
    quote: 'The Law Leads completely changed my preparation strategy. The structured notes, regular mock tests, and revision sessions helped me stay consistent. Because of their guidance, I successfully qualified SET (Law). Truly grateful for the mentorship and clarity they provided!',
    name: 'Shraddha P.',
    title: 'SET (Law) Qualified',
    rating: 5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2'),
  },
  {
    quote: 'Paper 1 and Law Paper 2 were simplified in the most practical way. The PYQ discussions and concept-based teaching made difficult topics easy to understand. The Law Leads played a major role in helping me qualify UGC NET.',
    name: 'Adv. Sameer R. Shaikh',
    title: 'UGC NET (Law) Qualified',
    rating: 4,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-3'),
  },
    {
    quote: 'The CET-specific strategy and speed-building techniques were extremely helpful. Daily practice tests and performance analysis improved my accuracy and confidence. I secured a good score in MH-CET Law thanks to The Law Leads!',
    name: 'Omprakash K. Jadhav',
    title: ' MH-SET Law Qualified',
    rating: 4.5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-4'),
  },

  {
    quote: 'The CET-specific strategy and speed-building techniques were extremely helpful. Daily practice tests and performance analysis improved my accuracy and confidence. I secured a good score in MH-CET Law thanks to The Law Leads!',
    name: 'Anjali S.',
    title: 'MH-SET Law Qualified',
    rating: 5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-5'),
  },

  
  {
    quote: 'What I liked most was the personal mentorship and doubt-solving sessions. The mock test environment was exactly like the real exam. The Law Leads gave me the right direction and motivation to succeed.',
    name: 'Pratik M.',
    title: 'MH-SET Law Qualified',
    rating: 4.5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-6'),
  },

  {
    quote: 'The Legal Reasoning and Current Affairs sessions were outstanding. The faculty focused on concept clarity and smart elimination techniques. Because of their guidance, I secured admission through CLAT. Highly recommended!',
    name: 'Shabnam R.',
    title: 'CLAT Qualified',
    rating: 5,
    image: PlaceHolderImages.find(img => img.id === 'testimonial-7'),
  },
];

export const blogPosts = [
  {
    title: 'How to Ace the CLAT PG Exam in 6 Months',
    description: 'A strategic guide for aspirants to crack the CLAT PG exam with a structured study plan.',
    date: 'March  8, 2026',
    image: PlaceHolderImages.find(img => img.id === 'blog-1'),
  },
  {
    title: 'Top 5 Myths About Judiciary Exam Preparation',
    description: 'Debunking common misconceptions about the judiciary exams to help you focus on what truly matters.',
    date: 'Jan 7, 2026',
    image: PlaceHolderImages.find(img => img.id === 'blog-2'),
  },
  {
    title: 'Choosing the Right LLM Specialization For You',
    description: 'A comprehensive overview of various LLM specializations to help you make an informed career choice.',
    date: 'July 25, 2025',
    image: PlaceHolderImages.find(img => img.id === 'blog-3'),
  },
];

export const faqs = [
    { question: 'How can I join the MH-CET Law batch?', answer: 'You can enroll in your selected batch by signing up on The Law Leads App. After successful registration, you will get instant access to live classes, recorded sessions, study materials, tests, and a well-structured study schedule.' },
    { question: 'Is MH-CET Law tough for beginners?', answer: 'Not at all. With the right guidance and strategy, MH-CET Law is one of the most scoring law entrance exams.' },
    { question: 'Is there negative marking in MH-CET Law?', answer: 'No. There is no negative marking, which means smart attempts can boost your score significantly.' },
    { question: 'Is this course useful for OMS candidates?', answer: 'Yes. The course covers 100% CET syllabus, equally useful for OMS candidates (Open category).' },
    { question: 'Will I get CAP counselling guidance?', answer: 'Absolutely. We provide step-by-step CAP process guidance, choice filling tips, and college preference strategy.' },
    { question: 'Are classes live or recorded?', answer: 'You get both live & recorded lectures, so you never miss a class.' },
    { question: 'In which language are the lectures?', answer: 'Lectures are explained in simple English with Marathi support, making concepts easy to understand.' }
];

export const aboutContent = {
  title: "Know About The Law Leads (TLL)",
  description: "The Law Leads is an online learning platform dedicated to help students prepare for major Law Entrance and Competitive Exams such as Common Law Admission Test (CLAT), AILET, UGC NET (Law), MH SET (Law),  MH-CET (Law) and All India Bar Examination (AIBE).",
  standOut: {
    title: "Why We Stand Out",
    description: "The Law Leads believes that talent should never be limited by resources. Our mission is to simplify the law and empower every student with the right guidance, quality mentorship, and dedicated support to achieve excellence in the legal field.",
    points: [
      'Intensive and well-structured courses',
      'Qualified, experienced faculties and dedicated mentors',
      'Affordable and accessible learning',
      'Focus on concept clarity, exam strategy, and confidence building'
    ]
  },
  focusAreas: {
      title: 'Our Key Focus Areas',
      description: 'The Law Leads focuses on creating reliable, student-centric learning solutions across India. Through specially designed courses such as Dhurandar, Yashaswi, Vijeta, and many more, we aim to provide complete preparation support for thousands of law aspirants.',
      points: [
          'Exam-oriented preparation',
          'Strong conceptual foundation',
          'Practice through PYQs and mock tests',
          'Continuous mentorship and revision support'
      ]
  },
  whatMakesUsDifferent: {
      title: 'What Makes Us Different',
      description: 'TLL is committed to developing a comprehensive pedagogical structure where students receive:',
      points: [
          'State-of-the-art learning experiences',
          'High-quality study materials',
          'Practical exam strategies',
          'Continuous academic support'
      ],
      closing: 'We don’t just teach law—we shape confident legal professionals of tomorrow.'
  }
};


export const footerLinks = {
  courses: [
    { name: '5-Year LLB', href: '#courses' },
    { name: '3-Year LLB', href: '#courses' },
    // { name: 'Judiciary Coaching', href: '#courses' },
    { name: 'CLAT', href: '#courses' },
    { name: 'UGC NET(JRF)/ MH-SET Law', href: '#courses' },
    { name: 'AIBE Preparation', href: '#courses' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Faculty', href: '#faculty' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ]
};

export const seoKeywords = [
  // 'Judiciary Coaching in Maharashtra',
  'Law Entrance Exam Coaching',
  'CLAT PG Coaching Institute',
  'Law Notes PDF',
  'Law Classes in Latur',
  'Best Law Coaching Institute',
  // 'Judiciary Exam Preparation India',
  'Law Exam Training Institute',
  'MH-CET Law 5-Year',
  'MH-CET Law 3-Year'
];

export const internshipOpportunities = [
    {
        title: "Legal Research Interns",
        icon: "GraduationCap",
        description: " Get Training on legal Research writing, legal drafting, contract drafting & Assist our faculty in researching case laws, preparing study materials, and analyzing legal trends.",
        details: "This is an exciting opportunity for aspiring legal minds to dive deep into the world of legal research. As a Legal Research Intern, you will work directly with our professional faculty, gaining hands-on experience in a supportive work culture. This role is perfect for those who want to build a strong foundation for their legal career.",
        benefits: [
            "Direct mentorship from retired judges and experienced advocates.",
            "Contribute to creating impactful study materials.",
            "Receive the best guidance on legal analysis and writing.",
            "Certificate of completion and a letter of recommendation."
        ]
    },
    {
        title: "Corporate Connect Program",
        icon: "Building",
        description: "Get exposure with leading law firms and corporate legal departments through our exclusive network.",
        details: "Our Corporate Connect Program is designed to bridge the gap between academic knowledge and the Practical Corporate World. This internship program offers an invaluable opportunity to work with leading law firms and in-house legal teams. Experience a professional environment and a supportive work culture that fosters growth.",
        benefits: [
            "Work on real-world corporate law assignments.",
            "Network with legal professionals from top-tier firms.",
            "Gain practical insights into corporate legal practice.",
            "Potential for pre-placement offers (PPO) based on performance."
        ]
    },
    // {
    //     title: "Judicial Clerkship Guidance",
    //     icon: "Briefcase",
    //     description: "Personalized mentorship for aspiring judicial clerks to navigate the application process and interviews.",
    //     details: "This unique program offers an exciting opportunity for graduates aiming for the prestigious role of a Judicial Clerk. You will receive the best guidance from our professional faculty, including retired judges, who will mentor you through every step of the process. Our supportive work culture ensures you are well-prepared and confident.",
    //     benefits: [
    //         "One-on-one mentorship for crafting applications and SOPs.",
    //         "Mock interview sessions with detailed feedback.",
    //         "Understand the day-to-day responsibilities of a clerk.",
    //         "Build a network within the judicial community."
    //     ]
    // }
];
