import {NewsById} from "./main.js"



class CreateArticleElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = "Komponent"
    }
}

customElements.define("article-comp", CreateArticleElement)


// bruk = ArticleElement()

// -Web Components- https://www.youtube.com/watch?v=2I7uX8m0Ta0

// -Using custom elements- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// -Using shadow DOM- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// -Using templates and slots- https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots