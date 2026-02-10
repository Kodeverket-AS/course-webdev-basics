# Oppgave: Interaktivitet med JavaScript

Nå skal du gjøre siden din levende ved hjelp av JavaScript. Vi bygger videre på HTML/CSS-prosjektet ditt ved å legge til en ekstern script-fil og implementere noen dynamiske funksjoner.

> [!WARNING]  
> For å teste mye av dette trenger du å kjøre siden din via en lokal server ellers vil ting som modul-import og fetch av lokale filer bli blokkert av nettleseren.

For å sitte opp en utviklingsserver for disse oppgavene kommer vi til å bruke Vite fordi det er en robust og enkel løsning, hvis du ønsker å lese mer om dette programmet kan du lese [her](https://vite.dev/). For å installere Vite må vi ha Node.js installert for å få tilgang på NPM registeret (_hvis du bruker en annen run-time kan du finne riktig kommando [her](https://vite.dev/guide/#scaffolding-your-first-vite-project)_)

Åpne terminalen din og kjør følgende kommando fra denne mappen _(du kan f.eks høyreklikke på `3_Javascript/server` mappen og velge `Open in integrated terminal`)_

```bash
npm install
```

etterfulgt av

```bash
npm run dev
```

For å starte utviklingsserveren. I terminalen vill du se en addresse du kan besøke hvis Vite startet som den skulle.

<details>
  <summary>Guide for å lage nytt prosjekt</summary>
 
```bash
npm create vite@latest
```

Du vill få følgende steg.

1. Skriv enn ditt prosjekt navn, du kan bruke navnet ditt her.
2. Velg `Vanilla` siden vi ikke trenger noen rammeverk ennå.
3. Velg `JavaScript` siden vi ikke skal se på TypeScript ennå.
4. Hvis du får valg om å delta i "Vite beta" eller undersøkelser kan du velge `No`
5. Velg `Yes` for å installere nå, ellers må du uansett gjøre det senere.

Server starter automatisk, men du kan bruke følgende kommando for å starte manuelt.

```bash
npm run dev
```

</details>

## Oppgavesett

1. Kopier over innholdet i HTML og CSS filen fra oppgavene du skrev tidligere, vi skal nå bygge videre på de. Resten av oppgavene vill foregå i `server/src/main.js` filen
2. Demonstrer at du skjønner hvordan alle data-typene i JS ser ut ved å lage en variabel (med innhold) for hver type. Gjerne bruk data-typen som en del av navnet på variabelen. Hopp over `void`
3. Demonstrer at du kan lage en vanlig og en arrow funksjon, begge disse funksjonene skal gjøre følgende
   - Ta i mot en vanlig parameter, og en rest parameter.
   - Bruk [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/console) til å logge alle parametre
   - kall en av funksjonene og send alle variabler du lagde i oppgave 2. som argumenter
4. På tide av vi gjør noe mer komplekst med arrays og løkker
   - Lag en variabel med 99 tall, fra 1 til 100. Bruk f.eks Array prototyper som en snarvei
   - Lag en funksjon som kan ta imot et tall, hvis tallet er et prim-tall, så skal du returnere `Prime!`, ellers returnerer du tallet, men som en streng.
   - Lag en variabel og bruk [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) til å lage en ny array med resultatet fra prime funksjonen du nettopp lagde
   - Log innholdet i variabelen til consol.
5. Nå skal vi se på hvordan vi kan påvirke HTML med JS ved å koble opp form du lagde tidligere
   - Lag en variabel som heter `formElement` hvor du kan lagre form i en variabel, bruk enten [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) eller [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) til å knytte den opp mot `<form>` elementet
   - Lag en funksjon som heter `formLogger` som tar imot `event` som parameter, vi skal bruke den senere
   - Det finner mange måter å gjøre forms interaktivt, en måte er å bruke variabelen vi lagde i sted og [ligge på en event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Her trenger vi to argumenter, først `"submit"` som eventen vi skal følge med på, og så `formLogger` som funksjonen vi skal kalle.
   - I `formLogger` funksjonen skal du gjøre følgende
   - Hent ut [formData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) fra eventen
   - Lag en variabel for hvert `input` felt med [.get()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get)
   - Log ut i konsollen alle variabelene i følgende format: `<name>: <value>`, f.eks `Name: Ole Gunnar`
   - Bruk JS til å sitte disabled status for knappen i form til `true`
6. Lag en ny JS fil, du bestemmer navn, og lag en async funksjon i denne filen, kall funksjonen for `fetchData`.
   - `fetchData` skal bruke [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) til å hente inn følgende url
     ```console
     https://dog.ceo/api/breeds/image/random
     ```
   - Du vil da få tilbake en JSON som ser slik ut
     ```json
     {
       "message": "https://images.dog.ceo/breeds/dachshund/dog-2643027_640.jpg",
       "status": "success"
     }
     ```
   - `fetchData` funksjonen skal retunere bildet hvis status er "success", hvis ikke så skal funksjonen returnere `null`
7. hene

## Akseptansekriterier

- JS-filen kjører uten blokkende feil.
- Minst en interaktiv handling fungerer (klikk eller form submit).
- Moderne JS-syntaks brukt (`let/const`, arrow function, template literals).
- Eksempel på array-metoder + destructuring/spread.
- `fetch` brukt til å hente JSON og data håndtert.

## Refleksjon

Tenk over følgende utsagn for å vurdere om du har forstått det vi har gått igjennom. Hvis du ikke kan svaret på spørsmålet eller ikke klarer å forklare det skikkelig, så kan du klikke på liken for å repitere emnet.

- [Hva er en datatype i javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#data_types), og hva er forskjellen på [primitive typer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values) og [objekter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#objects)?
- [Hvilke primitive datatyper finnes i JS](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), og [når bruker du hver av dem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values)?
- [Hva er forskjellen mellom `null` og `undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null#description)?
- [Hva er en variabel](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview#variables), og [når velger du `const` vs `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#constants)?
- Hvorfor bør `var` som regel unngås i moderne JS?
- [Hva er en funksjon](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions), og hvilke to vanlige måter finnes for å definere en funksjon?
- [Hva er en operator i JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators), og [hva er prioriteringsrekkefølgen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity)?
- [Hva er kortslutning (short-circuit)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting)?
- [Hva er type-coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)?
- [Hvorfor er `===` vanligvis tryggere enn `==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)?
- [Hva er scope i JS og hva er forskjellen mellom globalt, funksjons- og blokk-scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)?
- [Hva er hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), og [hva er temporal dead zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)?
- Hva er en side-effekt i en funksjon?
- [Hva er en callback-funksjon](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)?
- [Hva vil det si å mutere data](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)?
- [Hvilke datatyper er immutable](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), og [hvilke er mutable i JS](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)?
- Hvorfor er immutable oppdateringer viktige i moderne frontend?
- [Hva er destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring), og [hvordan bruker du det på objekter og arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#examples)?
- Hva er forskjellen på [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) og [rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) (selv om syntaksen ser lik ut)?
- Hvordan fungerer [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) og [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), og [hva er forskjellen mellom named og default exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports)?
- [Hva er en prototype i JS, og hva betyr prototype chaining](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)?
- Kan du nevne vanlige prototype-metoder for [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods), [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods) og [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)?
- Hva er forskjellen på `map`, `filter`, `find` og `reduce`?
- [Hva betyr `this` i JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), og [hvorfor oppfører det seg ulikt i arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)?
- [Hva er JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json), og [når bruker du `JSON.parse` og `JSON.stringify`](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)?
- Hva betyr det at JS er asynkront?
- [Hva er et promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) og kan du forklare [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)?
- [Hvordan håndterer du feil i async kode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#error_handling)?
- [Hvordan fungerer try/catch/finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)?

Anbefaler at du også har kjentskap med følgende konsepter, du trenger ikke å kunne svare på spørsmålene nå

- [Hva er en closure, og kan du forklare et praktisk eksempel der closure er nyttig](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)?
- Hva er forskjellen mellom ECMAScript Modules (ESM) and CommonJS (CJS)?
- Hva er forskjellen mellom vanlige funksjoner og pil-funksjoner (arrow-functions)?
- Hva er [stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) i JS ([video guide](https://www.youtube.com/watch?v=eiC58R16hb8)),
- Hva er Jquery og hvorfor var det så populært
- Hvordan debugger du JS effektivt i DevTools (breakpoints, call stack, watch)?
