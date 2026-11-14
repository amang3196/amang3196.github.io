# My Personal Portfolio Website

Built with [Astro](https://astro.build) and published as a static site on GitHub Pages.

👉 https://amang3196.github.io/

## Where things live

| File / folder | What it holds |
|---|---|
| `src/data/site.ts` | All the content: bio, stats, achievements, jobs, education, fun facts, links. Edit this to update the site. |
| `src/components/` | One file per section of the page (`Hero.astro`, `Experience.astro`, ...), plus `Header`, `Footer` and `Icon`. |
| `src/layouts/Base.astro` | The `<head>` (title, link previews), header and footer shared by every page. |
| `src/pages/` | `index.astro` is the single page; `404.astro` is shown for unknown URLs. |
| `src/styles/global.css` | Styling. Colours are defined once at the top. |
| `src/assets/` | Images. Astro resizes them and converts them to WebP at build time. |
| `public/` | Files served as-is, such as the resume PDF. |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main`. |

## Run locally

Requires [Node.js](https://nodejs.org) 22.23.4 or newer (the LTS version is recommended).

```bash
npm install
npm run dev        # http://localhost:4321, reloads on save
```

To preview the exact static files GitHub Pages will serve:

```bash
npm run build      # writes the site to dist/
npm run preview
```

`npm run check` type-checks the project.

## Common edits

- **Change text, jobs or links:** edit `src/data/site.ts`.
- **Replace the resume:** put the new PDF in `public/` and update `RESUME_FILE` in `src/data/site.ts`.
- **Add an image:** put it in `src/assets/`, import it at the top of `src/data/site.ts`, and use it in the data.
- **Change colours:** edit the variables at the top of `src/styles/global.css` (the site is always dark).

## Deploy

Push to `main`. The GitHub Action builds the site and publishes it.
(One-time setup: repo **Settings → Pages → Source: GitHub Actions**, which is already set for this repo.)
