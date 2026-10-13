# Shree Ramdev Steel

Premium single-page website for Shree Ramdev Steel — a retail and wholesale stainless steel supplier based in Alandi, Pune.

## Business Details

- **Business:** Shree Ramdev Steel
- **Type:** Stainless Steel Retail + Wholesale Supplier
- **Phone / WhatsApp:** +91 99207 76840
- **Location:** Alandi, Pune-Nashik Highway, Pune, Maharashtra, India
- **Service Areas:** Pune, Pimpri-Chinchwad (PCMC), Alandi, Bhosari, Moshi, Chakan, Nigdi, Akurdi, Ravet, Baner, Hadapsar
- **Domain:** https://shree-ramdev.vercel.app

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript type checker
```

## SEO Setup

### Google Search Console — Sitemap Submission

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add and verify your property: `https://shree-ramdev.vercel.app`
3. Navigate to **Sitemaps** in the left sidebar
4. Submit the sitemap URL: `https://shree-ramdev.vercel.app/sitemap.xml`
5. Wait for Google to process and index your site

### Files included

- **robots.txt** — Located at `/robots.txt`, allows all crawlers and points to the sitemap
- **sitemap.xml** — Located at `/sitemap.xml`, contains all main page sections with HTTPS absolute URLs and lastmod dates
- **Schema markup** — LocalBusiness, FAQPage, ItemList, and BreadcrumbList JSON-LD schemas are embedded in `index.html`

### Google Analytics 4 (GA4)

- GA4 gtag.js is included in `index.html`
- Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID in `index.html` and `src/lib/analytics.ts`
- Tracked events: `click_call`, `click_whatsapp`, `whatsapp_form_submit`, `wholesale_quote_click`, `gallery_image_view`, `product_enquiry_click`, `scroll_depth`, `section_view`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── CategoryStrip.tsx
│   ├── RetailWholesale.tsx
│   ├── Products.tsx
│   ├── Applications.tsx
│   ├── Gallery.tsx
│   ├── WhyChooseUs.tsx
│   ├── HowToEnquire.tsx
│   ├── About.tsx
│   ├── ServiceArea.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── MobileBottomBar.tsx
├── lib/
│   ├── analytics.ts
│   ├── whatsapp.ts
│   ├── hooks.ts
│   └── data.ts
├── App.tsx
├── main.tsx
└── index.css
```
