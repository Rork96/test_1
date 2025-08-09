# Pavlo — Dark‑Fantasy Phonk / VHS Portfolio

Single-file React portfolio with CRT/VHS vibe, starfield, glitch micro‑interactions, scroll‑reveal, and **real demo embedding**.

## Quick start
1. Open `index.html` in a browser.
2. Edit projects in the `CASES` array (near the top of the `<script type="text/babel">`).  
   - Add `liveDemo` with an **https** URL; if the target site allows iframes, it will render in a modal.
   - Add `repo` for a code link.
3. Put a `phonk.mp3` next to `index.html` to enable music (optional).

## Contact (Formspree)
- Replace the action in the form with your Formspree ID:  
  `https://formspree.io/f/YOUR_FORMSPREE_ID` → `https://formspree.io/f/abcdxyz`
- Works without any backend.

## Contact (Telegram)
Two safe options (avoid exposing your bot token in client code):

**A) Open chat directly**  
Set at the top of the script:
```js
const TELEGRAM_USERNAME = "your_telegram_username";
```
This makes the “Open Telegram Chat” button link to `https://t.me/YOUR_USERNAME`.

**B) Forward form to Telegram via a secure webhook**  
Use an **n8n Webhook** (recommended) or a **Cloudflare Worker** to receive the form data and call Telegram Bot API server‑side.  
Set:
```js
const TELEGRAM_WEBHOOK = "https://<your-n8n-or-worker>/webhook/telegram-contact";
```

### Example: Cloudflare Worker
See `telegram-worker.js` with env vars:
- `BOT_TOKEN`
- `CHAT_ID`  (your user id or a group/channel id)

Deploy and set your worker URL as `TELEGRAM_WEBHOOK` in `index.html`.

## Deployment
- GitHub Pages, Netlify, Vercel: just upload this folder.
- Everything is client‑side (React via CDN).

## Notes
- Some sites use `X-Frame-Options`/`CSP` to block iframes; in that case, your modal shows a button to open the demo in a new tab.
- Keep animations tasteful; heavy effects can hurt low-end devices.
