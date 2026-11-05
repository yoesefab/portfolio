# Youssef's portfolio

A Next.js App Router + TypeScript conversion of the supplied personal biography page. Preserves its restrained serif headings, white background, blue links, and two-column profile layout. The sidebar stays within the content grid and navigation remains available on mobile.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize

All personal content lives in `src/data/profile.ts`: name, location, role, introduction, background, education, work experience, projects, interests, email, and social links. Name and location are based on the supplied file and user confirmation. Other biography details are intentionally empty; the page shows explicit placeholders rather than attributing the original author's history to Youssef. Empty optional sidebar rows are hidden.

For education, experience, and projects, add entries in this format:

```ts
{
  title: "Your project or organization",
  period: "2024–present",
  description: "Describe your work here.",
  url: "https://example.com", // optional
}
```

Place a portrait in `public/photos/profile.jpg`, set `photo` to `"/photos/profile.jpg"`, and optionally set `photoCaption`. Local images use Next.js Image optimization. External images require a matching `images.remotePatterns` configuration in Next.js. Without a portrait, a neutral initials placeholder is displayed.

Page layout: `src/app/page.tsx`. Styling: `src/app/globals.css`. SEO title and description: `src/app/layout.tsx` (derived from the profile). Google Fonts are loaded in CSS, with system font fallbacks when offline.

## Verify and build

```sh
npm run typecheck
npm run build
npm start
```

The project is prepared locally; it has not been published.
