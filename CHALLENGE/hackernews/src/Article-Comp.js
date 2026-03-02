

import { getNewest, getNewsById } from "./api";

async function latestArticle(){
const data = await getNewest();
if(!data.ok) {
  console.log(`Error: ${data.status}`);
  return;
}

const top10 = data.slice(0, 10);

for (const id of top10){
  const article = await getNewsById(id)
}
if (article){
  document.getElementsById("create-article")
  articleElement.data = article;
  document.appendChild(articleElement)
}
}
latestArticle();




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
    
        // Setter metode for å ta mot data utenfra
        set data(article){
          this.render(article)
        }

        // Render data inn i DOM
        render(article){
          this.title.textContent = article.title;
          this.para.textContent = article.text;
        }
};

customElements.define("create-article", CreateArticleElement);


// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots