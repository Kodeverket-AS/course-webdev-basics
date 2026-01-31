# Grunnleggende web-utvikling

Dette repoet inneholder et selvstudiumsopplegg i webutvikling for å gi fundamentale egenskaper og kunnskaper som vi kan bygge videre på. Målet med selvstudiet er å sikre at alle dere har de nødvendige forkunnskapene før vi dykker videre inn i React/Next verdenen.

## Om opplegget

I løpet av denne uka vil du jobbe gjennom fire moduler (HTML, CSS, JavaScript og Verktøy/arbeidsflyt) som dekker de viktigste ferdighetene du trenger for å jobbe med React og NextJ senere. Du får alt materiell med én gang, slik at du kan legge opp løpet selv (med en sjekkliste over temaer du må beherske). På slutten av uken tar vi ha en felles **oppsummerings- og spørsmålsøkt**, hvor vi gjennomgår vanlige utfordringer og øver på å lese kode sammen.

Gå gjennom modulene, løs oppgavene, og leverer arbeidet ditt som en Pull Request. Underveis bør du øve på å finne ut av ting selv, bruk dokumentasjon flittig, og noter ned det du synes er vanskelig eller uklart. Hvis du har sitter fast eller trenger hjelp kan du bruke [#Oppgaver](https://discord.com/channels/1266813890889781343/1448983890373902386) kanalen på Kodeverket-Bergen Discorden

## Kom i gang

Før du starter, sørg for at du har følgende programmer på plass:

- [NodeJS](https://nodejs.org/en) - Installer nyeste LTS-versjon av NodeJS som inkluderer npm (JavaScript sitt pakkesystem)
- [Visual Studio Code](https://code.visualstudio.com/): eller en annen kodeditor du er konfortabel med.
- Nettleser med DevTools: f.eks. [Chrome](https://www.google.com/intl/no/chrome/) eller [Firefox](https://www.firefox.com/nb-NO/) for debugging.
- Git: installert lokalt (f.eks [git-scm](https://git-scm.com/) eller følg [denne guiden](https://github.com/git-guides/install-git)), og en [GitHub-bruker](https://github.com/login) for å kunne pushe kode og levere oppgave.

Når verktøyene over er klare:

1. **Klone repoet**: Last ned/kopier dette repoet til din maskin ([link](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)). Hvis du ikke har push-tilgang, kan du _forke_ repoet på GitHub og deretter klone din egen fork.
2. **Opprett en branch**: Lag en ny branch for arbeidet ditt, med et fornuftig navn. For eksempel, `assignment-<ditt-navn>` (ingen mellomrom eller norske tegn). Pass på at du **jobber på din egen branch** og ikke på `main`.
3. **Åpne prosjektet**: Åpne mappen i VS Code eller ditt IDE. Det kan være lurt å installere anbefalte utvidelser som Prettier (for kodeformatering).
4. **Arbeidsflyt**: Jobb deg gjennom oppgavene i rekkefølge (HTML → CSS → JavaScript → Verktøy). For hver seksjon:
   - Les emnets `README.md` som inneholder forklaringer og eksempler.
   - Utfør oppgavene beskrevet i emnets `ASSIGNMENT.md`
   - Commiter endringer ofte (minst én commit per oppgave eller deloppgave). Skriv meningsfulle commit-meldinger (på engelsk, f.eks. `"Add semantic HTML structure"`).
   - Push branchen din til GitHub jevnlig (`git push`).
5. **Finale-oppgave**: Når du har fullført alle modulene, gjennomfør den avsluttende **Oppgave** (beskrevet i `CHALLENGE.md`). Sett av 1–3 timer i én økt til denne, som om det var en mini-eksamen.
6. **Levering (Pull Request)**: Når du er ferdig, åpner du en Pull Request (PR) fra din branch inn til hovedrepoet (branch `main`). Vi har lagt ved en PR-mal som vil hjelpe deg å oppsummere arbeidet ditt – inkluder bl.a. lenker til skjermbilder/konsoll-output som bevis, og svar på refleksjonsspørsmål.
7. **Tilbakemelding**: Veileder vil se gjennom PR-en din. Målet er å bekrefte at du har fått med deg det viktigste. Om noe mangler vil vi be deg om å gjøre utbedringer.

## Regler for hjelp underveis

> [!NOTE]  
> Du kan selvfølgelig diskutere og samarbeide med andre generelt, men selve oppgaveimplementasjonen skal du forstå og skrive selv. Ikke bare kopier kode uten å forstå hva den gjør. Husk: dette er for _din_ læring!

Du jobber selvstendig denne uka, men det betyr ikke at du _aldri_ kan spørre om hjelp. Vi er tilgjengelige for spørsmål – men vi forventer at du **viser hva du har prøvd** først. Det betyr: før du sender inn et spørsmål, prøv å feilsøke selv og bruk f.eks. [Google](https://www.google.com/), [MDN](https://developer.mozilla.org/en-US/), [w3school](https://www.w3schools.com/) eller andre ressurser. Om du står fast, kan du opprette en issue i dette repoet (vi har en egen "Question"-mal du kan bruke). I spørsmål/issues må du alltid beskrive:

- Hva du forsøker å få til (mål)
- Hva du har gjort for å løse det (dine forsøk: kode, steg, kilder du leste)
- Hva som skjedde (feilmelding, uventet oppførsel)
- Hva du tenker kan være galt, eller spørsmål om spesifikke deler du ikke skjønner

Med denne "Hva jeg har prøvd"-regelen får du øvelse i å debugge selv, og vi kan gi mer målrettet veiledning.

## Innhold i repoet

Dette repoet inneholder alt du trenger av oppgavebeskrivelser og dokumentasjon for selvstudiet. Her er oversikten:

- **HTML/** – Grunnleggende HTML (semantisk struktur, tilgjengelighet, skjemaer)
- **CSS/** – Grunnleggende CSS (box-modellen, layout med Flexbox/Grid, responsivt design, komponentvennlige CSS-vaner)
- **JavaScript/** – Grunnleggende moderne JavaScript (ES6+ syntaks, arrays & objekter, destructuring, spredningsoperator, array-metoder, moduler, DOM-manipulasjon, events, async/await, fetch API, JSON)
- **Tooling/** – Verktøy og arbeidsflyt (VS Code, DevTools debugging, npm scripts, kjøre en dev-server med Vite, Prettier-formattering, Git grunnprinsipper)
- **Final-Challenge.md** – Spesifikasjon for avsluttende oppgave ("React/Next Readiness Challenge") med krav og vurderingskriterier.
- **React-Next-Readiness-Checklist.md** – Sjekkliste som viser hvordan ferdighetene fra hver modul kommer til nytte i React/Next.js. Bruk denne for å forstå _hvorfor_ vi gjør alt dette.
- **Review-Session-Agenda.md** – Agenda for den avsluttende fellessesjonen (slutten av uka) – gir en pekepinn på hva vi vil fokusere på (vanlige hindringer og det å lese kode).
- **.github/** – Inneholder maler for Pull Request og Issues. Pull request-malen hjelper deg å oppsummere arbeidet ved innlevering. Issue-malene kan brukes hvis du trenger å stille et spørsmål eller rapportere en teknisk bug underveis.

## Vurdering og videre oppfølging

Dette selvstudiet er _ikke en test du får karakter på_, men det er anbefalt å gjennomføre før du starter på React/Next-kurset. Hver moduloppgave og den avsluttende challengen må være gjennomført for at du skal bli "godkjent". Hvis du sitter igjen med kunnskapshull eller oppgaver du ikke fikk til, vil vi hjelpe deg å tette disse før eller i starten av hovedkurset.

Det viktigste er at du gjør et ærlig forsøk, lærer av oppgavene, og søker hjelp når det trengs. Lykke til med arbeidet – vi gleder oss til å se hva du får til i løpet av uka, og til å ønske deg velkommen til React/Next-kurset med et solid grunnlag!

## Viktig disclaimer

AI har blitt brukt for å generere nødvendig dokumentasjon og markdown formattering.
