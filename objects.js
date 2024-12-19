// Link- https://excalidraw.com/#json=Bf4fAFeKd1-21V-oj3xkX,hao9q0j-fjlZHqRf52fSiA
const obj1 = {
    name:"kartik"
}

//using new keyword
const obj2 = new Object({name:"Kartik"})

//using a constructor function
function User(name){
    this.name=name;
    return this;
}
const obj3 = new User("kartik")

//using a create function
const obj4 = Object.create(person);
console.log("obj4",obj4)