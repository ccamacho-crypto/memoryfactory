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
The existing Memory Factory services, service pricing, reviews, business information, and form are retained. Verify business details and pricing before publishing.

## Design notes
This is an approximation of the supplied template's layout, spacing, grayscale photographic palette, portfolio grid and dark pricing section. It is not a WordPress theme installation or a pixel-perfect replica; theme fonts and proprietary demo assets have not been embedded.


## Original image assets added
The supplied `MF WEBSITE ASSETS.zip` was integrated locally (no external image hotlinks):
- Header background: `assets/header-background.jpg`
- Contact background: `assets/contact-background.jpg`
- Original logo and favicon: `assets/memory-factory-original-logo.png`, `assets/favicon.png`
- Transfer-service icons: `assets/*-icon.png`
- Six event photographs: `assets/event-01.jpg` through `event-06.jpg`
- Six community partner logos: `assets/partner-*.png`

All image references are relative and work on GitHub Pages subpaths. Replace photos by keeping the same filenames. The service pricing and configurable Formspree contact form are retained. Verify business details before publishing.

## Homepage parallax background
The first section uses `assets/header-background.jpg` (supplied by you). The background moves more slowly than page content on scroll, with a dark readability overlay. Visitors who prefer reduced motion see a static background.

## Hero text layout update
The first section uses a left-aligned column with a thin white rectangular border around the headline, introduction, buttons, and tagline. The original background image and parallax remain intact. Change `.hero-copy-frame` in `styles.css` to adjust the border or padding.

## Typography
All website text uses Montserrat via Google Fonts (weights 300–900). An internet connection is needed to load the webfont; Arial is the fallback.

## Contact background update
The contact section uses `assets/contact-background.jpg` (the user-supplied VHS image), with a 5px blur, dark overlay and JavaScript parallax. Reduced-motion preferences disable the movement.


Footer update: Replaced the stylized text footer branding with the original Memory Factory logo (`assets/memory-factory-original-logo.png`).

## Image overlays update
Removed dark/shadow gradients from the hero, portfolio photographs and contact background. The requested white hero outline and the light contact form remain for usability. The parallax effects and contact-background blur are retained.


## Latest change
Removed the four individual transfer-service pricing links and added one centered white SEE PRICING button with a thin rounded outline below the service cards. It links to the existing pricing section.

## Header update
The logo and contact information now use separate responsive columns, with narrower logo sizing on desktops and stacked contact details on small screens.

## Services copy update
The services introduction and all four transfer-service descriptions were replaced with the owner-provided wording. The single SEE PRICING button is retained.


## Contact map
The contact section displays a Google Maps embed for Memory Factory in Falls Warehouse District to the left of the Formspree form. The embed URL is in `index.html` under `.contact-map`; replace the `src` to change the location. The map requires an internet connection and visitor permission to load Google Maps.

Latest update: compact floating header on scroll, Event Services photo gallery with no captions, removed separate event-services panel, Falls Warehouse District map heading, medium-bold headings.
