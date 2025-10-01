Klinik Template (Tailwind CDN) - README
--------------------------------------

Indhold i zip:
- index.html
- /priser/index.html
- /om/index.html
- /kontakt/index.html
- /privatliv/index.html
- /css/styles.css
- /images/bg.png

Hvordan bruge:
1) Udpak ZIP-filen og upload mappen til dit webhotels web-root (typisk public_html).
2) Filstrukturen forventer, at '/css' og '/images' ligger i site root. Links i HTML er root-relative.
3) For at gøre 'Se priser (ekstern)' knappen på forsiden aktiv, udskift href i index.html med den faktiske eksterne pris-URL.
4) Hvis du vil optimere Tailwind til produktion, kan du køre en lokal build og erstatte CDN-tilgangen med en kompileret CSS-fil.
5) For at undgå .html i URL'er bruger vi undermapper med index.html - så '/priser/' virker uden '.html'.

Tilpasninger du sandsynligvis vil lave:
- Erstat farver, tekster og logo med dine egne.
- Erstat kontaktoplysninger.
- Tilknyt en bookingløsning eller kontaktformular (Formspree, Netlify Forms eller egen backend).
- Tilpas privatlivstekst efter dine behov.

God fornøjelse — sig til hvis du vil have at jeg tilpasser tekster, farver eller laver en anderledes layout-variant.
