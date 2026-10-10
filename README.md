# Shekhar Kadam — Portfolio

Personal portfolio site built with React, TypeScript, and Vite.

## Run locally

Requires Node `^20.19.0` or `>=22.12.0` (Vite 8 does not install on older Node).

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/data/profile.ts`: summary, experience, selected work, skills, and links.
Years of experience are calculated from `CAREER_START`, so they update automatically.
Replace `public/Shekhar_Kadam_Resume.pdf` to update the downloadable resume.

## Deployment

Hosted on Vercel, connected to this GitHub repo. Every push to `main` deploys to production automatically.

The site builds to static files in `dist/`, so it also works on Netlify or Cloudflare Pages
(build command `npm run build`, output directory `dist`). For a GitHub Pages project site,
build with `VITE_BASE_PATH=/<repo-name>/`.
