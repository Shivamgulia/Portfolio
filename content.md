# Portfolio Content — Final Locked Copy (shivamgulia.vercel.app)

> Refined from `portfolio-content.md` in a section-by-section review. This is the
> copy that gets implemented in the code. Dates/metrics remain truthful.

## 1. Hero / Header

- **Eyebrow:** SDE2 @ Fidelity International · Gurugram, India · Open to backend & AI-enabled backend roles
- **H1:** Backend Engineer
- **Keyword line:** Java · Spring Boot · AWS · GenAI
- **Hook:** I build systems that scale — and AI that earns its keep.
- **CTAs:** View Resume · Get in Touch · GitHub
- **Years figure:** "2+ years" lives in the hero summary line only (dynamic counter); About paragraph drops it.

## 2. About

1. I'm a backend engineer turning complex enterprise problems into reliable,
   production-grade systems. At Fidelity International, I've built event-driven
   microservices tracking IaaS compliance across 700+ cloud accounts, and shipped
   AI-assisted automation saving analysts **40+ hours a month**.
2. My core stack is Java, Spring Boot, and AWS — but what sets my work apart is
   the AI layer: I've built RAG pipelines, vector search, and agent frameworks
   into products in daily use, from document Q&A platforms to text-to-SQL tools.
3. I care about three things: correctness under load, security by default, and
   cutting busywork. Off the clock, I run a self-hosted home server and grind
   LeetCode in Java (236 problems and counting).

**Chips:** Reliability · Security · Automation · Practical AI

## 3. Experience

### SDE2 (Programmer → SDE1 → SDE2) — Fidelity International · Gurugram, India · Aug 2024 – Present
1. Led backend development of an event-driven incident-management service (Java,
   Spring Boot, AWS SQS, Lambda) measuring and remediating IaaS compliance across
   **700+ cloud accounts**.
2. Built AI-assisted ticket routing and real-time notifications, preventing
   response-SLA breaches.
3. Designed a pipeline generating vector embeddings from **100+ Confluence
   documents**, powering an internal RAG agent.
4. Developed Spring Boot REST services with Hibernate/JPA integrating third-party
   APIs — saving analysts **40+ hours per month**.

### AI Intern — Fidelity International · Gurugram, India · Jun 2023 – Aug 2023
1. Delivered a document Q&A platform with ReactJS, Python APIs, generative AI,
   and vector-store semantic search.
2. Standardized TXT, PDF, and DOCX content; retrieved the top-three relevant
   chunks per query.

## 4. Skills (order: Backend → AI/GenAI → Cloud & DevOps → Languages → Frontend)

- **Backend** — Java · Spring Boot · REST APIs · Hibernate/JPA · Microservices · Multithreading
- **AI / GenAI** — RAG · LangChain · LangGraph · Tool-calling Agents · MCP · Vector DBs (Chroma, Milvus) · Prompt Engineering
- **Cloud & DevOps** — AWS (ECS, Lambda, S3, SQS) · Docker · Terraform · CI/CD (GitHub Actions, Jenkins)
- **Languages** — Java · Python · TypeScript · SQL · Solidity
- **Frontend** — React · Next.js · Tailwind

## 5. Projects (XYZ-quantified compressed copy; featured order)

1. **BlockchainAgents** · *AI × Blockchain*
   Shipped an AI agent that executes 4 action classes from plain English — balance
   checks, ETH transfers, contract deployment, NFT minting — driven by a custom
   tool-calling framework (JSON protocol, tool registry, persistent memory).
   LLM-generated contracts compile via Hardhat and deploy through the user's
   MetaMask, including ERC-3643 security tokens.
   `Next.js · TypeScript · LangChain · Solidity · MySQL` → GitHub: Shivamgulia/BlockchainAgents
2. **SQL Query Generator** · *RAG*
   Built a text-to-SQL agent that converts plain English into queries by retrieving
   the 3 most relevant tables from schema embeddings (Chroma), refined through a
   3-agent pipeline — Context Gatherer → SQL Expert → SQL Critic — returning SQL
   plus a plain-English explanation.
   `Next.js · LangChain · OpenAI · Chroma` → GitHub: Shivamgulia/SQL-Generator
3. **AgentOnBlockChan** · *On-chain AI*
   Built an on-chain smart contract that routes natural-language prompts to Gemini
   through a Chainlink oracle and acts on the response — secured with LINK payments
   and owner-only access control; verified end-to-end on a local Geth network with
   an ERC-677 test token.
   `Solidity · Chainlink · Gemini · Geth` → GitHub: Shivamgulia/AgentOnBlockChan
4. **Hostel Management System** · *Full-stack backend*
   Built a hostel ops platform (leave, complaints, fees, notices, maintenance) on
   ~20 secured REST endpoints behind Spring Security + JWT filters — bcrypt
   hashing, parameterized SQL, and AWS S3 document storage.
   `Spring Boot · MySQL · AWS S3 · React` → GitHub: Shivamgulia/Chhatravas-Prabandhan + Shivamgulia/Chhatravas-Prabandhan-App
5. **Cycle Renting Application** · *Product with users*
   Shipped a campus cycle-rental platform serving 3,000+ registered users — QR-scan
   booking across 100 cycles with real-time status, Google Sign-in, and role-based
   access (student/guard/admin).
   `React · Spring Boot/Firebase · SQL · JWT` → GitHub: Shivamgulia/Cycle
6. **AVO & Admin Portal** · *Production deployments*
   Delivered 2 production Next.js apps — shipboard issue-tracking and a feedback
   portal — serving 4 ships each on an Ubuntu VPS behind Nginx, secured with JWT +
   NextAuth auth.
   `Next.js · MySQL · Nginx · Ubuntu` → avo.seadrivezconnect.co.in · admin.seadrivezconnect.co.in
7. **Home Server** · *Infrastructure*
   Run an always-on self-hosted server (Nextcloud behind Tailscale VPN) powering
   family data backup, messaging, and notes — Linux server admin, containerized
   Docker services, secure remote access.
   `Nextcloud · Docker · Tailscale · Ubuntu` → no link

## 6. Beyond Code (standalone section; eyebrow "Proof of work outside the job")

- **LeetCode** — 236 problems solved in Java → https://leetcode.com/u/Shivamgulia/
- **GeeksforGeeks** — coding practice & article activity → https://www.geeksforgeeks.org/profile/shivamgulia?tab=activity
- **Course: AWS Certified Developer – Associate (DVA-C02) · Udemy** → https://www.udemy.com/certificate/UC-ae260343-edf3-41d6-ba2d-6cd2deb9c091/
- **Spring Boot 4, Spring 7 & Hibernate for Beginners · Udemy** → https://www.udemy.com/certificate/UC-dd82d024-6c8e-4096-b83b-9d8c96e9e3a2/

## 7. Contact / Footer

- **Eyebrow:** Open to backend engineer roles
- **H2:** Let's build something reliable.
- **Line:** Java · Spring Boot · AWS — with AI if you've got it.
- **Availability:** Gurugram/NCR · Remote India · Open abroad
- **Links:** shivam.meert@gmail.com · +91-8279373573 · linkedin.com/in/shivam-gulia-44a773202/ · github.com/Shivamgulia

## Sync Rules

- This file = implemented copy; `portfolio-content.md` = editorial source. Update together.
- Metrics on-site: 700+ cloud accounts, 40+ hrs/month, 3,000+ users, 100 cycles, 4 ships, ~20 endpoints, 100+ docs.
- Udemy certs are labeled "Course:" — never phrased as an official AWS certification.
- Titles shown on-site: merged "SDE2 (Programmer → SDE1 → SDE2), Aug 2024 – Present" (SDE2 effective Oct 2026) + "AI Intern, Jun–Aug 2023". Resume variants may use the SDE2/SDE1/Programmer split.
