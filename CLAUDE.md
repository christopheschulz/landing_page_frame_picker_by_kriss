# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git

The git repository is in the `site/` folder, not in the parent `framepickerbykriss_com/` folder.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro site with Tailwind CSS v4 for the Frame Picker By Kriss macOS app landing page.

### Internationalization (i18n)
- Three languages: English (default), French (`/fr`), German (`/de`)
- All translations in `src/i18n/translations.ts`
- English pages at root (`/`, `/support`, etc.)
- Localized pages in `src/pages/fr/` and `src/pages/de/`
- Helper functions: `getTranslations(locale)`, `getLocaleFromUrl(url)`, `getLocalizedPath(path, locale)`

### Components
- `Hero.astro` - Main hero section with screenshot carousel
- `Features.astro` - Feature grid
- `Pricing.astro` - Free/Premium pricing cards
- `Header.astro` - Navigation with language switcher
- `Footer.astro` - Footer with legal links
- `LanguageSwitcher.astro` - Language selection dropdown

### Layouts
- `BaseLayout.astro` - Main layout wrapper with SEO meta tags

### Static Assets
- `public/images/app-icon.png` - App icon
- `public/images/screenshots/` - App screenshots for carousel
