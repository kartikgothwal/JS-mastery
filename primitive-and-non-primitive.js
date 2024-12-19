// Primitive Data Types and Non Primitive

// Difference between
// Link- https://excalidraw.com/#json=5qVwAiuSbm0OHYG8RXUk0,uzLF5tfc0J90azHLmnoeOw

//Primitive
// 1. Null
let nullNum = null;

// 2.Number
let num = 123;

// 3. Boolean
let bool = true;

// 4. BigInt
let bigData = 134202322312232n

// 5. Symbol
const sym1 = Symbol("123");
const sym2 = Symbol("123");
if(sym1==sym2){
    console.log(true)
}else{
    console.log(false)
}

// 6. string
const str = "hello world"

// 7. Undefined
let isUndefined;

//Non Primitive

// 1.Objects
const obj {
    name:"kartik"
}

// 2. functions
const getData= function (){
    console.log("getData")
}

// 3. Array
const arr =[1,2,3,4,4,5]
