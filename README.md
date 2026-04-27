# Road To Mastery

Single-page React prototype loaded directly in the browser.

## Project Layout

- `Road To Mastery.html` — main entry page.
- `app.bundle.jsx` — generated intermediate JSX bundle from source files.
- `app.bundle.js` — generated browser-ready bundle loaded by the HTML page.
- `components/` — feature/page components and shared data.
- `tweaks-panel.jsx` — reusable tweak controls.
- `scripts/build_bundle.py` — regenerates `app.bundle.jsx` and `app.bundle.js` from source files.

## Run locally

Use a local HTTP server (recommended):

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/Road%20To%20Mastery.html
```

## Rebuild bundle after edits

```bash
python scripts/build_bundle.py
```
