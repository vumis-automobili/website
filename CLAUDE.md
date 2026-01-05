# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VUMIS Automobili is a static marketing website for a Serbian car dealership business (otkup/prodaja automobila - car buying/selling). The site is a single-page application hosted on GitHub Pages.

## Technology Stack

- **HTML5** - Single `index.html` file containing all content
- **CSS3** - Custom styling with CSS custom properties (variables), animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure JS for interactivity
- **Font Awesome** - Icon library (loaded via CDN)
- **Google Fonts** - Inter and Outfit font families

## Project Structure

```
/
├── index.html          # Main (and only) HTML page
├── css/styles.css      # All styling (~2500 lines)
├── js/script.js        # All JavaScript functionality
├── vumis-logo-new.jpg  # Brand logo
├── robots.txt          # SEO crawling rules
└── sitemap.xml         # SEO sitemap
```

## Development

This is a static website with no build process. To develop:

1. Open `index.html` directly in a browser, or
2. Use any local HTTP server (e.g., `python -m http.server 8000`)

## Deployment

The site is deployed to GitHub Pages at: https://vumis-automobili.github.io/website/

## Architecture Notes

### CSS Organization (styles.css)
- CSS custom properties defined in `:root` for theming (dark theme with gold accent colors)
- Premium loading screen animation
- Custom cursor implementation (desktop only)
- Scroll progress indicator
- Responsive breakpoints: 1200px, 968px, 768px, 640px, 480px

### JavaScript Features (script.js)
All features are initialized via `DOMContentLoaded` event:
- `initLoader()` - Premium loading screen with timed reveal
- `initParticles()` - Canvas-based particle animation background
- `initCustomCursor()` - Custom cursor with hover effects (disabled on mobile)
- `initScrollProgress()` - Top scroll progress bar
- `initValuationSlider()` - Car value estimation calculator
- `initTypewriter()` - Hero title typewriter effect
- `initAnimatedCounters()` - Intersection Observer-based number counters
- `initGallery()` - Filterable image gallery with categories
- `initLightbox()` - Image lightbox modal
- `initTestimonialsSlider()` - Touch-enabled testimonials carousel
- `initWhatsAppForm()` - Contact form that opens WhatsApp with pre-filled message

### Key Business Information
- Phone: 065/6810-032 (Serbian format) / +381656810032 (international)
- WhatsApp integration for contact
- Services: Otkup (car buying), Prodaja (selling), Zamena (trading)
- Location: Belgrade, Serbia (serves all of Serbia)

### SEO Implementation
- Schema.org structured data for AutomotiveBusiness
- Open Graph and Twitter meta tags
- Serbian language (`lang="sr"`)
- Geo tags for local SEO
