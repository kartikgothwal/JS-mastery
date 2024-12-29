//Arrow function also called the function expression because when you assign a function to a variable thehy become function expression

// Arrow function are the more consize way to write a function 

// they are also called arrow function expression

// The common difference between the normal tradition function and arrow function is in case of hoisting, accessing the arrow function before it is declared will give an error 

// arrowFunction() ReferenceError: Cannot access 'arrowFunction' before initialization

const arrowFunction = (a,b)=>{
    return a+b
}
const arrowFunction2 = (a,b)=>a*b;

const arrowFunction3 = (a,b)=>a-b;

const arrowFunction4 = (a)=>a**a;


const arrowFunction5 = (a)=> (a + a**3); /// for grouping them you can use curly brackets



