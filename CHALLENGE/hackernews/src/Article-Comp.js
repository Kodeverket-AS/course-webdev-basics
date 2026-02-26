import {NewsById} from "./main.js"

class CreateArticleElement extends HTMLElement{

    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});

        // Statisk innhold
        const wrapper = document.createElement("section");
        wrapper.setAttribute("class", "wrapper");

        const title = document.createElement("h3");
        title.setAttribute("class", "news-title");
        title.textContent = "Laster..." // Placeholder

        const para = document.createElement("p");
        para.setAttribute("class", "para");
        this.parentElement.textContent = "Content on its way";
        
        const style = document.createElement("style");
        style.textContent = `
        .wrapper{
        border:solid 1px var(--news-border);
        padding: 5px;
        margin: 10px 0px;
        border-radius: var(--br);
        background:var(--fg);
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
    };

    async Conntent(){
        try{
            const id = this.getAttribute("news-id")
            const data = await NewsById(id);
            if(!data) {
                console.log("No data at article comp")
                return null;
            };

            // oppdater kun deler som er dynamisk
            const title = this.shadowRoot.querySelector(".news-title");
            title.textContent = data.title;

            const para = this.getAttribute("para");
            para.textContent = data.p;

        }catch (err){
            console.log("catch error")
        }
    }

}

customElements.define("article-comp", CreateArticleElement)


// bruk = ArticleElement()

// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots