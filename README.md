# Scent With Sajjad — Final Website

A responsive, static fragrance website for **Scent With Sajjad | Fragrance Talk & Reviews**.

## What is included
- Premium black / gold fragrance aesthetic
- Responsive desktop, tablet and mobile layout
- Home / Collection / Decants / Reviews / Guide / About / FAQ
- 31 fragrance products with the generated bottle + decant images
- Search and filters
- Product detail pop-up
- Separate **Collection**, **Reviewed**, and **Available as Decant** statuses
- 5ML / 8ML / 10ML ordering buttons
- WhatsApp order flow
- Easy product editing through `js/products.js`

## How to edit products
Open `js/products.js`. Each product is one object.

Useful fields:
- `name` — perfume name
- `brand` — brand name
- `image` — image filename inside `assets/`
- `reviewed` — `true` or `false`
- `decant` — `true` or `false`
- `tag` — short fragrance category
- `notes` — short descriptive chips
- `reviewUrl` — paste your Instagram Reel URL when available

## Contact details already configured
- WhatsApp: +91 9739953849
- Instagram: https://www.instagram.com/scentwithsajjad/

WhatsApp order buttons are already connected to the number above.

## Add Instagram review links
In `js/products.js`, replace an empty `reviewUrl:''` with the URL of that perfume's Instagram Reel.

## Hosting
This is a static website and can be hosted on free static hosting services. No database or paid server is required.
