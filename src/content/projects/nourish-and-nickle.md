---
title: Nourish and Nickle
summary: Compares groceries across Swiss supermarkets by health and by price, so our shopping list goes where it makes sense.
stage: in-progress
url: https://nourish-and-nickle.streamlit.app/
online: true
screenshots:
  - src: ../../assets/projects/nourish-and-nickle/compare.jpg
    alt: Comparing soy milk across stores, with the healthiest and the cheapest marked.
stack:
  - name: Python
    role: Collects prices from Migros, Aldi, Denner, Lidl and Otto's, and turns every price into CHF per 100 g, 100 ml or roll.
  - name: Open Food Facts
    role: The open food database behind each health score, from how processed a product is to its additives and saturated fat.
  - name: SQLite
    role: Keeps every product, price and score in one small database file.
  - name: Streamlit
    role: The app itself, with a comparison table and a shopping list per store, hosted on Streamlit Community Cloud.
  - name: GitHub Actions
    role: Refreshes the prices every Monday.
  - name: Claude Code
    role: My building partner. We designed and built it together.
---

We are a vegetarian household in Zurich that cares about additives and about prices. Comparing soy milk, tofu or müsli across five supermarkets by hand is impossible, so this app does it for us.

- **Price per unit.** Every pack size becomes CHF per 100 g, 100 ml or roll, so products compare directly.
- **A health score that fits us.** Each product starts at 100 and loses points for ultra-processing, risky additives and saturated fat, graded from A to E.
- **Honest about gaps.** When the data is missing, the product shows as unrated with a reason, rather than a confident wrong grade.
- **A shopping list per store**, so the weekly shop is split on evidence rather than guesswork.

The code is public on [GitHub](https://github.com/ikiochoa/nourish-and-nickle).
