# Certifications & Projects Portfolio (Vite + React)

A modern, minimal, and professional portfolio to showcase certifications and top GitHub projects. Built with React (Vite), Tailwind CSS, and Framer Motion. The UI is inspired by my personal portfolio style at [aniketk-portfolio.vercel.app](https://aniketk-portfolio.vercel.app/).

## Highlights
- Clean, aggressive visuals with subtle micro-animations
- Dark mode with a persistent toggle
- Data-driven sections for certifications and curated projects
- Fast builds and static hosting via GitHub Pages

## Tech Stack
- React + Vite
- Tailwind CSS (custom animations)
- Framer Motion (micro-animations)
- React Icons

## Repository Structure
```
/ (repo root)
├─ certification-portfolio/     # Vite + React app (source of truth)
│  ├─ public/certificates/      # PDF files (served via GitHub Pages)
│  ├─ src/components/           # Navbar, Hero, Certificates, Projects
│  ├─ src/data/                 # certificates.json, projects.json
│  ├─ index.html                # Inter font + metadata
│  ├─ tailwind.config.js        # Tailwind + custom keyframes
│  ├─ postcss.config.cjs        # PostCSS config for Tailwind
│  └─ vite.config.js            # base set to /certification-portfolio/
├─ .github/workflows/deploy.yml # Builds the app and deploys dist to gh-pages
├─ LICENSE
└─ README.md (this file)
```

## Local Development
```bash
cd certification-portfolio
npm install
npm run dev
```
The dev server runs at http://localhost:5173/

## Add Certificates
- Put PDFs in `certification-portfolio/public/certificates/`
- Add entries to `certification-portfolio/src/data/certificates.json`
  - Use relative URLs like `certificates/Your Certificate.pdf`

## Add Projects
- Curate top/interesting repos in `certification-portfolio/src/data/projects.json`
- Each entry supports: name, description, URL, stars, tech, topics

## Deploy (GitHub Pages)
Automatic on push to `main`.
- Workflow builds `certification-portfolio` and publishes `dist` to `gh-pages`
- Ensure repo Settings → Pages source = `gh-pages` branch, root
- Site URL: `https://<your-username>.github.io/certification-portfolio/`

## Credits / Inspiration
- UI inspiration: [aniketk-portfolio.vercel.app](https://aniketk-portfolio.vercel.app/)
- Actions: `peaceiris/actions-gh-pages`

## License
MIT 