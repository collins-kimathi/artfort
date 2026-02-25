# Artfort

Artfort is a React + Vite storefront for showcasing and selling original artworks.

It includes:
- A multi-section experience (Home, Shop, Artists, FAQ, Contact, Checkout)
- Collection filtering, search, and sorting in the gallery
- Product preview modal and cart drawer interactions
- Client-side checkout flow with order confirmation state
- Currency switching (KES, USD, EUR, GBP) with persisted selection
- Responsive layout and loading skeleton screen

## Tech Stack

- React 19
- Vite 8
- Plain CSS (no UI framework)
- ESLint 9

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the dev server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview the production build locally

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts Vite in development mode
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the built app locally
- `npm run lint` runs ESLint across the project

## Content and Branding Customization

- Update painting catalog data in `src/data/paintingsCatalog.js`
- Update shared marketing and FAQ content in `src/data/shopData.js`
- Add local painting images to `public/paintings/` and reference them as `/paintings/<file-name>`
- Replace the site logo at `public/logo.png`

## Notes

- Navigation is hash-based (for example: `#home`, `#shop`, `#checkout`)
- Cart and checkout state are client-side only (no backend integration in this repo)
