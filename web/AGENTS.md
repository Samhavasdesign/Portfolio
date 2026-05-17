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
