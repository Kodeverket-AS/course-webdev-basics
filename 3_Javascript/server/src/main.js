/*
let number=67;
let string="Hello World";
let bigInt=1234567890123456789012345678901234567890n;
let boolean=true;
let nullValue=null;
let undefinedValue=undefined;
let symbol=Symbol("unique");
let object={name:"Ola", age:25};

function myFunction(firstArg,...restArgs){
    console.log(firstArg);
    for (let i = 0; i < restArgs.length; i++) {
        console.log(restArgs[i]);
    }
}

const arrowFunction=(firstarrowArgs,...restarrowArgs)=>{
    console.log(firstarrowArgs);
    console.log(restarrowArgs);
}



myFunction(number,string,bigInt,boolean,nullValue,undefinedValue,symbol,object);


const onetoninetynine=[];
for (let i=1; i<=99; i++){
    onetoninetynine.push(i);
}

function isPrime(num){
    if (num <= 1) return num.toString();
    if (num%2===0 && num!==2) return num.toString();
    for (let i=3; i<=Math.sqrt(num); i+=2){
        if (num%i===0) return num.toString();
    }
    return "Prime!";
}

const primeNumbers=onetoninetynine.map(isPrime);
console.log(primeNumbers);

*/

const formElement = document.getElementById("contact-form");

function formLogger(event){
    event.preventDefault();
    const formData=new FormData(formElement);
    const name=formData.get("name");
    const message=formData.get("message");
    console.log("Name:", name);
    console.log("Message:", message);
    document.getElementById("form-button").disabled=true;
} 
formElement.addEventListener("submit", formLogger);
