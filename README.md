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

Use the built-in server (recommended, enables repo-backed saving):

```bash
python serve.py
```

Then open:

```text
http://localhost:8000/Road%20To%20Mastery.html
```

## Rebuild bundle after edits

```bash
python scripts/build_bundle.py
```

## Persistence

- App state is saved to `storage/app_state.json` when running with `python serve.py`.
- This includes:
  - current week selection,
  - week completion slider values,
  - added resources and their status updates,
  - week notes / task checklist / devlog entries.
- If API calls fail (for example, static-only hosting), the app still keeps local browser storage as a fallback.
