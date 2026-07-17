# David Krähenbühl — Website

Technischer Aufbau: [Astro](https://astro.build) (statischer Seitengenerator) +
[Decap CMS](https://decapcms.org) (git-basiertes CMS, kostenlos) + Netlify
(Hosting, Auto-Deploy, Login fürs CMS).

## Was schon drin ist

- `src/pages/index.astro` — die Startseite (Hero, Kollaborationen, Live, Kontakt)
- `src/content/shows/` — Live-Termine (aktuell Platzhalter-Daten, siehe unten)
- `src/content/collaborations/` — Projekte, mit denen du spielst
- `public/admin/` — die CMS-Oberfläche unter `davidkraehenbuehl.ch/admin`
- `src/styles/global.css` — Farben, Typografie (Palette: warmes Dunkel-Braun/
  Anthrazit + Messing-Akzent; Schriften: Instrument Serif / Work Sans / IBM
  Plex Mono)

Alle Texte, die noch mit **TODO Dave** markiert sind (Bio, Mail-Adresse,
Social-Links, Hero-Foto), bitte direkt im Code oder — sobald das CMS läuft —
über die Admin-Oberfläche ersetzen.

Die Show-Termine haben aktuell `TT.MM.JJ` als Platzhalter-Datum, weil ich die
genauen Daten für Kiff Aarau, Kulturwerk 118, Moods, artderkultur Dresden,
Backstein West und Litcafé Biel nicht sicher weiss — die echten Daten bitte
über die Admin-Oberfläche ergänzen.

## Schritt 1 — GitHub

1. Account erstellen: https://github.com/signup (falls noch nicht vorhanden)
2. Neues, privates oder öffentliches Repo erstellen, z.B. `dk-website`
3. Diesen Ordner hochladen — entweder per Drag-and-drop im Browser
   (github.com → Repo → "Add file" → "Upload files"), oder lokal mit Git:
   ```
   git init
   git add .
   git commit -m "Erste Version"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/dk-website.git
   git push -u origin main
   ```

## Schritt 2 — Netlify

1. Account erstellen: https://app.netlify.com/signup (Login mit GitHub geht am
   schnellsten)
2. "Add new site" → "Import an existing project" → GitHub-Repo auswählen
3. Build-Einstellungen übernimmt Netlify automatisch aus `netlify.toml`
   (Build command: `npm run build`, Publish directory: `dist`)
4. "Deploy" — nach ein bis zwei Minuten ist die Seite live unter einer
   `*.netlify.app`-Adresse

## Schritt 3 — CMS-Login aktivieren (damit du selbst Inhalte pflegen kannst)

1. Im Netlify-Dashboard: Site → **Identity** → "Enable Identity"
2. Identity → **Settings and usage** → "Registration" auf **Invite only**
   stellen (sonst kann sich theoretisch jede/r registrieren)
3. Identity → **Services** → **Git Gateway** → "Enable Git Gateway"
4. Identity → "Invite users" → deine eigene E-Mail-Adresse einladen
5. Du erhältst eine E-Mail, setzt ein Passwort — danach kannst du dich unter
   `deine-domain.ch/admin` einloggen und Live-Termine sowie Kollaborationen
   direkt im Browser bearbeiten. Jede Änderung landet automatisch als Commit
   im GitHub-Repo und die Seite baut sich neu.

## Schritt 4 — Domain verbinden

1. Im Netlify-Dashboard: Site → **Domain management** → "Add a domain" →
   `davidkraehenbuehl.ch` eintragen
2. Netlify zeigt dir die nötigen DNS-Einträge (meist ein A-Record auf Netlifys
   IP oder Netlify-eigene Nameserver)
3. Diese Einträge bei deinem Webhosting-Anbieter (dort, wo die Domain
   registriert ist) in den DNS-Einstellungen eintragen
4. DNS-Änderungen brauchen meist einige Minuten bis wenige Stunden, bis sie
   überall greifen

## Lokal testen (optional)

```
npm install
npm run dev
```
Seite läuft dann unter `http://localhost:4321`.
