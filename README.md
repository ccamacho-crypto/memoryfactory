# Memory Factory — GitHub Pages website

Modernized, responsive, static rebuild based on the July 23, 2024 Wayback Machine snapshot of memoryfactory.com.

## Quick start

1. Unzip the project.
2. Edit `config.js` and enter your Formspree endpoint in `formspreeEndpoint` (example: `https://formspree.io/f/abcdefgh`). Leave blank until you have a form. **Do not include a honeypot `_gotcha` input**; this project does not use one.
3. Review the archived 2024 prices, business address, phone number, and hours in `index.html`. Confirm details before launch.
4. Upload `index.html`, `styles.css`, `script.js`, `config.js`, `assets/`, and optionally this README to the **root** of a GitHub repository.
5. In GitHub, open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
6. Visit the Pages URL shown by GitHub after deployment. A repository named `USERNAME.github.io` publishes at `https://USERNAME.github.io/`; a normal project repository publishes at `https://USERNAME.github.io/REPOSITORY/`.

## Formspree setup

- Create or sign in at https://formspree.io/ and create a form.
- Copy its `https://formspree.io/f/...` endpoint into `config.js`.
- Verify the recipient email in Formspree and check spam/filtering if you don't receive messages.
- Submit a test inquiry on the deployed site. The form uses `fetch` with JSON response handling and has no `_gotcha` field.
- If the endpoint is empty or invalid, the form displays a not-connected notice rather than pretending to send.

## Files

- `index.html`: all site content and structure
- `styles.css`: responsive design and typography
- `script.js`: mobile menu and Formspree form submission
- `config.js`: editable Formspree endpoint
- `assets/favicon.svg`: original-style typographic placeholder favicon (newly designed, not an archived asset)

## Content provenance and limitations

Reference: https://web.archive.org/web/20240723085103/https://memoryfactory.com/

The archived website's copy, categories, published pricing, testimonials, business phone, location, and hours informed this rebuild. The visual design is **new and inspired by the brand**, not a pixel-identical reconstruction. Original photo assets, original logo, and original fonts were not recoverable in this environment. The hero artwork and logo are CSS/vector placeholders. Replace them with your owned original brand assets if available.

2024 prices are intentionally preserved and clearly labeled as historical. Some testimonials are excerpted. The archive listed 12900 SW 89 Ct, Miami, FL 33176 and 305.668.1801; verify these before publication. This is a frontend-only website: GitHub Pages cannot run server-side form handlers.

## Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain and follow GitHub's DNS instructions. For `www`, typically configure a CNAME pointing to `USERNAME.github.io`; for apex domains follow GitHub's published A/AAAA record guidance. Enable HTTPS once available. Do not point your domain until you are ready to launch.

## Local preview

Open `index.html` directly, or run `python3 -m http.server 8000` from this folder and visit http://localhost:8000/.
