

import { getNewest, getNewsById } from "./api";

// Dette laget skal kun ta seg av å Rendre data (UI-lag). 
//! Det visuelle laget.
class CreateArticleElement extends HTMLElement{
    constructor(){
        super();
        // Oppretter Shadow DOM (isolert DOM-tre)
        this.attachShadow({mode: "open"});

        // Statisk innhold
        // Husk! - i en web component 
        // this.* = permanent intern struktur. = en del av objektets indre tilstand
        // const = midlertidig hjelpevariabel = en lokal variabel som forsvinner etterpå
       
        this.wrapper = document.createElement("section");
        this.wrapper.className = "wrapper";

        this.title = document.createElement("h3");
        this.title.className= "news-title";

        this.para = document.createElement("p");
        this.para.className = "para";
    
        const style = document.createElement("style");
        style.textContent = `
        .wrapper{
        border:solid 1px var(--news-border);
        padding: 5px;
        margin: 10px 0px;
        border-radius: var(--br);
        background:var(--bg);
        }

        .news-title{
        font-size: 1.2rem;
        color: var(--text);
        }

        .para{
        font-size: 1rem;
        color: var(--text);
        }
        `
        // Setter sammen 
        this.wrapper.appendChild(this.title);
        this.wrapper.appendChild(this.para); 

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(this.wrapper);
    };
    
    set data(article) {
      this.title.textContent = article.title || "No title";
      this.para.textContent = article.text || "No content";
    }
};

customElements.define("create-article", CreateArticleElement);


//! DATA + RENDERING


async function latestArticle() {

  const container = document.getElementById("articles");
  if (!container) {
    console.error("Container #articles not found");
    return;
  }

  const ids = await getNewest();

  if (!ids || ids.length === 0) {
    console.log("No stories found");
    return;
  }

  const top10 = ids.slice(0, 10);

  // 🔥 Henter parallelt (mye raskere)
  const articles = await Promise.all(
    top10.map(id => getNewsById(id))
  );

  articles
    .filter(article => article) // fjern null
    .forEach(article => {
      const element = document.createElement("create-article");
      element.data = article;
      container.appendChild(element);
    });
}

  latestArticle();
  


// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots