# Portfolio Website Structure, Features, and Data Specification

This document provides a comprehensive technical overview and data schema for this developer portfolio website. You can share this document directly with another AI to populate the portfolio with your actual personal details, projects, skills, and work history.

---

## 1. Tech Stack & Architecture

- **Framework**: React 19 + TypeScript (SPA architecture powered by Vite)
- **Styling**: Tailwind CSS v4 (Class-based dark mode using `@custom-variant dark`, sleek amber accent `#F27D26`, clean typographic hierarchy)
- **Icons**: `lucide-react`
- **Animation & Transitions**: CSS transitions & `@tailwindcss/vite` animations
- **State Management**:
  - `ThemeContext`: Handles light/dark/system themes persisted in `localStorage`.
  - Local component state for search, filter tabs, modal dialogs, and form submissions.
- **Data Source**: All user data is cleanly decoupled into `/src/data/portfolioData.ts` and strictly typed in `/src/types.ts`.

---

## 2. Page & Component Layout Hierarchy

The portfolio is structured as a responsive single-page application with rich modal dialogs:

1. **Top Scroll Progress Indicator (`ScrollProgress.tsx`)**
   - 3px reading progress bar at the top of the viewport with amber glow (`#F27D26`).
   - Smoothly tracks scroll position through the main content area.

2. **Navigation Header (`Navbar.tsx`)**
   - Brand monogram avatar / logo.
   - Desktop & mobile navigation links (`#about`, `#skills`, `#projects`, `#experience`, `#contact`).
   - **Quick Action**: "Resume" button opening the full CV modal.
   - **Theme Switcher**: Instant toggle between Dark Mode and Light Mode.
   - **Mobile Drawer**: Animated toggle menu for smaller screens.

3. **Hero Section (`Hero.tsx`)**
   - Live availability badge (e.g. "Available for Select Contracts & Senior Roles").
   - Headline, primary role title, and elevator pitch tagline.
   - High-contrast primary call-to-action buttons: *"Explore Works"* and *"Curriculum Vitae"*.
   - Stat metric callouts (e.g., Years of Experience, Completed Projects, Contributions).
   - Social media icon pills (GitHub, LinkedIn, Twitter/X, Email).

4. **About Section (`About.tsx`)**
   - Narrative biography paragraphs explaining technical philosophy and problem-solving approach.
   - Core pillar cards (e.g., *Performance Obsessed*, *Architectural Resilience*, *Inclusive & Accessible*, *Collaborative Leadership*).
   - Location, time zone, and key attributes.

5. **Skills & Expertise Section (`Skills.tsx`)**
   - Organized into 4 categories:
     - **Frontend Architecture & UI**
     - **Backend & Distributed Systems**
     - **Databases & Storage**
     - **Cloud, DevOps & Tooling**
   - Interactive search and filter to find specific technologies.
   - Proficiency percentage bars and years-of-experience badges.
   - Technology tags (e.g., `Core`, `Architecture`, `Language`, `Relational`).

6. **Featured Projects Section (`Projects.tsx` & `ProjectModal.tsx`)**
   - Category filtering tabs: `All`, `Fullstack`, `Frontend`, `AI`, `Cloud`.
   - Card grid with project thumbnail, tagline, short description, tech stack chips, live demo & GitHub repository links.
   - Key impact metrics (e.g., "15k/sec throughput", "88ms latency").
   - **Interactive Modal (`ProjectModal.tsx`)**: Clicking any project reveals deep-dive architectural highlights, full challenge-solution story, key features checklist, and multi-image gallery.

7. **Work Experience Section (`Experience.tsx`)**
   - Interactive chronological career timeline.
   - Role title, company name, location, and dates (with active badge for current position).
   - Summary of tenure and quantified bullet points of achievements.
   - Tech stack chips utilized at each company.

8. **Resume & Credentials Section (`ResumeSection.tsx` & `ResumeModal.tsx`)**
   - Direct on-page view of formal Education and Industry Certifications.
   - Direct button to launch the printable **Curriculum Vitae Modal** with print-friendly layout and copyable contact details.

9. **Contact Section (`Contact.tsx`)**
   - Direct contact card with email, location, and social links.
   - One-click copy email to clipboard with instant toast notification.
   - Interactive contact message form (Name, Email, Project Type / Subject, Message) with client-side validation and success feedback state.

10. **Footer (`Footer.tsx`)**
    - Brand recap and brief mission statement.
    - Quick navigation links.
    - Back-to-top button.
    - Copyright and legal credits.

---

## 3. Data Schema & Types Specification (`/src/types.ts`)

Any AI generating personal information for this site must conform to these TypeScript interfaces:

```typescript
export type ThemeMode = 'light' | 'dark' | 'system';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string; // 'Github' | 'Linkedin' | 'Twitter' | 'Mail' (from lucide-react)
  username: string;
  category?: 'code' | 'social' | 'contact';
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'ai' | 'cloud';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullStory?: string;
  category: ProjectCategory;
  featured: boolean;
  thumbnail: string; // Image URL
  gallery?: string[]; // Array of Image URLs
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  keyFeatures: string[];
  architecturalHighlights?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100 percentage
  experienceYears: string; // e.g. "5 yrs"
  featured?: boolean;
  iconName?: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string; // 'Layout' | 'Server' | 'Database' | 'Cloud'
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string; // e.g. "2023 - Present"
  current?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string; // e.g. "2018 - 2022"
  details: string;
  honors?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string; // e.g. "2024"
  credentialId?: string;
  badgeUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string; // Image URL
}
```

---

## 4. Prompt Template for the Other AI

Copy and send the prompt below to your other AI that holds your personal information:

> ### Prompt for Personal Information AI:
> "I am setting up a high-performance, modern developer portfolio website built with React 19, TypeScript, and Tailwind CSS.
>
> Please generate the complete TypeScript content for the file `src/data/portfolioData.ts` based on my real background, resume, skills, and projects.
>
> Ensure that:
> 1. All fields match the TypeScript schema below.
> 2. The data contains realistic, quantified achievements (e.g. percentages, latencies, user metrics).
> 3. Provide at least 3-5 real or flagship projects (with titles, taglines, descriptions, full stories, metrics, key features, and architectural highlights).
> 4. Categorize skills into Frontend, Backend, Databases, and Cloud/DevOps.
> 5. Output the valid, complete TypeScript code ready to be pasted directly into `src/data/portfolioData.ts`."

---

## 5. File To Be Replaced With Your Data

When the other AI generates the data, the file that needs to be updated is:
- **`src/data/portfolioData.ts`**

Once updated, the entire website will automatically re-render with your name, bio, projects, skills, work history, and contact links across every section and modal.
