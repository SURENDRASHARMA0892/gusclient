# IRON CULT FITNESS

Premium modern gym & fitness marketing site.

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- Framer Motion
- Lucide icons
- Package manager: **npm** (`package-lock.json`)

## Run locally

```bash
cd gym-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
cd gym-site
npm install
npm run build
npm start
```

## Edit gym details

All brand, contact, address, prices, trainers, programs, and social links live in one file:

**`src/config/gym.ts`**

Update WhatsApp / phone numbers there before client go-live (sample `555` numbers ship for demo).

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site URL for Open Graph metadata (e.g. `https://your-domain.com`). On Vercel, `VERCEL_URL` is used automatically if this is unset. |
| `VERCEL_URL` | Auto | Injected by Vercel — do not set manually. |

No API keys or secrets are required for the current site.

## Deploy to Vercel

This app lives in the **`gym-site/`** subdirectory of the repo.

### Recommended (GitHub → Vercel)

1. Import the GitHub repo in [Vercel](https://vercel.com/new).
2. Set **Root Directory** to `gym-site`.
3. Framework: Next.js (auto-detected). Build: `npm run build`. Install: `npm install`.
4. Optional env: `NEXT_PUBLIC_SITE_URL=https://your-production-domain`.
5. Deploy. Attach a custom domain in Vercel → Domains.

### CLI

```bash
cd gym-site
npx vercel          # preview
npx vercel --prod   # production
```

Requires a logged-in Vercel account (`npx vercel login`).
