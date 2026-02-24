export async function værApi() {
  const loc = "1-283156"
  try{
  const cW = await fetch(`https://www.yr.no/nb/innhold/${loc}/card.html`);
  if(!cW.ok) return null;

  const locD = cW.json();
  return locD;
 }
  catch(err){
    console.log(err);
 }
} 