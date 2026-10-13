# Pavan B N — Professional Portfolio Website

A modern, high-performance, single-page portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, designed for **Pavan B N** (Java Developer | Full Stack Development | Spring Boot).

---

## 🌟 Key Features

- **Light & Dark Mode**: One-click theme switcher in the navigation bar with system preference detection, automatic `localStorage` persistence, and tailored WCAG-compliant styling across all sections and modals.
- **Top Bar Contract**: Sticky, responsive navigation bar with smooth anchor scrolling and instant resume modal access.
- **Hero Section with Spring Boot Architecture Terminal**: Split-screen design with real Spring Boot code snippets, copy functionality, and full-width KPI metrics strip.
- **Detailed About Section**: Professional introduction narrative, quick facts card, spoken languages (English, Kannada, Telugu, Hindi), and extracurricular/leadership honors.
- **Interactive Skills Matrix**: Filterable tech stacks (Backend, Languages, Databases, Frontend, Cloud & DevOps) with proficiency markers and enterprise MVC architecture breakdown.
- **Internship Experience Timeline**: Dedicated cards for **Eduskills** (Java Full Stack Intern) and **42Learn** (Frontend Developer Intern).
- **Featured Projects & In-Depth Architecture Modals**: Showcase of **Optimize Task Management System**, **Online Food Ordering System**, and **Fraud Detection in Bitcoin Transactions in Smart Cities** with architecture details, database models, and GitHub links.
- **Education & Verified Certifications**: Display of B.Tech CSE (8.3/10 CGPA) from Pace Institute of Technology and Sciences, Intermediate (96%), and 4 verified certifications (CodeTantra Java, Eduskills Full Stack, Spoken Tutorial RDBMS, Ethical Hacking).
- **Interactive Contact & Quick Copy**: Working contact form with auto-formatted `mailto:` generation, one-click email (`pavanbn.work@gmail.com`) and phone (`+91 63016 33343`) copy actions with toast notifications.
- **In-App ATS-Friendly Resume Viewer**: Full-screen modal with one-click print (`window.print()`) capability.

---

## 📁 Project Directory Structure

```text
├── index.html                  # HTML entry point with meta tags & Google Fonts
├── metadata.json               # Application metadata configuration
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite + Tailwind CSS configuration
├── README.md                   # Documentation & setup guide
└── src/
    ├── main.tsx                # Application mounting entry point
    ├── App.tsx                 # Root component orchestrating sections & modals
    ├── index.css               # Tailwind CSS v4 styling & print rules
    ├── types/
    │   └── portfolio.ts        # TypeScript data models & interfaces
    ├── data/
    │   └── portfolioData.ts    # Complete portfolio data repository
    └── components/
        ├── Navbar.tsx          # Sticky header with 3-zone layout & mobile menu
        ├── Hero.tsx            # Split hero with code preview & metrics strip
        ├── About.tsx           # Bio narrative, languages & strengths
        ├── Skills.tsx          # Categorized skill badges & architecture breakdown
        ├── Experience.tsx      # Internship timeline & responsibility highlights
        ├── Projects.tsx        # Project cards with interactive filter controls
        ├── ProjectModal.tsx    # Detailed architecture & system inspect modal
        ├── Education.tsx       # Degrees & verified certification cards
        ├── Contact.tsx         # Contact channels, copy actions & message form
        ├── Footer.tsx          # Navigation links, copyright & back-to-top button
        ├── ResumeModal.tsx     # Printable ATS-friendly resume viewer
        └── Toast.tsx           # Floating feedback notification component
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm**, **pnpm**, or **yarn**

### 1. Installation

Clone or extract the project directory and install dependencies:

```bash
npm install
```

### 2. Development Server

Start the local development server:

```bash
npm run dev
```

The application will be running at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build

To generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Build Tool**: Vite

---

## ✏️ Customization Guide

All personal data, projects, experience, education, and links are centralized in:
```text
src/data/portfolioData.ts
```

- To update contact links or bio, modify `personalInfo`.
- To add or edit technical skills, edit `skillCategories`.
- To update internships, modify `internshipExperiences`.
- To add new projects or architecture details, update `projects`.
- To add certifications, update `certifications`.

---

## 🚢 Deployment

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

---

## 📄 License
This project is open-source and free to use for personal portfolios.
