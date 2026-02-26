export async function NewsById(){
    
try {
const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
if(!response.ok){
    throw new Error("No response");
}

    const ids = await response.json();
    const firstId = ids[0];

    const itemResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${firstId}.json`
      );
    
    const data = await itemResponse.json();
    return data;
    
} catch (error){
    console.log("Could not get data")
    return null;
}
}




