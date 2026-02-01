# Oppgave: HTML-grunnlag

Nå skal du lage en enkel nettside ved å bruke semantisk HTML, inkludert et skjema. Oppgaven er å opprette en HTML-fil med struktur og innhold som beskrevet under. Bruk kun **HTML** i denne oppgaven (ingen CSS eller JavaScript enda).

## Oppgavesett

1. **Opprett HTML-fil:** Lag en ny fil som heter for eksempel `index.html` i denne mappen. Start filen med standard HTML5-struktur, og definer språk og tittel
2. **Semantisk layout:**
   - En **header**-seksjon (`<header>`) som inneholder en logo for siden (f.eks. sidens navn eller tittel).
   - En **navigasjonsmeny** (`<nav>`) med et par lenker inni header. Siden du ikke har flere sider, kan lenkene peke til `#` (seksjonslinker lenker) eller ulike seksjoner på samme side.
   - **Hovedinnholdet** i en `<main>`-seksjon.
     - Inni `<main>`, lag minst tre `<section>` eller `<article>` med noe innhold:
     - Start seksjonen med en passende `<h2>` mellomtittel.
     - Legg til et eller to avsnitt `<p>` med tekst (f.eks. en velkomstmelding eller beskrivelse).
     - (Valgfritt: Hvis det passer til ditt side-tema, kan du også legge inn en liste `<ul>` eller `<ol>` et sted i innholdet.)
   - En **footer**-seksjon (`<footer>`) nederst med noe info (f.eks. © ditt navn, eller en liten oppsummering).
3. **Bilde:** Legg inn minst ett bilde et sted på siden (f.eks. i main-seksjonen). Bruk `<img>`-taggen med korrekt `src` (du kan bruke et bilde du har, eller finne et fritt tilgjengelig bilde på nett) **og** husk å sette en passende `alt`-tekst som beskriver bildet.
4. **Skjema:** Lag et enkelt skjema (`<form>`) et passende sted på siden
   - Minst to tekstfelt (f.eks. "Navn" og "E-post"). Bruk `<input type="text">` for navn og `<input type="email">` for e-post.
   - Hvert tekstfelt skal ha en tilhørende `<label>` som beskriver feltet (f.eks. `<label for="navn">Navn:</label>`). Husk å koble `for`-attributtet til input `id`.
   - Gjerne et større tekstområde `<textarea>` for en melding eller lignende, med tilhørende `<label>`.
   - En send-knapp: `<button type="submit">Send</button>` inni skjemaet.
   - Sett gjerne `required`-attributt på felt som må fylles ut (for eksempel begge tekstfeltene), slik at nettleseren hjelper til med validering.
5. **Semantikk og korrekthet:** Gå gjennom HTML-koden din og sjekk:
   - Bruker du semantiske elementer der det er mulig? (Unngå unødvendige `<div>`-wrappere.)
   - Har alle bilder `alt`-tekst?
   - Har alle input-felter en tilknyttet `<label>`?
   - Har du kun **én** `<h1>` (som er sidens hovedtittel), og deretter `<h2>` for underoverskrifter, osv. i riktig rekkefølge?
   - Er HTML-en valid (ingen uavsluttede tagger, riktig nestet struktur)? Åpne filen i en nettleser for å se at alt innhold dukker opp. Du kan også bruke en HTML-validator for å dobbeltsjekke (valgfritt).

## Akseptansekriterier

For å betrakte oppgaven som _bestått_ skal følgende minimum være oppfylt:

- Det finnes en HTML-fil med gyldig struktur (doctype, html, head med charset og title, body).
- Siden inneholder `<header>`, `<nav>`, `<main>` og `<footer>` i riktig rekkefølge med fornuftig innhold i hver.
- Det finnes minst én `<section>` eller `<article>` med en underoverskrift og avsnittstekst i `<main>`.
- Minst ett bilde er inkludert med relevant `alt`-beskrivelse.
- Et skjema med minst to tekstfelt + tilhørende labels og en submit-knapp er tilstede.
- Alle input-felter har tilknyttede `<label>`-elementer, og alt-tekst er tilstede der det trengs.
- Koden er ryddig og korrekt indentert (tips: høyreklikk i VS Code og velg "Format Document" eller bruk Prettier hvis konfigurert).

## Refleksjon

Tenk over følgende utsagn for å vurdere om du har forstått emnene vi har gått igjennom i HTML, hvis du ikke kan svaret på spørsmålet eller ikke klarer å forklare det skikkelig, bør du repitere emnet.

1. Hva står `DOM` for og hva er det?
2. Hva er de vigtigste delene av en `DOM` tree som må være inkludert for at en HTML fil skal fungere?
3. Hva er et HTML element, og har du noen eksempler på elementer?
4. Hva er en HTML attribut, og har du noen eksempler på attributter og hvordan de brukes?
5. Hva er hovedforskjellen mellom `id` og `class` attributene og når vill du bruke dem?
6. Har rekkefølgen på elementer i HTML koden noe å si?
7. Når du beskriver HTML kode, brukes vi ofte begrepene child og parent, hva mener vi her?
