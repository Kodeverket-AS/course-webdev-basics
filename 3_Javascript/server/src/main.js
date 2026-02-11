let number=67;
let string="Hello World";
let bigInt=1234567890123456789012345678901234567890n;
let boolean=true;
let nullValue=null;
let undefinedValue=undefined;
let symbol=Symbol("unique");
let object={name:"Ola", age:25};

function myFunction(firstArg,...restArgs){
    console.log(firstArg+restArgs);
}

const arrowFunction=(firstarrowArgs,...restarrowArgs)=>{
    console.log(firstarrowArgs+restarrowArgs);
}

myFunction(number,string,bigInt,boolean,nullValue,undefinedValue,symbol,object);