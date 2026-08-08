# 珈琲 · NIGHT COFFEE

A single-page site for a late-night coffee bar, styled after the visual
reference: a rainy street scene seen through wired/frosted glass — teal and
amber bokeh behind the pane, red 珈琲 signage glowing in the corner.
Wong Kar-wai dusk.

## Look & feel
- **Palette** — near-black teal-tinted ground, signage red (`#d6362b`),
  teal glow, warm amber.
- **Textures** — animated film grain, a wired-glass grid overlay, drifting
  bokeh light blobs.
- **Type** — Shippori Mincho (serif kanji), Zen Kaku Gothic (sans),
  Cormorant Garamond (italic latin accents).
- **Copy** — bilingual (繁體中文 / 日本語 / English) to match the reference's mood.

## Structure
```
index.html      markup + content
css/style.css   all styling, textures, animation, responsive rules
js/main.js      scroll reveals, sticky nav, gentle blob parallax
assets/         (reserved for imagery)
```

## Run
Static site — no build step. Open `index.html`, or serve locally:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

Fonts load from Google Fonts (needs network on first paint).
