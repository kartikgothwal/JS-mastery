//arguments is a keyword which is accessible inside the tradition function and is not a array which has access to the arugument passed inside the array like structure
function test(...restParameters){
    console.log("🚀 ~ test ~ restParameters:", restParameters)
    const arr = Array.from(arguments)
    let sum=0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i]
    }
    console.log("🚀 ~ test ~ sum:", sum)
}
 test(1,2,3)


 // As arguments have been discontinued so inside the arrow function it cant be accessible but you can use restParameters
const arrowFunction = (...restParameters) => {
    console.log("🚀 ~ arrowFunction ~ restParameters:", restParameters)
     
}
arrowFunction(1,2,4,4)