# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TigerVidros is a static landing page for a Brazilian glass fabrication and installation business (São Paulo area). The site is in Portuguese (pt-BR) and uses no build tools or frameworks — pure HTML5, CSS3, and vanilla JavaScript.

## Running Locally

No installation needed. Serve the files with any static server:

```bash
python3 -m http.server 8000
# or
npx http-server
```

Then open `http://localhost:8000`. Hard-refresh with Cmd+Shift+R after edits.

## Architecture

Single-page site with three main files:

- [index.html](index.html) — All sections in one file: header, hero, services, portfolio, benefits, social links, reviews carousel, contact/footer
- [css/style.css](css/style.css) — All styles using CSS custom properties (design tokens in `:root`). Breakpoint at 768px for mobile.
- [js/main.js](js/main.js) — Three features: review carousel (auto-rotates every 5s, pauses on hover), hamburger menu toggle, header scroll effect

Customer review data lives in [data/reviews.json](data/reviews.json), but `main.js` currently uses a hardcoded array instead — the JSON is not fetched.

## Design Tokens

All visual constants are CSS variables defined at the top of [css/style.css](css/style.css):

- Colors: `--color-primary` (#2F5FBF), `--color-secondary` (#4FA3E3), `--color-bg` (#0F1115), `--color-text` (#F0F8FF)
- Spacing scale: `--s-1` (0.5rem) through `--s-8` (4rem)
- Typography: `--text-sm` through `--text-2xl`

Always use these variables rather than hardcoded values when adding styles.

## Key Business Details

- WhatsApp contact: `5511939031930` (used in multiple links throughout index.html)
- Dark theme throughout; social buttons use their respective brand colors (Instagram gradient, TikTok black, Facebook blue, WhatsApp green `#25D366`)
- Portfolio section uses gradient placeholder backgrounds — no real images yet