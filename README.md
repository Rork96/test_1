# Pavlo — Dark‑Fantasy Phonk / VHS Portfolio (v2)

Single‑file React site with Motion One micro‑interactions, Lottie accents, a scroll‑scrub gallery, CRT grain, spotlight cursor, 3D tilt cards, and a keyboard command palette.

## Quick start
1. Replace your repo’s `index.html` with this version.
2. Commit to `main` and wait ~1–2 minutes for GitHub Pages.
3. **Formspree:** edit the form `action` to your Formspree ID.
4. **Telegram:** set `TELEGRAM_USERNAME`; optionally set `TELEGRAM_WEBHOOK` to an n8n/Worker endpoint.
5. Add `phonk.mp3` next to `index.html` to enable the music toggle (optional).

## Scroll gallery
- Update each frame’s `<iframe>` `src` with your live demo URLs.
- If a site blocks iframes, users still get a “Open demo” button in the case modal.

## Lottie
- Replace placeholder URLs in `LOTTIES` array with small, looped JSON animations from LottieFiles.
- Keep files lightweight (<150KB each) for best perf.

## Command palette
- Press **⌘K / Ctrl‑K** to jump between sections or open external links.

## Performance
- 60fps transforms, lazy iframes, reduced‑motion friendly. All client‑side via CDNs.
