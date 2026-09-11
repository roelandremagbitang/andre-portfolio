# Roel Andre S. Magbitang — IT Student Portfolio

Personal portfolio website built as part of the SDLC project (Phase 3: Implementation).

**Live site:** `https://<your-github-username>.github.io/<repository-name>/`

---

## Project Structure

```
portfolio-site/
├── images/
│   └── projects/
│       ├── network-design.jpg    ← ⚠️ Add screenshot for Project 1
│       ├── forumfriends.jpg      ← ⚠️ Add screenshot for Project 2
│       ├── malware-analysis.jpg  ← ⚠️ Add screenshot for Project 3
│       └── README.md             ← Filename reference guide
├── index.html      ← Semantic HTML5 single-page application
├── style.css       ← Pure CSS (custom properties, Grid, Flexbox)
├── script.js       ← Vanilla JS (nav, drawer, scroll-spy, animations)
├── resume.pdf      ← ⚠️ Add your resume PDF here before deploying
├── profile.jpg     ← ⚠️ Add your profile photo (see instructions below)
└── README.md
```

### Adding project screenshots

1. Take a screenshot of each finished project.
2. Name and save the files **exactly** as listed above (case-sensitive on Linux/GitHub Pages):
   - `images/projects/network-design.jpg`
   - `images/projects/forumfriends.jpg`
   - `images/projects/malware-analysis.jpg`
3. Recommended size: **1200 × 900 px** (4:3 ratio) or **1280 × 720 px** (16:9).
4. Supported formats: `.jpg` `.jpeg` `.png` `.webp` — rename to match the expected filename.
5. If a file is missing, the site automatically displays a styled icon placeholder — nothing breaks.


### Adding your profile photo

1. Save your photo as **`profile.jpg`** (or `.png`, `.webp`) inside the `portfolio-site/` folder.
   - Rename it exactly to `profile.jpg`.
   - A square or portrait crop works best. The image is displayed in a circle, so center your face.
2. If no photo is provided, the site automatically shows your initials (**AM**) as a styled placeholder.


### Adding Credly badge links

The certification cards link to your Credly profile. Replace the placeholder URLs in `index.html`:

1. Open `index.html` and search for `YOUR-CREDLY-USERNAME`.
2. Replace each occurrence with your actual Credly badge URL.
3. You can find each badge URL by:
   - Going to [credly.com](https://www.credly.com) → log in → open the badge → copy the URL.
   - Format is usually `https://www.credly.com/badges/BADGE-ID` for a specific badge,
     or `https://www.credly.com/users/YOUR-USERNAME/badges` for your profile page.

> **Note:** The Lean Six Sigma White Belt may be issued by CSSC and not on Credly.
> If so, link to your CSSC verification page instead.

---

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
- [ ] Add project screenshots to `images/projects/` using the exact filenames above
- [ ] Replace `YOUR-CREDLY-USERNAME` in `index.html` with your actual Credly badge URLs (search for the string to find all 3)
- [ ] Confirm your email address in `index.html` (already pre-filled)
- [ ] Confirm your LinkedIn URL in `index.html` (already pre-filled)
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
