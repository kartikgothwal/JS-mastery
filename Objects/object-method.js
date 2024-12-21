// Object.create();
const Object1 = Object.create(null);
Object1.name ="kartik"
//  console.log("🚀 ~ Object1:", Object1)
 

// Object.assign();
const Object2 = Object.assign(Object1); // its like doing Object2=Object1
Object2.age=23
// console.log("🚀 ~ Object2:", Object2)
 

// Object.keys();
const Object3 = Object.keys(Object1);
//  console.log("🚀 ~ Object3:", Object3)
 

// Object.values();
const Object4 = Object.values(Object1);
//  console.log("🚀 ~ Object4:", Object4)


// Object.values();
const Object5 = Object.entries(Object1);
for(let [key, values] of Object5){
    // console.log(key,values)
}
  

// Object.hasOwn();
const Object6 = Object.hasOwn(Object1,'name' );
//  console.log("🚀 ~ Object6:", Object6)
  

// Object.hasOwn();
const Object7 = {
    country:"India"
}
// console.log(Object7.hasOwnProperty("country"))
 

// Object.isExtensible();
//  console.log(Object.isExtensible(Object7));
 

//deleting a property in a Object
const Object8={
    name:"kartik",
    age:203,
    game:"trade"
}
delete Object8.age;
const {game,...rest } = Object8
// console.log("🚀 ~ rest:", rest)

 
//Object.seal=> cannot add a new property or delete but can update the existing property
const randomObject = { 
    name: "Rubber Duck", 
    color: "Yellow",
    material: "Rubber", 
    use: "Bath Toy"
}
Object.seal(randomObject)
delete randomObject.use
randomObject.name ="Donald duck"
 
 
// Object.freeze(randomObject) //cant do anything with the object add update or delete only read-only
const randomObject2 = { 
    name: "Vintage Compass",
    material: "Brass", 
    use: "Navigation Tool", 
    origin: "18th Century"
}
Object.freeze(randomObject2)
delete randomObject2.use  
console.log("🚀 ~ randomObject2:", randomObject2)
