# Nayeem Hasan — Portfolio

Personal portfolio website built with **React + Vite**. Terminal/hacker dark aesthetic. Deployed automatically to **Cloudflare Pages** via GitHub on every push to `main`.

---

## 🗂 Project Structure

```
portfolio-v2/
├── public/
│   └── Nayeem_Hasan_CV.pdf        ← drop your CV here (git-ignored)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             ← sticky nav, hamburger, active section
│   │   ├── Hero.jsx               ← terminal card, typewriter, stats
│   │   ├── About.jsx              ← bio, social links, info card
│   │   ├── Experience.jsx         ← timeline with expand/collapse
│   │   ├── Projects.jsx           ← project cards
│   │   ├── Skills.jsx             ← animated skill bars
│   │   ├── Contact.jsx            ← form (Formspree), channel links
│   │   ├── Footer.jsx
│   │   ├── Cursor.jsx             ← custom glowing cursor
│   │   └── BackToTop.jsx
│   ├── hooks/
│   │   ├── useTypewriter.js       ← cycles role titles with typing effect
│   │   ├── useActiveSection.js    ← highlights nav link for current section
│   │   └── useScrollReveal.js     ← fade-in on scroll
│   ├── data/
│   │   └── content.js             ← ALL text content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example                   ← copy to .env and fill in values
├── .gitignore
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Updating Content

All text — experience, projects, skills, bio, stats — lives in one file:

```
src/data/content.js
```

Edit that file only. You never need to touch any component for content changes.

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Fill in your values:

```env
VITE_FORMSPREE_URL=https://formspree.io/f/your_form_id
```

> **Note:** All Vite env variables exposed to the browser must start with `VITE_`.
> Variables without that prefix are not available in the frontend build.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Open .env and fill in VITE_FORMSPREE_URL

# 3. Drop your CV in public/
cp /path/to/Nayeem_Hasan_CV.pdf public/

# 4. Start dev server
npm run dev
# → http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output → dist/
```

---

## 📬 Contact Form Setup (Formspree)

The contact form uses [Formspree](https://formspree.io) — no backend needed.

1. Go to **[formspree.io](https://formspree.io)** → Sign up free
2. **New Form** → name it "Portfolio Contact"
3. Copy your endpoint URL e.g. `https://formspree.io/f/xyzabcde`
4. Paste it into `.env` as `VITE_FORMSPREE_URL`
5. For production — add it as an environment variable in Cloudflare Pages

Free plan: **50 submissions/month** + email notifications on every submission.

---

## ☁️ Deploying to Cloudflare Pages

### One-time setup

**1. Push to GitHub**
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/x-slasher/portfolio.git
git push -u origin main
```

**2. Create Cloudflare Pages project**
- Go to [cloudflare.com](https://cloudflare.com) → **Workers & Pages** → **Create application**
- Select **Pages** → **Connect to Git** → choose your repo

**3. Configure build settings**

| Field | Value |
|---|---|
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |

Under **Environment variables** add:

| Variable | Value |
|---|---|
| `NODE_VERSION` | `18` |
| `VITE_FORMSPREE_URL` | `https://formspree.io/f/your_form_id` |

**4. Deploy**

Click **Save and Deploy**. Done. You get a free URL:
```
https://nayeem-portfolio.pages.dev
```

### Every future deploy

```bash
git add .
git commit -m "update content"
git push origin main
# Cloudflare auto-deploys in ~1 minute
```

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 4 |
| Styling | CSS custom properties — no Tailwind |
| Fonts | JetBrains Mono · Syne · DM Sans |
| Form handling | Formspree |
| Hosting | Cloudflare Pages |
| CI/CD | Cloudflare Pages (auto-deploy on push) |