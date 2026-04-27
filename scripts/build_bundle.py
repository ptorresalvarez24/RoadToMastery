#!/usr/bin/env python3
"""Build a single JSX bundle for browser Babel runtime loading."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUNDLE_PATH = ROOT / "app.bundle.jsx"

SOURCE_FILES = [
    "tweaks-panel.jsx",
    "components/data.jsx",
    "components/ui.jsx",
    "components/Dashboard.jsx",
    "components/Timeline.jsx",
    "components/WeekDetail.jsx",
    "components/Resources.jsx",
    "components/Portfolio.jsx",
    "components/CaseStudy.jsx",
    "components/App.jsx",
]


def main() -> None:
    chunks = [
        "// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.",
        "// Run: python scripts/build_bundle.py",
        "",
    ]
    for rel in SOURCE_FILES:
        src_path = ROOT / rel
        text = src_path.read_text()
        chunks.append(f"// --- BEGIN {rel} ---")
        chunks.append(text.rstrip())
        chunks.append(f"// --- END {rel} ---")
        chunks.append("")
    BUNDLE_PATH.write_text("\n".join(chunks) + "\n")
    print(f"Wrote {BUNDLE_PATH.relative_to(ROOT)} from {len(SOURCE_FILES)} files.")


if __name__ == "__main__":
    main()
