# Oppgave: CSS-styling

I denne oppgaven skal du style HTML-siden du laget i forrige modul ved hjelp av CSS. Fokuser på layout og responsivitet, og innarbeid gode vaner for å unngå at stiler "lekker" for mye. Du står fritt til å velge farger og detaljer, men vi vil at du spesielt øver på **Flexbox**, **Grid** og **media queries**.

## Oppgavesett

1. **Opprett CSS-fil:** Lag en ny fil, f.eks. `style.css`, og legg inn en `<link rel="stylesheet" href="style.css">` i `<head>` på HTML-filen. (Husk at sti/filnavn må stemme.) Dette vil koble CSS-en din til HTML-siden.
   - _Tips:_ Sett gjerne `* { box-sizing: border-box; }` øverst i CSS-filen for å gjøre at padding/border inkluderes i elementers oppgitte bredde (en vanlig praksis som forenkler layoutberegninger).
2. **Grunnleggende styling:** Påfør noen generelle stiler for å gjøre siden litt penere:
   - Sett font (skrifttype) og bakgrunn-/tekstfarger etter smak ved å style `body` eller ved bruk av f.eks. [Google Fonts](https://fonts.google.com/knowledge/using_type/using_web_fonts) (valgfritt).
   - Gi `<header>`-seksjonen en tydelig bakgrunn eller ramme, slik at den skiller seg ut som toppbanner.
   - Fjern standard marginer/padding som nettleseren legger på visse elementer hvis nødvendig (f.eks. `body { margin: 0; }` for å fjerne default margin).
3. **Navigasjonsmeny med Flexbox:** Style navigasjonsmenyen din:
   - Hvis du har menyen som en liste (`<ul>` med `<li>`), bruk `display: flex;` på listecontaineren for å legge lenkene horisontalt. Hvis lenkene er direkte i `<nav>`, kan du sette `<nav>{ display: flex; }</nav>`.
   - Bruk `justify-content` for å fordele menyelementene horisontalt (f.eks. `space-between` eller `space-around` så de sprer seg utover hele bredden).
   - Bruk `align-items: center;` hvis du vil sentrere lenkene vertikalt innenfor nav (nyttig hvis nav har høyde eller padding).
   - Fjern punktlisten (list-style) hvis du brukte `<ul>`, og fjern default padding/margin på UL slik at menyen ser pen ut.
   - Style lenkene: f.eks. uten underline (`text-decoration: none;`), med en hover-effekt (f.eks. endre farge ved `:hover`), og litt padding for å gjøre dem klikkbare.
4. **Layout med Grid (eller Flexbox):** Siden din har ulike seksjoner som logisk kan ligge ved siden av hverandre på bredere skjermer (f.eks. `<section>` eller `<article>`), lag et to-kolonne oppsett:
   - Pakk de aktuelle seksjonene inn i en container-div (hvis de ikke allerede er under samme parent). Gi denne containeren en klasse, f.eks. `<div class="layout-container">`.
   - Sett `display: grid;` på containeren og bruk `grid-template-columns` til å lage to kolonner. For eksempel `grid-template-columns: 2fr 1fr;` for en bred kolonne for hovedinnhold og en smalere for sideinnhold.
   - Bruk `gap` for å få mellomrom mellom kolonnene.
   - Alternativt: Du kan oppnå det samme med `display: flex;` på containeren og `flex: 2` på hovedseksjonen og `flex: 1` på sideseksjonen. Bruk den teknikken du føler deg mest komfortabel med.
   - Hvis du ikke har et separat sideinnhold eller skjema, kan du likevel øve: for eksempel legge to relevante seksjoner ved siden av hverandre med grid.
5. **Responsiv tilpasning:** Legg inn minst én media query for å forbedre utseendet på smale skjermer (mobil):
   - F.eks. `@media (max-width: 600px) { ... }` hvor du:
     - Endrer navigasjonsmenyen til en kolonne (vertikal stacking) ved å sette `nav { flex-direction: column; }` (eller hvis du brukte ul, `ul { flex-direction: column; align-items: flex-start; }`).
     - Justerer kolonne-layouten din fra steg 4 til én kolonne: f.eks. `.layout-container { grid-template-columns: 1fr; }` (eller tilsvarende hvis flex: kanskje sette `flex-direction: column;`).
     - Eventuelt øker font-størrelser eller knappestørrelser for bedre lesbarhet på mobil.
   - Test ved å gjøre nettleservinduet smalt eller bruk inspeksjonsverktøy for mobilvisning.
6. **Bilde- og formateringstips:**
   - Sørg for at bildene dine er responsive: legg til `img { max-width: 100%; height: auto; }` i CSS, slik at bildene skalerer ned på små skjermer i stedet for å stikke utenfor.
   - Legg til litt margin/padding rundt hovedinnhold og seksjoner slik at siden ikke virker "klemt" helt i kantene. F.eks. `main { padding: 16px; max-width: 800px; margin: 0 auto; }` for å begrense linjelengden på stor skjerm og sentrere innholdet.
   - Hvis noe tekst er vanskelig å lese pga bakgrunnsbilde eller farge, juster fargene for god kontrast.
   - Se på hvordan bildet scalerer seg og sjekk om du må bruke [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/object-fit)
7. **Klasser og struktur:** Gå gjennom HTML-koden din og sørg for at du har brukt klasser for å koble til CSS:
   - Hvis du har styling som fortsatt treffer elementer via tag-navn (f.eks. `nav p { ... }` eller lignende), vurder å legge til en class i HTML og bruke den i stedet, for å gjøre stilen mer målrettet.
   - Unngå å bruke ID-er til styling. Om du brukte `id` for å style noe, bytt til `class` for konsistens.

## Akseptansekriterier

For å betrakte oppgaven som _bestått_ skal følgende minimum være oppfylt:

- CSS-filen er korrekt linket til HTML (stilene lastes inn når du åpner siden i nettleser).
- Navigasjonsmenyen vises horisontalt på desktop og er brukervennlig (lenker har padding/hover-effekt, ingen stygge bullets om liste ble brukt).
- Layout-containeren (hovedinnhold vs sideinnhold/aside) har to kolonner på brede skjermer, og faller tilbake til én kolonne på smale skjermer (via media query).
- Minst én media query er implementert for å håndtere en responsiv endring (f.eks. meny eller kolonner).
- Innholdet er lesbart og tilpasser seg skjermen: ingen horisontal scrolling behøves på mobil, bilder skalerer, tekst har passende størrelse.
- CSS-koden følger gode praksiser:
  - Det meste av styling er knyttet til klasser fremfor tag-noder eller ID.
  - Koden er ryddig, riktig indentert og dupliserer ikke unødig (bruk felles klasser der det gir mening).
- Du har kjørt formateringsverktøy (Prettier eller VS Code format) slik at innrykk og spacing i CSS-filen er konsistent.

## Refleksjon

Tenk over følgende utsagn for å vurdere om du har forstått det vi har gått igjennom. Hvis du ikke kan svaret på spørsmålet eller ikke klarer å forklare det skikkelig, så kan du klikke på liken for å repitere emnet.

1. wip
