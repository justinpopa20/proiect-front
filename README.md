Acest proiect va fi construit pe parcursul cursului de front-end. Fiecare cursant are un modul dedicat unde va comite temele.

## Pasi instalare proiect

1. Instalare GIT https://git-scm.com/download/win
2. Instalare Node si Npm https://nodejs.org/en/download/
2. Clonare proiect - din consola : git clone https://github.com/justinpopa20/proiect-front.git
3. Deschidere proiect in consola (cd proiect-front)
4. Console: npm run start
5. Daca nu apar erori, acceseaza http://localhost:8000/index.html in browser

## Structura proiectului

```
app/                    --> toate sursele aplicatiei
  app.css               --> css general pentru aplicatie
  nume_cursant/         --> fiecare cursant are modulul lui dedicat
    nume_cursant.html   --> template html pentru modul (container & layout)
    nume_cursant.module.js   --> modul angular care va incarca temele din acest modul
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)

