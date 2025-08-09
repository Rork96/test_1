# WealthifAI Portfolio (v3)

This is a single–page React portfolio with a dark–fantasy phonk/VHS aesthetic.  It contains a hero section, service cards, a scrollable “Lore Gallery” for live demos or animations, a case study grid with modals, a command palette, theme toggler and an optional phonk soundtrack.  Everything is contained in `index.html` and runs in the browser using React via CDN.

## Editing Content

### Cases

Open `index.html` and locate the `CASES` array (near the top of the inline `<script>`).  Each entry looks like this:

```js
{
  id: 1,
  title: 'WealthifAI Finance Bot',
  description: 'Automated budgeting, receipt OCR and goal tracking with AI.',
  impact: 'Helps users gain insights into spending and save toward goals.',
  stack: ['FastAPI', 'SupaBase', 'OpenAI', 'Telegram'],
  image: 'https://…',
  liveDemo: '',  // insert your live demo URL here (must allow iframes)
  repo: '',      // insert your source code repo URL here
}
```

* Replace `title`, `description`, `impact`, and `stack` with your own project details.
* Set `image` to a representative cover image (hosted externally or relative to `index.html`).  The preview in the card uses this image.
* Set `liveDemo` to the URL of your hosted app or demo.  The site will embed the page in an `<iframe>` when the modal opens.  If the site blocks embedding with an `X‑Frame‑Options` header, the modal will instead show a message and provide an external “Open Demo” button.
* Set `repo` to a GitHub/GitLab repository link if you want a “View Code” button.

### Lore Gallery

The `GALLERY` array controls the scrollable “Lore Gallery” section.  Each entry has optional `iframe` and `lottie` properties.  One of them should be non‑empty:

```js
{
  id: 'gallery1',
  title: 'Finance Bot Demo',
  description: 'Watch the WealthifAI bot categorize your spending.',
  iframe: '', // URL to embed (e.g. https://demo.example.com)
  lottie: '', // URL to a Lottie JSON animation (e.g. https://assets10.lottiefiles.com/packages/lf20…json)
  fallback: 'https://…', // static image used when no iframe/lottie
}
```

If `iframe` is set, an `<iframe>` will fill the panel; if `lottie` is set, the site will load the animation using the `lottie‑web` library.  If both are empty, a dark overlay with the title appears (useful as a placeholder).  Use `fallback` for a static background image when `iframe`/`lottie` are empty.

### Contact Form

The contact form submits to Formspree.  Replace `YOUR_FORMSPREE_ID` in the form `action` attribute with your form ID.  You can create a free form at [Formspree.io](https://formspree.io/).  When someone submits the form, Formspree will send you an email.

### Telegram Link and Webhook

In the script section near the bottom of `index.html`, there is a line setting the Telegram link:

```js
document.getElementById('telegramLink').href = 'https://t.me/your_username';
```

Change `your_username` to your actual Telegram handle.  If you prefer to forward form submissions directly to Telegram using a webhook, you can deploy the `telegram-worker.js` Cloudflare Worker.  The worker forwards POST requests to your bot’s API without exposing your token in client code.  After deploying, set the environment variables `BOT_TOKEN` and `CHAT_ID`, then set `TELEGRAM_WEBHOOK` in `index.html` to your worker URL.  Refer to the comments in the worker file for details.

### Music Toggle

Place an MP3 file named `phonk.mp3` in the same directory as `index.html`.  The audio toggle button in the bottom right plays or pauses the soundtrack.  If no file is present, clicking the toggle does nothing.

## Running Locally

You don’t need any build tools.  Simply open `index.html` in a modern browser.  For deployment, upload the contents of this folder to GitHub Pages, Netlify or any static host.  Ensure `index.html` sits at the repository root when using GitHub Pages (`main` branch, “Deploy from a branch” source).
