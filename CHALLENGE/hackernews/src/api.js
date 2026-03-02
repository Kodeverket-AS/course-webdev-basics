//! Se på dette for å forstå

// https://www.youtube.com/watch?v=AEsWhupZqoA
// https://www.youtube.com/watch?v=2I7uX8m0Ta0
// https://www.youtube.com/watch?v=bNwZkSGUAqk
// https://www.youtube.com/watch?v=7rShLWHa1rQ

// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots

// https://web.dev/articles/custom-elements-best-practices
// https://github.com/web-padawan/awesome-web-components



// main.js 
// Dette laget skl\al ta seg av HTTP kommunikasjon med server. (Fetch kall og return json)

export async function getNewest(){
    
try {
    // Fetch response from api
const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
if(!response.ok){
    console.log(`Failed to fetch story with ID: ${response.status}`)
    return null;
}

const ids = await response.json()

if(!Array.isArray(ids) || ids.length === 0) throw new Error("No stories found");

return ids;
    
} catch (error){
    console.error("Failed:", error)
    return [];
}
}



export async function getNewsById(id) {
    try{
        const articleId = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    if(!articleId.ok){
        console.log(`Failed to fetch storry: ${articleId.status}`)
        return;
    }

    const article = await articleId.json();
    
    if(!article){
        console.log(`Failed to fetch article: ${article.status}`)
        return;
    }

    return article;

    } catch (error){
        console.error(`getNewsById(${id}) feilet:`, error);
    return null; 
    }
    
}
