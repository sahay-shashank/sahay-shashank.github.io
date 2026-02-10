Below is a **consolidated architecture + design record** capturing everything decided today: ADR, multi-repo design, portfolio structure, future plan, and next steps. I’m writing this in a format you can directly drop into your repo as `docs/architecture/ADR-0001-portfolio-architecture.md` (or similar).

---

# 📘 Portfolio Platform – Architecture & Design Notes

**Date:** 2026-02-08
**Status:** Accepted
**Decision Type:** Foundational Architecture
**Owner:** Shashank Sahay

---

# 1. Context

We are building a **developer portfolio platform** that:

* Uses **MDX for content authoring**
* Uses **React + Vite + TypeScript**
* Enforces **strict typing (no `any`)**
* Allows **embedding React components inside content**
* Restricts content authors to **only allowed UI components**
* Supports **scalability and reusability**
* Enables **separation of content, UI, and platform logic**
* Supports future extensibility like theming, versioning, and possible CMS integration

---

# 2. Architectural Decisions (ADR)

## ADR-001: Use MDX for Content + Controlled Component Embedding

### Decision

Content will be authored using **MDX**.
All embedded components inside MDX must be explicitly **whitelisted**.

---

### Rationale

#### Benefits

* Developer-friendly authoring
* React component composition
* Reusable presentation primitives
* Easy static build
* Type-safe component usage

#### Risk Mitigation

* MDX components will be restricted using a **Component Registry**
* No direct import allowed in MDX files

---

### Implementation Strategy

```
MDX Content
     ↓
MDX Provider
     ↓
Allowed Component Registry
     ↓
React Render Layer
```

---

## ADR-002: Strict TypeScript (No `any`)

### Decision

TypeScript will be configured in strict mode:

* `noImplicitAny = true`
* `strict = true`
* Custom MDX typing will be defined
* Component props must be strongly typed

---

### Rationale

* Prevent content misuse
* Improve maintainability
* Improve IDE experience
* Avoid runtime rendering issues

---

## ADR-003: Alias `@/` → `src/`

### Decision

Both Vite and TypeScript will resolve:

```
@ → src/
```

---

### Rationale

* Cleaner imports
* Easier refactoring
* Consistent developer experience

---

## ADR-004: Use `@mdx-js/react` Instead of Deprecated Plugin

### Decision

Since `vite-plugin-mdx` is deprecated, we will:

* Use **@mdx-js/react**
* Use Vite compatible MDX tooling

---

---

# 3. Multi-Repository Architecture

We are adopting a **multi-repo modular architecture** to support scale and reusability.

---

## 3.1 Repository Overview

```
portfolio-platform/
├── portfolio-web-app
├── portfolio-content
├── portfolio-ui
├── portfolio-shared-types
└── portfolio-config (optional future)
```

---

## 3.2 Repo Responsibilities

---

### 🧩 portfolio-web-app

Main application host.

#### Responsibilities

* Routing
* MDX rendering
* Layout system
* Theme system
* Component registry wiring
* SEO integration

#### Tech

* React
* Vite
* TypeScript
* MDX renderer

---

---

### 📚 portfolio-content

Stores all MDX content.

#### Responsibilities

* Blogs
* Case studies
* Project descriptions
* Timeline entries
* Portfolio metadata

#### Structure

```
content/
 ├── blog/
 ├── projects/
 ├── experience/
 ├── about/
 └── notes/
```

---

#### Benefits

* Enables CMS migration later
* Supports versioning
* Decouples content from UI

---

---

### 🎨 portfolio-ui

Reusable UI component library.

#### Responsibilities

* Typography
* Layout primitives
* Content rendering components
* MDX allowed components
* Design system tokens

---

#### Example Components

```
Callout
CodeBlock
ProjectCard
Timeline
ImageWithCaption
TechStack
```

---

---

### 🧾 portfolio-shared-types

Centralized typing system.

#### Responsibilities

* MDX types
* Content schema
* Component prop contracts
* Registry typing

---

---

### ⚙️ portfolio-config (Future)

* Theme definitions
* Layout variants
* Branding tokens
* Feature flags

---

---

# 4. Component Embedding Design

---

## 4.1 Allowed Components Registry

```ts
export const allowedComponents = {
  Callout,
  CodeBlock,
  ProjectCard,
}
```

---

## 4.2 MDX Provider Control

```
<MDXProvider components={allowedComponents}>
  <Content />
</MDXProvider>
```

---

## 4.3 Content Author Restrictions

Authors can only use:

```
<Callout />
<ProjectCard />
```

They cannot import arbitrary components.

---

---

# 5. Portfolio Website Structure

---

## 5.1 Home Page

### Purpose

Landing identity + summary

### Contains

* Hero introduction
* Short professional summary
* Featured projects
* Skill highlights
* Recent blog preview
* Contact CTA

---

---

## 5.2 About Section

### Contains

* Personal story
* Professional journey
* Philosophy / values
* Interests
* Skills overview

---

---

## 5.3 Projects Section

### Contains

Each project includes:

* Problem statement
* Solution architecture
* Tech stack
* Screenshots / demos
* Learnings
* GitHub links
* Blog deep dives

---

### Structure

```
projects/
  project-name.mdx
```

---

---

## 5.4 Blog / Writing Section

### Contains

* Technical articles
* Architecture discussions
* Learning notes
* Research summaries

---

### Enhancements

* Tagging system
* Reading time calculation
* Code highlighting
* Embedded demos

---

---

## 5.5 Experience / Timeline

### Contains

* Work experience
* Education
* Milestones
* Career highlights

---

---

## 5.6 Notes / Knowledge Base

### Contains

* Quick learning notes
* Personal wiki
* Design thought logs
* ADR archive

---

---

## 5.7 Contact Section

### Contains

* Social links
* Email
* Collaboration CTA
* Resume download

---

---

# 6. Content Structure Standardization

Every MDX content should include metadata:

```
---
title:
date:
tags:
summary:
status:
---
```

---

---

# 7. Folder Structure (Web App)

```
src/
 ├── components
 ├── layouts
 ├── mdx
 │    ├── registry
 │    ├── renderer
 │    └── providers
 ├── pages
 ├── routes
 ├── styles
 └── utils
```

---

---

# 8. Future Roadmap

---

## Phase 1 – Foundation

* Setup MDX rendering
* Component registry
* Portfolio structure
* UI primitives
* Static content

---

## Phase 2 – Content System

* Content schema validation
* Tagging system
* Content indexing
* Search

---

## Phase 3 – Experience Enhancements

* Theme switcher
* Animation system
* Interactive demos
* Project filtering

---

## Phase 4 – Scalability

* CMS integration
* Multi-language support
* Content versioning
* RSS feeds

---

## Phase 5 – Platformization

* Convert into reusable portfolio starter
* Plugin ecosystem
* Template support

---

---

# 9. Risks & Mitigation

| Risk               | Mitigation                |
| ------------------ | ------------------------- |
| MDX misuse         | Component whitelist       |
| Content complexity | Schema validation         |
| UI inconsistency   | Design system             |
| Scaling difficulty | Multi-repo modularization |

---

---

# 10. Next Steps

---

## Immediate

### 1️⃣ Setup Repositories

* Create repo skeleton
* Setup package linking or workspace

---

### 2️⃣ Implement MDX Renderer

* Setup MDXProvider
* Setup allowed component registry

---

### 3️⃣ Create Core UI Components

* Callout
* CodeBlock
* ProjectCard
* Layout primitives

---

### 4️⃣ Setup Content Schema

* Define frontmatter contract
* Add validation

---

---

## Short Term

* Add routing
* Build project listing page
* Build blog listing page
* Implement metadata extraction

---

---

## Medium Term

* Search indexing
* Tag filtering
* Theming

---

---

# 11. Success Criteria

* Content authoring is frictionless
* No unsafe component embedding
* Fully type-safe MDX usage
* Modular repository growth
* Production deployable static site

---

---

# 12. Open Questions

* CMS vs Git-based workflow
* Content preview workflow
* Design token management
* Multi-theme support

---

---

If you want, next I can help you create:

1️⃣ Repo scaffolding plan
2️⃣ Actual folder structure with starter files
3️⃣ Component registry implementation
4️⃣ MDX renderer boilerplate
5️⃣ Content schema using Zod
6️⃣ Monorepo setup using pnpm / turborepo

Just tell me which direction you want to go next.

Ahhh yes — that was actually an important constraint in your design philosophy. Good catch 👍
Let’s formally add the **Day-Job vs Night-Job design principle** because it influences repo separation, content flow, and sustainability.

Below is the missing section you can append to the ADR/design doc.

---

# 🌗 13. Development Philosophy – Day Job vs Night Job Model

---

## 13.1 Context

This portfolio platform is being developed alongside full-time professional responsibilities.
To ensure sustainability, consistency, and long-term progress, development follows a **dual-track model**:

```
Day Job → Stability, Industry Alignment, Professional Growth
Night Job → Exploration, Experimentation, Personal Brand
```

---

## 13.2 Day Job Track (Professional Alignment)

### Purpose

Focus on skills, patterns, and technologies that:

* Improve professional competency
* Align with real industry challenges
* Strengthen architecture thinking
* Build production-grade reliability

---

### Characteristics

| Aspect        | Principle                    |
| ------------- | ---------------------------- |
| Stability     | Prefer proven technologies   |
| Documentation | Production-level quality     |
| Testing       | High priority                |
| Code Quality  | Strict enforcement           |
| Architecture  | Enterprise-inspired patterns |

---

### Portfolio Reflection

Content under this track will include:

* Case studies
* Architecture deep dives
* Performance optimizations
* Scalability design discussions
* Engineering learnings from real-world systems

---

### Repo Influence

Day-job inspired modules emphasize:

```
portfolio-web-app
portfolio-shared-types
portfolio-config
```

These focus on:

* Maintainability
* Scalability
* Clean architecture

---

---

## 13.3 Night Job Track (Exploration & Creativity)

### Purpose

Encourage:

* Technology experimentation
* Creative UI ideas
* Emerging tooling
* Learning through building
* Thought leadership

---

### Characteristics

| Aspect          | Principle      |
| --------------- | -------------- |
| Experimentation | Encouraged     |
| Risk            | Acceptable     |
| Speed           | Prioritized    |
| Creativity      | High           |
| Refactoring     | Expected later |

---

### Portfolio Reflection

Content under this track will include:

* Experimental UI components
* New framework exploration
* Interactive demos
* Research notes
* Engineering thought logs

---

### Repo Influence

Night-job inspired modules mainly influence:

```
portfolio-ui
portfolio-content
notes/
experiments/
```

---

---

## 13.4 Content Tagging Strategy

All content can optionally include classification:

```
track:
  - day-job
  - night-job
```

---

### Benefits

* Helps readers understand context
* Helps organize learning vs production thinking
* Enables filtering UI later

---

---

## 13.5 Architecture Impact

---

### 1️⃣ Multi-Repo Separation

The separation ensures experimental work never destabilizes production layers.

```
Stable Core → Web App + Types
Flexible Layer → UI + Content
```

---

### 2️⃣ Component Lifecycle Model

```
Night Job Component
      ↓
Experiment + Iterate
      ↓
Stabilize + Refactor
      ↓
Promote to Day Job Grade Component
```

---

---

### 3️⃣ Documentation Standards

| Track     | Documentation Style               |
| --------- | --------------------------------- |
| Day Job   | Formal ADR + design review        |
| Night Job | Exploration notes + learning logs |

---

---

## 13.6 Time Investment Strategy

---

### Day Job Effort

* Weekday learning integration
* Production pattern analysis
* Writing structured case studies

---

### Night Job Effort

* Weekend / leisure development
* Rapid prototyping
* UI experiments
* Knowledge journaling

---

---

## 13.7 Long-Term Vision

Night-job experimentation becomes the **innovation engine**.
Day-job discipline becomes the **stability engine**.

Together they build:

* Credible engineering portfolio
* Authentic learning narrative
* Sustainable development workflow

---

---

## 13.8 UI/UX Representation (Future)

Potential visual indicators:

* 🌞 Day Job content badge
* 🌙 Night Job content badge
* Filter toggle in blog/projects section

---

---

# 14. Success Metrics for This Model

* Continuous portfolio growth without burnout
* Balanced professional + creative output
* Clear separation of experimental vs production quality work
* Strong storytelling in portfolio narrative

---

---

If you want, next we can also design:

👉 Content tagging schema
👉 Folder naming conventions for day/night separation
👉 UI indicator design
👉 Promotion workflow (Night → Day quality)
👉 Contribution rules for yourself (like a mini engineering handbook)

Just say which direction you want to extend this.
