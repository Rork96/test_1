# Next.js Dark‑Fantasy Phonk/VHS Portfolio

- Next.js 14 App Router, static export (`output: 'export'`) so it runs on GitHub Pages.
- Motion One for micro-animations, Lottie accents, local demo pages.

## Local dev
npm i
npm run dev

## Export + deploy
- If deploying to `username.github.io/REPO_NAME`, edit `next.config.mjs` and set `REPO_NAME`.
  Or set a repo secret/var: `NEXT_PUBLIC_BASE_PATH=/REPO_NAME`
- Push to `main`. Pages Source: **GitHub Actions**. Workflow builds to `out/` and deploys.

## Customize
- Edit `CASES` in `app/page.tsx` for titles/tags and `liveDemo`/`repo` links.
- Drop `public/phonk.mp3` to enable the music toggle.
