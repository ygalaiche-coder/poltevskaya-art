# poltevskaya-art

Shopify theme for **Natalia Poltevskaya** — contemporary Russian–Portuguese painter.

## Design
Editorial catalog aesthetic:
- Fonts: Syne + Syne Mono
- Pure white / pure black palette
- One-painting-per-section full-height layout
- Metadata block on the left, painting image on the right
- Hero with "Seven Men" painting as background

## Structure
Standard Shopify theme layout — folders at repo root for automatic Shopify GitHub sync:
- `assets/` — CSS, JS, images
- `config/` — theme settings schema
- `layout/theme.liquid` — main HTML shell
- `locales/` — translations
- `sections/` — header, hero, gallery, about, footer
- `snippets/` — reusable partials
- `templates/` — index.json, product, page, collection, cart, 404

## Shopify GitHub sync
Every push to `main` auto-updates the connected theme in the Shopify admin.

## Local editing
```bash
git clone https://github.com/ygalaiche-coder/poltevskaya-art.git
cd poltevskaya-art
# Edit files, commit, push — changes appear in Shopify.
```
