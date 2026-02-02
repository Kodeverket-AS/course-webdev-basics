1. Hva står `DOM` for og hva er det?

- Document object model, eller DOM er en representasjon av HTML-dokument i minnet, som et tree av noder. Det viser struktur og innhold på nettsiden.

2. Hva er de vigtigste delene av en `DOM` tree som må være inkludert for at en HTML fil skal fungere?

- <!doctype html> som forteller at det er et html document.
- <html lang="en"></html> dette er selve DOMen og lang forteller hvilket språk som er forventet.
- <head> inneholder viktig data som <meta charset="UTF-8"> dette forteller hvilket karakter sett som forventes (UTF-8 støtter alle språk).
- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> Dette gir DOMen informasjon at dette inneholder data til viewport, og at content skal ta opp full skjermbredde og skala 1 til 1.
- <body> Inneholder alt det synlige på siden, og er et direkte barn av <html>

3. Hva er et HTML element, og har du noen eksempler på elementer?

- det kan være en <p> tag som forventet innhold tekst innhold til siden, eller noe som en <body> tag, dette er selve body til siden, det som holder tekst, bilder, knapper eller video samlet på en side.

4. Hva er en HTML attribut, og har du noen eksempler på attributter og hvordan de brukes?

- Attributter brukes i kombinasjon med tags for å gi ekstra informasjon om elementet, for eksempel <img src="filsti-til-bildet.jpg" alt="Forklaring av hav bildet inneholder">. Her viser jeg til en alt="" attributt og src="". Her bruker alt-attributt for å beskrive bildet og src til å lede til bildet.

5. Hva er hovedforskjellen mellom `id` og `class` attributene og når vill du bruke dem?

- Forskjeller er i hvordan de er ment til å brukes, id skal hovedsakelig bare brukes en gang pr side (den er unik). class kan og skal brukes til flere elementer.
- Funnfact, id har høyere prioritet i CSS en class, ved tilfelle av samme navn vinne id.

6. Har rekkefølgen på elementer i HTML koden noe å si?

- Ja, browser leser koden fra topp til bunn.

7. Når du beskriver HTML kode, brukes vi ofte begrepene child og parent, hva mener vi her?

- En parent står høyere i hierarkiet. En child arver funksjoner eller egenskaper fra parent, men ikke omvendt.
