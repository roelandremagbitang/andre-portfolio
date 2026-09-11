# Roel Andre S. Magbitang — IT Student Portfolio

Personal portfolio website built as part of the SDLC project (Phase 3: Implementation).

**Live site:** `https://<your-github-username>.github.io/<repository-name>/`

---

## Project Structure

```
portfolio-site/
├── index.html      ← Semantic HTML5 single-page application
├── style.css       ← Pure CSS (custom properties, Grid, Flexbox)
├── script.js       ← Vanilla JS (nav, drawer, scroll-spy, animations)
├── resume.pdf      ← ⚠️ Add your resume PDF here before deploying
├── profile.jpg     ← ⚠️ Add your profile photo here (see instructions below)
└── README.md
```

### Adding your profile photo

1. Save your photo as **`profile.jpg`** (or `.png`, `.webp`) inside the `portfolio-site/` folder.
   - Rename it exactly to `profile.jpg`.
   - A square or portrait crop works best. The image is displayed in a circle, so center your face.
2. If no photo is provided, the site automatically shows your initials (**AM**) as a styled placeholder.


## Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it anything (e.g., `portfolio` or `andre-portfolio`).
4. Set visibility to **Public** (required for free GitHub Pages).
5. Do **not** initialize with a README — you already have one.
6. Click **Create repository**.

### Step 2 — Push the files

Open a terminal in the `portfolio-site/` folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio implementation"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Set branch to **`main`**, folder to **`/ (root)`**.
4. Click **Save**.

Your site will be live at:
```
https://<your-username>.github.io/<repo-name>/
```

> It may take 1–2 minutes to build on first deploy.

---

## Before You Deploy — Checklist

- [ ] Add `resume.pdf` to the `portfolio-site/` folder  
- [ ] Add your profile photo as `profile.jpg` to the `portfolio-site/` folder  
- [ ] Confirm your email address in `index.html` (already pre-filled)  
- [ ] Confirm your LinkedIn URL in `index.html` (already pre-filled)  
- [ ] Replace project visual placeholders with actual screenshots when available  
- [ ] Test on mobile before sharing the link  

---

## Technology Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (semantic) |
| Styles | Vanilla CSS (custom properties, Grid, Flexbox) |
| Behaviour | Vanilla JavaScript (ES2020, IIFE) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

No frameworks. No build step. No dependencies. Open `index.html` directly in any browser to preview.

---

*Part of SDLC Design & Implementation — De La Salle University OJT*
