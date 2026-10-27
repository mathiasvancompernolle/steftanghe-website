# steftanghe-website

Website van Stef Tanghe – land- en tuinbouwmachines (Izegem).

Gewone HTML/CSS/JS, geen build-stap. Hosting via Cloudflare (Workers & Pages), elke push naar `main` gaat automatisch online.

- `index.html` – homepage
- `verhuur.html` – verhuurconfigurator Kubota (prijzen in `js/verhuur.js`, tabel `TARIEVEN`)
- `css/style.css` – alle opmaak
- `img/`, `fonts/` – afbeeldingen en zelf-gehoste lettertypes

## Voor de lancering
- Alles met een oranje stippellijn ("nog toe te voegen") invullen
- `robots.txt`, `_headers` en de `noindex`-metatags weghalen zodat Google de site mag indexeren
