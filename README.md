# Escuela α6500

Curso interactivo en español para aprender a usar la Sony α6500 con el objetivo 16-50 mm.

It is a single static page (`index.html`) hosted on GitHub Pages. `manifest.webmanifest`, the icons in `icons/` and the service worker in `sw.js` make it installable on an iPhone (Share › Add to Home Screen) and usable offline.

Progress and notebook entries are saved in the browser's localStorage and, once she signs in, synced to a Supabase project (email and password). `SB_URL` and `SB_KEY` near the top of the script in `index.html` hold the project URL and its public anon key; with both empty the app skips sign-in and stays local-only. The `progress` table has row-level security so each account can only read and write its own row. Setup steps: `SUPABASE-SETUP.md` in the project files.

To publish a change, edit `index.html` and push to `main`. The service worker fetches the page from the network first, so the installed app picks up the new version the next time it is opened with a connection.
