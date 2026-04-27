# Road To Mastery

A lightweight single-page web app to track a 12-week Technical Artist curriculum.

## Features

- Curriculum checklist for all 12 weeks.
- Weekly updates with file and screenshot attachments.
- Resource library grouped by curriculum section.
- Portfolio showcase for final project uploads.
- Progress dashboard with completion analytics.
- Searchable weekly updates.
- Local backup export/import (JSON).
- Light/dark theme toggle.

## Run locally

### Option A (recommended in this environment)

```bash
./serve.sh 4173
```

Then open:

- `http://localhost:4173` (if browsing from same machine), or
- forwarded port URL for `4173` in your workspace environment.

### Option B (without script)

```bash
python3 -m http.server 4173 --directory .
```

### Stop server

Press `Ctrl+C` in the terminal running the server.

## Data storage

Data is saved in browser `localStorage`.
