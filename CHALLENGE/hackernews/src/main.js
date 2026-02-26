export async function NewsById(){
    
try {
const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
if(!response.ok){
    throw new Error("No response");
}

const data = await response.json();
console.log(data);
return 
} catch (error){
    console.log("Could not get data")
    return null;
}
}




