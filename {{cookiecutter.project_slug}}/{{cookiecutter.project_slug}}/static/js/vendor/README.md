# Vendored frontend

These files are served by Django as static assets so the generated project works
on a LAN/VM without reaching a public CDN.

- `tailwind-browser.js` — [@tailwindcss/browser](https://www.npmjs.com/package/@tailwindcss/browser) 4.3.3
- `alpine.js` — [alpinejs](https://www.npmjs.com/package/alpinejs) 3.14.8 (minified)

Tailwind is compiled in the browser from class names on the page (including HTML
swapped in by HTMX).
