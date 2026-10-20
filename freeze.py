"""Export the Flask site as plain HTML files into build/ for GitHub Pages.

    python freeze.py

SITE_URL is where the site will live. The GitHub Actions workflow sets it
automatically (e.g. https://amang3196.github.io/aman-garg-multipage/), so links
work under the repo sub-path. Locally it defaults to "/" so you can preview with:

    python -m http.server -d build
"""
import os

from flask_frozen import Freezer

from app import app

app.config["FREEZER_BASE_URL"] = os.environ.get("SITE_URL", "/")
app.config["FREEZER_DESTINATION"] = "build"
app.config["FREEZER_REMOVE_EXTRA_FILES"] = True

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()
    print("Site built in build/")
