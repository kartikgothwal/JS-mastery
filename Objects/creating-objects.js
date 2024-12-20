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
const obj4 = Object.create({});
console.log("obj4",obj4)

//using a factory function
function factoryFunction(){
    return {
        name:"kartik"
    }
}
const obj = factoryFunction()
console.log(obj, "factory objects")

//using object assign method
const objAssign1 = {
    a:1,
    b:2
}
const objAssign2 = {
    c:3,
    d:4
}
const finalObject = Object.assign(objAssign1,objAssign2)
console.log(finalObject, "finalObject objects")
