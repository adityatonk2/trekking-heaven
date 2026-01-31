# Trekkers Heaven

A clean, practical, adventure-focused landing page for a Himalayan trekking startup. Built with **Next.js 14** (App Router), React, and TypeScript.

## Tech Stack

- **Next.js 14** — App Router, React Server Components
- **React 18** — UI components
- **TypeScript** — Type safety
- **CSS** — Custom design system (no Tailwind)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
trekkers-heaven/
├── app/
│   ├── globals.css      # Design system & styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Primary navigation
│   ├── SecondaryNav.tsx # Category bar
│   ├── HeroSection.tsx  # Hero banner
│   ├── TrekSection.tsx  # Trek section wrapper
│   ├── TrekCard.tsx     # Individual trek card
│   ├── Footer.tsx       # Footer
│   └── FloatingChat.tsx # WhatsApp CTA
├── lib/
│   └── trek-data.ts     # Trek sections & data
├── next.config.js
├── package.json
└── tsconfig.json
```

## Sections

- **Primary Nav** — Home, Treks, About Us, Article, Customize Your Trek, Work With Us, Policies, Contact Us
- **Secondary Nav** — Trek, Tour Package, Village Tours, Blogs, Videos
- **Hero** — Banner with trekking imagery
- **Trek Sections** — Winter, Summer, Monsoon, Village Tour, Autumn, Expedition, Upcoming Treks
- **Placeholders** — Blogs, Videos
- **Footer** — Contact, policies, social links
- **Floating Chat** — WhatsApp CTA

## Design

- **Colors** — Forest green `#1b5e3f`, dark grey text, blue accents
- **Typography** — Plus Jakarta Sans
- **Layout** — Card-based grid, responsive
