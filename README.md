# Domanivka

React + Vite implementation of the Domanivka hromada site.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build       # outputs to dist/
npm run preview     # serves the built dist locally
```

## Deploy — GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

One-time setup on GitHub:

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The next push to `main` will publish. URL appears in **Actions → Deploy to GitHub Pages**.

Notes:
- `vite.config.js` uses `base: './'`, so the build works under any path (`user.github.io/repo/`, custom domain, root, subpath).
- Routing uses **`HashRouter`** (URLs look like `…/#/about`). This avoids the need for SPA fallback on a static host like Pages. If you'd rather have clean URLs, switch `src/main.jsx` to `BrowserRouter` and copy `dist/index.html` to `dist/404.html` in the workflow.

## Images

Drop image files into **`public/images/`**. They are copied verbatim into `dist/` on build and served as-is — no import needed.

Reference them with the `asset()` helper so paths stay correct on GitHub Pages (which serves from a subpath):

```jsx
import { asset } from '../lib/asset.js';

<img src={asset('images/hero.jpg')} alt="…" />
```

Do **not** hardcode `/images/hero.jpg` (leading slash) — it breaks on the `user.github.io/repo/` subpath. Always go through `asset()`.

The hero already looks for `public/images/hero.jpg`: drop that file and it appears; if it's absent, the placeholder gradient stays (handled via `onError`). The same pattern (an `<img className="photo-img" …>` inside any `.photo` block) works for project cards, story photos, etc.

## Stack

- React 18 + Vite 5
- `react-router-dom` (HashRouter)
- EN/UK switcher via React Context, persisted in `localStorage`
- Single global stylesheet (`src/styles.css`) ported from the design system
