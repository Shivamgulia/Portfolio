# Portfolio Content — Final Design (shivamgulia.vercel.app)

> Source: `profile.md` (Portfolio Content section). This file is the ready-to-paste, polished copy for the rebuilt portfolio. Keep in sync with `profile.md`, `resumeCode.tex`, and both master resumes. Dates/titles/metrics are truthful and reconciled (SDE2/SDE1 split handled via merged entry, 700+ accounts metric).

## Key Content Decisions (approved-by-default)

1. **One merged Fidelity entry** (Aug 2024–Present) instead of 3 split roles — cleaner storytelling; dates remain truthful.
2. **Keyword-first hero headline** replacing the abstract "Scalable software, built to matter" — recruiters search for "Backend Engineer", not poetry.
3. **Projects reordered**: backend+AI (BlockchainAgents, SQL Generator) lead; Java credibility (Hostel/Cycle) next; infra last.

---

## 1. Hero / Header

**Name:** Shivam Gulia

**Headline (primary):**

> Backend Engineer building scalable Java systems with an AI edge.

**Alternate headlines (pick one):**

- "I build backend systems that scale — and AI features that matter."
- "Java · Spring Boot · AWS · GenAI — from microservices to RAG agents."
- "Scalable software, built to matter." *(previous tagline — abstract; keyword headline recommended)*

**Sub-line:**

> SDE @ Fidelity International · Gurugram, India · Open to backend & AI-enabled backend roles

**CTA buttons:** `View Resume` · `Get in Touch` · `GitHub`

---

## 2. About

> I'm a backend engineer with 2+ years of experience turning complex enterprise problems into reliable, production-grade systems. At Fidelity International, I've built event-driven microservices tracking IaaS compliance across 700+ cloud accounts, and shipped AI-assisted automation that saves teams real hours.
>
> My core stack is Java, Spring Boot, and AWS — but what sets my work apart is the AI layer: I've built RAG pipelines, vector search, and agent frameworks into products people actually use, from document Q&A platforms to text-to-SQL tools.
>
> I care about three things: correctness under load, security by default, and cutting busywork. Off the clock, I run a self-hosted home server and grind LeetCode in Java (236 problems and counting).

**"What I care about" chips:** `Reliability` `Security` `Automation` `Practical AI`

---

## 3. Experience

**SDE — Fidelity International** · Gurugram, India · **Aug 2024 – Present**
*(Single continuous entry with "Programmer → SDE" progression badge; truthful dates.)*

- Led backend development of an event-driven incident-management service (Java, Spring Boot, AWS SQS, Lambda) measuring and remediating IaaS compliance across **700+ cloud accounts**.
- Built AI-assisted ticket routing and real-time notifications that prevent response SLA breaches before they happen.
- Developed Spring Boot REST services with Hibernate/JPA integrating third-party APIs — saving analysts **40+ hours per month**.
- Designed a pipeline generating vector embeddings from **100+ Confluence documents** powering an internal RAG agent.

**AI Intern — Fidelity International** · Gurugram, India · **Jun 2023 – Aug 2023**
*(Small card below the main entry.)*

- Delivered a document Q&A platform using ReactJS, Python APIs, generative AI, and vector-store semantic search; standardized TXT, PDF, DOCX content; retrieved top-three relevant document chunks.

---

## 4. Skills

| Category | Skills |
|---|---|
| **Backend** | Java · Spring Boot · REST APIs · Hibernate/JPA · Microservices · Multithreading |
| **Cloud & DevOps** | AWS (ECS, Lambda, S3, SQS) · Docker · Terraform · CI/CD (GitHub Actions, Jenkins) |
| **AI / GenAI** | RAG · LangChain · LangGraph · Tool-calling Agents · MCP · Vector DBs (Chroma, Milvus) · Prompt Engineering |
| **Languages** | Java · Python · TypeScript · SQL · Solidity |
| **Frontend** | React · Next.js · Tailwind |

---

## 5. Projects (featured order — backend+AI first)

### 1. BlockchainAgents — *AI × Blockchain*
AI agent that executes blockchain actions from plain English — balance checks, ETH transfers, contract deployment, NFT minting. Custom tool-calling framework with JSON protocol, tool registry, and persistent conversation memory. Solidity deployment pipeline with Hardhat; ERC-3643 security tokens; Pinata IPFS; NextAuth; per-user chat history.
`Next.js` `TypeScript` `LangChain` `Solidity` `MySQL`

### 2. SQL Query Generator — *RAG*
Text-to-SQL powered by RAG — embeds table schemas in a vector store, retrieves the right tables semantically, then refines queries through a three-agent pipeline (Context Gatherer → SQL Expert → SQL Critic).
`Next.js` `LangChain` `OpenAI` `Chroma`

### 3. AgentOnBlockChan — *On-chain AI*
Smart contract that sends natural-language prompts to Gemini via a Chainlink oracle and acts on-chain — with LINK payments and owner-only access control. Chainlink node job spec; local Geth dev network with ERC-677 test token.
`Solidity` `Chainlink` `Gemini` `Geth`

### 4. Hostel Management System — *Full-stack backend*
Complete hostel ops platform — leave requests, complaints, fee tracking, notices, maintenance — with ~20 REST endpoints, JWT auth, bcrypt, parameterized SQL, and AWS S3 document storage. Spring Security + JWT filters.
`Spring Boot` `MySQL` `AWS S3` `React`

### 5. Cycle Renting Application — *Product with users*
Campus cycle-rental platform with **3,000+ registered users**, QR-scan booking, role-based access (student/guard/admin), and Google Sign-in. Real-time status across 100 cycles.
`React` `Spring Boot/Firebase` `SQL` `JWT`

### 6. AVO & Admin Portal — *Production deployments*
Shipboard issue-tracking (AVO) and feedback management portal serving **4 ships each**, deployed on Ubuntu VPS behind Nginx with JWT + NextAuth auth. avo.seadrivezconnect.co.in · admin.seadrivezconnect.co.in
`Next.js` `MySQL` `Nginx` `Ubuntu`

### 7. Home Server / Personal Infrastructure — *Infrastructure*
Self-hosted Nextcloud behind Tailscale VPN for family data backup, messaging, and notes — Linux server admin, containerized services, secure remote access.
`Nextcloud` `Docker` `Tailscale` `Ubuntu`

*Each card on-site: title, category tag, one-liner, 2-3 line description, tech chips, links (GitHub/demo where available).*

---

## 6. Beyond Code (trust-building strip)

- **LeetCode:** 236 problems in Java → https://leetcode.com/u/Shivamgulia/
- **GeeksforGeeks:** https://www.geeksforgeeks.org/profile/shivamgulia?tab=activity
- **AWS Certified Developer – Associate (DVA-C02)** — Udemy — UC-ae260343-edf3-41d6-ba2d-6cd2deb9c091
- **Spring Boot 4, Spring 7 & Hibernate for Beginners** — Udemy — UC-dd82d024-6c8e-4096-b83b-9d8c96e9e3a2
- **B.Tech, Electronics Engineering — HBTU Kanpur** (Jul 2020 – Jun 2024, GPA 7.664)

---

## 7. Contact / Footer

> **Let's build something reliable.**
> Open to backend engineer roles — Java/Spring Boot/AWS, with AI if you've got it.
> Gurugram/NCR · Remote India · Open abroad

- Email: shivam.meert@gmail.com
- Phone: +91-8279373573
- LinkedIn: https://www.linkedin.com/in/shivam-gulia-44a773202/
- GitHub: https://github.com/Shivamgulia

---

## Sync Rules

- This file = polished portfolio copy. `profile.md` = master source of truth. Update both together when content changes.
- Titles shown on-site: merged "SDE (Programmer → SDE), Aug 2024–Present" + "AI Intern, Jun–Aug 2023". Resume variants may still use SDE2/SDE1 split — that's a resume, not portfolio, difference.
- Metric consistency: use **700+ cloud accounts** and **40+ hrs/month** here; the 650+/10,000+ figures remain AI-resume-only and never appear on the portfolio.
