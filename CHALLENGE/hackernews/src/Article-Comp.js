import {Newest} from "./main.js"
import {getNewsById} from "./main.js"

class CreateArticleElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const d = Newest();

        // Statisk innhold
        const wrapper = document.createElement("section");
        wrapper.className = "wrapper";

        const title = document.createElement("h3");
        title.className= "news-title";
        title.textContent = d.title;
        

        const para = document.createElement("p");
        para.className = "para";
    
            
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
        wrapper.appendChild(title);
        wrapper.appendChild(para); 

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
        this.shadowRoot.querySelector(".news-title").textContent = d.title;
    };


    async function loadLatestArticles() {
        const ids = await Newest();

        const top10 = ids.slice(0, 10);

  for (const id of top10) {
    const article = await getNewsById(id); // ← din getNewsById()
    if (article) {
      const articleEl = CreateArticleElement(article);
      document.getElementById("articles-container").appendChild(articleEl);
    }
  }
};
loadLatestArticles() 

// customElements.define("article-comp", CreateArticleElement)


// bruk = ArticleElement()

// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots