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

## COST-SAVING MODE (HARD)

Activate when the user says "modo econômico" or "cost-saving mode". Default: ON.

### Core Principle
Minimize tokens in BOTH directions:
- Fewer inputs (no file reads)
- Smaller outputs (no explanations)

---

### Rules

1. **Never use Edit, Write, or Read tools.**
   - Do NOT open files.
   - Do NOT inspect the repo.
   - Assume context from CLAUDE.md + user prompt only.
   - If missing context, ask user to paste snippet.

2. **Output ONLY code.**
   - No explanations, no comments outside code.
   - No summaries before or after.

3. **One block per file.**
   - Always include file path as first line comment:
     ```
// path/to/file.ext
     ```

4. **Use DIFF format always (mandatory).**
   - Only changed lines
   - Include max 2 lines of context
   - NEVER output full file unless:
     - file is new OR
     - file < 20 lines

5. **Be minimalistic in code changes.**
   - Do not refactor
   - Do not “improve” unrelated parts
   - Touch only what was explicitly requested

6. **No proactive suggestions.**
   - Do not propose improvements
   - Do not anticipate future changes
   - Do exactly what was asked

7. **No redundancy.**
   - Avoid repeated patterns
   - Avoid long variable names when shorter is clear

8. **Prefer inline solutions over structure changes.**
   - Avoid creating new files
   - Avoid abstractions unless strictly necessary

9. **Limit reasoning depth.**
   - Choose first valid solution
   - Do not explore alternatives

10. **Stop immediately after last code block.**
    - No trailing text

---

### When to temporarily relax rules

Only relax if user explicitly asks for:
- explanation
- architecture
- refactor
- debugging complex issue

Otherwise: stay strict.

---

### Execution Policy (Cost Control)

**Default: DO NOT execute changes.**
- Do NOT use Edit/Write/Bash tools
- Do NOT modify files directly

**Always:**
- Provide code changes in markdown blocks
- Follow COST-SAVING MODE rules strictly

**Only execute if explicitly instructed:**
- "implement this"
- "apply changes"
- "edit the files"
- "make the changes"

**Otherwise:**
- Stay in suggestion mode
- Do not take autonomous actions

---

### Deactivation

User must say:
- "modo normal"
- "normal mode"