# My Personal Portfolio Website

Built with Flask and published as a static site on GitHub Pages.

👉 https://amang3196.github.io/

## Where things live

| File / folder | What it holds |
|---|---|
| `data.py` | All the content: bio, education, jobs, links. Edit this to update the site. |
| `templates/` | Jinja2 HTML. `home.html` is the single page; `base.html` holds the `<head>`, navbar and footer. |
| `static/css/style.css` | Styling. Colours are defined once at the top. |
| `static/` | Images and the resume PDF. |
| `app.py` | Flask routes: which URL shows which template. |
| `freeze.py` | Exports the site to plain HTML in `build/`. |
| `.github/workflows/deploy.yml` | Builds and deploys to GitHub Pages on every push to `main`. |

## Run locally

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

flask run --debug          # http://127.0.0.1:5000, reloads on save
```

To preview the exact static files GitHub Pages will serve:

```bash
python freeze.py
python -m http.server -d build   # http://localhost:8000
```

## Deploy

Push to `main`. The GitHub Action freezes the site and publishes it.
(One-time setup: repo **Settings → Pages → Source: GitHub Actions**.)
