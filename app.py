from datetime import date

from flask import Flask, render_template

import data

app = Flask(__name__)


@app.context_processor
def inject_site_data():
    # Makes everything in data.py available in every template, e.g. {{ site.NAME }}
    return {"site": data, "year": date.today().year}


# The whole site is one page; the navbar links jump to sections on it.
@app.route("/")
def home():
    return render_template("home.html")


# GitHub Pages serves 404.html for any unknown URL.
@app.route("/404.html")
def not_found_page():
    return render_template("404.html")


@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(debug=True)
