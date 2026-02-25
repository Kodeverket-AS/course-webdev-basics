
export async function NewsById(id){
    const url = "https://hacker-news.firebaseio.com/v0/newstories.json";
try {
const response = await fetch(url)

} catch (error){
    console.log("error")
}
}