# Oppgave: Interaktivitet med JavaScript

Nå skal du gjøre siden din levende ved hjelp av JavaScript. Vi bygger videre på HTML/CSS-prosjektet ditt ved å legge til en ekstern script-fil og implementere noen dynamiske funksjoner.

**Merk:** For å teste mye av dette trenger du å kjøre siden din via en lokal server (ikke bare åpne .html-filen direkte). Du kan f.eks. bruke Vite dev server (hvis du har satt opp det i verktøy-modulen) eller VS Code sin _Live Server_-utvidelse. Ellers vil ting som modul-import og fetch av lokale filer bli blokkert av nettleseren.

## Oppgavesett

- wip

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
