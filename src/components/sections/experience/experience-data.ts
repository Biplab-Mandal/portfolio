export type Experience = {
  role: string;
  company: string;
  period?: string;
  location?: string;
  workMode?: string;
  employmentType?: string;
  current?: boolean;
  description?: string;
  highlightsLabel?: string;
  highlights?: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "Agrati Tech Labs",
    period: "Apr 2026 – Present",
    workMode: "Remote",
    employmentType: "Full-time",
    current: true,
    highlightsLabel: "Nutri AI — Marketplace Search",
    highlights: [
      "Developed a Marketplace search feature for the Nutri AI health-tech application using FastAPI, React Native/Expo, and SerpApi Google Shopping.",
      "Implemented natural-language product search with price filters, product validation, normalization, deduplication, Redis caching, and rate limiting.",
      "Built a user-approval flow displaying verified product details, images, prices, merchant links, and redirecting users to the selected product page.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Mondee Tech Pvt. Ltd.",
    period: "Sept 2025 – Mar 2026",
    location: "Hyderabad, India",
    current: false,

    description:
      "Delivered production-grade backend and AI services following SDLC best practices, with a focus on automation, fault tolerance, reliable deployments, and production-ready AI workflows.",

    highlights: [
      "Designed and deployed AI agents for Price Recommendation and Audio Transcription using Google ADK, PostgreSQL → external API fallback architecture, and streaming FastAPI services.",
      
      "Redesigned agent instructions and grounding guardrails against retrieved source data, reducing hallucinated outputs by 70%+ and improving reliability of automated responses.",
      
      "Engineered fault-tolerant fallback logic and deployment architecture for the Aarna support platform, sustaining 7+ months of uninterrupted production service continuity.",
    ],

    technologies: [
      "Python",
      "Google ADK",
      "AI Agents",
      "FastAPI",
      "PostgreSQL",
      "GCP",
      "Microservices",
      "REST APIs",
      "SDLC",
      "Git",
    ],
  },
];