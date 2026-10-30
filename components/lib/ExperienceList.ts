import { LINKEDIN_URL } from "./siteConfig";

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
  tag?: string;
  summary?: string;
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
        title: "Programmer → SDE",
        period: "August 2024 – Present",
        highlights: [
          "Led backend development of an event-driven incident-management service (Java, Spring Boot, AWS SQS, Lambda) measuring and remediating IaaS compliance across 700+ cloud accounts.",
          "Built AI-assisted ticket routing and real-time notifications that prevent response SLA breaches before they happen.",
          "Developed Spring Boot REST services with Hibernate/JPA integrating third-party APIs — saving analysts 40+ hours per month.",
          "Designed a pipeline generating vector embeddings from 100+ Confluence documents powering an internal RAG agent.",
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
        link: LINKEDIN_URL,
      },
    ],
  },
  {
    name: "Fidelity International",
    title: "Gurugram, India",
    phases: [
      {
        title: "AI Intern",
        period: "June 2023 – August 2023",
        highlights: [
          "Delivered a document Q&A platform using ReactJS, Python APIs, generative AI, and vector-store semantic search; standardized TXT, PDF, and DOCX content and retrieved the top three relevant document chunks.",
        ],
      },
    ],
    description: [],
  },
];

export const projectsList: ExperienceEntry[] = [
  {
    name: "BlockchainAgents",
    tag: "AI × Blockchain",
    summary: "An AI agent that executes blockchain actions from plain English.",
    title: "Next.js · TypeScript · LangChain · Solidity · Hardhat · ethers · MySQL",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "Checks balances, transfers ETH, deploys tokens and contracts, generates images, and mints NFTs — all from natural-language prompts. Runs on a custom tool-calling framework with a JSON protocol, automatic tool-schema generation from function signatures, a tool registry, and persistent conversation memory.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Solidity deployment pipeline: an LLM generates contracts, the server compiles them with Hardhat, and the user's MetaMask wallet deploys them through ethers.",
          "ERC-3643-compliant security tokens for regulated assets.",
          "NFT minting with Pinata IPFS storage and AI image generation.",
          "NextAuth accounts, MySQL, and per-user chat history.",
        ],
      },
    ],
  },
  {
    name: "SQL Query Generator",
    tag: "RAG",
    summary: "Text-to-SQL powered by retrieval-augmented generation.",
    title: "Next.js · LangChain · OpenAI · Chroma",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "Generates structured metadata for every table schema, embeds it in Chroma, and retrieves the three most relevant tables at query time — so the model sees only the context it needs.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Three-agent pipeline — Context Gatherer, SQL Expert, and SQL Critic — reviews and corrects each query before it reaches the user.",
          "Semantic search over embedded schema metadata keeps prompts small and relevant.",
          "Every result returns as a SQL query plus a plain-English explanation.",
        ],
      },
    ],
  },
  {
    name: "AgentOnBlockChan",
    tag: "On-chain AI",
    summary: "A smart contract that acts on natural-language prompts.",
    title: "Solidity · Chainlink · Gemini · Geth",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "Natural-language prompts travel to Gemini through a Chainlink oracle, and the contract acts on the decoded response on-chain — paid with LINK and restricted to the contract owner.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Chainlink node job spec decodes requests, calls the Gemini API, parses JSON responses, and submits fulfillment transactions.",
          "Request, fulfillment, and cancellation flows with LINK payments and owner-only access control.",
          "On-chain operation history recorded through events.",
          "Local Geth development network with a Chainlink node and an ERC-677 test token for end-to-end testing.",
        ],
      },
    ],
  },
  {
    name: "Hostel Management System",
    tag: "Full-stack backend",
    summary: "A complete hostel operations platform.",
    title: "Spring Boot · MySQL · AWS S3 · React",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "A web app and mobile companion for students and wardens: leave requests and approvals, complaints, fee tracking, the mess menu, notices, and maintenance issues.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Around 20 REST endpoints with JWT authentication, bcrypt password hashing, and parameterized SQL.",
          "Google sign-in for college-domain accounts, deriving each student's roll number from their college email.",
          "Role-based interfaces — students submit and track requests while wardens review leave and complaints, post notices, and manage student lists.",
          "AWS S3 document storage backed by Spring Security and JWT filters.",
        ],
      },
    ],
  },
  {
    name: "Cycle Renting Application",
    tag: "Product with users",
    summary: "A campus cycle-rental platform with 3,000+ registered users.",
    title: "React · Spring Boot/Firebase · SQL · JWT",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "A real product in daily campus use: QR-scan booking, real-time status across 100 cycles, and Google Sign-in, with separate student, guard, and admin roles.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Admins add and remove cycles, guards, and students; signup is protected with reCAPTCHA.",
          "Built-in QR-scanning how-to guide for first-time renters.",
          "Deployed on Firebase Hosting.",
        ],
      },
    ],
  },
  {
    name: "AVO & Admin Portal",
    tag: "Production deployments",
    summary:
      "Shipboard issue tracking and a feedback management portal, each serving four ships.",
    title: "Next.js · MySQL · Nginx · Ubuntu",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "Two production apps on one Ubuntu VPS behind Nginx: AVO routes shipboard issues to the right departments, and the Admin Portal reviews customer feedback across the fleet.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "JWT back-end authentication with NextAuth on the front end.",
          "Role-based access and a MySQL data model spanning multiple ships.",
          "Visual feedback summaries for reviewing teams.",
        ],
      },
    ],
    links: [
      {
        heading: "AVO website",
        link: "https://avo.seadrivezconnect.co.in/",
      },
      {
        heading: "Admin panel website",
        link: "https://admin.seadrivezconnect.co.in/",
      },
    ],
  },
  {
    name: "Home Server",
    tag: "Infrastructure",
    summary: "A self-hosted home server for family data.",
    title: "Nextcloud · Docker · Tailscale · Ubuntu",
    description: [
      {
        head: "Overview",
        list: false,
        desc: "Self-hosted Nextcloud behind a Tailscale VPN for data backup, messaging, and notes — Linux server admin, containerized services, and secure remote access.",
      },
      {
        head: "Highlights",
        list: true,
        desc: [
          "Runs containerized services on Ubuntu and stays reachable only through the private Tailscale network.",
        ],
      },
    ],
  },
];
