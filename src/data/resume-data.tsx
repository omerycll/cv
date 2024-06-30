import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  Extra360,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
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
  avatarUrl: "https://avatars.githubusercontent.com/u/19982257?v=4",
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
      title: "Senior Frontend Developer",
      logo: Extra360,
      start: "2023",
      end: null,
      description:
        "Shopify üzerinde çalışan bir customer loyalty embed app'i geliştirdim. Teknolojiler: React, Remix.js, TypeScript, GraphQL, Shopify App Bridge",
    },
    {
      company: "Pharmacyhub",
      link: "https://pharmacyhub.app/",
      badges: ["Remote"],
      title: "Senior Frontend Developer",
      start: "2020",
      end: "2023",
      description:
        "Eczane için ilaç, müşteri yönetimi ve e-ticaret platformu geliştirdim. Teknolojiler: React, Next.js, TypeScript, Node.js, PostgreSQL",
    },
    {
      company: "SeoBinary (Wizardo)",
      link: "https://wizardo.app/",
      badges: [],
      title: "Co-Founder",
      start: "2022",
      end: null,
      description:
        "Eczaneler için Dijital pazarlama ve yönetme platformu. Web builder, Kiosk time management, müşteri yönetim sistemi, kargo yönetim sistemleri geliştirdim. Teknolojiler: React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase",
    },
    {
      company: "Solverhood",
      link: "https://solverhood.com/",
      badges: ["Remote"],
      title: "Fullstack Developer",
      start: "2022",
      end: "2023",
      description:
        "Shopify üzerinde çalışan bir SEO (Keyword Tracking, Site Audit vb.) app'i geliştirdim. Teknolojiler: React, Next.js, TypeScript, GraphQL, Shopify App Bridge",
    },
    {
      company: "Qwark",
      link: "https://qwarkhealth.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2020",
      end: "2023",
      description:
        "Eczane için ilaç, müşteri yönetimi ve e-ticaret platformu geliştirdim. Teknolojiler: React, Next.js, TypeScript, Node.js, PostgreSQL",
    },
    {
      company: "Codistry",
      link: "https://www.gocodistry.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2020",
      end: "2023",
      description:
        "Wordpress üzerinde çalışan bir e-ticaret sitesi geliştirdim. Teknolojiler: React, Next.js, TypeScript, GraphQL",
    },
    {
      company: "Vayes",
      link: "https://www.Vayes.com.tr/",
      badges: ["Remote"],
      title: "Frontend Developer",
      start: "2017",
      end: "2021",
      description:
        "Şirkete özel web ve mobil uygulamalar geliştirdim. Teknolojiler: Php, Symfony, React, React Native, Node.js, GraphQL",
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
      title: "Extra Loyalty",
      techStack: [
        "Senior Frontend Developer",
        "TypeScript",
        "Remix.js",
        "GraphQL",
      ],
      description:
        "Shopify üzerinde çalışan bir customer loyalty embed app'i geliştiriyorum.",
    },
    {
      title: "Pharmacyhub",
      techStack: [
        "Senior Frontend Developer",
        "TypeScript",
        "Next.js",
        "Node.js",
        "GraphQL",
        "Supabase",
        "OpenAI",
      ],
      description:
        "Eczaneler için website builder, müşteri yönetimi ve eczane yönetim platformu geliştiriyorum.",
    },
    {
      title: "Wizardo: Keyword Tracker",
      techStack: [
        "Full stack Developer",
        "TypeScript",
        "Remix.js",
        "GraphQL",
        "SerpAPI",
        "PostgreSQL",
      ],
      description:
        "Shopify üzerinde çalışan bir Keyword Tracking app'i geliştiriyorum.",
    },
    {
      title: "Solverhood: SEO App",
      techStack: [
        "Full stack Developer",
        "TypeScript",
        "Remix.js",
        "GraphQL",
        "SerpAPI",
        "PostgreSQL",
      ],
      description: "Shopify üzerinde çalışan bir SEO app'i geliştiriyorum.",
    },
    {
      title: "Qwark: Pharmacy Management",
      techStack: [
        "Full stack Developer",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
      ],
      description:
        "Eczane için ilaç, müşteri yönetimi ve e-ticaret platformu geliştirdim.",
    },
  ],
} as const;
