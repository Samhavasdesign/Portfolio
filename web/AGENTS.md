<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Portfolio images (`public/images/`)

When adding or wiring up images for case studies, work cards, or heroes:

- **Do not modify image files.** Never resize, compress, crop, convert format (e.g. PNG → WebP), or overwrite assets with shell tools (`sips`, ImageMagick, `sharp`, `cwebp`, etc.).
- **Use the file the user provides as-is.** Copy it into `public/images/` with the same bytes, dimensions, and format unless the user explicitly asks for processing.
- **Reference paths in code only** — set `src` / `thumbnail` / `heroImage` to `/images/...`; do not create alternate “optimized” copies unless the user requests it.
- **Do not infer display dimensions from `sips` or similar** to rewrite the source file; read dimensions only if needed for `aspect` / `width` / `height` props in JSX.

## Cursor Cloud

From the repository root, install both lockfiles:

```bash
npm ci
npm ci --prefix web
```

The root install supplies Tailwind when this directory is the workspace. The Next.js app lives in `web/`.

Start the app with `npm --prefix web run dev -- --hostname 0.0.0.0 --port 3000` and open `http://localhost:3000`. Next.js serves dev-client resources for the `localhost` host; hydrated controls such as Let's talk depend on that host.

`npm run build --prefix web` is the production build. `npm run lint --prefix web` currently reports existing app issues.

`ANTHROPIC_API_KEY` powers `/api/chat`. `RESEND_API_KEY` powers the contact form. `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` override the default recipient and sender. The site and case studies run without those secrets. Until Resend is set, the contact form responds with "Contact form is not configured yet."
