export type ExperienceDescription =
  | { head: string; list: false; desc: string }
  | { head: string; list: true; desc: string[] };

export type ExperiencePhase = {
  title: string;
  period: string;
  highlights: string[];
};

export type ExperienceEntry = {
  name: string;
  title: string;
  description: ExperienceDescription[];
  phases?: ExperiencePhase[];
  links?: { heading: string; link: string }[];
};

export const experienceList: ExperienceEntry[] = [
  {
    name: "Fidelity International",
    title: "Gurugram, India",
    phases: [
      {
        title: "AI Intern",
        period: "June 2023 – August 2023",
        highlights: [
          "Delivered a document Q&A platform using a ReactJS interface, Python APIs, generative AI, and vector-store semantic search; standardized TXT, PDF, and DOCX content and retrieved the top three relevant document chunks to provide contextual answers.",
        ],
      },
      {
        title: "Graduate Programmer",
        period: "August 2024 – August 2025",
        highlights: [
          "Built Spring Boot REST services with Hibernate/JPA to integrate third-party APIs, improving insight and administrative workflows by saving 40+ hours each month.",
          "Designed a data pipeline that creates vector embeddings from 100+ Confluence documents to support an internal Retrieval-Augmented Generation (RAG) AI agent.",
        ],
      },
      {
        title: "SDE1",
        period: "August 2025 – September 2026",
        highlights: [
          "Led backend development of an event-based incident management service using Java and Spring Boot to measure and remediate IaaS compliance across 700+ cloud accounts.",
          "Built an AI-assisted ticket-routing and real-time notification backend with AWS SQS and Lambda to help prevent response SLA breaches and maintain compliance.",
        ],
      },
      {
        title: "SDE2",
        period: "September 2026 – Present",
        highlights: [
          // "Designed a data pipeline that creates vector embeddings from 100+ Confluence documents to support an internal Retrieval-Augmented Generation (RAG) AI agent.",
          // "Built an AI-assisted ticket-routing and real-time notification backend with AWS SQS and Lambda to help prevent response SLA breaches and maintain compliance.",
        ],
      },
    ],
    description: [
      {
        head: "Technology",
        list: false,
        desc: "Java, Spring Boot, Hibernate/JPA, REST, AWS (ECS, Lambda, S3, SQS), RAG, vector stores, ReactJS, Python",
      },
    ],
    links: [
      {
        heading: "LinkedIn profile",
        link: "https://www.linkedin.com/in/shivam-gulia-44a773202/",
      },
    ],
  },
];

export const projectsList: ExperienceEntry[] = [
  {
    name: "Hostel Management System",
    title: "ReactJS · Spring Boot · MySQL",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built secure document storage with MIME-type validation and document uploads to AWS S3, mapped through custom database schemas.",
          "Implemented stateless API security with Spring Security, JWT, and custom authentication filters.",
        ],
      },
    ],
  },
  {
    name: "Cycle Renting Application",
    title: "ReactJS · Spring Boot · SQL",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Implemented JWT authentication and Google sign-up for an application supporting 3,000+ users.",
          "Built QR scanning, role-based access, and real-time availability tracking for a fleet of 100 cycles.",
        ],
      },
    ],
  },
  {
    name: "SQL Query Generator",
    title: "Next.js · Generative AI · Chroma",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Designed an AI agent workflow with three specialized agents: Context Gatherer, SQL Expert, and SQL Critic.",
          "Used prompt engineering to generate structurally sound, semantically refined SQL queries.",
        ],
      },
    ],
  },
  {
    name: "AVO (Avoid Verbal Order)",
    title: "Next.js · React · JavaScript · MySQL · Ubuntu",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built a shipboard issue-tracking application with Next.js and MySQL to route issues to the right departments across four ships.",
          "Implemented JWT back-end authentication and NextAuth front-end authentication.",
          "Deployed to an Ubuntu VPS and configured Nginx to serve the application.",
        ],
      },
    ],
    links: [
      {
        heading: "AVO website",
        link: "https://avo.seadrivezconnect.co.in/",
      },
    ],
  },
  {
    name: "Admin Portal",
    title: "Next.js · React · JavaScript · MySQL · Ubuntu · Nginx",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Created a feedback management portal to help teams review customer feedback across four cruise ships.",
          "Designed role-based access and a MySQL data model for multiple ships.",
          "Added visual feedback summaries and deployed the application to an Ubuntu VPS with Nginx.",
        ],
      },
    ],
    links: [
      {
        heading: "Admin panel website",
        link: "https://admin.seadrivezconnect.co.in/",
      },
    ],
  },
];
