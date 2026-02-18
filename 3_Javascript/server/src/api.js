export async function fetchData(){
try{
 const res = await fetch("https://dog.ceo/api/breeds/image/random")

if (!res.ok){
    console.log("Could not fetch")
    return null;
}

const data = await res.json();

}

catch(error){
    console.log("Error:", error)
}
}
    
    