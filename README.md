# Escuela α6500

Curso interactivo en español para aprender a usar la Sony α6500 con el objetivo 16-50 mm.

It is a single static page (`index.html`) hosted on GitHub Pages. `manifest.webmanifest`, the icons in `icons/` and the service worker in `sw.js` make it installable on an iPhone (Share › Add to Home Screen) and usable offline.

Progress and notebook entries are saved in the browser's localStorage, tied to the site's address. Keep the same Pages URL so they aren't lost.

To publish a change, edit `index.html` and push to `main`. The service worker fetches the page from the network first, so the installed app picks up the new version the next time it is opened with a connection.
