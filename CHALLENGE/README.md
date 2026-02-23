# React/Next Forberedelses-utfordring (Challenge)

Du kan begynne på denne oppgaven når du har fullført de andre 4 seksjonene. Denne oppgaven er ment at den skal være vanskelig, hvis du lurer på noe underveis kan du spørre på Discord.

## Oppgave: Lag din egen hacker news feed

> [!NOTE]  
> Bruk følgende side som ressurs for API hvis du har spørsmål: https://github.com/HackerNews/API

1. Sitt opp en vite server i denne mappen, hvis du blir bedt om å beholde filer velger du `Yes`
2. Sitt opp html body med følgende hoved elementer:
   - Header for top navigasjon
   - Main som hoved seksjon, inni main skal du ha 2 elementer
     - Et form som vi skal bruke til å søke igjennom news
     - En div med `id="news"`
   - Footer med en gøy sitat
3. Sitt opp følgende funksjoner for å fetch'e data, **bruk async/await og try/catch**
   - `getNewest` som henter ned de nyeste artikel ID'ene fra denne url'en og returnerer en array av ID (tall)

     ```console
     fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
     ```

   - `getNewsById` som tar en `id` som parameter som kan laste ned en spesefikk artikkel, manipuler url som vist under. Funksjonen skal returnere objektet fra responsen som inneholder data.

     ```console
     fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
     ```

4. Vi har ikke tilgang på React ennå, men vi kan prøve oss på å lage et komponent for å se hvor forferdelig det er i bare javascript
   - Lag en funksjon `createArticleElement` som kan ta inn objektet fra `getNewsById(id)` som et parameter - Bruk destrukturing til å hente ut: `by`, `time`, `title`, `url` og `score`
   - Produser følgende komponent ved bare å bruke JS (_du kan flytte på elementer for å tilpasse design_)
     ```html
     <article>
       <h3>title (score)</h3>
       <p>text</p>
       <span>
         <p>posted by (by) at (time)</p>
         <a href="url">Read more</a>
       </span>
     </article>
     ```
   - Her må du bruke blant annet: [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElements) og [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
   - Funksjonen skal returnere `article` elementet med alle barn tilhørende

5. Lag en global variabel `news` hvor vi kan lagre resultatet av flere `getNewsById`
6. Lag en funksjon som heter `getNews`
   - Den skal bruke `getNewest` til å hente en liste med `id`'er
   - Jeg anbefaler at du kutter ned resultatet, denne listen inneholder 500 elementer! Bruk f.eks de `10` siste
   - Loop over `id` array'en med `getNewsById` og lagre alle resultater i en array
   - Returner alle arrayen med alle objectene inni seg
7. Lag en funksjon som er ansvarlig for å oppdatere div'en med `id="news"`
   - Funksjonen bruker `news` sammen med `createArticleElement` for å produsere nødvendige elementer
   - Oppdater container med de nye elementene som barn (bruk [replaceChildren](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren))

---

8. Bruk form og et inputfelt til å lage et søkefelt for titler på artikler, oppdater visning mens du skriver (onchange eventen)
9. Lag en `<button>` og plasser den inni `<footer>` taggen, knappen skal kun vises når du har begynt å scrolle ned på siden. når du klikker på knappen skal den ta deg tilbake til toppen.
10. Designet på siden skal være responsivt, artikel skal ha 1 kolonne på mobil, 2–3 på desktop via media queries. Pass på at du bruker semantisk HTML og tilgjengelighets-basics (alt-tekst, label på filter)

## Rubrikk (pass/fail)

**Bestått** når:

- Data lastes korrekt, liste rendres, filter fungerer.
- Layout funker på mobil og desktop uten horisontal scrolling.
- Koden er ryddig, moderne JS, og uten blokkende console errors.
