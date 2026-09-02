# 🚀 Modern Full-Stack & AI Engineer Portfolio

A developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Web Audio API**.

---

## ✨ Key Features

- **⚡ Blazing Fast Architecture**: Next.js 14 App Router with static generation, zero layout shift, and sub-50ms response times.
- **🎨 4 Interactive Themes**: Dark Slate, OLED Midnight, Cyber Neon, and Clean Light — switchable on the fly with persistent preference storage.
- **⌨️ Global Command Palette (`⌘K` / `Ctrl+K`)**: Instant search and keyboard navigation across projects, skills, career history, resume actions, and theme toggling.
- **🛠️ Interactive Engineering Sandbox**:
  - **AI Agent DAG Simulator**: Real-time simulated tool-calling reasoning loop.
  - **Token Bucket Rate Limiter**: Live Redis-inspired sliding window algorithm test with request throttling.
  - **Vector Semantic Search**: Cosine similarity score matcher for vector embeddings.
- **📂 Projects Catalog with Deep-Dive Case Studies**:
  - Multi-category filtering (AI & Agents, Full-Stack SaaS, Cloud & DevOps, Open Source)
  - Real-time text search
  - High-impact metrics badges
  - Detailed case study modals with problem statements, architectural layers, and direct repo links
- **📊 Interactive Skill Matrix**: Categorized proficiency visualizers across Frontend, Backend, AI & LLMs, and DevOps.
- **💼 Career & Contributions Timeline**: Role history with metrics-driven achievements and tech tags.
- **💬 Interactive Contact & Direct Channels**:
  - Functional contact form with dynamic category selector and celebratory confetti animation
  - 1-click clipboard copy for email and terminal quick-run command
  - Live San Francisco (PST) timezone clock indicator
  - FAQ Accordion
- **📄 Interactive Resume CV Modal**: Formatted, printable (`Ctrl/Cmd+P`), and downloadable resume view.
- **🔊 Zero-Asset Synthesized UI Sounds**: Tactile audio feedback built with the browser's native Web Audio API (toggleable on/off).

---

## 🗂️ Project Structure

```
├── app/
│   ├── globals.css           # Global theme variables, animations & glassmorphism
│   ├── layout.tsx            # App root layout, SEO metadata & ThemeProvider
│   └── page.tsx              # Main page orchestrating all sections
├── components/
│   ├── Navbar.tsx            # Floating glass header, command palette trigger & theme selector
│   ├── Hero.tsx              # Dynamic hero, animated role cycler, stats & quick terminal
│   ├── About.tsx             # Background narrative, philosophy & tooling
│   ├── Projects.tsx          # Filterable project showcase & search
│   ├── ProjectModal.tsx      # Case study drawer with architectural breakdown
│   ├── Skills.tsx            # Categorized skills matrix & proficiency bars
│   ├── Experience.tsx        # Career milestone timeline with achievements
│   ├── InteractivePlayground.tsx # Live simulated architecture & AI playground
│   ├── Testimonials.tsx      # Peer & leadership endorsements
│   ├── Articles.tsx          # Engineering insights & system design writeups
│   ├── Contact.tsx           # Contact form, socials, timezone & FAQ
│   ├── ResumeModal.tsx       # Printable & downloadable resume CV
│   ├── CommandPalette.tsx    # Global keyboard shortcut search (⌘K)
│   ├── Footer.tsx            # Live local clock, links & system operational status
│   └── ThemeContext.tsx      # Multi-theme state & Web Audio synthesizer
├── data/
│   └── portfolio-data.ts     # Developer profile, projects, skills, experiences & FAQs
├── types/
│   └── portfolio.ts          # Complete TypeScript interfaces
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🛠️ How to Customize Your Portfolio

To customize this portfolio with your own personal details, update `data/portfolio-data.ts`:

1. **Personal Profile**: Change `developerProfile` (Name, Title, Roles, Bio, Social links, Email, Location).
2. **Projects**: Add or edit projects in `projectsData` (Titles, tags, metrics, architecture layers, GitHub links).
3. **Skills**: Modify `skillCategories` to match your core technologies.
4. **Experience**: Update `experienceData` with your career history and achievements.
5. **Insights / Articles**: Edit `articlesData` with your own publications or blog links.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (outputs static site to /out)
npm run build

# Start production server
npm run start
```

---

## 🌐 Deploying to GitHub Pages

This portfolio is configured for static export to **GitHub Pages**.

### Method 1: Automated CI/CD with GitHub Actions (Recommended)

1. Create a repository on GitHub (e.g. `portfolio` or `<your-username>.github.io`) and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. On GitHub, navigate to your repository:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, select **GitHub Actions**

3. That's it! The included [deploy.yml](file:///.github/workflows/deploy.yml) workflow will automatically build and deploy your site whenever you push changes to `main` (or `master`).

> **Note on Base Path:**
> - If your repository is `<your-username>.github.io` (or using a custom domain), the site will be served from the root URL (`/`).
> - If your repository is a project repo like `https://github.com/<your-username>/portfolio`, the build automatically configures `basePath: '/portfolio'`.

---

### Method 2: Manual Deployment from CLI

You can also deploy directly from your local terminal using the `gh-pages` package:

```bash
# Deploys the static /out folder to the 'gh-pages' branch
npm run deploy
```

Then in **Settings** > **Pages**, select **Deploy from a branch** and choose the `gh-pages` branch.

