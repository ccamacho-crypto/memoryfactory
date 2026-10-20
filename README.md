# Memory Factory — archive-inspired GitHub Pages rebuild

This is a **static, responsive, original-design-inspired** reconstruction of the Memory Factory website captured July 23, 2024. It preserves the archived page's main section order, "Live. Record. Play." headline, service descriptions, 2024 pricing, testimonials and contact details. The header is reconstructed from a user-provided screenshot, including a recreated vector logo; this is an approximation rather than the original logo asset. Other original photography and exact stylesheets were not recovered. The illustrative film graphic is CSS-based.

## Files
- `index.html`: page content and archived pricing
- `styles.css`: layout and styling
- `script.js`: mobile navigation and Formspree submission
- `config.js`: configurable Formspree endpoint
- `assets/favicon.svg`: placeholder logo icon
- `assets/memory-factory-logo.svg`: recreated header logo based on the provided screenshot

## Deploy to GitHub Pages
1. Create a public GitHub repository, for example `memory-factory`.
2. Upload **all files and the assets folder** to the repository root (not a nested folder).
3. In repository **Settings → Pages**, select **Deploy from a branch** and set **main / (root)**. Save.
4. Open the published URL, usually `https://YOUR_USERNAME.github.io/memory-factory/`.
5. Test navigation and form on desktop and mobile. Relative asset paths support project-site hosting.

## Formspree
1. Create a form at https://formspree.io/ and verify your receiving email address.
2. Edit `config.js` to set `formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"`.
3. Commit changes and submit a test message from the deployed website. Check spam and your Formspree dashboard if delivery fails.
4. No `_gotcha` input is included.

## Before publishing
- **All listed prices are from July 2024, not verified current rates.** The site labels them accordingly.
- Confirm the archived telephone, address and hours before accepting customers. They are included for archival fidelity.
- Replace placeholder branding and illustrative artwork with original licensed assets if available.
- Review Formspree privacy and spam settings.

Archive: https://web.archive.org/web/20240723085103/https://memoryfactory.com/


## Archived image support

Image slots are now wired into the homepage, service cards, events, and partner section. See `assets/archive/README.md` for filenames. The original image files were not retrievable in this environment; add verified originals when available.
