1. Det er en algoritme som setter rekkefølgen på hvilken styling som har høyest prioritet på hvert element.

2. CSS selector ex:  
   a: p {border: solid 1px red} - velger alle p element i html slik at du kan style eller gjøre noe med den.  
   b: .intro - velger elementer med class="intro" i html slik at du kan style eller gjøre noe med den.

3. Del 1.  
   Properties:  
   Ex: interpolate-size - Brukes som regel til å animere bredde og/eller høyde på en kontainer.

   Functions:  
   Ex: clamp() - Brukes til å holde en verdi flytende mellom to verdier. At et element kan øke eller minske innen en viss rekkevidde.

   Data types:  
   Ex: <calc-sum> - Dette er en datatype som representerer et utrykk som utfører en kalkulering.

   Units:  
   Ex: deg - Dette er en enhet som sikter til nummer-verdi og den setter antall grader rotasjon på et objekt.

   Del 2.  
   Si du har disse CSS linjen:  
   transform: rotate(45deg); - <angel> Datatype representerer en vinkel verdi i grader/deg.  
   width: calc(100% - 20px); - Function bruker calc() for å beregne bredde dynamisk.  
   height: 10em; - Unit bruker "em" som enhet til høyde.

4. del 1.  
   Det er en måte å velge elementer som ligger utenfor doc tree.

   del 2.  
   Det er en effektiv måte å velge flere elementer med samme tag, class name eller plassering i doc tree. Det gir også muligheten å lett gi elementer interaktivitet eller markering (ex: besøkte linker er markert).

5. Det er modellen av "boksen" et element har. Margin, Bord.  
   Content-box bruker vi for mere kontroll over innholdsstørrelsen, men det kan bli komplikasjoner ved dette i responsivt design så derfor tar mange å setter border-box som global standard (da regner datan ut størrelse på content-box fra border og inn. altså så tar pc med i utregning av størrelse på objekt/content. objekt + padding + border = border-box).

6. overflow sikter til tekst eller annet innhold flyter ut av sin "box", vi kan kontrolere om det som flyter over skal være synelig, ikke synelig eller at man kan skrolle i den ruten for å se innholdet.

7. positioning av et element sikter til hvordan vi kan plassere det elementet (boksen som holder elementet) på siden. Vi har flere muligheter her er to eksempel:  
   position: absolute; - med denne kan man plassere elementet hvor som helst på siden når det flytter elementet til "overflaten" og du setter kordinater til hvor elementet skal være plassert(Viktig, bruk "position: relative; for å være relavivt plassert ut fra parent, uten dette er plasseringen relativt ut fra global plassering").  
   position: sticky; - Du kan sette kordinater til et element slik at når du skroller ned til elementet og skal skrolle vidre ned så setter det fast på skjermen enda du skroller vidre ned.(sticky elementer kan overlappe hverandre)

8. z-index - tenk deg en bunke med pappirer, z-index er plassering til elementet i satt bunke. et element med høyere z-index ligger over elementer med lavere index.

9. display: block; - brukes som regel til enkle elementer som skal ta opp en hel linje, eller som holder på elementer med gjentakende avstand mellom hverandre, overskrifter eller fullbredde bannere.  
   display: none; - Fjerner element/seksjon helt fra layout (tar ingen plass).  
   display: inline flow-root; - om du trenger et element som flyter med teksten den er plassert i.  
   display: flex; - en enkel måte å håndtere linjer med innhold. navbar, bilde linje, card linje.  
   display: grid; - for kontroll over elementer i 2 dimensjoner, ex: hvor du har 5x5 bilder og vil ha kontroll over plassering på hvert element i 5x5 grid.

10. responsiv design er design som endrer seg ut fra skjermstørrelse.  
    media query, for å sette en grense til hvor et element skal endre design, om skjerm er større eller mindre en 1080px endres designet.  
    Kan og settes til å tilpasse nettsiden brukerens preferanse fra browser (dark mode, redusere animasjon).  
    Kan og brukes til å sette design på print, om det skulle være noe som skal printes.

11. en overgang (transition) kan være at et element flytter seg fra plassering A til til Å med en satt tid. noe som lager en animasjon av at objektet flytter seg. Man kan justere hastighet/tid til transition som gir animasjonen en raskere eller roligere transition fra A til Å.  
    Kan og settes til en forsinkelse, trykk på A, animasjon skjer etter x-sekunder.

12. på selve elementet setter du rammene til animasjon som:  
    animation-duration: 7s;  
    animation-name: slide-out;

    så du bruker @keyframes dette beskriver til data hvordan animasjonen av elementet skal bevege seg for vert key-frame.  
    @keyframes slide-out {  
     from {  
     translate: 100vw 0;  
     scale: 200% 1;  
     }

    to {  
     translate: 0 0;  
     scale: 100% 1;  
     }  
    }

13.

14.

Extra

1.

2.
