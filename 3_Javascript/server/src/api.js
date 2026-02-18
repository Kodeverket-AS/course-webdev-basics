export async function fetchData(){
try{
const res = await fetch("https://dog.ceo/api/breeds/image/random");

if (!res.ok){
    throw new Error(`Error: ${res.status}`);
}

const data = await res.json();
return data;

} catch (error){
console.log(error)
return null;
}
}
     