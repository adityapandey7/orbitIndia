# orbitIndia

Orbit Technologies website, built with Next.js and exported as a static site for
GitHub Pages.

## Local development

```bash
npm ci
npm run dev
```

## Deployment

Pushing to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy.yml`. It builds the site for the
`/orbitIndia/` project path and deploys the static output to GitHub Pages.

The quote form is currently a front-end demo and does not send or store
submissions.
