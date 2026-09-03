# Aaditya Lanjekar — Developer Portfolio

A production-ready, fully responsive personal portfolio built with **React.js, Vite, Tailwind CSS, and Framer Motion**. Dark-mode-first design with a violet/cyan gradient identity, glassmorphism cards, and smooth scroll-reveal animations.

---

## ✨ Features

- Fully responsive, mobile-first layout
- Framer Motion page-load, scroll-reveal, and hover animations
- Glassmorphism cards + gradient accents throughout
- Animated typing effect in the hero section
- Dark / light mode toggle (persisted in `localStorage`)
- Scroll progress indicator bar
- Back-to-top button
- Custom cursor (desktop only, auto-disabled on touch/mobile)
- Project filtering (All / Full Stack / Frontend)
- Contact form with client-side validation (opens a pre-filled email — no backend needed)
- Animated skill proficiency bars
- SEO meta tags + Open Graph + Twitter Card tags
- Accessible: visible focus states, semantic HTML, `prefers-reduced-motion` respected

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── Aaditya_Lanjekar_Resume.pdf   ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── LoadingScreen.jsx
│   │       ├── ScrollProgress.jsx
│   │       ├── BackToTop.jsx
│   │       └── CustomCursor.jsx
│   ├── data/
│   │   └── portfolio.js        ← all your content lives here
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   ├── useTypingEffect.js
│   │   └── useScrollReveal.js
│   ├── utils/
│   │   └── animations.js       ← Framer Motion variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume

Drop your resume PDF into `public/` and name it `Aaditya_Lanjekar_Resume.pdf` (or update the path in `src/data/portfolio.js` → `personalInfo.resumeUrl`).

### 3. Set up the contact form (EmailJS)

The contact form sends submissions straight to your Gmail using [EmailJS](https://www.emailjs.com) — no backend server required.

1. **Create a free account** at [emailjs.com](https://www.emailjs.com) (200 emails/month free).
2. **Add an email service**: Dashboard → *Email Services* → *Add New Service* → choose **Gmail** → connect your Gmail account (`aadityalanjekar.dev@gmail.com`) and authorize it. Copy the **Service ID**.
3. **Create a template**: Dashboard → *Email Templates* → *Create New Template*. Set it up like this:
   - **To Email**: `{{to_email}}`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
   - **Subject**: `{{subject}}`
   - **Content**:
     ```
     New message from your portfolio site:

     Name: {{from_name}}
     Email: {{from_email}}

     {{message}}
     ```
   - Save and copy the **Template ID**.
4. **Get your Public Key**: Dashboard → *Account* → *General* → copy the **Public Key**.
5. **Add the keys to your project**:
   ```bash
   cp .env.example .env
   ```
   Then open `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. Restart the dev server (`npm run dev`) so Vite picks up the new env vars.

**On Vercel:** add the same three variables under Project Settings → Environment Variables before deploying (or redeploy after adding them). Without these set, the form automatically falls back to opening the visitor's email client instead of failing silently.

### 4. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:5173`.

### 5. Build for production

```bash
npm run build
```

Output goes to `dist/`.

### 6. Preview the production build locally

```bash
npm run preview
```

---

## ✏️ Editing Content

Everything you'll want to change lives in **`src/data/portfolio.js`**:

- `personalInfo` — name, role, tagline, contact details, social links
- `stats` — the 4 stat cards in the About section
- `skills` — skill category cards
- `skillLevels` — the proficiency progress bars
- `experience` — work history timeline
- `projects` — project showcase cards (set `featured: true` on the one you want highlighted at the top)
- `education` — degree cards
- `certifications` — certification cards
- `navLinks` — navbar / footer navigation items

Colors and design tokens (palette, fonts, animations, shadows) live in **`tailwind.config.js`** and **`src/index.css`**.

---

## 🌐 Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the build command (`npm run build`) and output directory (`dist`) automatically.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework Preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Environment / domain

No environment variables are required for hosting itself, but **the contact form needs the three `VITE_EMAILJS_*` variables** set in your Vercel project (Project Settings → Environment Variables) for it to actually deliver to your Gmail — see the EmailJS setup section above. Without them, the form gracefully falls back to a `mailto:` link.

Once deployed, also update:
- `index.html` → `og:url`, `twitter:url` meta tags with your real domain
- `public/robots.txt` → sitemap URL
- `src/data/portfolio.js` → any placeholder links (e.g. the Smart Job Portal GitHub link, live demo URLs)

---

## 🧩 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | React Icons (Feather + Simple Icons) |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (code/labels) |

---

## ♿ Accessibility & Performance Notes

- All interactive elements have visible focus states via Tailwind's default ring utilities plus custom `:focus` styling on form inputs.
- `prefers-reduced-motion` is respected — animations collapse to near-instant for users who request reduced motion.
- Images use semantic alt patterns where applicable (swap in real photos and add `alt` text when you replace the avatar placeholder).
- Code-split bundles (vendor / motion / icons) keep the initial JS payload lean.
- Run a Lighthouse audit after deploying and swapping in a real profile photo/resume to confirm the 95+ target — un-optimized image uploads are usually the only thing that drags the score down.

---

## 📝 License

This codebase is yours to use, modify, and deploy as your personal portfolio.
