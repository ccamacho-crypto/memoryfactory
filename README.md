# Memory Factory — Jon Bin-inspired GitHub Pages rebuild

This is a **static HTML/CSS/JavaScript adaptation** of the existing Memory Factory rebuild, styled using the supplied Jon Bin template screenshot as a visual reference. It does not require WordPress, PHP, plugins or a database.

## Publish
1. Extract the ZIP and upload its **contents** (not the enclosing directory) to a GitHub repository.
2. Go to Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
3. Wait for GitHub Pages to publish the site.

## Contact form
Edit `config.js`, setting `formspreeEndpoint` to your Formspree form URL (for example `https://formspree.io/f/YOUR_ID`). Deploy and submit a test message. There is no `_gotcha` field.

## Images
The supplied `jonbin.zip` is a WordPress theme package; its stock demo photography is **not included**. The six gallery tiles are deliberately labeled placeholders, rather than falsely representing stock photos as Memory Factory work. To add photographs, put them in `assets/` and add a `style="background-image:url('assets/your-photo.jpg')" data-image` to the matching `.portfolio-tile` anchor in `index.html`. Other backgrounds can be replaced through `styles.css`.

## Content
The existing Memory Factory services, 2024 archived pricing, reviews, business information, and form are retained. Verify historical business details and pricing before publishing.

## Design notes
This is an approximation of the supplied template's layout, spacing, grayscale photographic palette, portfolio grid and dark pricing section. It is not a WordPress theme installation or a pixel-perfect replica; theme fonts and proprietary demo assets have not been embedded.
