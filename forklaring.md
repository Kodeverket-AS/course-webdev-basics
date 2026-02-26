Du er nær, men det er flere konkrete feil som gjør at ingenting vises. Jeg går rett på sak og viser hva som faktisk må fikses.

🔴 Problem 1: NewsById() returnerer ingenting

I main.js:

return 

Dette returnerer undefined. Du må returnere data.

✔️ Riktig versjon:
export async function NewsById() {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    if (!response.ok) {
      throw new Error("No response");
    }

    const data = await response.json();
    console.log(data);

    return data;   // ← VIKTIG
  } catch (error) {
    console.log("Could not get data");
    return null;
  }
}
🔴 Problem 2: Du kaller aldri Conntent()

Metoden din kjøres aldri. Du må bruke connectedCallback() i en Web Component.

🔴 Problem 3: this.parentElement.textContent ødelegger alt

I constructor har du:

this.parentElement.textContent = "Content on its way";

Dette sletter hele <div id="news"> og alt inni.

❌ Fjern den linjen helt.

🔴 Problem 4: Du henter feil data

newstories.json fra Hacker News gir bare en liste med ID-er:

[12345, 12346, 12347 ...]

For å vise noe må du:

Hente ID-listen

Ta første ID

Hente selve artikkelen via:

https://hacker-news.firebaseio.com/v0/item/ID.json
✔️ Minimal fungerende versjon (bare for å teste at det virker)
main.js
export async function NewsById() {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    const ids = await response.json();
    const firstId = ids[0];

    const itemResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${firstId}.json`
    );

    const data = await itemResponse.json();

    return data;
  } catch (error) {
    console.log("Could not get data");
    return null;
  }
}
Article-Comp.js (fikset)
import { NewsById } from "./main.js";

class CreateArticleElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("section");
    wrapper.className = "wrapper";

    const title = document.createElement("h3");
    title.className = "news-title";
    title.textContent = "Laster...";

    const para = document.createElement("p");
    para.className = "para";

    wrapper.appendChild(title);
    wrapper.appendChild(para);

    this.shadowRoot.appendChild(wrapper);
  }

  async connectedCallback() {
    const data = await NewsById();
    if (!data) return;

    this.shadowRoot.querySelector(".news-title").textContent = data.title;
    this.shadowRoot.querySelector(".para").textContent = data.url;
  }
}

customElements.define("article-comp", CreateArticleElement);
Nå skal det:

Hente nyeste story

Vise tittel

Vise URL

Ikke slette DOM

Faktisk kjøre fetch