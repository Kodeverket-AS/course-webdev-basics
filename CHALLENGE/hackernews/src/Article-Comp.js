
import { getNewest, getNewsById } from "./api";

//! Hent Data og legg til comp
async function renderData() {
  
}



// Dette laget skal kun ta seg av å Rendre data (UI-lag). 
//! Det visuelle laget.
class CreateArticleElement extends HTMLElement{
    constructor(){
        super();
        // Oppretter Shadow DOM (isolert DOM-tre)
        this.attachShadow({mode: "open"});


        const d = getNewsById(1);
        console.log(d);

       this.innerHTML = `
      <style>
      .article-cont{
      display:flex;
      flex-direction:column;
      }

      .top{}

      .bottom{}


      </style>

      <section className="article-cont">

      <div className="top">
       <p id="id">${}</p>
       <a href="${}" id="title">${}</a>
      </div>

      <div className="bottom">
        <p id="score">${}</p>
        <p id="by">${}</p>
        <p id="time">${}</p>
      </div>
      </section>
       ` 
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
       
    };
    

};

customElements.define("create-article", CreateArticleElement);


//! RENDERING



// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots