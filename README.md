# Inner Drive — Website

Marketing site for [Inner Drive](https://instagram.com/innerdrive.program), an
online CrossFit / competitive fitness programming brand.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS** for styling
- Deployed on **Vercel** (zero-config)

## Local development

```bash
npm install
npm run dev
npm run lint
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout (fonts, navbar, footer)
│   ├── page.tsx               # Home
│   ├── planes/                # Programs
│   ├── quienes-somos/         # About / coaches
│   ├── contacto/              # Contact form
│   └── api/contact/route.ts   # Form handler
├── components/                # Navbar, Footer, Logo, ContactForm
└── lib/
    └── content.ts             # Static plans + coaches content
```

## Adding the database (future)

The site is wired to make backend integration straightforward:

1. Choose a provider (Supabase is the easiest fit on Vercel; Neon / Vercel
   Postgres also work).
2. Add credentials to `.env.local` (see `.env.example`).
3. Persist contact submissions in
   [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

The page components are already typed around the structures in
[`src/lib/content.ts`](src/lib/content.ts), so migrating to a database can be
done without changing the UI routes/components.

## Deploy to Vercel

```bash
npx vercel
```

Or push to a Git repo and import on [vercel.com/new](https://vercel.com/new).
The included `vercel.json` is enough — Vercel auto-detects Next.js.
