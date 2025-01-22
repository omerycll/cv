import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ömer Yücel",
  initials: "ÖY",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Detail-oriented Frontend Engineer dedicated to building high-quality products.",
  summary:
    "As a Frontend Engineer, I specialize in taking products from concept to launch. Currently, I work mostly with TypeScript, Remix.js, Next.js React, and GraphQL. I have over 6 years of experience working remotely with companies worldwide.",
  avatarUrl: "/profile.jpeg",
  personalWebsiteUrl: null,
  contact: {
    email: "me@omeryucel.dev",
    tel: "+905522289703",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/omerycll",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/omerycll/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/omerycll",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Istanbul Aydın University",
      degree: "Faculty of Computer Science",
      start: "2015",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Extra 360",
      link: "https://www.extra360.io/",
      badges: ["Hybrid"],
      title: "Senior Frontend Engineer",
      start: "2023",
      end: "Present",
      description:
        "Spearheaded the development of an enterprise-grade customer loyalty application integrated with Shopify’s ecosystem. Led the implementation of a comprehensive merchant and member portal system with POS integration.",
      key_achievements: [
        "Architected and delivered a scalable embedded loyalty application processing 10,000+ daily transactions",
        "Implemented real-time POS integration reducing transaction processing time by 40%",
        "Led migration to TypeScript, improving code quality and reducing bugs by 30%",
      ],
      tech: [
        "React",
        "Remix.js",
        "TypeScript",
        "GraphQL",
        "Shopify App Bridge",
      ],
    },
    {
      company: "Pharmacyhub",
      link: "https://pharmacyhub.app/",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      start: "2020",
      end: "Present",
      description:
        "Drive the development of an innovative healthcare digital platform, encompassing AI-powered solutions for patient management, staff coordination, and integrated payment systems.",
      key_achievements: [
        "Engineered a modular website builder increasing client onboarding efficiency by 60%",
        "Implemented white-label solutions generating $500K+ in additional revenue",
        "Optimized platform performance resulting in 40% improvement in load times",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Supabase",
        "AWS (S3, SQS, SES)",
      ],
    },
    {
      company: "SeoBinary (Wizardo)",
      link: "https://wizardo.app/",
      title: "Co-Founder & Technical Lead",
      start: "2020",
      end: "Present",
      description:
        "Founded and lead technical development of a suite of Shopify applications focused on e-commerce optimization and customer engagement. Launched successful mobile applications including an AI-powered social media tool.",
      key_achievements: [
        "Launched two successful Shopify apps with combined 10,000+ active installations",
        "Achieved 4.8/5 star rating across all products with 95% customer satisfaction",
        "Generated $300K+ in first-year revenue through subscription-based pricing model",
      ],
      tech: [
        "React Native",
        "Remix.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Supabase",
        "GraphQL",
      ],
    },
    {
      company: "Solverhood",
      link: "https://solverhood.com/",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      start: "2022",
      end: "2023",
      description:
        "Engineered comprehensive SEO analytics platform for Shopify merchants, focusing on performance optimization and user experience enhancement.",
      key_achievements: [
        "Developed real-time keyword tracking system monitoring 100,000+ keywords daily",
        "Implemented automated site auditing reducing manual analysis time by 70%",
        "Achieved 99.9% platform uptime through robust architecture design",
      ],
      tech: ["React", "TypeScript", "GraphQL", "Shopify App Bridge"],
    },
    {
      company: "Qwark",
      link: "https://qwarkhealth.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2020",
      end: "2023",
      description:
        "Developed a comprehensive pharmacy management platform featuring medication inventory control, patient management system, and integrated e-commerce capabilities for online pharmacy services.",
      key_achievements: [
        "Launched a white-label solution generating $200K+ in additional revenue",
        "Optimized platform performance resulting in 40% improvement in load times",
        "Implemented automated prescription refills increasing customer retention by 30%",
      ],
      tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      company: "Codistry",
      link: "https://www.gocodistry.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2020",
      end: "2023",
      description:
        "Developed custom e-commerce solutions on WordPress, delivering tailored online shopping experiences with advanced product management and seamless payment integrations.",
      key_achievements: [
        "Launched 10+ custom e-commerce websites with 100% client satisfaction",
        "Optimized site performance resulting in 30% improvement in load times",
        "Implemented automated inventory management system reducing manual errors by 50%",
      ],
      tech: [
        "React",
        "Next.js",
        "Gatsby.js",
        "TypeScript",
        "GraphQL",
        "WordPress",
      ],
    },
    {
      company: "Vayes",
      link: "https://www.Vayes.com.tr/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2017",
      end: "2021",
      description:
        "Developed custom web and mobile applications for enterprise clients, delivering tailored business solutions to meet specific company requirements and workflows.",
      key_achievements: [
        "Launched 10+ custom web and mobile applications with 100% client satisfaction",
        "Optimized site performance resulting in 30% improvement in load times",
        "Implemented automated inventory management system reducing manual errors by 50%",
      ],
      tech: ["React", "React Native", "Node.js", "GraphQL", "Symfony"],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Shopify",
    "Wordpress",
    "PostgreSQL",
    "Supabase",
  ],
  projects: [
    {
      title: "Extra 360 Loyalty & Rewards",
      techStack: ["TypeScript", "Remix.js", "GraphQL"],
      description:
        "Shopify Loyalty app and POS integration for enterprise customers.",
    },
    {
      title: "Pharmacyhub",
      techStack: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "GraphQL",
        "Supabase",
        "OpenAI",
      ],
      description:
        "AI-powered healthcare platform for patient management and e-commerce.",
    },
    {
      title: "Wizardo: Keyword Tracker",
      techStack: ["TypeScript", "Remix.js", "GraphQL", "SerpAPI", "PostgreSQL"],
      description:
        "Shopify app for tracking keyword rankings and SEO performance.",
    },
    {
      title: "Solverhood: SEO App",
      techStack: ["TypeScript", "Remix.js", "GraphQL", "SerpAPI", "PostgreSQL"],
      description: "SEO app for Shopify merchants to improve site performance.",
    },
    {
      title: "Qwark: Pharmacy Management",
      techStack: ["TypeScript", "Next.js", "PostgreSQL"],
      description:
        "Comprehensive pharmacy management platform featuring medication inventory control, patient management system, and integrated e-commerce capabilities for online pharmacy services.",
    },
  ],
} as const;
