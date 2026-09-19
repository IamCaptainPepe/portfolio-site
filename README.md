# Evgeny Purkov — CaptainPepe Portfolio

Static personal portfolio (vanilla HTML / CSS / JS). Dark compute aesthetic, EN + RU i18n, Framer-grade motion, no build step.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080 -d .

# Node
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

### Option A — project site (`username.github.io/repo`)

1. Create a new GitHub repository (e.g. `captainpepe-portfolio`).
2. Push this folder to the `main` branch:

```bash
cd captainpepe-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Build and deployment**.
4. Source: **Deploy from a branch**.
5. Branch: `main` / folder: `/ (root)` → Save.
6. Site URL: `https://YOUR_USER.github.io/YOUR_REPO/`.

### Option B — user/org site (`username.github.io`)

1. Create a repo named `YOUR_USER.github.io`.
2. Push the contents of this folder to `main` (same git steps as above).
3. Pages will serve from the root automatically.

### Option C — upload zip via GitHub UI

1. Create an empty repo on GitHub.
2. Use **Add file → Upload files** and upload everything from this folder (or unzip `captainpepe-portfolio.zip` first).
3. Enable Pages as in Option A.

## Notes

- Language preference is stored in `localStorage` (`captainpepe-lang`). Hero name swaps Evgeny ↔ Евгений.
- Hero visual: `assets/img/pepe-beer.png` (classic Captain Pepe with beer). Clean bust — no step/pill composition.
- Nav / footer avatar: `assets/img/pepe-nav-right.png` (faces RIGHT).
- Cysic flagship: `assets/img/pepe-duo-bust.png` (waist crop from `pepe-duo-clean.png`, transparent RGBA) on card bg — no navy plate/wash, no cyan tint; optional soft black drop-shadow only.
- Hero name is solid white (no gradient / background-clip) — Safari-safe.
- Projects are typography-only cards (no brand logo tiles). Meme Lab removed.
- Skills grid: equal 4+4 CSS grid columns.
- Node runners (`#team` Begunki Uzlov) + hardware strip: full viewport-width bands.
- Motion: page-load nav + hero stagger, section enter (fade/slide + clip-path), IntersectionObserver card reveals, subtle parallax, magnetic buttons, card tilt. `prefers-reduced-motion` kill-switch.
- Social links: Telegram, X, Discord, YouTube (absolute HTTPS).
- No React, no bundler — Google Fonts, Simple Icons (social only), Lucide icons.

## Structure

```
captainpepe-portfolio/
  index.html
  styles.css
  app.js
  README.md
  assets/img/
    pepe-beer.png          # hero + OG
    pepe-duo-clean.png     # Cysic duo source (full)
    pepe-duo-bust.png      # Cysic flagship (gentle bust)
    pepe-nav-right.png
    davinci-resolve.png
    favicon.* / apple-touch-icon.png
```

© 2026 Evgeny Purkov · CaptainPepe
