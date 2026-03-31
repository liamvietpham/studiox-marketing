# StudioX

A marketing/static UI website for the `ATELIER NORTH` studio concept, built with React Router 7, React 19, TypeScript, and Tailwind CSS 4.

This project is currently structured around:
- thin `routes` focused on routing and SEO metadata
- `features` for page-level UI
- `content` for static JSON data
- `shared` for layout, header/footer, SEO helpers, and site-wide config

Note: this is a **static UI mock**. There is no real backend or API integration yet. Forms, newsletter inputs, and share/bookmark actions are currently visual-only.

## Tech Stack

- React 19
- React Router 7 (`framework mode`)
- Vite 8
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Yarn

## Running The Project

### 1. Install dependencies

```bash
yarn install
```

### 2. Start the dev server

```bash
yarn dev
```

### 3. Build for production

```bash
yarn build
```

### 4. Preview the production build

```bash
yarn preview
```

## GitHub Actions Deploy To S3

This repo includes a workflow at `.github/workflows/deploy-s3.yml` that:

- runs on every push to `main`
- builds the static site with `yarn build`
- uploads the generated files from `build/client` to `s3://<bucket>/site/`

Before using it, configure these GitHub repository settings:

- `Secrets`: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET`, `AWS_CLOUDFRONT_DISTRIBUTION_ID`

You can also run the workflow manually from the `Actions` tab with `workflow_dispatch`.

## Scripts

```json
{
  "dev": "react-router dev",
  "build": "tsc -b && react-router build",
  "lint": "eslint .",
  "preview": "npx serve build/client"
}
```

## Folder Structure

```text
.
├── public/                    # favicon, robots.txt, sitemap.xml, public assets
├── src/
│   ├── content/               # static JSON content for pages/blog posts
│   ├── features/              # feature/page-based UI modules
│   │   ├── about/
│   │   ├── blog/
│   │   ├── blog-post/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── pricing/
│   │   ├── services/
│   │   └── work/
│   ├── routes/                # route entry files
│   ├── shared/
│   │   ├── components/        # PageFrame, SiteHeader, SiteFooter
│   │   ├── content/           # shared site config/content
│   │   ├── hooks/             # useSiteShell
│   │   └── types/             # shared types
│   ├── entry.client.tsx
│   ├── root.tsx
│   ├── routes.ts
│   └── index.css
├── build/                     # build/prerender output
├── .react-router/             # generated React Router files
├── package.json
├── react-router.config.ts
└── vite.config.ts
```

## Routing

Current main routes:

- `/`
- `/about`
- `/services`
- `/work`
- `/pricing`
- `/blog`
- `/blog/:slug`
- `/contact`

The project is configured with:

- `ssr: false`
- prerendering for core pages and selected static blog posts

See `react-router.config.ts`.

## Data Flow

Most pages follow this flow:

1. Route file in `src/routes/*`
2. Hook in `src/features/<feature>/hooks/*`
3. View component in `src/features/<feature>/components/*`
4. Static data from `src/content/*.json`

Example:

- `src/routes/home.tsx`
- `src/features/home/hooks/useHomePage.ts`
- `src/features/home/components/HomePageView.tsx`
- `src/content/home.json`

## Where To Edit Content

To update text or images, edit the relevant files in:

- `src/content/home.json`
- `src/content/about.json`
- `src/content/services.json`
- `src/content/work.json`
- `src/content/pricing.json`
- `src/content/blog.json`
- `src/content/blog-posts.json`
- `src/content/contact.json`

To update the shared site shell:

- `src/shared/content/siteConfig.ts`

## SEO And Prerendering

SEO metadata is defined per route with helpers from:

- `src/shared/seo.ts`

Canonical links and Open Graph metadata are generated from static content. Since this is a static site, adding a new page or blog post usually means updating:

- the content file
- the related route
- the prerender list in `react-router.config.ts`

## Development Notes

- `build/` is output, not source code.
- `.react-router/` is generated.
- The shared site shell now goes through `PageFrame` + `siteConfig`.
- Some UI interactions are intentionally mock-only for visual presentation and are not complete product flows.

## Good Next Steps

- Connect the `contact` form to a real API
- Add schema validation for JSON content
- Unify brand/content naming if you want the entire site to use a single identity
- Replace or optimize source images for large hero sections
