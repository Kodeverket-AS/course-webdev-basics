[x] - sett opp vite prosjekt.
[x] - lag html struktur med header, main og footer.
[x] - lag innhold i header. 
[x] - legg inn to elementer i main. Form og div som skal holde news.
[x] - lag innhold i footer.
[x] - lag basic web component.
[x] - lag api til web component og export/inport.
# Laget egen liste og fikk hjelp av AI til å bryte den videre ned (Jeg hadde alt i hodet fra før, bare fint med en liste)
[] - Test API og få ut noe tekst.
  [] - Lag en midlertidig test-kall (i en egen funksjon eller direkte i web component)
  [] - Hent én kjent artikkel-ID og console.log hele objektet
  [] - Sjekk at async/await + try/catch fungerer uten feil i konsollen

[] - Lag funksjonen getNewest
  [] - Lag en asynkron funksjon som heter getNewest (ingen parametere)
  [] - Sett opp try/catch rundt hele funksjonen
  [] - Inne i try: fetch den riktige newstories.json-urlen
  [] - Vent på responsen med await
  [] - Sjekk om respons.ok – hvis ikke, kast ny Error med melding
  [] - Vent på .json() for å få arrayen med ID-er
  [] - Ta bare de 10 nyeste (første 10 i arrayen)
  [] - Returner arrayen med tall-ID-er
  [] - I catch: console.error feilen og returner tom array []

[] - Lag funksjonen getNewsById (merk: oppgaven heter getNewsById, ikke getNewestBId)
  [] - Lag en asynkron funksjon som heter getNewsById og tar ett parameter: id (tall)
  [] - Sett opp try/catch
  [] - Inne i try: bygg URL-en med ${id} og fetch den
  [] - Vent på responsen med await
  [] - Sjekk om respons.ok – hvis ikke, kast error
  [] - Vent på .json() og returner hele objektet
  [] - I catch: console.error og returner null eller tomt objekt

[] - Lag funksjonen createArticleElement
  [] - Lag en vanlig funksjon (ikke async) som heter createArticleElement
  [] - Funksjonen tar ett parameter: articleObj (objektet fra getNewsById)
  [] - Bruk destrukturering til å hente ut: by, time, title, url, score OG text (hvis text finnes)
  [] - Opprett <article>-elementet
  [] - Opprett <h3>-elementet og sett teksten til "title (score)"
  [] - Opprett <p>-elementet for text og sett inn teksten (hvis den finnes)
  [] - Opprett <span>-elementet
  [] - Inne i span: opprett <p> med teksten "posted by (by) at (time)"
  [] - Opprett <a>-elementet med riktig href og teksten "Read more"
  [] - Legg til elementene i riktig rekkefølge med appendChild
  [] - Returner det ferdige <article>-elementet

[] - Bruk funksjonene til å fylle web componenten
  [] - Gå inn i web component-klassen din (f.eks. connectedCallback eller en egen async init-metode)
  [] - Kall getNewest() og vent på resultatet (await)
  [] - Loop gjennom de 10 ID-ene
  [] - For hver ID: kall getNewsById(id) med await
  [] - Hvis du får tilbake et objekt: kall createArticleElement(objektet)
  [] - Append det returnerte <article>-elementet til news-diven / shadowRoot
  [] - (Valgfritt men anbefalt) Bruk Promise.all() for å hente alle artiklene parallelt (raskere lasting)
  [] - Legg til feilhåndtering hvis noen artikler ikke laster

[] - Test hele løsningen
  [] - Start utviklingsserveren (vite)
  [] - Last siden og sjekk at akkurat 10 artikler dukker opp i news-delen
  [] - Sjekk at tittel, score, by, time og "Read more"-lenke vises riktig
  [] - Klikk på lenkene og se at de går til riktig URL
  [] - Åpne konsollen og se at det ikke er noen feil
  [] - Test med dårlig nett / offline for å se at try/catch fanger feil

[] - Lag fungsjoner til header - (Sort newest, sort oldest)
[] - lag fungsjoner til main - (Søkefungsjon til form)
[] - lag fungsjon til footer - (Back to top btn)
[] -
[] -
[] -