//Create method
const obj1 = Object.create(null)
obj1.name="Hello world";
console.log("🚀 ~ obj1:", obj1)


//Object.assign()
const obj2 = Object.assign(obj1) // and const obj2 = obj1 are same
obj2.name="Hello data";
console.log("🚀 ~ obj2:", obj2)
console.log("🚀 ~ obj1:", obj1)


//Object.entries()
const object1 = {
    a: 'somestring',
    b: 42,
  };        
console.log(Object.entries(object1))  //[["a","somestring"], ["b","42"]]
for(let [key, value] of   Object.entries(object1)){
    console.log(key, value)
}                                                                                                           


//Object.keys()
const object2 = {
  a: 'somestring',
  b: 42,
};  
console.log(Object.keys(object2)) //['a', 'b']


//Object.value();
const object3 = {
  a: 'somestring',
  b: 42,
};  
console.log(Object.values(object3)) //['somestring', 42]


//Object.value();
const object4 = {
  a: 'somestring',
  b: 42,
};  
console.log(Object.hasOwn(object4,'a')) // pass the object as a first arg and 2nd is the property you want to check if present or not


// Object.is() static method determines whether two values are the same value.;
console.log(Object.is('name','name'), "is")
console.log(Object.is({},{}), "is") // it will be falso



// Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).
const object5 = {
  name:"Kartik"
} 
console.log("isExtensible",Object.isExtensible(object5) ) //it is true now
Object.freeze(object5)
console.log("isExtensible",Object.isExtensible(object5) ) //it is false now


// hasOwnProperty
const object6= {
  name:"Kartik"
} 
console.log(object6.hasOwnProperty("name"), 'hasOwnProperty')