# Elias Roro — Portfolio

Personal portfolio site. Rebuilt from the deployed site's recovered source and
updated with current content (September 2026).

## Edit your content

Almost everything lives in **`src/portfolio.js`** — bio, skills, education,
work experience, projects, contact info. Change the text, rebuild, redeploy.

- Resume PDF: replace `public/Elias-Roro-Resume.pdf` with a new file of the
  same name (or update `resumeLink` in `portfolio.js`).
- Logos in `src/assets/images/`: `logo-education.png` and `logo-company.png`
  are generic placeholders — swap in real logos anytime. Project thumbnails
  (`project-lovecare.png`, `project-game.png`, `project-music.png`) likewise.

## Run locally

```bash
npm install --legacy-peer-deps
npm start
```

## Build for deployment

```bash
npm run build
```

This creates `build/` — upload its contents to Netlify (drag & drop) or push
this repo to GitHub and connect it to Netlify for auto-deploys.

## Notes

- Sections for achievements, blogs, talks and podcast are hidden
  (`display: false` in `portfolio.js`) — flip them on and fill in content
  whenever you want them.
- The Twitter timeline embed is disabled (unreliable since the API changes);
  the social icons still link to the profile.
- Footer credits the developerFolio template the site is built on.
- Dark/light mode toggle is in the header.
