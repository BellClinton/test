# AGENTS.md

## Cursor Cloud specific instructions

### Project Overview

This is a static informational website about cryptocurrency ("CryptoStart") built with plain HTML, CSS, and vanilla JavaScript. There are no build tools, no package manager, and no external dependencies.

### Running the Development Server

Serve the site with Python's built-in HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser.

### Key Notes

- **No dependencies to install** — no `package.json`, no `requirements.txt`, no build step.
- **No linter configured** — the project has no ESLint, Prettier, or other lint tooling.
- **No automated tests** — the project has no test framework or test files.
- **Static files only** — all content is served from `index.html`, `styles.css`, and `script.js` at the repository root.
- The JavaScript handles two interactive features: mobile navigation toggle and FAQ accordion expand/collapse.
- The site is written in Russian.
