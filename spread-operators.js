let myArray = [1, 2, 3, 4, 5];
const newArray = [ ...myArray]
const obj = {
    name:"kartik",
    age:203,
    address:{
        city:"Indore"
    }
}
const newObj = {...obj};
const newObj2 = JSON.parse(JSON.stringify(obj)); // deep copy

newObj.name="Vishal"
newObj.address.city="mumbai"
 

function sum(){
    let sumVal = 0;
    for(let i=0; i<arguments.length; i++){
        sumVal+=arguments[i]
    }
    return sumVal
}
function args(){
    return [...Array.from(arguments)]
}
console.log(sum(...myArray))
console.log(args(...myArray))