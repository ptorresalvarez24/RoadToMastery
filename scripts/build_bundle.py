#!/usr/bin/env python3
"""Build browser bundles from source JSX files."""

from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
JSX_BUNDLE_PATH = ROOT / "app.bundle.jsx"
JS_BUNDLE_PATH = ROOT / "app.bundle.js"

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
    JSX_BUNDLE_PATH.write_text("\n".join(chunks) + "\n")
    print(f"Wrote {JSX_BUNDLE_PATH.relative_to(ROOT)} from {len(SOURCE_FILES)} files.")

    subprocess.run(
        [
            "npx",
            "--yes",
            "esbuild",
            str(JSX_BUNDLE_PATH),
            "--loader:.jsx=jsx",
            "--format=iife",
            f"--outfile={JS_BUNDLE_PATH}",
        ],
        cwd=ROOT,
        check=True,
    )
    print(f"Wrote {JS_BUNDLE_PATH.relative_to(ROOT)}.")


if __name__ == "__main__":
    main()
