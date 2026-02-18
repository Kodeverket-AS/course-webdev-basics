

// Oppgave 1
// Data typer

// Number 
let num = 1;

// BigInt
let bigI = 1234567890123456789012345n;

// String 
let str = "Hello World";

// Boolean 
let x = true;
let y = false;

// Undefined 
let a;
let j;

// Null
let k = null;

// Symbol
const d = Symbol();

// Object 
const person = {firstName: "jhon", lastName:"Doe"};

// Oppgave 2
function foo(p, ...para){
console.log(p, ...para)
}

const baa = (b, ...para) => {
    console.log(b, ...para)
};

// foo(num, bigI, str, x, y, a, j, k, d, person);
// baa(num, bigI, str, x, y, a, j, k, d, person);


// Oppgave 3

const start = 1;
const lengthX = 99;

const myAr = Array.from({length: lengthX}, (_, i) => start + i)

function myN(n){
  let string = n.toString()

  if (n <= 1){
    return string;
  }
  if (n === 2){
    return "Prime"
  }
  if(n % 2 === 0){
    return string;
  }

  for (let i = 3; i * i <= n; i += 2){
    if (n % i === 0){
        return string;
    }
  }
  return "Prime"
}

let re = myAr.map(myN)

// console.log(re);

//! Oppgave 4

const formElement = document.getElementById("submit-form");
const btn = document.getElementById("btn");

let myBtn = btn.disabled = false;

formElement.addEventListener("submit", formLogger);

function formLogger(e){
e.preventDefault();

const formData = new FormData(formElement);
const fn = formData.get("first-name");
const em = formData.get("email");

console.log(fn);
console.log(em);

myBtn = btn.disabled = true;
setTimeout(() => {myBtn = btn.disabled = false}, 3000)
}


//! Oppgave 5
import {fetchData} from "./api.js";

async function ranImg() {
  const data = await fetchData();

  if (data){
  const newImg = document.createElement("img");
  newImg.src = data.message;

  newImg.style.width = "75%";
  newImg.style.maxWidth = "332px";
  newImg.style.height = "auto";
  newImg.style.margin = "0";
  newImg.style.borderRadius = "2px";

  const parentDiv = document.getElementById("ramdomImgContainer");
  parentDiv.insertAdjacentElement("beforeend", newImg);

  } else {
    const backUp = document.createElement("img");
    backUp.src = "../public/vite.svg"

    backUp.style.width = "75%";
    backUp.style.maxWidth = "332px";
    backUp.style.height = "auto";
    backUp.style.margin = "0";
    backUp.style.borderRadius = "2px";

    const parentDiv = document.getElementById("ramdomImgContainer");
    parentDiv.insertAdjacentElement("beforeend", backUp);
  }
}

ranImg()

