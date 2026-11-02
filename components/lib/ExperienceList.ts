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
    title: "SDE2 (Programmer → SDE1 → SDE2) · Gurugram, India · Aug 2024 – Present",
    phases: [
      {
        title: "SDE2 (Programmer → SDE1 → SDE2)",
        period: "Aug 2024 – Present",
        highlights: [
          "Led backend development of an event-driven incident-management service (Java, Spring Boot, AWS SQS, Lambda) measuring and remediating IaaS compliance across 700+ cloud accounts.",
          "Built AI-assisted ticket routing and real-time notifications, preventing response-SLA breaches.",
          "Designed a pipeline generating vector embeddings from 100+ Confluence documents, powering an internal RAG agent.",
          "Developed Spring Boot REST services with Hibernate/JPA integrating third-party APIs — saving analysts 40+ hours per month.",
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
  {
    name: "Fidelity International",
    title: "AI Intern · Gurugram, India · Jun 2023 – Aug 2023",
    phases: [
      {
        title: "AI Intern",
        period: "Jun 2023 – Aug 2023",
        highlights: [
          "Delivered a document Q&A platform with ReactJS, Python APIs, generative AI, and vector-store semantic search.",
          "Standardized TXT, PDF, and DOCX content; retrieved the top-three relevant chunks per query.",
        ],
      },
    ],
    description: [],
  },
];

export const projectsList: ExperienceEntry[] = [
  {
    name: "BlockchainAgents",
    title: "AI × Blockchain · Next.js · TypeScript · LangChain · Solidity · MySQL",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Shipped an AI agent that executes 4 action classes from plain English — balance checks, ETH transfers, contract deployment, NFT minting — driven by a custom tool-calling framework (JSON protocol, tool registry, persistent memory). LLM-generated contracts compile via Hardhat and deploy through the user's MetaMask, including ERC-3643 security tokens.",
      },
    ],
    links: [
      {
        heading: "GitHub repository",
        link: "https://github.com/Shivamgulia/BlockchainAgents",
      },
    ],
  },
  {
    name: "SQL Query Generator",
    title: "RAG · Next.js · LangChain · OpenAI · Chroma",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Built a text-to-SQL agent that converts plain English into queries by retrieving the 3 most relevant tables from schema embeddings (Chroma), refined through a 3-agent pipeline — Context Gatherer → SQL Expert → SQL Critic — returning SQL plus a plain-English explanation.",
      },
    ],
    links: [
      {
        heading: "GitHub repository",
        link: "https://github.com/Shivamgulia/SQL-Generator",
      },
    ],
  },
  {
    name: "AgentOnBlockChan",
    title: "On-chain AI · Solidity · Chainlink · Gemini · Geth",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Built an on-chain smart contract that routes natural-language prompts to Gemini through a Chainlink oracle and acts on the response — secured with LINK payments and owner-only access control; verified end-to-end on a local Geth network with an ERC-677 test token.",
      },
    ],
    links: [
      {
        heading: "GitHub repository",
        link: "https://github.com/Shivamgulia/AgentOnBlockChan",
      },
    ],
  },
  {
    name: "Hostel Management System",
    title: "Full-stack backend · Spring Boot · MySQL · AWS S3 · React",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Built a hostel ops platform (leave, complaints, fees, notices, maintenance) on ~20 secured REST endpoints behind Spring Security + JWT filters — bcrypt hashing, parameterized SQL, and AWS S3 document storage.",
      },
    ],
    links: [
      {
        heading: "GitHub — web app",
        link: "https://github.com/Shivamgulia/Chhatravas-Prabandhan",
      },
      {
        heading: "GitHub — mobile app",
        link: "https://github.com/Shivamgulia/Chhatravas-Prabandhan-App",
      },
    ],
  },
  {
    name: "Cycle Renting Application",
    title: "Product with users · React · Spring Boot/Firebase · SQL · JWT",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Shipped a campus cycle-rental platform serving 3,000+ registered users — QR-scan booking across 100 cycles with real-time status, Google Sign-in, and role-based access (student/guard/admin).",
      },
    ],
    links: [
      {
        heading: "GitHub repository",
        link: "https://github.com/Shivamgulia/Cycle",
      },
    ],
  },
  {
    name: "AVO & Admin Portal",
    title: "Production deployments · Next.js · MySQL · Nginx · Ubuntu",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Delivered 2 production Next.js apps — shipboard issue-tracking and a feedback portal — serving 4 ships each on an Ubuntu VPS behind Nginx, secured with JWT + NextAuth auth.",
      },
    ],
    links: [
      {
        heading: "AVO website",
        link: "https://avo.seadrivezconnect.co.in/",
      },
      {
        heading: "Admin portal website",
        link: "https://admin.seadrivezconnect.co.in/",
      },
    ],
  },
  {
    name: "Home Server",
    title: "Infrastructure · Nextcloud · Docker · Tailscale · Ubuntu",
    description: [
      {
        head: "Highlights",
        list: false,
        desc: "Run an always-on self-hosted server (Nextcloud behind Tailscale VPN) powering family data backup, messaging, and notes — Linux server admin, containerized Docker services, secure remote access.",
      },
    ],
  },
];
