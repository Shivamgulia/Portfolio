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
        title: "SDE1, promoted to SDE2",
        period: "August 2025 – Present",
        highlights: [
          "Led backend development of an event-based incident management service using Java and Spring Boot to measure and remediate IaaS compliance across 700+ cloud accounts.",
          "Built an AI-assisted ticket-routing and real-time notification backend with AWS SQS and Lambda to help prevent response SLA breaches and maintain compliance.",
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
    name: "BlockchainAgents",
    title:
      "Next.js · TypeScript · LangChain · Gemini / OpenAI · Hardhat · ethers · MySQL",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built an AI agent that carries out blockchain actions from plain-English prompts, including checking balances, transferring ETH, deploying tokens and contracts, generating images, and minting NFTs.",
          "Designed a custom tool-calling framework with a JSON protocol, automatic tool-schema generation from function signatures, a tool registry, and persistent conversation memory.",
          "Created a Solidity deployment pipeline where an LLM generates contracts, the server compiles them with Hardhat, and the user's MetaMask wallet deploys them through ethers, including ERC-3643-compliant security tokens.",
          "Added NFT minting with Pinata IPFS storage and AI image generation, plus NextAuth accounts, MySQL, and per-user chat history.",
        ],
      },
    ],
  },
  {
    name: "AgentOnBlockChan",
    title: "Solidity · Chainlink · Gemini · Geth",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built a smart contract that sends natural-language prompts to Gemini through a Chainlink oracle and acts on the response on-chain.",
          "Wrote a Chainlink node job spec to decode requests, call the Gemini API, parse JSON responses, and submit fulfillment transactions.",
          "Implemented request, fulfillment, and cancellation flows with LINK payments and owner-only access control.",
          "Added on-chain operation history through events.",
          "Set up a local Geth development network with a Chainlink node and ERC-677 test token for end-to-end testing.",
        ],
      },
    ],
  },
  {
    name: "Hostel Management System",
    title: "ReactJS · Spring Boot · MySQL",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built a full-stack hostel management platform with a web app and mobile companion for students and wardens, covering leave requests and approvals, complaints, fee tracking, the mess menu, notices, and maintenance issues.",
          "Designed around 20 REST API endpoints with JWT authentication, bcrypt password hashing, and parameterized SQL queries to guard against injection.",
          "Implemented Google sign-in on web and mobile for college-domain accounts, deriving each student’s roll number from their college email.",
          "Developed role-based interfaces so students can submit and track requests, while wardens review leave, complaints, and maintenance issues, post notices, and manage student lists.",
        ],
      },
    ],
  },
  {
    name: "Cycle Renting Application",
    title: "ReactJS · Firebase · REST API · reCAPTCHA",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built the React front end for a campus cycle-rental system with separate student, guard, and admin roles. Admins can add and remove cycles, guards, and students, and signup is protected with reCAPTCHA.",
          "Implemented QR-code scanning with a built-in how-to guide and deployed the application on Firebase Hosting.",
        ],
      },
    ],
  },
  {
    name: "SQL Query Generator",
    title: "Next.js · LangChain · OpenAI · Chroma",
    description: [
      {
        head: "Highlights",
        list: true,
        desc: [
          "Built a retrieval-augmented text-to-SQL tool that generates structured metadata for each table schema, then embeds and stores it in Chroma.",
          "At query time, retrieves the three most relevant tables through semantic search and prompts the LLM with that context to return a SQL query and plain-English explanation.",
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
