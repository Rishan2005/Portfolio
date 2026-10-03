# 🚀 Modern MCA Student & Software Developer Portfolio

A modern, responsive, recruiter-ready developer portfolio website built for **Master of Computer Applications (MCA)** students and aspiring software engineers. Built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

Designed with a sleek dark aesthetic, glassmorphism cards, subtle neon glows, smooth animations, interactive case study modals, and a **single central configuration file** that makes personalizing the entire site effortless.

---

## ✨ Features

- **🎨 Modern Dark Theme**: Dark slate/black canvas (`#05070e`) with electric blue and violet/purple accent gradients and backdrop-blur glassmorphic surfaces.
- **⚡ Single Configuration File**: Update your name, title, bio, stats, skills, projects, education, certifications, and contact channels all in one file: `src/data/portfolioData.js`.
- **💻 Hero Section with Interactive IDE Mockup**: Live code-snippet card with TypeScript syntax highlighting, floating tech tags (React, Node, Python, MySQL), and CTA buttons.
- **📊 Real Academic & Project Metrics**: Highlights Projects Completed, Technologies Mastered, Certifications, Degree & CGPA.
- **🛠️ Categorized Skills Matrix**: Filterable skills view (Programming, Web Development, Databases, AI/ML, Tools) with proficiency tags and highlights.
- **🚀 Featured Projects & Interactive Case Study Modal**:
  - Filter by category (*All, Full Stack, Web Development, AI/ML, Academic*).
  - Cards include live metrics, tech badges, GitHub repository links, and live preview buttons.
  - Clicking any card opens a modal displaying the **Problem Statement**, **Architecture Solution**, **Key Features**, and **Full Tech Stack**.
- **🎓 Timeline-Style Education Section**: Shows MCA, Bachelor's degree (BCA/B.Sc), CGPA/Percentages, relevant coursework, and academic honors.
- **📜 Verified Certifications Section**: Professional credentials with verification badges, issuing organizations, dates, and credential links.
- **📄 Resume Download & Preview**: Direct download trigger for `public/resume.pdf` with ATS document preview badge.
- **📬 Responsive Contact Form**: Client-side validation with real-time feedback, ready for 1-line integration with Formspree, EmailJS, or Web3Forms.
- **📱 100% Mobile-First Responsive**: Flawless layout across ultra-wide desktop (1920px), laptop (1440px), tablet (768px), and mobile phones (375px) with an animated mobile drawer menu.
- **🔍 SEO & Social Sharing Optimized**: Complete Open Graph, Twitter cards, meta descriptions, and Google Font typography pre-configured.
- **⚡ Vercel Ready**: Preconfigured with `vercel.json` for zero-configuration deployments with SPA route rewriting.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)

---

## 📁 Project Structure

```text
mca-portfolio/
├── public/
│   ├── favicon.svg          # Custom developer SVG icon
│   └── resume.pdf           # Place your real resume PDF here!
├── src/
│   ├── assets/              # Static local assets/images (optional)
│   ├── components/
│   │   ├── About.jsx        # Bio, degree, CGPA, stats & engineering pillars
│   │   ├── Certifications.jsx # Verified certification cards & verify links
│   │   ├── Contact.jsx      # Contact info & validated contact form
│   │   ├── Education.jsx    # Timeline with MCA, BCA, coursework & honors
│   │   ├── Footer.jsx       # Copyright, developer branding & quick links
│   │   ├── Hero.jsx         # Landing section, terminal mockup & CTAs
│   │   ├── IconHelper.jsx   # Safe dynamic icon resolver
│   │   ├── Navbar.jsx       # Sticky glass navbar & mobile hamburger menu
│   │   ├── ProjectCard.jsx  # Card with hover animations & metrics
│   │   ├── ProjectModal.jsx # Detailed problem/solution/features modal
│   │   ├── Projects.jsx     # Responsive grid & category filter tabs
│   │   ├── Resume.jsx       # Dedicated Resume download CTA & preview
│   │   └── Skills.jsx       # Categorized skills matrix with icons
│   ├── data/
│   │   ├── portfolioData.js # ⭐ SINGLE FILE TO CUSTOMIZE EVERYTHING ⭐
│   │   ├── projects.js      # Modular re-export
│   │   ├── skills.js        # Modular re-export
│   │   └── certifications.js # Modular re-export
│   ├── App.jsx              # Main layout & reading progress bar
│   ├── index.css            # Tailwind directives & glass utilities
│   └── main.jsx             # React entry point
├── index.html               # SEO meta tags, title & fonts
├── package.json             # Dependencies & scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind theme colors, glows & animations
├── vercel.json              # Vercel deployment configuration
└── vite.config.js           # Vite dev & build configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in terminal).

### 3. Build for Production
```bash
npm run build
```

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🎯 How to Customize in 2 Minutes

### 1. Update Personal Data (`src/data/portfolioData.js`)
Open `src/data/portfolioData.js`. You will find clearly commented sections:
- `personalInfo`: Replace name, email, GitHub URL, LinkedIn URL, location, and bio.
- `stats`: Update your number of projects, technologies, and current CGPA.
- `skillCategories`: Add, edit, or remove technologies.
- `projects`: Update your project titles, descriptions, live demo URLs, and GitHub links.
- `education`: Update your university name, start-end years, and CGPA.
- `certifications`: Update your certificate names, issuers, dates, and verification links.

### 2. Add Your Actual Resume
Replace the file at:
```text
public/resume.pdf
```
with your actual resume. Any file named `resume.pdf` placed in the `public/` directory will automatically be downloaded when recruiters click the **"Download Resume"** buttons!

### 3. Connect a Real Email Service to the Contact Form
In `src/components/Contact.jsx`, the form comes with instant validation and a smooth submission simulation. To forward messages directly to your email address:

#### Option A: Using [Formspree](https://formspree.io) (Free & No backend needed)
1. Sign up on [Formspree](https://formspree.io) and create a form with your email.
2. In `src/components/Contact.jsx`, uncomment the Formspree block:
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(formData)
});
```

#### Option B: Using [Web3Forms](https://web3forms.com) (Instant Access Key)
Submit directly via `https://api.web3forms.com/submit` using your access key.

---

## 🚀 Deployment Guide

### Deploying to GitHub & Vercel (Recommended)

#### Step 1: Initialize Git & Commit
Run these commands in your project root:
```bash
git init
git add .
git commit -m "Initial commit: Modern MCA Student Portfolio"
```

#### Step 2: Push to GitHub
1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `mca-portfolio`).
2. Run:
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/mca-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel
1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Select your `mca-portfolio` repository and click **"Import"**.
4. Vercel automatically detects **Vite**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**. Your site will be live within 45 seconds with a free `.vercel.app` URL and free SSL!

#### Step 4: Adding a Custom Domain (Optional)
1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Type your domain (e.g., `alexrivera.dev`).
3. Add the provided `CNAME` or `A` records to your DNS provider (e.g., Namecheap, GoDaddy, Cloudflare).

---

## 📝 License
MIT License. Free to use, adapt, and customize for your own developer career!
