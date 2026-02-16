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


function foo(p, ...para){
console.log(p, ...para)
}

const baa = (b, ...para) => {
    console.log(b, ...para)
};

foo(num, bigI, str, x, y, a, j, k, d, person);
baa(num, bigI, str, x, y, a, j, k, d, person);