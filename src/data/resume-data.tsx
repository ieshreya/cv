// import {
//   AmbitLogo,
//   BarepapersLogo,
//   BimLogo,
//   CDGOLogo,
//   ClevertechLogo,
//   ConsultlyLogo,
//   EvercastLogo,
//   Howdy,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MobileVikingsLogo,
//   MonitoLogo,
//   NSNLogo,
//   ParabolLogo,
//   TastyCloudLogo,
//   YearProgressLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shreya Purohit",
  initials: "SP",
  location: "Delhi, India, IST",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Data analyst turning boring data into powerful,  actionable insights.",
  summary:
      "A data analyst who turns boring data into actionable insights and draw meaningful patterns from it.",
  // avatarUrl: "https://api.dicebear.com/7.x/thumbs/svg?seed=Luna&backgroundColor=f1f4dc&shapeColor=f1f4dc",
  avatarUrl: "file:///C:/Users/shrey/Documents/GitHub/cv/src/images/shreya.png",

  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "shreya.purohit002@gmail.com",
    tel: "+9810338646",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ieshreya",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreya-purohit/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/eyeshreya",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Govind Ballabh Pant Institute of Engineering & Technology",
      degree: "Bachelor of Technology",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Talent500",
      // link: "https://parabol.co",
      badges: ["Remote"],
      title: "Contract Technical Writer",
      // logo: ParabolLogo,
      start: "Apr 2023",
      end: "Present",
      description:
        "Writing technical articles on data science and analytics.",
    }
  ],
  skills: [
    "Python",
    "JavaScript",
    "React"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      // logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      // logo: CDGOLogo,
    },
  ],
} as const;
