
import { getNewest, getNewsById } from "./api";


class CreateArticleElement extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    };

    async connectedCallback(){
      await this.renderData()
    }

    async renderData(){
      const ids = await getNewest();
      const top10 = ids.slice(0, 10);
      const articles = await Promise.all(top10.map(id => getNewsById(id)))
      
      
        this.shadowRoot.innerHTML = `
        ${articles.map((article, index) => 
          `
          <div class="wrapper">
          <div class="top">
            <p class="id">${index + 1}</p>
            <a href="${article.url ?? "#"}" id="title">${article.title}</a>
          </div>

          <div class="bottom">
            <p id="score">Score: ${article.score} |</p>
            <p id="by">By: ${article.by} |</p>
            <p id="time">Time: ${article.time} |</p>
          </div>
          </div>
          `
        ).join("")}
        

        <style>
        .wrapper{
          display: flex;
          flex-direction: column;
          border:solid 1px var(--news-border);
          padding: 5px;
          margin: 10px 0px;
          border-radius: var(--br);
          background:var(--bg);
          }

        .top{
           display: flex;
           flex-direction: row;
           justify-items: start;
           align-items: center; 
           gap: 1rem;
        }

        .bottom{ 
          display: flex;
          flex-direction: row;
          justify-items: start;
          align-items: center; 
          
         }
        .id {
          color:rgb(247, 247, 247);
          text-decoration: none;
          font: 500;
          font-size: larger;
        }

        #title{
          color: rgb(247, 247, 247);
          text-decoration: none;
          font: 500;
          font-size: larger;
        }


        #score{
          color: rgb(136, 136, 136);
          text-decoration: none;
          font: 300;
          font-size: smal;
        }

        #by{
          color: rgb(136, 136, 136);
          text-decoration: none;
          font: 300;
          font-size: smal;
          padding: 0.5rem;
        }

        #time{
          color: rgb(136, 136, 136);
          text-decoration: none;
          font: 300;
          font-size: smal;
          margin: 0.5rem;
        }
        </style>
        ` 
    }
    
  };
  

customElements.define("create-article", CreateArticleElement);



