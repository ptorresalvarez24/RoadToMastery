#!/usr/bin/env python3
"""Static server + tiny JSON state API stored inside repository."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import base64

ROOT = Path(__file__).resolve().parent
STORAGE_DIR = ROOT / "storage"
STATE_FILE = STORAGE_DIR / "app_state.json"
MEDIA_DIR = STORAGE_DIR / "media"


def ensure_state_file() -> None:
    STORAGE_DIR.mkdir(exist_ok=True)
    MEDIA_DIR.mkdir(exist_ok=True)
    if not STATE_FILE.exists():
        STATE_FILE.write_text(
            json.dumps(
                {
                    "currentWeek": 3,
                    "userResources": [],
                    "weekProgress": {},
                    "weekDetails": {},
                },
                indent=2,
            )
            + "\n"
        )


def load_state() -> dict:
    ensure_state_file()
    try:
        return json.loads(STATE_FILE.read_text())
    except json.JSONDecodeError:
        return {}


def save_state(payload: dict) -> None:
    ensure_state_file()
    STATE_FILE.write_text(json.dumps(payload, indent=2) + "\n")


class Handler(SimpleHTTPRequestHandler):
    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        if self.path == "/api/state":
            self._send_json(200, load_state())
            return
        super().do_GET()

    def do_POST(self) -> None:
        if self.path == "/api/upload":
            self.handle_upload()
            return
        if self.path != "/api/state":
            self._send_json(404, {"error": "Not found"})
            return
        try:
            size = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(size).decode("utf-8") if size > 0 else "{}"
            payload = json.loads(body)
            if not isinstance(payload, dict):
                raise ValueError("Payload must be an object")
            save_state(payload)
            self._send_json(200, {"ok": True})
        except Exception as exc:  # noqa: BLE001
            self._send_json(400, {"ok": False, "error": str(exc)})

    def handle_upload(self) -> None:
        try:
            size = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(size).decode("utf-8") if size > 0 else "{}"
            payload = json.loads(body)
            name = str(payload.get("name") or "upload.bin")
            mime = str(payload.get("type") or "application/octet-stream")
            data_url = str(payload.get("data") or "")
            if not data_url.startswith("data:") or "," not in data_url:
                raise ValueError("Expected base64 data URL payload")
            safe_name = "".join(c for c in name if c.isalnum() or c in ("-", "_", ".")).strip(".") or "upload.bin"
            stem, dot, suffix = safe_name.rpartition(".")
            ext = f".{suffix.lower()}" if dot else ".bin"
            unique = f"{Path(stem or 'upload').stem}-{abs(hash(data_url)) % 10_000_000}{ext}"
            out_path = MEDIA_DIR / unique
            raw_b64 = data_url.split(",", 1)[1]
            out_path.write_bytes(base64.b64decode(raw_b64))
            self._send_json(200, {
                "ok": True,
                "url": f"/storage/media/{unique}",
                "name": name,
                "type": mime,
            })
        except Exception as exc:  # noqa: BLE001
            self._send_json(400, {"ok": False, "error": str(exc)})


def main() -> None:
    ensure_state_file()
    server = ThreadingHTTPServer(("0.0.0.0", 8000), Handler)
    print("Serving on http://localhost:8000")
    print(f"State file: {STATE_FILE.relative_to(ROOT)}")
    server.serve_forever()


if __name__ == "__main__":
    main()
