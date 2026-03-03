# Aussie Move Masters - CMS Landing Page

🚀 **Next.js + Storyblok CMS** - Fully editable landing page for removalist services.

## Quick Start

```bash
# Install dependencies
pnpm install

# Add your Storyblok token to .env.local
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_token_here

# Run development server
pnpm dev
```

Visit http://localhost:3000

## 📚 Full Setup Guide

See **[STORYBLOK-SETUP.md](./STORYBLOK-SETUP.md)** for complete step-by-step instructions.

## What's Included

✅ **15 Storyblok Components:**
- Header with navigation
- Hero section with quote form
- Services grid (6 service cards)
- Why Choose Us (8 features)
- Pricing packages (6 tiers)
- Testimonials (3 reviews)
- FAQ accordion (7 items)
- Contact section
- Footer

✅ **Features:**
- All content managed in Storyblok CMS
- Visual editor - see changes in real-time
- Responsive design (mobile-first)
- Contact form with validation
- Smooth scrolling navigation
- Aussie Move Masters branding (teal + gold)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Storyblok
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import on Vercel
3. Add environment variable
4. Deploy!

### VPS
```bash
pnpm build
pm2 start npm --name "aussie-cms" -- start
```

## Content Management

No code needed! Just log into Storyblok:
1. Edit text, images, prices
2. Add/remove sections
3. Reorder components
4. Publish changes

## Support

Built by Robert (@robert_nevrio) for Jack
Questions? Check STORYBLOK-SETUP.md or contact Robert.
# Aussie Move Masters CMS - Deployed Tue Mar  3 05:18:42 PM IST 2026
