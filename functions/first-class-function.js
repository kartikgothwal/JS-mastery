// function declaration aka function statement
function sayHello() {
    console.log('Hello');
}

// function expression
const sayHello2 = function(){
    console.log('Hello2');
}

//named function expression
const sayHello22 = function xyz(){
    console.log('Hello2');
}
//difference between function declaration and function expression
// function declaration can be called before it is defined -- hoisting
// function expression cannot be called before it is defined -- hoisting

// arrow function aka fat arrow function aka lambda function
const sayHello3 = ()=>{
    console.log('Hello3');
}

//first class function 
// the ability of a function to be used as value or passed as argument to another function or get returned from another function
function sayHello4(){
    return function(){
        console.log('Hello4');
    }
}

function sayHello5(callback){
    callback();
}

sayHello5(sayHello3)


//anonymous function
(function (){
    console.log('Hello');
})();