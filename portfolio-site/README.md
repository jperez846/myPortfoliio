# Portfolio Site

Personal portfolio built with React, Vite, and Motion. Deployed via GitHub Actions → AWS S3 → CloudFront.

## Running Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Other commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Resume PDF

Place your resume PDF at `public/resume03.pdf`. The path is configured in `src/App.jsx` via the `resumePath` prop passed to the `Resume` component.

## Tech Stack

- **React 19** + **React Router 7**
- **Vite 7** — bundler and dev server
- **Motion** — animations (`motion/react`)
- **CSS Modules** — scoped component styles
- **JetBrains Mono** + **Syne** — fonts via Google Fonts

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and syncs it to S3, then invalidates the CloudFront distribution.
