"""Capture real SABAN CORP pages for the device screens (local development only).

Requires Python Playwright and ImageMagick, not application dependencies.
Start Vite first. No submissions or external project captures are performed.
"""
from pathlib import Path
import os
import subprocess
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/images/previews"
OUT.mkdir(parents=True, exist_ok=True)
BASE = os.environ.get("CAPTURE_BASE_URL", "http://127.0.0.1:5173")

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(executable_path="/usr/bin/chromium", args=["--no-sandbox"])
    for name, width, height, section in [
        ("desktop", 1440, 900, None), ("mobile", 390, 844, None),
        ("tablet", 768, 1024, "#solutions"),
    ]:
        page = browser.new_page(viewport={"width": width, "height": height}, reduced_motion="reduce")
        page.goto(BASE, wait_until="networkidle")
        page.evaluate("document.fonts.ready")
        if section:
            page.locator(section).evaluate("el => window.scrollTo(0, el.offsetTop - 76)")
        page.wait_for_timeout(200)
        png = OUT / f"saban-{name}.png"
        page.screenshot(path=str(png))
        subprocess.run(["magick", str(png), "-strip", "-quality", "84", "-define", "webp:method=6", str(OUT / f"saban-{name}.webp")], check=True)
        png.unlink()
        print(name, width, height, (OUT / f"saban-{name}.webp").stat().st_size)
        page.close()
    browser.close()
